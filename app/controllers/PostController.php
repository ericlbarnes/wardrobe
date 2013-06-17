<?php

use Wardrobe\Repositories\PostRepositoryInterface;

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
		$posts = $this->posts->active(Config::get('wardrobe.per_page'));

		return View::make('themes.'.$this->theme.'.archive', compact('posts'));
	}

	/**
	 * Get posts by tag
	 *
	 * string $tag
	 * return Response
	 */
	public function getTag($tag)
	{
		$posts = $this->posts->activeByTag($tag, Config::get('wardrobe.per_page'));

		return View::make('themes.'.$this->theme.'.archive', compact('posts', 'tag'));
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

		if ( ! $post)
		{
			return App::abort(404, 'Page not found');
		}

		return View::make('themes.'.$this->theme.'.post', compact('post'));

	}
}
