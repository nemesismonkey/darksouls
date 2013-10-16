<?php 
	require('inc/contype.php');
	if(isset($_POST['mtype'])){
		$method = $_POST['mtype'];
	}
	if(isset($_POST['builds'])){
		$delstring = '';
		$data = explode(';',$_POST['builds']);
		for($i=0;$i<sizeof($data)-1;$i++){
			$delstring .= "'".$data[$i]."'";
			if($i != sizeof($data) - 2){
				$delstring .= ',';
			}
		}
	}
	if(isset($_POST['toloc'])){
		$moveto = $_POST['toloc'];
	}
	if(isset($_POST['listn'])){
		$littitle = $_POST['listn'];
	}
	if(isset($_POST['ntitle'])){
		$ntitle = $_POST['ntitle'];
	}
	if(isset($_POST['nhas'])){
		$nhas = $_POST['nhas'];
	}
	
	
	
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
		
		for ($i = 0; $length > $i; $i++){
			$str .= $seeds{mt_rand(0, $seeds_count - 1)};
		}
		
		return $str;
	}
	$token = $_COOKIE['token'];
	$user = $_COOKIE['user'];
	$newListID = str_rand(15);
	
	if($method == 'delete'){
		mysql_query("DELETE FROM `saved_builds` WHERE `ref` IN ($delstring)") or die(mysql_error());
	} else if($method == 'hide'){
		mysql_query("UPDATE `saved_builds` SET `public`='0' WHERE `ref` IN ($delstring)") or die(mysql_error());
	} else if($method == 'unhide'){
		mysql_query("UPDATE `saved_builds` SET `public`='1' WHERE `ref` IN ($delstring)") or die(mysql_error());
	} else if($method == 'move'){
		mysql_query("UPDATE `saved_builds` SET `listid`='$moveto', `listtitle`='$littitle' WHERE `ref` IN ($delstring)") or die(mysql_error());
	} else if($method == 'newlist'){
		mysql_query("INSERT INTO `lists` (`owner`,`listid`,`listtitle`,`datei`,`alias`) VALUES ('$token','$newListID','$ntitle',NOW(),'$user')") or die(mysql_error());
		$que = mysql_query("SELECT * FROM `lists` WHERE `owner`='$token' AND `defaulti`='1'") or die(mysql_error());
		if(mysql_num_rows($que) == 0){
			mysql_query("UPDATE `lists` SET `defaulti`='1' WHERE `owner`='$token' ORDER BY `id` ASC LIMIT 1") or die(mysql_error());
		}
	} else if($method == 'renamelist'){
		mysql_query("UPDATE `lists` SET `listtitle`='$ntitle' WHERE `listid`='$nhas'") or die(mysql_error());
		mysql_query("UPDATE `saved_builds` SET `listtitle`='$ntitle' WHERE `listid`='$nhas'") or die(mysql_error());
	} else if($method == 'deletelist'){
		mysql_query("DELETE FROM `lists` WHERE `listid`='$nhas'") or die(mysql_error());
		mysql_query("UPDATE `saved_builds` SET `listtitle`='All Builds' WHERE `listid`='$nhas'") or die(mysql_error());
		$que = mysql_query("SELECT * FROM `lists` WHERE `owner`='$token' AND `defaulti`='1'") or die(mysql_error());
		if(mysql_num_rows($que) == 0){
			mysql_query("UPDATE `lists` SET `defaulti`='1' WHERE `owner`='$token' ORDER BY `id` ASC LIMIT 1") or die(mysql_error());
		}
	}
?>