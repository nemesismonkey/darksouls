<?php
	require('inc/timeasset.php');
	
	$pga = true;
	$ga = <<<TEXT
<script type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-29538296-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
</script>
TEXT;
?>
<!doctype html>
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/icon_ex.png"/>
  <title>Dark Souls Character Planner: Armor Optimizer</title>
  <meta name="description" content="Dark Souls Character Planner.  Gives you the ability to enter nearly everything to build your character from the ground up.  Includes HP, stamina, attunement, armor selector, all your defenses, weapon selector and AR calculator as well as including armor, rings, spells, covenants and weapon effects.">
  <meta name="keywords" content="Dark Souls,darksouls,dks,character builder,stat planner,character creator,dark souls character builder,darksouls character builder,dks character builder,dark souls stat planner,character planner,dark souls character planner, darksouls character planner, dks planner">
  <link type="text/css" rel="stylesheet" href="css/style.css<?php echo $ta['css'];?>" />
  <script src="js/libs/modernizr-2.5.2.min.js"></script>
  <?php if($pga) print($ga); ?>
</head>
<body>
	<?php include('thead.php'); ?>
	<div id="container">
		<div class="cpadding">
			<header>
			<div class="infobox"><?php include('info.php'); ?></div>
				<a href="./"><img src="//static.mugenmonkey.com/img/_logo.png" width="362" height="82" class="logo" /></a>
				
			</header>
			<?php include('nav.php'); ?>
			<div role="main" id="content">
			<form id="ma" onsubmit="return false;" name="ma">
				<div id="armor-exclist" style="height:740px;max-height:1000px;">
				<div class="armor_exb">
					Hide Armor List
				</div>
					<div class="padding">
					<div class="right small"></div>
					<h2 class="title">Armor List</h2>
					<hr class="nomargin">
						<div id="armorlist" class="noSelect" style="height:650px;max-height:800px"></div>
					<div class="small"><img src="img/accept.png" width="13" height="13" alt="enabled armor" /> = enabled | <img src="img/remove.png" width="13" height="13" alt="disabled armor" /> = disabled | <img src="img/half.png" width="13" height="13" alt="partially enabled armor" /> = set partially enabled </div>
					</div>
				</div>
				<div id="armorfind" class="secdia" style="display:block;position:relative;top:0;left:0;height:auto;max-height:1000px">
				<div class="armor_exb">
					Show Armor List
				</div>
					<div class="padding clearfix">
						<h2 class="title">Armor Optimizer <span class="fright small faded normal">original By <a href="//ispohr.lima-city.de/ds_armor_calc_beta.html" target="_blank">ispohr</a>, edited with permission</span></h2>
						<hr class="nomargin">
						<div class="crow arex" style="max-height:auto;height:auto;">
							<div class="padding">
							
							<div class="formbox clearfix" uid="en" idm='stats'>
								<label for="endurance">Endurance</label> 
								<input type="text" maxlength="2" id="bendurance" disabled uid="en" value="8" style="display:none;" /> 
								<input type="text" maxlength="2" id="cendurance" tabindex="1" uid="en" class="bgw" value="8" />
								<span class="arrow down noSelect" id="uendurance" uid="en"></span>
								<span class="arrow up noSelect" id="dendurance" uid="en"></span>
							</div>
							<hr class="nomargin">
							<div class="small clearfix noSelect">
								<div class="leftside">
									<div class="padw31 small">
										<div><label> <input type="checkbox" class="left2 rings2" value="0" name="rofap" id="rofap"> Favor Ring</label></div>
										<div><label> <input type="checkbox" class="left2 rings2" value="0" name="havels" id="havels"> Havel's Ring</label></div>
									</div>
								</div>
								<div class="rightside">
									<div class="padw31 small">
										<div><label> <input type="checkbox" class="left2 rings2" value="0" name="maskof" id="maskof"> Father Mask</label></div>
									</div>
								</div>
							</div>
							<hr class="nomargin">
							<!--<div class="formbox clearfix">
								<label for="wepWeight">Weapon Weight</label> 
								<input type="text" maxlength="4" id="wepWeight" tabindex="2" class="bgw minim2" value="0" />
								<!--<span class="arrow down noSelect" id="uendurance" uid="en"></span>
								<span class="arrow up noSelect" id="dendurance" uid="en"></span>--
							</div>-->
							<div class="">
								<div class="d ovi"><span class="noSelect bold">LH1</span>
									<select id="lh1" class="gear g2">
										
									</select>
								</div>
								<div class="d ovi"><span class="noSelect bold">RH1</span>
									<select id="rh1" class="gear g2">
										
									</select>
								</div>
								<div class="d ovi"><span class="noSelect bold">LH2</span>
									<select id="lh2" class="gear g2">
										
									</select>
								</div>
								<div class="d ovi"><span class="noSelect bold">RH2</span>
									<select id="rh2" class="gear g2">
										
									</select>
								</div>
							</div>
							<hr class="nomargin">
							<h3 class="title center">Your weight breakpoints<div class="small faded normal">(minus weapon weight)</div></h3>
							
								<div class="formbox2 clearfix">
									<label><input type="radio" name="valtu" value="1" class="left2" checked /> Until 25% burden</label> <input type="text" readonly id="armorWeightidLight" class="bsl" />
								</div>
								<div class="formbox2 clearfix">
									<label><input type="radio" name="valtu" value="2" class="left2" /> Until 50% burden</label> <input type="text" readonly id="armorWeightidMid" class="bsl" />
								</div>
								<div class="formbox2 clearfix">
									<label><input type="radio" name="valtu" value="3" class="left2" /> Until 100% burden</label> <input type="text" readonly id="armorWeightidFat" class="bsl" />
								</div>
								<div class="formbox2 clearfix">
									<label> <input type="radio" name="valtu" value="4" class="left2" /> Or use custom</label> <input type="text" maxlength="5" id="armorWeightidCus" class="bsl" />
								</div>
								<hr class="">
							<h3 class="title center">How do you want to sort?<div class="small faded normal">(sorts to max selected value first)</div></h3>
							<div class="small clearfix">
								<div class="leftside">
									<div class="padw31 small">
										<div><label> <input type="radio" name="sortu" value="phys" class="left2" /> by Physical def</label></div>
										<div><label> <input type="radio" name="sortu" value="strk" class="left2" /> by Strike def</label></div>
										<div><label> <input type="radio" name="sortu" value="slsh" class="left2" /> by Slash def</label></div>
										<div><label> <input type="radio" name="sortu" value="thr" class="left2" /> by Thrust def</label></div>
										<div><label> <input type="radio" name="sortu" value="mag" class="left2" /> by Magic def</label></div>
										<div><label> <input type="radio" name="sortu" value="fire" class="left2" /> by Fire def</label></div>
									</div>
								</div>
								<div class="rightside">
									<div class="padw31 small">
										<div><label> <input type="radio" name="sortu" value="lit" class="left2" /> by Lightning def</label></div>
										<div><label> <input type="radio" name="sortu" value="ps" class="left2" checked /> by Poise</label></div>
										<div><label> <input type="radio" name="sortu" value="psn" class="left2" /> by Poison res</label></div>
										<div><label> <input type="radio" name="sortu" value="bld" class="left2" /> by Bleed res</label></div>
										<div><label> <input type="radio" name="sortu" value="crs" class="left2" /> by Curse res</label></div>
										<div><label id="custom-sort">Min/Max Values</label></div>
									</div>
								</div>
							</div>
							<hr class="nomargin">
							<div class="padding  clearfix" style="padding-bottom:0;">
								<span class="fbuil">Find Armor</span>  <span class="fcancel">clear results</span>
							</div>
							</div>
						</div>
						<div class="bwcrow" style="height:672px">
							<div class="padding">
								<div class="small clearfix">
									<div class="fixleft" style="width:20%">Forced equipment<div id="fixleft"><span class="faded edita">Clear All</span></div></div> 
									<div class="fixleft left70">Head<div id="forcedHead"><span class="faded edita">(none)</span></div></div> 
									<div class="fixleft left70">Chest<div id="forcedChes"><span class="faded edita">(none)</span></div></div>
									<div class="fixleft left70">Hands<div id="forcedHand"><span class="faded edita">(none)</span></div></div> 
									<div class="fixleft left70">Legs<div id="forcedLegs"><span class="faded edita">(none)</span></div></div>
								</div> 
								<hr class="nomargin">
							</div>
							<div id="armor-sets" style="height: 561px">
							
							</div>
						</div>
					</div>
				</div>
				<div id="custom-sort-pop">
				<div class="modalar3"></div>
				
					<table id="datA">
					  <tbody><tr><td class="minim faded">stat</td><td class="minim faded">min</td><td class="minim faded">max</td></tr>
					  <tr class="h"><td class="stat">Physical</td>
						  <td><input type="text" value="0" size="3" maxlength="6" name="mphy" id="mphy" class="minim2"></td>
						  <td><input type="text" value="280.7" size="4" maxlength="6" name="mxphy" id="mxphy" class="minim2"></td>
					  </tr>
					  
					  <tr class="h"><td class="stat">Strike</td> 
						  <td><input type="text" value="0" size="3" maxlength="6" name="mstr" id="mstr" class="minim2"></td>
						  <td><input type="text" value="263.5" size="4" maxlength="6" name="mxstr" id="mxstr" class="minim2"></td>
					  </tr>
					  
					  <tr class="h"><td class="stat">Slash</td> 
						  <td><input type="text" value="0" size="3" maxlength="6" name="msla" id="msla" class="minim2"></td>
						  <td><input type="text" value="318.1" size="4" maxlength="6" name="mxsla" id="mxsla" class="minim2"></td>
					  </tr>
					  
					  <tr class="h"><td class="stat">Thrust</td>
						  <td><input type="text" value="0" size="3" maxlength="6" name="mthr" id="mthr" class="minim2"></td>
						  <td><input type="text" value="280.7" size="4" maxlength="6" name="mxthr" id="mxthr" class="minim2"></td>
					  </tr>
							  
					  <tr class="h"><td class="stat">Magic</td>   
						  <td><input type="text" value="0" size="3" maxlength="6" name="mmag" id="mmag" class="minim2"></td>
						  <td><input type="text" value="253.0" size="4" maxlength="6" name="mxmag" id="mxmag" class="minim2"></td>
					  </tr>
							  
					  <tr class="h"><td class="stat">Fire</td> 
						  <td><input type="text" value="0" size="3" maxlength="6" name="mfir" id="mfir" class="minim2"></td>
						  <td><input type="text" value="207.0" size="4" maxlength="6" name="mxfir" id="mxfir" class="minim2"></td>
					  </tr>
							  
					  <tr class="h"><td class="stat">Lightning</td>
						  <td><input type="text" value="0" size="3" maxlength="6" name="mlig" id="mlig" class="minim2"></td>
						  <td><input type="text" value="170.7" size="4" maxlength="6" name="mxlig" id="mxlig" class="minim2"></td>
					  </tr>
							  
					  <tr class="h"><td class="stat">Poise</td> 
						  <td><input type="text" value="0" size="3" maxlength="6" name="mpoi" id="mpoi" class="minim2"></td>
						  <td><input type="text" value="121.0" size="4" maxlength="6" name="mxpoi" id="mxpoi" class="minim2"></td>
					  </tr>
							  
					  <tr class="h"><td class="stat">Poison</td>
						  <td><input type="text" value="0" size="3" maxlength="6" name="mpsn" id="mpsn" class="minim2"></td>
						  <td><input type="text" value="273.6" size="4" maxlength="6" name="mxpsn" id="mxpsn" class="minim2"></td>
					  </tr>
							  
					  <tr class="h"><td class="stat">Bleed</td>       
						  <td><input type="text" value="0" size="3" maxlength="6" name="mble" id="mble" class="minim2"></td>
						  <td><input type="text" value="163.7" size="4" maxlength="6" name="mxble" id="mxble" class="minim2"></td>
					  </tr>
							  
					  <tr class="h"><td class="stat">Curse</td>
						  <td><input type="text" value="0" size="3" maxlength="6" name="mcur" id="mcur" class="minim2"></td>
						  <td><input type="text" value="226.0" size="4" maxlength="6" name="mxcur" id="mxcur" class="minim2"></td>
					  </tr>
							  
					 
					  </tbody>
				  </table>
				  
				  
				
		</div>
		</form>
	</div>
	</div>
	<?php if(isset($bdes) && !empty($bdes)){
				echo '<div class="desinfo"><div><h2>Notes from the author</h2>';
				echo stripslashes($bdes);
				echo '</div></div>';
			}
			?>
	<?php include('footer.php'); ?>
	</div>
	
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>

	<script src="js/plugins.js<?php echo $ta['plugins'];?>"></script>
	<script src="js/dat1.js<?php echo $ta['dat1'];?>"></script>
	<script src="js/dat2.js<?php echo $ta['dat2'];?>"></script>  
	<script src="js/ar.script.js<?php echo $ta['arscript'];?>"></script>

</body>
</html>