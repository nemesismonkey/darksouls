<?php $hdheader = 'My Account - Settings'; ?>
<!-- <p class="center"><strong><a href="/darksouls/take">Take ownership</a></strong></p>
		<p class="faded small">This will attempt to take ownership of any builds you previously made.  It works by comparing your current ip address to your past address.
		If you have a static ip then most if not all your previous builds will be imported to you, otherwise this may not pull all of your builds.</p>
		<hr> -->
		<p><strong>Email associated with this account:</strong> <?php $query = mysql_fetch_object(mysql_query("SELECT `email` FROM `users` WHERE `namehash`='{$_COOKIE['token']}'")); echo $query->email; ?> <a href="/darksouls/account?action=details">Update</a></p>
		<hr>
		<p><strong>Character Planner Settings</strong></p>
<div class="padding"><div class="left">
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
	<div class="ytitle">Custom Select Boxes<hr class="nomargin"></div>
	<div>
		<div><input type="radio" name="chssel" value="on" id="chson" checked="checked" class="chssel"/> <label for="chson">Use</label></div>
		<div><input type="radio" name="chssel" value="off" id="chsoff" class="chssel"/> <label for="chsoff">Dont Use</label></div>
	</div>
</div>
<div class="clear"></div></div>