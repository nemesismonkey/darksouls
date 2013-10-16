<?php 
	ini_set('session.cookie_domain', '.mugenmonkey.com');
	$user = $_COOKIE['user'];
	$token = $_COOKIE['token'];
	$hdheader = 'My Lists';
	$query = mysql_query("SELECT ownership FROM `users` WHERE `namehash`='{$token}' AND `username`='{$user}'");
	$userdata = mysql_fetch_object($query);
	$over = false;
	if($userdata->ownership == 0 && $over){
		echo '<p>You have not attempted to take ownership yet. You must do this before you can view any of your builds</p><p class="center"><strong><a href="/darksouls/take">Take ownership</a></strong></p>
		<p class="small">This will attempt to take ownership of any builds you previously made.  It works by comparing your current ip address to your past address.
		If you have a static ip then most if not all your previous builds will be imported to you, otherwise this may not pull all of your builds.</p>
		<hr>';
	} else {
		
		$offMod = 30;

		if(isset($_GET['p'])){
			$page = filter_var($_GET['p'],FILTER_VALIDATE_INT);
			if(empty($page))
				$page = 1;
			$offset = ($page - 1) * $offMod;
		} else {
			$page = 1;
			$offset = 0;
		}
		$token = $_COOKIE['token'];
		$ltitle = $user = $_COOKIE['user'];
		$q = '`s`.`ref`, `s`.`title`, `s`.`public`, `s`.`time`, `s`.`listtitle`';
		$cq = 'SUM(IF(UNIX_TIMESTAMP(c.datet) >= s.lastVbyOwner , 1 , 0)) as `new`,`c`.`id`,`c`.`datet`';
		//SUM(IF(UNIX_TIMESTAMP(c.datet) < s.lastVbyOwner , 1 , 0)) as `old`,

		$cqj = 'LEFT JOIN `comments` as c ON `c`.`postid`=`s`.`ref`';
		$g = 'GROUP BY `s`.`ref`';
		if(isset($_GET['list'])){
			$lis = '';
			if($_GET['list'] != 'all'){
				//$query = mysql_query("SELECT $q FROM `saved_builds` as s WHERE `owner`='{$token}' AND `listid`='{$_GET['list']}' ORDER BY `id` DESC LIMIT {$offset}, {$offMod}");
				//$count = mysql_fetch_array(mysql_query("SELECT COUNT(*) FROM `saved_builds` WHERE `owner`='{$token}' AND `listid`='{$_GET['list']}' ORDER BY `id` DESC"));
				$listData = mysql_fetch_object(mysql_query("SELECT * FROM `lists` WHERE `owner`='{$token}' AND `listid`='{$_GET['list']}'"));
				
				$lis =  "AND `listid`='{$_GET['list']}'";
			} 
				
			
				$query = mysql_query("SELECT $q,$cq FROM `saved_builds` as s $cqj WHERE `s`.`owner`='{$token}' $lis $g ORDER BY `s`.`id` DESC LIMIT {$offset}, {$offMod}");
				$count = mysql_fetch_array(mysql_query("SELECT COUNT(*) FROM `saved_builds` WHERE `owner`='{$token}' $lis ORDER BY `id` DESC"));
			
			//$listData = (object) array('listtitle'=>'All Builds','listid'=>$user);
			if(!isset($listData->listtitle)){
					$listData = (object) array('listtitle'=>'All Builds','listid'=>$user);
				}
		} else {
			$listData = mysql_query("SELECT * FROM `lists` WHERE `owner`='{$token}' AND `defaulti`='1'");
			if(mysql_num_rows($listData) == 0){
				$listData = (object) array('listtitle'=>'All Builds','listid'=>$user);
			} else {
				$listData = mysql_fetch_object($listData);
			}
			$query = mysql_query("SELECT $q,$cq FROM `saved_builds` as s $cqj WHERE `owner`='{$token}' AND `listid`='{$listData->listid}' $g ORDER BY s.`id` DESC LIMIT {$offset}, {$offMod}");
			$count = mysql_fetch_array(mysql_query("SELECT COUNT(*) FROM `saved_builds` WHERE `owner`='{$token}' AND `listid`='{$listData->listid}' ORDER BY `id` DESC"));
		}
		$count = $count[0];
		if($count == 0 && !isset($_GET['list'])){
			$query = mysql_query("SELECT $q,$cq FROM `saved_builds` as s $cqj WHERE `owner`='{$token}'  $g ORDER BY s.`id` DESC LIMIT {$offset}, {$offMod}");
			$count = mysql_num_rows(mysql_query("SELECT id FROM `saved_builds` WHERE `owner`='{$token}' ORDER BY `id` DESC"));
			$listData = (object) array('listtitle'=>'All Builds','listid'=>$user);
		}
		$stitle = $listData->listtitle;
		$shash = $listData->listid;
		if(isset($_GET['list'])){
			$defhash = $_GET['list'];
		} else
			$defhash = '0';
		
		$hdheader .= ' - Viewing List "' . $listData->listtitle . '"';
		$exhaed = '<div class="toright small tright" style="margin-top:40px;"><a href="#" id="makenewlist">Make new list</a>';
		if(isset($_GET['list']) && $_GET['list'] != 'all'){
			$exhaed .= ' | <a href="#" id="renamelist">Rename list</a> | <a href="#" id="deletelist">Delete list</a>';
		} else if(!isset($_GET['list']) && $stitle != 'All Builds'){
			$exhaed .= ' | <a href="#" id="renamelist">Rename list</a> | <a href="#" id="deletelist">Delete list</a>';
		}
		$exhaed .= '</div>';
		$allLists = mysql_query("SELECT * FROM `lists` WHERE `owner`='{$token}' ORDER BY `id` ASC LIMIT 0 , 1000");
		$maxPage = ceil($count/$offMod);
		$curCount = mysql_num_rows($query);
		// print the link to access each page
		$nav  = '';

		for($pageNum = 1; $pageNum <= $maxPage; $pageNum++)
		{
		   if ($page == $pageNum)
		   {
			  $nav .= " <span class='black'>$page</span> |";
		   }
		   else
		   {
			if(isset($_GET['list'])){
			  $nav .= " <a href=\"/darksouls/account?action=lists&list={$_GET['list']}&p=$pageNum\">$pageNum</a> |";
			} else {
				$nav .= " <a href=\"/darksouls/account?action=lists&p=$pageNum\">$pageNum</a> |";
			}
		   }
		}
		$curNum = ($page - 1) * $offMod;
		$toNums = $curNum.' - '.($curNum + $curCount).' of '.$count;
		$options = '';
		?>
		<div class="leftcol">
		<div class="buildList2 expadd" style="margin-bottom:15px;">
			<div class="faded small">Share Link</div>
			<div><input type="text" style="width:100%;" id="slinks" value="mugenmonkey.com/darksouls/share?<?php if(isset($_GET['list']) && $_GET['list'] == 'all'){echo 'uid='. $listData->listid;}else {echo 'lid='. $listData->listid;} ?>"/></div>
		</div>
		
		<div class="buildList2 expadd">
			<div class="listtitle">Build Lists</div>
			<?php while($data = mysql_fetch_array($allLists)){
				$sel = '';
				$act = '';
				if($data['listtitle'] == $listData->listtitle || isset($_GET['list']) && $data['listid'] == $_GET['list']){
					$sel = ' selected="selected"';
					$act = ' active';
				}
				echo '<div class="buildrow clearfix'.$act.'"><div class="buildtitle full buildrow2"><a href="/darksouls/account?action=lists&list='.$data['listid'].'">'.$data['listtitle'].'</a></div></div>';
				
				$options .= '<option value="'.$data['listid'].'"'.$sel.'>'.$data['listtitle'].'</option>';
			}
				$act = '';
				if(isset($_GET['list']) && $_GET['list'] == 'all' || !isset($_GET['list']) && $stitle == 'All Builds')
					$act = ' active';
			echo '<div class="buildrow clearfix'.$act.'"><div class="buildtitle full buildrow2"><a href="/darksouls/account?action=lists&list=all">All Builds</a></div></div>';
			?>
		</div>
		</div>
		<?php
		echo '<div class="rightcol"><div class="buildList2">';
		if($curCount == 0){
			echo '<div class="center"><h2>No builds added yet</h2><br/><br/></div>';
		} else {
			echo '<div class="buildrow3 small faded"><input type="checkbox" value="1" id="checktogle" /> <input type="button" id="hide" name="hide" value="Make private" /> | <input type="button" id="unhide" name="hide" value="Make public" /> | <input type="button" name="delete" id="delete" value="Delete Selected" />'.(strlen($options) > 0 ? ' | Move selected to <select id="movt">'.$options.'</select><input type="button" name="go" id="move" value="Move" />' : '').'</div>';
			echo '<div class="kright hidden">'.substr($nav,0,-1).'</div>';
			echo '<div class="buildrow3 clearfix" style="border-bottom: 1px solid #CCCCCC;"><div class="buildtitle faded small buildrow2 full">Title</div> <div class="builddate faded small">Date</div><div class="clear"></div></div>';
			while($data = mysql_fetch_array($query)){
				echo '<div class="buildrow clearfix"><div class="buildtitle buildrow2 full"><input type="checkbox" value="'.$data['ref'].'" /> <a href="/darksouls/?c='.$data['ref'].'">'.stripslashes($data['title']).'</a>'.($data['new'] > 0 ? ' <span class="green small bold" style="font-family:verdana;font-size:11px"><sup>('.$data['new'].' new comment'.($data['new'] > 1 ? 's' : '').')</sup></span>' : '').' </span><span class="faded small toright">';
				if($data['public']==0) echo '(private)'; if(isset($_GET['list']) && $_GET['list'] == 'all' || !isset($_GET['list']) && $stitle == 'All Builds') echo '('.$data['listtitle'].')';
				echo '</span></div> <div class="builddate">'.date("M j, Y",strtotime($data['time'])).'</div><div class="clear"></div></div>';
			}
			
			echo '<div class="kright">'.substr($nav,0,-1).'</div>';
		}
		echo '</div></div><div class="clear"></div>';

	}

?>