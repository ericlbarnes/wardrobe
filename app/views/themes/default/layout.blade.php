<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Wardrobe</title>
    <link href="themes/default/css/style.css" rel="stylesheet" media="screen">
  </head>
  <body>
    <div class="container">
      <header>
        <h1><a href="/">Wardrobe</a></h1>
        <nav>
          <ul>
            <li><a href="/archive">Posts</a></li>
            <li><a href="/code">Code</a></li>
            <li><a href="http://feeds.feedburner.com/EricLBarnes">RSS</a></li>
          </ul>
        </nav>
      </header>
      <div class="content">
        @yield('content')
      </div>
      <footer>
        <p>Follow me on <a href="http://twitter.com/ericlbarnes">Twitter</a> and <a href="http://github.com/ericbarnes">GitHub</a>.</p>
      </footer>
    </div>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="/js/core.js"></script>
  </body>
</html>
