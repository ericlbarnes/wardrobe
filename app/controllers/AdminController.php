<?php

class AdminController extends BaseController {

	/**
	 * Create a new admin controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();

		$this->beforeFilter('auth');
	}

	/**
	 * Get the main admin view.
	 */
	public function getIndex()
	{
		return View::make('admin.index')
                        ->with('user', Auth::user());
	}
}
