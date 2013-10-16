<?php
	require('inc/timeasset.php');
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
  <link rel="apple-touch-icon" href="/icon_ex.png"/>
  <title>Dark Souls Character Planner: Register</title>
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
	<div id="container">
		<div class="cpadding">
			<header>
			<div class="infobox"><?php include('info.php'); ?></div>
				<a href="./"><img src="http://static.mugenmonkey.com/img/_logo.png" width="362" height="82" class="logo" /></a>
				
			</header>
			<?php include('nav.php'); ?>
			<div role="main" id="content">
				<div class="over analy">
					<div class="padding">
						<h2>Make an account</h2>
						<hr class="nomargin" />
						<p>Making an account gives you the ability to save builds under your account.  Making it easy to keep track and manage your builds. Deleting, hiding and renaming among other things.  Also gives you the ability to make build lists, which let you share multiple builds at a time.</p>
						<div class="cfor">
							<form action="contact.php" method="post">
								<div class="cform clearfix">Your e-mail <input type="text" name="cf_email"></div>
								<div class="cform clearfix">Reason <select id="re">
									<option value="bug">Bug/Issue</option>
									<option value="suggestion">Suggestion</option>
								</select>
								</div>
								<div class="cform clearfix">Your Message<br/><textarea name="cf_message"></textarea></div>
								<div class="cform clearfix"><input type="submit" value="Send"> <input type="reset" value="Clear"></div>
							</form>
						</div>
					</div>
				</div>
			
			</div>
	</div>

	<?php include('footer.php'); ?>
	</div>
	
</body>
</html>