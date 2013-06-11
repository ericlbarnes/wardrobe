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
   * Get the Wardrobe index.
   *
   * @return Response
   */
  public function getIndex()
  {
    return View::make('admin.install');
  }

  public function postIndex()
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

    $artisan = Artisan::call('migrate', array('--env' => 'local'));
    var_dump($artisan);
  }

}
