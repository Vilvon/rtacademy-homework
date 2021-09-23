<?php
     $dir = 'Pages';
     $arrfile = [];
    if (is_dir($dir))
    {
        if ($dh = opendir($dir)) {
            while (($file = readdir($dh)) !== false) {
                if ($file != "." && $file != ".." ) {
                    print "<a href=/Pages/" . strval( $file ) . ">$file</a>" ;
                }
                
            }
            closedir($dh);
        }
    }
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <title>Home page</title>
 <link rel="stylesheet" href="/Style/homestyle.css">
</head>
<body>

<a href=""></a>
<p ></p>
</body>
</html>