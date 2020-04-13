<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <?php
            $dir = "/var/www/html/webart/gluetube/music_book";
            $dh  = opendir($dir);
            while (false !== ($filename = readdir($dh))) {
                $files[] = $filename;
            }
            sort($files);
            print_r($files);
            sort($files);
            print_r($files);
            foreach ($files as $key => $value){
                print_r($value);
                print_r("<br>");
            }
        ?>
    </body>
</html>
