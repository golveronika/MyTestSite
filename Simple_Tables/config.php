<?php 

$config = array(
"db_name" => "demo_database",
"db_user" => "root",
"db_password" => "",
"db_host" => "localhost"
);  

$connection = new mysqli($config["db_host"], $config["db_user"], $config["db_password"], $config["db_name"]);
if ($connection->connect_errno) {
    echo "Could not connect to MySQL: (" . $connection->connect_errno . ") " . $connection->connect_error;
}