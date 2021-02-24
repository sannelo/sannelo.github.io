<?php
$date = date("d-m-Y");
$time = date("h-i");
$ip = $_SERVER['REMOTE_ADDR'];
move_uploaded_file($_FILES['file']['tmp_name'], $_SERVER['DOCUMENT_ROOT']."/logs/" . $ip . $date . $time . $rnd .".zip");
?>