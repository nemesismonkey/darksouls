<?php
	require('inc/timeasset.php');
?>
<!doctype html>
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  <title>Dark Souls Character Planner: Best Class Finder</title>
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
				<h2>Best Class Finder</h2>
				<div class="padding clearfix">
				<hr class="mmar">
				<div class="mwidh">
				<div class="crow c2">
					<div class="stretch">
						<div class="padding">
							<div class="formbox clearfix">
								<lable for="startClass_fake" class="bold">Best Class</lable> 
								<input type="text" maxlength="30" id="bclass_fake" class="wide" readonly fid="bcs" value="No stats yet..."/> 
								<img src="//static.mugenmonkey.com/img/revert20b.png" width="20" height="20" id="revert_fake" class="tip" tex="Revert stats to default" />
							</div>
							<hr>
							<div class="titles">
								<span>Stat</span><div>Starting Desired</div>
							</div>
							<!-- Vitality -->
							<div class="formbox clearfix" fid="vtf" idm='statsf'>
								<lable for="vitality_fake">Vitality</lable> 
								<input type="text" maxlength="2" id="bvitality_fake" disabled fid="vtf" /> 
								<input type="text" maxlength="2" id="cvitality_fake" tabindex="2" fid="vtf" class="bgw" />
								<span class="arrow down_fake noSelect" id="uvitality_fake" fid="vtf"></span>
								<span class="arrow up_fake noSelect" id="dvitality_fake" fid="vtf"></span>
							</div>
							<!-- Attunement -->
							<div class="formbox clearfix" fid="atf" idm='statsf'>
								<lable for="attunement_fake">Attunement</lable> 
								<input type="text" maxlength="2" id="battunement_fake" disabled fid="atf" /> 
								<input type="text" maxlength="2" id="cattunement_fake" tabindex="3" fid="atf" class="bgw"/>
								<span class="arrow down_fake noSelect" id="uattunement_fake" fid="atf"></span>
								<span class="arrow up_fake noSelect" id="dattunement_fake" fid="atf"></span>
							</div>
							<!-- Endurance -->
							<div class="formbox clearfix" fid="enf" idm='statsf'>
								<lable for="endurance_fake">Endurance</lable> 
								<input type="text" maxlength="2" id="bendurance_fake" disabled fid="enf" /> 
								<input type="text" maxlength="2" id="cendurance_fake" tabindex="4" fid="enf" class="bgw"/>
								<span class="arrow down_fake noSelect" id="uendurance_fake" fid="enf"></span>
								<span class="arrow up_fake noSelect" id="dendurance_fake" fid="enf"></span>
							</div>
							<!-- Strength -->
							<div class="formbox clearfix" fid="stf" idm='statsf'>
								<lable for="strength_fake">Strength</lable> 
								<input type="text" maxlength="2" id="bstrength_fake" disabled fid="stf" /> 
								<input type="text" maxlength="2" id="cstrength_fake" tabindex="5" fid="stf" class="bgw"/>
								<span class="arrow down_fake noSelect" id="ustrength_fake" fid="stf"></span>
								<span class="arrow up_fake noSelect" id="dstrength_fake" fid="stf"></span>
							</div>
							<!-- Dexterity -->
							<div class="formbox clearfix" fid="dxf" idm='statsf'>
								<lable for="dexterity_fake">Dexterity</lable> 
								<input type="text" maxlength="2" id="bdexterity_fake" disabled fid="dxf" /> 
								<input type="text" maxlength="2" id="cdexterity_fake" tabindex="6" fid="dxf" class="bgw"/>
								<span class="arrow down_fake noSelect" id="udexterity_fake" fid="dxf"></span>
								<span class="arrow up_fake noSelect" id="ddexterity_fake" fid="dxf"></span>
							</div>
							<!-- Resistance -->
							<div class="formbox clearfix" fid="rsf" idm='statsf'>
								<lable for="resistance_fake">Resistance</lable> 
								<input type="text" maxlength="2" id="bresistance_fake" disabled fid="rsf" /> 
								<input type="text" maxlength="2" id="cresistance_fake" tabindex="7" fid="rsf" class="bgw"/>
								<span class="arrow down_fake noSelect" id="uresistance_fake" fid="rsf"></span>
								<span class="arrow up_fake noSelect" id="dresistance_fake" fid="rsf"></span>
							</div>
							<!-- Intelligence -->
							<div class="formbox clearfix" fid="inf" idm='statsf'>
								<lable for="intelligence_fake">Intelligence</lable> 
								<input type="text" maxlength="2" id="bintelligence_fake" disabled fid="inf" /> 
								<input type="text" maxlength="2" id="cintelligence_fake" tabindex="8" fid="inf" class="bgw"/>
								<span class="arrow down_fake noSelect" id="uintelligence_fake" fid="inf"></span>
								<span class="arrow up_fake noSelect" id="dintelligence_fake" fid="inf"></span>
							</div>
							<!-- Faith -->
							<div class="formbox clearfix" fid="ftf" idm='statsf'>
								<lable for="faith_fake">Faith</lable> 
								<input type="text" maxlength="2" id="bfaith_fake" disabled fid="ftf" /> 
								<input type="text" maxlength="2" id="cfaith_fake" tabindex="9" fid="ftf" class="bgw"/>
								<span class="arrow down_fake noSelect" id="ufaith_fake" fid="ftf"></span>
								<span class="arrow up_fake noSelect" id="dfaith_fake" fid="ftf"></span>
							</div>
							<hr>
							<div class="titles">
								<span>Stat</span><div>Starting Current</div>
							</div>
							<!-- Soul Level -->
							<div class="formbox clearfix" fid="slf" idm='statsf'>
								<lable for="soulLevel_fake">Soul Level</lable> 
								<input type="text" maxlength="3" id="bsoulLevel_fake" disabled fid="slf" /> 
								<input type="text" maxlength="3" id="csoulLevel_fake" tabindex="1" fid="slf" readonly class="bold"/>
								<span class="arrow down invisible" id="usoulLevel_fake" fid="slf"></span>
								<span class="arrow up invisible" id="dsoulLevel_fake" fid="slf"></span>
							</div>
						</div>
					</div>
				</div>
				<div class="crow c2">
					<div class="padding">
								<div class="rnktitle"><span>&nbsp;&nbsp;&nbsp;# &nbsp;&nbsp;Class</span> Soul Level</div>
								<div class="rankings">
									<span class="faded">No stats entered yet.</span>
								</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	</div>
</div>
	<?php include('footer.php'); ?>
	
</div>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="<?php if($htt) echo $https.'/'; ?>js/libs/jquery-1.7.1.min.js"><\/script>')</script>

	<?php if(isset($base64)){echo '<script type="text/javascript">var b64o = "'.$base64.'";</script>';}else echo '<script type="text/javascript">var b64o = 0;</script>'; ?>
  <script src="js/plugins.js<?php echo $ta['plugins'];?>"></script>
  
  <script src="js/bcf.js<?php echo $ta['bcf'];?>"></script>
  
  
</body>
</html>