<?php

class BaseController extends Controller {

	protected $theme = 'default';

	public function __construct()
	{
		$this->theme = Config::get('app.theme');
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