<?php
	require('inc/timeasset.php');
	require('inc/contype.php');
	ini_set('session.cookie_domain', '.mugenmonkey.com');
	$error = '';
	if(!empty($_POST['cusername']) && !empty($_POST['cpass'])){
		$user = $_POST['cusername'];
		$nuser = preg_replace('/[^a-zA-Z0-9\-\_]/si' , '', $user);
		if($user != $nuser){
			$error .= "<div class='deepred center'>Not a valid username, can only contain alphanumerics, dashes(-) and underscores(_)</div>";
		}
		$pass = $_POST['cpass'];
		if(empty($error)){
			if(strlen($nuser) < 4){
				$error .= "<div class='deepred center'>Username not long enough; 4 char min</div>";
			}
			if(strlen($pass) < 4){
				$error .= "<div class='deepred center'>Password not long enough; 4 char min</div>";
			}
			if(empty($error)){
				$_nameQuery = mysql_num_rows(mysql_query("SELECT * FROM `users` WHERE `username`='{$nuser}'"));
				if($_nameQuery){
					$salt = hash('sha256',md5('187e83y27ejijife8yu3jt7vn03y178933yh32903ur8y132242').hash('sha256','3739832hd7832t821gd289ghye872wy'));
					$encPAss = hash('sha512',$salt.$pass);
					for($i=0;$i<15;$i++){
						$encPAss = hash('sha512',$encPAss);
					}
					$encUser = hash('sha512',$salt.$nuser);
					$nPass = $encPAss;
					
					$query = mysql_query("SELECT * FROM `users` WHERE `namehash`='{$encUser}' AND `pass`='{$nPass}'") or die(mysql_query());
					if(mysql_num_rows($query) == 1){
					
						setcookie("user", $nuser, time()+365*24*60*60,'/','.mugenmonkey.com');
						setcookie("token", $encUser, time()+365*24*60*60,'/','.mugenmonkey.com');
						header('Location: /darksouls/account');
					} else {
						$error .= "<div class='deepred center'>Incorrect password or username</div>";
					}
				} else {
					$error .= "<div class='deepred center'>Incorrect password or username</div>";
				}
			}
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
  <title>Dark Souls Character Planner: Login</title>
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
						<h2>Log in</h2>
						<hr class="nomargin" />
						
						<div class="cfor">
						<?php if(isset($error)){echo $error;}?>
							<?php 
							if(isset($_COOKIE['user']) && isset($_COOKIE['token'])){
								?><form action="/darksouls/logout" method="post">
								<input type="hidden" name="logout" value="1" />
								<div class="clearfix">Already logged in <input type="submit" value="Log out"></div>
								<div class="cform clearfix"><a href="/darksouls/">Home</a> | <a href="/darksouls/account">My Account</a></div>
							</form>
								<?php } else { ?><form action="/darksouls/login" method="post">
								<input type="hidden" name="submitted" value="1" />
								<div class="cform clearfix">Username <input type="text" name="cusername" /></div>
								<div class="cform clearfix">Password <input type="password" name="cpass" /></div>
								<div class="cform clearfix"><input type="submit" value="Log in"></div>
							</form><?php } ?>
							
						</div>
						<hr>
							<?php if(!isset($_COOKIE['user']) && !isset($_COOKIE['token'])){ ?><p class="center">*all fields are required.  4 character minimum.  Only alphanumeric charcters, dashes and underscores can be used.<br>Fields are case sensitive.</p><?php } ?>
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