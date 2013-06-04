<?php

use Wardrobe\Tag;

class ApiTagController extends BaseController {

	/**
	 * Create a new API Tag controller.
	 *
	 * @param  Wardrobe\PostRepositoryInterface  $posts
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();
		// $this->posts = $posts;
		$this->beforeFilter('auth');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return Tag::orderBy('tag', 'asc')->distinct()->get();
	}
}
