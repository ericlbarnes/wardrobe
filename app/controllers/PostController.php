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
	 * @param PostRepositoryInterface $posts
	 *
	 * @return PostController
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
		$search = trim(Input::get('q'));
		if ($search)
		{
			$posts = $this->posts->search(Input::get('q'), Config::get('wardrobe.per_page'));
		}
		else
		{
			$posts = $this->posts->active(Config::get('wardrobe.per_page'));
		}

		return View::make('themes.'.$this->theme.'.archive', compact('posts', 'search'));
	}

	/**
	 * Get posts by tag
	 *
	 * @param string $tag
	 *
	 * @return Response
	 */
	public function getTag($tag)
	{
		$posts = $this->posts->activeByTag($tag, Config::get('wardrobe.per_page'));

		return View::make('themes.'.$this->theme.'.archive', compact('posts', 'tag'));
	}

	/**
	 * Display the specified resource.
	 *
	 * @param string $slug
	 *
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

	/**
	 * Show a post preview.
	 *
	 * @param int $id
	 *
	 * @return Response
	 */
	public function getPreview($id)
	{
		$post = $this->posts->find($id);

		if ( ! Auth::check() or ! $post)
		{
			return App::abort(404, 'Page not found');
		}

		return View::make('themes.'.$this->theme.'.post', compact('post'));
	}

}
