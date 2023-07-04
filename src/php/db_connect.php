<?php
$HOST = 'localhost';
$USERNAME = 'take_news';
$USERPASS = 'system';
$DBNAME = 'news';

$link = mysqli_connect($HOST, $USERNAME, $USERPASS, $DBNAME);
if (!$link) {
  $link -> error;
}
?>
