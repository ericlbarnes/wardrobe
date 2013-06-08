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
Route::controller('wardrobe/login', 'LoginController');
Route::resource('api/post', 'ApiPostController');
Route::resource('api/tag', 'ApiTagController');
