<?php
	$offMod = 100;

	if(isset($_GET['p'])){
		$page = filter_var($_GET['p'],FILTER_VALIDATE_INT);
		if(empty($page))
			$page = 1;
		$offset = ($page - 1) * $offMod;
	} else {
		$page = 1;
		$offset = 0;
	}
	require('inc/contype.php');
	if(isset($_COOKIE['user']) && isset($_COOKIE['token'])){
		$toekn = $_COOKIE['token'];
	} else {
		$toekn = false;
	}
	$wheClause = '';
	$orderBy = '`s`.`id` DESC';
	//samples 
	// between/range sample  'AND `saved_builds`.`soullevel`>"10" AND `saved_builds`.`soullevel`<"125"'
	//  less then/greater then  'AND `saved_builds`.`soullevel`>"10"'
	//exact 'AND `saved_builds`.`soullevel`="125"'
	
	//sort by
	// `saved_builds`.`id` ASC/DESC
	//  `saved_builds`.`totalof` ASC/DESC
	$exParams = '';
	if(isset($_GET['sb']) && isset($_GET['wi']) && isset($_GET['vals']) && isset($_GET['so'])) {
		switch($_GET['sb']) {
			case 'sl':
			$sby = 'soullevel';
			$minrange = 5;
			break;
			case 'vt':
			$sby = 'vitality';
			$minrange = 5;
			break;
			case 'at':
			$sby = 'attunement';
			$minrange = 5;
			break;
			case 'en':
			$sby = 'endurance';
			$minrange = 5;
			break;
			case 'st':
			$sby = 'strength';
			$minrange = 5;
			break;
			case 'dx':
			$sby = 'dexterity';
			$minrange = 5;
			break;
			case 'rs':
			$sby = 'resistance';
			$minrange = 5;
			break;
			case 'it':
			$sby = 'inteligence';
			$minrange = 5;
			break;
			case 'ft':
			$sby = 'faith';
			$minrange = 5;
			break;
			case 'hp':
			$sby = 'hp';
			$minrange = 150;
			break;
			case 'pr':
			$sby = 'phy';
			$minrange = 25;
			break;
			case 'sd':
			$sby = 'strike';
			$minrange = 25;
			break;
			case 'sa':
			$sby = 'slash';
			$minrange = 25;
			break;
			case 'su':
			$sby = 'thrust';
			$minrange = 25;
			break;
			case 'md':
			$sby = 'magic';
			$minrange = 25;
			break;
			case 'fd':
			$sby = 'flame';
			$minrange = 25;
			break;
			case 'ld':
			$sby = 'light';
			$minrange = 25;
			break;
			case 'po':
			$sby = 'poise';
			$minrange = 5;
			break;
			case 'br':
			$sby = 'bleed';
			$minrange = 25;
			break;
			case 'pi':
			$sby = 'poison';
			$minrange = 25;
			break;
			case 'cu':
			$sby = 'curse';
			$minrange = 25;
			break;
			default:
			$sby = null;
		}
		switch($_GET['wi']) {
			case 'ar':
			$styp = 'range';
			break;
			case 'ev':
			$styp = 'exact';
			break;
			case 'wi':
			$styp = 'between';
			break;
			case 'el':
			$styp = 'lesst';
			break;
			case 'em':
			$styp = 'grtrt';
			break;
			default:
			$styp = null;
		}
		$hold = explode(':',$_GET['vals']);
		if(is_numeric($hold[0])) {
			$hold[0] = floor((int) $hold[0]);
		}
		if(isset($hold[1])) {
			if(is_numeric($hold[1])) {
				$hold[1] = floor((int) $hold[1]);
			}
		} else {
			$hold[1] = $minrange;
		}
		switch($_GET['so']) {
			case 'nf':
			$orderBy = '`s`.`id` DESC';
			break;
			case 'of':
			$orderBy = '`s`.`id` ASC';
			break;
			case 'hr':
			$orderBy = '`s`.`totalof` DESC,`s`.`id` DESC';
			break;
			case 'lr':
			$orderBy = '`s`.`totalof` ASC,`s`.`id` DESC';
			break;
			default:
			$orderBy = '`s`.`id` DESC';
		}
		if($sby != null && $styp != null){
			//samples 
			// between/range sample  'AND `saved_builds`.`soullevel`>"10" AND `saved_builds`.`soullevel`<"125"'
			//  less then/greater then  'AND `saved_builds`.`soullevel`>"10"'
			//exact 'AND `saved_builds`.`soullevel`="125"'
			if($styp == 'range') {
				$lrange = $hold[0] - $hold[1];
				$hrange = $hold[0] + $hold[1];
				$wheClause = "AND `s`.`{$sby}`>'{$lrange}' AND `s`.`{$sby}`<'{$hrange}'";
			}elseif($styp == 'exact') {
				$lrange = $hold[0];
				$wheClause = "AND `s`.`{$sby}`='{$lrange}'";
			}elseif($styp == 'between') {
				$lrange = $hold[0];
				$hrange = $hold[1];
				if($lrange < $hrange) {
					$order = Array(0 => $lrange, 1 => $hrange);
				} elseif($lrange > $hrange) {
					$order = Array(0 => $hrange, 1 => $lrange);
				} elseif($lrange == $hrange) {
					$order = Array(0 => $lrange - $minrange, 1 => $hrange + $minrange);
				}
				$wheClause = "AND `s`.`{$sby}`>'{$order[0]}' AND `s`.`{$sby}`<'{$order[1]}'";
			} elseif($styp == 'lesst' || $styp == 'grtrt') {
				if($styp == 'lesst'){
					$s = '<=';
				} else {
					$s = '>=';
				}
				$lrange = $hold[0];
				$wheClause = "AND `s`.`{$sby}`{$s}'{$lrange}'";
			}
			//isset($_GET['sb']) && isset() && isset() && isset(]
			$exParams = "&sb={$_GET['sb']}&wi={$_GET['wi']}&vals=".urlencode($_GET['vals'])."&so={$_GET['so']}";
		}
		
	}
	
	
	$sd = '`s`.id,`s`.auth,`s`.title,`s`.ref,`s`.time,`s`.public,`s`.owner,`s`.soullevel,`s`.vitality,`s`.attunement,`s`.endurance,`s`.strength,`s`.dexterity,`s`.resistance,`s`.inteligence,`s`.faith,`s`.numvotes,`s`.voteups,`s`.votedowns,`s`.totalof';
	if($toekn) {
		$query = mysql_query("SELECT $sd,`favorites`.`refid`,`favorites`.`nameid`,`users`.`accType` FROM `saved_builds` as s LEFT JOIN `favorites` ON `s`.`ref` = `favorites`.`refid` AND `favorites`.`nameid` = '$toekn' LEFT JOIN `users` ON `s`.`owner` = `users`.`namehash` WHERE `s`.`public`='1' {$wheClause} ORDER BY {$orderBy} LIMIT {$offset}, {$offMod}") or die(mysql_error());
	} else {
		$query = mysql_query("SELECT $sd,`users`.`accType` FROM `saved_builds` as s LEFT JOIN `users` ON `s`.`owner` = `users`.`namehash` WHERE `s`.`public`='1' {$wheClause} ORDER BY {$orderBy} LIMIT {$offset}, {$offMod}") or die(mysql_error());
	}
	$count = mysql_fetch_array(mysql_query("SELECT COUNT(*) FROM `saved_builds` as s WHERE `public`='1' {$wheClause}"));
	$count = $count[0];
	
	$maxPage = ceil($count/$offMod);
	$curCount = mysql_num_rows($query);
	// print the link to access each page
	$self = $_SERVER['PHP_SELF'];
	$nav  = '';

	/*for($pageNum = 1; $pageNum <= $maxPage; $pageNum++)
	{
	   if ($page == $pageNum)
	   {
		  $nav .= " <span class='black'>$page</span> |";
	   }
	   else
	   {
		  $nav .= " <a href=\"/darksouls/builds?p=$pageNum\">$pageNum</a> |";
	   }
	}*/
	
	if($page == 1) {
		$nav .= " <span class='black'>$page</span> |";
		for($i = 2; $i <= 15; $i++){
			if($i <= $maxPage)
			$nav .= " <a href=\"/darksouls/builds?p=$i".$exParams."\">$i</a> |";
		}
		if($i <= $maxPage)
		$nav .= " ... <a href=\"/darksouls/builds?p=$maxPage".$exParams."\">$maxPage</a> |";
	}else {
		if($page > 10){
			$nav .= " <a href=\"/darksouls/builds?p=1".$exParams."\">1</a> ... | ";
			if($page == $maxPage) {
				for($i = $page - 10; $i < $page; $i++){
					$nav .= " <a href=\"/darksouls/builds?p=$i".$exParams."\">$i</a> |";
				}
			} else if($page >= $maxPage - 5) {
				for($i = $page - (10 + ($page - $maxPage)); $i < $page; $i++){
					$nav .= " <a href=\"/darksouls/builds?p=$i".$exParams."\">$i</a> |";
				}
			} else {
				for($i = $page - 6; $i < $page; $i++){
					$nav .= " <a href=\"/darksouls/builds?p=$i".$exParams."\">$i</a> |";
				}
			}
			$nav .= " <span class='black'>$page</span> |";
			for($i = $page + 1; $i < $page + 7; $i++){
				if($i <= $maxPage)
				$nav .= " <a href=\"/darksouls/builds?p=$i".$exParams."\">$i</a> |";
			}
			if($i == $maxPage)
				$nav .= " <a href=\"/darksouls/builds?p=$maxPage".$exParams."\">$maxPage</a> |";
			if($i < $maxPage)
				$nav .= " ... <a href=\"/darksouls/builds?p=$maxPage".$exParams."\">$maxPage</a> |";
		} else {
			if($page > 1 && $page <= 10) {
				for($i = 1; $i < $page; $i++){ 
					if($i <= $maxPage)
					$nav .= " <a href=\"/darksouls/builds?p=$i".$exParams."\">$i</a> |";
				}
				$nav .= " <span class='black'>$page</span> |";
				for($i = $i + 1; $i < $page + 7 + (9 - $page); $i++){ 
				if($i <= $maxPage)
					$nav .= " <a href=\"/darksouls/builds?p=$i".$exParams."\">$i</a> |";
				}
				if($i <= $maxPage)
				$nav .= " ... <a href=\"/darksouls/builds?p=$maxPage".$exParams."\">$maxPage</a> |";
			}
		}
	}
	//$curNum = ($page - 1) * $offMod;
	$toNums = $count . ' builds ' . (isset($_GET['sb']) && isset($_GET['wi']) && isset($_GET['vals']) && isset($_GET['so']) ? '<span class="small">(<a href="./builds">clear</a>)</span>' : '');
	$sb = (isset($_GET['sb']) ? $_GET['sb'] : 'sl');
	$wi = (isset($_GET['wi']) ? $_GET['wi'] : 'ar');
	$so = (isset($_GET['so']) ? $_GET['so'] : 'nf');
	$sel = ' selected="selected"';
	echo '<div class="buildList" style="width:auto;margin:8px;">';
	echo '<h1 class="nomargin">Saved Builds</h1><hr>';
	echo '<div class="small"><form name="sform">Search by ';
	echo '<select name="sb">
		<option value="sl"'.($sb == 'sl' ? $sel : '').'>Soul Level</option>
		<option value="vt"'.($sb == 'vt' ? $sel : '').'>Vitality</option>
		<option value="at"'.($sb == 'at' ? $sel : '').'>Attunement</option>
		<option value="en"'.($sb == 'en' ? $sel : '').'>Endurance</option>
		<option value="st"'.($sb == 'st' ? $sel : '').'>Strength</option>
		<option value="dx"'.($sb == 'dx' ? $sel : '').'>Dexterity</option>
		<option value="rs"'.($sb == 'rs' ? $sel : '').'>Resistance</option>
		<option value="it"'.($sb == 'it' ? $sel : '').'>Intelligence</option>
		<option value="ft"'.($sb == 'ft' ? $sel : '').'>Faith</option>
		<option value="hp"'.($sb == 'hp' ? $sel : '').'>HP</option>
		<option value="pr"'.($sb == 'pr' ? $sel : '').'>Physical Def</option>
		<option value="sd"'.($sb == 'sd' ? $sel : '').'>Strike Def</option>
		<option value="sa"'.($sb == 'sa' ? $sel : '').'>Slash Def</option>
		<option value="su"'.($sb == 'su' ? $sel : '').'>Thrust Def</option>
		<option value="md"'.($sb == 'md' ? $sel : '').'>Magic Def</option>
		<option value="fd"'.($sb == 'fd' ? $sel : '').'>Flame Def</option>
		<option value="ld"'.($sb == 'ld' ? $sel : '').'>Lighting Def</option>
		<option value="po"'.($sb == 'po' ? $sel : '').'>Poise</option>
		<option value="br"'.($sb == 'br' ? $sel : '').'>Bleed Res</option>
		<option value="pi"'.($sb == 'pi' ? $sel : '').'>Poison Res</option>
		<option value="cu"'.($sb == 'cu' ? $sel : '').'>Curse Res</option>
		</select>';
	echo ' with ';
	echo '<select name="wi">
		<option value="ev"'.($wi == 'ev' ? $sel : '').'>an exact value</option>
		<option value="ar"'.($wi == 'ar' ? $sel : '').'>a range</option>
		<option value="wi"'.($wi == 'wi' ? $sel : '').'>values between</option>
		<option value="el"'.($wi == 'el' ? $sel : '').'>everything less</option>
		<option value="em"'.($wi == 'em' ? $sel : '').'>everything more</option>
		</select> ';
	echo 'to find builds from ';
	echo '<input type="text" name="vals" id="svals" value="'.(isset($_GET['vals']) ? $_GET['vals'] : '120').'" size="9" maxlength="10" /> ';
	echo 'sort by ';
	echo '<select name="so">
		<option value="nf"'.($so == 'nf' ? $sel : '').'>Newest First</option>
		<option value="of"'.($so == 'of' ? $sel : '').'>Oldest First</option>
		<option value="hr"'.($so == 'hr' ? $sel : '').'>Highest Rated</option>
		<option value="lr"'.($so == 'lr' ? $sel : '').'>Lowest Rated</option>
		</select>';
		
	echo ' <input type="submit" id="searchs" value="Search" title="Search" /><span class="fright small faded shelp tip">help</span></form></div>';
	echo '<hr><div class="kright"><span class="fleft">'.$toNums.'</span>'.substr($nav,0,-1).'</div>';
	echo '<div class="buildrow clearfix buildrow2 buildrow3" style="border-bottom: 1px solid #CCCCCC;"><div class="buildtitle faded small">Title</div> <div class="buildauth faded small">Author</div> <div class="builddate faded small">Date</div><div class="clear"></div></div>';
	$d = 0;
	while($data = mysql_fetch_array($query)){
		$d++;
		echo '<div class="buildrow clearfix"><div class="buildtitle bold"><a href="/darksouls/?c='.$data['ref'].'">'.$data['title'].'</a></div> <div class="buildauth">';
			$user = $data['auth'];
			$nuser = preg_replace('/[^a-zA-Z0-9\-\_ ]/si' , '', $user);
			if($user != $nuser || $user == 'Anonymous'){
				echo $data['auth'];
			} else {
				//$d = (ctype_digit($data['accType']) ? '<a href="/darksouls/profile?u='.rawurlencode($data['auth']).'"><span class="userico '.($data['accType'] == 1 || $data['accType'] == 2 ? 'r' : 'g') .'"></span></a>' : '');
				$d = (ctype_digit($data['accType']) ? '<span class="userico '.($data['accType'] == 1 || $data['accType'] == 2 ? 'r' : 'g') .'"></span>' : '');
				if(isset($data['accType']) && ($data['accType'] == 2 || $data['accType'] == 1))
					echo "<a href='/darksouls/share?uid=".rawurlencode($data['auth'])."' style='color:#dd5b5b;'>".$data['auth']."</a>".$d;
					
				else
					echo "<a href='/darksouls/share?uid=".rawurlencode($data['auth'])."'>".$data['auth'].'</a>'.$d;
			}
		echo '</div> <div class="builddate">'.date("M j, Y",strtotime($data['time'])).'</div><div class="clear"></div>';
		if($data['soullevel'] != 0){
			echo '<div class="small buildtitle">SL <strong>'.$data['soullevel'].'</strong> (<strong>'.$data['vitality'].'</strong>/<strong>'.$data['attunement'].'</strong>/<strong>'.$data['endurance'].'</strong>/<strong>'.$data['strength'].'</strong>/<strong>'.$data['dexterity'].'</strong>/<strong>'.$data['resistance'].'</strong>/<strong>'.$data['inteligence'].'</strong>/<strong>'.$data['faith'].'</strong>)</div>';
			echo '<div class="small buildauth faded"><span class="kvot black n'.$data['ref'].'">'.$data['totalof'].'</span> points | <div class="votearrows vup" title="'.$data['ref'].'"></div> <div class="votearrows vdo" title="'.$data['ref'].'"></div> | <span class="nvot n'.$data['ref'].'">'.$data['numvotes'].'</span> votes <span class="tvut black hidden n'.$data['ref'].'">Already Voted</span></div>';
			if(isset($_COOKIE['user']) && isset($_COOKIE['token'])){
				if(!empty($data['refid'])){
					echo '<div class="builddate small faded">favorited</div>'; // [<A href="#'.$data['ref'].'" class="rf" rel="nofollow">remove</a>]</div>';
				} else {
					echo '<div class="builddate small faded">[<a href="#'.$data['ref'].'" class="favorites" rel="nofollow">favorite</a>]</div>';
				}
			}
		}
		echo '</div>';
		if($d == 50){
			echo '<div style="margin: 3px 0;text-align:center">
			<script type="text/javascript"><!--
			google_ad_client = "ca-pub-4232842687468843";
			/* buildsad */
			google_ad_slot = "1698681574";
			google_ad_width = 728;
			google_ad_height = 90;
			//-->
			</script>
			<script type="text/javascript"
			src="//pagead2.googlesyndication.com/pagead/show_ads.js">
			</script>
			</div>';
		}
	}
	if(mysql_num_rows($query) == 0){
		echo '<div class="center"><h2>No builds here...</h2></div>';
	}
	echo '<hr><div class="kright">'.substr($nav,0,-1).'</div>';
	echo '</div>';
?>