<?php
require('inc/contype.php');
$sql = 'SELECT * FROM `saved_builds` WHERE `public`=\'1\' AND `soullevel`=0 ORDER BY `id` DESC LIMIT 0, 3000';
$query = mysql_query($sql) or die(mysql_error());
	echo 'var data = [<br>';
	while($row = mysql_fetch_array($query)){
		echo '"' . $row['ref'] . '",<br>';
	}
	echo '];';
?>