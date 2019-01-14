<?php

$connection = new mysqli("localhost", "root", "", "practice");
if ($connection->connect_errno) {
    echo "Could not connect to MySQL: (" . $connection->connect_errno . ") " . $connection->connect_error;
}

$users = $connection->query("SELECT * FROM users");

?>