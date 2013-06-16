<?php

use Carbon\Carbon;
use Wardrobe\Repositories\PostRepositoryInterface;

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

		$this->beforeFilter('auth');
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
		$messages = $this->posts->validForCreation(Input::get('title'), Input::get('slug'));

		if (count($messages) > 0)
		{
			return Response::json($messages->all(), 500);
		}

		$date = (Input::get('publish_date') == "") ? "Now" : Input::get('publish_date');

		return $this->posts->create(
			Input::get('title'),
			Input::get('content'),
			Input::get('slug'),
			explode(',', Input::get('tags')),
			(bool) Input::get('active'),
			Carbon::createFromTimestamp(strtotime($date))
		);
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
		$messages = $this->posts->validForUpdate($id, Input::get('title'), Input::get('slug'));

		if (count($messages) > 0)
		{
			return Response::json($messages->all(), 500);
		}

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

}
