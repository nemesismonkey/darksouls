<?php ini_set('session.cookie_domain', '.mugenmonkey.com'); //if(isset($_COOKIE['user']) && isset($_COOKIE['token'])){ ?>
<div id="lheader"><div id="lcontainer">
	<div id="localstore"><a href="./local">local saves</a></div>

<?php if(!isset($_COOKIE['user']) && !isset($_COOKIE['token'])){ ?>
<div class="login">log in<div class="login_form"><form action="/darksouls/login" name="login" method="post">
<div><lable>User name</label></div>
	<div class="center"><input type="text" maxlength="20" name="cusername" id="cusername" /></div>
	<div><lable>Password</label></div>
	<div class="center"><input type="password" maxlength="20" name="cpass" id="cpass" /></div>
	<div><input type="submit" value="Log in" name="csubmit" id="csubmit" /> <span class="small fright"><a href="/darksouls/recover" class="faded">forgot</a>?</span></div>
	<div class="aright"><a href="/darksouls/register">Make an account</a></div>
	</form></div></div>
	<?php } else {
		?>
		Logged in as <a href="/darksouls/account"><?php echo $_COOKIE['user']; ?></a> <?php echo (isset($adminLevel) && ($adminLevel == 1 || $adminLevel == 2) ? ' | <a href="/darksouls/admin">Admin</a> ' : ''); ?>| <a href="/darksouls/account?action=lists">my builds</a> | <a href="/darksouls/favorites">favorites</a> | <a href="/darksouls/logout">log out</a>
		
	<?php }
?>
	
	
</div> </div>
<?php //}?>