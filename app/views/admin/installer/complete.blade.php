@extends('admin.layout')

@section('title')
  Installer | Complete
@stop

@section('content')
  <div id="install-region">
    <h1>Success</h1>
    <p>Install complete.</p>
    <p>Please delete the app/controllers/InstallController.php file.</p>
    <p>Then you can <a href="/wardrobe">login to the admin</a></p>
  </div>
@stop
