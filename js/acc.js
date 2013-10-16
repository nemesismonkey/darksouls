$(document).ready(function(){
		setCook();
		$('.login').click(function(){
			$(this).addClass('hover');
			$('.login_form').addClass('shown');
			if(!$('.login').hasClass('intent')){
				$('.login').addClass('intent');
				$('.login,.login_form').click(function(event){
					event.stopPropagation();
				});
			} else if($('.login').hasClass('intent')){
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
		$('#slinks').click(function(){
			this.select();
		}).mouseup(function(e){
			e.preventDefault();
		});
		$('#fsave').click(function(){
			$(this).prop('disabled','disabled');
			var val = $('#saveTitle').val();
			if(val.length > 3){
				$.post('/darksouls/manage',{
					'mtype' : 'newlist',
					'ntitle' : val
				}, function(data){
					$('#fsave').prop('disabled',false);
					setTimeout(function(){location.reload();},10);
				});
			} else {
				$('#savedia .datbox').html('<span class="small red">Error uploading: Must be at least 4 characters long</span>');
				$(this).prop('disabled',false);
			}
		});
		$('#frename').click(function(){
			$(this).prop('disabled','disabled');
			var val = $('#renameTitle').val();
			var har = $('#renamh').val();
			if(val.length > 3){
				$.post('/darksouls/manage',{
					'mtype' : 'renamelist',
					'ntitle' : val,
					'nhas' : har
				}, function(data){
					$('#frename').prop('disabled',false);
					setTimeout(function(){location.reload();},10);
				});
			} else {
				$('#editdia .datbox').html('<span class="small red">Error uploading: Must be at least 4 characters long</span>');
				$(this).removeProp('disabled');
			}
		});
		$('#dellist').click(function(){
			$(this).prop('disabled','disabled');
			var val = $('#delTitle').val();
			var har = $('#delnamh').val();
			if(val.length > 3){
				$.post('/darksouls/manage',{
					'mtype' : 'deletelist',
					'ntitle' : val,
					'nhas' : har
				}, function(data){
					$('#frename').prop('disabled',false);
					setTimeout(function(){window.location = '../darksouls/account?action=lists&list=all';},10);
				});
			} else {
				$('#deletedia .datbox').html('<span class="small red">Error uploading: Must be at least 4 characters long</span>');
				$(this).prop('disabled',false);
			}
		});
		$('#checktogle').mousedown(function(){
			if($(this).hasClass('checked')){
				$(':checkbox').not('#checktogle').prop('checked',false);
				$(this).removeClass('checked')
			} else {
				$(':checkbox').not('#checktogle').prop('checked',true);
				$(this).addClass('checked')
			}
		}).click(function(e){e.preventDefault}).click(function(e){e.preventDefault});
		$('#delete,#hide,#unhide,#move').mousedown(function(){
			var mtype = $(this).prop('id');
			var dat = $('input:checked').not('#checktogle');
			var gr = '';
			for(i=0;i<dat.length;i++){
				gr += dat[i].getAttribute('value') + ';';
			}
			if(gr.length){
				$.post('/darksouls/manage',{
					'mtype' : mtype,
					'builds' : gr,
					'toloc' : $('#movt').val(),
					'listn' : $('#movt').find('option:selected').text()
				}, function(data){
					if(mtype == 'hide' || mtype == 'unhide'){
						location.reload();
					} else if($('h2').text() != 'My Lists - Viewing List "All Builds"'){
						for(i=0;i<dat.length;i++){
							$(dat[i]).parent().parent().fadeOut(500,function(){
								$(this).remove();
								if($('.buildList2:last .buildrow').length == 0){
									$('.buildList2:last').html('<div class="center"><h2>No builds added yet</h2><br><br></div>');
								}
							});
						}
					} else {
						var n = $('#movt option:selected').text();
						for(i=0;i<dat.length;i++){
							$(dat[i]).parent().find('span').text('('+n+')');
							dat[i].checked = false;
						}
					}
				});
			}
		});
		$('#makenewlist').click(function(){
			$('#savedia').fadeIn(300,function(){
				setTimeout(function(){
					$('.texover').click(function() {
						$('#savedia,.texover').fadeOut(300);
						$('.texover').unbind('click');
					});
					$('.tclos,.cancel').click(function(){
						$('#savedia,.texover').fadeOut(300);
						$('.tclos,.cancel').unbind('click');
						$('.texover').unbind('click');
					});
				},1);
			});
			$('.texover').fadeIn(300);
			return false;
		});
		$('#renamelist').click(function(){
			$('#editdia').fadeIn(300,function(){
				setTimeout(function(){
					$('.texover').click(function() {
						$('#editdia,.texover').fadeOut(300);
						$('.texover').unbind('click');
					});
					$('.tclos,.cancel').click(function(){
						$('#editdia,.texover').fadeOut(300);
						$('.tclos,.cancel').unbind('click');
						$('.texover').unbind('click');
					});
				},1);
			});
			$('.texover').fadeIn(300);
			return false;
		});
		$('#deletelist').click(function(){
			$('#deletedia').fadeIn(300,function(){
				setTimeout(function(){
					$('.texover').click(function() {
						$('#deletedia,.texover').fadeOut(300);
						$('.texover').unbind('click');
					});
					$('.tclos,.cancel').click(function(){
						$('#deletedia,.texover').fadeOut(300);
						$('.tclos,.cancel').unbind('click');
						$('.texover').unbind('click');
					});
				},1);
			});
			$('.texover').fadeIn(300);
			return false;
		});
		$('.animate').click(function(){
			if($(this).val() == 'on'){
				jQuery.fx.off = false;
			} else {
				jQuery.fx.off = true;
			}
			$.cookie("animate", null);
			$.cookie("animate", $(this).val(),{expires : 365, path: '/'});
		});
		$('.autoup').click(function(){
			$.cookie("autoup", null);
			$.cookie("autoup", $(this).val(),{expires : 365, path: '/'});
		});
		$('.pathsel').click(function(){
			$.cookie("path", null);
			$.cookie("path", $(this).val(),{expires : 365, path: '/'});
		});
		$('.chssel').click(function(){
			$.cookie("chosen", null);
			$.cookie("chosen", $(this).val(),{expires : 365, path: '/'});
		});
	  });
	   $(':checkbox').removeProp('checked');
	  function setCook(){
		if($.cookie("animate") == 'off'){
			jQuery.fx.off = true;
			$('#soff').attr('checked','checked');
		} else {
			jQuery.fx.off = false;
		}
		if($.cookie("autoup") == 'off'){
			$('#asoff').attr('checked','checked');
		}
		if($.cookie("path") == 'off'){
			$('#psoff').attr('checked','checked');
		}
		if($.cookie("chosen") == 'off'){
			$('#chsoff').attr('checked',true);
		}
	}