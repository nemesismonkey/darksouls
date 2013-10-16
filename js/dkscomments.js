function dksC(){
this.LabelCounter = 0;

}

dksC.prototype.init = function(){
	this.setEvents();
}
dksC.prototype.setEvents = function(){
	var t = this;
	$('#showComment').click(function(){
		$('#comMain').fadeToggle(200);
		return false;
	});
	$('.reply-section').on('click','.flagpost',function(event){
		event.preventDefault();
		var t = this;
		var post = t.getAttribute('data-post');
		$.ajax({
			type: "GET",
			url: '/darksouls/flagPost.php',
			data: {postid : post},
			success: function(data){
				if(data == '1') {
					var nC = document.createElement('span');
					nC.className = 'red';
					nC.innerHTML = 'Flagged';
					t.parentNode.replaceChild(nC,t);
				}
			},
			dataType: 'html'
		});
		return false;
	});
	t.setSubmitCapture('commentform_main');
	t.setReplyMethods();
}
dksC.prototype.showLoading = function(obj){
	var pos = obj.offset();
	var height = obj.outerHeight(true);
	var width = obj.outerWidth(true);
	var newdiv = $('<div class="preloDel" style="display:block;position:absolute;top:'+(pos.top-20)+'px;left:'+(pos.left-20)+'px;width:'+(width+40)+'px;height:'+(height+40)+'px;background:#000;opacity:.5;text-align:center;line-height:'+(height+40)+'px;"><img src="img/1.gif" alt="loading" style="vertical-align:middle;" /></div>');
	$('body').append(newdiv);
}
dksC.prototype.setSubmitCapture = function(ids){
	var t = this;
	$('#'+ids).submit(function(){
		var b = $(this);
		var g = this;
		$.ajax({
			type: "POST",
			url: '/darksouls/post',
			data: $('#'+ids).serialize(),
			beforeSend: function(){
				$('.errr').remove();
				t.showLoading($('#'+ids));
			},
			success: function(data){
				if(data.error.length == 0){
					t.createComment(data);
					$('.respond').hide();
					$('textarea').val('');
					window.location = '#com'+data.newpost;
					t.setReplyMethods($('#com'+data.newpost).find('.cReply'));
					$('#comNumi').text(data.newc);
				} else {
					//t.displayErrors(data);
					window.location = '#'+g.id;

					$('#'+g.id).prepend(data.error);
				}
				$('.preloDel').remove();
			},
			dataType: 'json'
		});
		return false;
	});
	$('#'+ids).find('input[name="cancel"]').click(function(e){
		e.preventDefault();
		$('#'+ids).parent().fadeToggle(200);
		return false;
	});
}
dksC.prototype.createComment = function(data){
	var tar = (parseInt(data.replyto) != 0 ? $('#com'+data.replyto) : false);
	var hasReplies = (tar.length > 0 && tar ? tar.find('.reply-to').length : false);
	var dat = '';
	var rept = 'reply';
	if(!hasReplies && parseInt(data.replyto) != 0){
		dat += '<div class="reply-in clearfix">';
		rept = 'reply-to';
	}else if(hasReplies)
		rept = 'reply-to';
		
		dat += '<div class="'+rept+' clearfix" id="com'+data.newpost+'">';
		dat += '<div class="reply-icon"><img src="'+data.image+'" alt="Comment By '+data.user+'" /></div><div class="reply-content clearfix"><div class="reply-details">';
		dat += (parseInt(data.acc) >= 0 ? '<a href="/darksouls/share?uid='+data.user+'" class="userclass'+data.acc+'">'+data.user+'</a>' : data.user) + ' says... <span class="reply-date"> '+data.date+ '</span>';
		dat += '</div><div class="reply-text"><p>'+data.comment.replace(/\\"/g, '"')+'<span class="reply-postback"><a href="#rep'+data.newpost+'" class="cReply">Reply</a> - <a href="#flag'+data.newpost+'" class="flagpost" data-post="'+data.newpost+'">Flag Post</a></span></p></div>';
		dat += '</div></div>';
	if(!hasReplies && parseInt(data.replyto) != 0){
		dat += '</div>';
	}
	if(parseInt(data.replyto) != 0 && tar.find('.reply-in').length == 0)
		tar.append($(dat));
	else if(parseInt(data.replyto) == 0)
		$('.reply-section').prepend($(dat));
	
	else
		tar.find('.reply-in').append($(dat));
}
dksC.prototype.createCommentForm = function(ids,obj){
	var t = this;
	var i = ids.replace('#','');
	var pid = i.replace('rep','');
	if($('#com'+i).length == 0){
		
		var $g = $('#commentform_main');
		var username = $('#comment_author_main').prop('value');
		var useremail = ($g.find('input[name="email"]').prop('type') == 'hidden' ? $g.find('input[name="email"]').prop('value') : false);
		var postback = $g.find('input[name="postBack"]').prop('value');
		var buildid = $g.find('input[name="postid"]').prop('value');
		var postid = pid;
		    
		
		var str = [];
			str.push('<div id="com{i}" style="border-top: 1px dotted rgb(51, 51, 51); width: auto;" class="respond">');

			str.push('<h3>Making a reply...</h3>');

			str.push('<form id="commentform{i}" method="post" action="comment_post.php">');
			if(!username && !useremail){
				//<!-- diff -->
				str.push('<label class="required">Username</label>');
				str.push('<input type="text" required="required" value="Anonymous" name="comment_author">');
				
				str.push('<label class="required">');
				str.push('	Your email <span class="small faded">(will not be shown)</span>');
				str.push('</label>');
			
				str.push('<input type="email" placeholder="Required if you want to recieve reply notifications" value="" class="email" name="email">');			
				//<!-- diff -->
			} else 	{
				//<!-- diff -->
				str.push('<label class="required" for="comment_author_main">Username/Email</label>');
				str.push('<div class="blue">{username}');
				str.push('	<br>');
				str.push('	<span class="reply-email">{useremail}</span>');
				str.push('	<span class="small faded">(will not be shown)</span>');
				str.push('	<input type="hidden" value="{username}" name="comment_author">');
				str.push('	<input type="hidden" value="{useremail}" id="email_main" name="email">');
				str.push('</div>');	
				//<!-- diff -->
			}
			str.push('<input type="hidden" name="postBack" value="{postback}">');
			str.push('<input type="hidden" name="postid" value="{buildid}">');
			
			str.push('<input type="hidden" name="replyto" value="{postid}">');
			str.push('<label class="required">Your message</label>');
			
			str.push('<textarea maxlength="2000" required="required" class="comment" name="comment"></textarea>');
			
			str.push('<input type="submit" value="Submit comment" name="submit"> ');
			str.push('<input type="submit" value="Cancel" name="cancel"> ');
			
			str.push('<span style="float:right"> ');
			str.push('	<input type="checkbox" style="vertical-align:middle" id="recieveNoti{i}" name="recieveNoti" value="1"> ');
			str.push('	<label>Receive Notifications</label>');
			str.push('</span>');
			
			str.push(' </form>');
			str.push('<hr style="border:none;border-bottom:dotted 1px #333">');
			str.push('</div>');
			
		str = str.join("");
		
		str = str.replace(/\{username\}/g,username).replace(/\{useremail\}/g,useremail).replace(/\{postback\}/g,postback).replace(/\{buildid\}/g,buildid).replace(/\{postid\}/g,postid).replace(/\{i\}/g,i);
		 
		obj.parent().parent().parent().parent().append(str);
		
		t.setSubmitCapture('commentform'+i);
		t.parseCharCounts();
		
		
		
		return false;
		

	} else {
		$('#com'+i).fadeIn(200);
	}
}
dksC.prototype.setReplyMethods = function(obj){
	var t = this;
	var ob = obj || $('.cReply');
	ob.click(function(){
		var i = $(this);
		var sid = this.getAttribute('href');
		t.createCommentForm(sid,i);
		return false;
	});
}
dksC.prototype.parseCharCounts = function(texare){
	var evh = this;
	//Get Everything...
	var elements = texare || document.getElementsByTagName('textarea');
	var element = null;
	var maxlength = 9;
	var newlabel = null;
	
	for(var i=0; i < elements.length; i++)
	{
		element = elements[i];
		
		if(element.getAttribute('maxlength') != null && element.getAttribute('limiterid') == null)
		{
			maxlength = element.getAttribute('maxlength');
			
			//Create new label
			newlabel = document.createElement('label');
			newlabel.id = 'limitlbl_' + evh.LabelCounter;
			newlabel.setAttribute('class','faded small');
			newlabel.style.display = 'block'; //Make it block so it sits nicely.
			newlabel.innerHTML = "Updating...";
			
			//Attach limiter to our textarea
			element.setAttribute('limiterid', newlabel.id);
			element.onkeyup = function(){ evh.displayCharCounts(this); };
			
			//Append element
			element.parentNode.insertBefore(newlabel, element);
			
			//Force the update now!
			evh.displayCharCounts(element);
		}
		
		//Push up the number
		evh.LabelCounter++;
	}
}

dksC.prototype.displayCharCounts = function(element){
	var evh = this;
	var limitLabel = document.getElementById(element.getAttribute('limiterid'));
	var maxlength = element.getAttribute('maxlength');
	var enforceLength = false;
	if(element.getAttribute('lengthcut') != null && element.getAttribute('lengthcut').toLowerCase() == 'true')
	{
		enforceLength = true;
	}
	
	var value = element.value.replace(/\u000d\u000a/g,'\u000a').replace(/\u000a/g,'\u000d\u000a');
	var currentLength = value.length;
	var remaining = 0;
	
	if(maxlength == null || limitLabel == null)
	{
		return false;
	}
	remaining = maxlength - currentLength;
	
	if(remaining >= 0)
	{
		limitLabel.setAttribute('class','faded small blue limitlbl nocursor');
		limitLabel.innerHTML = remaining + ' character';
		if(remaining != 1)
			limitLabel.innerHTML += 's';
		limitLabel.innerHTML += ' remaining';
	}
	else
	{
		if (enforceLength == true) {
			value = value.substring(0, maxlength);
			element.value = value;
			element.setSelectionRange(maxlength, maxlength);
			limitLabel.setAttribute('class','faded small');
			limitLabel.innerHTML = '0 characters remaining';
		}
		else {
			//Non-negative
			remaining = Math.abs(remaining);
			
			limitLabel.setAttribute('class','faded small');
			limitLabel.innerHTML = 'Over by ' + remaining + ' character';
			if (remaining != 1) 
				limitLabel.innerHTML += 's';
			limitLabel.innerHTML += '!';
		}
	}
}
/* 
*/
$(document).ready(function(){
	var coms = new dksC();
	coms.init();
});