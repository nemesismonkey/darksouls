var zz = {
		stats : {
			'warrior' : [4,11,8,12,13,13,11,9,9],
			'knight' : [5,14,10,10,11,11,10,9,11],
			'wanderer' : [3,10,11,10,10,14,12,11,8],
			'thief' : [5,9,11,9,9,15,10,12,11],
			'bandit' : [4,12,8,14,14,9,11,8,10],
			'hunter' : [4,11,9,11,12,14,11,9,9],
			'sorcerer' : [3,8,15,8,9,11,8,15,8],
			'pyromancer' : [1,10,12,11,12,9,12,10,8],
			'cleric' : [2,11,11,9,12,8,11,8,14],
			'deprived' : [6,11,11,11,11,11,11,11,11],
			'sets' : [1,3,5,6,7,8,9,11,12,0]
		}
	};
	function findBestClass(){
		var classNames = ['Warrior','Knight','Wanderer','Thief','Bandit','Hunter','Sorcerer','Pyromancer','Cleric','Deprived']
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
			sorted[g] = [totals[g],classNames[g],classData[g]]
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
			string += '<hr class="nomargin"><div class="rnk"><span class="rnknum">'+(parseInt(i)+1)+': </span> <span>'+t[i][1]+'</span>'+t[i][0]+'</div>';
		}
		$('.rankings').html(string);
		delete string;
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
	$(document).ready(function(){
		$('input[fid]:not([disabled]):not([readonly])').focus(function(){
			this.select();
			var cacheVal = $(this).val();
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
					newVal = 0;
				}else if(isNaN(newVal)){
					fake = true;
					newVal = 0;
					$(this).val(cacheVal)
				}
				if(parseInt(newVal) == 0)
					newVal = 0;
				if(cacheVal != newVal){
					var fid = $(this).attr('fid');
					var min = $('input:disabled[fid="'+fid+'"]');
					if((parseInt(newVal))>(-1) && parseInt(newVal)<100){
						findBestClass()
						$('#apply').removeAttr('disabled');
					}else {
						if(fake)
							$(this).val('');
						else
							$(this).val(cacheVal);
					}
				}
			});
		}).mouseup(function(e){
			e.preventDefault();
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
		$('.up_fake,.down_fake').click(function(e){
			var edit = $(this).attr('fid');
			var target = $('input[fid="'+edit+'"]').not(':disabled');
			if($(this).hasClass('up_fake')){
				changefValUp(target,e);
			}
			if($(this).hasClass('down_fake')){
				changefValDown(target,e);
			}	
			findBestClass();
			$(this).blur();
		});
		findBestClass();
	});