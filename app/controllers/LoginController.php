<?php

use Wardrobe\Repositories\UserRepositoryInterface;

class LoginController extends BaseController {

	/**
	 * The user repository implementations.
	 *
	 * @param  \Wardrobe\UserRepositoryInterface
	 */
	protected $users;

	/**
	 * Create a new login controller instance.
	 *
	 * @param  \Wardrobe\UserRepositoryInterface  $users
	 * @return void
	 */
	public function __construct(UserRepositoryInterface $users)
	{
		parent::__construct();

		$this->users = $users;
	}

	/**
	 * Get the user login view.
	 */
	public function getIndex()
	{
		return View::make('admin.login');
	}

	/**
	 * Handle a user login attempt.
	 */
	public function postIndex()
	{
		$email = mb_strtolower(Input::get('email'));

		$password = Input::get('password');

		if ($this->users->login($email, $password, Input::get('remember') == 'yes'))
		{
			return Redirect::to('wardrobe');
		}

		return Redirect::back()
                          ->withInput()
                          ->with('login_errors', true);
	}

	/**
	 * Log out the user
	 */
	public function getLogout()
	{
		Auth::logout();
		return Redirect::to('wardrobe/login');
	}

	/**
	 * Forgot password form
	 */
	public function getRemind()
	{
		return View::make('admin.auth.forgot');
	}

	/**
	 * Send an email to reset your password.
	 */
	public function postRemind()
	{
		$credentials = array('email' => Input::get('email'));

		return Password::remind($credentials, function($message, $user)
		{
			$message->subject('Reset your password');
		});
	}
}
