<?php

declare( strict_types=1 );

$city_draft = $_GET['city'] ?? '';

function cityCapitalize( string $city ): string
{
    $city = preg_replace( '#[^\sa-z-]#i', '', $city );

    return ucfirst(strtolower(trim( $city )));
}

?>


<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="utf-8">
    <title>7.5</title>
    <style>
        #city {
            width : 15em;
            margin-bottom: 2em ;
        }

    </style>
</head>
<body>

    <form action="" method="GET">
        <label for="city">Город:</label>
        <input type="text" id="city" name="city" value="<?= htmlspecialchars( $city_draft ) ?>">
        <button type="submit">Отправить</button>
    </form>


    <?php

    $city = cityCapitalize( $city_draft  );

    if( !empty($city) )
    {

    ?>
    <div><?= $city ?></div>
    <?php

    }

    ?>
</body>
</html>