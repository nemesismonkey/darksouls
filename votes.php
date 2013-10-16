<?php
	require('inc/contype.php');
	$build = $_GET['id'];
	$type = $_GET['vtyp'];
	if($type == 'up'){
		$g = ' + 5';
		$t = ',`voteups`=`voteups`+1';
	} else {
		$g = ' - 3';
		$t = ',`votedowns`=`votedowns`+1';
	}
	if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
		$ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
	else $ip=$_SERVER['REMOTE_ADDR'];
	$preVoted = mysql_num_rows(mysql_query("SELECT `id` FROM `voted` WHERE `buildid`='$build' AND `ip`='$ip'"));
	if($preVoted == 0){
		$query = "UPDATE `saved_builds` SET `totalof`=`totalof`$g,`numvotes`=`numvotes`+1 $t WHERE `ref`='$build'";
		mysql_query("INSERT INTO `voted` (buildid,ip,date) VALUES ('$build','$ip',NOW())");
		mysql_query($query) or die(mysql_query());
		echo $type;
	} else {
		echo 'failed';
	}
?>