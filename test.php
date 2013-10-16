<?php
	if(isset($_GET['c'])) {
		$ref = filter_var($_GET['c'],FILTER_VALIDATE_INT);
		if(!empty($ref)){
			//require('inc/connect.local.php');
			require('inc/connect.php');
			$query = @mysql_query('SELECT * FROM `saved_builds` WHERE `ref`="'.$ref.'" LIMIT 1');
			while($data = @mysql_fetch_array($query)){
				$base64 = $data['b64'];
			}
		}
	}
?>

<!doctype html>
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  <title>Dark Souls Character Creator: Builder v1.7</title>
  <meta name="description" content="Dark Souls character builder.  Gives you the ability to enter nearly everything to build your character from the ground up.  Includes HP, stamina, attunement, armor selector, all your defenses, weapon selector and AR calculator as well as including armor, rings, spells, covenants and weapon effects.">
  <meta name="keywords" content="Dark Souls,darksouls,dks,character builder,stat planner,character creator,dark souls character builder,darksouls character builder,dks character builder,dark souls stat planner">
  <link type="text/css" rel="stylesheet" href="css/style.css?1332974674" />
  <script src="js/libs/modernizr-2.5.2.min.js?1332974674"></script>
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
	<div id="container">
		<div class="cpadding">
			<header>
				<a href="./"><img src="img/_logo.png" width="362" height="82" class="logo" /></a>
				<div class="infobox"><?php include('info.php'); ?></div>
			</header>
			<nav><a href="/darksouls/">Home</a> - <a href="/darksouls/builds">Saved Builds</a> - <a href="/darksouls/faq">Faq</a></nav>
			<div role="main" id="content">
				<div id="textport">[<a name="text" class="texti noSelect">text export</a>]</div>
				<div id="texti">
					<span class="rcop">Ctrl+C to copy</span>
					<span class="tclos">close</span>
					
					<div class="cpadding">
						<textarea readonly no-resize class="smptext"></textarea>
					</div>
				</div>
				<div id="savedia">
					<span class="tclos">close</span>
					
					<div class="cpadding">
						<div class="savecl">
						<h3>Save your build</h3>
						<hr>
							<div><strong>Title</strong><sup>1</sup> <input type="text" maxlength="50" id="saveTitle" value="Untitled" /></div>
							<div><strong>Author</strong><sup>1,2</sup> <input type="text" maxlength="50" id="saveAuthor" value="Anonymous"/></div>
							<div class="clearfix"><div class="overit">Make public? <input type="checkbox" id="savePublic" checked="checked"/></div><button class="cancel" id="fcancel">Cancel</button> <button id="fsave">Save</button></div>
							<div class="datbox"></div>
							<hr>
							<p><strong>Note:</strong> Use this to save your build privately or make it public for others to see and use.
							You can also use this link to share the build.  Please only use this if your build is complete!</p>
							<p class="faded small">1: Max length is 50 characters, minimum is 4<br>2: Please do not use your email or real name. Use a forum name or something along those lines</p>
						</div>
					</div>
				</div>
				<div id="settings" state="1"> <img src="img/settings24.png" class="tip" width="24" height="24" tex="Settings" /> </div>
				<div class="settings">
					<div class="padding">
						<div class="left">
							<div class="ytitle">Animations<hr class="nomargin"></div>
							<div>
								<div><input type="radio" name="animations" value="on" id="son" checked="checked" class="animate"/> <lable for="son">Enabled</lable></div>
								<div><input type="radio" name="animations" value="off" id="soff" class="animate"/> <lable for="soff">Disabled</lable></div>
							</div>
						</div>
						<div class="right">
							<div class="ytitle">Best Class Finder<hr class="nomargin"></div>
							<div>
								<div><input type="radio" name="autoupdate" value="on" id="ason" checked="checked" class="autoup"/> <lable for="ason">Auto</lable></div>
								<div><input type="radio" name="autoupdate" value="off" id="asoff" class="autoup"/> <lable for="asoff">Manual</lable></div>
							</div>
						</div>
						<div class="clear"></div>
						<br>
						<div class="left">
							<div class="ytitle">Path Selector<hr class="nomargin"></div>
							<div>
								<div><input type="radio" name="pathsel" value="on" id="pson" checked="checked" class="pathsel"/> <lable for="pson">Auto</lable></div>
								<div><input type="radio" name="pathsel" value="off" id="psoff" class="pathsel"/> <lable for="psoff">Manual</lable></div>
							</div>
						</div>
						<div class="right">
							<div class="ytitle">Use Nerfed EK Set<hr class="nomargin"></div>
							<div>
								<div><input type="radio" name="nerf" value="on" id="unek" checked="checked" class="nerf"/> <lable for="unek">Yes</lable></div>
								<div><input type="radio" name="nerf" value="off" id="onek" class="nerf"/> <lable for="onek">No</lable></div>
							</div>
						</div>
						<div class="clear"></div>
					</div>
				</div>
				<div class="cselector" state='t'>
					<img src="img/content-reorder.png" class="tip" width="24" height="24" tex="Best Class Finder" />
				</div>
				<div class="crow fake">
					<div class="stretch">
						<div class="padding">
							<div class="formbox clearfix">
								<lable for="startClass_fake" class="bold">Best Class</lable> 
								<input type="text" maxlength="30" id="bclass_fake" class="wide" readonly fid="bcs" value="No stats yet..."/> 
								<img src="img/revert20b.png" width="20" height="20" id="revert_fake" class="tip" tex="Revert stats to default" />
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
							<hr>
							<div class="center">
								<button type="button" value="Apply Stats" id="apply">Apply Stats</button> <button type="button" value="Cancel" id="cancel">Cancel</button>
							</div>
						</div>
					</div>
				</div>
				<div class="crow fake2">
					<div class="padding">
						<div class="f2lef">
							<span class="bold">Class Rankings</span>
							<hr>
								<div class="rnktitle"><span>&nbsp;&nbsp;&nbsp;# &nbsp;&nbsp;Class</span> Soul Level</div>
								<div class="rankings">
									<span class="faded">No stats entered yet.</span>
								</div>
						</div>
					</div>
				</div>
				<div class="overlay"></div>
				<div id="wepTypeSel" goes=''>
					<div class="wepArr2"></div>
					<div class="oger">
						<div class="filler">
							<div class="wepTyp" tpy="normal" id="tynor">
								<img src="img/transparent.png" width="20" height="20" goes='' typ="normal" style="background-position:0;" class="im"/> Normal
							</div>
							<div class="wepTyp" tpy="crystal" id="tycry">
								<img src="img/transparent.png" width="20" height="20" goes='' typ="crystal" style="background-position:-40px;" class="im"/> Crystal
							</div>
							<div class="wepTyp" tpy="lightning" id="tylgh">
								<img src="img/transparent.png" width="20" height="20" goes='' typ="lightning" style="background-position:-60px;" class="im"/> Lightning
							</div>
							<div class="wepTyp" tpy="raw" id="tyraw">
								<img src="img/transparent.png" width="20" height="20" goes='' typ="raw" style="background-position:-20px;" class="im"/> Raw
							</div>
							<div class="wepTyp" tpy="magic" id="tymag">
								<img src="img/transparent.png" width="20" height="20" goes='' typ="magic" style="background-position:-80px;" class="im"/> Magic
							</div>
							<div class="wepTyp" tpy="enchanted" id="tyenc">
								<img src="img/transparent.png" width="20" height="20" goes='' typ="enchanted" style="background-position:-100px;" class="im"/> Enchanted
							</div>
							<div class="wepTyp" tpy="devine" id="tydev">
								<img src="img/transparent.png" width="20" height="20" goes='' typ="devine" style="background-position:-120px;" class="im"/> Divine
							</div>
							<div class="wepTyp" tpy="occult" id="tyocc">
								<img src="img/transparent.png" width="20" height="20" goes='' typ="occult" style="background-position:-140px;" class="im"/> Occult
							</div>
							<div class="wepTyp" tpy="fire" id="tyfir">
								<img src="img/transparent.png" width="20" height="20" goes='' typ="fire" style="background-position:-160px;" class="im"/> Fire
							</div>
							<div class="wepTyp" tpy="chaos" id="tycha">
								<img src="img/transparent.png" width="20" height="20" goes='' typ="chaos" style="background-position:-180px;" class="im"/> Chaos
							</div>
						</div>
					</div>
					<div class="wepArr1"></div>
				</div>
				<div class="over">
				<div class="wrapper clearfix">
					<div class="crow">
						<div class="padding">
							<div class="formbox clearfix">
								<lable for="startClass">Start Class</lable> 
								<select id="startClass">
									<option value="warrior">4 - Warrior</option>
									<option value="knight">5 - Knight</option>
									<option value="wanderer">3 - Wanderer</option>
									<option value="thief">5 - Thief</option>
									<option value="bandit">4 - Bandit</option>
									<option value="hunter">4 - Hunter</option>
									<option value="sorcerer">3 - Sorcerer</option>
									<option value="pyromancer">1 - Pyromancer</option>
									<option value="cleric">2 - Cleric</option>
									<option value="deprived">6 - Deprived</option>
								</select>
								<img src="img/revert20b.png" width="20" height="20" id="revert" class="tip" tex="Revert stats to default" />
							</div>
							<hr>
							<div class="titles">
								<span>Stat</span><div>Starting Current</div>
							</div>
							<!-- Soul Level -->
							<div class="formbox clearfix" uid="sl" idm='stats'>
								<lable for="soulLevel">Soul Level</lable> 
								<input type="text" maxlength="3" id="bsoulLevel" disabled uid="sl" /> 
								<input type="text" maxlength="3" id="csoulLevel" tabindex="1" uid="sl" readonly class="bold"/>
								<span class="arrow down invisible" id="usoulLevel" uid="sl"></span>
								<span class="arrow up invisible" id="dsoulLevel" uid="sl"></span>
							</div>
							<!-- Vitality -->
							<div class="formbox clearfix" uid="vt" idm='stats'>
								<lable for="vitality">Vitality</lable> 
								<input type="text" maxlength="2" id="bvitality" disabled uid="vt" /> 
								<input type="text" maxlength="2" id="cvitality" tabindex="2" uid="vt" class="bgw"/>
								<span class="arrow down noSelect" id="uvitality" uid="vt"></span>
								<span class="arrow up noSelect" id="dvitality" uid="vt"></span>
							</div>
							<!-- Attunement -->
							<div class="formbox clearfix" uid="at" idm='stats'>
								<lable for="attunement">Attunement</lable> 
								<input type="text" maxlength="2" id="battunement" disabled uid="at" /> 
								<input type="text" maxlength="2" id="cattunement" tabindex="3" uid="at" class="bgw"/>
								<span class="arrow down noSelect" id="uattunement" uid="at"></span>
								<span class="arrow up noSelect" id="dattunement" uid="at"></span>
							</div>
							<!-- Endurance -->
							<div class="formbox clearfix" uid="en" idm='stats'>
								<lable for="endurance">Endurance</lable> 
								<input type="text" maxlength="2" id="bendurance" disabled uid="en" /> 
								<input type="text" maxlength="2" id="cendurance" tabindex="4" uid="en" class="bgw"/>
								<span class="arrow down noSelect" id="uendurance" uid="en"></span>
								<span class="arrow up noSelect" id="dendurance" uid="en"></span>
							</div>
							<!-- Strength -->
							<div class="formbox clearfix" uid="st" idm='stats'>
								<lable for="strength">Strength</lable> 
								<input type="text" maxlength="2" id="bstrength" disabled uid="st" /> 
								<input type="text" maxlength="2" id="cstrength" tabindex="5" uid="st" class="bgw"/>
								<span class="arrow down noSelect" id="ustrength" uid="st"></span>
								<span class="arrow up noSelect" id="dstrength" uid="st"></span>
							</div>
							<!-- Dexterity -->
							<div class="formbox clearfix" uid="dx" idm='stats'>
								<lable for="dexterity">Dexterity</lable> 
								<input type="text" maxlength="2" id="bdexterity" disabled uid="dx" /> 
								<input type="text" maxlength="2" id="cdexterity" tabindex="6" uid="dx" class="bgw"/>
								<span class="arrow down noSelect" id="udexterity" uid="dx"></span>
								<span class="arrow up noSelect" id="ddexterity" uid="dx"></span>
							</div>
							<!-- Resistance -->
							<div class="formbox clearfix" uid="rs" idm='stats'>
								<lable for="resistance">Resistance</lable> 
								<input type="text" maxlength="2" id="bresistance" disabled uid="rs" /> 
								<input type="text" maxlength="2" id="cresistance" tabindex="7" uid="rs" class="bgw"/>
								<span class="arrow down noSelect" id="uresistance" uid="rs"></span>
								<span class="arrow up noSelect" id="dresistance" uid="rs"></span>
							</div>
							<!-- Intelligence -->
							<div class="formbox clearfix" uid="in" idm='stats'>
								<lable for="intelligence">Intelligence</lable> 
								<input type="text" maxlength="2" id="bintelligence" disabled uid="in" /> 
								<input type="text" maxlength="2" id="cintelligence" tabindex="8" uid="in" class="bgw"/>
								<span class="arrow down noSelect" id="uintelligence" uid="in"></span>
								<span class="arrow up noSelect" id="dintelligence" uid="in"></span>
							</div>
							<!-- Faith -->
							<div class="formbox clearfix" uid="ft" idm='stats'>
								<lable for="faith">Faith</lable> 
								<input type="text" maxlength="2" id="bfaith" disabled uid="ft" /> 
								<input type="text" maxlength="2" id="cfaith" tabindex="9" uid="ft" class="bgw"/>
								<span class="arrow down noSelect" id="ufaith" uid="ft"></span>
								<span class="arrow up noSelect" id="dfaith" uid="ft"></span>
							</div>
							<div class="formbox clearfix" uid="hum">
								<lable for="humanity">Humanity</lable> 
								<input type="text" maxlength="2" id="chumanity" tabindex="10" uid="hum" value="0" class="bgw"/>
								<span class="arrow down noSelect" id="uhumanity" uid="hum"></span>
								<span class="arrow up noSelect" id="dhumanity" uid="hum"></span>
							</div>
							<hr>
								<div class="soulcost">
									<div class="title"><span>Souls To Next Level</span> <span>Total Souls Spent</span></div>
									<input type="text" maxlength="10" id="csc" tabindex="" uid="csc" readonly />
									<input type="text" maxlength="10" id="cst" tabindex="" uid="cst" readonly />
								</div>
							<hr>
							<div class="formbox clearfix">
								<lable for="covenant">Covenant</lable> 
								<select id="covenant">
									<option value="0" selected>No Covenant</option>
									<option value="0">Way of White</option>
									<option value="1">Princess Guard</option>
									<option value="3">Blade of the Darkmoon</option>
									<option value="2">Warrior of Sunlight</option>
									<option value="0">Forest Hunter</option>
									<option value="0">Chaos Servant</option>
									<option value="0">Gravelord Servant</option>
									<option value="0">Path of the Dragon</option>
									<option value="0">Darkwraith</option>
								</select>
							</div>
						</div>
					</div>
					<div class="crow">
						<div class="padding bsel">
							<!-- HP -->
							<div class="formbox clearfix" uid="hth">
								<lable for="health">HP</lable> 
								<input type="text" maxlength="5" id="bhealth" uid="hth" readonly /> 
							</div>
							<!-- Stamina -->
							<div class="formbox clearfix" uid="sta">
								<lable for="stamina">Stamina</lable> 
								<input type="text" maxlength="4" id="bstamina" uid="sta" readonly /> 
							</div>
							<!-- Equip Load -->
							<div class="formbox clearfix" uid="eqp">
								<lable for="equip">Equip Load</lable> 
								<input type="text" maxlength="4" id="bequip" uid="eqp" readonly /> 
							</div>
							<div id="loadUsage">0</div>
							<hr class="nomargin">
							<!-- Physical Def -->
							<div class="formbox clearfix" uid="phd">
								<lable for="pdef">Physical Def</lable> 
								<input type="text" maxlength="8" id="bdef" uid="phd" readonly /> 
							</div>
							<!-- Strike Def -->
							<div class="formbox clearfix offset" uid="shd">
								<lable for="pstrike">VS Strike</lable> 
								<input type="text" maxlength="8" id="bstrike" uid="shd" readonly /> 
							</div>
							<!-- Slash Def -->
							<div class="formbox clearfix offset" uid="sls">
								<lable for="pslash">VS Slash</lable> 
								<input type="text" maxlength="8" id="bslash" uid="sls" readonly /> 
							</div>
							<!-- Thrust Def -->
							<div class="formbox clearfix offset" uid="tur">
								<lable for="pthrust">VS Thrust</lable> 
								<input type="text" maxlength="8" id="bthrust" uid="tur" readonly /> 
							</div>
							<!-- Magig Def -->
							<div class="formbox clearfix" uid="mag">
								<lable for="pmagic">Magic Def</lable> 
								<input type="text" maxlength="8" id="bmagic" uid="mag" readonly /> 
							</div>
							<!-- Flame Def -->
							<div class="formbox clearfix" uid="fla">
								<lable for="pflame">Flame Def</lable> 
								<input type="text" maxlength="8" id="bflame" uid="fla" readonly /> 
							</div>
							<!-- Lighting Def -->
							<div class="formbox clearfix" uid="lgh">
								<lable for="plight">Lighting Def</lable> 
								<input type="text" maxlength="8" id="blight" uid="lgh" readonly /> 
							</div>
							<hr class="nomargin">
						</div>
							<div class="weapons clearfix">
								<div class="d"><span class="lh1 blue noSelect bold">LH1</span> <img src="img/transparent.png" width="20" height="20" fo='lh1' typ="normal" class="tip" tex="Weapon Upgrade Path"/> <span class="lh1i tip">20</span>
									<select id="lh1" class="gear">
										
									</select>
								</div>
								<div class="d"><span class="rh1i tip">20</span> <img src="img/transparent.png" width="20" height="20" fo='rh1' typ="normal" class="tip" tex="Weapon Upgrade Path"/> <span class="rh1 blue noSelect bold">RH1</span> 
									<select id="rh1" class="gear">
										
									</select>
								</div>
								<div class="d"><span class="lh2 noSelect bold">LH2</span> <img src="img/transparent.png" width="20" height="20" fo='lh2' typ="normal" class="tip" tex="Weapon Upgrade Path"/> <span class="lh2i tip">20</span>
									<select id="lh2" class="gear">
										
									</select>
								</div>
								<div class="d"><span class="rh2i tip">20</span> <img src="img/transparent.png" width="20" height="20" fo='rh2' typ="normal" class="tip" tex="Weapon Upgrade Path"/>   <span class="rh2 noSelect bold">RH2</span> 
									<select id="rh2" class="gear">
										
									</select>
								</div>
							</div>
							<div class="pad3">
							<hr class="nomargin">
								<div class="sh2">
									<input type="checkbox" val="1" id="2hwep" /> <lable for"2hwep">2 Hand weapons</lable>
								</div>
								</div>
							
					</div>
					<div class="crow">
						<div class="padding bsel">
							<!-- Poise -->
							<div class="formbox clearfix" uid="poi">
								<lable for="poise">Poise</lable> 
								<input type="text" maxlength="4" id="bpoise" uid="poi" readonly /> 
							</div>
							<!-- Bleed Resist -->
							<div class="formbox clearfix" uid="ble">
								<lable for="bleed">Bleed Resist</lable> 
								<input type="text" maxlength="4" id="bbleed" uid="ble" readonly /> 
							</div>
							<!-- Poison Resist -->
							<div class="formbox clearfix" uid="psn">
								<lable for="poison">Poison Resist</lable> 
								<input type="text" maxlength="4" id="bposion" uid="psn" readonly /> 
							</div>
							<!-- Curse Resist -->
							<div class="formbox clearfix" uid="cur">
								<lable for="curse">Curse Resist</lable> 
								<input type="text" maxlength="4" id="bcurse" uid="cur" readonly /> 
							</div>
							<hr class="nomargin">
							<!-- Item Discovery -->
							<div class="formbox clearfix" uid="itd">
								<lable for="item">Item Discovery</lable> 
								<input type="text" maxlength="4" id="bitem" uid="itd" readonly /> 
							</div>
							<hr class="nomargin">
							<!-- Attunement Slots -->
							<div class="formbox clearfix" uid="ats">
								<lable for="attune">Attunement Slots</lable> 
								<input type="text" maxlength="4" id="battune" uid="ats" readonly /> 
							</div>
							
							
							<hr class="nomargin">
							<!-- Head Piece -->
							<div class="formbox clearfix big">
								<lable for="headgear">Head</lable> 
								<select id="headgear" class="gear">
									
								</select>
							</div>
							<!-- Chest Piece -->
							<div class="formbox clearfix big">
								<lable for="chestgear">Chest</lable> 
								<select id="chestgear" class="gear">
									
								</select>
							</div>
							<!-- Hand Piece -->
							<div class="formbox clearfix big">
								<lable for="handgear">Hands</lable> 
								<select id="handgear" class="gear">
									
								</select>
							</div>
							<!-- Leg Piece -->
							<div class="formbox clearfix big">
								<lable for="leggear">Legs</lable> 
								<select id="leggear" class="gear">
									
								</select>
							</div>
							<!-- Ring 1 -->
							<div class="formbox clearfix">
								<lable for="ring1">Ring</lable> 
								<select id="ring1" class="gear">
									<option value="none1" ind="33">No Ring</option>
								</select>
							</div>
							<!-- Ring 2 -->
							<div class="formbox clearfix">
								<lable for="ring2">Ring</lable> 
								<select id="ring2" class="gear">
									<option value="none2" ind="33">No Ring</option>
								</select>
							</div>
							<hr class="nomargin">
							<span class="spella">Spells</span>
							<div class="spellc">
								<div class="spelo">
									<select id="spell1" class="spell">
										<option value="0" snd="0" cos='0' spec='0'>No Spell</option>
									</select>
								</div>
								<div class="spelo">
									<select id="spell2" class="spell">
										<option value="0" snd="0" cos='0' spec='0'>No Spell</option>
									</select>
								</div>
								<div class="spelo">
									<select id="spell3" class="spell">
										<option value="0" snd="0" cos='0' spec='0'>No Spell</option>
									</select>
								</div>
								<div class="spelo">
									<select id="spell4" class="spell">
										<option value="0" snd="0" cos='0' spec='0'>No Spell</option>
									</select>
								</div>
								<div class="spelo">
									<select id="spell5" class="spell">
										<option value="0" snd="0" cos='0' spec='0'>No Spell</option>
									</select>
								</div>
								<div class="spelo">
									<select id="spell6" class="spell">
										<option value="0" snd="0" cos='0' spec='0'>No Spell</option>
									</select>
								</div>
								<div class="spelo">
									<select id="spell7" class="spell">
										<option value="0" snd="0" cos='0' spec='0'>No Spell</option>
									</select>
								</div>
								<div class="spelo">
									<select id="spell8" class="spell">
										<option value="0" snd="0" cos='0' spec='0'>No Spell</option>
									</select>
								</div>
								<div class="spelo">
									<select id="spell9" class="spell">
										<option value="0" snd="0" cos='0' spec='0'>No Spell</option>
									</select>
								</div>
								<div class="spelo">
									<select id="spell10" class="spell">
										<option value="0" snd="0" cos='0' spec='0'>No Spell</option>
									</select>
								</div>
								<div class="spelo">
									<select id="spell11" class="spell">
										<option value="0" snd="0" cos='0' spec='0'>No Spell</option>
									</select>
								</div>
								<div class="spelo">
									<select id="spell12" class="spell">
										<option value="0" snd="0" cos='0' spec='0'>No Spell</option>
									</select>
								</div>
							</div>
						</div>
						
					</div>
					<div class="clear"></div>
					<div class="urltext">Share link <input type="text" id="url" />  <button id="savel" class="tip" tex="Publicly Save your Build">Save</button> 
				</div>
				</div>
			</div>
	
		</div>
	</div>
	<?php include('footer.php'); ?>
	</div>
	<div class="texover"></div>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>

	<?php if(isset($base64)){echo '<script type="text/javascript">var b64o = "'.$base64.'";</script>';}else echo '<script type="text/javascript">var b64o = 0;</script>'; ?>
  <script src="js/plugins.js?1332974674"></script>
  <script src="js/dat1.js?1332974674"></script>
  <script src="js/dat2.js?1333068655"></script>
  <script src="js/script.js?1333068655"></script>
  <img src="img/loading.gif" width="208" height="13" style="display:none;" />
  
</body>
</html>