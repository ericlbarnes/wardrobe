<?php

class PostController extends BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$posts = Post::orderBy('created_at', 'desc')->get();
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
		$post = Post::where('slug', $slug)->first();
		return View::make('themes.'.$this->theme.'.post')
			->with('post', $post);
	}

}