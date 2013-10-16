<?php

$link = @mysql_connect('localhost', 'root', '');
if (!$link) {
    
}

$db_selected = @mysql_select_db('dks', $link);
if (!$db_selected) {
   
}

?>
