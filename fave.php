<?php
if(isset($_COOKIE['user']) && isset($_COOKIE['token'])){
	require('inc/contype.php');
	$build = $_GET['fave'];

	if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
		$ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
	else $ip=$_SERVER['REMOTE_ADDR'];

		$query = "INSERT INTO `favorites` (refid,nameid,date,ip) VALUES ('$build','{$_COOKIE['token']}',NOW(),'$ip')";
		mysql_query($query) or die(mysql_query());
		echo 'success';
} else {
	echo 'failed';
}
?>