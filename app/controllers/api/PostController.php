<?php

use Wardrobe\PostRepositoryInterface;

class ApiPostController extends BaseController {

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
		// $this->beforeFilter('auth');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return (string) $this->posts->all();
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		if ($messages = $this->validatePost(Input::get()))
		{
			return Response::make(json_encode($messages->all()), 500, array('Content-Type' => 'application/json'));
		}

		return (string) $this->posts->create(Input::get('title'), Input::get('content'), Input::get('slug'));
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return $this->posts->find($id);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		return (string) $this->posts->find($id);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		if ($messages = $this->validatePost(Input::get(), $id))
		{
			return Response::make(json_encode($messages->all()), 500, array('Content-Type' => 'application/json'));
		}

		return (string) $this->posts->update($id, Input::get('title'), Input::get('content'), Input::get('slug'));
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$this->posts->delete($id);
	}

		/**
	 * Validate the post.
	 *
	 * @param  array  $data
	 * @return MessageBag|null
	 */
	protected function validatePost($data, $id = null)
	{
		$rules['title'] = 'required';
		$rules['slug'] = 'required|alpha_dash|unique:posts,slug';

		if ($id)
		{
			$rules['slug'] .= ','.$id;
		}

		$validator = Validator::make($data, $rules);

		if ($validator->fails())
		{
			return $validator->errors();
		}
	}

}
