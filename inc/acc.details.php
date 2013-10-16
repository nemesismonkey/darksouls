<?php
$error = '';
$hdheader = 'My Account - Updating password/email';
if(!empty($_POST['cf_email']) && !empty($_POST['cf_pass'])){
	$email = filter_var($_POST['cf_email'], FILTER_VALIDATE_EMAIL);
	if(empty($email)){
		$error .= "<div class='deepred center'>Not a valid email</div>";
	}
	$pass = $_POST['cf_pass'];
	if(empty($pass) || strlen($pass) < 5){
		$error .= "<div class='deepred center'>Password not long enough; 5 char min</div>";
	}
	if(!empty($_POST['cf_pass2']) || !empty($_POST['cf_pass3'])) {
		$pass2 = Array($_POST['cf_pass2'],$_POST['cf_pass3']);
		if($pass2[0] != $pass2[1]){
			$error .= "<div class='deepred center'>Passwords do not match</div>";
		}	
		if(strlen($pass2[0]) < 5){
			$error .= "<div class='deepred center'>Password not long enough; 5 char min</div>";
		}
		if(strlen($pass2[1]) < 5){
			$error .= "<div class='deepred center'>Password not long enough; 5 char min</div>";
		}		
	}
	if(empty($error)){
		if(strlen($pass) < 5){
			$error .= "<div class='deepred center'>Password not long enough; 5 char min</div>";
		}
		if(empty($error)){
			$salt = hash('sha256',md5('187e83y27ejijife8yu3jt7vn03y178933yh32903ur8y132242').hash('sha256','3739832hd7832t821gd289ghye872wy'));
			$encPAss = hash('sha512',$salt.$pass);
			for($i=0;$i<15;$i++){
				$encPAss = hash('sha512',$encPAss);
			}
			$nPass = $encPAss;
			$query2 = mysql_query("SELECT * FROM `users` WHERE `namehash`='{$_COOKIE['token']}' AND `pass`='{$nPass}'");
			if(mysql_num_rows($query2) == 1){
				if(!empty($_POST['cf_pass2']) && !empty($_POST['cf_pass3'])) {
					if($pass2[0] == $pass2[1]){
						$salt = hash('sha256',md5('187e83y27ejijife8yu3jt7vn03y178933yh32903ur8y132242').hash('sha256','3739832hd7832t821gd289ghye872wy'));
						$encPAss = hash('sha512',$salt.$pass2[0]);
						for($i=0;$i<15;$i++){
							$encPAss = hash('sha512',$encPAss);
						}
						mysql_query("UPDATE `users` SET `pass`='{$encPAss}', `email`='{$email}' WHERE `namehash`='{$_COOKIE['token']}' AND `pass`='{$nPass}'");
						$message = '<div>Password updated successfully <a href="/darksouls/account?action=lists">Continue to account</a></div>';
					}
				} else {
					mysql_query("UPDATE `users` SET `email`='{$email}' WHERE `namehash`='{$_COOKIE['token']}' AND `pass`='{$nPass}'");
					$message = '<div>Email updated successfully  <a href="/darksouls/account?action=lists">Continue to account</a></div>';
				}
			} else {
				$error .= "<div class='deepred center'>Incorrect password</div>";
			}
			//$query = mysql_query("INSERT INTO `users` (username, namehash, pass, date, email) VALUES ('{$nuser}','{$encUser}','{$nPass}',NOW(),'{$email}')") or die(mysql_query());
			//if($query){
			//	setcookie("user", $nuser, time()+365*24*60*60);
			//	setcookie("token", $encUser, time()+365*24*60*60);
			//	header('Location: /darksouls/account');
			//}
		}
	}
} else {
	if(isset($_POST['cf_email']) || isset($_POST['cf_pass'])){
		$error .= "<div class='deepred center'>Email and current password are required</div>";
	}
}
?>

<p>Use this form to update your email or password.  If only changing your email then you only have to enter your current password</p>
<div class="cfor">
<?php if(isset($error)){echo $error;}?>
<?php if(!isset($_POST['submit'])) {?>
		<form method="post" action="/darksouls/account?action=details">
		<div class="cform clearfix">New Email <input type="text" maxlength="25" name="cf_email" value="<?php $query = mysql_fetch_object(mysql_query("SELECT `email` FROM `users` WHERE `namehash`='{$_COOKIE['token']}'")); echo $query->email; ?>"></div>
		<input type="hidden" value="1" name="submitted">
		<div class="cform clearfix">Current Password <input type="password" name="cf_pass"></div>
		<hr>
		<div class="cform clearfix">New Password <input type="password" name="cf_pass2"> </div>
		<div class="cform clearfix">Confirm Password <input type="password" name="cf_pass3"> </div>
		<div class="cform clearfix"><input type="submit" value="Update account" name="submit" ></div>
	</form>	
<?php } else { 
	echo $message;
 } ?>
</div>