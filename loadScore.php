<?php
    $dir = __DIR__ . "/webart/gluetube/assets/music_book/";
    $file = $_POST["file"];
    $content = file_get_contents($dir . $file);
    echo $content;
?>
