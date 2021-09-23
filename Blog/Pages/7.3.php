<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>7.3</title>
</head>
<body>

<?php


$str = 'Hello World';
$start = microtime(true);
 myStrShuffle( $str);
$timeSpend = microtime(true)-$start;
print_r( '<p>'. $timeSpend.'</p>');

$start = microtime(true);
str_shuffle( $str );
$timeSpend = microtime(true)-$start;
print_r( '<p>'. $timeSpend.'</p>');

// "owldrHlelo "
// ваш код функції myStrShuffle пишіть нижче
function myStrShuffle( string $str )
{
    $str = str_split("$str");
    shuffle($str);
    $str = join($str);
    return $str;
}
?>


</body>
</html>
