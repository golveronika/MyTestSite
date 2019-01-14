<?php
if (isset($_GET['mess'])) {
    if ($_GET['mess'] == 1)
        echo "<div class='show err' id=\"snackbar\">Uživatel už existuje</div>";
    if ($_GET['mess'] == 2)
        echo "<div class='show mes' id=\"snackbar\">Uživatel úspěšně přidán</div>";
    if ($_GET['mess'] == 3)
        echo "<div class='show err' id=\"snackbar\">Uživatel neexistuje</div>";
    if ($_GET['mess'] == 4) {
        echo "<div id=\"snackbar_log\">Uživatel přihlášen</div>";
    }
}

if (isset($_GET['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $query = $connection->query("SELECT id FROM users WHERE username = '".$username."' AND password = '".$password."'");
    if (mysqli_num_rows($query) > 0) {
        $id = mysqli_fetch_array($query)['id'];
        $query = $connection->query("UPDATE users SET id = ".$id." where id =".$id);
        echo "<script>window.location.assign('index.php?mess=4');</script>";
    } else {
        echo "<script>window.location.assign('index.php?mess=3');</script>";
    }
}


if (isset($_GET['add'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $query = $connection->query("SELECT 1 FROM users WHERE username = '".$username."'");
    if (mysqli_num_rows($query) > 0) {
        echo "<script>window.location.assign('index.php?mess=1');</script>";
    } else {
        $query = $connection->query("INSERT INTO users (username, password) VALUES ('".$username."', '".$password."')");
        echo "<script>window.location.assign('index.php?mess=2');</script>";
    }
}

if (isset($_GET['delete'])) {
    $query = $connection->query("DELETE FROM users WHERE id = ".$_GET['id']);
    echo "<script>window.location.assign('index.php');</script>";
}


?>