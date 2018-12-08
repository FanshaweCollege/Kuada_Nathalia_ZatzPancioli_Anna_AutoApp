<?php
    $user = "root";
    $pw = "root";

    try {
        $conn = new PDO('mysql:host=localhost;dbname=db_autoapp', $user, $pw);
    } catch(PDOException $exception) {
        echo 'connect error!' . $exception->getMessage();
    }
?>