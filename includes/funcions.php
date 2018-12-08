<?php
include 'connect.php';

function get_car_data($pdo) {
    $query = "SELECT * FROM tbl_car WHERE id = '$car'";

    $get_car = $pdo->query($query);
    $results = array();

    while($row = $get_car->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results;
}

function get_all_car_data($pdo) {
    $query = "SELECT * FROM tbl_car";

    $get_car = $pdo->query($query);
    $results = array();

    while($row = $get_car->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results;
}

?>