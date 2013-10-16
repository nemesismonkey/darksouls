//"use strict";
function dks() {
	this.oldURL = '';
	this.aaa = '';
	this.aab = '';
	this.aac = '';
	this.aad = '';
	this.aae = [];
	this.aaf = [];
	this.aag = [];
	this.aah = [];
	this.aai = [];
	this.g = false;
	this.eff = [];
	this.aak = 0;
	this.aal = 0;
	this.aam = 0;
	this.aap = 0;
	this.aar = 0;
	this.aas = 0;
	this.aau = 0;
	this.defp = 0;
	this.aav = 0;
	this.aax = 0;
	this.aay = 0;
	this.aaz = 0;
	this.cah = 0;
	this.gre = 0;
	this.bba = '';
	this.bbb = '';
	this.bbc = '';
	this.bbd = '';
	this.bbf = '';
	this.ring1 = '';
	this.ring2 = '';
	this.gpth = true;
	this.rings = [];
	this.armCache = [];
	this.tbr = false;
	this.clr = false;
	this.have = false;
	this.rosp = false;
	this.sspr = false;
	this.fspr = false;
	this.tspr = false;
	this.sppr = false;
	this.bbr = false;
	this.pbr = false;
	this.cbr = false;
	this.rtsr = false;
	this.btsr = false;
	this.bdr = false;
	this.ldr = false;
	this.sdr = false;
	this.dcr = false;
	this.wsr = false;
	this.dsr = false;
	this.rotsf = false;
	this.lr = false;
	this.wr = false;
	this.hr = false;
	this.hor = false;
	this.bdsag = false;
	this.dwgr = false;
	this.rir = false;
	this.cgsr = false;
	this.cssr = false;
	this.ocr = false;
	this.rof = false;
	this.rofap = false;
	this.rotee = false;
	this.ewgr = false;
	this.rotsp = false;
	this.calr = false;
	this.avarice = false;
	this.dusk = false;
	this.gata = false;
	this.blds = false;
	this.dbf = false;
	this.drak = false;
	this.dgs = false;
	this.dkg = false;
	this.dgt = false;
	this.mgs = false;
	this.coart = false;
	this.mof = false;
	this.mom = false;
	this.fthr = false;
	this.dmbc = false;
	this.catcr = false;
	this.riofs = false;
	this.rriofs = false;
	this.dragHead = false;
	this.dragBody = false;
	this.delayActi = false;
	this.mofex = false;
	this.delayFunc = function(){return false;};
	this.dksdef = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	this.dksalpha = [];
	this.excluded = [];
	this.LabelCounter = 0;
	this.equip = [0,0,0,0];
	this.oldStat = {stats:[],weapons:[],armor:[],rings:[],h2:''};
	this.nerf = false;
	this.chosen = true;
	this.ptde = true;
	this.weight = 0;
	this.specmod = 1;
	this.armorWeight = 0;
	this.weaponWeight = 0;
	this.stampen = 0;
	this.gras = 0;
	this.chil = 0;
	this.head = '';
	this.chest = '';
	this.hand = '';
	this.feet = '';
	this.pid = false;
	this.http = ('https:' == document.location.protocol ? 'https://' : 'http://');
}
;dks.prototype.setup = function(){
	this.buildArmorLists();
	this.buildWeaponLists();
	this.buildRingLists();
	this.buildSpellLists();
	this.buildItemLists();
	this.setCook();
	this.__init();
	$(".tip").tipTip({attribute:'tex',delay:50});
	if(this.chosen){
		$('select.gear,.items').chosen();
		$('#startClass,#covenant').chosen({disable_search_threshold : 10});
	}
	$('.nm15').css('margin-top','-5px');
}
dks.prototype.__init = function(){
	var url = location.search;
	var ref = /\?b=/ig;
	if(url.length && ref.test(url)){
		var hash = url.split('?b=',2);
		this.g = $.base64.decode(hash[1]).split(',');
		this.pid = postid;
	}
	ref = /\?c=/ig;
	if(url.length && ref.test(url)){
		if(b64o != 0){
		this.g = $.base64.decode(b64o).split(',');
		}
		this.pid = url.split('?c=',2)[1];
	}
	this.applyClassStats(zz.xy.sClass,this.cacheContent(),this.g);
	this.addEvents();
	var pid = this.pid;
	if(false && this.pid){
		$.ajax({
			url: 'comment.php',
			data: {'postid':pid},
			success: function(data){
				$('#cholder').html(data);
			},
			error: function(){
				
			},
			dataType: 'html',
			type: 'GET'
		});
	}
}
dks.prototype.applyClassStats = function(cl,cache,urlval,p){
	var ev = this;
	var t = true,k=false;
	if(urlval){
		zz.xy.sClass.val(urlval[0]).change();
		k = [urlval[1],urlval[2],urlval[3],urlval[4],urlval[5],urlval[6],urlval[7],urlval[8],urlval[9]];
		this.g=false;
		t=false;
	}
	this.aac = this.getCurrentClass(cl);
	this.aaa = 0 - this.aac[0];
	for(var i = 0,len = this.aac.length;i<len;i++) { this.aaa += this.aac[i]; }
	this.aab = this.aaa - this.aac[0];
	this.aad = this.aaa;
	var oldstat = [$('input[uid="vt"]').val(),$('input[uid="at"]').val(),$('input[uid="en"]').val(),$('input[uid="st"]').val(),$('input[uid="dx"]').val(),$('input[uid="rs"]').val(),$('input[uid="in"]').val(),$('input[uid="ft"]').val()]

	$('input[uid="sl"]').val(ev.aac[0]);
	$('input[uid="vt"]').val(ev.aac[1]);
	$('input[uid="at"]').val(ev.aac[2]);
	$('input[uid="en"]').val(ev.aac[3]);
	$('input[uid="st"]').val(ev.aac[4]);
	$('input[uid="dx"]').val(ev.aac[5]);
	$('input[uid="rs"]').val(ev.aac[6]);
	$('input[uid="in"]').val(ev.aac[7]);
	$('input[uid="ft"]').val(ev.aac[8]);
	cache[8] = $('input[uid="hum"]').val();
	if(k){
		cache = k;
	}
	if(cache){
		zz.xy.vt.val((cache[0]<ev.aac[1]) ? ev.aac[1] : ((cache[0] == oldstat[0]) ? ev.aac[1] : cache[0]));
		zz.xy.at.val((cache[1]<ev.aac[2]) ? ev.aac[2] : ((cache[1] == oldstat[1]) ? ev.aac[2] : cache[1]));
		zz.xy.en.val((cache[2]<ev.aac[3]) ? ev.aac[3] : ((cache[2] == oldstat[2]) ? ev.aac[3] : cache[2]));
		zz.xy.st.val((cache[3]<ev.aac[4]) ? ev.aac[4] : ((cache[3] == oldstat[3]) ? ev.aac[4] : cache[3]));
		zz.xy.dx.val((cache[4]<ev.aac[5]) ? ev.aac[5] : ((cache[4] == oldstat[4]) ? ev.aac[5] : cache[4]));
		zz.xy.rs.val((cache[5]<ev.aac[6]) ? ev.aac[6] : ((cache[5] == oldstat[5]) ? ev.aac[6] : cache[5]));
		zz.xy.it.val((cache[6]<ev.aac[7]) ? ev.aac[7] : ((cache[6] == oldstat[6]) ? ev.aac[7] : cache[6]));
		zz.xy.ft.val((cache[7]<ev.aac[8]) ? ev.aac[8] : ((cache[7] == oldstat[7]) ? ev.aac[8] : cache[7]));
		zz.xy.hum.val(cache[8]);
		zz.xy.sl.val(ev.getTotalStats());
	}
	if(p)
		this.applyEverything(false,false);
	else if(k){
		var u = 20;
		$('.weaponimg').each(function(){
			$(this).attr('typ',(! urlval[u]) ? 'normal' : urlval[u]);
			u++;
		});
		if(parseInt(urlval[u]) == 1){
			$('#2hwep').attr('checked','checked');
		}
		u = 38;
		$('.arrowimg').each(function(){
			$(this).attr('typ',(! urlval[u]) ? 'wooden' : urlval[u]);
			u++;
		});
		u = 42;
		if(! urlval[43]) {
			// do nothing is not present...
		} else {
			var ev = this;
			if(parseInt(urlval[43]) == 1 && parseInt(urlval[44]) == 1){
				this.delayActi = true;
				this.delayFunc = function(){ev.toggleDragon($('.drgon').eq(1),ev.chosen);};
				$('#lh1,#lh2,#rh1,#rh2').each(function(){
					this.getElementsByTagName('option')[0].innerHTML = 'Dragon Fist';
				});
			} else if(parseInt(urlval[43]) == 1){
				this.delayActi = true;
				this.delayFunc = function(){ev.toggleDragon($('.drgon').eq(0),ev.chosen);};
			}
		}
		if(! urlval[45]) {
			// hide the div, dont want to show on old builds
			//$('#selectableEquip').hide();
		} else {
			var vasl = [urlval[45],urlval[46],urlval[47],urlval[48],urlval[49]];
			for(var h = 0;h<5;h++){
				document.getElementById('item'+(h+1)).selectedIndex = vasl[h];
			}
		}
		this.applyEverything(false,[urlval[10],urlval[11],urlval[12],urlval[13],urlval[14],urlval[15],urlval[16],urlval[17],urlval[18],urlval[19]],[urlval[25],urlval[26],urlval[27],urlval[28],urlval[29],urlval[30],urlval[31],urlval[32],urlval[33],urlval[34],urlval[35],urlval[36],urlval[37]])
	}
	else
		this.applyEverything(true,false);
}
dks.prototype.applyEverything = function(boo,k,ar){
	if(this.dragHead && $('#headgear')[0].selectedIndex != 0) {
		if(this.chosen)
		$('#headgear').trigger("liszt:default");
		$('#headgear')[0].selectedIndex = 0;
	}
	if(this.dragBody && $('#chestgear')[0].selectedIndex != 0) {
		if(this.chosen)
		$('#chestgear').trigger("liszt:default");
		$('#chestgear')[0].selectedIndex = 0;
	}
	this.applyRings(k);
	this.applyArmor(boo,k);
	this.calcDefenses();
	this.getActiveEffects((!this.fthr) ? true : false)
	this.applyHp();
	this.applyAt(ar);
	this.applyHum();
	this.addSouls();
	this.getStat64();
	this.calcAR();
	this.applySpellCov(ar);
	this.meetReq();
	this.getAllDefStats();
	if(!this.fthr && !k)
	this.detSpellSort();
	this.fthr = true;
	this.coOpRange();
	if(this.delayActi){
		this.delayActi = false;
		this.delayFunc();
	}
}
dks.prototype.addEvents = function(){
	var evha = this;
	$('.items').change(function(){
		evha.getStat64();
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
			evha.getTotalStats();
			evha.applyEverything(false,false);
			$(this).blur();
			evha.updateSoulTotal();
			evha.updateBestClass();
	});
	$('#startClass').change(function(){evha.applyClassStats($('#startClass'),evha.cacheContent(),false,true);});
	$('.gear').focus(function(){
			evha.ring1 = zz.xy.ring1.val();
			evha.ring2 = zz.xy.ring2.val();
			zz.xy.ring2.find($('option[value="'+evha.ring1+'"]')).css('display','none');
			zz.xy.ring1.find($('option[value="'+evha.ring2+'"]')).css('display','none');
		}).change(function(){
		 evha.getArmor($(this).val());
		 evha.getWeap($(this).val());
		 zz.xy.ring1.find($('option')).removeAttr('style');
		 zz.xy.ring2.find($('option')).removeAttr('style');			 
		evha.applyEverything(false,false);
		if(($(this).prop('id') == 'lh1' ||
			$(this).prop('id') == 'rh1' ||
			$(this).prop('id') == 'lh2' ||
			$(this).prop('id') == 'rh2')) {
				if(evha.gpth) 
					$('.weaponimg[fo="'+$(this).prop('id')+'"]').click();
				evha.equip = [];
				for(var i = 0;i<4;i++){
					var txt = '';
					switch(i){
						case(0):
						txt = '#lh1';
						break;
						case(1):
						txt = '#rh1';
						break;
						case(2):
						txt = '#lh2';
						break;
						case(3):
						txt = '#rh2';
						break;
					}
					evha.equip[i] = $(txt).find('option:selected').attr('ind');
				}
				evha.addSouls();
			}
	});
	$('.d img').click(function(){
		var hand = $(this).attr('fo');
		var typ = $(this).attr('typ');
		var sel = $('#'+hand);
		var pos = $(this).position();
		evha.makeTypeModal(pos,hand,sel,typ,$(this));
	});
	
	$('#revert').click(function(){
		zz.xy.hum.val(0);
		$('select.gear,#covenant').trigger("liszt:default");
		$('.weaponimg').each(function(){
			$(this).attr('typ','normal');
		})
		$('#2hwep').attr('checked',false);
		$('.items').each(function(){
			this.selectedIndex = 0;
		});
		evha.getTotalStats();
		evha.getRing(true);
		evha.applyClassStats(zz.xy.sClass,false);
	});
	$('#url').bind('click focus',function(){this.select();}).mouseup(function(e){
		e.preventDefault();
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
				var uid = $(this).attr('uid');
				if(uid!='hum'){
					var min = $('input:disabled[uid="'+uid+'"]');
					if((parseInt(newVal))>(parseInt(min.val())-1) && parseInt(newVal)<100){
						evha.getTotalStats();
						evha.applyEverything(false,false);
						evha.updateSoulTotal();
						evha.updateBestClass();
					}else {
						$(this).val($(this).data('cache'));
						evha.updateBestClass();
					}
				} else {
					if($(this).val() >= 0 && $(this).val() < 100){
						$(this).val(newVal);
						evha.getTotalStats();
						evha.applyEverything(false,false);
						evha.updateSoulTotal();
					} else{
						$(this).val($(this).data('cache'));
					}
				}
			}
		} else {
			$(this).removeClass('blur')
		}
		return false;
	});
	$('input[fid]:not([disabled]):not([readonly])').focus(function(){
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
			var newVal = $(this).val()
			var fake = false;
			if(!newVal){
				fake = true;
				newVal = 0;
			}else if(isNaN(newVal)){
				fake = true;
				newVal = 0;
				$(this).val($(this).data('cache'))
			}
			if(parseInt(newVal) == 0)
				newVal = 0;
			if($(this).data('cache') != newVal){
				var fid = $(this).attr('fid');
				var min = $('input:disabled[fid="'+fid+'"]');
				if((parseInt(newVal))>(-1) && parseInt(newVal)<100){
					var cache = [
						(!($('#cvitality_fake').val())?0:parseInt($('#cvitality_fake').val())),
						(!($('#cattunement_fake').val())?0:parseInt($('#cattunement_fake').val())),
						(!($('#cendurance_fake').val())?0:parseInt($('#cendurance_fake').val())),
						(!($('#cstrength_fake').val())?0:parseInt($('#cstrength_fake').val())),
						(!($('#cdexterity_fake').val())?0:parseInt($('#cdexterity_fake').val())),
						(!($('#cresistance_fake').val())?0:parseInt($('#cresistance_fake').val())),
						(!($('#cintelligence_fake').val())?0:parseInt($('#cintelligence_fake').val())),
						(!($('#cfaith_fake').val())?0:parseInt($('#cfaith_fake').val()))
					]
					evha.findBestClass(cache)
					$('#apply').removeAttr('disabled');
				}else {
					if(fake)
						$(this).val('');
					else
						$(this).val($(this).data('cache'));
				}
			} else {
				$(this).removeClass('blur')
			}
		});
	$('#revert_fake').click(function(){
		$('#bclass_fake').val('No stats yet...');
		$('#bsoulLevel_fake').val('');
		$('#csoulLevel_fake').val('');
		$('#bvitality_fake').val('');
		$('#battunement_fake').val('');
		$('#bendurance_fake').val('');
		$('#bstrength_fake').val('');
		$('#bdexterity_fake').val('');
		$('#bresistance_fake').val('');
		$('#bintelligence_fake').val('');
		$('#bfaith_fake').val('');
		$('#cvitality_fake').val('');
		$('#cattunement_fake').val('');
		$('#cendurance_fake').val('');
		$('#cstrength_fake').val('');
		$('#cdexterity_fake').val('');
		$('#cresistance_fake').val('');
		$('#cintelligence_fake').val('');
		$('#cfaith_fake').val('');
		$('.rankings').html("<span class='faded'>No stats entered yet.</span>");
		$('#apply').attr('disabled',true);
	});
	$('#apply').click(function(){
		if($(this).attr('disabled')){
			return false;
		}else if(!$('#csoulLevel_fake').val()){
			return false;
		} else {
			var cache = [
				(!($('#cvitality_fake').val())?0:parseInt($('#cvitality_fake').val())),
				(!($('#cattunement_fake').val())?0:parseInt($('#cattunement_fake').val())),
				(!($('#cendurance_fake').val())?0:parseInt($('#cendurance_fake').val())),
				(!($('#cstrength_fake').val())?0:parseInt($('#cstrength_fake').val())),
				(!($('#cdexterity_fake').val())?0:parseInt($('#cdexterity_fake').val())),
				(!($('#cresistance_fake').val())?0:parseInt($('#cresistance_fake').val())),
				(!($('#cintelligence_fake').val())?0:parseInt($('#cintelligence_fake').val())),
				(!($('#cfaith_fake').val())?0:parseInt($('#cfaith_fake').val()))
			];
			zz.xy.sClass.val($.trim($('#bclass_fake').val().toLowerCase()));
			$('#startClass_chzn .chzn-single span').text(zz.xy.sClass.find(':selected').text());
			evha.applyClassStats(zz.xy.sClass,cache,false,true);
		}
		$('.cselector').click();
	});
	$('.up_fake,.down_fake').click(function(e){
		var edit = $(this).attr('fid');
		var target = $('input[fid="'+edit+'"]').not(':disabled');
		if($(this).hasClass('up_fake')){
			evha.changefValUp(target,e);
		}
		if($(this).hasClass('down_fake')){
			evha.changefValDown(target,e);
		}	
			var cache = [
				(!($('#cvitality_fake').val())?0:parseInt($('#cvitality_fake').val())),
				(!($('#cattunement_fake').val())?0:parseInt($('#cattunement_fake').val())),
				(!($('#cendurance_fake').val())?0:parseInt($('#cendurance_fake').val())),
				(!($('#cstrength_fake').val())?0:parseInt($('#cstrength_fake').val())),
				(!($('#cdexterity_fake').val())?0:parseInt($('#cdexterity_fake').val())),
				(!($('#cresistance_fake').val())?0:parseInt($('#cresistance_fake').val())),
				(!($('#cintelligence_fake').val())?0:parseInt($('#cintelligence_fake').val())),
				(!($('#cfaith_fake').val())?0:parseInt($('#cfaith_fake').val()))
			]
			evha.findBestClass(cache);
			$(this).blur();
	});
	$('#cancel').click(function(){
		evha.toggle1Dia();
		$('.cselector').attr('state','t')	
	});
	$('.cselector').click(function(){
		if($(this).attr('state') == 't'){
			evha.toggle2Dia();
			$(this).attr('state','p');
		} else {
			evha.toggle1Dia();
			$(this).attr('state','t');
		}
	});
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
	$('#settings').click(function(){
		var dis = $('.settings').css('display');
		if(dis == 'none'){
			$('.settings').fadeIn(200,function(){
				$(this).mouseleave(function(){
					$('.settings').fadeOut(200);
					$(this).unbind('mouseleave');
					$(document).unbind('click');
				});
				setTimeout(function(){
					$(document).click(function(){
						$('.settings').fadeOut(200);
						$(this).unbind('click');
					});
				},2);
				$('.settings').click(function(e) {
					e.stopPropagation();
				});
			});
		} else {
			$('.settings').fadeOut(200).unbind('mouseleave');
			$(document).unbind('click');
		}
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
		if($(this).val() == 'on'){
			
		} else {
			$('#revert_fake').click();
		}
		$.cookie("autoup", null);
		$.cookie("autoup", $(this).val(),{expires : 365, path: '/'});
	});
	$('.pathsel').click(function(){
		
		if($(this).val() == 'on'){
			evha.gpth = true;
		} else {
			evha.gpth = false;
		}
		
		$.cookie("path", null);
		$.cookie("path", $(this).val(),{expires : 365, path: '/'});
	});
	$('.nerf').click(function(){
		
		if($(this).val() == 'on'){
			evha.nerf = true;
			evha.calcDefenses(true)
		} else {
			evha.nerf = false;
			evha.calcDefenses(true)
		}
		
		$.cookie("nerf", null);
		$.cookie("nerf", $(this).val(),{expires : 365, path: '/'});
	});
	$('.chssel').click(function(){
		
		if($(this).val() == 'on'){
			evha.chosen = true;
		} else {
			evha.chosen = false;
		}
		$.cookie("chosen", null);
		$.cookie("chosen", $(this).val(),{expires : 365, path: '/'});
	});
	$('.lh1,.lh2,.rh1,.rh2').click(function(){
		if($(this).html() == 'LH1'){
			$(this).addClass('blue');
			$('.lh2').removeClass('blue');
		}
		if($(this).html() == 'LH2'){
			$(this).addClass('blue');
			$('.lh1').removeClass('blue');
		}
		if($(this).html() == 'RH1'){
			$(this).addClass('blue');
			$('.rh2').removeClass('blue');
		}
		if($(this).html() == 'RH2'){
			$(this).addClass('blue');
			$('.rh1').removeClass('blue');
		}
		evha.getWeap(true);
		evha.applyEverything(false,false)
	});
	$('#2hwep').change(function(){
		evha.calcAR(true);
		evha.getStat64();
	});
	
	$('.texti').click(function(){
		$('#texti').fadeIn(300,function(){
			setTimeout(function(){
				$('.texover').click(function() {
					$('#texti,.texover').fadeOut(300);
					$('.texover').unbind('click');
				});
				$('.tclos').click(function(){
					$('#texti,.texover').fadeOut(300);
					$('.tclos').unbind('click');
					$('.texover').unbind('click');
				});
			},1);
			function _case(st) {
				return st.substr(0,1).toUpperCase() + st.substr(1).toLowerCase();
			}
			var strin = 'SL ' + zz.xy.sl.val() + ' ' + zz.xy.sClass.val().charAt(0).toUpperCase() + zz.xy.sClass.val().substring(1) + '\n\n';
			strin += 'Vit: ' + ((zz.xy.vt.val() == zz.xy.bvt.val()) ? '-' : zz.xy.vt.val()) + '\n';
			strin += 'Att: ' + ((zz.xy.at.val() == zz.xy.bat.val()) ? '-' : zz.xy.at.val()) + '\n';
			strin += 'End: ' + ((zz.xy.en.val() == zz.xy.ben.val()) ? '-' : zz.xy.en.val()) + '\n';
			strin += 'Str: ' + ((zz.xy.st.val() == zz.xy.bst.val()) ? '-' : zz.xy.st.val()) + '\n';
			strin += 'Dex: ' + ((zz.xy.dx.val() == zz.xy.bdx.val()) ? '-' : zz.xy.dx.val()) + '\n';
			strin += 'Res: ' + ((zz.xy.rs.val() == zz.xy.brs.val()) ? '-' : zz.xy.rs.val()) + '\n';
			strin += 'Int: ' + ((zz.xy.it.val() == zz.xy.bit.val()) ? '-' : zz.xy.it.val()) + '\n';
			strin += 'Fai: ' + ((zz.xy.ft.val() == zz.xy.bft.val()) ? '-' : zz.xy.ft.val()) + '\n\n';
			
			var tpus = [$('.weaponimg[fo="rh1"]').attr('typ'),$('.weaponimg[fo="rh2"]').attr('typ'),$('.weaponimg[fo="lh1"]').attr('typ'),$('.weaponimg[fo="lh2"]').attr('typ')];
			
			strin += 'R1: ' + ((tpus[0] != 'normal') ? _case(tpus[0]) + ' ' : '') + zz.xy.rh1.find("option:selected").text() + '\n';
			strin += 'R2: ' + ((tpus[1] != 'normal') ? _case(tpus[1]) + ' ' : '') + zz.xy.rh2.find("option:selected").text() + '\n';
			
			strin += 'L1: ' + ((tpus[2] != 'normal') ? _case(tpus[2]) + ' ' : '') + zz.xy.lh1.find("option:selected").text() + '\n' 
			strin += 'L2: ' + ((tpus[3] != 'normal') ? _case(tpus[3]) + ' ' : '') + zz.xy.lh2.find("option:selected").text() + '\n\n';
			
			strin += 'Armor:\n' + zz.xy.hgear.find("option:selected").text() + '\n' + zz.xy.cgear.find("option:selected").text() + '\n' + zz.xy.agear.find("option:selected").text() + '\n' + zz.xy.fgear.find("option:selected").text() + '\n\n';
			
			strin += 'Rings:\n' + zz.xy.ring1.find("option:selected").text() + '\n' + zz.xy.ring2.find("option:selected").text() + '\n\n';
			var spellArr = [$('#spell1').val(),$('#spell2').val(),$('#spell3').val(),$('#spell4').val(),$('#spell5').val(),$('#spell6').val(),$('#spell7').val(),$('#spell8').val(),$('#spell9').val(),$('#spell10').val(),$('#spell11').val(),$('#spell12').val()];
			var f = 0,newspell = [];
			for(var i=0;i<spellArr.length;i++){
				if(spellArr[i] != '0'){
					newspell[f] = spellArr[i];
					f++;
				}
			}
			var ns = '';
			if(newspell.length){
				var compressed = [];
				var copy = newspell.slice(0);
				for (var i = 0; i < newspell.length; i++) {
					var myCount = 0;	
					for (var w = 0; w < copy.length; w++) {
						if (newspell[i] == copy[w]) {
							myCount++;
							delete copy[w];
						}
					}
					if (myCount > 0) {
						var a = new Object();
						a.value = newspell[i];
						a.count = myCount;
						compressed.push(a);
					}
				}
					for (var i=0;i<compressed.length;i++){
					var nval = $('#spell1').find('option[value="'+compressed[i].value+'"]').text();
					var end = nval.length-4;
					nval = nval.substring(0,end);
					ns += nval+((compressed[i].count > 1) ? '(x'+compressed[i].count+')\n' : '\n');
				}
				//ns = ns.substring(0,ns.length-3);
				strin += 'Spells:\n' + ns;
			} else {
				strin += 'No Spells';
			}
			
			
			
			
			$('.smptext').val(strin);
			setTimeout(function(){$('.smptext').click()},1);
			
		});
		$('.texover').fadeIn(300);
		evha.getStat64()
	});
	$('.rand').click(function(){
		var pos = $(this).offset();
		var hei = $(this).height();
		$('#randlims').css({'top':(pos.top+hei+10)+'px','left':(pos.left-45)+'px'}).fadeIn(200,function(){
			setTimeout(function(){
				$(document).click(function(){
					$(this).unbind('click');
					$('#randlims').hide().unbind('click');
				});
			},100);
			$('#randlims').click(function(e){
				e.stopPropagation();
			});
		});
		
	});
	$('#gobox').click(function(){
		var isInt = function(n) {
		   return typeof n === 'number' && n % 1 == 0;
		}
		var valu = parseInt($('#lvllimiti').val(),10);
		if(isInt(valu) && valu > 9){
			var etN = function(base,mod){
				return Math.floor((Math.random()*base)+mod) + ',';
			}
			var etU = function(base,mod){
				return Math.floor((Math.random()*base)+mod);
			}
			var t = zz.xy.sClass.find('option').eq(Math.floor((Math.random()*5))).val();
			var p;
			switch(t){
				case('warrior'):p=zz.stats.warrior;break;
				case('knight'):p=zz.stats.knight;break;
				case('wanderer'):p=zz.stats.wanderer;break;
				case('thief'):p=zz.stats.thief;break;
				case('bandit'):p=zz.stats.bandit;break;
				case('hunter'):p=zz.stats.hunter;break;
				case('sorcerer'):p=zz.stats.sorcerer;break;
				case('pyromancer'):p=zz.stats.pyromancer;break;
				case('cleric'):p=zz.stats.cleric;break;
				case('deprived'):p=zz.stats.deprived;break;
			}
			t += ',';
			var hold = [];
			var mins = [p[1],p[2],p[3],parseInt(zz.xy.bst.val(),10),parseInt(zz.xy.bdx.val(),10),parseInt(zz.xy.brs.val(),10),parseInt(zz.xy.bit.val(),10),parseInt(zz.xy.bft.val(),10)];
			var tota = 0;
			var g = 0;
			for(var i=0;i<8;i++){
				var s = etU(91,8);
				hold[i] = s;
				tota = tota + s;
				g = g + p[i+1];
				//t += etN(91,8);
			}
			

			tota = tota - g + p[0];
			while(tota > valu) {
				var f = etU(8,0);
				if(p[f+1] > hold[f]-1){
					hold[f] = p[f+1];
				} else {
					hold[f]--;
					tota--;
				}
			}
			for(var y = 0;y<8;y++){
				t += hold[y]+',';
			}
			var maxat = zz.att[hold[1]];
			t += etN(91,8);
			
			t += etN(61,0);
			t += etN(52,0);
			t += etN(52,0);
			t += etN(52,0);
			var hol = 0;
			for(var x = 0;x<2;x++){
				var numi = etU(34,0);

				if(numi != hol){
					if(numi == 17 || numi == 18)
						maxat++;
					
					t += numi+',';
					hol = numi;
				} else
					x--;
			}
			
			t += etN(173,0);
			t += etN(173,0);
			t += etN(173,0);
			t += etN(173,0);
			for(var i=0;i<4;i++){
				t += $('#wepo').children('div').eq(Math.floor((Math.random()*9))).attr('tpy') + ',';
			}
			t += Math.round(Math.random()) + ',';
			for(var i=0;i<12;i++){
				var sp =  etU(67,0);
				if(sp == 32 || sp == 36 || sp == 38 || sp == 50 || sp == 52 || sp == 55 || sp == 63 || sp == 70)
					maxat--;
				if(i < maxat)
					t += sp+',';
				else 
					t += '0,';
			}
			t += etN(9,0);
			for(var i=0;i<4;i++){
				t += $('#arpo').children('div').eq(Math.floor((Math.random()*12))).attr('tpy') + ((i != 3) ? ',' : '');
			}
			
			var c = $.base64.encode(t);
				window.location = evha.http + location.hostname.replace('direct\.','') + location.pathname + '?b='+c;
		} else {
			console.log('error');
		}
	});
	$("#lvllimiti").keydown(function(event) {
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
            (event.keyCode == 65 && event.ctrlKey === true) || 
            (event.keyCode >= 35 && event.keyCode <= 39)) {
                 return;
        }
        else {
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault(); 
            }   
        }
    }).click(function(){
		this.select();
		}).focus(function(){
			$(this).data('val',$(this).val());
			}).blur(function(){
				var nval = $(this).val();
				var isInt = function(n) {
				   return typeof n === 'number' && n % 1 == 0;
				}
				if(!isInt(nval) && !(nval > 9)){
					$(this).val($(this).data('val'))
				}
				});
	$('.smptext').click(function(){
		this.select();
	}).mouseup(function(e){
		e.preventDefault();
	});
	$('.spell').focus(function(e){
		if(!evha.chosen){
			var t = $(this),n=[];
			$('.spell').each(function(index){
				if(t != $(this)){
					n[index] = Number($(this).find('option:selected').attr('ind'));
				} else {
					n[index] = 0;
				}
			});
			var opt = $(this).find('option');
			for(var i = 0,len = opt.length;i<len;i++){
				var top = $(opt[i]);
				var too = top.parent().attr('label');
				var typ = (too == 'Magic' || too == 'PTDE') ? parseInt(zz.xy.it.val()) : parseInt(zz.xy.ft.val());
				var req = parseInt(top.attr('req'));
				if(typ < req){
					top.addClass('faded');
				} else {
					top.removeClass('faded');
				}
			}
			evha.gre = $(this).val();
			var j = parseInt($('#covenant').val());
			$(this).find('option[ind="50"]').attr('disabled','disabled');
			$(this).find('option[ind="52"]').attr('disabled','disabled');
			$(this).find('option[ind="55"]').attr('disabled','disabled');
			$(this).find('option[ind="61"]').attr('disabled','disabled');
			
			if(j == 1){
				$(this).find('option[ind="50"]').removeAttr('disabled'); //prin
				$(this).find('option[ind="52"]').removeAttr('disabled');
			}
			if(j == 2){
				if($.inArray(55,n) < 0)
				$(this).find('option[ind="55"]').removeAttr('disabled'); //sunl
			}
			if(j == 3){
				if($.inArray(61,n) < 0)
				$(this).find('option[ind="61"]').removeAttr('disabled'); //bodm
			}
				
			
		} else
			return false;
		}).change(function(){
			
		var numSpells = parseInt(zz.xy.ats.val());
		var speAr = [$('#spell1'),$('#spell2'),$('#spell3'),$('#spell4'),$('#spell5'),$('#spell6'),$('#spell7'),$('#spell8'),$('#spell9'),$('#spell10'),$('#spell11'),$('#spell12')];
		var coun = 0;
		if(numSpells > 0) {
			for(var i=0;i<numSpells;i++){
				coun += parseInt(speAr[i].find('option:selected').attr('cos'));
			}
			if(coun > numSpells){
				$(this).val(evha.gre);
			} else {
				evha.meetReq($(this),true);
				evha.detSpellSort();
				$(this).blur();
				evha.getStat64();
			}
		}
		}).mouseup(function(){
			if(evha.chosen){
			//alert($(this).offset());
			evha.gre = $(this).val();
			var type = $(this).prop('id');
			var pos = $(this).offset();
			var top = pos.top - 240;
			var div = $('<div id="m-'+type+'" class="forced-modal secondary"><div class="modalar4"></div></div>');
			div.css({'top':(top)+'px','left':(pos.left-35)+'px'});
			var div2 = $('<div id="i-'+type+'" class="inner-forced"></div>');
			var div3 = $('<div id="s-'+type+'" class="search"><input id="sf-'+type+'" type="text" autocomplete="off" tabindex="-1"></div>')
			
			
			var mnt = function(type,arr,i) {
				var col = Math.floor(i/5) * 25 * -1;
				var row = Math.round(((i/5) - Math.floor(i/5)) * 125) * -1;
				//console.log(row+'px '+col+'px')
				var too = type;
				var cls = '',disbl = '';
				var typ = (too == 'magic' || too == 'ptde') ? parseInt(zz.xy.it.val()) : parseInt(zz.xy.ft.val());
				if(typ < arr[4]){
					cls = ' faded';
				} else {
					
				}
				if(arr[5] > 0){
					var j = parseInt($('#covenant').val());
					disbl = (arr[5] == j) ? '' : ' disabled';
				}
				return '<div id="ti-'+ i + '" class="inner-ele'+cls+' '+too+disbl+' '+arr[0]+'" val="'+arr[0]+'"><span class="innerflr">' + arr[2] + '</span><img src="img/transparent.png" style="background-position:'+row+'px '+col+'px'+'" alt="spell image" class="spellimage" /> <span>' + arr[1] + '</span></div>';
			}
			
			
			var str = '<div id="ti-none" class="inner-ele" val="0">No Spell</div><div class="borders" id="magicheader"><span class="innerflr">cost</span>Magic</div>';
			var arr = zz.spells.sorc;
			var i = 0;
			for(var len = arr.length;i<len;i++){
				if(arr[i] !== undefined && arr[i][0] != 'nill'){
					//str += '<div id="ti-'+ i + '" class="inner-ele magic">' + arr[i][1] + '</div>';
					str += mnt('magic',arr[i],i);
				}
			}
			str += '<div class="borders" id="pyroheader"><span class="innerflr">cost</span>Pyromancy</div>';
			var arr = zz.spells.pyro;
			for(var g = 0, len = arr.length + i;i<len;i++,g++){
				if(arr[g] !== undefined && arr[g][0] != 'nill'){
					//str += '<div id="ti-'+ i + '" class="inner-ele pyro">' + arr[i][1] + '</div>';
					str += mnt('pyro',arr[g],i);
				}
			}
			str += '<div class="borders" id="miraheader"><span class="innerflr">cost</span>Miracles</div>';
			var arr = zz.spells.mira;
			for(var g = 0,len = arr.length + i;i<len;i++,g++){
				if(arr[g] !== undefined && arr[g][0] != 'nill'){
					//str += '<div id="ti-'+ i + '" class="inner-ele mira" val="' + arr[i][0] + '">' + arr[i][1] + '</div>';
					str += mnt('mira',arr[g],i);
				}
			}
			str += '<div class="borders" id="ptdeheader"><span class="innerflr">cost</span>PTDE</div>';
			var arr = zz.spells.ptde;
			for(var g = 0,len = arr.length + i;i<len;i++,g++){
				if(arr[g] !== undefined && arr[g][0] != 'nill'){
					//str += '<div id="ti-'+ i + '" class="inner-ele mira" val="' + arr[i][0] + '">' + arr[i][1] + '</div>';
					str += mnt('ptde',arr[g],i);
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
				//var tarid = '#i-'+$("#"+type).prop('id');
				//var found = $(tarid).find('div[val="'+$("#"+type).val()+'"]');
				if($('#m-'+type+' .inner-ele').find('.'+$("#"+type).val()) != 0){
					$('#i-'+type).animate({
						scrollTop: $('#i-'+$("#"+type).prop('id')).find('div[val="'+$("#"+type).val()+'"]').position().top
					}, 100);
				}
			$('#m-'+type+' .inner-ele').filter(function(){
				if($(this).hasClass('disabled')){
					return false;
				}
					return true;
				}).click(function(){
				var vl = $(this).attr('val');
				
				$('#'+type).val(vl).change();
				$('#m-'+type+'').remove();
				$(document).unbind('click');
				$('#m-'+type+' .inner-ele').unbind('click');
			});
			$('#m-'+type).click(function(e) {
				e.stopPropagation();
			});
			$('#sf-'+type).focus();
			$('#sf-'+type).keydown(function(event){
				var stroke, _ref;
				  stroke = (_ref = event.which) != null ? _ref : event.keyCode;
				  switch (stroke) {
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
				$('.inner-ele:first').parent().append('<div class="no-found"><center><strong>No matching spells, pyros or miracles</strong></center></div>');
			   }
			   if($('.inner-ele.magic:visible').length < 1)
					$('#magicheader').hide();
				else
					$('#magicheader').show();
					
				if($('.inner-ele.pyro:visible').length < 1)
					$('#pyroheader').hide();
				else
					$('#pyroheader').show();
					
				if($('.inner-ele.mira:visible').length < 1)
					$('#miraheader').hide();
				else
					$('#miraheader').show();
				if($('.inner-ele.ptde:visible').length < 1)
					$('#ptdeheader').hide();
				else
					$('#ptdeheader').show();
					
			    var pos = $('#'+type).offset();
				var top = pos.top - $('#m-'+type).outerHeight()-1;
			   $('#m-'+type).css({'top':(top)+'px'});
			});
			return false;
			}
		}).mousedown(function(){
			if(evha.chosen){
			return false;
			}
		});
	$('#covenant').change(function(){
		var speAr = [$('#spell1'),$('#spell2'),$('#spell3'),$('#spell4'),$('#spell5'),$('#spell6'),$('#spell7'),$('#spell8'),$('#spell9'),$('#spell10'),$('#spell11'),$('#spell12')];
		var j = parseInt($('#covenant').val());
		for(var i=0;i<speAr.length;i++){
			if(!speAr[i].is(':disabled')){
				var k = parseInt(speAr[i].find('option:selected').attr('spec'));
				
				
				if(k != 0){
					if(k != j)
						speAr[i][0].selectedIndex = 0;
						speAr[i].css('color','#333');
						evha.detSpellSort();
				}
			}
		}
		evha.getStat64();
	});
	$('#savel').click(function(){
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
	$('#fsave,#lsave').click(function(){
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
			if($(this).attr('id') == 'fsave') {
				$('.datbox').html('<center><span class="small faded muyj">Uploading build</span><img src="img/loading.gif" width="208" height="13" /></center>');
				$.ajax({
					type: 'POST',
					url: 'upload.php',
					data: {'aut' : sAuthor, 'til' : sTitle, 'b6' : evha.getStat64(true), 'public' : (($('#savePublic').is(':checked')) ? 1 : 0), 'hash' : sHash, 'tolist':hSele,'newlist':sNlist,
						'soulevel':$('#csoulLevel').val(),
						'vit':$('#cvitality').val(),
						'att':$('#cattunement').val(),
						'end':$('#cendurance').val(),
						'str':$('#cstrength').val(),
						'dex':$('#cdexterity').val(),
						'res':$('#cresistance').val(),
						'int':$('#cintelligence').val(),
						'fai':$('#cfaith').val(),
						'hp':$('#bhealth').val(),
						'stam':$('#bstamina').val(),
						'phy':$('#bdef').val().replace(/\(\d*\)/ig,''),
						'strike':$('#bstrike').val(),
						'slash':$('#bslash').val(),
						'thrust':$('#bthrust').val(),
						'magic':$('#bmagic').val().replace(/\(\d*\)/ig,''),
						'flame':$('#bflame').val().replace(/\(\d*\)/ig,''),
						'light':$('#blight').val().replace(/\(\d*\)/ig,''),
						'poise':$('#bpoise').val(),
						'bleed':$('#bbleed').val(),
						'poison':$('#bposion').val(),
						'curse':$('#bcurse').val(),
						'desc':$('#sevdes').val()
					},
					success: function(data){
						var success = true;
						try {
							data = $.parseJSON(data);
						}catch(e){
							success = false;
						}
						if(success && Object.prototype.toString.call(data) == '[object Object]'){
							if(parseInt(data.a) > 0 && !isNaN(data.a)){
								$('#fsave').attr('disabled',false);
								$('.datbox').html(((data.b) ? '<span class="small red">'+data.b + '</span>' : '<strong>Upload Successful</strong><br><span class="small blue">Your save link:') + '<br><input type="text" style="width:100%;font-size:13px;float:none;" value="' + evha.http +location.hostname.replace('direct\.','') + location.pathname + '?c=' + data.a + '" />').find('input').click(function(){this.select()}).mouseup(function(e){e.preventDefault()}).keypress(function(e){var key = e.which;if(key == 13){e.preventDefault();return false;}}).click();
								if(sNlist.length > 4 && sNlist && data.c){
									var opthtml = $('#lSelec').html();
									$('#lSelec').html(opthtml + '<option value="'+data.c+':::::'+data.d+'">'+data.d+'</option>')
									$('#savelist').val('').focus().blur();
								}
							}else if(parseInt(data.a) == 0 && !isNaN(data.a)){
								$('.datbox').html('Could not upload to database.');
								$('#fsave').attr('disabled',false);
							} else {
								$('.datbox').html(data.a);
								$('#fsave').attr('disabled',false);
							}
						} else {
							$('.datbox').html('<span class="small red">An error has occured: Please try again</span>');
							$('#fsave').attr('disabled',false);
						}
					},
					cache : false,
					dataType : 'text'
				});
			} else {
				$('.datbox').html('<center><span class="small faded muyj">Saving Locally</span><img src="img/loading.gif" width="208" height="13" /></center>');
				var data = {'aut' : sAuthor, 'til' : sTitle, 'b6' : evha.getStat64(true), 'publicn' : (($('#savePublic').is(':checked')) ? 1 : 0), 'hash' : sHash, 'tolist':hSele,'newlist':sNlist,
						'soulevel':$('#csoulLevel').val(),
						'vit':$('#cvitality').val(),
						'att':$('#cattunement').val(),
						'end':$('#cendurance').val(),
						'str':$('#cstrength').val(),
						'dex':$('#cdexterity').val(),
						'res':$('#cresistance').val(),
						'int':$('#cintelligence').val(),
						'fai':$('#cfaith').val(),
						'hp':$('#bhealth').val(),
						'stam':$('#bstamina').val(),
						'phy':$('#bdef').val().replace(/\(\d*\)/ig,''),
						'strike':$('#bstrike').val(),
						'slash':$('#bslash').val(),
						'thrust':$('#bthrust').val(),
						'magic':$('#bmagic').val().replace(/\(\d*\)/ig,''),
						'flame':$('#bflame').val().replace(/\(\d*\)/ig,''),
						'light':$('#blight').val().replace(/\(\d*\)/ig,''),
						'poise':$('#bpoise').val(),
						'bleed':$('#bbleed').val(),
						'poison':$('#bposion').val(),
						'curse':$('#bcurse').val(),
						'desc':$('#sevdes').val(),
						'daten':Math.round(+new Date()/1000),'u':false};
				var key = 'b' + Math.floor((Math.random()*100000000000)); 
				$.totalStorage(key, data);
				var val = $.totalStorage(key);
				if(val) {
					setTimeout(function(){$('.datbox').html('<strong>Local save successful</strong><br><span class="small blue">Your can view your local saves <a href="./local" class="faded">here</a></span>');},1000);
				}
				$(this).attr('disabled',false);
			}
		} else {
			$('#fsave').attr('disabled',false);
		}
		
		return false;
	});
	$('#saveTitle,#saveAuthor,#savePublic,.smptext,input[readonly],#2hwep,input:radio,#url').keypress(function(e){var key = e.which;if(key == 13){e.preventDefault();return false;}})
	$('#saveAuthor,#saveTitle').click(function(){this.select()}).mouseup(function(e){e.preventDefault()});
	$('#savelist').click(function(){
		this.select();
	}).mouseup(function(e){e.preventDefault()});
	$("#savelist").focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr("placeholder")) {
			input.val("");
			input.css('color','#333');
		  }
		}).blur(function() {
		  var input = $(this);
		  if (input.val() == "" || input.val() == input.attr("placeholder")) {
			input.css('color','#aaa');
			input.val(input.attr("placeholder"));
		  }
		}).blur();
	$('#mini').click(function(){
		var url = location.hostname.replace('direct\.','') + location.pathname + '?b=' + evha.getStat64(true);
		$('#minilink').fadeIn(300,function(){
			setTimeout(function(){
				$('.texover').click(function() {
					$('#minilink,.texover').fadeOut(300);
					$('.texover').unbind('click');
				});
				$('.tclos,#fcancel').click(function(){
					$('#minilink,.texover').fadeOut(300);
					$('.tclos').unbind('click');
					$('.texover').unbind('click');
				});
			},1);
		});
		if(evha.oldURL != url)
			$('#ministatus').html('<center><span class="small faded muyj">Creating Link</span><img src="img/loading.gif" width="208" height="13" /></center>');
		else
			$('#ministatus').find('input').click();
		$('.texover').fadeIn(300);
		if(evha.oldURL != url)
		$.ajax({
			type: 'POST',
			url: 'mini.php',
			data: {'url' : url},
			success: function(data){
				$('#ministatus').html('<center><input type="text" style="width:100%;font-size:13px;float:none;" value="'+$.trim(data)+'" readonly="readonly"/></center>').find('input').click(function(){this.select()}).mouseup(function(e){e.preventDefault()}).keypress(function(e){var key = e.which;if(key == 13){e.preventDefault();return false;}}).click();
			},
			cache : false
		});
		evha.oldURL = url;
		return false;
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
	$('.fbuil').click(function(){evha.ispohr();});
	$('.fcancel').click(function(){$('#armor-sets').html('');$('.removeme').click()});
	$('.edita').click(function(){
		evha.createForced($(this), $(this).parent().attr('id')); 
	});

	evha.parseCharCounts();
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
	$('.minim2').keydown(function(event) {
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
				targ.removeClass('hidden').css('display','inline');
				if(jQuery.fx.off) {
					setTimeout(function(){targ.addClass('hidden')},2000);
				} else 
					targ.fadeOut(2000,function(){targ.addClass('hidden')});
			}
		});
	});
	
	$('.drgon').click(function(){
		evha.toggleDragon($(this),false);
	});
	
}
dks.prototype.parseCharCounts = function(texare){
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

dks.prototype.displayCharCounts = function(element){
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
dks.prototype.toggleDragon = function(obj,ChsnOV){
	var evha = this;
	var exp = obj.hasClass('expanded');
	if(obj.prop('id') == 'draghe'){ //is dragon head
		if(!exp){  //is not in use
			obj.addClass('expanded');
			evha.dragHead = true;
			zz.xy.hgear[0].selectedIndex = 0;
			if(evha.chosen)
			$('#headgear').trigger("liszt:default");
			evha.getArmor();
			evha.applyEn(true);
			evha.applyHp(true);
			evha.calcDefenses(true);
		} else {
			obj.removeClass('expanded');
			if($('#dragbo').hasClass('expanded')){
				$('#dragbo').removeClass('expanded');
			}
			evha.dragHead = false;
			evha.dragBody = false;
			evha.changeDragfist('Bare Fist',ChsnOV);
		}
	} else { //is dragon body
		if(!exp){  //is not in use
			obj.addClass('expanded');
			if(!$('#draghe').hasClass('expanded')){
				$('#draghe').addClass('expanded');
			}
			evha.dragHead = true;
			evha.dragBody = true;
			zz.xy.hgear[0].selectedIndex = 0;
			zz.xy.cgear[0].selectedIndex = 0;
			zz.xy.agear[0].selectedIndex = 0;
			zz.xy.fgear[0].selectedIndex = 0;
			if(evha.chosen && !ChsnOV)
				$('#headgear,#chestgear,#handgear,#leggear').trigger("liszt:default");
			evha.getArmor();
			
			
			
			evha.changeDragfist('Dragon Fist',ChsnOV);
			evha.applyEn(true);
			evha.applyHp(true);
			evha.calcDefenses(true);
		} else {
			obj.removeClass('expanded');
			evha.dragBody = false;
			evha.changeDragfist('Bare Fist',ChsnOV);
		}
	}
	evha.getAllDefStats();
	evha.getStat64();
}
dks.prototype.changeDragfist = function(TEXT,ChsnOV){
	var evha = this;
	$('#lh1,#lh2,#rh1,#rh2').each(function(){
		if(this.selectedIndex == 0){
			evha.calcAR(true,$(this));
			this.getElementsByTagName('option')[0].innerHTML = TEXT;
		}
		if(evha.chosen && !ChsnOV){
			var t = '#'+this.getAttribute('id');
			if(this.selectedIndex == 0)
			$(t+'_chzn a span').eq(0).text(TEXT);
			var g = $(t).data('chosen').results_data[1];
			g.text = TEXT;
			g.html = TEXT;
		}
	});
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
dks.prototype.changefValUp = function(obj,e){
	var f = obj.val();
	if(!obj.val()){
		f = 0;
	}
	if(e.shiftKey) {
		if((parseInt(f)+10)<100)
			obj.val(parseInt(f)+10);
		else
			obj.val(99);
	} else if((parseInt(f)+1)<100)
		obj.val(parseInt(f)+1);
		
}
dks.prototype.changefValDown = function(obj,e){
	f = obj.val();
	if(!obj.val()){
		f = 0;
	}
	var uid = obj.attr('fid');
		var min = 0;
		if(e.shiftKey) {
			if((parseInt(f)-10)>(parseInt(min)-1))
				obj.val(parseInt(f)-10);
			else
				obj.val(min);
		} else if((parseInt(f)-1)>(parseInt(min)-1))
			obj.val(parseInt(f)-1);
}
dks.prototype.addSouls = function() {
	zz.xy.csc.val(this.calcSoulCost());
	var addit = 0;
	for(var i=0;i<4;i++){
		if(this.equip[i] == 122)
			addit += 124500;
		else if(this.equip[i] == 123)
			addit += 315500;
	}
	zz.xy.cst.val(this.getSoulCost(this.aac[0],this.aad - this.aab) + addit);
}
dks.prototype.calcSoulCost = function(val){
	var lvl = this.aad - this.aab;
	if(val)
		lvl = val;
	if(lvl < zz.soulcost.length){
		return zz.soulcost[lvl];
	}else{
		return Math.round((1/2.8)*Math.pow(((lvl+10)*1.120639022),2.5));
	}
}
dks.prototype.getSoulCost = function(startSoulLevel, currentSoulLevel){
	if (startSoulLevel == currentSoulLevel) return 0;
		var temp = 0;
	for (var i = startSoulLevel; i < currentSoulLevel; i++) temp = temp + parseInt(this.calcSoulCost(i));
		return temp;
} 
dks.prototype.updateSoulTotal = function(){
	zz.xy.sl.val(this.aad - this.aab);
}
dks.prototype.getTotalStats = function(){
	var r = 0;
	var total = [zz.xy.vt.val(),zz.xy.at.val(),zz.xy.en.val(),zz.xy.st.val(),zz.xy.dx.val(),zz.xy.rs.val(),zz.xy.it.val(),zz.xy.ft.val()];
	for(var i = 0,len = total.length;i<len;i++) { r += parseInt(total[i]);}
	this.aad = r;
	return parseInt(r-this.aab);
}
dks.prototype.coOpRange = function(){
	var SL = (this.aad - this.aab);
	var mnSL = parseInt($('#bsoulLevel').val());;
	var rCons = Math.floor((10 + Math.floor(0.1*SL)));
	var upper = SL + rCons;
	if(upper > 709){
		upper = 'max';
	}
	var lower = SL - rCons;
	if(lower < mnSL){
		lower = mnSL;
	}
	//$('#co-op').html('Co-op [<span class="orange">'+lower+'</span> - <span class="orange">'+upper+'</span>]');
	$('#coplower').text(lower);
	$('#copupper').text(upper);
}
dks.prototype.updateBestClass = function(){
	if($.cookie("autoup") == 'off'){
		//if off do nothing
	} else {
		var cur = this.getCurrentClass(zz.xy.sClass);
		$('#cvitality_fake').val((zz.xy.vt.val() == cur[1]) ? '' : zz.xy.vt.val());
		$('#cattunement_fake').val((zz.xy.at.val() == cur[2]) ? '' : zz.xy.at.val());
		$('#cendurance_fake').val((zz.xy.en.val() == cur[3]) ? '' : zz.xy.en.val());
		$('#cstrength_fake').val((zz.xy.st.val() == cur[4]) ? '' : zz.xy.st.val());
		$('#cdexterity_fake').val((zz.xy.dx.val() == cur[5]) ? '' : zz.xy.dx.val());
		$('#cresistance_fake').val((zz.xy.rs.val() == cur[6]) ? '' : zz.xy.rs.val());
		$('#cintelligence_fake').val((zz.xy.it.val() == cur[7]) ? '' : zz.xy.it.val());
		$('#cfaith_fake').val((zz.xy.ft.val() == cur[8]) ? '' : zz.xy.ft.val());
		var cache = [
			(!($('#cvitality_fake').val())?0:parseInt($('#cvitality_fake').val())),
			(!($('#cattunement_fake').val())?0:parseInt($('#cattunement_fake').val())),
			(!($('#cendurance_fake').val())?0:parseInt($('#cendurance_fake').val())),
			(!($('#cstrength_fake').val())?0:parseInt($('#cstrength_fake').val())),
			(!($('#cdexterity_fake').val())?0:parseInt($('#cdexterity_fake').val())),
			(!($('#cresistance_fake').val())?0:parseInt($('#cresistance_fake').val())),
			(!($('#cintelligence_fake').val())?0:parseInt($('#cintelligence_fake').val())),
			(!($('#cfaith_fake').val())?0:parseInt($('#cfaith_fake').val()))
		]
		this.findBestClass(cache);
	}
}
dks.prototype.findBestClass = function(cache){
	var pth = this;
	var current = [100],totals=[],clas=[],sorted=[];
	current = current.concat(cache);
	var classData = [zz.stats.warrior,
					zz.stats.knight,
					zz.stats.wanderer,
					zz.stats.thief,
					zz.stats.bandit,
					zz.stats.hunter,
					zz.stats.sorcerer,
					zz.stats.pyromancer,
					zz.stats.cleric,
					zz.stats.deprived];
	var currentClass;
	for(var i = 0,len = classData.length;i<len;i++){
		var g = i;
		totals[i] = classData[i][0];
		totals[i] += (current[1] - classData[i][1] < 0) ? 0 : current[1] - classData[i][1];
		totals[i] += (current[2] - classData[i][2] < 0) ? 0 : current[2] - classData[i][2];
		totals[i] += (current[3] - classData[i][3] < 0) ? 0 : current[3] - classData[i][3];
		totals[i] += (current[4] - classData[i][4] < 0) ? 0 : current[4] - classData[i][4];
		totals[i] += (current[5] - classData[i][5] < 0) ? 0 : current[5] - classData[i][5];
		totals[i] += (current[6] - classData[i][6] < 0) ? 0 : current[6] - classData[i][6];
		totals[i] += (current[7] - classData[i][7] < 0) ? 0 : current[7] - classData[i][7];
		totals[i] += (current[8] - classData[i][8] < 0) ? 0 : current[8] - classData[i][8];
	}
	for(var g = 0,len = totals.length;g<len;g++){
		sorted[g] = [totals[g],(zz.xy.sClass.find('option:eq('+g+')').text().replace(/\d -/,'')),classData[g]]
	}
	var t = sorted.sort(pth.rsort);
	t = t.sort(pth.msort);
	$('#bclass_fake').val(t[0][1]);
	$('#bsoulLevel_fake').val(t[0][2][0]);
	$('#csoulLevel_fake').val(t[0][0]);	
	$('#bvitality_fake').val(t[0][2][1]);
	$('#battunement_fake').val(t[0][2][2]);
	$('#bendurance_fake').val(t[0][2][3]);
	$('#bstrength_fake').val(t[0][2][4]);
	$('#bdexterity_fake').val(t[0][2][5]);
	$('#bresistance_fake').val(t[0][2][6]);
	$('#bintelligence_fake').val(t[0][2][7]);
	$('#bfaith_fake').val(t[0][2][8]);
	
	var string = '';
	for(var i = 0,len = t.length;i<len;i++){
		string += '<div class="rnk"><span class="rnknum">'+(parseInt(i)+1)+': </span> <span>'+t[i][1]+'</span>'+t[i][0]+'</div><hr class="nomargin">';
	}
	$('.rankings').html(string);
}
dks.prototype.cacheContent = function(){
	if(zz.xy.sl.val().length){
		return [zz.xy.vt.val(),zz.xy.at.val(),zz.xy.en.val(),zz.xy.st.val(),zz.xy.dx.val(),zz.xy.rs.val(),zz.xy.it.val(),zz.xy.ft.val()];
	}
	return false;
}
dks.prototype.getCurrentClass = function(cl){
	switch(cl.val()){
		case('warrior'): return zz.stats.warrior;break;
		case('knight'): return zz.stats.knight;break;
		case('wanderer'): return zz.stats.wanderer;break;
		case('thief'): return zz.stats.thief;break;
		case('bandit'): return zz.stats.bandit;break;
		case('hunter'): return zz.stats.hunter;break;
		case('sorcerer'): return zz.stats.sorcerer;break;
		case('pyromancer'): return zz.stats.pyromancer;break;
		case('cleric'): return zz.stats.cleric;break;
		case('deprived'): return zz.stats.deprived;break;
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
	var t = this.aae.length-1,g = 0,set = true;
	for(var g;g<t;++g){
		if(this.aae[g][1] != 'nill')
		this.head += '<option ind="'+g+'" typ="h" value="'+this.aae[g][0]+'" title="img/armor/s/armorHead_25x25.png" snid="'+this.aae[g][18]+'"'+((set)? 'selected="selected"' : '')+'>'+this.aae[g][1]+'</option>';
		this.chest += '<option ind="'+g+'" typ="c" value="'+this.aaf[g][0]+'" title="img/armor/s/armorBody_25x25.png" snid="'+this.aae[g][18]+'">'+this.aaf[g][1]+'</option>';
		if(this.aag[g][1] != 'nill')
		this.hand += '<option ind="'+g+'" typ="a" value="'+this.aag[g][0]+'" title="img/armor/s/armorHand_25x25.png" snid="'+this.aae[g][18]+'">'+this.aag[g][1]+'</option>';
		this.feet += '<option ind="'+g+'" typ="f" value="'+this.aah[g][0]+'" title="img/armor/s/armorFeet_25x25.png" snid="'+this.aae[g][18]+'">'+this.aah[g][1]+'</option>';
		set = false;
	}
	for(var i in this.aai){
		this.head += '<option ind="'+i+'" typ="u" value="'+this.aai[i][0]+'" title="img/armor/s/armorHead_25x25.png" snid="'+this.aai[i][18]+'">'+this.aai[i][1]+'</option>';
	}
	zz.xy.hgear.append(this.head);
	zz.xy.cgear.append(this.chest);
	zz.xy.agear.append(this.hand);
	zz.xy.fgear.append(this.feet);
	delete this.head;
	delete this.chest;
	delete this.hand;
	delete this.feet;
}
dks.prototype.buildWeaponLists = function(){
	var url = '//static.mugenmonkey.com/img/weapons/s/weapons25x25.png';
	var dat = '<option ind="0" typ="f" value="'+zz.weapons.fist[0][0]+'" sma="f" title="'+url+'" snid="-10000px -10000px">'+zz.weapons.fist[0][1]+'</option>';
	this.wepArraySort(dat,'f');
	var ti = zz.weapons.normal.length-1,g = 0;
	for(var g;g<=ti;++g){
		var dat = '<option ind="'+(g+1)+'" typ="n" value="'+zz.weapons.normal[g][0]+'" sma="'+zz.weapons.normal[g][3]+'" title="'+url+'" snid="'+zz.weapons.normal[g][4]+'">'+zz.weapons.normal[g][1]+'</option>'
		this.wepArraySort(dat,zz.weapons.normal[g][3]);
	}
	var k = zz.weapons.normal.length+1;
	var ti = zz.weapons.unique.length-1,g = 0;
	for(var g;g<=ti;++g){
		var dat = '<option ind="'+(g+k)+'" typ="u" value="'+zz.weapons.unique[g][0]+'" sma="'+zz.weapons.unique[g][3]+'" title="'+url+'" snid="'+zz.weapons.unique[g][4]+'">'+zz.weapons.unique[g][1]+'</option>';
		this.wepArraySort(dat,zz.weapons.unique[g][3]);
	}
	var u = zz.weapons.unique.length + k;
	var ti = zz.weapons.bows.length-1,g = 0;
	for(var g;g<=ti;++g){
		var dat = '<option ind="'+(g+u)+'" typ="b" value="'+zz.weapons.bows[g][0]+'" sma="'+zz.weapons.bows[g][3]+'" title="'+url+'" snid="'+zz.weapons.bows[g][4]+'">'+zz.weapons.bows[g][1]+'</option>'
		this.wepArraySort(dat,zz.weapons.bows[g][3]);
	}
	var y = zz.weapons.bows.length + u;
	var ti = zz.weapons.magic.length-1,g = 0;
	for(var g;g<=ti;++g){
		var dat = '<option ind="'+(g+y)+'" typ="m" value="'+zz.weapons.magic[g][0]+'" sma="'+zz.weapons.magic[g][3]+'" title="'+url+'" snid="'+zz.weapons.magic[g][4]+'">'+zz.weapons.magic[g][1]+'</option>';
		this.wepArraySort(dat,zz.weapons.magic[g][3]);
	}
	var j = zz.weapons.magic.length + y;
	var ti = zz.weapons.shields.length-1,g = 0;
	for(g;g<=ti;++g){
		var dat = '<option ind="'+(g+j)+'" typ="s" value="'+zz.weapons.shields[g][0]+'" sma="'+zz.weapons.shields[g][3]+'" title="'+url+'" snid="'+zz.weapons.shields[g][4]+'">'+zz.weapons.shields[g][1]+'</option>';
		this.wepArraySort(dat,zz.weapons.shields[g][3]);
	}
	
	var l = zz.weapons.shields.length + j;
	var ti= zz.weapons.ptde.length-1,g = 0;
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
		this.wepArraySort(dat,'ptde');
	}
	var dat = '<option ind="'+(g+l)+'" typ="misc" value="'+zz.weapons.misc[0][0]+'" sma="'+zz.weapons.misc[0][3]+'" title="'+url+'" snid="'+zz.weapons.misc[0][4]+'">'+zz.weapons.misc[0][1]+'</option>';
	this.wepArraySort(dat,'misc');
	var defstring = this.sortDef();
	
	zz.xy.lh1.append(defstring);
	zz.xy.rh1.append(defstring);
	zz.xy.lh2.append(defstring);
	zz.xy.rh2.append(defstring);
	delete this.dksdef;
}
dks.prototype.buildRingLists = function(){
	var t = zz.rings.length-1,g = 0;
	var datastring = '';
	for(var g;g<t;++g){
		datastring += '<option ind="'+g+'" typ="r" value="'+zz.rings[g][0]+'" title="'+zz.rings[0][6]+'" snid="'+zz.rings[g][5]+'">'+zz.rings[g][1]+'</option>';
		this.rings[g] = zz.rings[g][4];
	}
	zz.xy.ring1.append(datastring);
	zz.xy.ring2.append(datastring);
	delete this.rings;
}
dks.prototype.buildSpellLists = function(){
	var datastring = '<optgroup label="Magic">';
	var ti = zz.spells.sorc.length-1,g = 0;
	for(var g;g<=ti;++g){
		var dat = '<option ind="'+(g+1)+'" typ="spell" value="'+zz.spells.sorc[g][0]+'" cos="'+zz.spells.sorc[g][2]+'" spec="'+zz.spells.sorc[g][5]+'" req="'+zz.spells.sorc[g][4]+'">'+zz.spells.sorc[g][1]+' ('+zz.spells.sorc[g][2]+')</option>';
		datastring += dat;
	}
	datastring += '</optgroup>'; 
	
	datastring += '<optgroup label="Pyromancy">';
	var ti = zz.spells.pyro.length-1;
	var g = 0;
	var gh = zz.spells.sorc.length;
	for(var g;g<=ti;++g){
		var dat = '<option ind="'+(g+gh+1)+'" typ="spell" value="'+zz.spells.pyro[g][0]+'" cos="'+zz.spells.pyro[g][2]+'" spec="'+zz.spells.pyro[g][5]+'" req="'+zz.spells.pyro[g][4]+'">'+zz.spells.pyro[g][1]+' ('+zz.spells.pyro[g][2]+')</option>';
		datastring += dat;
	}
	datastring += '</optgroup>'; 
	
	datastring += '<optgroup label="Miracles">';
	var ti = zz.spells.mira.length-1;
	var g = 0;
	var gh = gh + zz.spells.pyro.length;
	for(var g;g<=ti;++g){
		var dat = '<option ind="'+(g+gh+1)+'" typ="spell" value="'+zz.spells.mira[g][0]+'" cos="'+zz.spells.mira[g][2]+'" spec="'+zz.spells.mira[g][5]+'" req="'+zz.spells.mira[g][4]+'">'+zz.spells.mira[g][1]+' ('+zz.spells.mira[g][2]+')</option>';
		datastring += dat;
	}
	datastring += '</optgroup>'; 
	datastring += '<optgroup label="PTDE">';
	var ti = zz.spells.ptde.length-1;
	var g = 0;
	gh = gh + zz.spells.mira.length;
	for(var g;g<=ti;++g){
		var dat = '<option ind="'+(g+gh+1)+'" typ="spell" value="'+zz.spells.ptde[g][0]+'" cos="'+zz.spells.ptde[g][2]+'" spec="'+zz.spells.ptde[g][5]+'" req="'+zz.spells.ptde[g][4]+'">'+zz.spells.ptde[g][1]+' ('+zz.spells.ptde[g][2]+')</option>';
		datastring += dat;
	}
	datastring += '</optgroup>'; 
	
	$('#spell1,#spell2,#spell3,#spell4,#spell5,#spell6,#spell7,#spell8,#spell9,#spell10,#spell11,#spell12').append(datastring);
}
dks.prototype.buildItemLists = function(){
	var datastring = '';
	var len = zz.items.data.length;
	for(var g = 0;g<len;g++){
		datastring += '<option ind="'+(g+1)+'" data-typ="item" snid="'+zz.items.data[g][2]+'" value="'+zz.items.data[g][0]+'" title="img/items/s/_items25x25.png">'+zz.items.data[g][1]+'</option>';
	}
	$('.items').append(datastring);
}
dks.prototype.toggle1Dia = function(){
	$('.fake2').stop(false,true).animate({width: 'toggle'},200,function(){
		$('.fake').stop(false,true).animate({width: 'toggle'},200);
	});
	$('.overlay').stop(true,true).fadeOut(400);
}
dks.prototype.toggle2Dia = function(){
	$('.fake').stop(false,true).animate({width: 'toggle'},200,function(){
		$('.fake2').stop(false,true).animate({width: 'toggle'},200);
	});
	$('.overlay').stop(true,true).fadeIn(400);
	if($('#aropt').attr('state') == 't')
		$('#aropt').click()
	if($('#dfinder').attr('state') == 't')
		$('#dfinder').click()
}
dks.prototype.toggleAoB = function(DIA,CS){
		if($('.cselector').attr('state') == 'p')
			$('.cselector').click()
		$('.secdia').stop().fadeOut(200);
		var ele;
		if(DIA == 'a') {
			ele = $('#armorfind');
			$('#dfinder').attr('state','p');
		} else if(DIA == 'b') {
			ele = $('#damagefind');
			$('#aropt').attr('state','p');
		}
		if(CS == 'block') {
			ele.stop().fadeIn(200);
		} else {
			ele.stop().fadeOut(200);
		}
	}
dks.prototype.getActiveEffects = function(pas){
	if(pas || this.oldStat.weapons[0] != zz.xy.rh1.val() ||
		this.oldStat.weapons[1] != zz.xy.rh2.val() ||
		this.oldStat.weapons[2] != zz.xy.lh1.val() ||
		this.oldStat.weapons[3] != zz.xy.lh2.val() ||
		this.oldStat.armor[0] != zz.xy.hgear.val() ||
		this.oldStat.armor[1] != zz.xy.cgear.val() ||
		this.oldStat.armor[2] != zz.xy.agear.val() ||
		this.oldStat.armor[3] != zz.xy.fgear.val() ||
		this.oldStat.rings[0] != zz.xy.ring1.val() ||
		this.oldStat.rings[1] != zz.xy.ring2.val()){
	var sele = this.getActiveList();
	var hed = $('#headgear').find('option:selected'),
		che = $('#chestgear').find('option:selected'),
		han = $('#handgear').find('option:selected'),
		fee = $('#leggear').find('option:selected');
	var hands = [zz.xy.lh1,zz.xy.rh1,zz.xy.lh2,zz.xy.rh2];
	var container = $('#efcn'),
	head = [hed.attr('ind'),hed.attr('typ')],
	chest = [che.attr('ind'),che.attr('typ')],
	hand = [han.attr('ind'),han.attr('typ')],
	feet = [fee.attr('ind'),fee.attr('typ')],
	wep1 = hands[sele[0]].find('option:selected').attr('ind'),
	wep2 = hands[sele[1]].find('option:selected').attr('ind'),
	ring1 = $('#ring1').find('option:selected').attr('ind'),
	ring2 = $('#ring2').find('option:selected').attr('ind');
	var wepobs = [this.getWeaponObject(wep1),this.getWeaponObject(wep2)];
	var ringobs = [zz.rings[ring1],zz.rings[ring2]];
	var headobs = (head[1] == 'h') ? this.aae[head[0]] : this.aai[head[0]];
	var chestob = (chest[0] == '46') ? 'Adds damage to rolls, jumps and drops' : false;
	var handob = (hand[0] == '46') ? 'Adds damage to rolls, jumps and drops' : false;
	var feetob = (feet[0] == '46') ? 'Adds damage to rolls, jumps, kicks and drops' : false;
	var como = [ringobs[0][3],ringobs[1][3],headobs[16],chestob,handob,feetob,(wepobs[0].length > 7) ? wepobs[0][7] : false,(wepobs[1].length > 7) ? wepobs[1][7] : false];
	var text = '<ol>';
	for(var i=0,len=como.length;i<len;i++){
		if(como[i]){
			text += '<li>'+como[i]+'</li>';
		}
	}
	text += '</ol>';
	document.getElementById('efcn').innerHTML = text;
		}
}
dks.prototype.getActiveList = function(){
	var l = ($('.lh1').hasClass('blue')) ? 0 : 2;
	var r = ($('.rh1').hasClass('blue')) ? 1 : 3;
	return [l,r]
}
dks.prototype.getWeap = function(){
	var f = this.getActiveList();
	var val = [zz.xy.lh1.val(),zz.xy.rh1.val(),zz.xy.lh2.val(),zz.xy.rh2.val()];
	var val1 = val[f[0]];
	var val2 = val[f[1]];
	if(val1 == 'GargoyleTailAxe' || val2 == 'GargoyleTailAxe' )
	 this.gata = true;
	 else this.gata = false;
	 if(val1 == 'GargoylesHalberd' || val2 == 'GargoylesHalberd')
	 this.blds = true;
	 else this.blds = false;
	 if(val1 == 'DragonBoneFist' || val2 == 'DragonBoneFist')
	 this.dbf = true;
	 else this.dbf = false;
	 if(val1 == 'DrakeSword' || val2 == 'DrakeSword')
	 this.drak = true;
	 else this.drak = false;
	 if(val1 == 'DragonGreatsword' || val2 == 'DragonGreatsword')
	 this.dgs = true;
	 else this.dgs = false;
	 if(val1 == 'DragonKingGreataxe' || val2 == 'DragonKingGreataxe')
	 this.dkg = true;
	 else this.dkg = false;
	 if(val1 == 'DragonTooth' || val2 == 'DragonTooth')
	 this.dgt = true;
	 else this.dgt = false;
	 if(val1 == 'MoonlightGreatsword' || val2 == 'MoonlightGreatsword')
	 this.mgs = true;
	 else this.mgs = false;
	 if(val1 == 'Bloodshield' || val2 == 'Bloodshield')
	 this.bdsag = true;
	 else this.bdsag = false;
	 if(val1 == 'GrassCrestShield' || val2 == 'GrassCrestShield')
	 this.gras = true;
	 else this.gras = false;
	 if(val1 ==  val2)
	 this.specmod = 2;
	 else
	 this.specmod = 1;
}
dks.prototype.getArmor = function(){
	var val = zz.xy.hgear.val();
	if(val == 'MaskOfTheFather')
	 this.mof = true;
	 else this.mof = false;
	if(val == 'MaskOfTheMother')
	 this.mom = true;
	 else this.mom = false;
	 if(val == 'MaskOfTheChild')
	 this.chil = true;
	 else this.chil = false;
	 if(val == 'SymbolOfAvarice')
	 this.avarice = true;
	 else this.avarice = false;
	 if(val == 'CrownOfDusk')
	 this.dusk = true;
	 else this.dusk = false;
}
dks.prototype.getRing = function(PAS){
	var in1 = zz.xy.ring1.find('option:selected').attr('ind');
	var in2 = zz.xy.ring2.find('option:selected').attr('ind');
	//tbr=clr=have=rosp=sspr=fspr=tspr=sppr=bbr=pbr=cbr=rtsr=btsr=bdr=ldr=sdr=dcr=wsr=dsr=rotsf=lr=wr=hr=hor=dwgr=rir=cgsr=cssr=ocr=rof=rofap=rotee=ewgr=rotsp
	var r1 = zz.rings[in1][4];
	var r2 = zz.rings[in2][4];
	if(PAS){
		r1 = r2 = 'ignore';
	}
	//tinybeing
	var ret = 'tbr';
	if(r1 == ret || r2 == ret){
		this.tbr = true;
	} else {
		this.tbr = false;
	}
	//cloranthy
	ret = 'clr';
	if(r1 == ret || r2 == ret){
		this.clr = true;
	} else {
		this.clr = false;
	}
	//havel
	ret = 'have';
	if(r1 == ret || r2 == ret){
		this.have = true;
	} else {
		this.have = false;
	}
	//steel ring
	ret = 'rosp';
	if(r1 == ret || r2 == ret){
		this.rosp = true;
		this.defp = 50;
	} else {
		this.rosp = false;
		this.defp = 0;
	}
	//spell ring
	ret = 'sspr';
	if(r1 == ret || r2 == ret){
		this.sspr = true;
		this.aav = 50;
	} else {
		this.sspr = false;
		this.aav = 0;
	}
	//flame ring
	ret = 'fspr';
	if(r1 == ret || r2 == ret){
		this.fspr = true;
		this.aax = 50;
	} else {
		this.fspr = false;
		this.aax = 0;
	}
	//thunger ring
	ret = 'tspr';
	if(r1 == ret || r2 == ret){
		this.tspr = true;
		this.aay = 50;
	} else {
		this.tspr = false;
		this.aay = 0;
	}
	//spec ring
	ret = 'sppr';
	if(r1 == ret || r2 == ret){
		this.sppr = true;
		this.aaz = 25;
	} else {
		this.sppr = false;
		this.aaz = 0;
	}
	//blood bite
	ret = 'bbr';
	if(r1 == ret || r2 == ret){
		this.bbr = true;
	} else {
		this.bbr = false;
	}
	//poison bite
	ret = 'pbr';
	if(r1 == ret || r2 == ret){
		this.pbr = true;
	} else {
		this.pbr = false;
	}
	//curse bite
	ret = 'cbr';
	if(r1 == ret || r2 == ret){
		this.cbr = true;
	} else {
		this.cbr = false;
	}
	//red tear
	ret = 'rtsr';
	if(r1 == ret || r2 == ret){
		this.rtsr = true;
	} else {
		this.rtsr = false;
	}
	//blue tear
	ret = 'btsr';
	if(r1 == ret || r2 == ret){
		this.btsr = true;
	} else {
		this.btsr = false;
	}
	//bellow ring
	ret = 'bdr';
	if(r1 == ret || r2 == ret){
		this.bdr = true;
	} else {
		this.bdr = false;
	}
	//linger
	ret = 'ldr';
	if(r1 == ret || r2 == ret){
		this.ldr = true;
	} else {
		this.ldr = false;
	}
	//slumber
	ret = 'sdr';
	if(r1 == ret || r2 == ret){
		this.sdr = true;
	} else {
		this.sdr = false;
	}
	//dusk crown
	ret = 'dcr';
	if(r1 == ret || r2 == ret){
		this.dcr = true;
	} else {
		this.dcr = false;
	}
	//white seance
	ret = 'wsr';
	if(r1 == ret || r2 == ret){
		this.wsr = true;
	} else {
		this.wsr = false;
	}
	//dark seance
	ret = 'dsr';
	if(r1 == ret || r2 == ret){
		this.dsr = true;
	} else {
		this.dsr = false;
	}
	//suns first born
	ret = 'rotsf';
	if(r1 == ret || r2 == ret){
		this.rotsf = true;
	} else {
		this.rotsf = false;
	}
	//leo ring
	ret = 'lr';
	if(r1 == ret || r2 == ret){
		this.lr = true;
	} else {
		this.lr = false;
	}
	//wolf ring
	ret = 'wr';
	if(r1 == ret || r2 == ret){
		this.wr = true;
	} else {
		this.wr = false;
	}
	//hawk ring
	ret = 'hr';
	if(r1 == ret || r2 == ret){
		this.hr = true;
	} else {
		this.hr = false;
	}
	//hornet ring
	ret = 'hor';
	if(r1 == ret || r2 == ret){
		this.hor = true;
	} else {
		this.hor = false;
	}
	//dwgr
	ret = 'dwgr';
	if(r1 == ret || r2 == ret){
		this.dwgr = true;
	} else {
		this.dwgr = false;
	}
	//rusted
	ret = 'rir';
	if(r1 == ret || r2 == ret){
		this.rir = true;
	} else {
		this.rir = false;
	}
	//gold serpent
	ret = 'cgsr';
	if(r1 == ret || r2 == ret){
		this.cgsr = true;
	} else {
		this.cgsr = false;
	}
	//silver serpent
	ret = 'cssr';
	if(r1 == ret || r2 == ret){
		this.cssr = true;
	} else {
		this.cssr = false;
	}
	//orange char
	ret = 'ocr';
	if(r1 == ret || r2 == ret){
		this.ocr = true;
	} else {
		this.ocr = false;
	}
	//fog
	ret = 'rof';
	if(r1 == ret || r2 == ret){
		this.rof = true;
	} else {
		this.rof = false;
	}
	//rofap
	ret = 'rofap';
	if(r1 == ret || r2 == ret){
		this.rofap = true;
	} else {
		this.rofap = false;
	}	
	//evil eye
	ret = 'rotee';
	if(r1 == ret || r2 == ret){
		this.rotee = true;
	} else {
		this.rotee = false;
	}
	//east wood
	ret = 'ewgr';
	if(r1 == ret || r2 == ret){
		this.ewgr = true;
	} else {
		this.ewgr = false;
	}
	//sun princess
	ret = 'rotsp';
	if(r1 == ret || r2 == ret){
		this.rotsp = true;
	} else {
		this.rotsp = false;
	}
	ret = 'calr';
	if(r1 == ret || r2 == ret){
		this.calr = true;
	} else {
		this.calr = false;
	}
	//abby ring
	ret = 'coart';
	if(r1 == ret || r2 == ret){
		this.coart = true;
	} else {
		this.coart = false;
	}
	//cat ring ring
	ret = 'catcr';
	if(r1 == ret || r2 == ret){
		this.catcr = true;
	} else {
		this.catcr = false;
	}
	//darkmoon ring
	ret = 'dmbc';
	if(r1 == ret || r2 == ret){
		this.dmbc = true;
	} else {
		this.dmbc = false;
	}
	ret = 'riofs';
	if(r1 == ret || r2 == ret){
		this.riofs = true;
	} else {
		this.riofs = false;
	}
	ret = 'rriofs';
	if(r1 == ret || r2 == ret){
		this.rriofs = true;
	} else {
		this.rriofs = false;
	}
}
dks.prototype.getStat64 = function(uplo){
	var evha = this;
	var t = zz.xy.sClass.val()+','+zz.xy.vt.val()+','+zz.xy.at.val()+','+zz.xy.en.val()+','+zz.xy.st.val()+','+zz.xy.dx.val()+','+zz.xy.rs.val()+','+zz.xy.it.val()+','+zz.xy.ft.val()+','+zz.xy.hum.val()+','+zz.xy.hgear[0].selectedIndex+','+zz.xy.cgear[0].selectedIndex+','+zz.xy.agear[0].selectedIndex+','+zz.xy.fgear[0].selectedIndex+','+zz.xy.ring1[0].selectedIndex+','+zz.xy.ring2[0].selectedIndex+','+zz.xy.lh1[0].selectedIndex+','+zz.xy.rh1[0].selectedIndex+','+zz.xy.lh2[0].selectedIndex+','+zz.xy.rh2[0].selectedIndex;
	$('.weaponimg').each(function(){
		t += ','+$(this).attr('typ');
	});
	if($('#2hwep').is(':checked')){
	 t += ',1,';
	} else 
		t += ',0,';
	var spel =  $('#spell1')[0].selectedIndex+',' +
				$('#spell2')[0].selectedIndex+',' +
				$('#spell3')[0].selectedIndex+',' +
				$('#spell4')[0].selectedIndex+',' +
				$('#spell5')[0].selectedIndex+',' +
				$('#spell6')[0].selectedIndex+',' +
				$('#spell7')[0].selectedIndex+',' +
				$('#spell8')[0].selectedIndex+',' +
				$('#spell9')[0].selectedIndex+',' +
				$('#spell10')[0].selectedIndex+',' +
				$('#spell11')[0].selectedIndex+',' +
				$('#spell12')[0].selectedIndex+',' +
				$('#covenant')[0].selectedIndex
	t += spel;
	$('.arrowimg').each(function(){
		t += ','+$(this).attr('typ');
	});
	t += ',1';
	t += ','+(evha.dragHead ? 1 : 0)+','+(evha.dragBody ? 1 : 0);
	$('.items').each(function(){
		t += ','+$(this).find('option:selected').attr('ind');
	});
	var c = $.base64.encode(t);
	if(uplo)
		return c;
	else
	$('#url').val(evha.http + location.hostname.replace('direct\.','') + location.pathname + '?b='+c);
}
dks.prototype.roundNumber = function(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}
dks.prototype.calcAR = function(pas,se){
	if(this.oldStat.stats[3] != zz.xy.st.val() || 
		this.oldStat.stats[4] != zz.xy.dx.val() || 
		this.oldStat.stats[6] != zz.xy.it.val() || 
		this.oldStat.stats[7] != zz.xy.ft.val() || 
		this.oldStat.weapons[0] != zz.xy.rh1.val() ||
		this.oldStat.weapons[1] != zz.xy.rh2.val() ||
		this.oldStat.weapons[2] != zz.xy.lh1.val() ||
		this.oldStat.weapons[3] != zz.xy.lh2.val() ||
		this.oldStat.h2 != ($('#2hwep').is(':checked') ? 1 : 2) ||
		this.oldStat.stats[8] != zz.xy.hum.val() ||
		pas
	){
		var pth = this;
		if(se)
			var t = se;
		else
			var t = $('#lh1,#lh2,#rh1,#rh2');
		t.each(function(){
		var normal = 0,raw = -20,crystal = -40,lightning = -60,magic = -80,enchanted = -100,devine = -120,occult = -140,fire = -160,chaos = -180,
		hand = $(this).prop('id'),
		sel = $('#'+hand),
		opt = sel.find('option:selected'),
		att = opt.attr('ind'),
		typ = $('.weaponimg[fo="'+hand+'"]').attr('typ'),
		secweptyp = opt.attr('sma'),
		fal = opt.val(),
		weptyp = opt.attr('typ'),
		typ = $('.weaponimg[fo="'+hand+'"]').attr('typ'),
		yui = $('.arrowimg[fo="'+hand+'"]').attr('typ'),
		offs,
		adds = pth.getArrowDamage(yui,secweptyp,$('.arrowimg[fo="'+hand+'"]'),fal),
		mods = pth.getWeaponStatObjects(att,typ,hand,secweptyp),
		typ = $('.weaponimg[fo="'+hand+'"]').attr('typ'),
		yui = $('.arrowimg[fo="'+hand+'"]').attr('typ'),
		effects = pth.getWeaponObject(att),
		hand2 = ((hand == 'rh1' || hand == 'rh2' || att == '103' || att == '104') && ($('#2hwep').is(':checked') && secweptyp != 'f' && secweptyp != 'b' && secweptyp != 'cb')) ? 1.5 : 1,
		phya,mag,fir,lgh,
		strmuf = ((parseInt(zz.xy.st.val())*hand2 >= 99) ? 99 : Math.floor(parseInt(zz.xy.st.val())*hand2));
		var duico = '';
		//console.log(hand,att,typ,fal,weptyp)
		if(mods) {
			var i = parseInt(mods[0]),
			wep = mods[1][i],
			mod = mods[2][i],
			str = mods[3][0],
			dex = mods[3][1],
			itt = mods[3][2],
			fat = mods[3][3],
			cha = mods[3][4],
			aoff = adds[1],
			adds = adds[0],
			dura = mods[4];
			//console.log(mods[2][i]);
			if(!dura){
				dura = zz.weapons.dura.def.c[parseInt(att) - 112];
			}
			duico = ' <img src="img/dura2.png" alt="durability" title="durability" width="13" height="13" style="vertical-align:text-top"/> <span style="color:#b38f64;">'+dura+'</span>';
			var crit = 100;
			var aux = '';
			var auxOff = "0px 0px";
			if(effects[5] != 0){
				crit = effects[5];
			}
			var dyStr = '';
			if(effects[6] != 0){
				var color = '#f1f1f1';
				var numAux = effects[6].split('--');
				for(var i = 0,len = numAux.length;i<len;i++){
					var effs = numAux[i].split(':');
					switch(effs[0]){
						case('po'):
							auxOff = "-13px 0px";
							color = '#a3379d';
						break;
						case('bl'):
							auxOff = "0px 0px";
							color = '#b72f2f';
						break;
						case('ho'):
							auxOff = "0px -13px";
							color = '#cdcdcd';
						break;
						case('oc'):
							auxOff = "-13px -13px";
							color = '#000;text-shadow:0px 0px 2px #ccc';
						break;
					}
					dyStr += ' <img src="img/transparent.png" alt="effects" title="effects" width="13" height="13" style="vertical-align:text-top;background-image:url(img/auxy13x13.png);background-position:'+auxOff+';background-repeat:none;"/> <span style="color:'+color+';">'+effs[1]+'</span> ';
				}
			}
			var auxStr = '';
			if(crit != 100 || dyStr.length > 10)
				auxStr = '<div style="text-align:center"><span style="font-size:12px;font-weight:bold;"><img src="img/cbonus13x13.png" alt="critbonus" title="critbonus" width="13" height="13" style="vertical-align:text-top;" /> <span style="color:#a36337;">'+crit+'</span> '+dyStr+'</span></div>';
			if((typ == 'normal' || typ == 'crystal' || typ== 'raw') && weptyp != 'u'){
				if(typ == 'normal')
				 offs = normal;
				if(typ == 'crystal')
				 offs = crystal;
				 if(typ == 'raw')
				 offs = raw;
				var reg = [mod[4],mod[5],0,0];
				if(reg[0] > strmuf || reg[1] > parseInt(zz.xy.dx.val())) {
					var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' : reg[0] + '/';
					var reg2 = (reg[1] > parseInt(zz.xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/';
					var reg3 = 0 + '/';
					var reg4 = 0;
					tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
					$('.'+hand+'i').css('color','#777777').html(tex).attr('tex','').unbind('hover');
				} else {
					phya = Math.floor((mod[0] + (weptyp == 'b' || weptyp == 'cb' ? adds[0] : 0)) *(1+(mod[6]*str)+(mod[7]*dex)));
					mag = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[1] : 0);
					fir = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[2] : 0);
					lgh = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[3] : 0);

					$('.'+hand+'i').css('color','#7d563a').html('('+(phya+mag+fir+lgh)+')').attr('tex','<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span>)'+duico+'</span>'+auxStr).tipTip({attribute:'tex',delay:50});
				}
			}
			if((typ == 'magic' || typ == 'enchanted' || typ== 'devine' || typ== 'occult') && (weptyp != 'u')){
				if(typ == 'magic')
				 offs = magic;
				if(typ == 'enchanted')
				 offs = enchanted;
				 if(typ == 'devine')
				 offs = devine;
				if(typ == 'occult')
				 offs = occult;
				var reg = [mod[4],mod[5],0,0];
				if(reg[0] > strmuf || reg[1] > parseInt(zz.xy.dx.val()) || reg[2] > parseInt(zz.xy.it.val()) || reg[3] > parseInt(zz.xy.ft.val())) {
					var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/',
					reg2 = (reg[1] > parseInt(zz.xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/',
					reg3 = (reg[2] > parseInt(zz.xy.it.val())) ? '<span style="color:#bb1b17">'+reg[2]+'</span>/' : reg[2] + '/',
					reg4 = (reg[3] > parseInt(zz.xy.ft.val())) ? '<span style="color:#bb1b17">'+reg[3]+'</span>/' : reg[3];
					tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
					$('.'+hand+'i').css('color','#777777').html(tex).attr('tex','').unbind('hover');
				} else {
					var ma,modi;
					if((typ == 'devine' || typ == 'occult') && weptyp == 'b') {
						ma = fat;
						modi =  mod[9];
					} else if(typ == 'devine' || typ == 'occult'){
						ma = fat;
						modi =  mod[8];
					} else {
						ma = itt;
						modi =  mod[8];
					}
					phya = Math.floor((mod[0] + (weptyp == 'b' || weptyp == 'cb' ? adds[0] : 0))*(1+(mod[6]*str)+(mod[7]*dex)));
					mag =  Math.floor((mod[1] + (weptyp == 'b' || weptyp == 'cb' ? adds[1] : 0))*(1+(modi*ma)));
					fir = mod[2] + (weptyp == 'b' || weptyp == 'cb' ? adds[2] : 0);
					lgh = mod[3] + (weptyp == 'b' || weptyp == 'cb' ? adds[3] : 0);
					$('.'+hand+'i').css('color','#3a667d').html('('+(phya + mag + fir + lgh)+')').attr('tex','<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span>)'+duico+'</span>'+auxStr).tipTip({attribute:'tex',delay:50});
				}
			}
			if(typ == 'chaos' && weptyp != 'u'){
				 offs = chaos;
				var reg = [mod[4],mod[5],0,0];
				if(reg[0] > strmuf || reg[1] > parseInt(zz.xy.dx.val())) {
					reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/',
					reg2 = (reg[1] > parseInt(zz.xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/',
					reg3 = 0 + '/',
					reg4 = 0;
					tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
					$('.'+hand+'i').css('color','#777777').html(tex).attr('tex','').unbind('hover');
				} else {
					phya = Math.round((mod[0] + (weptyp == 'b' || weptyp == 'cb' ? adds[0] : 0))*(1+(.21*cha)));
					mag = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[1] : 0);
					fir = Math.round((mod[2] + (weptyp == 'b' || weptyp == 'cb' ? adds[2] : 0))*(1+(0.2075*cha)));
					lgh = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[3] : 0);
					$('.'+hand+'i').css('color','#b52b2b').html('('+(phya+mag+fir+lgh)+')').attr('tex','<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span>)'+duico+'</span>'+auxStr).tipTip({attribute:'tex',delay:50});
				}
			}
			if(typ == 'fire' && weptyp != 'u'){
				 offs = fire;
				var reg = [mod[4],mod[5],0,0];
				if(reg[0] > strmuf || reg[1] > parseInt(zz.xy.dx.val())) {
					var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/',
					reg2 = (reg[1] > parseInt(zz.xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/',
					reg3 = 0 + '/',
					reg4 = 0;
					tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
					$('.'+hand+'i').css('color','#777777').html(tex).attr('tex','').unbind('hover');
				} else {
					phya = mod[0] + (weptyp == 'b' || weptyp == 'cb' ? adds[0] : 0);
					mag = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[1] : 0);
					fir = mod[2] + (weptyp == 'b' || weptyp == 'cb' ? adds[2] : 0);
					lgh = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[3] : 0);
					$('.'+hand+'i').css('color','#b52b2b').html('('+(phya+mag+fir+lgh)+')').attr('tex','<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span>)'+duico+'</span>'+auxStr).tipTip({attribute:'tex',delay:50});
				}
			}
			if(typ == 'lightning' && weptyp != 'u'){
				 offs = lightning;
				var reg = [mod[4],mod[5],0,0];
				if(reg[0] > strmuf || reg[1] > parseInt(zz.xy.dx.val())) {
					var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/',
					reg2 = (reg[1] > parseInt(zz.xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/',
					reg3 = 0 + '/',
					reg4 = 0;
					tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
					$('.'+hand+'i').css('color','#777777').html(tex).attr('tex','').unbind('hover');
				} else {
					phya = mod[0] + (weptyp == 'b' || weptyp == 'cb' ? adds[0] : 0);
					mag = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[1] : 0);
					fir = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[2] : 0);
					lgh = mod[3] + (weptyp == 'b' || weptyp == 'cb' ? adds[3] : 0);
					$('.'+hand+'i').css('color','#b59d2b').html('('+(phya+mag+fir+lgh)+')').attr('tex','<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span>)'+duico+'</span>'+auxStr).tipTip({attribute:'tex',delay:50});
				}
			}
			if(weptyp == 'u'){
				 offs = normal;
				var reg = [mod[4],mod[5],mod[6],mod[7]];
				if(reg[0] > strmuf || reg[1] > parseInt(zz.xy.dx.val()) || reg[2] > parseInt(zz.xy.it.val()) || reg[3] > parseInt(zz.xy.ft.val())) {
					var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/',
					reg2 = (reg[1] > parseInt(zz.xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/',
					reg3 = (reg[2] > parseInt(zz.xy.it.val())) ? '<span style="color:#bb1b17">'+reg[2]+'</span>/' : reg[2] + '/',
					reg4 = (reg[3] > parseInt(zz.xy.ft.val())) ? '<span style="color:#bb1b17">'+reg[3]+'</span>/' : reg[3];
					tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
					$('.'+hand+'i').css('color','#777777').html(tex).attr('tex','').unbind('hover');
				} else {
					phya = Math.floor((mod[0] + (secweptyp == 'b' ? adds[0] : 0))*(1+(mod[8]*str)+(mod[9]*dex)));
					fir = mod[2] + (secweptyp == 'b' ? adds[2] : 0);
					lgh = mod[3] + (secweptyp == 'b' ? adds[3] : 0);
					if(fal == 'ChaosBlade' || fal == 'QuelaagsFurysword' || fal == 'AbyssGreatsword'){
						phya = Math.round(phya*(1+(.215*cha)))
						fir = Math.round(fir*(1+(0.20658*cha)))
					}
					
					mag =  Math.floor((mod[1] + (secweptyp == 'b' ? adds[1] : 0))*(1+(mod[10]*itt)+(mod[11]*fat)));
					if(fal == 'DragonslayerSpear'){
						lgh = Math.floor(mod[3]*(1+(mod[11]*fat)));
					}
					if(secweptyp == 'b'){
						if(fal == 'DragonslayerGreatbow'){
							//aoff = -140;
						} else if(fal == 'GoughsGreatbow'){
							//phya += adds[0];
						}
					}
					$('.'+hand+'i').css('color','#3a667d').html('('+(phya + mag + fir + lgh)+')').attr('tex','<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span>)'+duico+'</span>'+auxStr).tipTip({attribute:'tex',delay:50});
					//$('.weaponimg[fo="'+hand+'"]').attr('typ','normal');
					offs = normal;
				}
			}
			sel.removeAttr('adj');
			sel.removeAttr('tto');
		}
		if(weptyp == 'f'){
			  offs = normal;
			  var hdam = 20;
			  if(pth.dragBody)
				hdam = 400;
			$('.'+hand+'i').css('color','#777777').html('('+hdam+')').attr('tex','<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+hdam+'</span> / <span style="color:#2b7cb5;">0</span> / <span style="color:#b52b2b;">0</span> / <span style="color:#b59d2b;">0</span>)</span>').tipTip({attribute:'tex',delay:50});
			//$('.weaponimg[fo="'+hand+'"]').attr('typ','normal');
			offs = normal;
			sel.removeAttr('adj');
			sel.removeAttr('tto');
		}
		if(weptyp == 'm'){
			 offs = normal;
			 var strte = parseInt(zz.xy.st.val())
			 var dexte = parseInt(zz.xy.dx.val())
			 var faith = parseInt(zz.xy.ft.val());
			 var intel = parseInt(zz.xy.it.val());
			 var index = parseInt(att) - 112,stat,add,tops;
			 var vali = sel.val();
			 if(att == 181 || att == 182){
				index = index - 50;
			 }
			  var req = zz.modifiers.normal.m[index];
			 if(req[0] > strmuf || req[1] > dexte || req[2] > intel || req[3] > faith) {
				var reg1 = (req[0] > strmuf) ? '<span style="color:#bb1b17">'+req[0]+'</span>/' :req[0] + '/';
				var reg2 = (req[1] > dexte) ? '<span style="color:#bb1b17">'+req[1]+'</span>/' : req[1] + '/';
				var reg3 = (req[2] > intel) ? '<span style="color:#bb1b17">'+req[2]+'</span>/' : req[2] + '/';
				var reg4 = (req[3] > faith) ? '<span style="color:#bb1b17">'+req[3]+'</span>/' : req[3];
				tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
				$('.'+hand+'i').css('color','#777777').html(tex).attr('tex','').unbind('hover');
				sel.removeAttr('adj');
			 } else {
				if(att >= 112 && att <= 120){
					if(vali == 'TinDarkmoonCatalyst')
						stat = faith - 10;
					else
						stat = intel - 10;
						sel.attr('tto','magic');
				} else if(att > 120 && att <= 123){
					stat = 0;
				} else if(att > 123 && att <= 130){
					if(vali == 'VelkasTalisman')
						stat = intel - 10
					else
						stat = faith - 10;
					sel.attr('tto','faith');
				}else if(att == 181 || att == 182){
					index = index;
					stat = intel - 10;
				}
				var gi = '';
				if(vali == "ManusCatalyst"){
					strte = strmuf;
					gi = '[' + zz.factors.manus[strte] + '] ';
				}
				add = zz.factors.adj[index][stat];
				sel.attr('adj',add);
				$('.'+hand+'i').css('color','#8830d2').html(gi + '(Adj '+add+')').attr('tex','').unbind('hover');
			 }
			 $('.weaponimg[fo="'+hand+'"]').attr('typ','normal');
			 offs = normal;
		}
		if(weptyp == 's' || weptyp == 'misc'){
			var index = parseInt(att) - 131,tex;
			var dat = mod;
			var isM = false;
			if(att == 183){
				dat = zz.modifiers.normal.ptde[8];
				var opts = ((parseInt(zz.xy.st.val())*hand2 >= 99) ? 91 : Math.floor((parseInt(zz.xy.st.val())*hand2)-8)),
				factors = [zz.factors.physical[opts][1],zz.factors.physical[parseInt(zz.xy.dx.val())-8][1]],
				str = factors[0],
				dex = factors[1],fat = 0,itt = 0;
				duico = ' <img src="img/dura2.png" alt="durability" title="durability" width="13" height="13" style="vertical-align:text-top"/> <span style="color:#b38f64;">300</span>';
			}
			if(att == 184){
				//$('.weaponimg[fo="'+hand+'"]').attr('typ','normal');
				offs = normal;
				isM = true;
			}
			if(dat[4] > strmuf || dat[5] > parseInt(zz.xy.dx.val()) || dat[6] > parseInt(zz.xy.it.val()) || dat[7] > parseInt(zz.xy.ft.val())) {
				
				var reg1 = (dat[4] > strmuf) ? '<span style="color:#bb1b17">'+dat[4]+'</span>/' : dat[4] + '/';
				var reg2 = (dat[5] > parseInt(zz.xy.dx.val())) ? '<span style="color:#bb1b17">'+dat[5]+'</span>/' : dat[5] + '/';
				var reg3 = (dat[6] > parseInt(zz.xy.it.val())) ? '<span style="color:#bb1b17">'+dat[6]+'</span>/' : dat[6] + '/';
				var reg4 = (dat[7] > parseInt(zz.xy.ft.val())) ? '<span style="color:#bb1b17">'+dat[7]+'</span>' : dat[7];
				tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
				$('.'+hand+'i').css('color','#352c2c').html(tex).attr('tex',tex).unbind('hover');
			} else {
				var rtex = '',tex = '',ma;
				if((typ == 'devine')) {
						ma = fat;
					} else{
						ma = itt;
					} 
				if(!isNaN(dat[9])) {
					phya = Math.floor(dat[9] *(((!dat[13] ? 0 : dat[13])*str)+((!dat[14] ? 0 : dat[14])*dex)) + dat[9]);
					mag =  Math.floor(dat[10] *(((!dat[15] ? 0 : dat[15])*ma)) + dat[10]);
					fir = dat[11];
					lgh = dat[12];
				}
				if(!isNaN(phya)){
					tex += (isM ? '<span style="color:#B52B2B;cursor:help;">' : '') + '('+(phya+mag+fir+lgh)+')' + (isM ? '</span>' : '');
					rtex += '<div style="text-align:center">(<span style="font-size:12px;font-weight:bold;"><span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span></span>)'+duico+'</div>';
				}
				tex += '[Sta '+ dat[8] +']';
				rtex += '<div style="text-align:center">'+dat[8]+'<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+dat[0]+'%</span> / <span style="color:#2b7cb5;">'+dat[1]+'%</span> / <span style="color:#b52b2b;">'+dat[2]+'%</span> / <span style="color:#b59d2b;">'+dat[3]+'%</span>)</span></div>';
				$('.'+hand+'i').css('color','#352c2c').html(tex).attr('tex',rtex).tipTip({attribute:'tex',delay:50});
			}
			if(att == 140 || att == 160 || att == 161 || att == 162 || att == 163 || att == 164 || att == 172 || att == 171 || att == 170 || att == 183){
				//$('.weaponimg[fo="'+hand+'"]').attr('typ','normal');
				offs = normal;
			}
			sel.removeAttr('adj');
			sel.removeAttr('tto');
		}
		if(weptyp == 'b' || weptyp == 'cb' || fal == 'DragonslayerGreatbow' || fal == 'GoughsGreatbow' || fal == 'DarkmoonBow'){
			$('.arrowimg[fo="'+hand+'"]').css('display','inline');
			if(fal == 'DragonslayerGreatbow' || fal == 'GoughsGreatbow'){
				var at = $('.arrowimg[fo="'+hand+'"]').attr('typ');
				if(at != 'dragon' && at != 'gdragon'){
					aoff = -140;
					$('.arrowimg[fo="'+hand+'"]').attr('typ','dragon');
				}
			}
		} else {
			$('.arrowimg[fo="'+hand+'"]').css('display','none');
		}
		$('.weaponimg[fo="'+hand+'"]').css('background-position',offs);
		$('.arrowimg[fo="'+hand+'"]').css('background-position',aoff); 
	});
	} else {
		return false;
	}
	
}
dks.prototype.getArrowDamage = function(TYPE,WEPTYPE,HAND,WEAPON){
	var wood = [zz.arrows.wood,0],
	bolt = [zz.arrows.bwood,-160],a,
	bolts = ['bwood','bstandard','bheavy','bsniper','blight'],
	b = $.inArray(TYPE,bolts);
	switch(TYPE){
		case('wooden'):
			a = [zz.arrows.wood,0];
		break;
		case('standard'):
			a = [zz.arrows.stand,-20];
		break;
		case('large'):
			a = [zz.arrows.large,-40];
		break;
		case('feather'):
			a = [zz.arrows.feath,-60];
		break;
		case('firea'):
			a = [zz.arrows.firea,-80];
		break;
		case('poison'):
			a = [zz.arrows.pois,-100];
		break;
		case('moonlight'):
			a = [zz.arrows.moon,-120];
		break;
		case('dragon'):
			a = [zz.arrows.dragon,-140];
		break;
		case('gdragon'):
			a = [zz.arrows.gdragon,-260];
		break;
		case('bwood'):
			a = [zz.arrows.bwood,-160];
		break;
		case('bstandard'):
			a = [zz.arrows.bstand,-180];
		break;
		case('bheavy'):
			a = [zz.arrows.bheavy,-200];
		break;
		case('bsniper'):
			a = [zz.arrows.sniper,-220];
		break;
		case('blight'):
			a = [zz.arrows.blight,-240];
		break;
	}
	if(WEPTYPE == 'cb' && b < 0){
		a = bolt;
		HAND.attr('typ','bwood');
	}
	if(WEPTYPE == 'b' && b >=0){
		a = wood;
		HAND.attr('typ','wooden');
	}
	if((TYPE == 'dragon' || TYPE == 'gdragon') && (WEAPON != 'DragonslayerGreatbow' && WEAPON != 'GoughsGreatbow')){
		if(WEPTYPE == 'b'){
			a = wood;
			HAND.attr('typ','wooden');
		} else {
			a = bolt;
			HAND.attr('typ','bwood');
		}
	}
	return a;
}
dks.prototype.getWeaponStatObjects = function(ind,type,hand,stpy) {
	ind = parseInt(ind);
	var mod;
	var hand2 = ((hand == 'rh1' || hand == 'rh2' || ind == '103' || ind == '104') && ($('#2hwep').is(':checked') && stpy != 'f' && stpy != 'b' && stpy != 'cb')) ? 1.5 : 1;
	if(stpy == 'b') hand2 = 1.5;
	var opts = ((parseInt(zz.xy.st.val())*hand2 >= 99) ? 91 : Math.floor((parseInt(zz.xy.st.val())*hand2)-8))
	if(ind > 61 && ind <= 103){
		var mfac = zz.factors.umagic;
	} else {
		var mfac = zz.factors.magic;
	}
	if(stpy == 'sn' || stpy == 'sm' || stpy == 'sg')
		stpy = 'sss';
	var dura = zz.weapons.dura.def;
	var factors = [zz.factors.physical[opts][1],zz.factors.physical[parseInt(zz.xy.dx.val())-8][1],mfac[parseInt(zz.xy.it.val())-8][1],mfac[parseInt(zz.xy.ft.val())-8][1],zz.factors.humanity[(parseInt(zz.xy.hum.val()) > 10)? 10 : parseInt(zz.xy.hum.val())][1]];
	if(type == 'normal') {
		mod = zz.modifiers.normal;
	} else if(type == 'crystal') {
		mod = zz.modifiers.crystal;
		dura = zz.weapons.dura.cry;
	} else if(type == 'raw' && stpy != 'cb' && stpy != 'sss') {
		mod = zz.modifiers.raw;
	} else if(type == 'magic') {
		mod = zz.modifiers.magic;
	} else if((type == 'enchanted') && stpy != 'cb' && stpy != 'sss') {
		mod = zz.modifiers.enchanted;
	} else if(type == 'devine') {
		mod = zz.modifiers.devine;
	} else if((type == 'occult') && stpy != 'cb' && stpy != 'sss') {
		mod = zz.modifiers.occult;
	} else if((type == 'chaos') && stpy != 'cb' && stpy != 'sss') {
		mod = zz.modifiers.chaos;
	} else if(type == 'fire') {
		mod = zz.modifiers.fire;
	} else if(type == 'lightning') {
		mod = zz.modifiers.lightning;
	} else {
		mod = zz.modifiers.normal;
		$('.weaponimg[fo="'+hand+'"]').attr('typ','normal').css('background-position','0px 0px');
	}
	if(ind == 0){
		$('.weaponimg[fo="'+hand+'"]').attr('typ','normal').css('background-position','0px 0px');
		return false;
	}
	if(ind > 0 && ind <= 61)
		return [ind - 1,zz.weapons.normal,mod.n,factors,dura.n[ind - 1]];
	else if(ind > 61 && ind <= 103){
		$('.weaponimg[fo="'+hand+'"]').attr('typ','normal').css('background-position','0px 0px');
		return [ind - 62,zz.weapons.unique,zz.modifiers.normal.u,factors,zz.weapons.dura.def.u[ind - 62]];
	}else if(ind > 103 && ind <= 111)
		return [ind - 104,zz.weapons.bows,mod.b,factors,dura.b[ind - 104]];
	else if(ind > 111 && ind <= 130)
		return false;
	else if(ind > 172 && ind <= 182){
		if(ind > 172 && ind <= 177 || ind == 180)
			return [ind - 173,zz.weapons.ptde,zz.modifiers.normal.ptde,factors,dura.p[ind - 173]];
		else if(ind == 178 && type == 'normal' || ind == 179 && type == 'normal')
			return [ind - 173,zz.weapons.ptde,mod.ptde,factors,dura.p[ind - 173]];
		else if(ind == 178 && type != 'normal' || ind == 179 && type != 'normal')
			return [ind - 178,zz.weapons.ptde,mod.ptde,factors,dura.p[ind - 178]];
		else if(ind == 181 || ind == 182)
			return false;
		else if(ind == 183)
			return false;
	}else if(ind > 130 && ind <= 172 && ind != 140 && ind != 160 && ind != 161 && ind != 162 && ind != 163 && ind != 164)
		return [ind - 131,zz.weapons.shields,mod.s,factors,dura.s[ind - 131]];
	else if(ind == 140 || ind == 160 || ind == 161 || ind == 162 || ind == 163 || ind == 164){
		return [ind - 131,zz.weapons.shields,zz.modifiers.normal.s,factors,dura.s[ind - 131]];
	}else if(ind == 184){
		return [ind - 184,zz.weapons.misc,zz.modifiers.normal.misc,factors,dura.misc[ind - 184]];
	}else
		return false
}
dks.prototype.applyEn = function(PASS){
	var index = zz.xy.en.val();
	if(this.oldStat.stats[2] != index || 
		this.oldStat.weapons[0] != zz.xy.rh1.val() ||
		this.oldStat.weapons[1] != zz.xy.rh2.val() ||
		this.oldStat.weapons[2] != zz.xy.lh1.val() ||
		this.oldStat.weapons[3] != zz.xy.lh2.val() ||
		this.oldStat.armor[0] != zz.xy.hgear.val() ||
		this.oldStat.armor[1] != zz.xy.cgear.val() ||
		this.oldStat.armor[2] != zz.xy.agear.val() ||
		this.oldStat.armor[3] != zz.xy.fgear.val() ||
		this.oldStat.rings[0] != zz.xy.ring1.val() ||
		this.oldStat.rings[1] != zz.xy.ring2.val() || PASS
	){
		zz.xy.sta.val(this.aat(zz.stam[index]).toFixed(0));
		this.bbc = zz.stam[index];
		zz.xy.eqp.val(this.aan + '/' + (this.aaq(zz.bur[index])).toFixed(1));
		var total = this.aaq(zz.bur[index]);
		var f = total/this.aan,g = ((this.aan/total)*100).toFixed(1);
		var c,text,untilf,untilh;
		var fourth = total/4;
		var half = total/2;
		
		
		 
		

		
		if(f>=4 || this.dwgr && f>=4){
			c = 'green';
			text = 'Fast Roll';
			untilf = (fourth - this.aan).toFixed(1);
			if(this.dwgr){
				text = 'Ninja Flip';
			}
		}else if(f>=2){
			c = 'blue';
			text = 'Mid Roll';
			untilf = (half - this.aan).toFixed(1);
		}else if(f>=1){
			c = 'red';
			text = 'Fat Roll';
			untilf = (total-this.aan).toFixed(1);
		}else if(f>=0){
			c = 'deepred';
			text = 'Slow Walk';
			untilf = (total - this.aan).toFixed(1);
		}
		
		$('#loadUsage').html('Using <span class="'+c+'">'+g+'%</span> || <span class="'+c+'">'+untilf+'</span> Weight left || <span class="'+c+'">'+text+'</span>');
		var y=1;
		if(this.bbr)
		 y = 4;
		var g = 1;
		if(this.gata)
		g = 2 * this.specmod;
		var tu = 1;
		if(this.blds)
		tu = 1.25 * this.specmod;
		var l = 1;
		if(this.bdsag)
		l = 1.5 * this.specmod;
		zz.xy.ble.val(this.rtoTen((zz.ble[index]) * (y * l * g * tu) + this.aap));
		this.bbf = zz.ble[index];
	} else {
		return false;
	}
}
dks.prototype.getWeaponObject = function(ind) {
	ind = parseInt(ind);
	if(ind == 0)
		return zz.weapons.fist[0];
	else if(ind > 0 && ind <= 61)
		return zz.weapons.normal[ind - 1];
	else if(ind > 61 && ind <= 103)
		return zz.weapons.unique[ind - 62];
	else if(ind > 103 && ind <= 111)
		return zz.weapons.bows[ind - 104];
	else if(ind > 111 && ind <= 130)
		return zz.weapons.magic[ind - 112];
	else if(ind > 130 && ind <= 172)
		return zz.weapons.shields[ind - 131];
	else if(ind == 184)
		return zz.weapons.misc[ind - 184];
	else 
		return zz.weapons.ptde[ind - 173];
		
}
dks.prototype.getArmorStats = function(){
	var def1,def2,def3,def4,def5,def6,def7,poise,bleed,poison,curse,weight,head,
	id1 = zz.xy.hgear.find('option:selected'),
	id2 = zz.xy.cgear.find('option:selected').attr('ind'),
	id3 = zz.xy.agear.find('option:selected').attr('ind'),
	id4 = zz.xy.fgear.find('option:selected').attr('ind'),
	id5 = zz.xy.lh1.find('option:selected').attr('ind'),
	id6 = zz.xy.rh1.find('option:selected').attr('ind'),
	id7 = zz.xy.lh2.find('option:selected').attr('ind'),
	id8 = zz.xy.rh2.find('option:selected').attr('ind');
	if(id1.attr('typ') == 'u')
		head = this.aai;
	else
		head = this.aae;
	id1 = id1.attr('ind');
	var hob,aob,gob,kob;
	hob = head[id1]
		hob = head[id1];
		aob = this.aaf[id2];
		gob = this.aag[id3];
		kob = this.aah[id4];
	if(!hob){
		hob = head[0];
		zz.xy.hgear[0].selectedIndex = 0;
		zz.xy.hgear.trigger("liszt:default");
	}
	if(!aob){
		aob = this.aaf[0];
		zz.xy.cgear[0].selectedIndex = 0;
		zz.xy.cgear.trigger("liszt:default");
	}
	if(!gob){
		gob = this.aag[0];
		zz.xy.agear[0].selectedIndex = 0;
		zz.xy.agear.trigger("liszt:default");
	}
	if(!kob){
		kob = this.aah[0];
		zz.xy.fgear[0].selectedIndex = 0;
		zz.xy.fgear.trigger("liszt:default");
	}
	this.stampen = hob[19] + aob[18] + gob[18] + kob[18];
	def1 = this.defp + hob[2] + aob[2] + gob[2] + kob[2];
	def2 = this.defp + hob[3] + aob[3] + gob[3] + kob[3];
	def3 = this.defp + hob[4] + aob[4] + gob[4] + kob[4];
	def4 = this.defp + hob[5] + aob[5] + gob[5] + kob[5];
	def5 = this.aaz + this.aav + hob[6] + aob[6] + gob[6] + kob[6];
	def6 = this.aaz + this.aax + hob[7] + aob[7] + gob[7] + kob[7];
	def7 = this.aaz + this.aay + hob[8] + aob[8] + gob[8] + kob[8];
	var poimo = 0;
	if(this.wr)
		poimo = 40;
	poise = poimo + hob[9] + aob[9] + gob[9] + kob[9];
	this.aap = bleed = hob[10] + aob[10] + gob[10] + kob[10];
	this.aak = poison = hob[11] + aob[11] + gob[11] + kob[11];
	this.aar = curse = hob[12] + aob[12] + gob[12] + kob[12];
	weight = this.weight = hob[14] + aob[14] + gob[14] + kob[14] + this.getWeaponObject(id5)[2] + this.getWeaponObject(id6)[2] + this.getWeaponObject(id7)[2] + this.getWeaponObject(id8)[2];
	this.armorWeight = hob[14] + aob[14] + gob[14] + kob[14];
	this.weaponWeight = weight-this.armorWeight;
	this.armCache = [def1,def2,def3,def4,def5,def6,def7,Math.round(poise),bleed,poison,curse,weight.toFixed(1)];
	return this.armCache;
}
dks.prototype.rtoTen = function(num){
	return Math.ceil(num*10)/10;
}
dks.prototype.calcWeightBrackets = function(weight,modifier) {
	var burx = this.aaq(zz.bur[zz.xy.en.val()],modifier);
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
dks.prototype.makeTypeModal = function(pos,hen,sel,typ,OBJECT) {
		var hpt = this;
		var TYPE = OBJECT.hasClass('weaponimg'),arrtyp = '';
		var arrows = ['wooden','standard','large','feather','firea','poison','moonlight','dragon','gdragon'];
		var bolts = ['bwood','bstandard','bheavy','bsniper','blight'];
		var weapon = sel.find('option:selected').attr('value');
		if(TYPE){
			arrtyp = $(".arrowimg[fo='"+hen+"']").attr('typ');
		} else 
			arrtyp = OBJECT.attr('typ');
		var left = pos.left;
		var bottom = pos.top;
		var ind = sel.find('option:selected').attr('ind');
		var wep;
		var b = 180;
		if(ind == 0)
			return false;
		else if(ind > 0 && ind <= 61 || ind == 178 || ind == 179){
			wep = ind - 1;
			hpt.showAll();
		}else if(ind > 61 && ind <= 103 && TYPE){
			return false
		}else if(ind > 103 && ind <= 107 && TYPE){
			hpt.showAll();
			wep = ind - 104;
		}else if((ind > 107 && ind <= 111 && TYPE) || (ind > 130 && ind <= 169 && ind != 140 && ind != 160 && ind != 161 && ind != 162 && ind != 163 && ind != 164)){
			if($('.wepTyp[tpy="'+typ+'"]').css('display') == 'none'){
				$('#tynor').addClass('activ');
			}
			hpt.hideCross();
			b = 115; //////////////////////////////////////////////////////////////////
		} else if(ind == 102 || ind > 103 && ind <= 107 || ind == 103 || ind == 180){ //start arrow selector
			var tr = $.inArray(arrtyp,arrows);
			if(tr < 0){
				$(".arrowimg[fo='"+hen+"']").attr('typ',arrows[0]);
				arrtyp = arrows[0];
			}
			if($('.wepTyp[tpy="'+arrtyp+'"]').css('display') == 'none'){
					$('#tywood').addClass('activ');
			}
			if(ind != 103 && ind != 180) {
				hpt.showArrows(weapon);
				wep = ind - 104;
				b = 147;
			} else { //great arrow selector
				hpt.showGArrows();
				wep = ind - 104;
				b = 52;
			}
			
		}else if(ind > 107 && ind <= 111){
			var tr = $.inArray(arrtyp,bolts);
			if(tr < 0){
				$(".arrowimg[fo='"+hen+"']").attr('typ',bolts[0]);
				arrtyp = bolts[0];
			}
			if($('.wepTyp[tpy="'+arrtyp+'"]').css('display') == 'none'){
				$('#tybwood').addClass('activ');
			}
			hpt.showBolts();
			b = 115;
		}else{
			return false
		}
		$('#wepo .wepTyp[tpy="'+typ+'"]').addClass('activ');
		$('#arpo .wepTyp[tpy="'+arrtyp+'"]').addClass('activ');
		if($('#wepTypeSel').attr('goes') == hen && $('#wepTypeSel').css('display') == 'block'){
			$('#wepTypeSel').fadeOut(300);
			return false;
		} else if($('#wepTypeSel').attr('goes') != hen && $('#wepTypeSel').css('display') == 'block'){
			$('#wepTypeSel').css('display','none').css({'left':(left-145)+'px','top':(bottom-b)+'px'}).attr('goes',hen).fadeIn(300);
		}
		$('#wepTypeSel').css({'left':(left-145)+'px','top':(bottom-b)+'px'}).attr('goes',hen).fadeIn(300,function(){
			setTimeout(function(){
				$(document).click(function() {
					$('#wepTypeSel').fadeOut(300);
					$(document).unbind('click');
				});
			},2);
			$("#wepTypeSel div div div").click(function(e) {
				e.stopPropagation();
				var el = $(this);
				var par = el.parent();
				var idg = par.attr('id');
				if(!$(this).hasClass('activ')){
					$('.wepTyp').each(function(){
						$(this).removeClass('activ');
					});
					$(this).addClass('activ');
					if(idg == 'wepo')
					$(".weaponimg[fo='"+$('#wepTypeSel').attr('goes')+"']").attr('typ',$(this).attr('tpy'));
					else if(idg == 'arpo')
					$(".arrowimg[fo='"+$('#wepTypeSel').attr('goes')+"']").attr('typ',$(this).attr('tpy'));
					hpt.calcAR(true,$('#'+$('#wepTypeSel').attr('goes')));
				}
				$('#wepTypeSel').fadeOut(300);
				$(document).unbind('click');
				$("#wepTypeSel div div div").unbind('click');
				hpt.getStat64();
			});
			$(".d img").click(function(e) {
				e.stopPropagation();
				$(document).unbind('click');
			});
		});

		
}
dks.prototype.showAll = function() {
	$('#wepo').css('display','block');
	$('#arpo').css('display','none');
	$('#wepo .wepTyp').each(function(){
		$(this).removeClass('activ').css({'display':'block'})
	});
	$('#wepTypeSel').css('height','160px')
}
dks.prototype.hideCross = function() {
	$('#wepo').css('display','block');
	$('#arpo,#tyraw,#tyenc,#tyocc,#tycha').css('display','none');
	$('#wepTypeSel').css('height','96px')
	$('#wepo .wepTyp').each(function(){
		$(this).removeClass('activ');
	});
}
dks.prototype.showArrows = function(wep){
	$('#wepo').css('display','none');
	$('#arpo').css('display','block');
	$('#tybwood,#tybstand,#tybheavy,#tybsniper,#tyblight,#tydrag,#tygdrag').css('display','none');
	$('#tywood,#tystand,#tylarge,#tyfeather,#tyfire,#typoison,#tymoon').css('display','block');
	$('#wepTypeSel').css('height','128px');
	$('#arpo .wepTyp').each(function(){
		$(this).removeClass('activ');
	});
}
dks.prototype.showGArrows = function(){
	$('#wepo').css('display','none');
	$('#arpo').css('display','block');
	$('#tybwood,#tybstand,#tybheavy,#tybsniper,#tyblight,#tywood,#tystand,#tylarge,#tyfeather,#tyfire,#typoison,#tymoon').css('display','none');
	$('#tydrag,#tygdrag').css('display','block');
	$('#wepTypeSel').css('height','32px');
	$('#arpo .wepTyp').each(function(){
		$(this).removeClass('activ');
	});
}
dks.prototype.showBolts = function(){
	$('#wepo').css('display','none');
	$('#arpo').css('display','block');
	$('#tybwood,#tybstand,#tybheavy,#tybsniper,#tyblight').css('display','block');
	$('#tywood,#tystand,#tylarge,#tyfeather,#tyfire,#typoison,#tymoon,#tydrag,#tygdrag').css('display','none');
	$('#wepTypeSel').css('height','96px')
	$('#arpo .wepTyp').each(function(){
		$(this).removeClass('activ');
	});
}
dks.prototype.aaj = function(value){
	var v=1,p=1,g=1,j=1;
	if(this.dcr)
	j = .5;
	if(this.mom){
		v = 1.10;
	}if(this.rofap)
	 p = 1.2;
	 if(this.tbr)
	 g=1.05
	return Math.floor(parseInt(value)*(p*v*g*j));
}
dks.prototype.aaq = function(value,mod){ 
	value = parseInt(value,10);
	
	var e=1,p=1,g=1;
	var f = mod || 1;
	if(this.rofap)
	 p = 1.2;
	if(this.mof){
		e = 1.05;
	}
	if(this.have)
	 g = 1.5;
	 var i = (p*e*g*f);
	 
	return parseFloat((value * i).toFixed(13),10);
}
dks.prototype.aat = function(value){
	var p = 1;
	if(this.rofap)
	 p = 1.2;
	return parseInt(value)*p;
}
dks.prototype.calcDefenses = function(pas){
	var x = parseInt(this.aad) + parseInt(zz.xy.hum.val());
	var phyDef,magDef,firDef,lghtDef;
	
	if(x + (parseInt(zz.xy.rs.val())-8)<262){
		phyDef = zz.sde[(x + (parseInt(zz.xy.rs.val())-8))];
	} else{
		phyDef = zz.tph[(x - parseInt(this.aad) + parseInt(zz.xy.sl.val())) + (parseInt(zz.xy.rs.val())-98)];
		if(! phyDef) {
			phyDef = zz.tph[zz.tph.length-1] + Math.floor((((x - parseInt(this.aad) + parseInt(zz.xy.sl.val())) + (parseInt(zz.xy.rs.val())-98)) - zz.tph.length-1)/20);
		}
			
	}
	if(x + Math.floor((parseInt(zz.xy.rs.val())-8)*1.59)>=325){
		firDef = zz.tmg[x + Math.floor((parseInt(zz.xy.rs.val())-98)*1.59)];
		if(! firDef) {
			firDef = zz.tmg[zz.tmg.length-1] + Math.floor(((x + (parseInt(zz.xy.rs.val())-98)) - zz.tmg.length-1)/20);
		}
	} else{
		firDef = zz.sfi[x + Math.floor((parseInt(zz.xy.rs.val())-8)*1.59)];
	}
	
	if(x + Math.floor((parseInt(zz.xy.ft.val())-8)*1.59)>=325){
		magDef = zz.tmg[x + Math.floor((parseInt(zz.xy.ft.val())-98)*1.59)];
		if(! magDef) {
			magDef = zz.tmg[zz.tmg.length-1] + Math.floor(((x + (parseInt(zz.xy.ft.val())-99)) - zz.tmg.length-1)/20);
		}
	} else{
		magDef = zz.sfi[x + Math.floor((parseInt(zz.xy.ft.val())-8)*1.59)];
	}
	if(x>792){
		lghtDef = zz.ser[zz.ser.length-1] + Math.floor((x - zz.ser.length)/20);
	} else {
		lghtDef = zz.ser[x];
	}
	var a;
	if(this.oldStat.weapons[0] != zz.xy.rh1.val() ||
		this.oldStat.weapons[1] != zz.xy.rh2.val() ||
		this.oldStat.weapons[2] != zz.xy.lh1.val() ||
		this.oldStat.weapons[3] != zz.xy.lh2.val() ||
		this.oldStat.armor[0] != zz.xy.hgear.val() ||
		this.oldStat.armor[1] != zz.xy.cgear.val() ||
		this.oldStat.armor[2] != zz.xy.agear.val() ||
		this.oldStat.armor[3] != zz.xy.fgear.val() ||
		this.oldStat.rings[0] != zz.xy.ring1.val() ||
		this.oldStat.rings[1] != zz.xy.ring2.val() || pas){
			a = this.getArmorStats();
		} else {
			a = this.armCache;
		}
	var phyArm = a[0],
		strikeArm = a[1],
		slashArm = a[2],
		thrustArm = a[3],
		magArm = a[4],
		fireArm = a[5],
		lghArm = a[6],
		poiArm = a[7],
		bleedRes = a[8],
		psnRes = a[9],
		curseRes = a[10],
		weightArm = a[11];
		
		var du = 1;
		if(this.dusk)
		du=0.7
		var df = 0;
		if(this.dbf)
		df = 15 * this.specmod;
		var dr = 0;
		if(this.drak)
		dr = 15 * this.specmod;
		var dg = 0;
		if(this.dgs)
		dg = 20 * this.specmod;
		var dk = 0;
		if(this.dkg)
		df = 20 * this.specmod;
		var dt = 0;
		if(this.dgt)
		df = 20 * this.specmod;
		var mg = 0;
		if(this.mgs)
		mg = 40 * this.specmod;
		
		var ti = this.rtoTen;
	zz.xy.phd.val(ti(phyDef + phyArm) + '('+phyDef+')');
	zz.xy.shd.val(ti(phyDef + strikeArm));
	zz.xy.sls.val(ti(phyDef + slashArm));
	zz.xy.tur.val(ti(phyDef + thrustArm));
	zz.xy.mag.val(ti((magDef + magArm + df + dr + dg + dk + dt + mg)*du) + '('+magDef+')');
	zz.xy.fla.val(ti(firDef + fireArm + df + dr + dg + dk + dt) + '('+firDef+')');
	zz.xy.lgh.val(ti(lghtDef + lghArm) + '('+lghtDef+')');
	
	this.aak = psnRes;
	this.aar = curseRes;
	this.aan = weightArm;
	this.applyEn();
	this.applyRs();
	
	zz.xy.poi.val(poiArm + this.aau);
	this.calcStam();
	this.calcWeightBrackets(this.weight-this.armorWeight,1);
}
dks.prototype.msort = function(a,b) {
	a = a[0];
	b = b[0];
	return a == b ? 0 : (a < b ? -1 : 1)
}
dks.prototype.rsort = function(a,b) {
	a = a[2][6];
	b = b[2][6];
	return a == b ? 0 : (a < b ? 1 : -1)
}
dks.prototype.calcStam = function() {
	//stampen=gras=clr=chil
	//stampen = 0 -> 5
	//clr   =clor ring
	//chil  =child mask
	//gras  =grass shield
	var cl=0;
	var ch=0;
	var gr=0;
	var ti=0;
	if(this.clr) {
		cl = 20;
	}
	if(this.chil) {
		ch = 10;
	}
	if(this.gras) {
		gr = 10 * this.specmod;
	}
	var totburd = this.aaq(zz.bur[zz.xy.en.val()]);
	var equiped = this.aan;
	var shift = equiped / totburd;
	shift = shift.toFixed(1);
	//=45*IF(I2>1;0.7;IF(I2>0.5;0.8;1))
	if(shift > 1){
		ti = 0.7;
	}else if(shift > 0.5){
		ti = 0.8;
	} else {
		ti = 1;
	}
	var ratebase = 45 * ti;
	var finalstam = ratebase+cl+ch+gr-this.stampen;
	var time = (parseInt($('#bstamina').val()) / finalstam).toFixed(1);
	$('#stamin').text(finalstam.toFixed(1));
	$('#stamtime').text(time);
	
}
dks.prototype.detSpellSort = function(){
	var numSpells = parseInt(zz.xy.ats.val()),tota = 0;
	if(numSpells > 0) {
		var speAr = [$('#spell1'),$('#spell2'),$('#spell3'),$('#spell4'),$('#spell5'),$('#spell6'),$('#spell7'),$('#spell8'),$('#spell9'),$('#spell10'),$('#spell11'),$('#spell12')];
		var nui = 0,j = 0,act = [], hif = [];
		for(var i=0;i<numSpells;i++){
			act[i] = speAr[i];
		}
		nui = i;
		for(var i=0;i<(12-numSpells);i++){
			hif[i] = speAr[(numSpells+i)];
		}
		var le = act.length;
		for(var p=0;p<act.length;p++){
			var cu = parseInt(act[p].find('option:selected').attr('cos'));
			tota += cu;
			if(tota <= numSpells){
				if(cu > 1){
					/*var pren = act[p].val();
					if(pren != '0'){
						for(var i=0,len = act.length;i<len;i++){
							if(speAr[i].val() == '0'){
								speAr[i].prop('disabled',false).val(pren);
								break;
							}
						}
					}*/
					le -= 1;
					hif.unshift(act[le]);
					var val = act[p].val();
					act = $.grep(act, function(value) {
					  return value != act[le];
					});
					var g = p;
					while(act[g] === undefined){
						speAr[g].prop('disabled',true).val(0);
						for(var i=0,len = act.length;i<len;i++){
							//console.log(g);
							if(speAr[i].val() == '0'){
							//console.log(speAr[i].val());
							 g = i;
							 break;
							}
							//if(speAr[p]
						}
						//p--;
					}
					//console.log(p);
						
					act[g].prop('disabled',false).val(val);
				} else {
					//console.log(p);
					act[p].prop('disabled',false);
				}
			} else {
				act[p].prop('disabled',false).val(0);	
			}
		}
		
		for(var q=0,len=hif.length-1;q<len;q++){
			var pren = hif[q].val();
			if(pren != '0'){
				for(var i=0,len = act.length;i<len;i++){
					if(speAr[i].val() == '0'){
						speAr[i].prop('disabled',false).val(pren);
						break;
					}
				}
			}
			hif[q].prop('disabled',true).val(0);
		}
	} else {
		$('#spell1,#spell2,#spell3,#spell4,#spell5,#spell6,#spell7,#spell8,#spell9,#spell10,#spell11,#spell12').each(function(){$(this).prop('disabled',true)});
	}
}
dks.prototype.getAllDefStats = function(){
	this.oldStat.stats = [zz.xy.vt.val(),zz.xy.at.val(),zz.xy.en.val(),zz.xy.st.val(),zz.xy.dx.val(),zz.xy.rs.val(),zz.xy.it.val(),zz.xy.ft.val(),zz.xy.hum.val()];
	this.oldStat.weapons = [zz.xy.rh1.val(),zz.xy.rh2.val(),zz.xy.lh1.val(),zz.xy.lh2.val()];
	this.oldStat.armor = [zz.xy.hgear.val(),zz.xy.cgear.val(),zz.xy.agear.val(),zz.xy.fgear.val()];
	this.oldStat.rings = [zz.xy.ring1.val(),zz.xy.ring2.val()];
	this.oldStat.h2 = ($('#2hwep').is(':checked')) ? 1 : 2;
}
dks.prototype.meetReq = function(obj,pas){
	if(this.oldStat.stats[6] != zz.xy.it.val() || 
		this.oldStat.stats[7] != zz.xy.ft.val() || 
		this.oldStat.weapons[2] != zz.xy.lh1.val() ||
		this.oldStat.weapons[3] != zz.xy.lh2.val() || pas){
		if(! obj){
			obj = $('#spell1,#spell2,#spell3,#spell4,#spell5,#spell6,#spell7,#spell8,#spell9,#spell10,#spell11,#spell12');
		}
		obj.each(function(){
			if($(this).css('display') != 'none'){
				var opt = $(this).find('option:selected');
				var too = opt.parent().attr('label');
				var ind = parseInt(opt.attr('ind'));
				if(too == 'Magic' || too == 'Miracles' || too == 'PTDE'){
					var typ = (too == 'Magic' || too == 'PTDE') ? parseInt(zz.xy.it.val()) : parseInt(zz.xy.ft.val());
					var req = parseInt(opt.attr('req'));
					if(typ < req){
						$(this).css('color','#dd5b5b');
						$(this).attr('tex','').unbind('hover');
						$('#tiptip_holder').css('display','none');
					} else {
						$(this).css('color','#333');
						var adj = 0,mag = 0;
						var lhin = $('#lh1').find('option:selected').attr('ind');
						var lhin2 = $('#lh2').find('option:selected').attr('ind');
						if($('#lh1[adj]').length > 0 && (lhin < 121 || lhin > 123)){
							adj = parseInt($('#lh1').attr('adj'));
							mag = ($('#lh1').attr('tto') == 'magic') ? 1 : 2;
						} else if($('#lh2[adj]').length > 0  && (lhin2 < 121 || lhin2 > 123)){
							adj = parseInt($('#lh2').attr('adj'));
							mag = ($('#lh2').attr('tto') == 'magic') ? 1 : 2;
						}
						var t = [((ind == 10 && mag == 1) ? true : false),((ind == 20 && mag == 1) ? true : false),((ind == 21 && mag == 1) ? true : false),((ind == 61 && mag == 2) ? true : false),((ind == 66 && mag == 2) ? true : false)];
						if((t[0] || t[1] || t[2] || t[3] || t[4]) && adj != 0){
							var dmg;
							switch(ind){
								case(10):
									dmg = 'Adds '+Math.floor(1.404*adj)+' magic damage';
								break;
								case(20):
									dmg = 'Adds '+Math.floor(.8*adj)+' magic damage';
								break;
								case(21):
									dmg = 'Adds '+Math.floor(1.101*adj)+' magic damage';
								break;
								case(61):
									dmg = 'Adds '+Math.floor(2.1*adj)+' magic damage';
								break;
								case(66):
									dmg = 'Adds '+Math.floor(1.8*adj)+' lightning damage';
								break;
							}
							$(this).attr('tex',dmg).tipTip({attribute:'tex',delay:50});
						} else {
							$(this).attr('tex','').unbind('hover');
							$('#tiptip_holder').css('display','none');
						}
					}
				} else {
					$(this).css('color','#333');
					$(this).attr('tex','').unbind('hover');
					$('#tiptip_holder').css('display','none');
				}
			} else {
				$(this).attr('tex','').unbind('hover');
				$('#tiptip_holder').css('display','none');
				return false;
			}
		});
	}
}
dks.prototype.applyArmor = function(boo,setval){
	if(boo){
		var p;
		switch(zz.xy.sClass.val()){
			case('warrior'):p=1;break;
			case('knight'):p=3;break;
			case('wanderer'):p=5;break;
			case('thief'):p=6;break;
			case('bandit'):p=7;break;
			case('hunter'):p=8;break;
			case('sorcerer'):p=9;break;
			case('pyromancer'):p=11;break;
			case('cleric'):p=12;break;
			case('deprived'):p=0;break;
		}
		zz.xy.hgear[0].selectedIndex = 0;
		zz.xy.cgear[0].selectedIndex = 0;
		zz.xy.agear[0].selectedIndex = 0;
		zz.xy.fgear[0].selectedIndex = 0;
		zz.xy.lh1[0].selectedIndex = 0;
		zz.xy.rh1[0].selectedIndex = 0;
		zz.xy.lh2[0].selectedIndex = 0;
		zz.xy.rh2[0].selectedIndex = 0;
		zz.xy.ring1[0].selectedIndex = 0;
		zz.xy.ring2[0].selectedIndex = 0;
		zz.xy.hum.val(0);
		this.getTotalStats();
		$('#bclass_fake').val('No stats yet...');
		$('#bsoulLevel_fake').val('');
		$('#csoulLevel_fake').val('');
		$('#bvitality_fake').val('');
		$('#battunement_fake').val('');
		$('#bendurance_fake').val('');
		$('#bstrength_fake').val('');
		$('#bdexterity_fake').val('');
		$('#bresistance_fake').val('');
		$('#bintelligence_fake').val('');
		$('#bfaith_fake').val('');
		$('#cvitality_fake').val('');
		$('#cattunement_fake').val('');
		$('#cendurance_fake').val('');
		$('#cstrength_fake').val('');
		$('#cdexterity_fake').val('');
		$('#cresistance_fake').val('');
		$('#cintelligence_fake').val('');
		$('#cfaith_fake').val('');
		$('#spell1')[0].selectedIndex =  0;
		$('#spell2')[0].selectedIndex =  0;
		$('#spell3')[0].selectedIndex =  0;
		$('#spell4')[0].selectedIndex =  0;
		$('#spell5')[0].selectedIndex =  0;
		$('#spell6')[0].selectedIndex =  0;
		$('#spell7')[0].selectedIndex =  0;
		$('#spell8')[0].selectedIndex =  0;
		$('#spell9')[0].selectedIndex =  0;
		$('#spell10')[0].selectedIndex =  0;
		$('#spell11')[0].selectedIndex =  0;
		$('#spell12')[0].selectedIndex =  0;
		$('#covenant')[0].selectedIndex =  0;
		$('.rankings').html("<span class='faded'>No stats entered yet.</span>");
		this.updateBestClass();
		this.detSpellSort();
	}
	if(setval){
		zz.xy.hgear[0].selectedIndex = setval[0];
		zz.xy.cgear[0].selectedIndex = setval[1];
		zz.xy.agear[0].selectedIndex = setval[2];
		zz.xy.fgear[0].selectedIndex = setval[3];
		zz.xy.lh1[0].selectedIndex = setval[6];
		zz.xy.rh1[0].selectedIndex = setval[7];
		zz.xy.lh2[0].selectedIndex = setval[8];
		zz.xy.rh2[0].selectedIndex = setval[9];
		var f = this;
		$('#lh1,#rh1,#lh2,#rh2').each(function(index){
			f.equip[index] = $('#'+$(this).prop('id')).find('option:selected').attr('ind');
		});
		//this.equip = [setval[6],setval[7],setval[8],setval[9]];
		this.updateBestClass();
		this.getArmor();
		this.getRing();
		this.getWeap();
	}
}
dks.prototype.applyRings = function(ringval){
	if(ringval){
		zz.xy.ring1[0].selectedIndex = ringval[4];
		zz.xy.ring2[0].selectedIndex = ringval[5];
	}
	if(this.oldStat.rings[0] != zz.xy.ring1.val() ||
		this.oldStat.rings[1] != zz.xy.ring2.val()){
		this.getRing();
	} else {
		return false;
	}
}
dks.prototype.applySpellCov = function(va){
	if(va){
		$('#spell1')[0].selectedIndex = (va[0]) ? va[0] : 0;
		$('#spell2')[0].selectedIndex = (va[1]) ? va[1] : 0;
		$('#spell3')[0].selectedIndex = (va[2]) ? va[2] : 0;
		$('#spell4')[0].selectedIndex = (va[3]) ? va[3] : 0;
		$('#spell5')[0].selectedIndex = (va[4]) ? va[4] : 0;
		$('#spell6')[0].selectedIndex = (va[5]) ? va[5] : 0;
		$('#spell7')[0].selectedIndex = (va[6]) ? va[6] : 0;
		$('#spell8')[0].selectedIndex = (va[7]) ? va[7] : 0;
		$('#spell9')[0].selectedIndex = (va[8]) ? va[8] : 0;
		$('#spell10')[0].selectedIndex = (va[9]) ? va[9] : 0;
		$('#spell11')[0].selectedIndex = (va[10]) ? va[10] : 0;
		$('#spell12')[0].selectedIndex = (va[11]) ? va[11] : 0;
		$('#covenant')[0].selectedIndex = (va[12]) ? va[12] : 0;
		this.detSpellSort();
	} else
	return false;
}
dks.prototype.applyRs = function(){
	var index = zz.xy.rs.val();
	var k=1
	if(this.pbr)
	 k=4;
	 var g = 1;
	if(this.gata)
	g = 2 * this.specmod;
	var t = 1;
	if(this.blds)
	t=1.25 * this.specmod;
	var l = 1;
	if(this.bdsag)
	l = 1.5 * this.specmod;
	zz.xy.psn.val(this.rtoTen((zz.res[index] * (k*g*t*l)) + this.aak));
	this.bbd = zz.res[index];
}
dks.prototype.applyHum = function(){
	var index = zz.xy.hum.val();
	var h = 1,aas = 0;
	if(this.cbr)
		h=4;
	var l = 1;
	if(this.bdsag)
	l = 1.5 * this.specmod;
	zz.xy.cur.val(this.rtoTen(zz.curse[index]*(h*l) + this.aar));
	if(this.cgsr || this.avarice)
		this.aas = 200;
	else
		this.aas = 0;
	zz.xy.itd.val(zz.item[index] + this.aas);
}
dks.prototype.applyHp = function(pas){
	var index = zz.xy.vt.val();
	if(this.oldStat.stats[0] != index ||
		this.oldStat.armor[0] != zz.xy.hgear.val() ||
		this.oldStat.rings[0] != zz.xy.ring1.val() ||
		this.oldStat.rings[1] != zz.xy.ring2.val() || pas){
		this.bba = zz.hp[index];
		zz.xy.hth.val(this.aaj(zz.hp[index]));
	} else {
		return false;
	}
}
dks.prototype.applyAt = function(ar){
	var index = zz.xy.at.val();
	if(this.oldStat.stats[1] != index ||
	this.oldStat.rings[0] != zz.xy.ring1.val() ||
	this.oldStat.rings[1] != zz.xy.ring2.val()){
		var r = 0,t = 0;
		if(this.wsr)
			r = 1;
		if(this.dsr)
			t = 1;
		this.bbb = zz.att[index];
		zz.xy.ats.val(zz.att[index] + this.aam + r + t);
		if(!ar && this.fthr)
		this.detSpellSort();
	} else {
		return false;
	}
}
dks.prototype.setCook = function(){
	if($.cookie("animate") == 'off'){
		jQuery.fx.off = true;
		$('#soff').attr('checked',true);
	} else {
		jQuery.fx.off = false;
	}
	if($.cookie("autoup") == 'off'){
		$('#asoff').attr('checked',true);
	}
	if($.cookie("path") == 'off'){
		this.gpth = false;
		$('#psoff').attr('checked',true);
	}
	if($.cookie("chosen") == 'off'){
		this.chosen = false;
		$('#chsoff').attr('checked',true);
	}
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
		case('ptde'): //dksdef[24]
			i = 24
		break;
		case('misc'): //dksdef[24]
			i = 25
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
	data += '<optgroup label="Misc Items">'+this.dksdef[25].join('')+'</optgroup>';
	return data;
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
	var arr;
	var evha = this;
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
					if(target.parent().prop('id') == 'forcedHead')
					evha.calcWeightBrackets(evha.weight-evha.armorWeight,1);
				});
			$('#m-'+type+'').remove();
			$(document).unbind('click');
			$('#m-'+type+' .inner-ele').unbind('click');
			if($('#forcedHead .edita').text() == 'Mask of the Father'){
				if(evha.mof)
					var modi = 1;
				else
					var modi = 1.05;
				evha.calcWeightBrackets(evha.weight-evha.armorWeight,modi);
			} else {
				evha.calcWeightBrackets(evha.weight-evha.armorWeight,1);
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
		evha.calcWeightBrackets(evha.weight-evha.armorWeight,1);
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
	if(this.dragBody || this.dragHead){
		if(this.dragBody){
			$('#dragbo').click();
		}
		if(this.dragHead){
			$('#draghe').click();
		}
	}
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
	
	function optimize(pool,equiv,maxweight,objfn,maxcount,count,worst,besta4value,besta34value,besta234value,makecombo,head,ches,gaun,legs,meetLimits,mins,maxs) {
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
					
					  var ac = meetLimits(makecombo(a1,a2,a3,a4),mins,maxs);
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
			
			str += '</li><li class="armor-sets" id="'+equiv[i].head[0]+'-'+equiv[i].ches[0]+'-'+equiv[i].gaun[0]+'-'+equiv[i].legs[0]+'">';
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
		evha.applySearched($(this).attr('id'));
		$('#aropt').click();
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
		wid = $('#armorWeightidCus').val();
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
			// a = combo stats , b = min , c = max
			//console.log(b,c)
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


$(document).ready(function(){
	(new dks()).setup();
});

/*
 * 
 * var a = 292,
    b = 251,
    c = null;

	if(a/b<1)
		c = 0.4*(Math.pow(a,3)/Math.pow(b,2))-0.09*(Math.pow(a,2)/b)+0.1*a
	else
		c = a-(b*(0.79 * Math.exp(-0.27*(b/a))))

	console.log(c);?

*/