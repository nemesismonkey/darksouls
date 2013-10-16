<?php
	require('inc/timeasset.php');
	require('inc/contype.php');
	$lists = false;
		$upmethod = 'new';

	if(isset($_COOKIE['user']) && isset($_COOKIE['token'])){
		$token = $_COOKIE['token'];
		$allLists = mysql_query("SELECT * FROM `lists` WHERE `owner`='{$token}' ORDER BY `id` ASC");
		if(mysql_num_rows($allLists) == 0){
			$lists = false;
			$upmethod = 'new';
		}else{
			$lists = '';
			while($data = mysql_fetch_array($allLists)){
				$lists .= '<option value="'.$data['listid'].':::::'.$data['listtitle'].'">'.$data['listtitle'].'</option>';
			}
			$upmethod = 'dif';
		}
	}
?>
<!doctype html>
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  <title>Dark Souls Character Planner: Locally Saved Builds</title>
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
			
			<div class="buildList" style="margin:0;width:auto;">
			<h1>Locally Saved Builds</h1>			
			<div class="buildrow clearfix buildrow2 buildrow3" style="border-bottom: 1px solid #CCCCCC;"><div class="buildtitle faded small">Title</div> <div class="buildauth faded small">Controls</div> <div class="builddate faded small">Date</div><div class="clear"></div></div>
			
			
				<div id="local_rows">
					
				</div>
			</div>
			
			<div id="savedia" style="margin:-180px 0 0 -255px">
					<span class="tclos">close</span>
					
					<div class="cpadding">
						<div class="savecl">
						<h3>Upload your build: Verify details</h3>
						<hr>
						<?php if($lists){ ?>
								
							<div><strong>Title</strong><sup>1</sup> <input type="text" maxlength="50" id="saveTitle" value="Untitled" /></div>
							<div><strong>Author</strong> <span class="toright"><?php echo $_COOKIE['user']; ?></span><input type="hidden" id="saveAuthor" value="<?php echo $_COOKIE['user']; ?>"/><input type="hidden" id="saveAuthorH" value="<?php echo $_COOKIE['token']; ?>"/></div>
							<?php if(strlen($lists) > 0) echo '<div><strong>Add to list</strong> <select class="right" id="lSelec">'. $lists .'</select> or </div>'; ?>
							
							<div>Make new list<input type="text" maxlength="25" id="savelist" value="New List title..." placeholder="New List title..." style="color:#aaa;" /></div>
							<div style="position:relative;"> <div class="overit">Make public? <input type="checkbox" id="savePublic" checked="checked" /></div><textarea id="sevdes" maxlength="2000" lengthcut="true" style="width:100%;display:block;height:80px;font-size:13px;" placeholder="Short description, notes or things related to your build. Can include plain links."></textarea></div>
							<div class="clearfix"><button class="cancel" id="fcancel">Cancel</button> <button id="fsave">Save</button></div>
							
							<div class="datbox"></div>
							<hr>
								
							<?php } else { ?>
							<div><strong>Title</strong><sup>1</sup> <input type="text" maxlength="50" id="saveTitle" value="Untitled" /></div>
							<div><strong>Author</strong><sup>1,2</sup> <input type="text" maxlength="50" id="saveAuthor" value="Anonymous"/></div>
							<div style="position:relative;"> <div class="overit">Make public? <input type="checkbox" id="savePublic"/></div><textarea id="sevdes" maxlength="2000" style="width:100%;display:block;height:80px;font-size:13px;" placeholder="Short description, notes or things related to your build. Can include plain links."></textarea></div>
							
							<div class="clearfix"> <button class="cancel" id="fcancel">Cancel</button> <button id="fsave">Save</button></div>
							<div class="datbox"></div>
							<hr>
							<?php } ?>
						</div>
					</div>
				</div>
		</div>
	</div>
	
	<?php include('footer.php'); ?>
	</div>
	<div class="texover"></div>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>
<script src="js/j.ts.js<?php echo $ta['jts'];?>"></script>
<script src="js/lstore.js<?php echo $ta['lstore'];?>"></script>

</body>
</html>