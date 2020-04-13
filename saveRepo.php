<?php
$data = $_POST['data'];
echo 'post:\n' . $_POST . " ";
echo 'data:\n' . $data . " ";
result = file_put_contents('music_book/' . ((int) microtime(true)) . '.gt', $data, FILE_APPEND | LOCK_EX);
echo "Sucesso " . result . "\n"
?>
