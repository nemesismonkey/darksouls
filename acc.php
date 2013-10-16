<?php
ini_set('session.cookie_domain', '.mugenmonkey.com');
	require('inc/timeasset.php');
	require('inc/contype.php');
	$error = '';
	if(!isset($_COOKIE['user']) && !isset($_COOKIE['token'])){
		header('Location: /darksouls/');
	} else {
		
	}
	$ltitle = '';
	$stitle = '';
	$shash = '';
	$defhash = '';
	$exhaed = '';
	$urlext = "//mugenmonkey.com/darksouls/";
	$urlt = true;
	$pga = true;
	$ga = <<<TEXT
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
TEXT;

?>

<!doctype html>
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/icon_ex.png"/>
  <title>Dark Souls Character Planner: Account</title>
  <meta name="description" content="Dark Souls character builder.  Gives you the ability to enter nearly everything to build your character from the ground up.  Includes HP, stamina, attunement, armor selector, all your defenses, weapon selector and AR calculator as well as including armor, rings, spells, covenants and weapon effects.">
  <meta name="keywords" content="Dark Souls,darksouls,dks,character builder,stat planner,character creator,dark souls character builder,darksouls character builder,dks character builder,dark souls stat planner,character planner,dark souls character planner, darksouls character planner, dks planner">
  <link type="text/css" rel="stylesheet" href="<?php if($urlt) echo $urlext;?>css/style.css<?php echo $ta['css'];?>" />
  <script src="<?php if($urlt) echo $urlext;?>js/libs/modernizr-2.5.2.min.js"></script>
  <?php if($pga) print($ga); ?>
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
					<div class="padding clearfix">
						<?php 
						ob_start();
						if(isset($_GET['action']) && $_GET['action'] == 'lists'){ 
							require('inc/acc.lists.php');
						}else if(isset($_GET['action']) && $_GET['action'] == 'details'){ 
							require('inc/acc.details.php');
						} else { 
							require('inc/acc.default.php');

						} 
						$out1 = ob_get_contents();
						ob_end_clean();
						?>
						<?php echo $exhaed; ?>
						<h2><?php echo $hdheader; ?></h2>
						<hr class="nomargin" />
						<?php echo $out1; ?>
					
						
					</div>
				</div>
			<div class="clear"></div>
			</div>
	</div>

	<?php include('footer.php'); ?>
	</div>
	<div class="texover"></div>
	<div id="savedia" style="margin-top:-115px">
		<span class="tclos">close</span>
		
		<div class="cpadding">
			<div class="savecl">
			<h3>Make a new list</h3>
			<hr>
				<div><strong>List Title</strong><sup>1</sup> <input type="text" maxlength="50" id="saveTitle" value="" /></div>
				<div class="hidden"><strong>Author</strong><sup>1,2</sup> <input type="text" maxlength="50" id="saveAuthor" value="<?php echo $ltitle; ?>"/></div>
				<div class="clearfix"><button class="cancel" id="fcancel">Cancel</button> <button id="fsave">Create</button></div>
				<div class="datbox"></div>
				<hr>
				<p>Use this to make a new list to sort your builds in.</p>
				<p class="faded small">1: Max length is 50 characters, minimum is 4</p>
			</div>
		</div>
	</div>
	
	<div id="editdia" style="margin-top:-120px">
		<span class="tclos">close</span>
		
		<div class="cpadding">
			<div class="savecl">
			<h3>Rename List</h3>
			<hr>
				<div><strong>New Title</strong><sup>1</sup> <input type="text" maxlength="50" id="renameTitle" value="<?php echo $stitle; ?>" /></div>
				<div class="hidden"><strong>Author</strong><sup>1,2</sup> <input type="text" maxlength="50" id="reAuthor" value="<?php echo $ltitle; ?>"/></div>
				<input type="hidden" value="<?php echo $shash; ?>" id="renamh" />
				<div class="clearfix"><button class="cancel" id="">Cancel</button> <button id="frename">Rename</button></div>
				<div class="datbox"></div>
				<hr>
				<p>Use this to rename your list</p>
				<p class="faded small">1: Max length is 50 characters, minimum is 4</p>
			</div>
		</div>
	</div>
	<div id="deletedia" style="margin-top:-100px">
		<span class="tclos">close</span>
		
		<div class="cpadding">
			<div class="savecl">
			<h3>Delete this List?</h3>
			<hr>
				<div class="hidden"><strong>New Title</strong><sup>1</sup> <input type="text" maxlength="50" id="delTitle" value="<?php echo $stitle; ?>" /></div>
				<div class="hidden"><strong>Author</strong><sup>1,2</sup> <input type="text" maxlength="50" id="delAuthor" value="<?php echo $ltitle; ?>"/></div>
				<input type="hidden" value="<?php echo $shash; ?>" id="delnamh" />
				<input type="hidden" value="<?php echo $defhash; ?>" id="defnamh" />
				<div class="clearfix"><button class="cancel" id="">Cancel</button> <button id="dellist">Delete</button></div>
				<div class="datbox"></div>
				<hr>
				<p>Use this to delete a list you no longer want.  Deleting a list does not delete any of the builds associated with it.</p>
				
			</div>
		</div>
	</div>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="<?php if($urlt) echo $urlext;?>js/libs/jquery-1.7.1.min.js"><\/script>')</script>
	<script src="<?php if($urlt) echo $urlext;?>js/plugins.js<?php echo $ta['plugins'];?>"></script>

  <script src="<?php if($urlt) echo $urlext;?>js/acc.js<?php echo $ta['acc'];?>"></script>
</body>
</html>