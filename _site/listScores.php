<?php
    $dir = __DIR__ . "/assets/music_book/";

    if ($handle = opendir($dir)) {
        while ($entry = readdir($handle)) {
            if ($entry != "." && $entry != "..") {
                $content = file_get_contents($dir . $entry);
                $json = json_decode($content, true);
                echo $json["author"];
                echo " | ";
                echo $json["title"];
                echo "<button onclick='loadScore(\"" . $entry . "\");'>Load</button>";
                echo "<br/>";
            }
        }
        closedir($handle);
    }
?>
