<?php namespace Wardrobe;

use Auth, Hash, Validator;

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
	 * Validate that the given user is valid for creation.
	 *
	 * @param  string  $first_name
	 * @param  string  $last_name
	 * @param  string  $email
	 * @param  string  $password
	 * @return \Illuminate\Support\MessageBag
	 */
	public function validateForCreation($first_name, $last_name, $email, $password)
	{
		$validator = Validator::make(compact('first_name', 'last_name', 'email', 'password'), array(
			'first_name' => 'required|max:255',
			'last_name'  => 'required|max:255',
			'email'      => 'required|email|unique:users',
			'password'   => 'required|min:6',
		));

		$validator->passes();

		return $validator->errors();
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