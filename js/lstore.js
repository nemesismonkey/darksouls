$(document).ready(function(){
	$('.login').click(function(){
		$(this).addClass('hover');
		$('.login_form').addClass('shown');
		if(!$('.login').hasClass('intent')){
			$('.login').addClass('intent');
			$('.login,.login_form').click(function(event){
				event.stopPropagation();
				})
				;} else if($('.login').hasClass('intent')){
					$('.login').removeClass('hover intent');
					$('.login_form').removeClass('shown');
					$(document).unbind('click');
					}
					$(document).click(function(){
						$('.login').removeClass('hover intent');
						$('.login_form').removeClass('shown');
						$(document).unbind('click');
						});
						return false;
						});
		function getBuildList(pass){
		var list = $.totalStorage.getAll();
		var nlist = [];
		console.log(list)
		for(var i =0,len=list.length;i<len;i++){
			if(list[i].key == 'excluded'){
				list.splice(i,1);
				len = len - 1;
			}
		}
		list.sort(function(a,b){
			return b.value.daten-a.value.daten;
		});
		var str = '';
		var i = 0;
		for (i; i<list.length; i++){
			var key = list[i].key;
			var dat = $.totalStorage(key);
				str +=  '<div class="buildrow clearfix"><div class="buildtitle bold"><a href="/darksouls/?b='+dat.b6 + '">' + dat.til + ' </a></div><div class="buildauth">'+ (!dat.u ? '<a href="#'+key+'" class="uploadkey">Upload</a>' : '<span class="faded">Uploaded</span>') + ' <a href="#'+key+'" class="deletekey red">Delete</a> </div><div class="builddate">'+timeConverter(dat.daten)+'</div><div class="clear"></div></div>'; 
				//<a href="/darksouls/?b='+dat.b6 + '&edit=true&eid='+key+'" class="green">Edit</a>
		}
		if(pass && i == 0 || i == 0){
			$('#local_rows').html('<div class="center"><h2>No builds here...</h2></div>');
		} else
		$('#local_rows').html(str);
		attach();
	}
	function timeConverter(UNIX_timestamp){
		var a = new Date(UNIX_timestamp*1000);
		var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		 var year = a.getFullYear();
		 var month = months[a.getMonth()];
		 var date = a.getDate();
		// var hour = a.getHours();
		// var min = a.getMinutes();
		// var sec = a.getSeconds();
		 var time = month + ' ' + date + ', ' + year;
		 return time;
	 }
	 function attach(){
	 $('.deletekey').click(function(){
		var t = $(this);
		var hash = t.attr('href');
		var key = hash.replace('#','');
		if($.totalStorage.deleteItem(key)){
			$(this).parent().parent().fadeOut(300,function(){$(this).remove();});
		}
		getBuildList(true);
		return false;
	 });
	$('.uploadkey').click(function(){
		var t = $(this);
		var hash = t.attr('href');
		var key = hash.replace('#','');
		var dat = $.totalStorage(key);
		$('#saveTitle').val(dat.til);
		$('#saveAuthor').val(dat.aut);
		(dat.publicn = 1 ? $('#savePublic').attr('checked',true) : $('#savePublic').attr('checked',false));
		$('#savelist').val(dat.newlist);
		$('#sevdes').val(dat.desc)
		$('#savedia').data({'key':key,'target':t});
		$('#savedia').fadeIn(300,function(){
			setTimeout(function(){
				$('.texover').click(function() {
					$('#savedia,.texover').fadeOut(300);
					$('.texover').unbind('click');
				});
				$('.tclos,#fcancel').click(function(){
					$('#savedia,.texover').fadeOut(300);
					$('.tclos,#fcancel').unbind('click');
					$('.texover').unbind('click');
				});
			},1);
		});
		$('.texover').fadeIn(300);
		return false;
	});
		$('#fsave').click(function(){
			$(this).attr('disabled',true);
			var sTitle = $('#saveTitle').val();
			var sAuthor = $('#saveAuthor').val();
			var sHash = hSele = sNlist = false;
			if($('#saveAuthorH').length){
				sHash = $('#saveAuthorH').val();
				hSele = $('#lSelec').val();
				sNlist = $('#savelist').val();
			}
				if(sTitle.length < 4){
					$('#saveTitle').addClass('herr');
					$('#fsave').attr('disabled',false);
					return false;
				} else {
					$('#saveTitle').removeClass('herr');
				}
				if(sAuthor.length < 4){
					$('#saveAuthor').addClass('herr');
					$('#fsave').attr('disabled',false);
					return false;
				} else {
					$('#saveAuthor').removeClass('herr');
				}
				if(sNlist.length < 4 && sNlist){
					$('#savelist').addClass('herr');
					$('#fsave').attr('disabled',false);
					return false;
				} else {
					$('#savelist').removeClass('herr');
					if($('#savelist').attr('placeholder') == sNlist && sNlist)
						sNlist = '';
					else
						sNlist = sNlist;
				}
				
			if(sTitle.length >= 4 && sAuthor.length >= 4){
				$('.datbox').html('<center><span class="small faded muyj">Uploading build</span><img src="img/loading.gif" width="208" height="13" /></center>');
				var key = $('#savedia').data('key');
				var tar = $('#savedia').data('target');
				var dat = $.totalStorage(key);
				dat.aut = sAuthor, dat.til = sTitle, dat.publicn = (($('#savePublic').is(':checked')) ? 1 : 0), dat.desc = $('#sevdes').val();
					$.ajax({
						type: 'POST',
						url: 'upload.php',
						data: dat,
						success: function(data){
							if(parseInt(data.a) > 0 && !isNaN(data.a)){
								$('#fsave').attr('disabled',false);
								$('.datbox').html(((data.b) ? '<span class="small red">'+data.b + '</span>' : '<strong>Upload Successful</strong><br><span class="small blue">Your save link:') + '<br><input type="text" style="width:100%;font-size:13px;float:none;" value="http://'+location.hostname + location.pathname.replace('/local','') + '?c=' + data.a + '" />').find('input').click(function(){this.select()}).mouseup(function(e){e.preventDefault()}).keypress(function(e){var key = e.which;if(key == 13){e.preventDefault();return false;}}).click();
								dat.u = true;
								tar.replaceWith('<span class="faded">Uploaded</span>');
								$.totalStorage(key,dat)
								if(sNlist.length > 4 && sNlist && data.c){
									var opthtml = $('#lSelec').html();
									$('#lSelec').html(opthtml + '<option value="'+data.c+':::::'+data.d+'">'+data.d+'</option>')
									$('#savelist').val('').focus().blur();
								}
							}
							else if(parseInt(data.a) == 0 && !isNaN(data.a)){
								$('.datbox').html('Could not upload to database.');
								$('#fsave').attr('disabled',false);
							} else {
								$('.datbox').html(data.a);
								$('#fsave').attr('disabled',false);
							}
						},
						cache : false,
						dataType : 'json'
					});
			} else {
				$('#fsave').attr('disabled',false);
			}
	 });
	 }
	 /*
If you want to use this script, please keep the original author in this header!

Purpose:	Script for applying maxlengths to textareas and monitoring their character lengths.
Author: 	James O'Cull
Date: 		08/14/08

To use, simply apply a maxlenth value to a textarea.
If you need it to prevent typing past a certain point, add lengthcut="true"

Example:
<textarea maxlength="1000" lengthcut="true"></textarea>

If you add a new text area with javascript, simply call parseCharCounts() again find the new textarea(s) and label them!
*/
	var LabelCounter = 0;

	function parseCharCounts()
	{
		//Get Everything...
		var elements = document.getElementsByTagName('textarea');
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
				newlabel.id = 'limitlbl_' + LabelCounter;
				newlabel.setAttribute('class','faded small');
				newlabel.style.display = 'block'; //Make it block so it sits nicely.
				newlabel.innerHTML = "Updating...";
				
				//Attach limiter to our textarea
				element.setAttribute('limiterid', newlabel.id);
				element.onkeyup = function(){ displayCharCounts(this); };
				
				//Append element
				element.parentNode.insertBefore(newlabel, element);
				
				//Force the update now!
				displayCharCounts(element);
			}
			
			//Push up the number
			LabelCounter++;
		}
	}

	function displayCharCounts(element)
	{
		var limitLabel = document.getElementById(element.getAttribute('limiterid'));
		var maxlength = element.getAttribute('maxlength');
		var enforceLength = false;
		if(element.getAttribute('lengthcut') != null && element.getAttribute('lengthcut').toLowerCase() == 'true')
		{
			enforceLength = true;
		}
		
		//Replace \r\n with \n then replace \n with \r\n
		//Can't replace \n with \r\n directly because \r\n will be come \r\r\n

		//We do this because different browsers and servers handle new lines differently.
		//Internet Explorer and Opera say a new line is \r\n
		//Firefox and Safari say a new line is just a \n
		//ASP.NET seems to convert any plain \n characters to \r\n, which leads to counting issues
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
			limitLabel.setAttribute('class','faded small blue');
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

	//Go find our textareas with maxlengths and handle them when we load!
	parseCharCounts();
getBuildList()
});