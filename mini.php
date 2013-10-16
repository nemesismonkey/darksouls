<?php
sleep(1);
function createTinyUrl($strURL) {
    $tinyurl = file_get_contents("http://mmdks.com/?shorten=1&url=http://".$strURL);
    return $tinyurl;
}
$value = createTinyUrl($_POST['url']);
$val = str_replace('\r', '', str_replace('\n', '', $value));
echo($val);
?>


