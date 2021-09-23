<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Web->App->DB</title>
</head>
<body>
<?php

    try
    {
        $host       = 'rtacademy_database';
        $port       = 3306;
        $dbname     = 'helloworld';
        $dbuser     = 'helloworld';
        $dbpassword = 'helloworld';

        $db = new PDO(
            "mysql:host=$host;port=$port;dbname=$dbname",
            $dbuser,
            $dbpassword
        );

        $db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );

        $statement = $db->query(
            'SELECT now()'
        );

        echo(
            'Время PHP: ' . date( 'Y-m-d H:i:s' ) .
            '<br>'.
            'Время из БД: ' . $statement->fetchColumn()
        );

        $db        = null;
        $statement = null;
    }
    catch( PDOException $e )
    {
        echo( 'Ошибка БД: ' . $e->getMessage() );
    }

?>
</body>
</html>