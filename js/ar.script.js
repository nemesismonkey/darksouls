//"use strict";
function dks() {
	this.aae = [];
	this.aaf = [];
	this.aag = [];
	this.aah = [];
	this.aai = [];
	this.eff = [];
	this.excluded = [];
	this.dksdef = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	this.head = '';
	this.chest = '';
	this.hand = '';
	this.feet = '';
	this.rofap = false;
	this.mof = false;
	this.have = false;
	this.weight = 0;
}
dks.prototype.setup = function(){
	$('#cendurance').val('8');
	$('input[name="valtu"]').first().prop('checked',true);
	$('input[name="sortu"]').eq(7).prop('checked',true);
	$('#armorWeightidCus').val('');
	$('.rings2').prop('checked',false);
	this.addEvents();
	this.buildArmorLists();
	this.buildWeaponLists();
	this.applyEn();
	if($.cookie("chosen") != 'off')
		$('.gear').chosen();
}

dks.prototype.addEvents = function(){
	var evha = this;
	$('.fbuil').click(function(){evha.ispohr();});
	$('#aropt,#dfinder').click(function(){
		var tor = ($(this).prop('id') == 'aropt') ? 'a' : 'b';
		if($(this).attr('state') == 't'){
			$('.overlay2').stop(true,true).fadeOut(200);
			evha.toggleAoB(tor,'none');
			$(this).attr('state','p');
		} else {
			$('.overlay2').stop(true,true).fadeIn(200);
			evha.toggleAoB(tor,'block');
			$(this).attr('state','t');
		}
		$('#armor-exclist').css('display','none');
	});
	$('.gear').change(function(){
		var id5 = zz.xy.lh1.find('option:selected').attr('ind'),
		id6 = zz.xy.rh1.find('option:selected').attr('ind'),
		id7 = zz.xy.lh2.find('option:selected').attr('ind'),
		id8 = zz.xy.rh2.find('option:selected').attr('ind');
		//console.log(evha.getWeaponWeight(id5) + evha.getWeaponWeight(id6)+evha.getWeaponWeight(id7)+evha.getWeaponWeight(id8))
		evha.weight = evha.getWeight(id5,id6,id7,id8);
		evha.applyEn();
	});
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


	$('#custom-sort').click(function(){
		if(!$('#custom-sort-pop').is(':visible')) {
			setTimeout(function(){
				$(document).click(function(){
					$(this).unbind('click');
					$('#custom-sort-pop').hide().unbind('click');
				});
			},100);
			$('#custom-sort-pop').click(function(e){
				e.stopPropagation();
			});
			$('#custom-sort-pop').show();
			var pos = $(this).position();
			var toleft = $(this).width();
			var height = $('#custom-sort-pop').outerHeight();
			$('#custom-sort-pop').css({'left':(toleft + pos.left + 36) +'px','top':(pos.top - height + 74)+'px'});
		}
	});
	$('.armor_exb').click(function(){
		$('#armor-exclist').toggle();
		if($('#armor-exclist').css('display') == 'block'){
			if($('#armorlist').html() == ''){
				evha.genExcList();
			}
		}
	});
	$('.minim2,#armorWeightidCus').keydown(function(event) {
		// Allow only backspace and delete
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 190 || event.keyCode == 110 || event.keyCode == 39 || event.keyCode == 37) {
			// if period check to see if there are any already present
			if(event.keyCode == 190 || event.keyCode == 110){
				var val = $(this).val();
				var pat = /\./i;
				// if there are prevent adding more
				if(pat.test(val)){
					event.preventDefault();	
					return false;
				}
			}
		}
		else {
			// Ensure that it is a number and stop the keypress
			if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
				if(event.shiftKey){
					event.preventDefault();	
					return false;
				}
			} else {
				event.preventDefault();	
				return false;
			}
		}
	}).bind("cut copy paste",function(e) {
          e.preventDefault();
		  return false;
      }).click(function(){
		$(this).select();
	});
	$('.up,.down').click(function(e){
		var edit = $(this).attr('uid');
		var target = $('input[uid="'+edit+'"]').not(':disabled');
		if($(this).hasClass('up')){
			evha.changeValUp(target,e);
		}
		if($(this).hasClass('down')){
			evha.changeValDown(target,e);
		}
		evha.applyEn();
		$(this).blur();
	});
	$('input[uid]:not([disabled]):not([readonly])').focus(function(){
		this.select();
		$(this).data('cache',$(this).val());
	}).mouseup(function(e){
		e.preventDefault();
	}).keypress(function(e){
		if(e.which == 13) {
			e.preventDefault();
			$(this).removeClass('blur');
			$(this).blur();
			$(this).addClass('blur');
			$(this).data('cache',$(this).val());
			return false;
		}
	}).blur(function(){
		if(!$(this).hasClass('blur')){
			var newVal = $(this).val();
			if(parseInt(newVal) == 0)
				newVal = 0;
			if($(this).data('cache') != newVal){
				var min = 8;
				if((parseInt(newVal)) >= min && parseInt(newVal)<100 && /[0-9]+/ig.test(newVal) && !/\./ig.test(newVal)){
					evha.applyEn();
				}else {
					$(this).val($(this).data('cache'));
				}
			}
		} else {
			$(this).removeClass('blur')
		}
		return false;
	});
	$('.edita').click(function(){
		evha.createForced($(this), $(this).parent().attr('id'));
	});
	$('.rings2').click(function(){
		if($(this).prop('id') == 'maskof' && $('#maskof').is(':checked')){
			var target = $('#forcedHead .edita');
			target.text('Mask of the Father').data('forced','t-64').removeClass('faded').addClass('blue').parent().find('span.removeme').parent().remove();
			target.parent().append('<span>[<span class="red bold removeme" style="cursor:pointer">x</span>]</span>').find('span.removeme').click(function(){
				target.text('(none)').removeData('forced').removeClass('blue').addClass('faded').parent().find('span.removeme').parent().remove();
				$('#maskof').prop('checked',false);
				evha.applyEn();
			});
		} else if($(this).prop('id') == 'maskof' && $('#forcedHead .edita').text() == 'Mask of the Father'){
			$('#forcedHead .edita').parent().find('span.removeme').click();
		}
		evha.applyEn();
		$(this).blur();
	});
}
dks.prototype.getWeaponObject = function(ind) {
	ind = parseInt(ind);
	if(ind == 0)
		return zz.weapons.fist[0][2];
	else if(ind > 0 && ind <= 61)
		return zz.weapons.normal[ind - 1][2];
	else if(ind > 61 && ind <= 103)
		return zz.weapons.unique[ind - 62][2];
	else if(ind > 103 && ind <= 111)
		return zz.weapons.bows[ind - 104][2];
	else if(ind > 111 && ind <= 130)
		return zz.weapons.magic[ind - 112][2];
	else if(ind > 130 && ind <= 172)
		return zz.weapons.shields[ind - 131][2];
	else 
		return zz.weapons.ptde[ind - 173][2];
}
dks.prototype.getWeight = function(a,b,c,d){
	return this.getWeaponObject(a) + this.getWeaponObject(b) + this.getWeaponObject(c) + this.getWeaponObject(d);
}
dks.prototype.applyEn = function(PASS){
	//this.weight = 0; //parseInt($('#wepWeight').val());

	//var total = this.aaq(zz.bur[index]);
	//var fourth = total/4;
	//var half = total/2;
	
	this.calcWeightBrackets(this.weight,1);
}
dks.prototype.calcWeightBrackets = function(weight,modifier) {
	var burx = this.aaq(zz.bur[$('#cendurance').val()],modifier);
	var weigh1 = ((burx/4) - (weight));
	var light = (weigh1 > 0) ? weigh1 : 0;
	var weigh2 = ((burx/2) - (weight));
	var mid = (weigh2 > 0) ? weigh2 : 0;
	var weigh3 = (burx - (weight));
	var fat = (weigh3 > 0) ? weigh3 : 0;
	$('#armorWeightidLight').val(light.toFixed(1)).attr('tval',light);
	$('#armorWeightidMid').val(mid.toFixed(1)).attr('tval',mid);
	$('#armorWeightidFat').val(fat.toFixed(1)).attr('tval',fat);
}
dks.prototype.aaq = function(value){ 
	var e=1,p=1,g=1;
	if($('#rofap').is(':checked'))
	 p = 1.2;
	if($('#maskof').is(':checked')){
		e = 1.05;
	}
	if($('#havels').is(':checked'))
	 g = 1.5;
	 var t = (p*e*g);
	return parseInt(value)*t;
}
dks.prototype.changeValUp = function(obj,e){
	if(e.shiftKey) {
		if((parseInt(obj.val())+10)<100)
			obj.val(parseInt(obj.val())+10);
		else
			obj.val(99);
	} else if((parseInt(obj.val())+1)<100)
		obj.val(parseInt(obj.val())+1);
		
}
dks.prototype.changeValDown = function(obj,e){
	var uid = obj.attr('uid');
	if(uid!='hum'){
		
		var min = $('input:disabled[uid="'+uid+'"]');
		if(e.shiftKey) {
			if((parseInt(obj.val())-10)>(parseInt(min.val())-1))
				obj.val(parseInt(obj.val())-10);
			else
				obj.val(min.val());
		} else if((parseInt(obj.val())-1)>(parseInt(min.val())-1))
			obj.val(parseInt(obj.val())-1);
	} else {
		if(e.shiftKey) {
			if((parseInt(obj.val())-10)>(0-1))
				obj.val(parseInt(obj.val())-10);
			else
				obj.val(0);
		}else if((parseInt(obj.val())-1)>(0-1))
			obj.val(parseInt(obj.val())-1);
	}
}
dks.prototype.buildArmorLists = function(){
	for(var i = 0,len = zz.armor.length;i<len;i++){
		this.aae.push(zz.armor[i][0].head);
		this.aaf.push(zz.armor[i][0].chest);
		this.aag.push(zz.armor[i][0].hand);
		this.aah.push(zz.armor[i][0].feet);
		if(i == (zz.armor.length-1)){
			this.aai = zz.armor[i];
		}
	}
	delete this.head;
	delete this.chest;
	delete this.hand;
	delete this.feet;
}

dks.prototype.roundNumber = function(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}
dks.prototype.rtoTen = function(num){
	return Math.ceil(num*10)/10;
}
dks.prototype.genExcList = function(){
	
	var head = this.aae.slice(0,this.aae.length-6);
	var secheads = this.aai.slice(9,14);
	var restheads = this.aai.slice(0,9);
	var lastheads = this.aai.slice(-2);
	
	
	var heads = head.concat(secheads);
	//console.log(heads.length)
	var head2 = restheads.concat(lastheads);
	//console.log(head2.length)
	var ches = this.aaf.slice(0);
	var gaun = this.aag.slice(0);
	var legs = this.aah.slice(0);
	var exc = $.totalStorage('excluded');
	if(exc) {
		this.excluded = exc;
	} else {
		var a = [];
		var b = [];
		var c = [];
		var d = [];
		var e = [];
		
		for(var i = 0,len=heads.length+head2.length;i<len;i++){
			b[i] = 1;
			if(i<57){
				c[i] = 1;
				d[i] = 1;
				e[i] = 1;
			}
		}
		a = [b,c,d,e];
		$.totalStorage('excluded',a);
		this.excluded = a;
	}
	var str = '';
	var headerstr = '<div class="sectitle clearfix faded"><div class="s_col">&nbsp;</div><div class="h_col">set name</div> <div class="h_col">head piece</div><div class="h_col">chest piece</div><div class="h_col">arm piece</div><div class="h_col">leg piece</div></div>';
	str += headerstr;
	var exc = this.excluded;
	//exc[0][0] = exc[1][0] = exc[2][0] = exc[3][0] = 1;
	//console.log(exc)
	for(var i =0,len = heads.length;i<len;i++){
		var t = i
		var allavail = true;
		var clall = '',clhead = '',clchest = '',clhands = '',cllegs = '';
		var secdat = ' data-ref=';
		if(i < 57){
			secdat += '"d-'+i+'"';
		} else {
			t = t - 57 + 9;
			secdat += '"q-'+t+'"';
		}
		var totals = exc[0][i+((i < 57) ? 0 : 9)] + exc[1][i] + exc[2][i] + exc[3][i];
		if(totals == 4){
			allavail = true;
		}else if(totals == 1 && (i == 30 || i == 31 || i == 34)){
			allavail = false;
			clall = clhead = clchest = clhands = cllegs = ' remove';
		}else if(totals == 0){
			allavail = false;
			clall = clhead = clchest = clhands = cllegs = ' remove';
		} else {
			clall = ' fade';
			if(i < 57)
				clhead = (exc[0][i]) ? '' : ' remove';
			else
				clhead = (exc[0][i+9]) ? '' : ' remove';
			clchest = (exc[1][i]) ? '' : ' remove';
			clhands = (exc[2][i]) ? '' : ' remove';
			cllegs = (exc[3][i]) ? '' : ' remove';
		}
		//if(i == 29)
			//str += headerstr;
		var belongs = heads[i][15].replace(/[^\w]/gi, "");
		str += '<div class="excrow clearfix" id="msc'+belongs+'">';
		str += '<div class="s_col" data-to="msc'+belongs+'">';
		str += '<div class="allcbutton'+clall+'" data-to="msc'+belongs+'" data-sval="'+heads[i][0]+'"'+secdat+' data-ty="all"></div>';
		str += '</div>';
		
		str += '<div class="g_col" data-to="msc'+belongs+'">';
		str += '<div class="exctext" data-to="msc'+belongs+'" data-sval="'+heads[i][0]+'"'+secdat+'>'+heads[i][15]+'</div>';
		str += '</div>';
		str += '<div class="h_col" data-to="msc'+belongs+'">';
		str += '<div class="exctext" data-to="msc'+belongs+'" data-sval="'+heads[i][0]+'"'+secdat+'>'+heads[i][1]+'</div>';
		str += '<div class="excbutton'+clhead+'" data-to="msc'+belongs+'" data-sval="'+heads[i][0]+'"'+secdat+' data-ty="h"></div>';
		str += '</div>';
		
		str += '<div class="c_col" data-to="msc'+belongs+'">';
		str += '<div class="exctext" data-to="msc'+belongs+'" data-sval="'+ches[i][0]+'" data-ref="d-'+i+'">'+ches[i][1]+'</div>';
		str += '<div class="excbutton'+clchest+'" data-to="msc'+belongs+'" data-sval="'+ches[i][0]+'" data-ref="d-'+i+'" data-ty="c"></div>';
		str += '</div>';
		
		str += '<div class="a_col" data-to="msc'+belongs+'">';
		if(gaun[i][1] != 'nill'){
			str += '<div class="exctext" data-to="msc'+belongs+'" data-sval="'+gaun[i][1]+'" data-ref="d-'+i+'">'+gaun[i][1]+'</div>';
			str += '<div class="excbutton'+clhands+'" data-to="msc'+belongs+'" data-sval="'+gaun[i][1]+'" data-ref="d-'+i+'" data-ty="a"></div>';
		} else {
			str += '<div class="exctext none" data-to="msc'+belongs+'" data-sval="'+gaun[i][1]+'" data-ref="d-'+i+'">No piece</div>';
		}
		str += '</div>';
		
		str += '<div class="f_col" data-to="msc'+belongs+'" data-sval="'+legs[i][1]+'">';
		str += '<div class="exctext" data-to="msc'+belongs+'" data-sval="'+legs[i][1]+'" data-ref="d-'+i+'">'+legs[i][1]+'</div>';
		str += '<div class="excbutton'+cllegs+'" data-to="msc'+belongs+'" data-sval="'+legs[i][1]+'" data-ref="d-'+i+'" data-ty="f"></div>';
		str += '</div>';
		
		str += '</div>';
	}
	str += '<div class="sectitle clearfix faded"><div class="s_col">&nbsp;</div><div class="h_col">unique head pieces</div></div>';
	//console.log(exc[0].length);
	for(var i =0,len = head2.length;i<len;i++){
		str += '<div class="excrow clearfix" id="mscUni'+i+(i+5)+'">';
		//str += '<div class="s_col" data-to="msc'+belongs+'">';
		//str += '<div class="allcbutton" data-to="msc'+belongs+'" data-index="'+i+'"></div>';
		//str += '</div>';
		var returnVal = function(index,exc){
			if(exc[0][index] == 1){
				//console.log(exc[0].length)
				//console.log(exc[0][index])
				//console.log(index)
				return '';
			} else{
				return ' remove';
			}
		}
		belongs = 'Uni'+(i+5);
		if(i < 12){
		str += '<div class="h_col" data-to="msc'+belongs+'" data-sval="'+head2[i][0]+'">';
		str += '<div class="exctext" data-to="msc'+belongs+'" data-sval="'+head2[i][0]+'">'+head2[i][1]+'</div>';
		str += '<div class="excbutton noborder'+returnVal(i+57,exc)+'" data-to="msc'+belongs+'" data-sval="'+head2[i][0]+'" data-ref="q-'+i+'" data-ty="h"></div>';
		str += '</div>';
		i++;
		}
		if(i < 11){
			
			str += '<div class="h_col" data-to="msc'+belongs+'" data-sval="'+head2[i][0]+'">';
			str += '<div class="exctext" data-to="msc'+belongs+'" data-sval="'+head2[i][0]+'">'+head2[i][1]+'</div>';
			str += '<div class="excbutton'+returnVal(i+57,exc)+'" data-to="msc'+belongs+'" data-sval="'+head2[i][0]+'" data-ref="q-'+i+'" data-ty="h"></div>';
			str += '</div>';
			if(i < 11)
			i++;
			str += '<div class="h_col" data-to="msc'+belongs+'" data-sval="'+head2[i][0]+'">';
			str += '<div class="exctext" data-to="msc'+belongs+'" data-sval="'+head2[i][0]+'">'+head2[i][1]+'</div>';
			str += '<div class="excbutton'+returnVal(i+57,exc)+'" data-to="msc'+belongs+'" data-sval="'+head2[i][0]+'" data-ref="q-'+i+'" data-ty="h"></div>';
			str += '</div>';
			if(i < 11)
			i++;
			str += '<div class="h_col" data-to="msc'+belongs+'" data-sval="'+head2[i][1]+'">';
			str += '<div class="exctext" data-to="msc'+belongs+'" data-sval="'+head2[i][1]+'">'+head2[i][1]+'</div>';
			str += '<div class="excbutton'+returnVal(i+57,exc)+'" data-to="msc'+belongs+'" data-sval="'+head2[i][1]+'" data-ref="q-'+i+'" data-ty="h"></div>';
			str += '</div>';
			if(i < 11)
			i++;
			str += '<div class="h_col" data-to="msc'+belongs+'" data-sval="'+head2[i][1]+'">';
			str += '<div class="exctext" data-to="msc'+belongs+'" data-sval="'+head2[i][1]+'">'+head2[i][1]+'</div>';
			str += '<div class="excbutton'+returnVal(i+57,exc)+'" data-to="msc'+belongs+'" data-sval="'+head2[i][1]+'" data-ref="q-'+i+'" data-ty="h"></div>';
			str += '</div>';
			//if(i < 10 && i != 4 )
			//i++;
		}
		str += '</div>';
	}
	
	$('#armorlist').html(str);
	
	this.applyExcEvents();
}
dks.prototype.applyExcEvents = function(){
	var evha = this;
	$('.excbutton').click(function(){
		var exc = evha.excluded;
		//var disabled = $(this).hasClass('remove');
		var ary = [],goes = $(this).attr('data-ty'),newval = 0,prto = 0;
		var to = $(this).attr('data-ref'),armcombo = $(this).attr('data-to');
		if(/d\-/ig.test(to)){
			if(goes == 'h'){
				ary = exc[0];
			} else if(goes == 'c'){
				ary = exc[1];
			} else if(goes == 'a'){
				ary = exc[2];
			} else if(goes == 'f'){
				ary = exc[3];
			} 
			prto = parseInt(to.replace(/d\-/ig,''));
			//if(prto >= 52)
			//	to = prto+5;
			//else
				to = prto;
		} else {
			ary = exc[0];
			prto = parseInt(to.replace(/q\-/ig,''))  + 57;
			to = prto;
		}
		//console.log(to);
		if($(this).hasClass('remove')){
			newval = 1;
			$(this).removeClass('remove');
		} else {
			$(this).addClass('remove');
		}
		//console.log(ary[to] + ':' + to);
		ary[to] = newval;
		evha.excluded = exc;
		if(/d\-/ig.test($(this).attr('data-ref'))) {
			var nex = evha.excluded;
			var totals = nex[0][to] + nex[1][prto] + nex[2][prto] + nex[3][prto];
			//console.log(totals+' : '+to+' : '+prto);
			var target = $('#'+armcombo).find('div.allcbutton');
			//console.log(target.attr('data-to'))
			if(totals == 4) {
				target.removeClass('remove fade');
			}else if(totals == 1 && (prto == 30 || prto == 31 || prto == 34)){
				target.removeClass('remove fade').addClass('remove');
			}else if(totals > 0){
				target.removeClass('remove fade').addClass('fade');
			} else {
				target.removeClass('remove fade').addClass('remove');
			}
		}
		$.totalStorage('excluded',exc);
		
	});
	$('.allcbutton').click(function(e){
		//console.log(e.shiftKey)
		var start = new Date().getTime();
		var to = $(this).attr('data-to');
		var all = $(this).parent().parent().find('.excbutton');
		var tomod = [];
		if($(this).hasClass('fade') || !$(this).hasClass('remove')){
			tomod = all.filter(function(){
				if($(this).hasClass('remove')){
					if(e.shiftKey)
						return true;
					return false;
				}else {
					if(e.shiftKey)
						return false;
					return true;
					
				}
			}).click();  //quick hack
			if(!e.shiftKey)
			$(this).removeClass('fade').addClass('remove');
			else
			$(this).removeClass('fade remove');
		} else {
			all.click();
			$(this).removeClass('remove');
		}
		var elapsed = new Date().getTime() - start;
		//console.log(elapsed)
	});
	
	
	$('.exctext:not(".none")').click(function(e){
		var nex = $(this).next();
		if(nex.length){
			nex.trigger({type:"click",shiftKey:e.shiftKey})
		} else {
			$(this).parent().prev().children().eq(0).trigger({type:"click",shiftKey:e.shiftKey});
		}
	});
}
dks.prototype.createForced = function(target,type){
	var evha = this;
	var arr;
	switch(type){
		case('forcedHead'):
			arr = this.aae.concat(this.aai);
		break;
		case('forcedChes'):
			arr = this.aaf;
		break;
		case('forcedHand'):
			arr = this.aag;
		break;
		case('forcedLegs'):
			arr = this.aah;
		break;
		default:
			arr = false;
	}
	if(arr != false) {
		var pos = target.offset();
		var div = $('<div id="m-'+type+'" class="forced-modal"><div class="modalar2"></div></div>');
		div.css({'top':(pos.top+25)+'px','left':(pos.left-90)+'px'});
		var div2 = $('<div id="i-'+type+'" class="inner-forced"></div>');
		var div3 = $('<div id="s-'+type+'" class="search"><input id="sf-'+type+'" type="text" autocomplete="off" tabindex="-1"></div>')
		var str = '';
		for(var i = 0,len = arr.length;i<len;i++){
			if(arr[i] !== undefined && arr[i][0] != 'nill'){
				str += '<div id="t-'+ i + '" class="inner-ele">' + arr[i][1] + '</div>';
			}
		}
		div2.append(str);
		div.append(div3).append(div2);
		$('body').append(div);
		setTimeout(function(){
			$(document).click(function(){
				$('#m-'+type+'').remove();
				$(this).unbind('click');
				$('#m-'+type+' .inner-ele').unbind('click');
			});
		},100);
		$('#m-'+type).click(function(e) {
			e.stopPropagation();
		});
		$('#m-'+type+' .inner-ele').click(function(){
			target.text($(this).text()).data('forced',$(this).attr('id')).removeClass('faded').addClass('blue').parent().find('span.removeme').parent().remove();
			target.parent().append('<span>[<span class="red bold removeme" style="cursor:pointer">x</span>]</span>').find('span.removeme').click(function(){
					target.text('(none)').removeData('forced').removeClass('blue').addClass('faded').parent().find('span.removeme').parent().remove();
				});
			$('#m-'+type+'').remove();
			$(document).unbind('click');
			$('#m-'+type+' .inner-ele').unbind('click');
			if($('#maskof').is(':checked') && $('#forcedHead .edita').text() != 'Mask of the Father'){
				$('#maskof').prop('checked',false);
				evha.applyEn();
			} else if($('#forcedHead .edita').text() == 'Mask of the Father' && !$('#maskof').is(':checked')){
				$('#maskof').prop('checked',true);
				evha.applyEn();
			}
		});
		$('#sf-'+type).focus();
		$('#sf-'+type).keydown(function(event){
			var stroke, _ref;
			  stroke = (_ref = event.which) != null ? _ref : event.keyCode;
			  switch (stroke) {
				case 8:
				  this.backstroke_length = $(this).val().length;
				  break;
				case 9:
				case 13:
				case 59:
				case 61:
				case 106:
				case 107:
				case 109:
				case 110:
				case 111:
				case 173:
				case 188:
				case 190:
				case 191:
				case 192:
				case 219:
				case 220:
				case 221:
				  event.preventDefault();
				  return false;
				  break;
			}
		}).keyup(function(event) {
			if($('.no-found').length)
				$('.no-found').remove();
		   var key = event.which;
		   var patt = $(this).val();
		   patt= new RegExp(patt,'i');
		   $('.inner-ele').filter(function(){
				if(patt.test($(this).text())){
					$(this).css('display','block');
					return false;
				} else 
					return true;
		   }).css('display','none');
		   var len = $('.inner-ele:visible');
		   if(len.length < 1){
			$('.inner-ele:first').parent().append('<div class="no-found"><center><strong>No matching armor</strong></center></div>');
		   }
		});
	} else {
		var targets = [$('#forcedHead .edita'),$('#forcedChes .edita'),$('#forcedHand .edita'),$('#forcedLegs .edita')]
		for(var i = 0;i<4;i++){
			targets[i].text('(none)').removeData('forced').removeClass('blue').addClass('faded').parent().find('span.removeme').parent().remove();
		}
	}
}
dks.prototype.applySearched = function(ID) {
	var ids = ID.split('-');
	$('#headgear option').filter(function() {
		return this.value == ids[0]; 
	}).attr('selected', true);
	$('#chestgear option').filter(function() {
		return this.value == ids[1]; 
	}).attr('selected', true);
	$('#handgear option').filter(function() {
		return this.value == ids[2]; 
	}).attr('selected', true);
	$('#leggear option').filter(function() {
		return this.value == ids[3]; 
	}).attr('selected', true);
	if(this.chosen){
		var offsets = [$('#headgear').find('option:selected').attr('snid'),$('#chestgear').find('option:selected').attr('snid'),$('#handgear').find('option:selected').attr('snid'),$('#leggear').find('option:selected').attr('snid')];
		$('#headgear,#chestgear,#handgear,#leggear').trigger("liszt:updated");
		$('#headgear_chzn .chzn-single div').css('background-position',offsets[0]);
		$('#chestgear_chzn .chzn-single div').css('background-position',offsets[1]);
		$('#handgear_chzn .chzn-single div').css('background-position',offsets[2]);
		$('#leggear_chzn .chzn-single div').css('background-position',offsets[3]);
	}
	this.calcDefenses();
	this.getStat64();
}
dks.prototype.ispohr = function(){
	var evha = this;
	var head = this.aae.concat(this.aai).slice(0);
	var ches = this.aaf.slice(0,57);
	var gaun = this.aag.slice(0,57);
	var legs = this.aah.slice(0,57);
	var stuck = getStuck();
	var exc = $.totalStorage('excluded');
	var t = false;
	if(exc){
		exc = exc.slice(0);
		t = true;
	}
	if(stuck[0] !== undefined){
		head.splice(0,head.length,head[stuck[0].replace('t-','')]);
	} else if(t) {
		head = filterExcluded(exc[0],head);
	}
	if(stuck[1] !== undefined){
		ches.splice(0,ches.length,ches[stuck[1].replace('t-','')]);
	} else if(t) {
		ches = filterExcluded(exc[1],ches);
	}
	if(stuck[2] !== undefined){
		gaun.splice(0,gaun.length,gaun[stuck[2].replace('t-','')]);
	} else if(t) {
		gaun = filterExcluded(exc[2],gaun);
	}
	if(stuck[3] !== undefined){
		legs.splice(0,legs.length,legs[stuck[3].replace('t-','')]);
	} else if(t) {
		legs = filterExcluded(exc[3],legs);
	}
	var wval = $('input[name=sortu]:checked', '#ma').val()
	var wphy = (wval == 'phys') ? 1 : 0,
		wstrk = (wval == 'strk') ? 1 : 0,
		wslsh = (wval == 'slsh') ? 1 : 0,
		wthr = (wval == 'thr') ? 1 : 0,
		wmag = (wval == 'mag') ? 1 : 0,
		wfir = (wval == 'fire') ? 1 : 0,
		wlig = (wval == 'lit') ? 1 : 0,
		wpoi = (wval == 'ps') ? 1 : 0,
		wpsn = (wval == 'psn') ? 1 : 0,
		wble = (wval == 'bld') ? 1 : 0,
		wcur = (wval == 'crs') ? 1 : 0;
		
	function getobjfn() {
	  var w = {
		phy:wphy,
		strk:wstrk,
		slsh:wslsh,
		thr:wthr,
		mag:wmag,
		fir:wfir,
		lig:wlig,
		poi:wpoi,
		psn:wpsn,
		ble:wble,
		cur:wcur
	  };
	  return function(a) {
		var t=0;
		if(a !== undefined && a != 'nill'){
			t += a[2]*w.phy;
			t += a[3]*w.strk;
			t += a[4]*w.slsh;
			t += a[5]*w.thr;
			t += a[6]*w.mag;
			t += a[7]*w.fir;
			t += a[8]*w.lig;
			t += a[9]*w.poi;
			t += a[11]*w.psn;
			t += a[10]*w.ble;
			t += a[12]*w.cur;
			t += 1-a[14]/200;
			return t;
		}
	  }  
	}
	function filterExcluded(filter,arry){
		var nearray = [];
		if(filter.length != arry.length){
			//console.log(filter.length,arry.length);
			//rearrange head array
			var first = arry.slice(0,52);
			var sec = arry.slice(67,72);
			var thir = arry.slice(58,67);
			var las = arry.slice(-2);
			arry = first.concat(sec,thir,las);
		}
		for(var i = 0,len = arry.length;i<len;i++){
			if(filter[i] == 1)
				nearray.push(arry[i]);
				//console.log(i,arry[i])
		}
		return nearray;
	}
	function getStuck(){
		return [$('#forcedHead .edita').data('forced'),$('#forcedChes .edita').data('forced'),$('#forcedHand .edita').data('forced'),$('#forcedLegs .edita').data('forced')];
	}
	function max(arr, fn) {
	  var max = fn(arr[0]);
	  for(var i=1; i<arr.length; ++i) {
		var x = fn(arr[i]); 
		if(x>max) max=x;
	  }
	  return max;
	}
	
	function optimize(pool,equiv,maxweight,objfn,maxcount,count,worst,besta4value,besta34value,besta234value,makecombo,head,ches,gaun,legs,meetMin,mins,maxs) {
	  for(var hi = head.length-1; hi >= 0; --hi) {
		var a1 = head[hi];
		if(a1 !== undefined && a1[0] != 'nill'){
			if(a1[14] > maxweight) continue;
			var a1value = objfn(a1);
			if(a1value + besta234value < worst) continue;
			
			for(var ci = ches.length-1; ci >= 0; --ci) {
				var a2 = ches[ci];
				if(a2 !== undefined && a2[0] != 'nill'){
				  if(a1[14] + a2[14] >maxweight) continue;
				  var a12value = a1value + objfn(a2);
				  
				  if(a12value + besta34value < worst) continue;
				  
				  for(var gi = gaun.length-1; gi >= 0; --gi) {
					var a3 = gaun[gi];

					if(a3 !== undefined && a3[0] != 'nill'){
					if(a1[14] + a2[14] + a3[14] > maxweight) continue;
					var a123value = a12value + objfn(a3);
					if(a123value + besta4value < worst) continue;
					
					for(var li = legs.length-1; li >= 0; --li) {
					  var a4 = legs[li];
					  if(a4 !== undefined && a4[0] != 'nill'){
					  var weight = a1[14]+ a2[14] + a3[14] + a4[14];
					  if(weight > maxweight) continue;
					  var value = a123value + objfn(a4);          
					  if(value < worst) continue;
					
					  var ac = meetMin(makecombo(a1,a2,a3,a4),mins,maxs);
					  if(ac){
						  ac.value = value;
						  equiv.push(ac);
					  }
					  if(equiv.length>maxcount*6) {
						equiv.sort(function(x,y) { return x.value-y.value; } );
						equiv = equiv.slice(equiv.length-maxcount,equiv.length);
						worst = equiv[0].value;
					  } 
					 }					  
				    }          
				   } 
				 }				  
			   }
			} 
		 }
		
	  }
	
	  var wval = $('input[name=sortu]:checked', '#ma').val()
	 // console.log(wval)
		var t,filterText;
		switch(wval){
			case('phys'):
				filterText = 'Physical Defense';
				t = 2;
				equiv.sort(function (a, b) {
					if(a.phy == b.phy){
						return (a.wei < b.wei) ? -1 : (a.wei > b.wei) ? 1 : 0;
					}else{
						return (a.phy < b.phy) ? 1 : -1;
					}
				});
			break;
			case('strk'):
				filterText = 'Strike Defense';
				t = 3;
				equiv.sort(function (a, b) {
					if(a.str == b.str){
						return (a.wei < b.wei) ? -1 : (a.wei > b.wei) ? 1 : 0;
					}else{
						return (a.str < b.str) ? 1 : -1;
					}
				});
			break;
			case('slsh'):
				filterText = 'Slash Defense';
				t = 4;
				equiv.sort(function (a, b) {
					if(a.sla == b.sla){
						return (a.wei < b.wei) ? -1 : (a.wei > b.wei) ? 1 : 0;
					}else{
						return (a.sla < b.sla) ? 1 : -1;
					}
				});
			break;
			case('thr'):
				filterText = 'Thrust Defense';
				t = 5;
				equiv.sort(function (a, b) {
					if(a.pie == b.pie){
						return (a.wei < b.wei) ? -1 : (a.wei > b.wei) ? 1 : 0;
					}else{
						return (a.pie < b.pie) ? 1 : -1;
					}
				});
			break;
			case('mag'):
				filterText = 'Magic Defense';
				t = 6;
				equiv.sort(function (a, b) {
					if(a.mag == b.mag){
						return (a.wei < b.wei) ? -1 : (a.wei > b.wei) ? 1 : 0;
					}else{
						return (a.mag < b.mag) ? 1 : -1;
					}
				});
			break;	
			case('fire'):
				filterText = 'Fire Defense';
				t = 7;
				equiv.sort(function (a, b) {
					if(a.fir == b.fir){
						return (a.wei < b.wei) ? -1 : (a.wei > b.wei) ? 1 : 0;
					}else{
						return (a.fir < b.fir) ? 1 : -1;
					}
				});
			break;
			case('lit'):
				filterText = 'Lighting Defense';
				t = 8;
				equiv.sort(function (a, b) {
					if(a.lig == b.lig){
						return (a.wei < b.wei) ? -1 : (a.wei > b.wei) ? 1 : 0;
					}else{
						return (a.lig < b.lig) ? 1 : -1;
					}
				});
			break;
			case('ps'):
				filterText = 'Poise';
				t = 9;
				equiv.sort(function (a, b) {
					if(a.poi == b.poi){
						return (a.wei < b.wei) ? -1 : (a.wei > b.wei) ? 1 : 0;
					}else{
						return (a.poi < b.poi) ? 1 : -1;
					}
				});
			break;
			case('bld'):
				filterText = 'Bleed Resistance';
				t = 10;
				equiv.sort(function (a, b) {
					if(a.ble == b.ble){
						return (a.wei < b.wei) ? -1 : (a.wei > b.wei) ? 1 : 0;
					}else{
						return (a.ble < b.ble) ? 1 : -1;
					}
				});
			break;
			case('psn'):
				filterText = 'Poison Resistance';
				t = 11;
				equiv.sort(function (a, b) {
					if(a.psn == b.psn){
						return (a.wei < b.wei) ? -1 : (a.wei > b.wei) ? 1 : 0;
					}else{
						return (a.psn < b.psn) ? 1 : -1;
					}
				});
			break;
			case('crs'):
				filterText = 'Curse Resistance';
				t = 12;
				equiv.sort(function (a, b) {
					if(a.cur == b.cur){
						return (a.wei < b.wei) ? -1 : (a.wei > b.wei) ? 1 : 0;
					}else{
						return (a.cur < b.cur) ? 1 : -1;
					}
				});
			break;
			case('custom'):
				filterText = '';
				t = 13;
			break;
		}
	  var str = '<ol>';
	  if(equiv.length > 0){
		  for(var i = 0,len = equiv.length;i<len;i++){
			str += '<li class="none">'+filterText+': ';//+(equiv[i].head[t] + equiv[i].ches[t] + equiv[i].gaun[t] + equiv[i].legs[t])+'</li>';
			
			switch(wval){
				case('phys'):
					str += equiv[i].phy.toFixed(1);
				break;
				case('strk'):
					str += equiv[i].str.toFixed(1);
				break;
				case('slsh'):
					str += equiv[i].sla.toFixed(1);
				break;
				case('thr'):
					str += equiv[i].pie.toFixed(1);
				break;
				case('mag'):
					str += equiv[i].mag.toFixed(1);
				break;	
				case('fire'):
					str += equiv[i].fir.toFixed(1);
				break;
				case('lit'):
					str += equiv[i].lig.toFixed(1);
				break;
				case('ps'):
					str += equiv[i].poi.toFixed(0);
				break;
				case('bld'):
					str += equiv[i].ble.toFixed(1);
				break;
				case('psn'):
					str += equiv[i].psn.toFixed(1);
				break;
				case('crs'):
					str += equiv[i].cur.toFixed(1);
				break;
				case('custom'):
					//str += equiv[i].phy.toFixed(1);
				break;
			}
			
			str += '</li><li id="'+equiv[i].head[0]+'-'+equiv[i].ches[0]+'-'+equiv[i].gaun[0]+'-'+equiv[i].legs[0]+'">';
			  str += '<div class="clear"></div><div class="left bold">'+equiv[i].head[1]+'</div>';
			  str += '<div class="left bold">'+equiv[i].ches[1]+'</div>';
			  str += '<div class="left bold">'+equiv[i].gaun[1]+'</div>';
			  str += '<div class="left bold">'+equiv[i].legs[1]+'</div><div class="clear"></div><hr class="nomargin"><div class="small">';
			  str += '<span class="faded">Totals : [ </span><span class="bold" style="color:#7D563A">'+equiv[i].phy.toFixed(1)+'</span><span class="faded"> / </span><span class="bold" style="color:#c69b7c;">'+equiv[i].str.toFixed(1)+'</span><span class="faded"> / </span><span class="bold" style="color:#c69b7c;">'+equiv[i].sla.toFixed(1)+'</span><span class="faded"> / </span><span class="bold" style="color:#c69b7c;">'+equiv[i].pie.toFixed(1)+'</span><span class="faded"> / </span><span class="bold" style="color:#3A667D">'+equiv[i].mag.toFixed(1)+'</span><span class="faded"> / </span><span class="bold" style="color:#B52B2B">'+equiv[i].fir.toFixed(1)+'</span><span class="faded"> / </span><span class="bold" style="color:#B59D2B">'+equiv[i].lig.toFixed(1)+'</span><span class="faded">] [</span><span class="bold" style="color:#0f67de;">'+equiv[i].poi.toFixed(0)+'</span><span class="faded"> / </span><span class="bold" style="color:#d61922">'+equiv[i].ble.toFixed(1)+'</span><span class="faded"> / </span><span class="bold" style="color:#9119d6">'+equiv[i].psn.toFixed(1)+'</span><span class="faded"> / </span><span class="bold" style="color:#aa2b6a;">'+equiv[i].cur.toFixed(1)+'</span><span class="faded">]</span> <span class="fright"><span class="faded">[</span><span class="bold">'+equiv[i].wei.toFixed(1)+'</span><span class="faded">]</span></span>';
			  str += '</div>';
			str += '</li>';
		  }
	  } else 
		str += '<li class="none"><center><h2>No armor combinations found with the given criteria</h2></center></li>';
	  str += '</ol>';
	  $('#armor-sets').html(str).scrollTop(0);
	  $('.armor-sets').click(function(){
		return false;  //just in case
	  });
	}
	var pool = {}
	  var equiv=[]
	  var wid;
	  var weightLeft = $('input[name=valtu]:checked', '#ma').val()
	  if(weightLeft == '1'){
		wid = $('#armorWeightidLight').attr('tval');
	  } else if(weightLeft == '2'){
		wid = $('#armorWeightidMid').attr('tval');
	  } else if(weightLeft == '3'){
		wid = $('#armorWeightidFat').attr('tval');
	  } else {
		wid = $('#armorWeightidCus').attr('tval');
	  }
	  var maxweight = parseFloat(wid);
	  var objfn = getobjfn();
	  
	  var maxcount = 25;
	  var count = 0;
	  var worst = 0;
	  var besta4value = max(legs, objfn);
	  var besta34value = besta4value + max(gaun, objfn);
	  var besta234value = besta34value + max(ches, objfn);
	  //optimize(pool,equiv,maxweight,objfn,25,0,0,besta4value,besta34value,besta234value,function(a,b,c,d){
	  optimize({},[],parseFloat(wid),getobjfn(),25,0,0,besta4value,besta34value,besta234value,function(a,b,c,d){
		 return { 
		head:a,ches:b,gaun:c,legs:d,
		wei:a[14]+b[14]+c[14]+d[14],
		phy:a[2]+b[2]+c[2]+d[2],
		str:a[3]+b[3]+c[3]+d[3],
		sla:a[4]+b[4]+c[4]+d[4],
		pie:a[5]+b[5]+c[5]+d[5],
		mag:a[6]+b[6]+c[6]+d[6],
		fir:a[7]+b[7]+c[7]+d[7],
		lig:a[8]+b[8]+c[8]+d[8],
		poi:a[9]+b[9]+c[9]+d[9],
		psn:a[11]+b[11]+c[11]+d[11],
		ble:a[10]+b[10]+c[10]+d[10],
		cur:a[12]+b[12]+c[12]+d[12]
	  }  
		},head,ches,gaun,legs,function(a,b,c){
			if(a.phy >= b.phy && a.phy <= c.phy){ /*do nothing */ } else { return false; }
			if(a.str >= b.str && a.str <= c.str){ /*do nothing */ } else { return false; }
			if(a.sla >= b.sla && a.sla <= c.sla){ /*do nothing */ } else { return false; }
			if(a.pie >= b.pie && a.pie <= c.pie){ /*do nothing */ } else { return false; }
			if(a.mag >= b.mag && a.mag <= c.mag){ /*do nothing */ } else { return false; }
			if(a.fir >= b.fir && a.fir <= c.fir){ /*do nothing */ } else { return false; }
			if(a.lig >= b.lig && a.lig <= c.lig){ /*do nothing */ } else { return false; }
			if(a.poi >= b.poi && a.poi <= c.poi){ /*do nothing */ } else { return false; }
			if(a.psn >= b.psn && a.psn <= c.psn){ /*do nothing */ } else { return false; }
			if(a.ble >= b.ble && a.ble <= c.ble){ /*do nothing */ } else { return false; }
			if(a.cur >= b.cur && a.cur <= c.cur){ /*do nothing */ } else { return false; }
			
			return a;
			},{
				phy : parseFloat($('#mphy').val()),
				str : parseFloat($('#mstr').val()),
				sla : parseFloat($('#msla').val()),
				pie : parseFloat($('#mthr').val()),
				mag : parseFloat($('#mmag').val()),
				fir : parseFloat($('#mfir').val()),
				lig : parseFloat($('#mlig').val()),
				poi : parseFloat($('#mpoi').val()),
				psn : parseFloat($('#mpsn').val()),
				ble : parseFloat($('#mble').val()),
				cur : parseFloat($('#mcur').val())				
			},{
				phy : parseFloat($('#mxphy').val()),
				str : parseFloat($('#mxstr').val()),
				sla : parseFloat($('#mxsla').val()),
				pie : parseFloat($('#mxthr').val()),
				mag : parseFloat($('#mxmag').val()),
				fir : parseFloat($('#mxfir').val()),
				lig : parseFloat($('#mxlig').val()),
				poi : parseFloat($('#mxpoi').val()),
				psn : parseFloat($('#mxpsn').val()),
				ble : parseFloat($('#mxble').val()),
				cur : parseFloat($('#mxcur').val())				
			});
	  
	  /*function makecombo(a,b,c,d) {
	  return { 
		head:a,ches:b,gaun:c,legs:d,
		wei:a[14]+b[14]+c[14]+d[14],
		phy:a[2]+b[2]+c[2]+d[2],
		str:a[3]+b[3]+c[3]+d[3],
		sla:a[4]+b[4]+c[4]+d[4],
		pie:a[5]+b[5]+c[5]+d[5],
		mag:a[6]+b[6]+c[6]+d[6],
		fir:a[7]+b[7]+c[7]+d[7],
		lig:a[8]+b[8]+c[8]+d[8],
		poi:a[9]+b[9]+c[9]+d[9],
		psn:a[11]+b[11]+c[11]+d[11],
		ble:a[10]+b[10]+c[10]+d[10],
		cur:a[12]+b[12]+c[12]+d[12]
	  }  
	}*/
	  
}
dks.prototype.buildWeaponLists = function(){
	var url = '//static.mugenmonkey.com/img/weapons/s/weapons25x25.png';
	var dat = '<option ind="0" typ="f" value="'+zz.weapons.fist[0][0]+'" sma="f" title="'+url+'" snid="-10000px -10000px">'+zz.weapons.fist[0][1]+'</option>';
	var datastring = '<optgroup label="Fist">'+dat+'</optgroup>';
	this.wepArraySort(dat,'f');
	var ti = zz.weapons.normal.length-1,g = 0;
	datastring += '<optgroup label="Normal">';
	for(var g;g<=ti;++g){
		var dat = '<option ind="'+(g+1)+'" typ="n" value="'+zz.weapons.normal[g][0]+'" sma="'+zz.weapons.normal[g][3]+'" title="'+url+'" snid="'+zz.weapons.normal[g][4]+'">'+zz.weapons.normal[g][1]+'</option>'
		datastring += dat;
		this.wepArraySort(dat,zz.weapons.normal[g][3]);
	}
	datastring += '</optgroup>';
	var k = zz.weapons.normal.length+1;
	var ti = zz.weapons.unique.length-1,g = 0;
	datastring += '<optgroup label="Unique">';
	for(var g;g<=ti;++g){
		var dat = '<option ind="'+(g+k)+'" typ="u" value="'+zz.weapons.unique[g][0]+'" sma="'+zz.weapons.unique[g][3]+'" title="'+url+'" snid="'+zz.weapons.unique[g][4]+'">'+zz.weapons.unique[g][1]+'</option>';
		datastring += dat;
		this.wepArraySort(dat,zz.weapons.unique[g][3]);
	}
	datastring += '</optgroup>';
	var u = zz.weapons.unique.length + k;
	var ti = zz.weapons.bows.length-1,g = 0;
	datastring += '<optgroup label="Bows">';
	for(var g;g<=ti;++g){
		var dat = '<option ind="'+(g+u)+'" typ="b" value="'+zz.weapons.bows[g][0]+'" sma="'+zz.weapons.bows[g][3]+'" title="'+url+'" snid="'+zz.weapons.bows[g][4]+'">'+zz.weapons.bows[g][1]+'</option>'
		datastring += dat;
		this.wepArraySort(dat,zz.weapons.bows[g][3]);
	}
	datastring += '</optgroup>';
	var y = zz.weapons.bows.length + u;
	var ti = zz.weapons.magic.length-1,g = 0;
	datastring += '<optgroup label="Catalysts & Talismans">';
	for(var g;g<=ti;++g){
		var dat = '<option ind="'+(g+y)+'" typ="m" value="'+zz.weapons.magic[g][0]+'" sma="'+zz.weapons.magic[g][3]+'" title="'+url+'" snid="'+zz.weapons.magic[g][4]+'">'+zz.weapons.magic[g][1]+'</option>';
		datastring += dat;
		this.wepArraySort(dat,zz.weapons.magic[g][3]);
	}
	datastring += '</optgroup>';
	var j = zz.weapons.magic.length + y;
	var ti = zz.weapons.shields.length-1,g = 0;
	datastring += '<optgroup label="Shields">';
	for(g;g<=ti;++g){
		var dat = '<option ind="'+(g+j)+'" typ="s" value="'+zz.weapons.shields[g][0]+'" sma="'+zz.weapons.shields[g][3]+'" title="'+url+'" snid="'+zz.weapons.shields[g][4]+'">'+zz.weapons.shields[g][1]+'</option>';
		datastring += dat;
		this.wepArraySort(dat,zz.weapons.shields[g][3]);
	}
	datastring += '</optgroup>'; 
	
	var l = zz.weapons.shields.length + j;
	var ti= zz.weapons.ptde.length-1,g = 0;
	datastring += '<optgroup label="PTDE">';
	for(g;g<=ti;++g){
		var dat,wt;
		switch(g) {
			case(0):  //silver tracer
				wt = 'u';
			break;
			case(1):  //abyss
				wt = 'u';
			break;
			case(2):  //obsidian
				wt = 'u';
			break;
			case(3):  //gold
				wt = 'u';
			break;
			case(4):  //stone
				wt = 'u';
			break;
			case(5):  //four pronged
				wt = 'n';
			break;
			case(6):  //gaurdian
				wt = 'n';
			break;
			case(7):  //goughs
				wt = 'u';
			break;
			case(8):  //oolacile
				wt = 'm';
			break;
			case(9):  //manus
				wt = 'm';
			break;
			case(10):  //cleanisng
				wt = 's';
			break;
		}
		dat = '<option ind="'+(g+l)+'" typ="'+wt+'" value="'+zz.weapons.ptde[g][0]+'" sma="'+zz.weapons.ptde[g][3]+'" title="'+url+'" snid="'+zz.weapons.ptde[g][4]+'">'+zz.weapons.ptde[g][1]+'</option>';
		datastring += dat;
		this.wepArraySort(dat,'ptde');
	}
	datastring += '</optgroup>'; 
	
	var defstring = this.sortDef();
	datastring = '';
	
	zz.xy.lh1.append(defstring);
	zz.xy.rh1.append(defstring);
	zz.xy.lh2.append(defstring);
	zz.xy.rh2.append(defstring);
	delete this.dksdef;
}
dks.prototype.wepArraySort = function(strng,group){
	var i = 0;
	switch(group){
		case('f'): //dksdef[0]
			i = 0
		break;
		case('d'): //dksdef[1]
			i = 1
		break;
		case('ss'): //dksdef[2]
			i = 2
		break;
		case('gs'): //dksdef[3]
			i = 3
		break;
		case('ug'): //dksdef[4]
			i = 4
		break;
		case('cs'): //dksdef[5]
			i = 5
		break;
		case('k'): //dksdef[6]
			i = 6
		break;
		case('cg'): //dksdef[7]
			i = 7
		break;
		case('ps'): //dksdef[8]
			i = 8
		break;
		case('a'): //dksdef[9]
			i = 9
		break;
		case('ga'): //dksdef[10]
			i = 10
		break;
		case('h'): //dksdef[11]
			i = 11
		break;
		case('gh'): //dksdef[12]
			i = 12
		break;
		case('s'): //dksdef[13]
			i = 13
		break;
		case('hb'): //dksdef[14]
			i = 14
		break;
		case('w'): //dksdef[15]
			i = 15
		break;
		case('b'): //dksdef[16]
			i = 16
		break;
		case('cb'): //dksdef[17]
			i = 17
		break;
		case('fl'): //dksdef[18]
			i = 18
		break;
		case('ca'): //dksdef[19]
			i = 19
		break;
		case('ta'): //dksdef[20]
			i = 20
		break;
		case('sm'): //dksdef[21]
			i = 21
		break;
		case('sn'): //dksdef[22]
			i = 22
		break;
		case('sg'): //dksdef[23]
			i = 23
		break;
		case('ptde'): //dksdef[23]
			i = 24
		break;
	}
	this.dksdef[i].push(strng);
}
dks.prototype.sortDef = function() {
	var data = '<optgroup label="Fist Weapons">'+this.dksdef[0].join('')+'</optgroup>';
	data += '<optgroup label="Daggers">'+this.dksdef[1].join('')+'</optgroup>';
	data += '<optgroup label="Straight Swords">'+this.dksdef[2].join('')+'</optgroup>';
	data += '<optgroup label="Greatswords">'+this.dksdef[3].join('')+'</optgroup>';
	data += '<optgroup label="Ultra Greatswords">'+this.dksdef[4].join('')+'</optgroup>';
	data += '<optgroup label="Curved Swords">'+this.dksdef[5].join('')+'</optgroup>';
	data += '<optgroup label="Katanas">'+this.dksdef[6].join('')+'</optgroup>';
	data += '<optgroup label="Curved Greatswords">'+this.dksdef[7].join('')+'</optgroup>';
	data += '<optgroup label="Piercing Swords">'+this.dksdef[8].join('')+'</optgroup>';
	data += '<optgroup label="Axes">'+this.dksdef[9].join('')+'</optgroup>';
	data += '<optgroup label="Great Axes">'+this.dksdef[10].join('')+'</optgroup>';
	data += '<optgroup label="Hammers">'+this.dksdef[11].join('')+'</optgroup>';
	data += '<optgroup label="Great Hammers">'+this.dksdef[12].join('')+'</optgroup>';
	data += '<optgroup label="Spears">'+this.dksdef[13].join('')+'</optgroup>';
	data += '<optgroup label="Halberds">'+this.dksdef[14].join('')+'</optgroup>';
	data += '<optgroup label="Whips">'+this.dksdef[15].join('')+'</optgroup>';
	data += '<optgroup label="Bows">'+this.dksdef[16].join('')+'</optgroup>';
	data += '<optgroup label="Crossbows">'+this.dksdef[17].join('')+'</optgroup>';
	data += '<optgroup label="Flames">'+this.dksdef[18].join('')+'</optgroup>';
	data += '<optgroup label="Catalysts">'+this.dksdef[19].join('')+'</optgroup>';
	data += '<optgroup label="Talismans">'+this.dksdef[20].join('')+'</optgroup>';
	data += '<optgroup label="Small Shields">'+this.dksdef[21].join('')+'</optgroup>';
	data += '<optgroup label="Standard Shields">'+this.dksdef[22].join('')+'</optgroup>';
	data += '<optgroup label="Greatshields">'+this.dksdef[23].join('')+'</optgroup>';
	data += '<optgroup label="PTDE">'+this.dksdef[24].join('')+'</optgroup>';
	return data;
}
$(document).ready(function(){
	var darksouls = new dks();
	darksouls.setup();
});