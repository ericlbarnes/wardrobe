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
Route::resource('post', 'PostController');
Route::get('wardrobe', 'AdminController@getIndex');
Route::resource('api/post', 'ApiPostController');
