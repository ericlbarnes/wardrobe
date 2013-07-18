<?php

class BaseController extends Controller {

	/**
	 * The default theme used by the blog.
	 *
	 * @var string
	 */
	protected $theme = 'default';

	/**
	 * Create the base controller instance.
	 *
	 * @return BaseController
	 */
	public function __construct()
	{
		$this->theme = Config::get('wardrobe.theme');

		// Redirect to /install if the db isn't setup.
		if (Config::get("wardrobe.installed") !== true)
		{
			header('Location: install');
			exit;
		}
	}

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout);
		}
	}

}
