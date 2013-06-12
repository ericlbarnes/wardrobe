<?php namespace Wardrobe;

use Auth, Hash;

class DbUserRepository implements UserRepositoryInterface {

	/**
	 * Get a User by their primary key.
	 *
	 * @param  int   $id
	 * @return Post
	 */
	public function find($id)
	{
		return User::findOrFail($id);
	}

	/**
	 * Create a user
	 *
	 * @param  string  $first_name
	 * @param  string  $last_name
	 * @param  string  $email
	 * @param  int  $active
	 * @param  string  $password
	 * @return Post
	 */
	public function create($first_name, $last_name, $email, $active, $password)
	{
		$password = Hash::make($password);

		return User::create(compact('first_name', 'last_name', 'email', 'password', 'active'));
	}

	/**
	 * Update a user
	 *
	 * @param  int  $id
	 * @param  string  $first_name
	 * @param  string  $last_name
	 * @param  string  $email
	 * @param  int  $active
	 * @param  string  $password
	 * @return Post
	 */
	public function update($id, $first_name, $last_name, $email, $active, $password = null)
	{
		$user = $this->find($id);

		// Not very clean
		if (trim($password) != '')
		{
			$password = Hash::make($password);
		}
		else
		{
			unset($password);
		}

		$user->fill(compact('first_name', 'last_name', 'email', 'password', 'active'))->save();

		return $user;
	}

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