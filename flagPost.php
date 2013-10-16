<?php
	require('inc/timeasset.php');
	require('inc/contype.php');
	if(isset($_SERVER['HTTP_X_REQUESTED_WITH']))
		$ajax = ($_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest');
	else
		$ajax = false;
	$post = (isset($_GET['postid']) && $_GET['postid'] ? $_GET['postid'] : false);
	
	if($post && $ajax){
		$result = @mysql_query("UPDATE comments SET flagged=flagged+1 WHERE id='{$post}'");
		if($result)
			echo 1;
		else
			echo 0;
	}
?>