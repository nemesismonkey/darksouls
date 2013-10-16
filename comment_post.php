<?php
	date_default_timezone_set('America/New_York');
	ini_set('session.cookie_domain', '.mugenmonkey.com');
	require('inc/timeasset.php');
	require('inc/contype.php');
	if(isset($_SERVER['HTTP_X_REQUESTED_WITH']))
		$ajax = ($_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest');
	else
		$ajax = false;
	
	function sendAjaxResponse($added) {
		header("Content-Type: application/json");
		if($added) {
			header( 'Status: 201' );
			echo( json_encode($added) );
		}
		else {
			header( 'Status: 400' );
		}
	}
	
	function refineUrls($inText,$attributes=array()){
		// define an url regular exression pattern:
		$urlPattern = "/(https?:\/\/|www.)(www.)?([-a-z0-9]*[a-z0-9]\.)[^\s]*/";
		// get all matches
		preg_match_all($urlPattern, $inText, $temp);
		$temp = $temp[0]; // an array of all urls
		$attrs = '';
		foreach ($attributes as $attribute => $value) {
			$attrs .= " {$attribute}='{$value}'";
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
			$urlTag[] = "<a href='$url'".$attrs.">$urlShort</a>";
		}
		if(0 < sizeof($temp)){
			// if there are any urls in the text, replace them with the new code
			return strtr($inText, array_combine($temp, $urlTag));
		} else {
			return $inText;
		}
	} 
	function preVal($STRING){
		$NSTRING = preg_replace('/[^a-zA-Z0-9\-\_\s]/si' , '', $STRING);
		if($NSTRING == $STRING)
			return true;
		else
			return false;
	}
	
	function preR($val){
		echo '<pre>';
		print_r($val);
		echo '</pre>';
	}
	
	if(isset($_POST['agent'])){
		if(
		(isset($_POST["emailg"]) && !empty($_POST["emailg"])) ||
		(isset($_POST["emailc"]) && !empty($_POST["emailc"])) ||
		(isset($_POST["namea"]) && !empty($_POST["namea"])) ||
		(isset($_POST["nameb"]) && !empty($_POST["nameb"])) ||
		(isset($_POST["emailx"]) && !empty($_POST["emailx"])) ||
		(isset($_POST["emaily"]) && !empty($_POST["emaily"]))
		) {
			echo json_encode(array('error'=>'<div class="deepred center errr">Possible Bot</div>'));
			die();
		}
			
	}
	
	$error = '';
	$errC = 0;
	$len = strlen($_POST['comment_author']);
	if(preVal($_POST['comment_author']) && $len >=4 && $len <= 25){
		
		$user = mysql_real_escape_string($_POST['comment_author']);
		$piueer = (isset($_COOKIE['user'])) ? $_COOKIE['user'] : false;
		$token = (isset($_COOKIE['token'])) ? $_COOKIE['token'] : false;
		if($user != 'Anonymous'){
			$protectauthor = mysql_query("SELECT COUNT(`id`) FROM `users` WHERE `username`='{$user}'");
			$pmath = mysql_fetch_array($protectauthor);
			if($pmath[0] == 1){
				//make sure this is correct user
				if($piueer != $user){
					echo json_encode(array('error'=>'<div class="deepred center errr">Error uploading: Username protected</div>'));
					die();
				}
			}
		}
		
		$replyto = (isset($_POST['replyto']) ? mysql_real_escape_string($_POST['replyto']) : false);
			
		$notify = (isset($_POST['recieveNoti']) || isset($_POST['recieveNotirep'.$replyto])? 1 : 0);
		
		$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
		
		if($notify > 0 && !$email){
			echo json_encode(array('error'=>'<div class="deepred center errr">You choose to be notified but did\'nt leave an email or your email was invalid</div>'));
			die();
		}
		
			$comment = html_entity_decode($_POST['comment']);
			$comment = strip_tags($comment,'<i><b><strong><sup><sub><em><blockquote>');
			$comment = preg_replace("/<([a-z][a-z0-9]*)[^>]*?(\/?)>/i",'<$1$2>', $comment);
			$comment = str_replace("\r\n", "\n", $comment);
			$comment = str_replace("\r", "\n", $comment);
			$comment = preg_replace("/^&gt;(.+?)(\n|$)/im",'<span class="greentext">&gt;$1</span>$2',htmlentities($comment));
			$comment = html_entity_decode($comment);
			$comment = refineUrls($comment, array("target"=>"_blank","rel"=>"nofollow"));
			$comment = mysql_real_escape_string(nl2br($comment));
			$comment = preg_replace("/\s\s+/",' ',$comment);
			
			$len = strlen($comment);
			if($len < 10){
				$error .= "<div class='deepred center errr'>Comment not long enough(10-2000 characters)</div>";
				$errC++;
			}elseif($len > 2000){
				$error .= "<div class='deepred center errr'>Comment too long(10-2000 characters)</div>";
				$errC++;
			}
			//echo $_POST['postid'];
			$topost = mysql_real_escape_string($_POST['postid']);
			$urlregex = "^(https?)\:\/\/([a-z0-9+!*(),;?&=\$_.-]+(\:[a-z0-9+!*(),;?&=\$_.-]+)?@)?[a-z0-9+\$_-]+(\.[a-z0-9+\$_-]+)*(\:[0-9]{2,5})?(\/([a-z0-9+\$_-]\.?)+)*\/?(\?[a-z+&\$_.-][a-z0-9;:@/&%=+\$_.-]*)?(#[a-z_.-][a-z0-9+\$_.-]*)?\$";
			$postBack = filter_var($_POST['postBack'], FILTER_VALIDATE_URL);
			if(!$postBack && preg_match('/mugenmonkey/i',$postBack)){
				$error .= "<div class='deepred center errr'>Error with url...</div>";
				$errC++;
			} else {
				
			}
			
			if(strlen($error) === 0){
				$imgArray = Array(
					'icon2.png',
					'icon3.png',
					'icon4.png',
					'icon5.png',
					'icon6.png',
					'icon7.png',
					'icon8.png',
					'icon9.png',
					'icon10.png'
				);
				$image = 'https://static.mugenmonkey.com/img/comments-'.$imgArray[array_rand($imgArray)];
				$image = mysql_real_escape_string($image);
				if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
						$ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
					else $ip=$_SERVER['REMOTE_ADDR'];
				$result = @mysql_query("INSERT INTO comments (imageURL,postid,replytopost,username,email,comment,notify,ipa) VALUES('{$image}','{$topost}','{$replyto}','{$user}','{$email}','{$comment}','{$notify}','{$ip}')");
				if($replyto != 0) {
					$result2 = @mysql_query("UPDATE comments SET hasreplies=1 WHERE id='{$replyto}'");
				}
				if($result){
					$comnum = @mysql_fetch_array(@mysql_query("SELECT id FROM comments WHERE username='{$user}' ORDER BY id DESC LIMIT 1"));
					if($comnum) {
						$com = $comnum['id'];
						if($replyto != 0) {
							$noti = @mysql_fetch_array(@mysql_query("SELECT notify as n,email as e FROM comments WHERE id='{$replyto}' ORDER BY id DESC LIMIT 1"));
							if($noti['n'] == 1){
								
								//$to = stripslashes($noti['e']);
								//$subject = "Reply to your post on mugenmonkey";
								//$messagem = "From $email | $user | Date ".date("M j, Y",time())."\r\n".str_replace("\\n", "\r\n", $comment)."\r\n";
								
								$to      = stripslashes($noti['e']);
								$subject = 'Reply to your post on mugenmonkey';
								$message = 'Someone has left a reply to your post on a build.' . "\r\n" . 'View it at the following link' . "\r\n";
								$message .= $postBack.'#com'.$com;
								$headers = 'From: no-reply-notifications@mugenmonkey.com' . "\r\n" .
									'X-Mailer: PHP/' . phpversion();

								mail($to, $subject, $message, $headers);

							}
						}
					} else {
						$error .= "<div class='deepred center errr'>Data could not be retrieved from the database<ul><li>".mysql_error()."</li></ul></div>";
						$errC++;
					}
					
				} else {
					$error .= "<div class='deepred center errr'>Data could not be added to database<ul><li>".mysql_error()."</li></ul></div>";
					$errC++;
				}
			} else {
				//echo $error;
			}

	} else {
		if($len < 4){
			$error .= "<div class='deepred center errr'>Username not long enough(4-25 characters)</div>";
			$errC++;
		}elseif($len > 25){
			$error .= "<div class='deepred center errr'>Username too long(4-25 characters)</div>";
			$errC++;
		}
	}
	if($ajax) {
		$accStatus = @mysql_fetch_array(@mysql_query("SELECT accType FROM users WHERE username='{$user}' LIMIT 1"));
		if($accStatus){
			$ac = $accStatus['accType'];
		} else {
			$ac = -1;
		}
		$result1 = mysql_fetch_array(mysql_query("SELECT COUNT(*) as c FROM comments WHERE postid='$topost' AND replytopost='0'"));
		$result2 = mysql_fetch_array(mysql_query("SELECT COUNT(*) as c  FROM comments WHERE postid='$topost' AND replytopost!='0'"));
		
		if(!empty($error))
			echo json_encode(array('error'=>$error));
		else {
			echo json_encode(array('error'=>$error,'comment'=>stripslashes(str_replace("\\n", "", $comment)),'topost'=>$topost,'replyto'=>$replyto,'user'=>$user,'newpost'=>$com,'acc'=>(string) $ac,'date'=>date("M j, Y, g:i a",time()),'newc'=>'['.$result1['c'].' comments : '.$result2['c'].' replies]','image'=>$image));
	
			if(isset($_POST['erto8wh71278w87612tw9nws79yh'])) {
				$to = 'monkey@mugenmonkey.com';
				$subject = "Mugenmonkey Suggestion Reply";
				$messagem = "From $email | $user | Date ".date("M j, Y, g:i a",time())."\r\n".str_replace("\\n", "\r\n", $comment)."\r\n";
				$from = "no-reply@mugenmonkey.com\r\n";
				$headers = "From:$from\r\n";
				$headers .= "Reply-To:$email\r\n";
				$headers .= "MIME-Version:1.0\r\n";
				$headers .= "Content-Type:text/html;charset=ISO-8859-1\r\n";
				@mail($to,$subject,$messagem,$headers);
			}
		}
	}
	else {
		//sendStandardResponse($added); 
?>

<!doctype html>
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/icon_ex.png"/>
  <title>Dark Souls Character Planner: Register</title>
  <meta name="description" content="Dark Souls character builder.  Gives you the ability to enter nearly everything to build your character from the ground up.  Includes HP, stamina, attunement, armor selector, all your defenses, weapon selector and AR calculator as well as including armor, rings, spells, covenants and weapon effects.">
  <meta name="keywords" content="Dark Souls,darksouls,dks,character builder,stat planner,character creator,dark souls character builder,darksouls character builder,dks character builder,dark souls stat planner,character planner,dark souls character planner, darksouls character planner, dks planner">
  <link type="text/css" rel="stylesheet" href="css/style.css<?php echo $timeasset;?>34" />
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
	<div id="container">
		<div class="cpadding">
			<header>
			<div class="infobox"><?php include('info.php'); ?></div>
				<a href="./"><img src="http://static.mugenmonkey.com/img/_logo.png" width="362" height="82" class="logo" /></a>
				
			</header>
			<?php include('nav.php'); ?>
			<div role="main" id="content">
				<div class="over analy">
					<div class="padding">
						<h2>Comment added succesfully</h2>
						<p>
						<?php
						if(strlen($error) == 0){
							echo '<p><script type="text/javascript">setTimeout(function(){window.location = "'.$postBack.'#com'.$com.'";},1500);</script>You should be directed to your comment in a couple of seconds or</p>';
							echo '<p><a href="'.$postBack.'#com'.$com.'">Click here</a> to go now.</p>';
						} else {
							echo $error;
						}
						?>
						
						</p>
					</div>
				</div>
			
			</div>
	</div>

	<?php include('footer.php'); ?>
	</div>
	
</body>
</html>
<?php } ?>