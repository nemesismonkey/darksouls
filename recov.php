<?php
	require('inc/timeasset.php');
	require('inc/contype.php');
	ini_set('session.cookie_domain', '.mugenmonkey.com');
	$error = '';
	if(!empty($_POST['cf_email'])){
		$email = filter_var($_POST['cf_email'], FILTER_VALIDATE_EMAIL);
		if(empty($email)){
			$error .= "<div class='deepred center'>Not a valid email</div>";
		}
		if(empty($error) && !isset($_COOKIE['token'])){
			$equery = mysql_query("SELECT * FROM `users` WHERE `email`='{$email}'");
				$_emailQuery = mysql_num_rows($equery);
				if($_emailQuery == 1){
					$data = mysql_fetch_object($equery);
					$random_password = md5(uniqid(rand()));
					$emailpassword = substr($random_password, 0, 8);
					$salt = hash('sha256',md5('187e83y27ejijife8yu3jt7vn03y178933yh32903ur8y132242').hash('sha256','3739832hd7832t821gd289ghye872wy'));
					$encPAss = hash('sha512',$salt.$emailpassword);
					for($i=0;$i<15;$i++){
						$encPAss = hash('sha512',$encPAss);
					}
					$random_genlink = hash('sha512',md5(uniqid(rand())));
					$userhash = $data->namehash;
					if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
						$ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
					else $ip=$_SERVER['REMOTE_ADDR'];
					$reco = mysql_query("INSERT INTO `recov` (ip,date,phash,recovhash,username) VALUES ('{$ip}',NOW(),'{$encPAss}','{$random_genlink}','{$userhash}')") or die(mysql_query());
					if($reco) {
						$to = $data->email;
						$subject = "Mugenmonkey Password Recovery";
						$messagem = "Follow this <a href='https://www.mugenmonkey.com/darksouls/reset?a=$random_genlink&h=$userhash'>link</a> to reset your password <br>If you cant see the link copy/paste this into your browser:<br>https://www.mugenmonkey.com/darksouls/reset?a=$random_genlink&h=$userhash<br><br><br> If you did not request this email and believe someone is trying to access your account, please report it by emailing me <a href='mailto:report@mugenmonkey.com'>here</a>. <br> Otherwise, please ignore this message.";
						$from = "no-reply@mugenmonkey.com";
						$headers = "From:" . $from . "\r\nContent-type: text/html\r\n";
						if(!mail($to,$subject,$messagem,$headers)) {
							$error = "<div class='deepred center'>Was unable to send email Please contact me directly <a href='mailto:monkey@mugenmonkey.com'>here</a>. </div>";
						} else {
							$message = "Mail Sent. Please check your spam box.";
						}
					} else {
						$error = "<div class='deepred center'>Was unable to make the requested action. </div>";
					}
					
				} else {
					$error = "<div class='deepred center'>Email does not match any in our system.</div>";
				}
		} else {
			$message = "Please log out before attempting password recovery.";
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
				<a href="./"><img src="//static.mugenmonkey.com/img/_logo.png" width="362" height="82" class="logo" /></a>
				
			</header>
			<?php include('nav.php'); ?>
			<div role="main" id="content">
				<div class="over analy">
					<div class="padding">
						<h2>Forgot your password?</h2>
						<hr class="nomargin" />
						<p>Enter your email to have a password reset link sent to you.</p>
						<hr>
						<div class="cfor">
						<?php if(isset($error)){echo $error;}?>
							
							<?php if(!isset($message)) { ?>
								<form action="/darksouls/recover" method="post">
								<div class="cform clearfix">Email <input type="text" name="cf_email" maxlength="45" /></div>
								<div class="cform clearfix"><input type="submit" value="Send Link"></div>
							</form>
							<?php } else {
								echo $message;
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