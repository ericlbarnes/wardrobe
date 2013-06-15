<?php

use Wardrobe\Repositories\PostRepositoryInterface;

class HomeController extends BaseController {

	/**
	 * The post repository implementation.
	 *
	 * @var Wardrobe\PostRepositoryInterface
	 */
	protected $posts;

	/**
	 * Create a new Home controller instance.
	 *
	 * @param  Wardrobe\PostRepositoryInterface  $posts
	 * @return void
	 */
	public function __construct(PostRepositoryInterface $posts)
	{
		parent::__construct();

		$this->posts = $posts;
	}

	/**
	 * Get the Wardrobe index.
	 *
	 * @return Response
	 */
	public function getIndex()
	{
		$posts = $this->posts->active(Config::get('wardrobe.per_page'));

		return View::make('themes.'.$this->theme.'.index', compact('posts'));
	}

}
