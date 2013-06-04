<?php namespace Wardrobe;

class DbPostRepository implements PostRepositoryInterface {

	/**
	 * Get all of the posts.
	 *
	 * @return array
	 */
	public function all()
	{
		return Post::with('tags')->orderBy('id', 'desc')->get();
	}

	/**
	 * Get all of the active posts.
	 *
	 * @return array
	 */
	public function allActive()
	{
		return Post::with('tags')->where('active', 1)->orderBy('id', 'desc')->get();
	}

	/**
	 * Get a Post by its primary key.
	 *
	 * @param  int   $id
	 * @return Post
	 */
	public function find($id)
	{
		return Post::with('tags')->findOrFail($id);
	}

	/**
	 * Get a Post by its slug
	 *
	 * @param  string 	$slug
	 * @return Post
	 */
	public function findBySlug($slug)
	{
		return Post::with('tags')->where('slug', $slug)->first();
	}

	/**
	 * Create a new post.
	 *
	 * @param  string  $title
	 * @param  string  $content
	 * @param  string  $slug
	 * @param  string  $active
	 * @return Post
	 */
	public function create($title, $content, $slug, $active)
	{
		return Post::create(compact('title', 'content', 'slug', 'active'));
	}

	/**
	 * Update a post's title and content.
	 *
	 * @param  int  $post
	 * @param  string  $title
	 * @param  string  $content
	 * @param  string  $slug
	 * @param  string  $active
	 * @return Post
	 */
	public function update($id, $title, $content, $slug, $active)
	{
		$post = $this->find($id);

		$post->fill(compact('title', 'content', 'slug', 'active'))->save();

		return $post;
	}

	/**
	 * Delete the post with the given ID.
	 *
	 * @param  int  $id
	 * @return void
	 */
	public function delete($id)
	{
		Post::where('id', $id)->delete();
	}

}
