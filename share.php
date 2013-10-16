<?php
	require('inc/timeasset.php');
?>
<!doctype html>
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  <title>Dark Souls Character Planner: Saved Builds</title>
  <meta name="description" content="Dark Souls character builder.  Gives you the ability to enter nearly everything to build your character from the ground up.  Includes HP, stamina, attunement, armor selector, all your defenses, weapon selector and AR calculator as well as including armor, rings, spells, covenants and weapon effects.">
  <meta name="keywords" content="Dark Souls,darksouls,dks,character builder,stat planner,character creator,dark souls character builder,darksouls character builder,dks character builder,dark souls stat planner,character planner,dark souls character planner, darksouls character planner, dks planner">
  <link type="text/css" rel="stylesheet" href="css/style.css<?php echo $ta['css'];?>" />
  <script src="js/libs/modernizr-2.5.2.min.js"></script>
  <script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-29538296-1']);
	  _gaq.push(['_trackPageview']);

	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

  </script>
</head>
<body>
<?php include('thead.php'); ?>
	<div id="container">
		<div class="cpadding">
			<header>
				<div class="infobox"><?php include('info.php'); ?></div>
				<a href="./"><img src="//static.mugenmonkey.com/img/_logo.png" width="362" height="82" class="logo" /></a>
				
			</header>
			<?php include('nav.php'); ?>
			<div role="main" id="content">
				
		<?php
		$error = '';
		if(isset($_GET['uid']) || isset($_GET['lid'])) {
		$offMod = 10;

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
		if(isset($_GET['uid'])) {
			$user = $_GET['uid'];
			$nuser = preg_replace('/[^a-zA-Z0-9\-\_ ]/si' , '', $user);
			if($user != $nuser){
				$error .= "<div class='deepred center'>Not a valid username</div>";
			} else {
				$where = "`auth`='{$_GET['uid']}' AND `public`='1'";
			}
			$typ = 'uid='.rawurlencode($user);
		}else if(isset($_GET['lid'])) {
			$list = $_GET['lid'];
			$nlist = preg_replace('/[^a-zA-Z0-9]/si' , '', $list);
			if($list != $nlist){
				$error .= "<div class='deepred center'>Not a valid list id</div>";
			} else {
				$where = "`listid`='{$_GET['lid']}'";
			}
			$typ = 'lid='.$list;
		}
		if(empty($error)){
			if(isset($_COOKIE['user']) && isset($_COOKIE['token'])){
				$toekn = $_COOKIE['token'];
			} else {
				$toekn = false;
			}
			if($toekn) {
				$query = mysql_query("SELECT `saved_builds`.*,`favorites`.`refid`,`favorites`.`nameid`,`users`.`accType` FROM `saved_builds` LEFT JOIN `favorites` ON `saved_builds`.`ref` = `favorites`.`refid` AND `favorites`.`nameid` = '$toekn' LEFT JOIN `users` ON `saved_builds`.`owner` = `users`.`namehash` WHERE `saved_builds`.$where ORDER BY `id` DESC LIMIT {$offset}, {$offMod}");
			} else {
				$query = mysql_query("SELECT `saved_builds`.*,`users`.`accType` FROM `saved_builds` LEFT JOIN `users` ON `saved_builds`.`owner` = `users`.`namehash` WHERE $where ORDER BY `id` DESC LIMIT {$offset}, {$offMod}") or die(mysql_error());
			}
			$count = mysql_fetch_array(mysql_query("SELECT COUNT(*) FROM `saved_builds` WHERE $where ORDER BY `id` DESC"));
			
			$maxPage = ceil($count[0]/$offMod);
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
				  $nav .= " <a href=\"/darksouls/share?$typ&p=$pageNum\">$pageNum</a> |";
			   }
			}*/
			$exParams = '&'.$typ;
			if($page == 1) {
			$nav .= " <span class='black'>$page</span> |";
			for($i = 2; $i <= 15; $i++){
				if($i <= $maxPage)
				$nav .= " <a href=\"/darksouls/share?p=$i".$exParams."\">$i</a> |";
			}
			if($i <= $maxPage)
			$nav .= " ... <a href=\"/darksouls/share?p=$maxPage".$exParams."\">$maxPage</a> |";
			}else {
				if($page > 10){
					$nav .= " <a href=\"/darksouls/share?p=1".$exParams."\">1</a> ... | ";
					if($page == $maxPage) {
						for($i = $page - 10; $i < $page; $i++){
							$nav .= " <a href=\"/darksouls/share?p=$i".$exParams."\">$i</a> |";
						}
					} else if($page >= $maxPage - 5) {
						for($i = $page - (10 + ($page - $maxPage)); $i < $page; $i++){
							$nav .= " <a href=\"/darksouls/share?p=$i".$exParams."\">$i</a> |";
						}
					} else {
						for($i = $page - 6; $i < $page; $i++){
							$nav .= " <a href=\"/darksouls/share?p=$i".$exParams."\">$i</a> |";
						}
					}
					$nav .= " <span class='black'>$page</span> |";
					for($i = $page + 1; $i < $page + 7; $i++){
						if($i <= $maxPage)
						$nav .= " <a href=\"/darksouls/share?p=$i".$exParams."\">$i</a> |";
					}
					if($i == $maxPage)
						$nav .= " <a href=\"/darksouls/share?p=$maxPage".$exParams."\">$maxPage</a> |";
					if($i < $maxPage)
						$nav .= " ... <a href=\"/darksouls/share?p=$maxPage".$exParams."\">$maxPage</a> |";
				} else {
					if($page > 1 && $page <= 10) {
						for($i = 1; $i < $page; $i++){ 
							if($i <= $maxPage)
							$nav .= " <a href=\"/darksouls/share?p=$i".$exParams."\">$i</a> |";
						}
						$nav .= " <span class='black'>$page</span> |";
						for($i = $i + 1; $i < $page + 7 + (9 - $page); $i++){ 
						if($i <= $maxPage)
							$nav .= " <a href=\"/darksouls/share?p=$i".$exParams."\">$i</a> |";
						}
						if($i <= $maxPage)
						$nav .= " ... <a href=\"/darksouls/share?p=$maxPage".$exParams."\">$maxPage</a> |";
					}
				}
			}
			
			$curNum = ($page - 1) * $offMod;
			$toNums = $curNum.' - '.($curNum + $curCount).' of '.$count[0];
			if(isset($_GET['uid'])) {
				$btitle = '<h1 class="nomargin">Showing Builds by '.$_GET['uid'].'</h1>';
			}else if(isset($_GET['lid'])) {
				$listTitle = mysql_fetch_row(mysql_query("SELECT `listtitle` FROM `lists` WHERE $where LIMIT 1"));
				if($listTitle[0]){
					$btitle = '<h1 class="">Showing List "'.$listTitle[0].'"</h1>';
				} else {
					$btitle = '<h1 class="">List does not exist</h1>';
				}
			}
			echo '<div class="buildList" style="width:auto;margin:8px;">'.$btitle.'<hr>';
			echo '<div class="buildrow clearfix buildrow2 buildrow3" style="border-bottom: 1px solid #CCCCCC;"><div class="buildtitle faded small">Title</div> <div class="buildauth faded small">Author</div> <div class="builddate faded small">Date</div><div class="clear"></div></div>';
			while($data = mysql_fetch_array($query)){
				echo '<div class="buildrow clearfix"><div class="buildtitle bold"><a href="/darksouls/?c='.$data['ref'].'">'.$data['title'].'</a></div> <div class="buildauth">';
				$user = $data['auth'];
				$nuser = preg_replace('/[^a-zA-Z0-9\-\_ ]/si' , '', $user);
				if($user != $nuser || $user == 'Anonymous'){
					echo $data['auth'];
				} else {
					if(isset($data['accType']) && $data['accType'] == 2)
						echo "<a href='/darksouls/share?uid=".rawurlencode($data['auth'])."' style='color:#dd5b5b;'>".$data['auth']."</a>";
					else
						echo "<a href='/darksouls/share?uid=".rawurlencode($data['auth'])."'>".$data['auth'].'</a>';
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
			}
			if(mysql_num_rows($query) == 0){
				echo '<div class="center"><h2>No builds here...</h2></div>';
			}
			echo '<div class="kright">'.substr($nav,0,-1).'</div>';
			echo '</div>';
		} else {
			echo $error."<div class='deepred center'><a href='/darksouls/'>Return</a></div>";
		}
		
	} else {
		echo "<div class='deepred center'>No list or username selected.  No data to retrieve.<br/><a href='/darksouls/'>Return</a></div>";
	}
?>
	
		</div>
	</div>
	
	<?php include('footer.php'); ?>
	</div>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('js/libs/jquery-1.7.1.min.js"><\/script>')</script>
	<script src="js/vf.js<?php echo $ta['vf'];?>"></script>
</body>
</html>