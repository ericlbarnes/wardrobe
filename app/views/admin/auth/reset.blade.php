@extends('admin.layout')

@section('title')
  Password Reset
@stop

@section('content')
  <div id="login-region">
    <h1>Password Reset</h1>
    @if (Session::has('error'))
      <div class="alert alert-block alert-error">
        <p>{{ trans(Session::get('reason')) }}</p>
      </div>
    @endif

    <form method="post" action="{{ url('/password/reset/'.$token) }}" class="form-horizontal">
      <input type="hidden" name="token" value="{{ $token }}">
      <p><input type="text" id="inputEmail" name="email" placeholder="Email"></p>
      <p><input type="password" name="password" placeholder="Password"></p>
      <p><input type="password" name="password_confirmation" placeholder="Confirm Password"></p>
      <button type="submit" class="btn">Send reset email</button>
      </div>
    </form>
  </div>
@stop