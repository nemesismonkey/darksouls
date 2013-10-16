<?php
	require('inc/timeasset.php');
	require('inc/contype.php');
	ini_set('session.cookie_domain', '.mugenmonkey.com');
	$error = '';
	if(isset($_GET['a']) && isset($_GET['h'])){
		$a = filter_var($_GET['a'], FILTER_SANITIZE_STRING);
		$h = filter_var($_GET['h'], FILTER_SANITIZE_STRING);
		if($_GET['a'] != $a || $_GET['h'] != $h){
			$error .= "<div class='deepred center'>Potential injection detected</div>";
		}
		if(empty($error) && !isset($_COOKIE['token'])){
			$equery = mysql_query("SELECT * FROM `recov` WHERE `recovhash`='{$a}'");
			$_isThere = mysql_num_rows($equery);
				if($_isThere == 1){
					$message = 'e';
					
					if(isset($_POST['recover'])){
						if(!empty($_POST['cf_pass']) && !empty($_POST['cf_passc'])) {
							$p1 = $_POST['cf_pass'];
							$p2 = $_POST['cf_passc'];
							if(strlen($p1) > 4 && strlen($p2) > 4) {
								if($p1 == $p2) {
									$tquery = mysql_query("SELECT * FROM `users` WHERE `namehash`='{$h}'");
									if(mysql_num_rows($tquery) == 1){
										$dat = mysql_fetch_object($tquery);
										$salt = hash('sha256',md5('187e83y27ejijife8yu3jt7vn03y178933yh32903ur8y132242').hash('sha256','3739832hd7832t821gd289ghye872wy'));
										$encPAss = hash('sha512',$salt.$p1);
										for($i=0;$i<15;$i++){
											$encPAss = hash('sha512',$encPAss);
										}
										$nPass = $encPAss;
										
										$quer = mysql_query("UPDATE `users` SET `pass`='{$nPass}' WHERE `namehash`='{$dat->namehash}'");
										if($quer) {
											mysql_query("DELETE FROM `recov` WHERE `recovhash`='{$a}'");
											setcookie("user", $dat->username, time()+365*24*60*60);
											setcookie("token", $dat->namehash, time()+365*24*60*60);
											header('Location: /darksouls/account?action=lists');
										} else {
											$error .= "<div class='deepred center'>Failed to update password</div>";
										}
										
									} else {
										$error .= "<div class='deepred center'>No user found</div>";
									}
								} else {
									$error .= "<div class='deepred center'>Passwords do not match.</div>";
								}
							} else {
								$error .= "<div class='deepred center'>Password(s) not long enough.  5 char minimum.</div>";
							}
						} else {
							$error .= "<div class='deepred center'>Password(s) not entered</div>";
						}
						
					}
				} else {
					$error = "<div class='deepred center'>Reset request has failed.</div>";
				}
		} else {
			$emessage = "Please log out before attempting password recovery.";
		}
	} else {
		Header('Location: https://www.mugenmonkey.com/darksouls/');
	}
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
  <title>Dark Souls Character Planner: Recover Pass/Username</title>
  <meta name="description" content="Dark Souls character builder.  Gives you the ability to enter nearly everything to build your character from the ground up.  Includes HP, stamina, attunement, armor selector, all your defenses, weapon selector and AR calculator as well as including armor, rings, spells, covenants and weapon effects.">
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
				<a href="./"><img src="https://static.mugenmonkey.com/img/_logo.png" width="362" height="82" class="logo" /></a>
				
			</header>
			<?php include('nav.php'); ?>
			<div role="main" id="content">
				<div class="over analy">
					<div class="padding">
						<h2>Reseting your password</h2>
						<hr class="nomargin" />
						<?php if(isset($emessage))
								echo '<p>'.$emessage.'</p>';
								else
						        echo '<p>Please enter your new password.  Minimum length is 5 characters.</p>';
						?>
						<hr>
						<div class="cfor">
						<?php if(isset($error)){echo $error;}?>
							
							<?php if(isset($message) && !isset($emessage)) { ?>
								<form action="/darksouls/reset?a=<?php echo $_GET['a']; ?>&h=<?php echo $_GET['h']; ?>" method="post">
								<div class="cform clearfix">Password <input type="password" name="cf_pass" maxlength="45" /></div>
								<div class="cform clearfix">Confirm <input type="password" name="cf_passc" maxlength="45" /></div>
								<div class="cform clearfix"><input type="submit" value="Reset Pass" name="recover"></div>
							</form>
							<?php } else {
								echo 'There was a problem processing your request. Please try clicking the reset link again, requesting a new link, making sure you are logged out or contact me <a href="mailto:monkey@mugenmonkey.com">here</a> if problems persist.';
							} ?>
						</div>
						<hr>
						</div>
				</div>
			
			</div>
	</div>

	<?php include('footer.php'); ?>
	</div>
	 <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>
	<script src="js/vf.js<?php echo $ta['vf']; ?>"></script>
</body>
</html>