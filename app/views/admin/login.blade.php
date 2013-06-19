@extends('admin.layout')

@section('title')
	Login
@stop

@section('content')
	<div id="login-region">
		<h1>Login</h1>
		@if (Session::has('login_errors'))
		<div class="alert alert-block alert-error">
			<p>Your email or password is incorrect. <a href="{{ url('wardrobe/login/remind') }}">Forgot password?</a></p>
		</div>
		@endif
		<form method="post" action="{{ url('/wardrobe/login') }}" class="form-horizontal">
			<p><input type="text" id="inputEmail" name="email" placeholder="Email" value="{{ Input::old('email') }}"></p>
			<p><input type="password" id="inputPassword" name="password" placeholder="Password"></p>
			<p><label class="checkbox"><input type="checkbox" name="remember"> Remember me</label></p>
			<button type="submit" class="btn">Sign in</button>
			</div>
		</form>
	</div>
@stop

@section('footer.js')

@stop
