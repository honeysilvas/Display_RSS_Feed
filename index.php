<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>Display RSS Feed</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1">
		<link rel="stylesheet" href="css/barebones.css">
		<link rel="stylesheet" href="css/style.css">
		<script type="text/javascript" src="https://www.google.com/jsapi"></script>
		<script type="text/javascript">google.load( "feeds", "1" );</script>
		<script type="text/javascript" src="js/rss.js"></script>
	</head>
	<body>
	<div class="page">
		<main>
		<h1>Headlines</h1>
			<div class="feed" id="feed"></div>
			<script>getFeed();</script>
		</main>
	</div>
	</body>
</html>
	
	