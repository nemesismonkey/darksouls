<?php
	ini_set('session.cookie_domain', '.mugenmonkey.com');
	require('inc/timeasset.php');
	require('inc/contype.php');
	
	
	$err = false;
	if(isset($_GET['u'])){
		$user = $_GET['u'];
		$nuser = preg_replace('/[^a-zA-Z0-9\-\_ ]/si' , '', $user);
		if($user != $nuser || $user == 'Anonymous'){
			$ok = false;
		} else {
			$ok = true;
		}
		if($ok){
			$userDetails = mysql_fetch_array(mysql_query("SELECT id,username,namehash,datei,accType FROM `users` WHERE `username`='{$user}' LIMIT 1"));
			if($userDetails) {
				$token = $userDetails['namehash'];
				$builds = mysql_query("SELECT id,auth,title,b64,ref,time,public,ip,soullevel,vitality,attunement,endurance,strength,dexterity,resistance,inteligence,faith,owner,numvotes,voteups,votedowns,totalof,desci,numviews FROM `saved_builds` WHERE `owner`='{$token}' OR `auth`='{$user}' ORDER BY `id` DESC");
				$favbuilds = mysql_query("SELECT 'id','refid','date' FROM `favorites` WHERE `nameid`='{$token}' ORDER BY `id` DESC");
			} else
			$err = 'User has not made an account';
		} else
		$err = 'Not a valid username';
	} else
	$err = 'No user selected';
?>
<!doctype html>
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  <title>Dark Souls Character Planner: Calculators</title>
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
				
				<div class="padding">
				<?php
				if(!$err) {
					echo '<h2>'.$user.'\'s profile</h2>';
					$num = mysql_num_rows($builds);
					$fnum = mysql_num_rows($favbuilds);
					echo '<div class="title small faded">user has submitted '.($num == 0 ? 'no builds' : $num.' build'.($num == 1 ? '' : 's')).' and has'.($fnum == 0 ? ' not favorited any builds' : 'favorited '.$fnum.' build'.($fnum == 1 ? '' : 's')).' </div>';
					echo 'Builds 
					';
					while($row = mysql_fetch_assoc($builds)){
						print_r($row);
					}
					echo 'Faves 
					';
					while($row = mysql_fetch_assoc($favbuilds)){
						print_r($row);
					}
				} else
					echo $err;
				?>
				</div>
			</div>
		</div>
	</div>

	<?php include('footer.php'); ?>
	</div>
	<div class="texover"></div>

</body>
</html>