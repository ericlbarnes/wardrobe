@extends('admin.layout')

@section('title')
  Forgot Password
@stop

@section('content')
  <div id="login-region">
    <h1>Forgot Password</h1>
    @if (Session::has('error'))
      <div class="alert alert-block alert-error">
        <p>{{ trans(Session::get('reason')) }}</p>
      </div>
    @elseif (Session::has('success'))
      <div class="alert alert-block alert-success">
        <p>An e-mail with the password reset has been sent.</p>
      </div>
    @endif

    <form method="post" action="/wardrobe/login/remind" class="form-horizontal">
      <p><input type="text" id="inputEmail" name="email" placeholder="Email"></p>
      <button type="submit" class="btn">Send reset email</button>
      </div>
    </form>
  </div>
@stop