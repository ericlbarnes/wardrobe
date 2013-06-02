<!DOCTYPE html>
<html lang="en">
	<title>Login</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="/admin/style.css">
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
			<div id="login-region">
				<h1>Login</h1>
				<form method="post" action="/wardrobe/login" class="form-horizontal">
					<p><input type="text" id="inputEmail" name="email" placeholder="Email"></p>
					<p><input type="password" id="inputPassword" name="password" placeholder="Password"></p>
					<p><label class="checkbox"><input type="checkbox" name="remember"> Remember me</label></p>
					<button type="submit" class="btn">Sign in</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</body>
</html>
