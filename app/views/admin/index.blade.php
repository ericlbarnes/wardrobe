<!DOCTYPE html>
<html lang="en">
<head>
	<title>Wardrobe</title>
	<meta name="env" content="{{ App::environment() }}">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="/admin/style.css">
	<!-- <link rel="stylesheet" type="text/css" href="/admin/bedge_grunge/style.css"> -->
	<link rel="stylesheet" href="http://lab.lepture.com/editor/css/editor.css" />
	<link rel="stylesheet" type="text/css" href="/admin/muted/style.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript" src="/admin/js/structure.js"></script>
	<script type="text/javascript" src="/admin/js/app.js"></script>
</head>
<body>
	<div id="header-region"></div>
	<div id="js-alert"></div>
	<div class="container-fluid">
		<div class="row-fluid">
			<div id="main-region" class="span12"></div>
		</div>
	</div>
	<script type="text/javascript">
		$(document).ready(function() {
			Wardrobe.start();
		});
	</script>
</body>
</html>
