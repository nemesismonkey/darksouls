<?php
	sleep(1);
	require('inc/contype.php');
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
	function refineUrls($inText,$attributes=array()){
		// define an url regular exression pattern:
		$urlPattern = "/(https?:\/\/|www.)(www.)?([-a-z0-9]*[a-z0-9]\.)[^\s]*/";
		// get all matches
		preg_match_all($urlPattern, $inText, $temp);
		$temp = $temp[0]; // an array of all urls
		$attrs = '';
		foreach ($attributes as $attribute => $value) {
			$attrs .= " {$attribute}=\"{$value}\"";
		}
		$urlTag = array();
		foreach ($temp as &$url){
			$urlShort = str_replace("http://", "",$url);
			while (strlen($urlShort) > 45){ // limit is set to 35
				if(is_bool(strpos($urlShort,"/"))){ // are there any natural places to cut the link?
					$urlShort = substr($urlShort,0,40);
				} else { // find a good place to cut the link
					$newLength = max(strrpos($urlShort,"/"),strrpos($urlShort,"?"),strrpos($urlShort,"#"));
					$urlShort = substr($urlShort, 0, $newLength);
				}
				$urlShort = $urlShort."...";
			}
			$urlTag[] = "<a href=\"$url\"".$attrs.">$urlShort</a>";
		}
		if(0 < sizeof($temp)){
			// if there are any urls in the text, replace them with the new code
			return strtr($inText, array_combine($temp, $urlTag));
		} else {
			return $inText;
		}
	} 

	
	function autolink($str, $attributes=array()) {
		$attrs = '';
		foreach ($attributes as $attribute => $value) {
			$attrs .= " {$attribute}=\"{$value}\"";
		}

		$str = ' ' . $str;
		$str = preg_replace(
			'`([^"=\'>])((http|https|ftp)://[^\s<]+[^\s<\.)])`i',
			'$1<a href="$2"'.$attrs.'>(?$2</a>',
			$str
		);
		$str = substr($str, 1);
		
		return $str;
	}

	$dit = mysql_query("SELECT * FROM `saved_builds` WHERE `ip`='{$_SERVER['REMOTE_ADDR']}' AND UNIX_TIMESTAMP(saved_builds.time) > (UNIX_TIMESTAMP(NOW())-60) ORDER BY `id` DESC LIMIT 1 ");
	if(mysql_num_rows($dit) == 0){
		$nref = (int) round(mt_rand(100000000,400000000) * 1.23653) . mt_rand(1000,9000) . mt_rand(600,900) . mt_rand(10,99);
		if(isset($_POST['til']) && isset($_POST['aut'])) {
			$title = filter_var($_POST['til'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
			$author = filter_var($_POST['aut'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
			if(isset($_POST['hash']) && $_POST['hash'] != 'false' && $_POST['hash'] != false && !empty($_POST['hash']))  {
				$hashtag = filter_var($_POST['hash'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
			}else{
				$hashtag = '';
			}
			if(isset($_POST['newlist']) && $_POST['newlist'] != 'false' && $_POST['newlist'] != false && !empty($_POST['newlist']))  {
				$newlist = filter_var($_POST['newlist'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
			}else{
				$newlist = '';
			}
			if(isset($_POST['tolist'])) {
				$tolist = explode(':::::',$_POST['tolist']);
			}else{
				$tolist = '';
			}
			$base = $_POST['b6'];
			$btest = base64_decode($_POST['b6']);
			$soul = filter_var($_POST['soulevel'],FILTER_VALIDATE_INT);
			$vit = filter_var($_POST['vit'],FILTER_VALIDATE_INT);
			$att = filter_var($_POST['att'],FILTER_VALIDATE_INT);
			$end = filter_var($_POST['end'],FILTER_VALIDATE_INT);
			$str = filter_var($_POST['str'],FILTER_VALIDATE_INT);
			$dex = filter_var($_POST['dex'],FILTER_VALIDATE_INT);
			$res = filter_var($_POST['res'],FILTER_VALIDATE_INT);
			$int = filter_var($_POST['int'],FILTER_VALIDATE_INT);
			$fai = filter_var($_POST['fai'],FILTER_VALIDATE_INT);
			$hp = filter_var($_POST['hp'],FILTER_VALIDATE_INT);
			$stam = filter_var($_POST['stam'],FILTER_VALIDATE_INT);
			$phy = filter_var($_POST['phy'],FILTER_VALIDATE_FLOAT);
			$strike = filter_var($_POST['strike'],FILTER_VALIDATE_FLOAT);
			$slash = filter_var($_POST['slash'],FILTER_VALIDATE_FLOAT);
			$thrust = filter_var($_POST['thrust'],FILTER_VALIDATE_FLOAT);
			$magic = filter_var($_POST['magic'],FILTER_VALIDATE_FLOAT);
			$flame = filter_var($_POST['flame'],FILTER_VALIDATE_FLOAT);
			$light = filter_var($_POST['light'],FILTER_VALIDATE_FLOAT);
			$poise = filter_var($_POST['poise'],FILTER_VALIDATE_INT);
			$bleed = filter_var($_POST['bleed'],FILTER_VALIDATE_FLOAT);
			$poison = filter_var($_POST['poison'],FILTER_VALIDATE_FLOAT);
			$curse = filter_var($_POST['curse'],FILTER_VALIDATE_FLOAT);
			$desc = $_POST['desc'];
			$ndesc = preg_replace('/<[^>]+>/',"",$desc);
			$ndesc = nl2br($ndesc);
			$ndesc = refineUrls($ndesc, array("target"=>"_blank","rel"=>"nofollow"));
			
			$btitles = "soullevel,vitality,attunement,endurance,strength,dexterity,resistance,inteligence,faith,hp,stamina,phy,strike,slash,thrust,magic,flame,light,poise,bleed,poison,curse,desci";
			$bvalues = "'{$soul}','{$vit}','{$att}','{$end}','{$str}','{$dex}','{$res}','{$int}','{$fai}','{$hp}','{$stam}','{$phy}','{$strike}','{$slash}','{$thrust}','{$magic}','{$flame}','{$light}','{$poise}','{$bleed}','{$poison}','{$curse}','".addslashes($ndesc)."'";
			
			
			$pub = (isset($_POST['publicn']) ? $_POST['publicn'] : $_POST['public']);
			$public = filter_var($pub,FILTER_VALIDATE_INT);
			$public = (int) $public;
			if($public == 0 || $public == 1){
				
			} else {
				$public = false;
			}
			if(strlen($btest) > 10 && $soul && $vit && $att && $end && $str && $dex && $res && $int && $fai && $hp && $stam && $phy && $strike && $slash && $thrust && $magic && $flame && $light && $poise !== false && $bleed && $poison && $curse && $public !== false) {
				
			} else {
				echo json_encode(array('a'=>'<span class="small red">Error uploading: Potentially polluted post detected</span>'));
				die();
			}
			
			if(strlen($title) < 4 || strlen($author) < 4){
				echo json_encode(array('a'=>'<span class="small red">Error uploading: Title/Author unsafe</span>'));
				die();
			} else {
				$match = mysql_query("SELECT `id`,`ref` FROM `saved_builds` WHERE `b64`='{$base}' AND `auth`='{$author}'");
				//disabling duplicate build finding
				if($author != 'Anonymous'){
					$protectauthor = mysql_query("SELECT COUNT(`id`) FROM `users` WHERE `username`='{$author}'");
					$pmath = mysql_fetch_array($protectauthor);
					if($pmath[0] == 1){
						//make sure this is correct user
						ini_set('session.cookie_domain', '.mugenmonkey.com');
						$piueer = (isset($_COOKIE['user'])) ? $_COOKIE['user'] : 'not';
						if($piueer == $author){
							//everythings okay...
						} else {
							echo json_encode(array('a'=>'<span class="small red">Error uploading: Username protected</span>'));
							die();
						}
					}
				}
				if(mysql_num_rows($match) > 0){
					$u = mysql_fetch_object($match);
					echo json_encode(array('a'=>$u->ref,'b'=>'You already made this build!'));
					die();
				} else {
					if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
						$ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
					else $ip=$_SERVER['REMOTE_ADDR'];
					if(isset($_COOKIE['user']) && isset($_COOKIE['token'])){
						$newlist = (string) $newlist;
						if(strlen($newlist) > 0 || !is_array($tolist)){
							$newListID = str_rand(10);
							$def = 0;
							if(!is_array($tolist)){
								$newlist = 'My builds #'.mt_rand(1000, 4000);
								$def = 1;
							}
							$que = mysql_query("INSERT INTO `saved_builds` (auth,title,b64,ref,public,ip,owner,listid,listtitle,{$btitles}) VALUES('{$author}','{$title}','{$base}','{$nref}','{$public}','{$ip}','{$hashtag}','{$newListID}','{$newlist}',$bvalues)");
							$kaj = mysql_query("INSERT INTO `lists` (owner,listid,listtitle,defaulti,datei,alias) VALUES('{$hashtag}','{$newListID}','{$newlist}','{$def}',NOW(),'{$author}')") or die(mysql_error());
						} else {
							$que = mysql_query("INSERT INTO `saved_builds` (auth,title,b64,ref,public,ip,owner,listid,listtitle,{$btitles}) VALUES('{$author}','{$title}','{$base}','{$nref}','{$public}','{$ip}','{$hashtag}','{$tolist[0]}','{$tolist[1]}',$bvalues)") or die(mysql_error());
						}
					} else {
						$que = mysql_query("INSERT INTO `saved_builds` (auth,title,b64,ref,public,ip,$btitles) VALUES('{$author}','{$title}','{$base}','{$nref}','{$public}','{$ip}',$bvalues)");
					}
					if($que && isset($kaj)){
						echo json_encode(array('a'=>$nref,'c'=>$newListID,'d'=>$newlist));
					}else if($que){
						echo json_encode(array('a'=>$nref));
					} else {
						echo json_encode(array('a'=>0));
					}
					
				}
			}
		}
	} else {
		echo json_encode(array('a'=>'<span class="small red">Error uploading: Must wait 1 minute between saves</span>'));
	}
?>