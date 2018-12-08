<?php

include 'functions.php';

if(isset($_GET['car'])) {
    $data = get_car_data($conn, $_GET['car']);
    echo json_encode($data);
} else{
    $data = get_all_car_data($conn);
    echo json_encode($data);
}

?>