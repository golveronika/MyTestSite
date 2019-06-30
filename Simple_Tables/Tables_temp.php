<?php  

require ("config.php");

if (isset($_GET["action"])) {

	$action = $_GET["action"];

	switch ($action) {
		case "getdata":
			echo json_encode(Get_Data());
			break;	
		 case "add_restaurants":
		 	echo AddRestaurant($_GET["name"],$_GET["id_location"],$_GET["address"],$_GET["type"]);
		 	break;
		 case "upd_restaurants":
		 	echo UpdRestaurant($_GET["name"],$_GET["id_location"],$_GET["address"],$_GET["type"],$_GET["id_restaurant"]);
		 	break;
		 case "add_menu":
		 	echo AddMenu($_GET["name"],$_GET["price"],$_GET["consist"],$_GET["id_restaurant"]);
		 	break;
		 case "upd_menu":
		 	echo UpdMenu($_GET["name"],$_GET["price"],$_GET["consist"],$_GET["id_restaurant"],$_GET["id_menu"]);
		 	break;
		 case "add_reviews":
		 	echo AddReview($_GET["username"],$_GET["Comment"],$_GET["id_restaurant"],$_GET["rate"]);
		 	break;
		 case "edittable":
		 	echo EditTable($_GET["table_name"],$_GET["colunm"],$_GET["value"],$_GET["primary_key"],$_GET["primary_val"]);
		 	break;		
		 case "copyrow":
		 	echo CopyRowTable($_GET["table_name"],$_GET["keys"],$_GET["values"]);
		 	break;	
		 case "delrow":
		 	echo DeleteRow($_GET["table_name"],$_GET["primary_key"],$_GET["primary_val"]);
		 	break;	
		case "recover":
			echo RecoverData();
			break;	
	}
}

function RecoverData() {

	$query_text = "CALL `P_RECOVER_DATA`();";
	$query =  $GLOBALS['connection']->query($query_text);
	return "recovered";


}

function AddReview($username, $Comment, $id_restaurant, $rate) {

	$query_text = "insert INTO `reviews`(`id_restaurant`, `username`, `rate`, `Comment`) 
					VALUES (".$id_restaurant.",".StrOrNull($username,"string").",".StrOrNull($rate,"").",".StrOrNull($Comment,"string").")";
	try {
		$query =  $GLOBALS['connection']->query($query_text);
		$res = "Inserted";
	} catch (Exception $e) { 
		$res = "error";
	}

	return $res;
	
}


function UpdMenu($name, $price, $consist, $id_restaurant, $id_menu) {

	$query_text = "update `menu` SET 
	`id_restaurant`=".StrOrNull($id_restaurant,"").",
	`name`=".StrOrNull($name,"string").",
	`price`=".StrOrNull($price,"").",
	`consist`=".StrOrNull($consist,"string")."
	WHERE `id_menu`=".StrOrNull($id_menu,"");

	$query =  $GLOBALS['connection']->query($query_text);
	return $query_text;


}

function UpdRestaurant($name, $id_location, $address, $type, $id_restaurant) {

	$query_text = "update `restaurants` SET 
	`name`=".StrOrNull($name,"string").",
	`type`=".StrOrNull($type,"string").",
	`id_location`=".StrOrNull($id_location,"").",
	`address`=".StrOrNull($address,"string")." 
	WHERE `id_restaurant`=".StrOrNull($id_restaurant,"");

	try {
		$query =  $GLOBALS['connection']->query($query_text);
		$res = "Updated";
	} catch (Exception $e) { 
		$res = "error";
	}

	return $res;


}


function DeleteRow($table_name, $primary_key, $primary_val) {

	$query_text = "delete FROM `".$table_name."` WHERE `".$primary_key."` = ".$primary_val;

	try {
		$query =  $GLOBALS['connection']->query($query_text);
		$res = "Updated";
	} catch (Exception $e) { 
		$res = "error";
	}

	return $query_text;

}

function CopyRowTable($table_name, $keys, $values) {

	$new_id = "";
	$query_text = "insert INTO `".$table_name."` (".$keys.") VALUES (".$values."); ";
	$query_text .= "select LAST_INSERT_ID();";


	try {
		$mysqli = $GLOBALS['connection'];

		if ($mysqli->multi_query($query_text)) {
		    do {
		        /* получаем первый результирующий набор */
		        if ($result = $mysqli->store_result()) {
		            while ($row = $result->fetch_row()) {
		            	$new_id = $row[0];
		            }
		            $result->free();
		        }
		    } while ($mysqli->next_result());
		}
		$res = $new_id;	
	} catch (Exception $e) { 
		$res = "error";
	}

	return $res;


}

function EditTable($table_name, $colunm, $value, $primary_key, $primary_val) {

	$query_text = "update `".$table_name."` SET `".$colunm."` = ".NumbOrStr($value)." where `".$primary_key."` = ".$primary_val;
	
	try {
		$query =  $GLOBALS['connection']->query($query_text);
		$res = "Updated";
	} catch (Exception $e) { 
		$res = "error";
	}

	return $res;

}

function AddMenu($name, $price, $consist, $id_restaurant) {

	$query_text = "insert INTO `menu`(`id_restaurant`, `name`, `price`, `consist`) 
					VALUES (".$id_restaurant.",".StrOrNull($name,"string").",".StrOrNull($price,"").",".StrOrNull($consist,"string").")";
	try {
		$query =  $GLOBALS['connection']->query($query_text);
		$res = "Inserted";
	} catch (Exception $e) { 
		$res = "error";
	}

	return $res;
	
}

function AddRestaurant($name, $id_location, $address, $type) {

	$query_text = "insert INTO `restaurants`(`name`, `id_location`, `address`, `type`) 
					VALUES (".StrOrNull($name,"string").",".StrOrNull($id_location,"").",".StrOrNull($address,"string").",".StrOrNull($type,"string").")";
	try {
		$query =  $GLOBALS['connection']->query($query_text);
		$res = "Inserted";
	} catch (Exception $e) { 
		$res = "error";
	}

	return $res;
	
}

function StrOrNull($value, $type) {


	$value = mysqli_real_escape_string($GLOBALS['connection'], $value);
	if ($type == "string")
		if ($value != "null")
			$value = "'".$value."'";
		if ($value == '')
			$value = "null";

	return $value;
}

function NumbOrStr($value) {

	$value = mysqli_real_escape_string($GLOBALS['connection'], $value);

	if ($value == '') $value = "null";
	else if (preg_match("/\D/", $value)) $value = "'". $value."'";

	return $value;
}



function Get_Data() {

	$data = array();
	//Add in all data in one array
	$query_text = "select * FROM `restaurants`";
	$query =  $GLOBALS['connection']->query($query_text);
	while ($data_tab = mysqli_fetch_assoc($query)) {
		$data["restaurants"][] = $data_tab;
	}


	$query_text = "select * FROM `menu`";
	$query =  $GLOBALS['connection']->query($query_text);
	while ($data_tab = mysqli_fetch_assoc($query)) {
		$data["menu"][] = $data_tab;
	}

	$query_text = "select * FROM `location`";
	$query =  $GLOBALS['connection']->query($query_text);
	while ($data_tab = mysqli_fetch_assoc($query)) {
		$data["location"]["key"][] = $data_tab["id_location"];
		$data["location"]["value_select"][] = $data_tab["name"];
	}
	
	$query_text = "select * FROM `reviews`";
	$query =  $GLOBALS['connection']->query($query_text);
	while ($data_tab = mysqli_fetch_assoc($query)) {
		$data["reviews"][] = $data_tab;
	}

	return $data;
}