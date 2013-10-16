	/* 
	 $('.votearrows').click(function(){
		var voting = ($(this).hasClass('vup')) ? 'up' : 'down';
		var tid = $(this).prop('title');
		$.get('votes.php',{
			'vtyp' : voting,
			'id' : tid
		},function(data){
			var tota = $('.kvot.n'+tid);
			var votes = $('.nvot.n'+tid);
			var totaval = parseInt(tota.text());
			var totvotes = parseInt(votes.text()) + 1;
			if(data == 'up'){
				tota.text(totaval+5);
				votes.text(totvotes);
			} else if(data == 'down'){
				tota.text(totaval-3);
				votes.text(totvotes);
			} else {
				var targ = $('.tvut.n'+tid);
				targ.removeClass('hidden').css('display','inline').fadeOut(2000,function(){targ.addClass('hidden')});
			}
		});
	});
	*/