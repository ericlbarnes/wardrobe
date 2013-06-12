<?php

use Wardrobe\UserRepositoryInterface;

class InstallController extends BaseController {

  /**
   * The user repository implementation.
   *
   * @var Wardrobe\UserRepositoryInterface
   */
  protected $users;

  /**
   * Create a new API User controller.
   *
   * @param  Wardrobe\UserRepositoryInterface  $user
   * @return void
   */
  public function __construct(UserRepositoryInterface $users)
  {
    parent::__construct();

    $this->users = $users;
  }

  /**
   * Get the install index.
   *
   * @return Response
   */
  public function getIndex()
  {
    return View::make('admin.installer.step1');
  }

  /**
   * Run the migrations
   *
   * @return Response
   */
  public function postIndex()
  {
    $artisan = Artisan::call('migrate', array('--env' => App::environment()));

    if ($artisan > 0)
    {
      return Redirect::back()
                          ->withErrors(array('error' => 'Install Failed'))
                          ->with('install_errors', true);
    }

    return Redirect::to('install/step2');
  }

  /**
   * Get the user form.
   *
   * @return Response
   */
  public function getUser()
  {
    return View::make('admin.installer.step2');
  }

  /**
   * Add the user and show success!
   *
   * @return Response
   */
  public function postUser()
  {
    $rules = array(
      'first_name' => 'required',
      'last_name' => 'required',
      'email' => 'required|email',
      'password' => 'required|min:6',
    );

    $validator = Validator::make(Input::get(), $rules);

    if ($validator->fails())
    {
      return Redirect::back()
                          ->withErrors($validator->messages())
                          ->with('install_errors', true);
    }

    $user = $this->users->create(
      Input::get('first_name'),
      Input::get('last_name'),
      Input::get('email'),
      1,
      Input::get('password')
    );

    return View::make('admin.installer.complete');
  }

}
