@extends('admin.layout')

@section('title')
  {{ Lang::get('wardrobe.forgot_pass_reset') }}
@stop

@section('content')
  <div id="login-region">
    <h1>{{ Lang::get('wardrobe.forgot_pass_reset') }}</h1>
    @if (Session::has('error'))
      <div class="alert alert-block alert-error">
        <p>{{ trans(Session::get('reason')) }}</p>
      </div>
    @endif

    <form method="post" action="{{ url('/password/reset/'.$token) }}" class="form-horizontal">
      <input type="hidden" name="token" value="{{ $token }}">
      <p><input type="text" id="inputEmail" name="email" placeholder="{{ Lang::get('wardrobe.account_email') }}"></p>
      <p><input type="password" name="password" placeholder="{{ Lang::get('wardrobe.account_password') }}"></p>
      <p><input type="password" name="password_confirmation" placeholder="{{ Lang::get('wardrobe.account_password_confirm') }}"></p>
      <button type="submit" class="btn">{{ Lang::get('wardrobe.forgot_pass_reset_send') }}</button>
      </div>
    </form>
  </div>
@stop