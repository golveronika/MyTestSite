<!DOCTYPE html>
<html>
<head>
	<title>Demo JQUERY tables</title>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">


	<link rel="stylesheet" type="text/css" href="Tables.css">
	<link rel="stylesheet" type="text/css" href="main.css">
	<link rel="stylesheet" type="text/css" href="description.css">

</head>
<body>

	<header>
		<i class="fas fa-code"></i><span class="left_caption">Simple tables</span>
		<a href="#" title="GitHub"><i class="fab fa-github"></i></a>
		<a href="#" title="Recover database" onclick="RecoverDB()"><i class="fas fa-undo"></i></a>
		<span class="right_caption">READ ME -> </span><a href="#" title="Description" onclick="ShowDescription()"><i class="fas fa-file-code"></i></a>
	</header>

	<div class="container">

		<div class="container_top">
			<div id="restaurants_table"></div>
			<div id="menu_table"></div>
		</div>

		<div class="container_bottom">
			<div id="reviews_table"></div>
		</div>

		<div class="container_documentation">


		</div>

	</div>

	<footer>
		<span>Thank you for your attention</span><i class="fas fa-heart"></i>
	</footer>

<script type="text/javascript" src="Tables.js"></script>
<script type="text/javascript" src="main.js"></script>
<script type="text/javascript" src="description.js"></script>
<script type="text/javascript">


</script>
</body>
</html>