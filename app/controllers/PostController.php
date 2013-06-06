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
	public function index()
	{
		$posts = $this->posts->allActive();

		return View::make('themes.'.$this->theme.'.archive')
                                             ->with('posts', $posts);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($slug)
	{
		$post = $this->posts->findBySlug($slug);

		return View::make('themes.'.$this->theme.'.post')
                                             ->with('post', $post);
	}

	/**
	 * Create a new post instance.
	 *
	 * @return Wardrobe\Post
	 */
	public function store()
	{
		return $this->posts->create(
			Input::get('title'),
			Input::get('content'),
			Input::get('slug'),
			explode(',', Input::get('tags')),
			(bool) Input::get('active'),
			Carbon::createFromTimestamp(strtotime(Input::get('publish_date')))
		);
	}

	/**
	 * Update an existing post instance.
	 *
	 * @param  int  $id
	 * @return Wardrobe\Post
	 */
	public function update($id)
	{
		return $this->posts->update(
			$id,
			Input::get('title'),
			Input::get('content'),
			Input::get('slug'),
			explode(',', Input::get('tags')),
			(bool) Input::get('active'),
			Carbon::createFromTimestamp(strtotime(Input::get('publish_date')))
		);
	}

}
