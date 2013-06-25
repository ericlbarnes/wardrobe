@extends('admin.layout')

@section('title')
  Installer | Step 1
@stop

@section('content')
  <div id="install-region">
    <h1>Wardrobe Install</h1>
    @if (Session::has('install_errors'))
    <div class="alert alert-block alert-error">
      <strong>Error!</strong>
      @foreach ($errors->all() as $error)
        <li>{{ $error }}</li>
      @endforeach
    </div>
    @endif
    <form method="post" style="text-align: center;" action="{{ url('install') }}" class="form-horizontal">
      <input type="text" name="host" placeholder="Database Host" value="{{ Config::get('database.connections.mysql.host') }}" data-tooltip="Database Host" />
      <input type="text" name="db" placeholder="Database Name" value="{{ Config::get('database.connections.mysql.database') }}" data-tooltip="Database Name" />
      <input type="text" name="user" placeholder="Database User" value="{{ Config::get('database.connections.mysql.username') }}" data-tooltip="Database User" />
      <input type="password" name="pass" placeholder="Database Password" value="{{ Config::get('database.connections.mysql.password') }}" data-tooltip="Database Password" />

      <button style="text-align: center;" type="submit" class="btn save">Install Database &amp; Continue</button>
    </form>
  </div>
@stop

@section('footer.js')
  <script>
    $(function(){
      $("input[data-tooltip]").qtip({
        content: {
          attr: 'data-tooltip'
        },
        show: {
          event: 'focus'
        },
        hide: {
          event: 'blur'
        },
        position: {
          my: 'bottom center',
          at: 'top center'
        }
      });
    });
  </script>
@stop