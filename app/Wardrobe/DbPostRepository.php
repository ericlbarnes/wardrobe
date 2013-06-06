<?php namespace Wardrobe;

use \DateTime;

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
	public function active()
	{
		return Post::with('tags')
                        ->where('active', 1)
                        ->where('publish_date', '<=', new DateTime)
                        ->orderBy('id', 'desc')
                        ->get();
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
	 * @param  array  $tags
	 * @param  bool  $active
	 * @param  DateTime  $publish_date
	 * @return Post
	 */
	public function create($title, $content, $slug, array $tags, $active, DateTime $publish_date)
	{
		$post = Post::create(compact('title', 'content', 'slug', 'active', 'publish_date'));

		$post->tags()->delete();

		$post->tags()->createMany($this->prepareTags($tags));

		return $post;
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
	public function update($id, $title, $content, $slug, array $tags, $active, DateTime $publish_date)
	{
		$post = $this->find($id);

		$post->fill(compact('title', 'content', 'slug', 'active', 'publish_date'))->save();

		$post->tags()->delete();

		$post->tags()->createMany($this->prepareTags($tags));

		return $post;
	}

	/**
	 * Prepare an array of tags for database storage.
	 *
	 * @param  array  $tags
	 * @return array
	 */
	protected function prepareTags(array $tags)
	{
		$results = array();

		foreach ($tags as $tag)
		{
			$results[] = compact('tag');
		}

		return $results;
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
