<?php namespace Wardrobe;

interface UserRepositoryInterface {

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
	public function login($email, $password, $remember = false);

}