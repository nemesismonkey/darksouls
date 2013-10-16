<?php 
ini_set('session.cookie_domain', '.mugenmonkey.com');
setcookie("user", null, time()-100000,'/','.mugenmonkey.com');
setcookie("token", null, time()-100000,'/','.mugenmonkey.com');
header('Location: /darksouls/');
?>