<?php namespace Wardrobe;

use Illuminate\Support\ServiceProvider;

class BackendServiceProvider extends ServiceProvider {

	/**
	 * Register the service provider.
	 *
	 * @return void
	 */
	public function register()
	{
		$this->app->singleton('Wardrobe\PostRepositoryInterface', 'Wardrobe\DbPostRepository');

		$this->app->singleton('Wardrobe\UserRepositoryInterface', 'Wardrobe\DbUserRepository');
	}

}