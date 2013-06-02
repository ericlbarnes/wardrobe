<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>@yield('title')</title>
    <meta name="author" content="Eric Barnes" />
    <meta name="description" content="My randomness." />
    <meta name="viewport" content="width=device-width">
    <link rel="alternate" type="application/rss+xml" href="/atom.xml" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/themes/elb/css/style.min.css" rel="stylesheet" media="screen">
    <link rel="shortcut icon" href="http://ericlbarnes.s3.amazonaws.com/newsies/16x16-avatar.png">
    <link rel="apple-touch-icon" href="http://ericlbarnes.s3.amazonaws.com/newsies/128x128-avatar.png">
    <link href='http://fonts.googleapis.com/css?family=Raleway|Lustria|Dosis:200,400,600' rel='stylesheet' type='text/css'>
    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-21695861-1']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    </script>
    <script src="http://yandex.st/highlightjs/6.1/highlight.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
  </head>
  <body>
    <div class="container">
      <header>
        <h1><a href="/">Eric Barnes</a></h1>
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
    <script src="/themes/elb/js/core.js"></script>
  </body>
</html>
