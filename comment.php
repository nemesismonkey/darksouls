<?php
//ini_set('session.cookie_domain', '.mugenmonkey.com');
//require('inc/contype.php');
//if(isset($_GET['postid'])){
//$postid = $_GET['postid'];
?>
<div id="comments" class="comments">
<style>.reply-date{float:right;font-family: arial;
    font-size: 11px;}</style>
		<div class="inner-pad">
		<h2 style="float:right;clear:none;"><a href="#" id="showComment">Make A Comment</a></h2>
		<?php
		$result1 = mysql_fetch_array(mysql_query("SELECT COUNT(*) as c FROM comments WHERE postid='$postid' AND replytopost='0'"));
		$result2 = mysql_fetch_array(mysql_query("SELECT COUNT(*) as c  FROM comments WHERE postid='$postid' AND replytopost!='0'"));
		$str = '';
		if(isset($btitle)){
			$str .= "Comments for build";// '$btitle' by ";
			//$user = $bauth;
			//$nuser = preg_replace('/[^a-zA-Z0-9\-\_ ]/si' , '', $user);
			//if($user != $nuser || $user == 'Anonymous'){
			//	$str .= $bauth;
			//} else {
			//	$str .= "<a href='/darksouls/share?uid=".rawurlencode($bauth)."'>$bauth</a>";
			//}
		} elseif(isset($buildid)){
			$str = 'Comments for a general build';
		} else {
			$str = 'The General Planner';
		}
		?>
		<h2><?php echo $str; ?> :: <?php
			if($result1['c'] == 0){
				echo '<span id="comNumi">No comments</span>';
			} else
				echo '<span id="comNumi">['.$result1['c'].' comments : '.$result2['c'].' replies]</span>';
			if(isset($_GET['p']))
				echo ' Page '.$_GET['p'];
		?></h2>
		<hr style="border:none;border-bottom:dotted 1px #333">
		<div class="respond" style="display:none" id="comMain">

		  <h3>Making a comment...</h3>

		  <form action="comment_post.php" method="post" id="commentform_main">
				<div style="height:0px;width:0px;overflow:hidden;">
				<input type="hidden" name="agent" value='xau--<?php echo md5(rand()); ?>'>
					Name <input type="text" name="emailg" class="emailg" value="" tabindex="43">
					Email <input type="text" name="emailc" class="emailc" value="" tabindex="56">
					Name <input type="text" name="namea" class="namea" value="" tabindex="76">
					Email <input type="text" name="nameb" class="nameb" value="" tabindex="99">
					Name <input type="text" name="emailx" class="emailx" value="" tabindex="79">
					Email <input type="text" name="emaily" class="emaily" value="" tabindex="90">
				</div>
			
			<?php 
				if(isset($_COOKIE['user'])) 
					echo '<label for="comment_author_main" class="required">Username/Email</label><div class="blue">'.$_COOKIE['user'].'<br/><span class="reply-email">'.$email.'</span> <span class="small faded">(will not be shown)</span><input type="hidden" name="comment_author" id="comment_author_main" value="'.$_COOKIE['user'].'"><input type="hidden" name="email" id="email_main" value="'.$email.'"></div>'; 
				else
					echo '<label for="comment_author_main" class="required">Username</label><input type="text" name="comment_author" id="comment_author_main" value="Anonymous" tabindex="1" required="required">
					<label for="email_main" class="required">Your email <span class="small faded">(will not be shown)</span></label>
					<input type="email" name="email" class="email" value="" tabindex="2" placeholder="Required if you want to recieve reply notifications">';
			?>
			
			
			
			<input type="hidden" value="<?php echo curPageURL();?>" name="postBack">
			<input type="hidden" value="<?php echo $postid; ?>" name="postid">
			<input type="hidden" value="0" name="replyto">
			<label for="comment" class="required">Your message</label>
			<textarea name="comment" class="comment" tabindex="4" required="required" maxlength="2000"></textarea>
			<input name="submit" type="submit" value="Submit comment"> <input name="cancel" type="submit" value="Cancel"> <span style="float:right"> <input type="checkbox" value='1' name="recieveNoti" id="recieveNoti" style="vertical-align:middle" /> <label for="recieveNoti">Receive Notifications</label></span>
			
		  </form>
		  <hr style="border:none;border-bottom:dotted 1px #333">
		</div>
		<div class="reply-section">
			<?php
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
			
				function getReplies($post){
					$result = mysql_query("SELECT c.id,c.postid,c.username,c.datet,c.comment,c.replytopost,c.hasreplies,c.flagged,c.imageURL,u.accType FROM comments AS c LEFT JOIN users AS u ON c.username = u.username WHERE c.replytopost='$post' ORDER BY id ASC");
					while($irow = mysql_fetch_array($result)){
					echo '<div class="reply-to clearfix" id="com'.$irow['id'].'">
							<div class="reply-icon"><img src="'.$irow['imageURL'].'" alt="Comment By '.$irow['username'].'" /></div>
							<div class="reply-content clearfix">
								<div class="reply-details">
									'.(isset($irow['accType']) && $irow['username'] != 'Anonymous' ? '<a href="/darksouls/share?uid='.$irow['username'].'" class="userclass'.($irow['accType'] == 1 || $irow['accType'] == 2 ? '1' : '0').'">'.$irow['username'].'</a><span class="userico '.($irow['accType'] == 1 || $irow['accType'] == 2 ? 'r' : 'g') .'"></span>' : $irow['username']). ' says... <span class="reply-date"> '.date("M j Y, g:i a",strtotime($irow['datet'])).'</span>
								</div>
								<div class="reply-text">
									<p>'.stripslashes(html_entity_decode($irow['comment'])).'<span class="reply-postback"><a href="#rep'.$irow['id'].'" class="cReply">Reply</a>'.($irow['flagged'] > 3 ? ' - <span class="red">Flagged</span>' : ' - <a href="#flag'.$irow['id'].'" class="flagpost" data-post="'.$irow['id'].'">Flag Post</a>') .'</span></p>
								</div>
							</div>';
							if($irow['hasreplies'] != 0)
							getReplies($irow['id']);
					echo '</div>';
					}
				}
				$result = mysql_query("SELECT c.id,c.postid,c.username,c.datet,c.comment,c.replytopost,c.hasreplies,c.flagged,c.imageURL,u.accType FROM comments AS c LEFT JOIN users AS u ON c.username = u.username WHERE c.postid='$postid' AND c.replytopost='0' ORDER BY id DESC LIMIT {$offset}, {$offMod}");
				while($row = mysql_fetch_array($result)){
					echo '<div class="reply clearfix" id="com'.$row['id'].'">
							<div class="reply-icon"><img src="'.$row['imageURL'].'" alt="Comment By '.$row['username'].'" /></div>
							<div class="reply-content clearfix">
								<div class="reply-details">
									'.(isset($row['accType']) && $row['username'] != 'Anonymous' ? '<a href="/darksouls/share?uid='.$row['username'].'" class="userclass'.($row['accType'] == 1 || $row['accType'] == 2 ? '1' : '0').'">'.$row['username'].'</a><span class="userico '.($row['accType'] == 1 || $row['accType'] == 2 ? 'r' : 'g') .'"></span>' : $row['username']). ' says... <span class="reply-date"> '.date("M j Y, g:i a",strtotime($row['datet'])).'</span>
								</div>
								<div class="reply-text">
									<p>'.stripslashes(html_entity_decode($row['comment'])).'<span class="reply-postback"><a href="#rep'.$row['id'].'" class="cReply">Reply</a>'.($row['flagged'] > 3 ? ' - <span class="red">Flagged</span>' : ' - <a href="#flag'.$row['id'].'" class="flagpost" data-post="'.$row['id'].'">Flag Post</a>') .'</span></p>
								</div>
							</div>';
							if($row['hasreplies'] != 0){
								echo '<div class="reply-in clearfix">';
								getReplies($row['id']);
								echo '</div>';
							}
					echo '</div>';
				}
			$nav = '';
		$maxPage = ceil($result1['c']/$offMod);		
		if($page == 1) {
		$nav .= " <span class='white'>$page</span> ".($page < $maxPage ? '|' : '');
		for($i = 2; $i <= 15; $i++){
			if($i <= $maxPage)
			$nav .= " <a href=\"/darksouls/?p=$i\">$i</a> ".($i < $maxPage ? '|' : '');
		}
		if($i <= $maxPage)
		$nav .= " ... <a href=\"/darksouls/?p=$maxPage\">$maxPage</a> |";
		}else {
			if($page > 10){
				$nav .= " <a href=\"/darksouls/?p=1\">1</a> ... | ";
				if($page == $maxPage) {
					for($i = $page - 10; $i < $page; $i++){
						$nav .= " <a href=\"/darksouls/?p=$i\">$i</a> |";
					}
				} else if($page >= $maxPage - 5) {
					for($i = $page - (10 + ($page - $maxPage)); $i < $page; $i++){
						$nav .= " <a href=\"/darksouls/?p=$i\">$i</a> |";
					}
				} else {
					for($i = $page - 6; $i < $page; $i++){
						$nav .= " <a href=\"/darksouls/?p=$i\">$i</a> |";
					}
				}
				$nav .= " <span class='white'>$page</span> |";
				for($i = $page + 1; $i < $page + 7; $i++){
					if($i <= $maxPage)
					$nav .= " <a href=\"/darksouls/?p=$i\">$i</a> |";
				}
				if($i == $maxPage)
					$nav .= " <a href=\"/darksouls/?p=$maxPage\">$maxPage</a>";
				if($i < $maxPage)
					$nav .= " ... <a href=\"/darksouls/?p=$maxPage\">$maxPage</a> |";
			} else {
				if($page > 1 && $page <= 10) {
					for($i = 1; $i < $page; $i++){ 
						if($i <= $maxPage)
						$nav .= " <a href=\"/darksouls/?p=$i\">$i</a> |";
					}
					$nav .= " <span class='white'>$page</span> |";
					for($i = $i + 1; $i < $page + 7 + (9 - $page); $i++){ 
					if($i <= $maxPage)
						$nav .= " <a href=\"/darksouls/?p=$i\">$i</a> |";
					}
					if($i <= $maxPage)
					$nav .= " ... <a href=\"/darksouls/?p=$maxPage\">$maxPage</a> ".($i < $maxPage ? '|' : '');
				}
			}
		}
				if($result1['c'] != 0)
					echo '<div class="center">Page '.$nav.'</div>';
			?>
		
		</div>
		</div>
	</div>
	
	
<?php 
	//} 
?>