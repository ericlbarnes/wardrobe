<!DOCTYPE html>
<html lang="en">
<head>
  <title>@yield('title') | Wardrobe</title>
  <meta name="env" content="{{ App::environment() }}">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="{{ asset('/admin/style.css') }}">
</head>
<body>
  <div id="header-region"></div>
  <div id="js-alert"></div>
  <div class="container-fluid">
    <div class="row-fluid">
      @yield('content')
      <div id="main-region" class="span12"></div>
    </div>
  </div>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script type="text/javascript" src="{{ asset('/admin/js/structure.js') }}"></script>
  <script type="text/javascript" src="{{ asset('/admin/js/app.js') }}"></script>
  @yield('footer.js')
</body>
</html>
