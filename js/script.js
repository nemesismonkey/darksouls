//var timeDiff = {setStartTime:function (){d = new Date();time  = d.getTime();},getDiff:function (){d = new Date();return (d.getTime()-time);}}


var oldURL='',aaa,aab,aac,aad,aae=[],aaf=[],aag=[],aah=[],aai=[],g=false,eff=[],aaj=aak=aal=aam=aan=aaq=aap=aar=aas=aat=aau=defp=aav=aax=aay=aaz=cah=gre=0,bba,bbb,bbc,bbd,bbf,ring1,ring2,gpth=true,rings = [],armCache = [],tbr=clr=have=rosp=sspr=fspr=tspr=sppr=bbr=pbr=cbr=rtsr=btsr=bdr=ldr=sdr=dcr=wsr=dsr=rotsf=lr=wr=hr=hor=bdsag=dwgr=rir=cgsr=cssr=ocr=rof=rofap=rotee=ewgr=rotsp=calr=avarice=dusk=gata=blds=dbf=drak=dgs=dkg=dgt=mgs=coart=false,mof=mom=fthr=false,dksdef=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],dksalpha=[],oldStat={stats:[],weapons:[],armor:[],rings:[],h2:''},nerf=chosen=ptde=true,specmod=1,armorWeight,stampen=gras=chil=0;
$(document).ready(function(){
	//timeDiff.setStartTime();
	setCook();
	constructArmorArrays();
	buildWeaponLists();
	buildRingLists();
	buildSpellLists();
	
	var url = location.search;
	var ref = /\?b=/ig;
	if(url.length && ref.test(url)){
		var hash = url.split('?b=',2);
		g = $.base64.decode(hash[1]).split(',');
	}
	ref = /\?c=/ig;
	if(url.length && ref.test(url)){
		if(b64o != 0){
		g = $.base64.decode(b64o).split(',');
		}
	}
	applyClassStats(xy.sClass,cacheContent(),g);
	addEvents();
	
	function applyClassStats(cl,cache,urlval,p){
		var t = true,k=false;
		if(urlval){
			xy.sClass.val(urlval[0]).change();
			k = [urlval[1],urlval[2],urlval[3],urlval[4],urlval[5],urlval[6],urlval[7],urlval[8],urlval[9]];
			g=false;
			t=false;
		}
		aac = getCurrentClass(cl);
		aaa = 0 - aac[0];
		for(var i = 0,len = aac.length;i<len;i++) { aaa += aac[i]; }
		aab = aaa - aac[0];
		aad = aaa;
		var oldstat = [$('input[uid="vt"]').val(),$('input[uid="at"]').val(),$('input[uid="en"]').val(),$('input[uid="st"]').val(),$('input[uid="dx"]').val(),$('input[uid="rs"]').val(),$('input[uid="in"]').val(),$('input[uid="ft"]').val()]

		$('input[uid="sl"]').val(aac[0]);
		$('input[uid="vt"]').val(aac[1]);
		$('input[uid="at"]').val(aac[2]);
		$('input[uid="en"]').val(aac[3]);
		$('input[uid="st"]').val(aac[4]);
		$('input[uid="dx"]').val(aac[5]);
		$('input[uid="rs"]').val(aac[6]);
		$('input[uid="in"]').val(aac[7]);
		$('input[uid="ft"]').val(aac[8]);
		cache[8] = $('input[uid="hum"]').val();
		if(k){
			cache = k;
		}
		if(cache){
			xy.vt.val((cache[0]<aac[1]) ? aac[1] : ((cache[0] == oldstat[0]) ? aac[1] : cache[0]));
			xy.at.val((cache[1]<aac[2]) ? aac[2] : ((cache[1] == oldstat[1]) ? aac[2] : cache[1]));
			xy.en.val((cache[2]<aac[3]) ? aac[3] : ((cache[2] == oldstat[2]) ? aac[3] : cache[2]));
			xy.st.val((cache[3]<aac[4]) ? aac[4] : ((cache[3] == oldstat[3]) ? aac[4] : cache[3]));
			xy.dx.val((cache[4]<aac[5]) ? aac[5] : ((cache[4] == oldstat[4]) ? aac[5] : cache[4]));
			xy.rs.val((cache[5]<aac[6]) ? aac[6] : ((cache[5] == oldstat[5]) ? aac[6] : cache[5]));
			xy.it.val((cache[6]<aac[7]) ? aac[7] : ((cache[6] == oldstat[6]) ? aac[7] : cache[6]));
			xy.ft.val((cache[7]<aac[8]) ? aac[8] : ((cache[7] == oldstat[7]) ? aac[8] : cache[7]));
			xy.hum.val(cache[8]);
			xy.sl.val(getTotalStats());
		}
		if(p)
			applyEverything(false,false);
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
			applyEverything(false,[urlval[10],urlval[11],urlval[12],urlval[13],urlval[14],urlval[15],urlval[16],urlval[17],urlval[18],urlval[19]],[urlval[25],urlval[26],urlval[27],urlval[28],urlval[29],urlval[30],urlval[31],urlval[32],urlval[33],urlval[34],urlval[35],urlval[36],urlval[37]])
		}
		else
			applyEverything(true,false);
	}
	function applyEverything(boo,k,ar) {
		applyRings(k);
		applyArmor(boo,k);
		calcDefenses();
		getActiveEffects((!fthr) ? true : false)
		applyHp();
		applyAt(ar);
		applyHum();
		addSouls();
		getStat64();
		calcAR();
		applySpellCov(ar);
		meetReq();
		getAllDefStats();
		if(!fthr && !k)
		detSpellSort();
		fthr = true;
	}
	function getCurrentClass(cl){
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
	function getAllDefStats(){
		oldStat.stats = [xy.vt.val(),xy.at.val(),xy.en.val(),xy.st.val(),xy.dx.val(),xy.rs.val(),xy.it.val(),xy.ft.val(),xy.hum.val()];
		oldStat.weapons = [xy.rh1.val(),xy.rh2.val(),xy.lh1.val(),xy.lh2.val()];
		oldStat.armor = [xy.hgear.val(),xy.cgear.val(),xy.agear.val(),xy.fgear.val()];
		oldStat.rings = [xy.ring1.val(),xy.ring2.val()];
		oldStat.h2 = ($('#2hwep').is(':checked')) ? 1 : 2;
	}
	function cacheContent(){
		if(xy.sl.val().length){
			return [xy.vt.val(),xy.at.val(),xy.en.val(),xy.st.val(),xy.dx.val(),xy.rs.val(),xy.it.val(),xy.ft.val()];
		}
		return false;
	}
	function setCook(){
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
			gpth = false;
			$('#psoff').attr('checked',true);
		}
		if($.cookie("nerf") == 'off'){
			nerf = false;
			$('#onek').attr('checked',true);
		}
		if($.cookie("chosen") == 'off'){
			chosen = false;
			$('#chsoff').attr('checked',true);
		}
	}
	function applySpellCov(va){
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
			detSpellSort();
		} else
		return false;
	}
	function getTotalStats(){
		var r = 0;
		var total = [xy.vt.val(),xy.at.val(),xy.en.val(),xy.st.val(),xy.dx.val(),xy.rs.val(),xy.it.val(),xy.ft.val()];
		for(var i = 0,len = total.length;i<len;i++) { r += parseInt(total[i]); }
		aad = r;
		return parseInt(r-aab);
	}
	function applyHp(){
		var index = xy.vt.val();
		if(oldStat.stats[0] != index ||
			oldStat.armor[0] != xy.hgear.val() ||
			oldStat.rings[0] != xy.ring1.val() ||
			oldStat.rings[1] != xy.ring2.val()){
			bba = zz.hp[index];
			xy.hth.val(aaj(zz.hp[index]));
		} else {
			return false;
		}
	}
	function applyAt(ar){
		var index = xy.at.val();
		if(oldStat.stats[1] != index ||
		oldStat.rings[0] != xy.ring1.val() ||
		oldStat.rings[1] != xy.ring2.val()){
			var r = t = 0;
			if(wsr)
				r = 1;
			if(dsr)
				t = 1;
			bbb = zz.att[index];
			xy.ats.val(zz.att[index] + aam + r + t);
			if(!ar && fthr)
			detSpellSort();
		} else {
			return false;
		}
	}
	function applyEn(PASS){
		var index = xy.en.val();
		if(oldStat.stats[2] != index || 
			oldStat.weapons[0] != xy.rh1.val() ||
			oldStat.weapons[1] != xy.rh2.val() ||
			oldStat.weapons[2] != xy.lh1.val() ||
			oldStat.weapons[3] != xy.lh2.val() ||
			oldStat.armor[0] != xy.hgear.val() ||
			oldStat.armor[1] != xy.cgear.val() ||
			oldStat.armor[2] != xy.agear.val() ||
			oldStat.armor[3] != xy.fgear.val() ||
			oldStat.rings[0] != xy.ring1.val() ||
			oldStat.rings[1] != xy.ring2.val() || PASS
		){
			xy.sta.val(roundNumber(aat(zz.stam[index]),0));
			bbc = zz.stam[index];
			xy.eqp.val(aan + '/' + (aaq(zz.bur[index])).toFixed(1));
			var total = aaq(zz.bur[index]).toFixed(1);
			var f = total/aan,g = ((aan/total)*100).toFixed(1);
			var c,text,untilf,untilh;
			var fourth = total/4;
			var half = total/2;

			
			if(f>=4 || dwgr && f>=4){
				c = 'green';
				text = 'Fast Roll';
				untilf = (fourth - aan).toFixed(1);
				if(dwgr){
					untilf = (fourth - aan).toFixed(1);
					text = 'Ninja Flip';
				}
			}else if(f>=2){
				c = 'blue';
				text = 'Mid Roll';
				untilf = (half - aan).toFixed(1);
			}else if(f>1){
				c = 'red';
				text = 'Fat Roll';
				untilf = (total-aan).toFixed(1);
			}else if(f>0){
				c = 'deepred';
				text = 'Slow Walk';
				untilf = (total - aan).toFixed(1);
			}
			
			$('#loadUsage').html('Using <span class="'+c+'">'+g+'%</span> || <span class="'+c+'">'+untilf+'</span> Weight left || <span class="'+c+'">'+text+'</span>');
			var y=1;
			if(bbr)
			 y = 4;
			var g = 1;
			if(gata)
			g = 2 * specmod;
			var t = 1;
			if(blds)
			t = 1.25 * specmod;
			var l = 1;
			if(bdsag)
			l = 1.5 * specmod;
			xy.ble.val(Math.round((zz.ble[index]) * (y * l * g * t) + aap));
			bbf = zz.ble[index];
		} else {
			return false;
		}
	}
	function applyRs(){
		var index = xy.rs.val();
		var k=1
		if(pbr)
		 k=4;
		 var g = 1;
		if(gata)
		g = 2 * specmod;
		var t = 1;
		if(blds)
		t=1.25 * specmod;
		var l = 1;
		if(bdsag)
		l = 1.5 * specmod;
		xy.psn.val(Math.floor(Math.round((zz.res[index] * (k*g*t*l)) + aak)));
		bbd = zz.res[index];
	}
	function applyHum(){
		var index = xy.hum.val();
		var h = 1,aas = 0;
		if(cbr)
			h=4;
		var l = 1;
		if(bdsag)
		l = 1.5 * specmod;
		xy.cur.val((zz.curse[index]*(h*l) + aar));
		if(cgsr || avarice)
			aas = 200;
		xy.itd.val(zz.item[index] + aas);
	}
	function applyArmor(boo,setval){
		if(boo){
			var p;
			switch(xy.sClass.val()){
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
			xy.hgear[0].selectedIndex = 0;
			xy.cgear[0].selectedIndex = 0;
			xy.agear[0].selectedIndex = 0;
			xy.fgear[0].selectedIndex = 0;
			xy.lh1[0].selectedIndex = 0;
			xy.rh1[0].selectedIndex = 0;
			xy.lh2[0].selectedIndex = 0;
			xy.rh2[0].selectedIndex = 0;
			xy.ring1[0].selectedIndex = 0;
			xy.ring2[0].selectedIndex = 0;
			xy.hum.val(0);
			getTotalStats();
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
			updateBestClass();
			detSpellSort();
		}
		if(setval){
			xy.hgear[0].selectedIndex = setval[0];
			xy.cgear[0].selectedIndex = setval[1];
			xy.agear[0].selectedIndex = setval[2];
			xy.fgear[0].selectedIndex = setval[3];
			xy.lh1[0].selectedIndex = setval[6];
			xy.rh1[0].selectedIndex = setval[7];
			xy.lh2[0].selectedIndex = setval[8];
			xy.rh2[0].selectedIndex = setval[9];
			updateBestClass();
			getArmor();
			getRing();
			getWeap();
		}
	}
	function calcDefenses(pas){
		var x = parseInt(aad) + parseInt(xy.hum.val());
		var phyDef,magDef,firDef,lghtDef;
		
		if(x + (parseInt(xy.rs.val())-8)<262){
			phyDef = sphydef[(x + (parseInt(xy.rs.val())-8))];
		} else{
			phyDef = tphydef[(x - parseInt(aad) + parseInt(xy.sl.val())) + (parseInt(xy.rs.val())-98)];
			if(! phyDef) {
				phyDef = tphydef[tphydef.length-1] + Math.floor((((x - parseInt(aad) + parseInt(xy.sl.val())) + (parseInt(xy.rs.val())-98)) - tphydef.length-1)/20);
			}
				
		}
		if(x + Math.floor((parseInt(xy.rs.val())-8)*1.59)>=325){
			firDef = tmgfi[x + Math.floor((parseInt(xy.rs.val())-98)*1.59)];
			if(! firDef) {
				firDef = tmgfi[tmgfi.length-1] + Math.floor(((x + (parseInt(xy.rs.val())-98)) - tmgfi.length-1)/20);
			}
		} else{
			firDef = smgfi[x + Math.floor((parseInt(xy.rs.val())-8)*1.59)];
		}
		
		if(x + Math.floor((parseInt(xy.ft.val())-8)*1.59)>=325){
			magDef = tmgfi[x + Math.floor((parseInt(xy.ft.val())-98)*1.59)];
			if(! magDef) {
				magDef = tmgfi[tmgfi.length-1] + Math.floor(((x + (parseInt(xy.ft.val())-99)) - tmgfi.length-1)/20);
			}
		} else{
			magDef = smgfi[x + Math.floor((parseInt(xy.ft.val())-8)*1.59)];
		}
		if(x>792){
			lghtDef = slghdef[slghdef.length-1] + Math.floor((x - slghdef.length)/20);
		} else {
			lghtDef = slghdef[x];
		}
		var a;
		if(oldStat.weapons[0] != xy.rh1.val() ||
			oldStat.weapons[1] != xy.rh2.val() ||
			oldStat.weapons[2] != xy.lh1.val() ||
			oldStat.weapons[3] != xy.lh2.val() ||
			oldStat.armor[0] != xy.hgear.val() ||
			oldStat.armor[1] != xy.cgear.val() ||
			oldStat.armor[2] != xy.agear.val() ||
			oldStat.armor[3] != xy.fgear.val() ||
			oldStat.rings[0] != xy.ring1.val() ||
			oldStat.rings[1] != xy.ring2.val() || pas){
				a = getArmorStats();
			} else {
				a = armCache;
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
			if(dusk)
			du=0.7
			var df = 0;
			if(dbf)
			df = 15 * specmod;
			var dr = 0;
			if(drak)
			dr = 15 * specmod;
			var dg = 0;
			if(dgs)
			dg = 20 * specmod;
			var dk = 0;
			if(dkg)
			df = 20 * specmod;
			var dt = 0;
			if(dgt)
			df = 20 * specmod;
			var mg = 0;
			if(mgs)
			mg = 40 * specmod;
		xy.phd.val(phyDef + phyArm + '('+phyDef+')');
		xy.shd.val(phyDef + strikeArm);
		xy.sls.val(phyDef + slashArm);
		xy.tur.val(phyDef + thrustArm);
		xy.mag.val(Math.floor((magDef + magArm + df + dr + dg + dk + dt + mg)*du) + '('+magDef+')');
		xy.fla.val(firDef + fireArm + df + dr + dg + dk + dt + '('+firDef+')');
		xy.lgh.val(lghtDef + lghArm + '('+lghtDef+')');
		
		aak = psnRes;
		aar = curseRes;
		aan = weightArm;
		applyEn();
		applyRs();
		
		xy.poi.val(poiArm + aau);
		calcStam();
	}
	function getArmorStats(){
		var def1,def2,def3,def4,def5,def7,poise,bleed,poison,curse,weight,
		id1 = xy.hgear.find('option:selected'),
		id2 = xy.cgear.find('option:selected').attr('ind'),
		id3 = xy.agear.find('option:selected').attr('ind'),
		id4 = xy.fgear.find('option:selected').attr('ind'),
		id5 = xy.lh1.find('option:selected').attr('ind'),
		id6 = xy.rh1.find('option:selected').attr('ind'),
		id7 = xy.lh2.find('option:selected').attr('ind'),
		id8 = xy.rh2.find('option:selected').attr('ind');
		if(id1.attr('typ') == 'u')
			head = aai;
		else
			head = aae;
		id1 = id1.attr('ind');
		var hob,aob,gob,kob;
		hob = head[id1]
			hob = (id1 == '4' && xy.hgear[0].selectedIndex == 4 && !nerf || id1 == '4' && xy.hgear[0].selectedIndex == 4 && ptde) ? zz.altEk.head : head[id1];
			aob = (id2 == '4' && !nerf || id2 == '4' && ptde) ? zz.altEk.chest : aaf[id2];
			gob = (id3 == '4' && !nerf || id3 == '4' && ptde) ? zz.altEk.hands : aag[id3];
			kob = (id4 == '4' && !nerf || id4 == '4' && ptde) ? zz.altEk.legs : aah[id4];
		if(!hob){
			hob = head[0];
			xy.hgear[0].selectedIndex = 0;
			xy.hgear.trigger("liszt:default");
		}
		if(!aob){
			aob = aaf[0];
			xy.cgear[0].selectedIndex = 0;
			xy.cgear.trigger("liszt:default");
		}
		if(!gob){
			gob = aag[0];
			xy.agear[0].selectedIndex = 0;
			xy.agear.trigger("liszt:default");
		}
		if(!kob){
			kob = aah[0];
			xy.fgear[0].selectedIndex = 0;
			xy.fgear.trigger("liszt:default");
		}
		stampen = hob[19] + aob[18] + gob[18] + kob[18];
		def1 = defp + hob[2] + aob[2] + gob[2] + kob[2];
		def2 = defp + hob[3] + aob[3] + gob[3] + kob[3];
		def3 = defp + hob[4] + aob[4] + gob[4] + kob[4];
		def4 = defp + hob[5] + aob[5] + gob[5] + kob[5];
		def5 = aaz + aav + hob[6] + aob[6] + gob[6] + kob[6];
		def6 = aaz + aax + hob[7] + aob[7] + gob[7] + kob[7];
		def7 = aaz + aay + hob[8] + aob[8] + gob[8] + kob[8];
		var poimo = 0;
		if(wr)
			poimo = 40;
		poise = poimo + hob[9] + aob[9] + gob[9] + kob[9];
		aap = bleed = hob[10] + aob[10] + gob[10] + kob[10];
		aak = poison = hob[11] + aob[11] + gob[11] + kob[11];
		aar = curse = hob[12] + aob[12] + gob[12] + kob[12];
		weight = hob[14] + aob[14] + gob[14] + kob[14] + getWeaponObject(id5)[2] + getWeaponObject(id6)[2] + getWeaponObject(id7)[2] + getWeaponObject(id8)[2];
		armorWeight = hob[14] + aob[14] + gob[14] + kob[14];
		//gets total weight left minus any armor equiped.  defaults to 1/2 equip burden.
		/*var burx = aaq(zz.bur[xy.en.val()]);
		var weigh1 = ((burx/4).toFixed(1) - (weight - armorWeight)).toFixed(1);
		var light = (weigh1 > 0) ? weigh1 : 0;
		var weigh2 = ((burx/2).toFixed(1) - (weight - armorWeight)).toFixed(1);
		var mid = (weigh2 > 0) ? weigh2 : 0;
		var weigh3 = (burx - (weight - armorWeight)).toFixed(1);
		var fat = (weigh3 > 0) ? weigh3 : 0;
		$('#armorWeightidLight').val(light);
		$('#armorWeightidMid').val(weigh2);
		$('#armorWeightidFat').val(weigh3);*/
		armCache = [Math.round(def1),Math.round(def2),Math.round(def3),Math.round(def4),Math.round(def5),Math.round(def6),Math.round(def7),Math.round(poise),Math.round(bleed),Math.round(poison),Math.round(curse),weight.toFixed(1)];
		delete head;
		return armCache;
	}
	function getWeaponObject(ind) {
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
		else 
			return zz.weapons.ptde[ind - 173];
	}
	function constructArmorArrays() {
		for(var i = 0,len = zz.armor.length;i<len;i++){
			aae.push(zz.armor[i][0].head);
			aaf.push(zz.armor[i][0].chest);
			aag.push(zz.armor[i][0].hand);
			aah.push(zz.armor[i][0].feet);
			if(i == (zz.armor.length-1)){
				aai = zz.armor[i];
			}
		}
		buildArmorLists();
	}
	function applyRings(ringval){
		if(ringval){
			xy.ring1[0].selectedIndex = ringval[4];
			xy.ring2[0].selectedIndex = ringval[5];
		}
		if(oldStat.rings[0] != xy.ring1.val() ||
			oldStat.rings[1] != xy.ring2.val()){
			getRing();
		} else {
			return false;
		}
	}
	
	function addEvents() {
		$('.up,.down').click(function(e){
			var edit = $(this).attr('uid');
			var target = $('input[uid="'+edit+'"]').not(':disabled');
			if($(this).hasClass('up')){
				changeValUp(target,e);
			}
			if($(this).hasClass('down')){
				changeValDown(target,e);
			}
				getTotalStats();
				applyEverything(false,false);
				$(this).blur();
				updateSoulTotal();
				updateBestClass();
		});
		$('#startClass').change(function(){applyClassStats($('#startClass'),cacheContent(),false,true);});
		$('.gear').focus(function(){
				ring1 = xy.ring1.val();
				ring2 = xy.ring2.val();
				xy.ring2.find($('option[value="'+ring1+'"]')).css('display','none');
				xy.ring1.find($('option[value="'+ring2+'"]')).css('display','none');
			}).change(function(){
			 getArmor($(this).val());
			 getWeap($(this).val());
			 xy.ring1.find($('option')).removeAttr('style');
			 xy.ring2.find($('option')).removeAttr('style');			 
			 applyEverything(false,false);
			if(($(this).prop('id') == 'lh1' ||
				$(this).prop('id') == 'rh1' ||
				$(this).prop('id') == 'lh2' ||
				$(this).prop('id') == 'rh2') && gpth) {
					$('.weaponimg[fo="'+$(this).prop('id')+'"]').click();
				}
		});
		$('.d img').click(function(){
			var hand = $(this).attr('fo');
			var typ = $(this).attr('typ');
			var sel = $('#'+hand);
			var pos = $(this).position();
			makeTypeModal(pos,hand,sel,typ,$(this));
		});
		
		$('#revert').click(function(){
			xy.hum.val(0);
			$('select.gear,#covenant').trigger("liszt:default");
			$('.weaponimg').each(function(){
				$(this).attr('typ','normal');
			})
			$('#2hwep').attr('checked',false);
			getTotalStats();
			getRing(true);
			applyClassStats(xy.sClass,false);
			
			
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
								getTotalStats();
								applyEverything(false,false);
								updateSoulTotal();
								updateBestClass();
							}else {
								$(this).val($(this).data('cache'));
								updateBestClass();
							}
						} else {
							if($(this).val() >= 0 && $(this).val() < 100){
								$(this).val(newVal);
								getTotalStats();
								applyEverything(false,false);
								updateSoulTotal();
							} else{
								$(this).val($(this).data('cache'));
							}
						}
					}
				} else {
					$(this).removeClass('blur')
				}
			return false;});
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
						findBestClass(cache)
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
			$('#apply').attr('disabled','disabled');
		});
		$('#apply').click(function(){
			if($(this).attr('disabled') == 'disabled'){
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
				xy.sClass.val($.trim($('#bclass_fake').val().toLowerCase()));
				$('#startClass_chzn .chzn-single span').text(xy.sClass.find(':selected').text());
				applyClassStats(xy.sClass,cache,false,true);
			}
			$('.cselector').click();
		});
		$('.up_fake,.down_fake').click(function(e){
			var edit = $(this).attr('fid');
			var target = $('input[fid="'+edit+'"]').not(':disabled');
			if($(this).hasClass('up_fake')){
				changefValUp(target,e);
			}
			if($(this).hasClass('down_fake')){
				changefValDown(target,e);
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
				findBestClass(cache);
				$(this).blur();
		});
		$('#cancel').click(function(){
			toggle1Dia();
			$('.cselector').attr('state','t')	
		});
		$('.cselector').click(function(){
			if($(this).attr('state') == 't'){
				toggle2Dia();
				$(this).attr('state','p');
			} else {
				toggle1Dia();
				$(this).attr('state','t');
			}
		});
		/*$('#aropt,#dfinder').click(function(){
			var tor = ($(this).prop('id') == 'aropt') ? 'a' : 'b';
			if($(this).attr('state') == 't'){
				$('.overlay2').stop(true,true).fadeOut(200);
				toggleAoB(tor,'none');
				$(this).attr('state','p');
			} else {
				$('.overlay2').stop(true,true).fadeIn(200);
				toggleAoB(tor,'block');
				$(this).attr('state','t');
			}
		});*/
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
				gpth = true;
			} else {
				gpth = false;
			}
			
			$.cookie("path", null);
			$.cookie("path", $(this).val(),{expires : 365, path: '/'});
		});
		$('.nerf').click(function(){
			
			if($(this).val() == 'on'){
				nerf = true;
				calcDefenses(true)
			} else {
				nerf = false;
				calcDefenses(true)
			}
			
			$.cookie("nerf", null);
			$.cookie("nerf", $(this).val(),{expires : 365, path: '/'});
		});
		$('.chssel').click(function(){
			
			if($(this).val() == 'on'){
				chosen = true;
			} else {
				chosen = false;
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
			$('#lh1').focus().change();
		});
		$('#2hwep').change(function(){
			calcAR(true);
			getStat64()
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
				var strin = 'SL ' + xy.sl.val() + ' ' + xy.sClass.val().charAt(0).toUpperCase() + xy.sClass.val().substring(1) + '\n\n';
				strin += 'Vit: ' + ((xy.vt.val() == xy.bvt.val()) ? '-' : xy.vt.val()) + '\n';
				strin += 'Att: ' + ((xy.at.val() == xy.bat.val()) ? '-' : xy.at.val()) + '\n';
				strin += 'End: ' + ((xy.en.val() == xy.ben.val()) ? '-' : xy.en.val()) + '\n';
				strin += 'Str: ' + ((xy.st.val() == xy.bst.val()) ? '-' : xy.st.val()) + '\n';
				strin += 'Dex: ' + ((xy.dx.val() == xy.bdx.val()) ? '-' : xy.dx.val()) + '\n';
				strin += 'Res: ' + ((xy.rs.val() == xy.brs.val()) ? '-' : xy.rs.val()) + '\n';
				strin += 'Int: ' + ((xy.it.val() == xy.bit.val()) ? '-' : xy.it.val()) + '\n';
				strin += 'Fai: ' + ((xy.ft.val() == xy.bft.val()) ? '-' : xy.ft.val()) + '\n\n';
				
				var tpus = [$('.weaponimg[fo="rh1"]').attr('typ'),$('.weaponimg[fo="rh2"]').attr('typ'),$('.weaponimg[fo="lh1"]').attr('typ'),$('.weaponimg[fo="lh2"]').attr('typ')];
				
				strin += 'R1: ' + ((tpus[0] != 'normal') ? _case(tpus[0]) + ' ' : '') + xy.rh1.find("option:selected").text() + '\n';
				strin += 'R2: ' + ((tpus[1] != 'normal') ? _case(tpus[1]) + ' ' : '') + xy.rh2.find("option:selected").text() + '\n';
				
				strin += 'L1: ' + ((tpus[2] != 'normal') ? _case(tpus[2]) + ' ' : '') + xy.lh1.find("option:selected").text() + '\n' 
				strin += 'L2: ' + ((tpus[3] != 'normal') ? _case(tpus[3]) + ' ' : '') + xy.lh2.find("option:selected").text() + '\n\n';
				
				strin += 'Armor:\n' + xy.hgear.find("option:selected").text() + '\n' + xy.cgear.find("option:selected").text() + '\n' + xy.agear.find("option:selected").text() + '\n' + xy.fgear.find("option:selected").text() + '\n\n';
				
				strin += 'Rings:\n' + xy.ring1.find("option:selected").text() + '\n' + xy.ring2.find("option:selected").text() + '\n\n';
				var spellArr = [$('#spell1').val(),$('#spell2').val(),$('#spell3').val(),$('#spell4').val(),$('#spell5').val(),$('#spell6').val(),$('#spell7').val(),$('#spell8').val(),$('#spell9').val(),$('#spell10').val(),$('#spell11').val(),$('#spell12').val()];
				var f = 0,newspell = [];
				for(i=0;i<spellArr.length;i++){
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
						for (i=0;i<compressed.length;i++){
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
			getStat64()
		});
		$('.rand').click(function(){
			/*var t = xy.sClass.val()+','+xy.vt.val()+','+xy.at.val()+','+xy.en.val()+','+xy.st.val()+','+xy.dx.val()+','+xy.rs.val()+','+xy.it.val()+','+xy.ft.val()+','+xy.hum.val()+','+xy.hgear[0].selectedIndex+','+xy.cgear[0].selectedIndex+','+xy.agear[0].selectedIndex+','+xy.fgear[0].selectedIndex+','+xy.ring1[0].selectedIndex+','+xy.ring2[0].selectedIndex+','+xy.lh1[0].selectedIndex+','+xy.rh1[0].selectedIndex+','+xy.lh2[0].selectedIndex+','+xy.rh2[0].selectedIndex;
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
		var c = $.base64.encode(t);
		if(uplo)
			return c;
		else
		$('#url').val('http://' + location.hostname + location.pathname + '?b='+c);*/
		var etN = function(base,mod){
			return Math.floor((Math.random()*base)+mod) + ',';
		}
		var t = xy.sClass.find('option').eq(Math.floor((Math.random()*5))).val() + ',';
			for(i=0;i<9;i++){
				t += etN(91,8);
			}
			t += etN(61,0);
			t += etN(52,0);
			t += etN(52,0);
			t += etN(52,0);
			t += etN(34,0);
			t += etN(34,0);
			t += etN(173,0);
			t += etN(173,0);
			t += etN(173,0);
			t += etN(173,0);
			for(i=0;i<4;i++){
				t += $('#wepo').children('div').eq(Math.floor((Math.random()*9))).attr('tpy') + ',';
			}
			t += Math.round(Math.random()) + ',';
			for(i=0;i<12;i++){
				t += etN(67,0);
			}
			t += etN(9,0);
			for(i=0;i<4;i++){
				t += $('#arpo').children('div').eq(Math.floor((Math.random()*12))).attr('tpy') + ((i != 3) ? ',' : '');
			}
			
			var c = $.base64.encode(t);
			window.location = 'http://' + location.hostname + location.pathname + '?b='+c;
			
		});
		$('.smptext').click(function(){
			this.select();
		}).mouseup(function(e){
			e.preventDefault();
		});
		$('.spell').focus(function(){
			var t = $(this),n=[];
			$('.spell').each(function(index){
				if(t != $(this)){
					n[index] = Number($(this).find('option:selected').attr('ind'));
				} else {
					n[index] = 0;
				}
			});
			
				gre = $(this).val();
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
			}).change(function(){
			var numSpells = parseInt(xy.ats.val());
			var speAr = [$('#spell1'),$('#spell2'),$('#spell3'),$('#spell4'),$('#spell5'),$('#spell6'),$('#spell7'),$('#spell8'),$('#spell9'),$('#spell10'),$('#spell11'),$('#spell12')];
			var coun = 0;
			if(numSpells > 0) {
				for(i=0;i<numSpells;i++){
					coun += parseInt(speAr[i].find('option:selected').attr('cos'));
				}
				if(coun > numSpells){
					$(this).val(gre);
				} else {
					meetReq($(this),true)
					detSpellSort();
					$(this).blur();
					getStat64();
				}
			}
			delete speAr;
		});
		$('#covenant').change(function(){
			var speAr = [$('#spell1'),$('#spell2'),$('#spell3'),$('#spell4'),$('#spell5'),$('#spell6'),$('#spell7'),$('#spell8'),$('#spell9'),$('#spell10'),$('#spell11'),$('#spell12')];
			var j = parseInt($('#covenant').val());
			for(i=0;i<speAr.length;i++){
				if(!speAr[i].is(':disabled')){
					var k = parseInt(speAr[i].find('option:selected').attr('spec'));
					
					
					if(k != 0){
						if(k != j)
							speAr[i][0].selectedIndex = 0;
							speAr[i].css('color','#333');
							detSpellSort();
					}
				}
			}
			getStat64();
			delete speAr;
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
						data: {'aut' : sAuthor, 'til' : sTitle, 'b6' : getStat64(true), 'public' : (($('#savePublic').is(':checked')) ? 1 : 0), 'hash' : sHash, 'tolist':hSele,'newlist':sNlist,
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
									$('.datbox').html(((data.b) ? '<span class="small red">'+data.b + '</span>' : '<strong>Upload Successful</strong><br><span class="small blue">Your save link:') + '<br><input type="text" style="width:100%;font-size:13px;float:none;" value="http://'+location.hostname + location.pathname + '?c=' + data.a + '" />').find('input').click(function(){this.select()}).mouseup(function(e){e.preventDefault()}).keypress(function(e){var key = e.which;if(key == 13){e.preventDefault();return false;}}).click();
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
					var data = {'aut' : sAuthor, 'til' : sTitle, 'b6' : getStat64(true), 'publicn' : (($('#savePublic').is(':checked')) ? 1 : 0), 'hash' : sHash, 'tolist':hSele,'newlist':sNlist,
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
			var url = location.hostname + location.pathname + '?b=' + getStat64(true);
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
			if(oldURL != url)
				$('#ministatus').html('<center><span class="small faded muyj">Creating Link</span><img src="img/loading.gif" width="208" height="13" /></center>');
			else
				$('#ministatus').find('input').click();
			$('.texover').fadeIn(300);
			if(oldURL != url)
			$.ajax({
				type: 'POST',
				url: 'mini.php',
				data: {'url' : url},
				success: function(data){
					$('#ministatus').html('<center><input type="text" style="width:100%;font-size:13px;float:none;" value="'+$.trim(data)+'" readonly="readonly"/></center>').find('input').click(function(){this.select()}).mouseup(function(e){e.preventDefault()}).keypress(function(e){var key = e.which;if(key == 13){e.preventDefault();return false;}}).click();
				},
				cache : false
			});
			oldURL = url;
			return false;
		});
	}
	function calcAR(pas,se){
		if(oldStat.stats[3] != xy.st.val() || 
			oldStat.stats[4] != xy.dx.val() || 
			oldStat.stats[6] != xy.it.val() || 
			oldStat.stats[7] != xy.ft.val() || 
			oldStat.weapons[0] != xy.rh1.val() ||
			oldStat.weapons[1] != xy.rh2.val() ||
			oldStat.weapons[2] != xy.lh1.val() ||
			oldStat.weapons[3] != xy.lh2.val() ||
			oldStat.h2 != ($('#2hwep').is(':checked') ? 1 : 2) ||
			oldStat.stats[8] != xy.hum.val() ||
			pas
		){
			var t;
			if(se)
				t = se;
			else
				t = $('#lh1,#lh2,#rh1,#rh2');
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
			adds = getArrowDamage(yui,secweptyp,$('.arrowimg[fo="'+hand+'"]'),fal),
			mods = getWeaponStatObjects(att,typ,hand,secweptyp),
			typ = $('.weaponimg[fo="'+hand+'"]').attr('typ'),
			yui = $('.arrowimg[fo="'+hand+'"]').attr('typ'),
			aoff = adds[1],
			adds = adds[0],
			hand2 = ((hand == 'rh1' || hand == 'rh2' || att == '103' || att == '104') && ($('#2hwep').is(':checked') && secweptyp != 'f' && secweptyp != 'b' && secweptyp != 'cb')) ? 1.5 : 1,
			phya,mag,fir,lgh,
			strmuf = ((parseInt(xy.st.val())*hand2 >= 99) ? 99 : Math.floor(parseInt(xy.st.val())*hand2));
			if(mods) {
				var i = parseInt(mods[0]),
				wep = mods[1][i],
				mod = mods[2][i],
				str = mods[3][0],
				dex = mods[3][1],
				itt = mods[3][2],
				fat = mods[3][3],
				cha = mods[3][4];
				if((typ == 'normal' || typ == 'crystal' || typ== 'raw') && weptyp != 'u'){
					if(typ == 'normal')
					 offs = normal;
					if(typ == 'crystal')
					 offs = crystal;
					 if(typ == 'raw')
					 offs = raw;
					var reg = [mod[4],mod[5],0,0];
					if(reg[0] > strmuf || reg[1] > parseInt(xy.dx.val())) {
						var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' : reg[0] + '/';
						var reg2 = (reg[1] > parseInt(xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/';
						var reg3 = 0 + '/';
						var reg4 = 0;
						tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
						$('.'+hand+'i').css('color','#777777').html(tex).attr('tex','').unbind('hover');
					} else {
						phya = Math.floor((mod[0] + (weptyp == 'b' || weptyp == 'cb' ? adds[0] : 0)) *(1+(mod[6]*str)+(mod[7]*dex)));
						mag = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[1] : 0);
						fir = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[2] : 0);
						lgh = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[3] : 0);
						$('.'+hand+'i').css('color','#7d563a').html('('+(phya+mag+fir+lgh)+')').attr('tex','<span style="font-size:12px;font-weight:bold;"><span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span></span>').tipTip({attribute:'tex',delay:50});
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
					if(reg[0] > strmuf || reg[1] > parseInt(xy.dx.val()) || reg[2] > parseInt(xy.it.val()) || reg[3] > parseInt(xy.ft.val())) {
						var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/',
						reg2 = (reg[1] > parseInt(xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/',
						reg3 = (reg[2] > parseInt(xy.it.val())) ? '<span style="color:#bb1b17">'+reg[2]+'</span>/' : reg[2] + '/',
						reg4 = (reg[3] > parseInt(xy.ft.val())) ? '<span style="color:#bb1b17">'+reg[3]+'</span>/' : reg[3];
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
						$('.'+hand+'i').css('color','#3a667d').html('('+(phya + mag + fir + lgh)+')').attr('tex','<span style="font-size:12px;font-weight:bold;"><span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span></span>').tipTip({attribute:'tex',delay:50});
					}
				}
				if(typ == 'chaos' && weptyp != 'u'){
					 offs = chaos;
					var reg = [mod[4],mod[5],0,0];
					if(reg[0] > strmuf || reg[1] > parseInt(xy.dx.val())) {
						reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/',
						reg2 = (reg[1] > parseInt(xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/',
						reg3 = 0 + '/',
						reg4 = 0;
						tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
						$('.'+hand+'i').css('color','#777777').html(tex).attr('tex','').unbind('hover');
					} else {
						phya = Math.round((mod[0] + (weptyp == 'b' || weptyp == 'cb' ? adds[0] : 0))*(1+(.21*cha)));
						mag = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[1] : 0);
						fir = Math.round((mod[2] + (weptyp == 'b' || weptyp == 'cb' ? adds[2] : 0))*(1+(0.2075*cha)));
						lgh = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[3] : 0);
						$('.'+hand+'i').css('color','#b52b2b').html('('+(phya+mag+fir+lgh)+')').attr('tex','<span style="font-size:12px;font-weight:bold;"><span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span></span>').tipTip({attribute:'tex',delay:50});
					}
				}
				if(typ == 'fire' && weptyp != 'u'){
					 offs = fire;
					var reg = [mod[4],mod[5],0,0];
					if(reg[0] > strmuf || reg[1] > parseInt(xy.dx.val())) {
						var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/',
						reg2 = (reg[1] > parseInt(xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/',
						reg3 = 0 + '/',
						reg4 = 0;
						tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
						$('.'+hand+'i').css('color','#777777').html(tex).attr('tex','').unbind('hover');
					} else {
						phya = mod[0] + (weptyp == 'b' || weptyp == 'cb' ? adds[0] : 0);
						mag = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[1] : 0);
						fir = mod[2] + (weptyp == 'b' || weptyp == 'cb' ? adds[2] : 0);
						lgh = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[3] : 0);
						$('.'+hand+'i').css('color','#b52b2b').html('('+(phya+mag+fir+lgh)+')').attr('tex','<span style="font-size:12px;font-weight:bold;"><span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span></span>').tipTip({attribute:'tex',delay:50});
					}
				}
				if(typ == 'lightning' && weptyp != 'u'){
					 offs = lightning;
					var reg = [mod[4],mod[5],0,0];
					if(reg[0] > strmuf || reg[1] > parseInt(xy.dx.val())) {
						var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/',
						reg2 = (reg[1] > parseInt(xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/',
						reg3 = 0 + '/',
						reg4 = 0;
						tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
						$('.'+hand+'i').css('color','#777777').html(tex).attr('tex','').unbind('hover');
					} else {
						phya = mod[0] + (weptyp == 'b' || weptyp == 'cb' ? adds[0] : 0);
						mag = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[1] : 0);
						fir = 0 + (weptyp == 'b' || weptyp == 'cb' ? adds[2] : 0);
						lgh = mod[3] + (weptyp == 'b' || weptyp == 'cb' ? adds[3] : 0);
						$('.'+hand+'i').css('color','#b59d2b').html('('+(phya+mag+fir+lgh)+')').attr('tex','<span style="font-size:12px;font-weight:bold;"><span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span></span>').tipTip({attribute:'tex',delay:50});
					}
				}
				if(weptyp == 'u'){
					 offs = normal;
					var reg = [mod[4],mod[5],mod[6],mod[7]];
					if(reg[0] > strmuf || reg[1] > parseInt(xy.dx.val()) || reg[2] > parseInt(xy.it.val()) || reg[3] > parseInt(xy.ft.val())) {
						var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/',
						reg2 = (reg[1] > parseInt(xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/',
						reg3 = (reg[2] > parseInt(xy.it.val())) ? '<span style="color:#bb1b17">'+reg[2]+'</span>/' : reg[2] + '/',
						reg4 = (reg[3] > parseInt(xy.ft.val())) ? '<span style="color:#bb1b17">'+reg[3]+'</span>/' : reg[3];
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
								phya += adds[0];
							}
						}
						$('.'+hand+'i').css('color','#3a667d').html('('+(phya + mag + fir + lgh)+')').attr('tex','<span style="font-size:12px;font-weight:bold;"><span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span></span>').tipTip({attribute:'tex',delay:50});
						$('.weaponimg[fo="'+hand+'"]').attr('typ','normal');
					}
				}
				sel.removeAttr('adj');
				sel.removeAttr('tto');
			}
			if(weptyp == 'f'){
				  offs = normal;
				$('.'+hand+'i').css('color','#777777').html(20).attr('tex','<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">20</span> / <span style="color:#2b7cb5;">0</span> / <span style="color:#b52b2b;">0</span> / <span style="color:#b59d2b;">0</span>)</span>').tipTip({attribute:'tex',delay:50});
				$('.weaponimg[fo="'+hand+'"]').attr('typ','normal');
				sel.removeAttr('adj');
				sel.removeAttr('tto');
			}
			if(weptyp == 'm'){
				 offs = normal;
				 var dexte = parseInt(xy.it.val())
				 var faith = parseInt(xy.ft.val());
				 var intel = parseInt(xy.it.val());
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
					add = zz.factors.adj[index][stat];
					sel.attr('adj',add);
					$('.'+hand+'i').css('color','#8830d2').html('(Adj '+add+')').attr('tex','').unbind('hover');
					$('.weaponimg[fo="'+hand+'"]').attr('typ','normal');
				 }
			}
			if(weptyp == 's'){
				var index = parseInt(att) - 131,tex;
				var dat = mod;
				if(att == 183){
					dat = zz.modifiers.normal.ptde[8];
					var opts = ((parseInt(xy.st.val())*hand2 >= 99) ? 91 : Math.floor((parseInt(xy.st.val())*hand2)-8)),
					factors = [zz.factors.physical[opts][1],zz.factors.physical[parseInt(xy.dx.val())-8][1]],
					str = factors[0],
					dex = factors[1],fat = 0,itt = 0;
				}
				
				if(dat[4] > strmuf || dat[5] > parseInt(xy.dx.val()) || dat[6] > parseInt(xy.it.val()) || dat[7] > parseInt(xy.ft.val())) {
					
					var reg1 = (dat[4] > strmuf) ? '<span style="color:#bb1b17">'+dat[4]+'</span>/' : dat[4] + '/';
					var reg2 = (dat[5] > parseInt(xy.dx.val())) ? '<span style="color:#bb1b17">'+dat[5]+'</span>/' : dat[5] + '/';
					var reg3 = (dat[6] > parseInt(xy.it.val())) ? '<span style="color:#bb1b17">'+dat[6]+'</span>/' : dat[6] + '/';
					var reg4 = (dat[7] > parseInt(xy.ft.val())) ? '<span style="color:#bb1b17">'+dat[7]+'</span>' : dat[7];
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
						tex += '('+(phya+mag+fir+lgh)+')';
						rtex += '<div style="text-align:center">(<span style="font-size:12px;font-weight:bold;"><span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span></span>)</div>';
					}
					tex += '[Sta '+ dat[8] +']';
					rtex += '<div style="text-align:center">'+dat[8]+'<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+dat[0]+'%</span> / <span style="color:#2b7cb5;">'+dat[1]+'%</span> / <span style="color:#b52b2b;">'+dat[2]+'%</span> / <span style="color:#b59d2b;">'+dat[3]+'%</span>)</span></div>';
					$('.'+hand+'i').css('color','#352c2c').html(tex).attr('tex',rtex).tipTip({attribute:'tex',delay:50});
				}
				if(att == 140 || att == 160 || att == 161 || att == 162 || att == 163 || att == 164 || att == 172 || att == 171 || att == 170 || att == 183){
					$('.weaponimg[fo="'+hand+'"]').attr('typ','normal');
					offs = 0;
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
	function getArrowDamage(TYPE,WEPTYPE,HAND,WEAPON){
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
	function getWeaponStatObjects(ind,type,hand,stpy) {
		ind = parseInt(ind);
		var mod;
		var hand2 = ((hand == 'rh1' || hand == 'rh2' || ind == '103' || ind == '104') && ($('#2hwep').is(':checked') && stpy != 'f' && stpy != 'b' && stpy != 'cb')) ? 1.5 : 1;
		if(stpy == 'b') hand2 = 1.5;
		var opts = ((parseInt(xy.st.val())*hand2 >= 99) ? 91 : Math.floor((parseInt(xy.st.val())*hand2)-8))
		if(ind > 61 && ind <= 103){
			mfac = zz.factors.umagic;
		} else {
			mfac = zz.factors.magic;
		}
		var factors = [zz.factors.physical[opts][1],zz.factors.physical[parseInt(xy.dx.val())-8][1],mfac[parseInt(xy.it.val())-8][1],mfac[parseInt(xy.ft.val())-8][1],zz.factors.humanity[(parseInt(xy.hum.val()) > 10)? 10 : parseInt(xy.hum.val())][1]];
		if(type == 'normal') {
			mod = zz.modifiers.normal;
		} else if(type == 'crystal') {
			mod = zz.modifiers.crystal;
		} else if(type == 'raw') {
			mod = zz.modifiers.raw;
		} else if(type == 'magic') {
			mod = zz.modifiers.magic;
		} else if(type == 'enchanted' && stpy != 'cb') {
			mod = zz.modifiers.enchanted;
		} else if(type == 'devine') {
			mod = zz.modifiers.devine;
		} else if(type == 'occult' && stpy != 'cb') {
			mod = zz.modifiers.occult;
		} else if(type == 'chaos' && stpy != 'cb') {
			mod = zz.modifiers.chaos;
		} else if(type == 'fire') {
			mod = zz.modifiers.fire;
		} else if(type == 'lightning') {
			mod = zz.modifiers.lightning;
		} else {
			mod = zz.modifiers.normal;
			$('.weaponimg[fo="'+hand+'"]').attr('typ','normal').css('background-position','0px 0px');
		}
		if(ind == 0)
			return false;
		if(ind > 0 && ind <= 61)
			return [ind - 1,zz.weapons.normal,mod.n,factors];
		else if(ind > 61 && ind <= 103){
			return [ind - 62,zz.weapons.unique,zz.modifiers.normal.u,factors];
		}else if(ind > 103 && ind <= 111)
			return [ind - 104,zz.weapons.bows,mod.b,factors];
		else if(ind > 111 && ind <= 130)
			return false;
		else if(ind > 172 && ind <= 182){
			if(ind > 172 && ind <= 177 || ind == 180)
				return [ind - 173,zz.weapons.ptde,zz.modifiers.normal.ptde,factors];
			else if(ind == 178 && type == 'normal' || ind == 179 && type == 'normal')
				return [ind - 173,zz.weapons.ptde,mod.ptde,factors];
			else if(ind == 178 && type != 'normal' || ind == 179 && type != 'normal')
				return [ind - 178,zz.weapons.ptde,mod.ptde,factors];
			else if(ind == 181 || ind == 182)
				return false;
			else if(ind == 183)
				return false;
		}else if(ind > 130 && ind <= 172 && ind != 140 && ind != 160 && ind != 161 && ind != 162 && ind != 163 && ind != 164)
			return [ind - 131,zz.weapons.shields,mod.s,factors];
		else if(ind == 140 || ind == 160 || ind == 161 || ind == 162 || ind == 163 || ind == 164){
			return [ind - 131,zz.weapons.shields,zz.modifiers.normal.s,factors];
		}else
			return false
	}
	function makeTypeModal(pos,hen,sel,typ,OBJECT) {
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
			b = 180;
			if(ind == 0)
				return false;
			else if(ind > 0 && ind <= 61 || ind == 178 || ind == 179){
				wep = ind - 1;
				showAll();
			}else if(ind > 61 && ind <= 103 && TYPE){
				return false
			}else if(ind > 103 && ind <= 107 && TYPE){
				showAll();
				wep = ind - 104;
			}else if((ind > 107 && ind <= 111 && TYPE) || (ind > 130 && ind <= 169 && ind != 140 && ind != 160 && ind != 161 && ind != 162 && ind != 163 && ind != 164)){
				if($('.wepTyp[tpy="'+typ+'"]').css('display') == 'none'){
					$('#tynor').addClass('activ');
				}
				hideCross();
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
					showArrows(weapon);
					wep = ind - 104;
					b = 147;
				} else { //great arrow selector
					showGArrows();
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
				showBolts();
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
						calcAR(true,$('#'+$('#wepTypeSel').attr('goes')));
					}
					$('#wepTypeSel').fadeOut(300);
					$(document).unbind('click');
					$("#wepTypeSel div div div").unbind('click');
					getStat64();
				});
				$(".d img").click(function(e) {
					e.stopPropagation();
					$(document).unbind('click');
				});
			});

			
	}
	function showAll() {
		$('#wepo').css('display','block');
		$('#arpo').css('display','none');
		$('#wepo .wepTyp').each(function(){
			$(this).removeClass('activ').css({'display':'block'})
		});
		$('#wepTypeSel').css('height','160px')
	}
	function hideCross() {
		$('#wepo').css('display','block');
		$('#arpo,#tyraw,#tyenc,#tyocc,#tycha').css('display','none');
		$('#wepTypeSel').css('height','96px')
		$('#wepo .wepTyp').each(function(){
			$(this).removeClass('activ');
		});
	}
	function showArrows(wep){
		$('#wepo').css('display','none');
		$('#arpo').css('display','block');
		$('#tybwood,#tybstand,#tybheavy,#tybsniper,#tyblight,#tydrag,#tygdrag').css('display','none');
		$('#tywood,#tystand,#tylarge,#tyfeather,#tyfire,#typoison,#tymoon').css('display','block');
		$('#wepTypeSel').css('height','128px');
		$('#arpo .wepTyp').each(function(){
			$(this).removeClass('activ');
		});
	}
	function showGArrows(){
		$('#wepo').css('display','none');
		$('#arpo').css('display','block');
		$('#tybwood,#tybstand,#tybheavy,#tybsniper,#tyblight,#tywood,#tystand,#tylarge,#tyfeather,#tyfire,#typoison,#tymoon').css('display','none');
		$('#tydrag,#tygdrag').css('display','block');
		$('#wepTypeSel').css('height','32px');
		$('#arpo .wepTyp').each(function(){
			$(this).removeClass('activ');
		});
	}
	function showBolts(){
		$('#wepo').css('display','none');
		$('#arpo').css('display','block');
		$('#tybwood,#tybstand,#tybheavy,#tybsniper,#tyblight').css('display','block');
		$('#tywood,#tystand,#tylarge,#tyfeather,#tyfire,#typoison,#tymoon,#tydrag,#tygdrag').css('display','none');
		$('#wepTypeSel').css('height','96px')
		$('#arpo .wepTyp').each(function(){
			$(this).removeClass('activ');
		});
	}
	function toggle1Dia(){
		$('.fake2').stop(false,true).animate({width: 'toggle'},200,function(){
			$('.fake').stop(false,true).animate({width: 'toggle'},200);
		});
		$('.overlay').stop(true,true).fadeOut(400);
	}
	function toggle2Dia(){
		$('.fake').stop(false,true).animate({width: 'toggle'},200,function(){
			$('.fake2').stop(false,true).animate({width: 'toggle'},200);
		});
		$('.overlay').stop(true,true).fadeIn(400);
		if($('#aropt').attr('state') == 't')
			$('#aropt').click()
		if($('#dfinder').attr('state') == 't')
			$('#dfinder').click()
	}
	/*function toggleAoB(DIA,CS){
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
	}*/
	function buildArmorLists(){
		var t = aae.length-1,g = p = 0,set = true;
		var head = chest = hand = feet ='';
		for(g;g<t;++g){
			if(aae[g][1] != 'nill')
			head += '<option ind="'+g+'" typ="h" value="'+aae[g][0]+'" title="img/armor/s/armorHead_25x25.png" snid="'+aae[g][18]+'"'+((set)? 'selected="selected"' : '')+'>'+aae[g][1]+'</option>';
			chest += '<option ind="'+g+'" typ="c" value="'+aaf[g][0]+'" title="img/armor/s/armorBody_25x25.png" snid="'+aae[g][18]+'">'+aaf[g][1]+'</option>';
			if(aag[g][1] != 'nill')
			hand += '<option ind="'+g+'" typ="a" value="'+aag[g][0]+'" title="img/armor/s/armorHand_25x25.png" snid="'+aae[g][18]+'">'+aag[g][1]+'</option>';
			feet += '<option ind="'+g+'" typ="f" value="'+aah[g][0]+'" title="img/armor/s/armorFeet_25x25.png" snid="'+aae[g][18]+'">'+aah[g][1]+'</option>';
			set = false;
		}
		for(var i in aai){
			head += '<option ind="'+i+'" typ="u" value="'+aai[i][0]+'" title="img/armor/s/armorHead_25x25.png" snid="'+aai[i][18]+'">'+aai[i][1]+'</option>';
		}
		xy.hgear.append(head);
		xy.cgear.append(chest);
		xy.agear.append(hand);
		xy.fgear.append(feet);
	}
	function buildWeaponLists(){
		var url = 'http://static.mugenmonkey.com/img/weapons/s/weapons25x25.png';
		var dat = '<option ind="0" typ="f" value="'+zz.weapons.fist[0][0]+'" sma="f" title="'+url+'" snid="-10000px -10000px">'+zz.weapons.fist[0][1]+'</option>';
		var datastring = '<optgroup label="Fist">'+dat+'</optgroup>';
		wepArraySort(dat,'f');
		var t = zz.weapons.normal.length-1,g = 0;
		datastring += '<optgroup label="Normal">';
		for(g;g<=t;++g){
			var dat = '<option ind="'+(g+1)+'" typ="n" value="'+zz.weapons.normal[g][0]+'" sma="'+zz.weapons.normal[g][3]+'" title="'+url+'" snid="'+zz.weapons.normal[g][4]+'">'+zz.weapons.normal[g][1]+'</option>'
			datastring += dat;
			wepArraySort(dat,zz.weapons.normal[g][3]);
		}
		datastring += '</optgroup>';
		var k = zz.weapons.normal.length+1;
		var t = zz.weapons.unique.length-1,g = 0;
		datastring += '<optgroup label="Unique">';
		for(g;g<=t;++g){
			var dat = '<option ind="'+(g+k)+'" typ="u" value="'+zz.weapons.unique[g][0]+'" sma="'+zz.weapons.unique[g][3]+'" title="'+url+'" snid="'+zz.weapons.unique[g][4]+'">'+zz.weapons.unique[g][1]+'</option>';
			datastring += dat;
			wepArraySort(dat,zz.weapons.unique[g][3]);
		}
		datastring += '</optgroup>';
		var u = zz.weapons.unique.length + k;
		var t = zz.weapons.bows.length-1,g = 0;
		datastring += '<optgroup label="Bows">';
		for(g;g<=t;++g){
			var dat = '<option ind="'+(g+u)+'" typ="b" value="'+zz.weapons.bows[g][0]+'" sma="'+zz.weapons.bows[g][3]+'" title="'+url+'" snid="'+zz.weapons.bows[g][4]+'">'+zz.weapons.bows[g][1]+'</option>'
			datastring += dat;
			wepArraySort(dat,zz.weapons.bows[g][3]);
		}
		datastring += '</optgroup>';
		var y = zz.weapons.bows.length + u;
		var t = zz.weapons.magic.length-1,g = 0;
		datastring += '<optgroup label="Catalysts & Talismans">';
		for(g;g<=t;++g){
			var dat = '<option ind="'+(g+y)+'" typ="m" value="'+zz.weapons.magic[g][0]+'" sma="'+zz.weapons.magic[g][3]+'" title="'+url+'" snid="'+zz.weapons.magic[g][4]+'">'+zz.weapons.magic[g][1]+'</option>';
			datastring += dat;
			wepArraySort(dat,zz.weapons.magic[g][3]);
		}
		datastring += '</optgroup>';
		var j = zz.weapons.magic.length + y;
		var t = zz.weapons.shields.length-1,g = 0;
		datastring += '<optgroup label="Shields">';
		for(g;g<=t;++g){
			var dat = '<option ind="'+(g+j)+'" typ="s" value="'+zz.weapons.shields[g][0]+'" sma="'+zz.weapons.shields[g][3]+'" title="'+url+'" snid="'+zz.weapons.shields[g][4]+'">'+zz.weapons.shields[g][1]+'</option>';
			datastring += dat;
			wepArraySort(dat,zz.weapons.shields[g][3]);
		}
		datastring += '</optgroup>'; 
		
		var l = zz.weapons.shields.length + j;
		var t = zz.weapons.ptde.length-1,g = 0;
		datastring += '<optgroup label="PTDE">';
		for(g;g<=t;++g){
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
			wepArraySort(dat,'ptde');
		}
		datastring += '</optgroup>'; 
		
		var defstring = sortDef();
		datastring = '';
		
		xy.lh1.append(defstring);
		xy.rh1.append(defstring);
		xy.lh2.append(defstring);
		xy.rh2.append(defstring);
	}
	function wepArraySort(strng,group){
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
		dksdef[i].push(strng);
	}
	function sortDef() {
		var data = '<optgroup label="Fist Weapons">'+dksdef[0].join('')+'</optgroup>';
		data += '<optgroup label="Daggers">'+dksdef[1].join('')+'</optgroup>';
		data += '<optgroup label="Straight Swords">'+dksdef[2].join('')+'</optgroup>';
		data += '<optgroup label="Greatswords">'+dksdef[3].join('')+'</optgroup>';
		data += '<optgroup label="Ultra Greatswords">'+dksdef[4].join('')+'</optgroup>';
		data += '<optgroup label="Curved Swords">'+dksdef[5].join('')+'</optgroup>';
		data += '<optgroup label="Katanas">'+dksdef[6].join('')+'</optgroup>';
		data += '<optgroup label="Curved Greatswords">'+dksdef[7].join('')+'</optgroup>';
		data += '<optgroup label="Piercing Swords">'+dksdef[8].join('')+'</optgroup>';
		data += '<optgroup label="Axes">'+dksdef[9].join('')+'</optgroup>';
		data += '<optgroup label="Great Axes">'+dksdef[10].join('')+'</optgroup>';
		data += '<optgroup label="Hammers">'+dksdef[11].join('')+'</optgroup>';
		data += '<optgroup label="Great Hammers">'+dksdef[12].join('')+'</optgroup>';
		data += '<optgroup label="Spears">'+dksdef[13].join('')+'</optgroup>';
		data += '<optgroup label="Halberds">'+dksdef[14].join('')+'</optgroup>';
		data += '<optgroup label="Whips">'+dksdef[15].join('')+'</optgroup>';
		data += '<optgroup label="Bows">'+dksdef[16].join('')+'</optgroup>';
		data += '<optgroup label="Crossbows">'+dksdef[17].join('')+'</optgroup>';
		data += '<optgroup label="Flames">'+dksdef[18].join('')+'</optgroup>';
		data += '<optgroup label="Catalysts">'+dksdef[19].join('')+'</optgroup>';
		data += '<optgroup label="Talismans">'+dksdef[20].join('')+'</optgroup>';
		data += '<optgroup label="Small Shields">'+dksdef[21].join('')+'</optgroup>';
		data += '<optgroup label="Standard Shields">'+dksdef[22].join('')+'</optgroup>';
		data += '<optgroup label="Greatshields">'+dksdef[23].join('')+'</optgroup>';
		data += '<optgroup label="PTDE">'+dksdef[24].join('')+'</optgroup>';
		return data;
	}
	function buildRingLists(){
		var t = zz.rings.length-1,g = 0;
		var datastring = '';
		for(g;g<t;++g){
			datastring += '<option ind="'+g+'" typ="r" value="'+zz.rings[g][0]+'" title="'+zz.rings[0][6]+'" snid="'+zz.rings[g][5]+'">'+zz.rings[g][1]+'</option>';
			rings[g] = zz.rings[g][4];
		}
		xy.ring1.append(datastring);
		xy.ring2.append(datastring);
	}
	function buildSpellLists() {
		var datastring = '<optgroup label="Magic">';
		var t = zz.spells.sorc.length-1,g = 0;
	
		for(g;g<=t;++g){
			var dat = '<option ind="'+(g+1)+'" typ="spell" value="'+zz.spells.sorc[g][0]+'" cos="'+zz.spells.sorc[g][2]+'" spec="'+zz.spells.sorc[g][5]+'" req="'+zz.spells.sorc[g][4]+'">'+zz.spells.sorc[g][1]+' ('+zz.spells.sorc[g][2]+')</option>';
			datastring += dat;
		}
		datastring += '</optgroup>'; 
		
		datastring += '<optgroup label="Pyromancy">';
		t = zz.spells.pyro.length-1;
		g = 0;
		var gh = zz.spells.sorc.length;
		for(g;g<=t;++g){
			var dat = '<option ind="'+(g+gh+1)+'" typ="spell" value="'+zz.spells.pyro[g][0]+'" cos="'+zz.spells.pyro[g][2]+'" spec="'+zz.spells.pyro[g][5]+'" req="'+zz.spells.pyro[g][4]+'">'+zz.spells.pyro[g][1]+' ('+zz.spells.pyro[g][2]+')</option>';
			datastring += dat;
		}
		datastring += '</optgroup>'; 
		
		datastring += '<optgroup label="Miracles">';
		t = zz.spells.mira.length-1;
		g = 0;
		var gh = gh + zz.spells.pyro.length;
		for(g;g<=t;++g){
			var dat = '<option ind="'+(g+gh+1)+'" typ="spell" value="'+zz.spells.mira[g][0]+'" cos="'+zz.spells.mira[g][2]+'" spec="'+zz.spells.mira[g][5]+'" req="'+zz.spells.mira[g][4]+'">'+zz.spells.mira[g][1]+' ('+zz.spells.mira[g][2]+')</option>';
			datastring += dat;
		}
		datastring += '</optgroup>'; 
		datastring += '<optgroup label="PTDE">';
		t = zz.spells.ptde.length-1;
		g = 0;
		gh = gh + zz.spells.mira.length;
		for(g;g<=t;++g){
			var dat = '<option ind="'+(g+gh+1)+'" typ="spell" value="'+zz.spells.ptde[g][0]+'" cos="'+zz.spells.ptde[g][2]+'" spec="'+zz.spells.ptde[g][5]+'" req="'+zz.spells.ptde[g][4]+'">'+zz.spells.ptde[g][1]+' ('+zz.spells.ptde[g][2]+')</option>';
			datastring += dat;
		}
		datastring += '</optgroup>'; 
		
		$('#spell1,#spell2,#spell3,#spell4,#spell5,#spell6,#spell7,#spell8,#spell9,#spell10,#spell11,#spell12').append(datastring);
	}
	function detSpellSort(){
		var numSpells = parseInt(xy.ats.val()),tota = 0;
		if(numSpells > 0) {
			var speAr = [$('#spell1'),$('#spell2'),$('#spell3'),$('#spell4'),$('#spell5'),$('#spell6'),$('#spell7'),$('#spell8'),$('#spell9'),$('#spell10'),$('#spell11'),$('#spell12')];
			var nui = 0,j = 0,act = [], hif = [];
			for(i=0;i<numSpells;i++){
				act[i] = speAr[i];
			}
			nui = i;
			for(i=0;i<(11-numSpells);i++){
				hif[i] = speAr[(numSpells+i)];
			}
			var le = act.length;
			for(p=0;p<act.length;p++){
				var cu = parseInt(act[p].find('option:selected').attr('cos'));
				tota += cu;
				if(tota <= numSpells){
					if(cu > 1){
						le -= 1;
						hif.unshift(act[le]);
						act = $.grep(act, function(value) {
							  return value != act[le];
							});
							
						act[p].prop('disabled',false);
					} else {
						act[p].prop('disabled',false);
					}
				} else {
					act[p].prop('disabled',false).val(0);	
				}
			}
			
			for(q=0,len=hif.length;q<len;q++){
				hif[q].prop('disabled',true).val(0);
			}
		} else {
			$('#spell1,#spell2,#spell3,#spell4,#spell5,#spell6,#spell7,#spell8,#spell9,#spell10,#spell11,#spell12').each(function(){$(this).prop('disabled',true)});
		}
	}
	function meetReq(obj,pas){
		if(oldStat.stats[6] != xy.it.val() || 
			oldStat.stats[7] != xy.ft.val() || 
			oldStat.weapons[2] != xy.lh1.val() ||
			oldStat.weapons[3] != xy.lh2.val() || pas){
			if(! obj){
				obj = $('#spell1,#spell2,#spell3,#spell4,#spell5,#spell6,#spell7,#spell8,#spell9,#spell10,#spell11,#spell12');
			}
			obj.each(function(){
				if($(this).css('display') != 'none'){
					var opt = $(this).find('option:selected');
					var too = opt.parent().attr('label');
					var ind = parseInt(opt.attr('ind'));
					if(too == 'Magic' || too == 'Miracles' || too == 'PTDE'){
						var typ = (too == 'Magic' || too == 'PTDE') ? parseInt(xy.it.val()) : parseInt(xy.ft.val());
						var req = parseInt(opt.attr('req'));
						if(typ < req){
							$(this).css('color','#dd5b5b');
							$(this).attr('tex','').unbind('hover');
							$('#tiptip_holder').css('display','none');
						} else {
							$(this).css('color','#333');
							var adj = 0,mag = 0;
							if($('#lh1[adj]').length > 0){
								adj = parseInt($('#lh1').attr('adj'));
								mag = ($('#lh1').attr('tto') == 'magic') ? 1 : 2;
							} else if($('#lh2[adj]').length > 0){
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
	function addSouls() {
		xy.csc.val(calcSoulCost());
		xy.cst.val(GetSoulCost(aac[0],aad - aab));
	}
	function calcSoulCost(val){
		var lvl = aad - aab;
		if(val)
			lvl = val;
		if(lvl < zz.soulcost.length){
			return zz.soulcost[lvl];
		}else{
			return Math.round((1/2.5)*Math.pow(((lvl+10)*1.1682518),2.5));
		}
	}
	function GetSoulCost(startSoulLevel, currentSoulLevel){
		if (startSoulLevel == currentSoulLevel) return 0;
			var temp = 0;
		for (i = startSoulLevel; i < currentSoulLevel; i++) temp = temp + parseInt(calcSoulCost(i));
			return temp;
	} 
	function updateSoulTotal(){
		xy.sl.val(aad - aab);
	}
	function changeValUp(obj,e){
		if(e.shiftKey) {
			if((parseInt(obj.val())+10)<100)
				obj.val(parseInt(obj.val())+10);
			else
				obj.val(99);
		} else if((parseInt(obj.val())+1)<100)
			obj.val(parseInt(obj.val())+1);
			
	}
	function changeValDown(obj,e){
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
	function changefValUp(obj,e){
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
	function changefValDown(obj,e){
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
	function findBestClass(cache){
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
			sorted[g] = [totals[g],(xy.sClass.find('option:eq('+g+')').text().replace(/\d -/,'')),classData[g]]
		}
		var t = sorted.sort(rsort);
		t = t.sort(msort);
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
		delete string;
	}
	function msort(a,b) {
		a = a[0];
		b = b[0];
		return a == b ? 0 : (a < b ? -1 : 1)
	}
	function rsort(a,b) {
		a = a[2][6];
		b = b[2][6];
		return a == b ? 0 : (a < b ? 1 : -1)
	}
	function calcStam() {
		//stampen=gras=clr=chil
		//stampen = 0 -> 5
		//clr   =clor ring
		//chil  =child mask
		//gras  =grass shield
		var cl=ch=gr=b=0;
		if(clr) {
			cl = 20;
		}
		if(chil) {
			ch = 10;
		}
		if(gras) {
			gr = 10 * specmod;
		}
		var totburd = aaq(zz.bur[xy.en.val()]);
		var equiped = aan;
		var shift = equiped / totburd;
		shift = shift.toFixed(1);
		//=45*IF(I2>1;0.7;IF(I2>0.5;0.8;1))
		if(shift > 1){
			b = 0.7;
		}else if(shift > 0.5){
			b = 0.8;
		} else {
			b = 1;
		}
		var ratebase = 45 * b;
		var finalstam = ratebase+cl+ch+gr-stampen;
		var time = (parseInt($('#bstamina').val()) / finalstam).toFixed(1);
		$('#stamin').text(finalstam.toFixed(1));
		$('#stamtime').text(time);
		
	}
	function getStat64(uplo){
		var t = xy.sClass.val()+','+xy.vt.val()+','+xy.at.val()+','+xy.en.val()+','+xy.st.val()+','+xy.dx.val()+','+xy.rs.val()+','+xy.it.val()+','+xy.ft.val()+','+xy.hum.val()+','+xy.hgear[0].selectedIndex+','+xy.cgear[0].selectedIndex+','+xy.agear[0].selectedIndex+','+xy.fgear[0].selectedIndex+','+xy.ring1[0].selectedIndex+','+xy.ring2[0].selectedIndex+','+xy.lh1[0].selectedIndex+','+xy.rh1[0].selectedIndex+','+xy.lh2[0].selectedIndex+','+xy.rh2[0].selectedIndex;
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
		var c = $.base64.encode(t);
		if(uplo)
			return c;
		else
		$('#url').val('http://' + location.hostname + location.pathname + '?b='+c);
	}
	function roundNumber(num, dec) {
		var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
		return result;
	}
	
	function updateBestClass(){
		if($.cookie("autoup") == 'off'){
			//if off do nothing
		} else {
			var cur = getCurrentClass(xy.sClass);
			$('#cvitality_fake').val((xy.vt.val() == cur[1]) ? '' : xy.vt.val());
			$('#cattunement_fake').val((xy.at.val() == cur[2]) ? '' : xy.at.val());
			$('#cendurance_fake').val((xy.en.val() == cur[3]) ? '' : xy.en.val());
			$('#cstrength_fake').val((xy.st.val() == cur[4]) ? '' : xy.st.val());
			$('#cdexterity_fake').val((xy.dx.val() == cur[5]) ? '' : xy.dx.val());
			$('#cresistance_fake').val((xy.rs.val() == cur[6]) ? '' : xy.rs.val());
			$('#cintelligence_fake').val((xy.it.val() == cur[7]) ? '' : xy.it.val());
			$('#cfaith_fake').val((xy.ft.val() == cur[8]) ? '' : xy.ft.val());
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
			findBestClass(cache);
		}
	}
	function getActiveEffects(pas){
		if(pas || oldStat.weapons[0] != xy.rh1.val() ||
			oldStat.weapons[1] != xy.rh2.val() ||
			oldStat.weapons[2] != xy.lh1.val() ||
			oldStat.weapons[3] != xy.lh2.val() ||
			oldStat.armor[0] != xy.hgear.val() ||
			oldStat.armor[1] != xy.cgear.val() ||
			oldStat.armor[2] != xy.agear.val() ||
			oldStat.armor[3] != xy.fgear.val() ||
			oldStat.rings[0] != xy.ring1.val() ||
			oldStat.rings[1] != xy.ring2.val()){
		var sele = getActiveList();
		var hed = $('#headgear').find('option:selected'),
			che = $('#chestgear').find('option:selected'),
			han = $('#handgear').find('option:selected'),
			fee = $('#leggear').find('option:selected');
		var hands = [xy.lh1,xy.rh1,xy.lh2,xy.rh2];
		var container = $('#efcn'),
		head = [hed.attr('ind'),hed.attr('typ')],
		chest = [che.attr('ind'),che.attr('typ')],
		hand = [han.attr('ind'),han.attr('typ')],
		feet = [fee.attr('ind'),fee.attr('typ')],
		wep1 = hands[sele[0]].find('option:selected').attr('ind'),
		wep2 = hands[sele[1]].find('option:selected').attr('ind'),
		ring1 = $('#ring1').find('option:selected').attr('ind'),
		ring2 = $('#ring2').find('option:selected').attr('ind');
		var wepobs = [getWeaponObject(wep1),getWeaponObject(wep2)];
		var ringobs = [zz.rings[ring1],zz.rings[ring2]];
		var headobs = (head[1] == 'h') ? aae[head[0]] : aai[head[0]];
		var chestob = (chest[0] == '46') ? 'Adds damage to rolls, jumps and drops' : false;
		var handob = (hand[0] == '46') ? 'Adds damage to rolls, jumps and drops' : false;
		var feetob = (feet[0] == '46') ? 'Adds damage to rolls, jumps, kicks and drops' : false;
		var como = [ringobs[0][3],ringobs[1][3],headobs[16],chestob,handob,feetob,(wepobs[0].length > 5) ? wepobs[0][5] : false,(wepobs[1].length > 5) ? wepobs[1][5] : false];
		var text = '<ol>';
		for(i=0,len=como.length;i<len;i++){
			if(como[i]){
				text += '<li>'+como[i]+'</li>';
			}
		}
		text += '</ol>';
		document.getElementById('efcn').innerHTML = text;
			}
	}
	function getActiveList(){
		var l = ($('.lh1').hasClass('blue')) ? 0 : 2;
		var r = ($('.rh1').hasClass('blue')) ? 1 : 3;
		return [l,r]
	}
	function getWeap() {
		var f = getActiveList();
		var val = [xy.lh1.val(),xy.rh1.val(),xy.lh2.val(),xy.rh2.val()];
		var val1 = val[f[0]];
		var val2 = val[f[1]];
		if(val1 == 'GargoyleTailAxe' || val2 == 'GargoyleTailAxe' )
		 gata = true;
		 else gata = false;
		 if(val1 == 'GargoylesHalberd' || val2 == 'GargoylesHalberd')
		 blds = true;
		 else blds = false;
		 if(val1 == 'DragonBoneFist' || val2 == 'DragonBoneFist')
		 dbf = true;
		 else dbf = false;
		 if(val1 == 'DrakeSword' || val2 == 'DrakeSword')
		 drak = true;
		 else drak = false;
		 if(val1 == 'DragonGreatsword' || val2 == 'DragonGreatsword')
		 dgs = true;
		 else dgs = false;
		 if(val1 == 'DragonKingGreataxe' || val2 == 'DragonKingGreataxe')
		 dkg = true;
		 else dkg = false;
		 if(val1 == 'DragonTooth' || val2 == 'DragonTooth')
		 dgt = true;
		 else dgt = false;
		 if(val1 == 'MoonlightGreatsword' || val2 == 'MoonlightGreatsword')
		 mgs = true;
		 else mgs = false;
		 if(val1 == 'Bloodshield' || val2 == 'Bloodshield')
		 bdsag = true;
		 else bdsag = false;
		 if(val1 == 'GrassCrestShield' || val2 == 'GrassCrestShield')
		 gras = true;
		 else gras = false;
		 if(val1 ==  val2)
		 specmod = 2;
		 else
		 specmod = 1;
	}
	function getArmor() {
		var val = xy.hgear.val();
		if(val == 'MaskOfTheFather')
		 mof = true;
		 else mof = false;
		if(val == 'MaskOfTheMother')
		 mom = true;
		 else mom = false;
 		 if(val == 'MaskOfTheChild')
		 chil = true;
		 else chil = false;
		 if(val == 'SymbolOfAvarice')
		 avarice = true;
		 else avarice = false;
		 if(val == 'CrownOfDusk')
		 dusk = true;
		 else dusk = false;
	}
	function getRing(PAS){
		var in1 = xy.ring1.find('option:selected').attr('ind');
		var in2 = xy.ring2.find('option:selected').attr('ind');
		//tbr=clr=have=rosp=sspr=fspr=tspr=sppr=bbr=pbr=cbr=rtsr=btsr=bdr=ldr=sdr=dcr=wsr=dsr=rotsf=lr=wr=hr=hor=dwgr=rir=cgsr=cssr=ocr=rof=rofap=rotee=ewgr=rotsp
		var r1 = zz.rings[in1][4];
		var r2 = zz.rings[in2][4];
		if(PAS){
			r1 = r2 = 'ignore';
		}
		//tinybeing
		var ret = 'tbr';
		if(r1 == ret || r2 == ret){
			tbr = true;
		} else {
			tbr = false;
		}
		//cloranthy
		ret = 'clr';
		if(r1 == ret || r2 == ret){
			clr = true;
		} else {
			clr = false;
		}
		//havel
		ret = 'have';
		if(r1 == ret || r2 == ret){
			have = true;
		} else {
			have = false;
		}
		//steel ring
		ret = 'rosp';
		if(r1 == ret || r2 == ret){
			rosp = true;
			defp = 50;
		} else {
			rosp = false;
			defp = 0;
		}
		//spell ring
		ret = 'sspr';
		if(r1 == ret || r2 == ret){
			sspr = true;
			aav = 50;
		} else {
			sspr = false;
			aav = 0;
		}
		//flame ring
		ret = 'fspr';
		if(r1 == ret || r2 == ret){
			fspr = true;
			aax = 50;
		} else {
			fspr = false;
			aax = 0;
		}
		//thunger ring
		ret = 'tspr';
		if(r1 == ret || r2 == ret){
			tspr = true;
			aay = 50;
		} else {
			tspr = false;
			aay = 0;
		}
		//spec ring
		ret = 'sppr';
		if(r1 == ret || r2 == ret){
			sppr = true;
			aaz = 25;
		} else {
			sppr = false;
			aaz = 0;
		}
		//blood bite
		ret = 'bbr';
		if(r1 == ret || r2 == ret){
			bbr = true;
		} else {
			bbr = false;
		}
		//poison bite
		ret = 'pbr';
		if(r1 == ret || r2 == ret){
			pbr = true;
		} else {
			pbr = false;
		}
		//curse bite
		ret = 'cbr';
		if(r1 == ret || r2 == ret){
			cbr = true;
		} else {
			cbr = false;
		}
		//red tear
		ret = 'rtsr';
		if(r1 == ret || r2 == ret){
			rtsr = true;
		} else {
			rtsr = false;
		}
		//blue tear
		ret = 'btsr';
		if(r1 == ret || r2 == ret){
			btsr = true;
		} else {
			btsr = false;
		}
		//bellow ring
		ret = 'bdr';
		if(r1 == ret || r2 == ret){
			bdr = true;
		} else {
			bdr = false;
		}
		//linger
		ret = 'ldr';
		if(r1 == ret || r2 == ret){
			ldr = true;
		} else {
			ldr = false;
		}
		//slumber
		ret = 'sdr';
		if(r1 == ret || r2 == ret){
			sdr = true;
		} else {
			sdr = false;
		}
		//dusk crown
		ret = 'dcr';
		if(r1 == ret || r2 == ret){
			dcr = true;
		} else {
			dcr = false;
		}
		//white seance
		ret = 'wsr';
		if(r1 == ret || r2 == ret){
			wsr = true;
		} else {
			wsr = false;
		}
		//dark seance
		ret = 'dsr';
		if(r1 == ret || r2 == ret){
			dsr = true;
		} else {
			dsr = false;
		}
		//suns first born
		ret = 'rotsf';
		if(r1 == ret || r2 == ret){
			rotsf = true;
		} else {
			rotsf = false;
		}
		//leo ring
		ret = 'lr';
		if(r1 == ret || r2 == ret){
			lr = true;
		} else {
			lr = false;
		}
		//wolf ring
		ret = 'wr';
		if(r1 == ret || r2 == ret){
			wr = true;
		} else {
			wr = false;
		}
		//hawk ring
		ret = 'hr';
		if(r1 == ret || r2 == ret){
			hr = true;
		} else {
			hr = false;
		}
		//hornet ring
		ret = 'hor';
		if(r1 == ret || r2 == ret){
			hor = true;
		} else {
			hor = false;
		}
		//dwgr
		ret = 'dwgr';
		if(r1 == ret || r2 == ret){
			dwgr = true;
		} else {
			dwgr = false;
		}
		//rusted
		ret = 'rir';
		if(r1 == ret || r2 == ret){
			rir = true;
		} else {
			rir = false;
		}
		//gold serpent
		ret = 'cgsr';
		if(r1 == ret || r2 == ret){
			cgsr = true;
		} else {
			cgsr = false;
		}
		//silver serpent
		ret = 'cssr';
		if(r1 == ret || r2 == ret){
			cssr = true;
		} else {
			cssr = false;
		}
		//orange char
		ret = 'ocr';
		if(r1 == ret || r2 == ret){
			ocr = true;
		} else {
			ocr = false;
		}
		//fog
		ret = 'rof';
		if(r1 == ret || r2 == ret){
			rof = true;
		} else {
			rof = false;
		}
		//rofap
		ret = 'rofap';
		if(r1 == ret || r2 == ret){
			rofap = true;
		} else {
			rofap = false;
		}	
		//evil eye
		ret = 'rotee';
		if(r1 == ret || r2 == ret){
			rotee = true;
		} else {
			rotee = false;
		}
		//east wood
		ret = 'ewgr';
		if(r1 == ret || r2 == ret){
			ewgr = true;
		} else {
			ewgr = false;
		}
		//sun princess
		ret = 'rotsp';
		if(r1 == ret || r2 == ret){
			rotsp = true;
		} else {
			rotsp = false;
		}
		ret = 'calr';
		if(r1 == ret || r2 == ret){
			calr = true;
		} else {
			calr = false;
		}
		//abby ring
		ret = 'coart';
		if(r1 == ret || r2 == ret){
			coart = true;
		} else {
			coart = false;
		}
		
	}
	function aaj(value){
		var v=1,p=1,g=1,j=1;
		if(dcr)
		j = .5;
		if(mom){
			v = 1.10;
		}if(rofap)
		 p = 1.2;
		 if(tbr)
		 g=1.05
		return Math.floor(parseInt(value)*(p*v*g*j));
	}
	function aaq(value){ 
		var e=1,p=1,g=1;
		if(rofap)
		 p = 1.2;
		if(mof){
			e = 1.05;
		}
		if(have)
		 g = 1.5;
		return parseInt(value)*(p*e*g);
	}
	function aat(value){
		var p = 1;
		if(rofap)
		 p = 1.2;
		return roundNumber(parseInt(value)*p,0);
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
	$(document).ready(function(){
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
	  });

	//alert(timeDiff.getDiff());
	$(".tip").tipTip({attribute:'tex',delay:50});
	if(chosen){
		$('select.gear').chosen();
		$('#startClass,#covenant').chosen({disable_search_threshold : 10});
	}
	$('.nm15').css('margin-top','-5px');
	
	
	/*var a = 251,
    b = 85,
    c = null;

	if(a/b<1)
		c = ( 0.4*(Math.pow(a,3)/Math.pow(b,2))-0.09*(Math.pow(a,2)/b)+0.1*a)
	else
		c = ( a-(b*(0.859 * Math.exp(-0.27*(b/a)))))

	console.log(c);
	
	function dump(obj) {
			var out = '';
			for (var i in obj) {
				out += i + ": " + obj[i] + "\n";
			}

			alert(out);
		}
	
	*/
	

});