<?php
	require('inc/timeasset.php');
	require('inc/contype.php');
	$error = '';
	if(!empty($_POST['cf_email']) && !empty($_POST['cf_name']) && !empty($_POST['cf_pass']) && !empty($_POST['cf_pass2'])){
		$email = filter_var($_POST['cf_email'], FILTER_VALIDATE_EMAIL);
		if(empty($email)){
			$error .= "<div class='deepred center'>Not a valid email</div>";
		}
		$user = $_POST['cf_name'];
		$nuser = preg_replace('/[^a-zA-Z0-9\-\_]/si' , '', $user);
		if($user != $nuser){
			$error .= "<div class='deepred center'>Not a valid username, can only contain alphanumerics, dashes(-) and underscores(_)</div>";
		}
		$pass = Array($_POST['cf_pass'],$_POST['cf_pass2']);
		if($pass[0] != $pass[1]){
			$error .= "<div class='deepred center'>Passwords do not match</div>";
		}
		if(empty($error)){
			if(strlen($nuser) < 5){
				$error .= "<div class='deepred center'>Username not long enough; 5 char min</div>";
			}
			if(strlen($pass[0]) < 5){
				$error .= "<div class='deepred center'>Password not long enough; 5 char min</div>";
			}
			if(empty($error)){
				$_nameQuery = mysql_num_rows(mysql_query("SELECT * FROM `users` WHERE `username`='{$nuser}'"));
				$_emailQuery = mysql_num_rows(mysql_query("SELECT * FROM `users` WHERE `email`='{$email}'"));
				if($_nameQuery){
					$error .= "<div class='deepred center'>Username already in use</div>";
				}
				if($_emailQuery){
					$error .= "<div class='deepred center'>Email already in use</div>";
				}
				if(empty($error)){
					$salt = hash('sha256',md5('187e83y27ejijife8yu3jt7vn03y178933yh32903ur8y132242').hash('sha256','3739832hd7832t821gd289ghye872wy'));
					$encPAss = hash('sha512',$salt.$pass[1]);
					for($i=0;$i<15;$i++){
						$encPAss = hash('sha512',$encPAss);
					}
					$encUser = hash('sha512',$salt.$nuser);
					$nPass = $encPAss;
					if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
						$ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
					else $ip=$_SERVER['REMOTE_ADDR'];
				 
					$ip =  trim($ip);
					$query = mysql_query("INSERT INTO `users` (username, namehash, pass, datei, email, ip) VALUES ('{$nuser}','{$encUser}','{$nPass}',NOW(),'{$email}', '{$ip}')") or die(mysql_query());
					if($query){
						setcookie("user", $nuser, time()+365*24*60*60);
						setcookie("token", $encUser, time()+365*24*60*60);
						header('Location: /darksouls/account?action=lists');
					}
				}
			}
		}
	} else {
		if(!empty($_POST['submitted'])){
			$error = "<div class='deepred center'>All fields are required</div>";
		}
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
  <title>Dark Souls Character Planner: Register</title>
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
				<a href="./"><img src="//static.mugenmonkey.com/img/_logo.png" width="362" height="82" class="logo" /></a>
				
			</header>
			<?php include('nav.php'); ?>
			<div role="main" id="content">
				<div class="over analy">
					<div class="padding">
						<h2>Make an account</h2>
						<hr class="nomargin" />
						<p>Making an account lets you save builds under your account.  Making it easy to keep track and manage your builds. Deleting, hiding and renaming among other things.  Also gives you the ability to make build lists, which let you share multiple builds at a time.</p>
						<hr>
						<div class="cfor">
						<?php if(isset($error)){echo $error;}?>
							<?php 
							if(isset($_COOKIE['user']) && isset($_COOKIE['token'])){
								?><form action="/darksouls/register" method="post">
								<input type="hidden" name="logout" value="1" />
								<div class="clearfix">Already logged in <input type="submit" value="Log out"></div>
								<div class="cform clearfix"><a href="/darksouls/">Home</a> | <a href="/darksouls/account">My Account</a></div>
							</form>
								<?php } else { ?><form action="/darksouls/register" method="post">
								<div class="cform clearfix">Email <input type="text" name="cf_email" maxlength="45" /></div>
								<input type="hidden" name="submitted" value="1" />
								<div class="cform clearfix">Username <input type="text" name="cf_name" maxlength="25"/></div>
								<div class="cform clearfix">Password <input type="password" name="cf_pass" maxlength="25" /></div>
								<div class="cform clearfix">Confirm pass <input type="password" name="cf_pass2" maxlength="25" /> </textarea></div>
								<div class="cform clearfix"><input type="submit" value="Make account"></div>
							</form><?php } ?>
							
						</div>
						<hr>
							<?php if(!isset($_COOKIE['user']) && !isset($_COOKIE['token'])){ ?><p class="center">*all fields are required.  5 character minimum.  Only alphanumeric charcters, dashes and underscores can be used.<br>Fields are case sensitive.</p><?php } ?>
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