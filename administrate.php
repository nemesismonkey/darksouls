<?php
	$http = (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] == "on" ? 'https://' : 'http://');
	if(isset($_COOKIE['user']) && !empty($_COOKIE['user']) && isset($_COOKIE['token']) && !empty($_COOKIE['token'])) {
		require('inc/timeasset.php');
		require('inc/contype.php');
		$toekn = $_COOKIE['token'];
		$admin = mysql_fetch_array(mysql_query('SELECT `users`.`accType` FROM `users` WHERE `namehash`="'.$toekn.'" LIMIT 1'));
		if($admin[0] == 1 || $admin[0] == 2){
			
		} else {
			header('Location: '.$http.'mugenmonkey.com/darksouls/');
		}
	} else {
		header('Location: '.$http.'mugenmonkey.com/darksouls/');
	}
?>
<!doctype html>
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  <title>Dark Souls Character Planner: Frequently Asked Questions</title>
  <meta name="description" content="Dark Souls Character Planner.  Gives you the ability to enter nearly everything to build your character from the ground up.  Includes HP, stamina, attunement, armor selector, all your defenses, weapon selector and AR calculator as well as including armor, rings, spells, covenants and weapon effects.">
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
			<div class="over analy">
				<h2>Administartive Panel</h2>
					
				<div class="padding">
				<hr>
				<?php
					//needed controls: banning, name purge, title purge, descripting purge, deleteing build, hiding build
					
					
					if(isset($_COOKIE['user']) && !empty($_COOKIE['user']) && isset($_COOKIE['token']) && !empty($_COOKIE['token']) && isset($_GET['t']) && !empty($_GET['t']) && isset($_GET['i']) && !empty($_GET['i'])){
						//$admin = mysql_fetch_array(mysql_query('SELECT `users`.`accType` FROM `users` WHERE `namehash`="'.$toekn.'" LIMIT 1'));
						if($admin[0] == 1 || $admin[0] == 2) {
							echo '<div class="clearfix">
				<div class="bold">Taking an action:</div>';
							$buildData = mysql_fetch_array(mysql_query('SELECT `s`.auth,s.title,s.public,s.ip,s.owner FROM `saved_builds` as s WHERE `ref`="'.$_GET['i'].'" LIMIT 1'));
							//echo '<pre>';
							//print_r($buildData);
							//echo '</pre>';
							$auth = $buildData['auth'];
							$title = $buildData['title'];
							$public = $buildData['public'];
							$ip = $buildData['ip'];
							$owner = $buildData['owner'];
							$ref = $_GET['i'];
							
							if($_GET['t'] == 'ban'){   // Ban user
								if(!empty($owner)){
									mysql_query("UPDATE `users` SET `accType`='99' WHERE `namehash`='{$owner}'");
								}
								
									mysql_query("INSERT INTO `bannedips` (`ip`,`dtime`,`duration`,`reason`) VALUES ('$ip',NOW(),'9999','Unsuitable username'");
								echo '<p>User has been banned</p>';
							} else if($_GET['t'] == 'ap'){ // Purge author name
								if(mysql_query("UPDATE `saved_builds` SET `auth`='Anonymous' WHERE `ref`='{$ref}'"))
									echo '<p>Author name has been reset to Anonymous</p>';
							} else if($_GET['t'] == 'bp'){ // Purge build title
								if(mysql_query("UPDATE `saved_builds` SET `title`='Untitled' WHERE `ref`='{$ref}'"))
									echo '<p>Build title has been reset to Untitled</p>';
							} else if($_GET['t'] == 'bd'){ // Purge buld description
								if(mysql_query("UPDATE `saved_builds` SET `desci`='' WHERE `ref`='{$ref}'"))
									echo '<p>Build description has been purged</p>';
							} else if($_GET['t'] == 'del'){ // Delete build
								if(mysql_query("DELETE FROM `saved_builds` WHERE `ref`='{$ref}'"));
									echo '<p>Build has been removed from the database</p>';
							} else if($_GET['t'] == 'hid'){ // Hide build
								if(mysql_query("UPDATE `saved_builds` SET `public`='0' WHERE `ref`='{$ref}'"))
									echo '<p>Build has been hidden from public view</p>';
							}	
						}
						
						echo '</div><hr>';
					}
				?>
				
				<div class="clearfix">
				<div class="bold">Flagged Comments</div>
				<?php
					$flagged = mysql_query('SELECT `id`,`username`,`datet`,`comment`,`postid` FROM `comments` WHERE `flagged` > 0 ORDER BY `id` DESC LIMIT 0, 50');
					if($flagged){
						echo '<div>';
						$num = mysql_num_rows($flagged);
						if($num == 0)
							echo '<div><h2>No posts have been flagged</h2></div>';
						while($neu = mysql_fetch_array($flagged)){
							//$rgb = $neu['ip'];
							echo '<div class="padding small" style="background:#E7E7E7;margin:10px 0;padding: 7px;">
								<div>
									Author: '.$neu['username'].' - 
									<a href="/darksouls/?c='.$neu['postid'].'#com'.$neu['id'].'" _target="blank">Comment Link</a> -
									<a href="#" class="del" data-post="'.$neu['id'].'">Delete Comment</a> - 
									<a href="#" class="del unfl" data-post="'.$neu['id'].'">Unflag Comment</a>
								</div>';
							echo '<div >Comment</div>
								<blockquote class="small">'.stripslashes(html_entity_decode($neu['comment'])).'</blockquote></div>';
						}
						echo '</div>';
					}
				
				?>
				</div>
				<hr>
				<div class="clearfix">
				<div class="bold">Newest users: limited to 50</div>
				<?php
					$newusers = mysql_query('SELECT `id`,`username`,`datei`,`ip` FROM `users` ORDER BY `id` DESC LIMIT 0, 50');
					if($newusers){
						echo '<ul class="small fldul">';
						while($neu = mysql_fetch_array($newusers)){
							//$rgb = $neu['ip'];
							$rgbe = explode('.',$neu['ip']);
							
							$rgb = $rgbe[0].','.$rgbe[1].','.$rgbe[2];
							echo '<li title="ip: '.$neu['ip'].' date: '.date('M d, Y-h:iA', strtotime($neu['datei'])+10800).'" class="big"><div class="ipbg" style="background:rgb('.$rgb.')"></div> <a href="/darksouls/share?uid='.$neu['username'].'">'.$neu['username'].'</a></li>';
						}
						echo '</ul>';
					}
				
				?>
				</div>
				<hr>
				<div class="clearfix">
				<div class="bold">Newest Builds: limited to 100</div>
				<?php
					$latestBuilds = mysql_query('SELECT `id`,`auth`,`ref`,`ip`,`time`,`title` FROM `saved_builds` WHERE `public`!="0" ORDER BY `id` DESC LIMIT 0, 100');
					if($latestBuilds){
						echo '<ul class="small fldul">';
						while($neb = mysql_fetch_array($latestBuilds)){
							
							$trimmedTitle = $neb['title'];
							if(strlen($trimmedTitle) > 13) {
								//$trimmedTitle = substr($trimmedTitle,0,11).'...';
							}
							//$rgb = $neu['ip'];
							$rgbe = explode('.',$neb['ip']);
							$rgb = $rgbe[0].','.$rgbe[1].','.$rgbe[2]; //<div class="ipbg" style="background:rgb('.$rgb.')"></div>
							echo '<li title="ip: '.$neb['ip'].' date: '.date('M d, Y-h:iA', strtotime($neb['time'])+10800).' buildname: '.$neb['title'].'"> <a href="/darksouls/?c='.$neb['ref'].'">'.$trimmedTitle.'</a></li>';
						}
						echo '</ul>';
					}
				
				?>
				</div>
				
				</div>
			</div>
		</div>
	</div>
	<?php include('footer.php'); ?>
	</div>
	
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>
	<script type="text/javascript">
	$('.del').click(function(){
		var t = this;
		var post = t.getAttribute('data-post');
		var g = ($(t).hasClass('unfl') ? true : false);
		$.ajax({
			type: "GET",
			url: (!g ? '/darksouls/delPost.php' : '/darksouls/unlfagPost.php'),
			data: {postid : post},
			success: function(data){
				if(data == '1') {
					$(t).parent().parent().fadeOut(300,function(){
						$(this).remove();
					});
				}
			},
			dataType: 'html'
		});
		return false;
	});
	</script>
  
</body>
</html>