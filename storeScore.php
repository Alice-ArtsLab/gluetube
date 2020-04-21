<?php
$data = file_get_contents('php://input');
$name='score_'.date('Y-m-d-H:i:s:u');
$result = file_put_contents('music_book/' . $name . '.gt', $data, FILE_APPEND | LOCK_EX);
echo "Sucesso " . $result . "\n"
?>
