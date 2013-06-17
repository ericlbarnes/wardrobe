<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>@yield('title')</title>
    <link href='http://fonts.googleapis.com/css?family=OFL+Sorts+Mill+Goudy+TT' rel='stylesheet' type='text/css'/>
    {{ HTML::style('css/style.css') }}
  </head>
  <body>
    <div class="container">
      <header>
        <h1><a href="/">{{ site_title() }}</a></h1>
        <nav>
          <ul>
            <li><a href="/archive">Posts</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/rss">RSS</a></li>
          </ul>
        </nav>
      </header>
      <div class="content">
        @yield('content')
      </div>
      <footer>
      <p>Powered by <a href="https://github.com/ericbarnes/wardrobe">Wardrobe</a></p>
      </footer>
    </div>
  </body>
</html>
