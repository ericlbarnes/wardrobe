<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'HomeController@getIndex');
Route::get('archive', 'PostController@index');
Route::get('post/{slug}', 'PostController@getShow');
Route::get('tag/{tag}', 'PostController@getTag');
Route::get('archive', 'PostController@getIndex');
Route::controller('post', 'PostController');
Route::controller('rss', 'RssController');

Route::get('wardrobe', 'AdminController@getIndex');
Route::get('wardrobe/logout', 'LoginController@getLogout');
Route::controller('wardrobe/login', 'LoginController');
Route::resource('api/post', 'ApiPostController');
Route::resource('api/tag', 'ApiTagController');
Route::resource('api/user', 'ApiUserController');
Route::get('install', 'InstallController@getIndex');
Route::post('install', 'InstallController@postIndex');
Route::get('install/step2', 'InstallController@getUser');
Route::post('install/user', 'InstallController@postUser');

$theme_routes = __DIR__.'/../public/themes/'.Config::get('wardrobe.theme').'/routes.php';

if (file_exists($theme_routes))
{
  include $theme_routes;
}

/**
 * Password reset
 */
Route::get('password/reset/{token}', function($token)
{
    return View::make('admin.auth.reset')->with('token', $token);
});

/**
 * Password reset Success
 */
Route::post('password/reset/{token}', function()
{
    $credentials = array('email' => Input::get('email'));

    return Password::reset($credentials, function($user, $password)
    {
        $user->password = Hash::make($password);

        $user->save();

        return Redirect::to('wardrobe');
    });
});