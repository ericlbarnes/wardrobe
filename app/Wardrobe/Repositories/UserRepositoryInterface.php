<?php namespace Wardrobe\Repositories;

interface UserRepositoryInterface {

	/**
	 * Get a User by their primary key.
	 *
	 * @param  int   $id
	 * @return Post
	 */
	public function find($id);

	/**
	 * Create a user
	 *
	 * @param  string  $first_name
	 * @param  string  $last_name
	 * @param  string  $email
	 * @param  string  $password
	 * @param  int  $active
	 * @return User
	 */
	public function create($first_name, $last_name, $email, $password, $active);

	/**
	 * Update a user
	 *
	 * @param  int  $id
	 * @param  string  $first_name
	 * @param  string  $last_name
	 * @param  string  $email
	 * @param  string  $password
	 * @param  int  $active
	 * @return User
	 */
	public function update($id, $first_name, $last_name, $email, $password, $active);

	/**
	 * Validate that the given user is valid for creation.
	 *
	 * @param  string  $first_name
	 * @param  string  $last_name
	 * @param  string  $email
	 * @param  string  $password
	 * @return \Illuminate\Support\MessageBag
	 */
	public function validForCreation($first_name, $last_name, $email, $password);

	/**
	 * Validate that the given user is valid for updating.
	 *
	 * @param  int  $id
	 * @param  string  $first_name
	 * @param  string  $last_name
	 * @param  string  $email
	 * @param  string  $password
	 * @return \Illuminate\Support\MessageBag
	 */
	public function validForUpdate($id, $first_name, $last_name, $email, $password);

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