<?php namespace Wardrobe;

use Auth, Hash;

class DbUserRepository implements UserRepositoryInterface {

	/**
	 * Log the user into the application.
	 *
	 * If the credentials are invalid, returns false, else returns true.
	 *
	 * @param  string  $email
	 * @param  stirng  $password
	 * @param  bool    $remember
	 * @return bool
	 */
	public function login($email, $password, $remember = false)
	{
		$user = User::where('email', $email)->first();

		if ($user and Hash::check($password, $user->password))
		{
			Auth::login($user, $remember);

			return true;
		}

		return false;
	}

}