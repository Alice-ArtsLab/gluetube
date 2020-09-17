<?php
    $dir = __DIR__ . "/assets/music_book/";
    $file = $_POST["file"];
    $content = file_get_contents($dir . $file);
    echo $content;
?>
