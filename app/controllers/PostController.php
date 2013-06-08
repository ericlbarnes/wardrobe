<?php

use Carbon\Carbon;
use Wardrobe\PostRepositoryInterface;

class PostController extends BaseController {

	/**
	 * The post repository implementation.
	 *
	 * @var Wardrobe\PostRepositoryInterface
	 */
	protected $posts;

	/**
	 * Create a new API Posts controller.
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
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function getIndex()
	{
		$posts = $this->posts->active();

		return View::make('themes.'.$this->theme.'.archive')
                                             ->with('posts', $posts);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function getShow($slug)
	{
		$post = $this->posts->findBySlug($slug);

		return View::make('themes.'.$this->theme.'.post')
                                             ->with('post', $post);
	}
}
