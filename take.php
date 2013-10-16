<?php
	require('inc/timeasset.php');
	require('inc/contype.php');
	ini_set('session.cookie_domain', '.mugenmonkey.com');
	function str_rand($length = 8, $seeds = 'alphanum'){
		// Possible seeds
		$seedings['alpha'] = 'abcdefghijklmnopqrstuvwqyz';
		$seedings['numeric'] = '0123456789';
		$seedings['alphanum'] = 'abcdefghijklmnopqrstuvwqyz0123456789';
		$seedings['hexidec'] = '0123456789abcdef';
		
		// Choose seed
		if (isset($seedings[$seeds]))
		{
			$seeds = $seedings[$seeds];
		}
		
		// Seed generator
		list($usec, $sec) = explode(' ', microtime());
		$seed = (float) $sec + ((float) $usec * 100000);
		mt_srand($seed);
		
		// Generate
		$str = '';
		$seeds_count = strlen($seeds);
		
		for ($i = 0; $length > $i; $i++)
		{
			$str .= $seeds{mt_rand(0, $seeds_count - 1)};
		}
		
		return $str;
	}
	$token = $_COOKIE['token'];
	$user = $_COOKIE['user'];
	
	$query = mysql_query("SELECT * FROM `users` WHERE `namehash`='{$token}' AND `username`='{$user}'");
	$userdata = mysql_fetch_object($query);
	$ip = $userdata->ip;
	$own = $userdata->ownership;
	if($own == 0){
		$search = mysql_query("SELECT * FROM `saved_builds` WHERE `ip`='{$ip}' ORDER BY `id` DESC");
		if(mysql_num_rows($search) > 0){
			$newListID = str_rand(10);
			$newListTitle = 'My Builds';
			$listOwner = $token;
			$default = 1;
			$savedBuildsOwner = $token;
			$savedBuildsListId = $newListID;
			$userOwnerShip = 1;
			
			mysql_query("UPDATE `saved_builds` SET `auth`='{$user}', `owner`='{$listOwner}', `listid`='{$savedBuildsListId}', `listtitle`='$newListTitle' WHERE `ip`='{$ip}'") or die(mysql_error());
			mysql_query("INSERT INTO `lists` (`owner`,`listid`,`listtitle`,`defaulti`,`datei`) VALUES ('{$listOwner}','{$savedBuildsListId}','{$newListTitle}','{$default}',NOW())") or die(mysql_error());
			mysql_query("UPDATE `users` SET `ownership`='1' WHERE `namehash`='{$token}' AND `username`='{$user}'");
			header('Location: /darksouls/account?action=lists');
			
		} else {
			mysql_query("INSERT INTO `lists` (`owner`,`listid`,`listtitle`,`defaulti`,`datei`) VALUES ('{$listOwner}','{$savedBuildsListId}','{$newListTitle}','{$default}',NOW())") or die(mysql_error());
			mysql_query("UPDATE `users` SET `ownership`='1' WHERE `namehash`='{$token}' AND `username`='{$user}'");
			header('Location: /darksouls/account?action=lists');
		}
	} else {
		header('Location: /darksouls/account?action=lists');
	}
?>