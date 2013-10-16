<?php 

$ToEmail = 'monkey@mugenmonkey.com'; 

$EmailSubject = 'Site contact form'; 

$mailheader = "From: ".$_POST["email"]."\r\n"; 

$mailheader .= "Reply-To: ".$_POST["email"]."\r\n"; 

$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

$MESSAGE_BODY = "Name: ".$_POST["name"]."<br />"; 

$MESSAGE_BODY .= "Email: ".$_POST["email"]."<br />"; 

$MESSAGE_BODY .= "Comment: ".nl2br($_POST["comment"])."<br />"; 

mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); 

?>