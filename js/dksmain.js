function dksC(){
this.LabelCounter = 0;

}

dksC.prototype.init = function(){
	this.setEvents();
}
dksC.prototype.setEvents = function(){
	var t = this;
	$('.suggestion').click(function(){
		$('#comments').slideToggle(200);
		return false;
	});
	t.setSubmitCapture('commentform_main');
	t.setReplyMethods();
	t.parseCharCounts();
}
dksC.prototype.showLoading = function(obj){
	var pos = obj.offset();
	var height = obj.outerHeight(true);
	var width = obj.outerWidth(true);
	var newdiv = $('<div class="preloDel" style="display:block;position:absolute;top:'+(pos.top-10)+'px;left:'+(pos.left-20)+'px;width:'+(width+40)+'px;height:'+(height+30)+'px;background:#000;opacity:.5;text-align:center;line-height:'+(height+40)+'px;"><img src="/darksouls/img/1.gif" alt="loading" style="vertical-align:middle;" /></div>');
	$('body').append(newdiv);
}
dksC.prototype.setSubmitCapture = function(ids){
	var t = this;
	$('#'+ids).submit(function(){
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
					$('#comments').slideToggle(200);
					$('textarea').val('');
					$('#thanks').fadeIn(200,function(){
						setTimeout(function(){$('#thanks').fadeOut(200);},5000);
					});
				} else {
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
		$('#comments').slideToggle(200);
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
		dat += '<div class="reply-icon"><img src="img/comments-icon2.png" alt="Comment By '+data.user+'" /></div><div class="reply-content"><div class="reply-details">';
		dat += (parseInt(data.acc) >= 0 ? '<a href="/darksouls/share?uid='+data.user+'" class="userclass'+data.acc+'">'+data.user+'</a>' : data.user) + ' says... <span class="reply-date"> '+data.date+ '</span>';
		dat += '</div><div class="reply-text"><p>'+data.comment.replace(/\\"/g, '"')+'<span class="reply-postback"><a href="#rep'+data.newpost+'" class="cReply">Reply</a></span></p></div>';
		dat += '</div></div>';
	if(!hasReplies && parseInt(data.replyto) != 0){
		dat += '</div>';
	}
	if(!hasReplies && parseInt(data.replyto) != 0)
		tar.append($(dat));
	else if(parseInt(data.replyto) == 0)
		$('.reply-section').prepend($(dat));
	else
		tar.find('.reply-in').append($(dat));
}
dksC.prototype.createCommentForm = function(ids,obj){
	var t = this;
	var i = ids.replace('#','');
	if($('#com'+i).length == 0){
		$('#comMain').prop('id','com'+i);
		$('#commentform_main').prop('id','commentform'+i);
		var clone = $('#com'+i).clone();
		clone.find('.limitlbl').remove();
		clone.find('[limiterid]').removeAttr('limiterid');
		clone.find('[name="replyto"]').val(i.replace('rep',''));
		$('#com'+i).prop('id','comMain');
		$('#commentform'+i).prop('id','commentform_main');
		obj.parent().parent().parent().parent().append(clone);
		$('#com'+i).css({'border-top':'dotted 1px #333','width':'auto','display':'none'});
		$('#com'+i+' h3').text('Making a reply...');
		$('#com'+i).fadeIn(200);
		t.setSubmitCapture('commentform'+i);
		t.parseCharCounts();
		//console.log(i,t,$('#commentform'+i)[0].getElementsByTagName('textarea'));
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
	(new dksC()).init();
});