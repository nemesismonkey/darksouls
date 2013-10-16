<?php
	require('inc/timeasset.php');
?>
<!doctype html>
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  <title>Dark Souls Character Planner: Weapon Calculators</title>
  <meta name="description" content="Dark Souls character builder.  Gives you the ability to enter nearly everything to build your character from the ground up.  Includes HP, stamina, attunement, armor selector, all your defenses, weapon selector and AR calculator as well as including armor, rings, spells, covenants and weapon effects.">
  <meta name="keywords" content="Dark Souls,darksouls,dks,character builder,stat planner,character creator,dark souls character builder,darksouls character builder,dks character builder,dark souls stat planner,character planner,dark souls character planner, darksouls character planner, dks planner">
  <link type="text/css" rel="stylesheet" href="css/style.css<?php echo $ta['css'];?>" />
  <script src="js/libs/modernizr-2.5.2.min.js"></script>
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
			<div class="over analy">
				<h2>Weapon Attack Rating Calculator</h2>
				<div class="padding clearfix">
				<hr class="mmar">
				<div class="crow weap" id="sticky">
					<div class="padding ">
						<!-- Strength -->
							<div class="formbox clearfix" fid="stf" idm='statsf'>
								<lable for="strength_fake">Strength</lable> 
								
								<input type="text" maxlength="2" id="cstrength_fake" tabindex="5" fid="stf" class="bgw" value="40"/>
								<span class="arrow down_fake noSelect" id="ustrength_fake" fid="stf"></span>
								<span class="arrow up_fake noSelect" id="dstrength_fake" fid="stf"></span>
							</div>
							<!-- Dexterity -->
							<div class="formbox clearfix" fid="dxf" idm='statsf'>
								<lable for="dexterity_fake">Dexterity</lable> 
								
								<input type="text" maxlength="2" id="cdexterity_fake" tabindex="6" fid="dxf" class="bgw" value="40"/>
								<span class="arrow down_fake noSelect" id="udexterity_fake" fid="dxf"></span>
								<span class="arrow up_fake noSelect" id="ddexterity_fake" fid="dxf"></span>
							</div>
						<!-- Intelligence -->
							<div class="formbox clearfix" fid="inf" idm='statsf'>
								<lable for="intelligence_fake">Intelligence</lable> 
		
								<input type="text" maxlength="2" id="cintelligence_fake" tabindex="8" fid="inf" class="bgw" value="40"/>
								<span class="arrow down_fake noSelect" id="uintelligence_fake" fid="inf"></span>
								<span class="arrow up_fake noSelect" id="dintelligence_fake" fid="inf"></span>
							</div>
							<!-- Faith -->
							<div class="formbox clearfix" fid="ftf" idm='statsf'>
								<lable for="faith_fake">Faith</lable> 
								
								<input type="text" maxlength="2" id="cfaith_fake" tabindex="9" fid="ftf" class="bgw" value="40"/>
								<span class="arrow down_fake noSelect" id="ufaith_fake" fid="ftf"></span>
								<span class="arrow up_fake noSelect" id="dfaith_fake" fid="ftf"></span>
							</div>
							<div class="formbox clearfix" uid="hum">
								<lable for="humanity">Humanity</lable> 
								<input type="text" maxlength="2" id="chumanity" tabindex="10" uid="hum" value="10" class="bgw"/>
								<span class="arrow down noSelect" id="uhumanity" uid="hum"></span>
								<span class="arrow up noSelect" id="dhumanity" uid="hum"></span>
							</div>
							<div class="sh2 aright">
								<select id="weapontsel">
									<option value="normal">Normal</option>
									<option value="crystal">Crystal</option>
									<option value="lightning">Lightning</option>
									<option value="raw">Raw</option>
									<option value="magic">Magic</option>
									<option value="enchanted">Enchanted</option>
									<option value="devine">Divine</option>
									<option value="occult">Occult</option>
									<option value="fire">Fire</option>
									<option value="chaos">Chaos</option>
								</select>
								<input type="checkbox" val="1" id="2hwep" checked="checked"/> <lable for"2hwep">2 Hand</lable>
							</div>
							<hr class="nomargin">
							<div style="font-size:14px">Weapons to show
							<div style="font-size:12px;padding:10px;" class="weptypsss">
								<div>Fist Weapons <input type="checkbox" value="f" id="f" checked="checked" /></div>
								<div>Daggers <input type="checkbox" value="d" id="d" checked="checked" /></div>
								<div>Straight Swords <input type="checkbox" value="ss" id="ss" checked="checked" /></div>
								<div>Greatswords <input type="checkbox" value="gs" id="gs" checked="checked" /></div>
								<div>Ultra Greatswords <input type="checkbox" value="ug" id="ug" checked="checked" /></div>
								<div>Curved Swords <input type="checkbox" value="cs" id="cs" checked="checked" /></div>
								<div>Katanas <input type="checkbox" value="k" id="k" checked="checked" /></div>
								<div>Curved Greatswords <input type="checkbox" value="cg" id="cg" checked="checked" /></div>
								<div>Piercing Swords <input type="checkbox" value="ps" id="ps" checked="checked" /></div>
								<div>Axes <input type="checkbox" value="a" id="a" checked="checked" /></div>
								<div>Great Axes <input type="checkbox" value="ga" id="ga" checked="checked" /></div>
								<div>Hammers <input type="checkbox" value="h" id="h" checked="checked" /></div>
								<div>Great Hammers <input type="checkbox" value="gh" id="gh" checked="checked" /></div>
								<div>Spears <input type="checkbox" value="s" id="s" checked="checked" /></div>
								<div>Halberds <input type="checkbox" value="hb" id="hb" checked="checked" /></div>
								<div>Whips <input type="checkbox" value="w" id="w" checked="checked" /></div>
								<div>Bows <input type="checkbox" value="b" id="b" checked="checked" /></div>
								<div>Crossbows <input type="checkbox" value="cb" id="cb" checked="checked" /></div>
								<div>Flames <input type="checkbox" value="fl" id="fl" checked="checked" /></div>
								<div>Catalysts <input type="checkbox" value="ca" id="ca" checked="checked" /></div>
								<div>Talismans <input type="checkbox" value="ta" id="ta" checked="checked" /></div>
								<div>PTDE Content <input type="checkbox" value="ptde" id="ptde" checked="checked" /></div>
							</div>
							</div>
					</div>
				</div>
				<div class="crow weap" style="width:590px;">
				<div class="util">
					<span class="rleft">WEAPON</span> DMG (PHYS/MAG/FIRE/LGHT)
				</div>
				<div  class="padding">
					<div id="fillup">
						
					</div>
				</div>
				</div>
			</div>
		</div>
	</div>
	</div>
	<?php include('footer.php'); ?>
	</div>
	<div class="texover"><select id="lh1" class="gear"></select></div>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>

	<script src="js/plugins.js<?php echo $ta['plugins'];?>"></script>
	<script src="js/dat1.js<?php echo $ta['dat1'];?>"></script>
	<script src="js/dat2.js<?php echo $ta['dat2'];?>"></script>
	<script src="js/wep.js<?php echo $ta['wep'];?>"></script>
</body>
</html>