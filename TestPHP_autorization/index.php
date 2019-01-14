<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">


    <title>Formulář</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">


</head>
<body>

<?php
    require ("connect.php");
    require ("login.php");
?>

<div class="container">
    <form class="form-signin" method="post" action="index.php?login=1">


       <h3>Přihlašovací formulář</h3>
        <input type="text" placeholder="username" name="username" class="form-control" required>
        <input type="password" placeholder="password" name="password" class="form-control" required>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Přihlásit</button>

    </form>


    <?php if (mysqli_num_rows($users) > 0) { ?>
        <table class="table">
            <thead class="thead">
            <tr>
                <th scope="col">id</th>
                <th scope="col">username</th>
                <th scope="col">password</th>
                <th scope="col">last_login</th>
                <th scope="col">delete</th>
            </tr>
            </thead>

            <tbody>
            <?php while ($row = $users->fetch_assoc()) { ?>
                <tr>
                    <th scope="row"><?php echo $row['id'] ?></th>
                    <td><?php echo $row['username'] ?></td>
                    <td><?php echo $row['password'] ?></td>
                    <td><?php echo date("d.m.o G:i",strtotime($row['last_login'])) ?></td>
                    <td><a class="badge badge-danger" href="#" onclick="DeleteRow(<?php echo $row['id'] ?>);">X</a></td>
                </tr>
            <?php } ?>
            </tbody>
        </table>
    <?php } ?>


    <p>
        <a class="btn btn-outline-secondary btn-sm" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Add new user
        </a>
    </p>
    <div class="collapse" id="collapseExample">
        <div class="card card-body">
    <form class="form-signin" method="post" action="index.php?add=1">
        <input type="text" placeholder="username" name="username" class="form-control" required>
        <input type="password" placeholder="password" name="password" class="form-control" required>
        <button class="btn btn-sm btn-info btn-block" type="submit">Add</button>
    </form>
        </div>
    </div>

<script type="text/javascript">

    function DeleteRow(id) {
        if(confirm("Smazat?")){
            window.location.href="index.php?delete=1&id="+id;
            return true;
        } else
            return false;
    }

</script>

</body>
</html>