@extends('admin.layout')

@section('title')
Not Installed
@stop

@section('content')
  <div class="row-fluid">
    <div class="span6 offset3">
      <div id="install-region" class="text-center">
        <h1>Welcome to Wardrobe.</h1>
        <button style="text-align: center;" class="btn save" onclick="document.location='{{ url('install') }}';">Shall we install?</button>
      </div>
    </div>
  </div>
@stop