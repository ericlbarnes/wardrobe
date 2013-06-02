<?php

use Wardrobe\User;

class LoginController extends BaseController {

	public function __construct()
	{
		parent::__construct();
	}

	public function getIndex()
	{
		return View::make('admin.login');
	}

	/**
	 * Handle the login
	 * @return Redirect
	 */
	public function postIndex()
	{
		Input::flash();

		$credentials = array(
			'email' => mb_strtolower(Input::get('email')),
			'password' => Input::get('password'),
		);

		if (Auth::attempt($credentials, Input::get('remember') == 'yes'))
		{
			return Redirect::to('wardrobe/login');
		}

		return Redirect::back()->with('login_errors', true);
	}
}
