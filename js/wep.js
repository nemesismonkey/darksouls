var normal=[],unique=[],bows=[],smagic=[],shields=[],norma=uniq=bos=magi=shiel='',set,cacheVal,type = $('#weapontsel').val(),dksdef=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	zz.xy.st = $('#cstrength_fake');
	zz.xy.dx = $('#cdexterity_fake');
	zz.xy.it = $('#cintelligence_fake');
	zz.xy.ft = $('#cfaith_fake');
	
  function buildWeaponLists(){
		var t = zz.weapons.normal.length-1,g = 0,dat;
		for(g;g<=t;++g){
			dat = '<div class="wepstat" ind="'+(g+1)+'" typ="n" value="'+zz.weapons.normal[g][0]+'" sma="'+zz.weapons.normal[g][3]+'">'+zz.weapons.normal[g][1]+'<div class="fright"></div><div class="fright"></div></div>';
			normal.push({ind:(g+1),value:zz.weapons.normal[g][0],type:zz.weapons.normal[g][3],name:zz.weapons.normal[g][1]});
			wepArraySort(dat,zz.weapons.normal[g][3]);
		}
		var k = zz.weapons.normal.length+1;
		var t = zz.weapons.unique.length-1,g = 0;

		for(g;g<=t;++g){
			dat = '<div class="wepstat" ind="'+(g+k)+'" typ="u" value="'+zz.weapons.unique[g][0]+'" sma="'+zz.weapons.unique[g][3]+'">'+zz.weapons.unique[g][1]+'<div class="fright"></div><div class="fright"></div></div>';
			unique.push({ind:(g+k),value:zz.weapons.unique[g][0],type:zz.weapons.unique[g][3],name:zz.weapons.unique[g][1]});
			wepArraySort(dat,zz.weapons.unique[g][3]);
		}

		var u = zz.weapons.unique.length + k;
		var t = zz.weapons.bows.length-1,g = 0;

		for(g;g<=t;++g){
			dat = '<div class="wepstat" ind="'+(g+u)+'" typ="b" value="'+zz.weapons.bows[g][0]+'" sma="'+zz.weapons.bows[g][3]+'">'+zz.weapons.bows[g][1]+'<div class="fright"></div><div class="fright"></div></div>';
			bows.push({ind:(g+u),value:zz.weapons.bows[g][0],type:zz.weapons.bows[g][3],name:zz.weapons.bows[g][1]});
			wepArraySort(dat,zz.weapons.bows[g][3]);
		}

		var y = zz.weapons.bows.length + u;
		var t = zz.weapons.magic.length-1,g = 0;

		for(g;g<=t;++g){
			dat = '<div class="wepstat" ind="'+(g+y)+'" typ="m" value="'+zz.weapons.magic[g][0]+'" sma="'+zz.weapons.magic[g][3]+'">'+zz.weapons.magic[g][1]+'<div class="fright"></div><div class="fright"></div></div>';
			smagic.push({ind:(g+y),value:zz.weapons.magic[g][0],type:zz.weapons.magic[g][3],name:zz.weapons.magic[g][1]});
			wepArraySort(dat,zz.weapons.magic[g][3]);
		}

		var j = zz.weapons.magic.length + y;
		var t = zz.weapons.shields.length-1,g = 0;

		/*for(g;g<=t;++g){
			shiel += '<div class="wepstat" ind="'+(g+j)+'" typ="s" value="'+zz.weapons.shields[g][0]+'" sma="'+zz.weapons.shields[g][3]+'">'+zz.weapons.shields[g][1]+'<div class="fright"></div><div class="fright"></div></div>';
			shields.push({ind:(g+j),value:zz.weapons.shields[g][0],sma:zz.weapons.shields[g][3],name:zz.weapons.shields[g][1]});
		}*/
		
		var l = zz.weapons.shields.length + j;
		var ti= zz.weapons.ptde.length-1,g = 0;
		//datastring += '<optgroup label="PTDE">';
		for(g;g<ti;++g){
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
			dat = '<div class="wepstat" ind="'+(g+l)+'" typ="'+wt+'" value="'+zz.weapons.ptde[g][0]+'" sma="ptde">'+zz.weapons.ptde[g][1]+'<div class="fright"></div><div class="fright"></div></div>';
			wepArraySort(dat,'ptde');
		}
		

				$('#fillup').append(sortDef());
				//$('#fillup').append(uniq);
				//$('#fillup').append(bos);
				//$('#fillup').append(magi);
				//$('#fillup').append(shiel);
		delete smagic,dksdef,normal,unique,bows,shields,uniq,bos,magi,shiel;
				
		set = $('#fillup').find('div');
		calcAR(type);
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
			case('ptde'): //dksdef[24]
				i = 24
			break;
		}
		dksdef[i].push(strng);
	}
	function sortDef() {
		var data = '<div class="wepstat bold" sma="f" ind="0" style="background:#fff;">Fist Weapons</div>'+dksdef[0].join('');
		data += '<div class="wepstat bold" sma="d" ind="0" style="background:#fff;">Daggers</div>'+dksdef[1].join('');
		data += '<div class="wepstat bold" sma="ss" ind="0" style="background:#fff;">Straight Swords</div>'+dksdef[2].join('');
		data += '<div class="wepstat bold" sma="gs" ind="0" style="background:#fff;">Greatswords</div>'+dksdef[3].join('');
		data += '<div class="wepstat bold" sma="ug" ind="0" style="background:#fff;">Ultra Greatswords</div>'+dksdef[4].join('');
		data += '<div class="wepstat bold" sma="cs" ind="0" style="background:#fff;">Curved Swords</div>'+dksdef[5].join('');
		data += '<div class="wepstat bold" sma="k" ind="0" style="background:#fff;">Katanas</div>'+dksdef[6].join('');
		data += '<div class="wepstat bold" sma="cg" ind="0" style="background:#fff;">Curved Greatswords</div>'+dksdef[7].join('');
		data += '<div class="wepstat bold" sma="ps" ind="0" style="background:#fff;">Piercing Swords</div>'+dksdef[8].join('');
		data += '<div class="wepstat bold" sma="a" ind="0" style="background:#fff;">Axes</div>'+dksdef[9].join('');
		data += '<div class="wepstat bold" sma="ga" ind="0" style="background:#fff;">Great Axes</div>'+dksdef[10].join('');
		data += '<div class="wepstat bold" sma="h" ind="0" style="background:#fff;">Hammers</div>'+dksdef[11].join('');
		data += '<div class="wepstat bold" sma="gh" ind="0" style="background:#fff;">Great Hammers</div>'+dksdef[12].join('');
		data += '<div class="wepstat bold" sma="s" ind="0" style="background:#fff;">Spears</div>'+dksdef[13].join('');
		data += '<div class="wepstat bold" sma="hb" ind="0" style="background:#fff;">Halberds</div>'+dksdef[14].join('');
		data += '<div class="wepstat bold" sma="w" ind="0" style="background:#fff;">Whips</div>'+dksdef[15].join('');
		data += '<div class="wepstat bold" sma="b" ind="0" style="background:#fff;">Bows</div>'+dksdef[16].join('');
		data += '<div class="wepstat bold" sma="cb" ind="0" style="background:#fff;">Crossbows</div>'+dksdef[17].join('');
		data += '<div class="wepstat bold" sma="fl" ind="0" style="background:#fff;">Flames</div>'+dksdef[18].join('');
		data += '<div class="wepstat bold" sma="ca" ind="0" style="background:#fff;">Catalysts</div>'+dksdef[19].join('');
		data += '<div class="wepstat bold" sma="ta" ind="0" style="background:#fff;">Talismans</div>'+dksdef[20].join('');
		//data += '<optgroup label="Small Shields">'+dksdef[21].join('')+'</optgroup>';
		//data += '<optgroup label="Standard Shields">'+dksdef[22].join('')+'</optgroup>';
		//data += '<optgroup label="Greatshields">'+dksdef[23].join('')+'</optgroup>';
		data += '<div class="wepstat bold" sma="ptde" ind="0" style="background:#fff;">PTDE Content</div>'+dksdef[24].join('');
		return data;
	}
  function calcAR(typ){
			set.each(function(){
			var normal = 0,raw = -20,crystal = -40,lightning = -60,magic = -80,enchanted = -100,devine = -120,occult = -140,fire = -160,chaos = -180;
			var hand = 'rh1';
			var fal = $(this).attr('value');//weapon name
			var att = $(this).attr('ind');//weapon ind
			var t  = $(this);
			var weptyp = $(this).attr('typ');//weapon type
			var secweptyp = $(this).attr('sma');
			var mods = getWeaponStatObjects(att,typ,hand,secweptyp);
			var offs;
			var hand2 = ((hand == 'rh1' || secweptyp == 'b' || att == '103' || att == '104') && ($('#2hwep').is(':checked') && secweptyp != 'f')) ? 1.5 : 1;
			var strmuf = ((parseInt(zz.xy.st.val())*hand2 >= 99) ? 99 : Math.floor(parseInt(zz.xy.st.val())*hand2));
			if(mods) {
				var i = parseInt(mods[0]);
				var wep = mods[1][i];
				var mod = mods[2][i];
				var str = mods[3][0];
				var dex = mods[3][1];
				var itt = mods[3][2];
				var fat = mods[3][3];
				var cha = mods[3][4];
				//console.log(mod,i)
				if((typ == 'normal' || typ == 'crystal' || typ== 'raw') && weptyp != 'u'){
					if(typ == 'normal')
					 offs = normal;
					if(typ == 'crystal')
					 offs = crystal;
					 if(typ == 'raw')
					 offs = raw;
					var reg = [mod[4],mod[5],0,0];
					if(reg[0] > strmuf || reg[1] > parseInt(zz.xy.dx.val())) {
						var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/';
						var reg2 = (reg[1] > parseInt(zz.xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/';
						var reg3 = 0 + '/';
						var reg4 = 0;
						tex = '<span style="font-size:13px">('+reg1 + reg2 + reg3 + reg4+')</span>';
						t.children('div').css('color','#777777').html(tex).next().text('');
					} else {
						var phya = Math.floor(mod[0]*(1+(mod[6]*str)+(mod[7]*dex)));
						t.children('div').html('<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">0</span> / <span style="color:#b52b2b;">0</span> / <span style="color:#b59d2b;">0</span>)</span>').next().css('color','#7d563a').html(phya);
					
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
						var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/';
						var reg2 = (reg[1] > parseInt(zz.xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/';
						var reg3 = (reg[2] > parseInt(zz.xy.it.val())) ? '<span style="color:#bb1b17">'+reg[2]+'</span>/' : reg[2] + '/';
						var reg4 = (reg[3] > parseInt(zz.xy.ft.val())) ? '<span style="color:#bb1b17">'+reg[3]+'</span>/' : reg[3];
						tex = '<span style="font-size:13px">('+reg1 + reg2 + reg3 + reg4+')</span>';
						t.children('div').css('color','#777777').html(tex).next().text('');
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
						
						var phya = Math.floor(mod[0]*(1+(mod[6]*str)+(mod[7]*dex)));
						var mag =  Math.floor(mod[1]*(1+(modi*ma)));
						var fir = mod[2];
						var lgh = mod[3];
						t.children('div').html('<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span>)</span>').next().css('color','#3a667d').html((phya + mag + fir + lgh));
					}
				}
				if(typ == 'chaos' && weptyp != 'u'){
					 offs = chaos;
					var reg = [mod[4],mod[5],0,0];
					if(reg[0] > strmuf || reg[1] > parseInt(zz.xy.dx.val())) {
						var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/';
						var reg2 = (reg[1] > parseInt(zz.xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/';
						var reg3 = 0 + '/';
						var reg4 = 0;
						tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
						t.children('div').css('color','#777777').html(tex).next().text('');
					} else {
						var phya = Math.round(mod[0]*(1+(.21*cha)))
						var fir = Math.round(mod[2]*(1+(0.2075*cha)))
						t.children('div').html('<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">0</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">0</span>)</span>').next().css('color','#b52b2b').html((phya+fir));
					}
				}
				if(typ == 'fire' && weptyp != 'u'){
					 offs = fire;
					var reg = [mod[4],mod[5],0,0];
					if(reg[0] > strmuf || reg[1] > parseInt(zz.xy.dx.val())) {
						var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/';
						var reg2 = (reg[1] > parseInt(zz.xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/';
						var reg3 = 0 + '/';
						var reg4 = 0;
						tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
						t.children('div').css('color','#777777').html(tex).next().text('');
					} else {
						var phya = mod[0];
						var fir = mod[2];
						t.children('div').html('<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">0</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">0</span>)</span>').next().css('color','#b52b2b').html((phya+fir));
					}
				}
				if(typ == 'lightning' && weptyp != 'u'){
					 offs = lightning;
					var reg = [mod[4],mod[5],0,0];
					if(reg[0] > strmuf || reg[1] > parseInt(zz.xy.dx.val())) {
						var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/';
						var reg2 = (reg[1] > parseInt(zz.xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/';
						var reg3 = 0 + '/';
						var reg4 = 0;
						tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
						t.children('div').css('color','#777777').html(tex).next().text('');
					} else {
						var phya = mod[0];
						var lgh = mod[3];
						t.children('div').html('<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">0</span> / <span style="color:#b52b2b;">0</span> / <span style="color:#b59d2b;">'+lgh+'</span>)</span>').next().css('color','#b59d2b').html((phya+lgh));
					}
				}
				if(weptyp == 'u'){
					 offs = normal;
					var reg = [mod[4],mod[5],mod[6],mod[7]];
					if(reg[0] > strmuf || reg[1] > parseInt(zz.xy.dx.val()) || reg[2] > parseInt(zz.xy.it.val()) || reg[3] > parseInt(zz.xy.ft.val())) {
						var reg1 = (reg[0] > strmuf) ? '<span style="color:#bb1b17">'+reg[0]+'</span>/' :reg[0] + '/';
						var reg2 = (reg[1] > parseInt(zz.xy.dx.val())) ? '<span style="color:#bb1b17">'+reg[1]+'</span>/' : reg[1] + '/';
						var reg3 = (reg[2] > parseInt(zz.xy.it.val())) ? '<span style="color:#bb1b17">'+reg[2]+'</span>/' : reg[2] + '/';
						var reg4 = (reg[3] > parseInt(zz.xy.ft.val())) ? '<span style="color:#bb1b17">'+reg[3]+'</span>/' : reg[3];
						tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
						t.children('div').css('color','#777777').html(tex).next().text('');
					} else {
						var phya = Math.floor(mod[0]*(1+(mod[8]*str)+(mod[9]*dex)));
						var fir = mod[2];
						var lgh = mod[3];
						if(fal == 'ChaosBlade' || fal == 'QuelaagsFurysword' || fal == "AbyssGreatsword"){
							phya = Math.round(phya*(1+(.215*cha)))
							fir = Math.round(fir*(1+(0.20658*cha)))
						}
						var mag =  Math.floor(mod[1]*(1+(mod[10]*itt)+(mod[11]*fat)));
						if(fal == 'DragonslayerSpear'){
							lgh = Math.floor(mod[3]*(1+(mod[11]*fat)));
						}
						t.children('div').html('<span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+phya+'</span> / <span style="color:#2b7cb5;">'+mag+'</span> / <span style="color:#b52b2b;">'+fir+'</span> / <span style="color:#b59d2b;">'+lgh+'</span>)</span>').next().css('color','#3a667d').text((phya + mag + fir + lgh));
						
					}
				}	
			} else {
				t.children('div').html(' ').next().css('color','#000').html(' ');
					
			}
			if(weptyp == 'm'){
				 offs = normal;
				 var dexte = parseInt(zz.xy.it.val())
				 var faith = parseInt(zz.xy.ft.val());
				 var intel = parseInt(zz.xy.it.val());
				 var index = parseInt(att) - 112,stat,add,tops;
				 var vali = fal;
				 if(att == 181 || att == 182){
					index = index - 50;
					//console.log(index)
				 }
				 var req = zz.modifiers.normal.m[index];
				 if(req[0] > strmuf || req[1] > dexte || req[2] > intel || req[3] > faith) {
					var reg1 = (req[0] > strmuf) ? '<span style="color:#bb1b17">'+req[0]+'</span>/' :req[0] + '/';
					var reg2 = (req[1] > dexte) ? '<span style="color:#bb1b17">'+req[1]+'</span>/' : req[1] + '/';
					var reg3 = (req[2] > intel) ? '<span style="color:#bb1b17">'+req[2]+'</span>/' : req[2] + '/';
					var reg4 = (req[3] > faith) ? '<span style="color:#bb1b17">'+req[3]+'</span>/' : req[3];
					tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
					t.children('div').css('color','#777777').html(tex).next().text('');
				 } else {
					if(att >= 112 && att <= 120){
						if(vali == 'TinDarkmoonCatalyst')
							stat = faith - 10;
						else
							stat = intel - 10;
					} else if(att > 120 && att <= 123){
						stat = 0;
					} else if(att > 123 && att <= 130){
						if(vali == 'VelkasTalisman')
							stat = intel - 10
						else
							stat = faith - 10;
					}else if(att == 181 || att == 182){
						index = index;
						stat = intel - 10;
					}
					add = zz.factors.adj[index][stat];
					t.children('div').css('color','#8830d2').html('Adjustment '+add+'').next().text('');
				 }
			}
			if(weptyp == 's'){
				var index = parseInt(att) - 131,tex;
				var dat = mod;
				if(att == 183){
					dat = zz.modifiers.normal.ptde[8];
					var opts = ((parseInt(zz.xy.st.val())*hand2 >= 99) ? 91 : Math.floor((parseInt(zz.xy.st.val())*hand2)-8)),
					factors = [zz.factors.physical[opts][1],zz.factors.physical[parseInt(zz.xy.dx.val())-8][1]],
					str = factors[0],
					dex = factors[1],fat = 0,itt = 0;
				}
				if(dat[4] > strmuf || dat[5] > parseInt(zz.xy.dx.val()) || dat[6] > parseInt(zz.xy.it.val()) || dat[7] > parseInt(zz.xy.ft.val())) {
					
					var reg1 = (dat[4] > strmuf) ? '<span style="color:#bb1b17">'+dat[4]+'</span>/' : dat[4] + '/';
					var reg2 = (dat[5] > parseInt(zz.xy.dx.val())) ? '<span style="color:#bb1b17">'+dat[5]+'</span>/' : dat[5] + '/';
					var reg3 = (dat[6] > parseInt(zz.xy.it.val())) ? '<span style="color:#bb1b17">'+dat[6]+'</span>/' : dat[6] + '/';
					var reg4 = (dat[7] > parseInt(zz.xy.ft.val())) ? '<span style="color:#bb1b17">'+dat[7]+'</span>' : dat[7];
					tex = '<span style="font-size:11px">('+reg1 + reg2 + reg3 + reg4+')</span>';
					t.children('div').css('color','#777777').html(tex).next().text('');
				} else {
					tex = '(Sta '+ dat[8] +')';
					var rtex = dat[8]+' <span style="font-size:12px;font-weight:bold;">(<span style="color:#b38f64;">'+dat[0]+'%</span> / <span style="color:#2b7cb5;">'+dat[1]+'%</span> / <span style="color:#b52b2b;">'+dat[2]+'%</span> / <span style="color:#b59d2b;">'+dat[3]+'%</span>)</span>';
					t.children('div').html(rtex).css('color','#352c2c').next().html('');
				}
			}
			$('img[fo="'+hand+'"]').css('background-position',offs);
		});
	} 
  function getWeaponStatObjects(ind,type,hand,stpy) {
		ind = parseInt(ind);
		var mod;
		var hand2 = ((hand == 'rh1' || hand == 'rh2' || stpy == 'b' || ind == '103' || ind == '104') && ($('#2hwep').is(':checked') && stpy != 'f')) ? 1.5 : 1;
		var opts = ((parseInt(zz.xy.st.val())*hand2 >= 99) ? 91 : Math.floor((parseInt(zz.xy.st.val())*hand2)-8))
		if(ind > 61 && ind <= 103){
			mfac = zz.factors.umagic;
		} else {
			mfac = zz.factors.magic;
		}
		var factors = [zz.factors.physical[opts][1],zz.factors.physical[parseInt(zz.xy.dx.val())-8][1],mfac[parseInt(zz.xy.it.val())-8][1],mfac[parseInt(zz.xy.ft.val())-8][1],zz.factors.humanity[(parseInt(zz.xy.hum.val()) > 10)? 10 : parseInt(zz.xy.hum.val())][1]];
		if(type == 'normal') {
			mod = zz.modifiers.normal;
		} else if(type == 'crystal') {
			mod = zz.modifiers.crystal;
		} else if(type == 'raw') {
			mod = zz.modifiers.raw;
		} else if(type == 'magic') {
			mod = zz.modifiers.magic;
		} else if(type == 'enchanted') {
			mod = zz.modifiers.enchanted;
		} else if(type == 'devine') {
			mod = zz.modifiers.devine;
		} else if(type == 'occult') {
			mod = zz.modifiers.occult;
		} else if(type == 'chaos') {
			mod = zz.modifiers.chaos;
		} else if(type == 'fire') {
			mod = zz.modifiers.fire;
		} else if(type == 'lightning') {
			mod = zz.modifiers.lightning;
		}
		/*if(ind == 0)
			return false;
		if(ind > 0 && ind <= 61)
			return [ind - 1,zz.weapons.normal,mod.n,factors];
		else if(ind > 61 && ind <= 103){
			return [ind - 62,zz.weapons.unique,zz.modifiers.normal.u,factors];
		}else if(ind > 103 && ind <= 111){
			if((ind >= 108 && ind <= 111) && (type == 'raw' || type == 'enchanted' || type == 'occult' || type == 'chaos')){
				return false;
			} else {
				return [ind - 104,zz.weapons.bows,mod.b,factors];
			}
		}else if(ind > 111 && ind <= 130)
			return false;
		else
			return false;*/
		if(ind == 0)
			return false;
		if(ind > 0 && ind <= 61)
			return [ind - 1,zz.weapons.normal,mod.n,factors];
		else if(ind > 61 && ind <= 103){
			return [ind - 62,zz.weapons.unique,zz.modifiers.normal.u,factors];
		}else if(ind > 103 && ind <= 111){
			if(ind >= 108 && ind <= 111){
				if(type == 'raw' || type == 'enchanted' || type == 'occult' || type == 'chaos')
					return false;
			}
			return [ind - 104,zz.weapons.bows,mod.b,factors];
		}else if(ind > 111 && ind <= 130)
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
			return [ind - 131,zz.weapons.shields,zz.modifiers.normal.s];
		}else
			return false
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
			
		calcAR(type);
	}
	function changefValDown(obj,e){
		f = obj.val();
		if(!obj.val()){
			f = 0;
		}
		var uid = obj.attr('fid');
			var min = 8;
			if(e.shiftKey) {
				if((parseInt(f)-10)>(parseInt(min)-1))
					obj.val(parseInt(f)-10);
				else
					obj.val(min);
			} else if((parseInt(f)-1)>(parseInt(min)-1))
				obj.val(parseInt(f)-1);
				
			calcAR(type);
	}
	function changeValUp(obj,e){
		if(e.shiftKey) {
			if((parseInt(obj.val())+10)<100)
				obj.val(parseInt(obj.val())+10);
			else
				obj.val(99);
		} else if((parseInt(obj.val())+1)<100)
			obj.val(parseInt(obj.val())+1);
			
			calcAR(type);
	}
	function changeValDown(obj,e){
		var uid = obj.attr('uid');
		if(uid!='hum'){
			
			var min = 0;
			if(e.shiftKey) {
				if((parseInt(obj.val())-10)>(parseInt(min)-1))
					obj.val(parseInt(obj.val())-10);
				else
					obj.val(min);
			} else if((parseInt(obj.val())-1)>(parseInt(min)-1))
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
		calcAR(type);
	}
	function toggleItems(item){
		var obj;
		var ite = item.prop('id');
		if(item.prop('id')) {
			obj = item;
		} else {
			obj = item.find('input');
		}
		var prt = obj.parent();
		if(!ite){
			if(obj.is(':checked')){
				obj.prop('checked',false);
			} else {
				obj.prop('checked',true);
			}
		}
		var weps = obj.prop('id');
		if(obj.is(':checked')){
			$('div[sma="'+weps+'"]').show();
		} else {
			$('div[sma="'+weps+'"]').hide();
		}
		
	}
	function sticky_relocate() {
	  var window_top = $(window).scrollTop();
	  var div_top = $('#sticky').offset().top;
	  var item_height = $('#fillup').height();
	  var stick_height = $('#sticky').height();
	  if (window_top > div_top && (item_height - stick_height + 40) >= (window_top - div_top))
		$('#sticky').css('padding-top',(window_top - div_top)+'px');
	  else if (window_top > div_top && (item_height - stick_height + 40) <= (window_top - div_top))
		$('#sticky').css('padding-top',(window_top - div_top - 30)+'px');
	  else
		$('#sticky').css('padding-top',0);
	  }
	$('#2hwep').change(function(){
			calcAR(type);
		});
	$(document).ready(function(){
		$(document).scroll(function(){
			sticky_relocate()
		});
		$('input[fid]:not([disabled]):not([readonly])').focus(function(){
			this.select();
			cacheVal = $(this).val();
			$(this).keypress(function(e){
				if(e.which == 13) {
					$(this).blur();
				}
			});
			$(this).blur(function(){
				var newVal = $(this).val()
				var fake = false;
				if(!newVal){
					fake = true;
					newVal = 8;
				}else if(isNaN(newVal)){
					fake = true;
					newVal = 8;
					$(this).val(cacheVal)
				}
				if(parseInt(newVal) < 8)
					newVal = 0;
				if(cacheVal != newVal){
					if((parseInt(newVal))>(7) && parseInt(newVal)<100){
						calcAR(type);
					}else {
						if(fake)
							$(this).val(8);
						else
							$(this).val(cacheVal);
					}
				}
			});
		}).mouseup(function(e){
			e.preventDefault();
		});
		$('input[uid]:not([disabled]):not([readonly])').focus(function(){
			this.select();
			var cacheVal = $(this).val();
			$(this).keypress(function(e){
				if(e.which == 13) {
					$(this).blur();
				}
			});
			$(this).blur(function(){
				var newVal = $(this).val();
				if(parseInt(newVal) == 0)
					newVal = 0;
				if(cacheVal != newVal){
					var uid = $(this).attr('uid');
					if(uid!='hum'){
						var min = 0;
						if((parseInt(newVal))>min && parseInt(newVal)<100){
							calcAR(type);
						}else {
							$(this).val(cacheVal);
						}
					} else {
						if($(this).val() >= 0 && $(this).val() < 100){
							$(this).val(newVal);
							calcAR(type);
						} else
							$(this).val(cacheVal);
					}
				}
			});
		}).mouseup(function(e){
			e.preventDefault();
		});
		$('.up,.down').click(function(e){
			var edit = $(this).attr('uid');
			var target = $('input[uid="'+edit+'"]').not(':disabled');
			if($(this).hasClass('up')){
				changeValUp(target,e);
			}
			if($(this).hasClass('down')){
				changeValDown(target,e);
			}
				$(this).blur();
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
			$(this).blur();
		});
		$('#weapontsel').change(function(){
			type = $(this).val();
			calcAR(type);
		});
		buildWeaponLists()
		$('.weptypsss div').click(function(){
			toggleItems($(this));
		});
		$('.weptypsss div input').click(function(e){
			e.stopPropagation();
			toggleItems($(this));
		});
		$(':checkbox').each(function(e){
			$(this).prop('checked',true);
		});
	});
	$(document).ready(function(){$('.login').click(function(){$(this).addClass('hover');$('.login_form').addClass('shown');if(!$('.login').hasClass('intent')){$('.login').addClass('intent');$('.login,.login_form').click(function(event){event.stopPropagation();});} else if($('.login').hasClass('intent')){$('.login').removeClass('hover intent');$('.login_form').removeClass('shown');$(document).unbind('click');}$(document).click(function(){$('.login').removeClass('hover intent');$('.login_form').removeClass('shown');$(document).unbind('click');});return false;});$(".votearrows").click(function(){var b=($(this).hasClass("vup"))?"up":"down";var a=$(this).prop("title");$.get("votes.php",{vtyp:b,id:a},function(f){var c=$(".kvot.n"+a);var g=$(".nvot.n"+a);var e=parseInt(c.text());var h=parseInt(g.text())+1;if(f=="up"){c.text(e+5);g.text(h)}else{if(f=="down"){c.text(e-3);g.text(h)}else{var d=$(".tvut.n"+a);d.removeClass("hidden").css("display","inline").fadeOut(2000,function(){d.addClass("hidden")})}}})});$('.favorites').click(function(){var k=$(this);var saveid=$(this).prop('href').split('#')[1];$.get("fave.php",{fave:saveid},function(f){if(f == 'success'){k.parent().html('favorited');}else{return false;}});return false;});});
