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
		$this->app->singleton('Wardrobe\Repositories\PostRepositoryInterface', 'Wardrobe\Repositories\DbPostRepository');

		$this->app->singleton('Wardrobe\Repositories\UserRepositoryInterface', 'Wardrobe\Repositories\DbUserRepository');

		$this->app->bind('Wardrobe', function()
		{
			return new \Wardrobe\Facades\Wardrobe(new Repositories\DbPostRepository);
		});
	}

}