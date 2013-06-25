<?php

use Wardrobe\Repositories\UserRepositoryInterface;

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

    if (Config::get("wardrobe.installed") === true)
    {
      return App::abort(404, 'Page not found');
    }

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
    Artisan::call('key:generate', array('--env' => App::environment()));

    $this->doDbConfig(Input::get('host'), Input::get('db'), Input::get('user'), Input::get('pass'));

    try {
      Artisan::call('migrate', array('--env' => App::environment()));
    }
    catch (Exception $e)
    {
      return Redirect::back()
                          ->withErrors(array('error' => $e->getMessage()))
                          ->with('install_errors', true);
    }

    return Redirect::to('install/user');
  }

  /**
   * Get the user form.
   *
   * @return Response
   */
  public function getUser()
  {
    return View::make('admin.installer.user');
  }

  /**
   * Add the user and show success!
   *
   * @return Response
   */
  public function postUser()
  {
    $messages = $this->users->validForCreation(
      Input::get('first_name'),
      Input::get('last_name'),
      Input::get('email'),
      Input::get('password')
    );

    if (count($messages) > 0)
    {
      return Redirect::back()
                          ->withErrors($messages)
                          ->with('install_errors', true);
    }

    $user = $this->users->create(
      Input::get('first_name'),
      Input::get('last_name'),
      Input::get('email'),
      1,
      Input::get('password')
    );

    return Redirect::to('install/config');
  }

  /**
   * Get the config form.
   */
  public function getConfig()
  {
    return View::make('admin.installer.config');
  }

  /**
   * Save the config files
   */
  public function postConfig()
  {
    $this->setWardrobeConfig(Input::get('title', 'Site Name'), Input::get('theme', 'Default'), Input::get('per_page', 5));
    return View::make('admin.installer.complete');
  }

  /**
   * Set database configuration in both the config file, and the current request.
   *
   * @param string $host - Database Host, usually localhost
   * @param string $db - Database Name
   * @param string $user - Database Username
   * @param string $pass - Database Password
   *
   * @return void
   */

  protected function doDbConfig($host, $db, $user, $pass) {
    $config = <<<CONFIG
<?php

return array(

  'fetch' => PDO::FETCH_CLASS,

  'default' => 'mysql',

  'connections' => array(

    'mysql' => array(
      'driver'    => 'mysql',
      'host'      => '$host',
      'database'  => '$db',
      'username'  => '$user',
      'password'  => '$pass',
      'charset'   => 'utf8',
      'collation' => 'utf8_unicode_ci',
      'prefix'    => '',
    ),

  ),

  'migrations' => 'migrations',

);
CONFIG;

    file_put_contents(app_path()."/config/database.php", $config); 

    // Set db config for current request
    Config::set('database.connections.mysql', [
      'driver'    => 'mysql',
      'host'      => $host,
      'database'  => $db,
      'username'  => $user,
      'password'  => $pass,
      'charset'   => 'utf8',
      'collation' => 'utf8_unicode_ci',
      'prefix'    => '',
    ]); 
  }

  /**
   * Update the configs based on passed data
   *
   * @param string $title
   * @param string $theme
   * @param int $per_page
   */
  protected function setWardrobeConfig($title, $theme, $per_page)
  {
    $path = app_path().'/config/wardrobe.php';
    $content = str_replace(
      array('##title##', '##theme##', "'##per_page##'", "'##installed##'"),
      array(addslashes($title), $theme, (int) $per_page, 'true'),
      File::get($path)
    );
    return File::put($path, $content);
  }
}
