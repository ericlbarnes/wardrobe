<?php namespace Wardrobe\Repositories;

use DateTime;

interface PostRepositoryInterface {

	/**
	 * Get all of the posts.
	 *
	 * @return array
	 */
	public function all();

	/**
	 * Get all the active posts.
	 *
	 * @param int $per_page
	 */
	public function active($per_page);

	/**
	 * Get all posts with a tag
	 *
	 * @param  string   $tag
	 * @param int $per_page
	 * @return array
	 */
	public function activeByTag($tag, $per_page);

	/**
	 * Get a Post by its primary key.
	 *
	 * @param  int   $id
	 * @return Post
	 */
	public function find($id);

	/**
	 * Get a Post by its slug
	 *
	 * @param  string   $slug
	 * @return Post
	 */
	public function findBySlug($slug);

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
	public function create($title, $content, $slug, array $tags, $active, DateTime $publish_date);

	/**
	 * Update a post's title and content.
	 *
	 * @param  int  $post
	 * @param  string  $title
	 * @param  string  $content
	 * @param  string  $slug
	 * @param  array  $tags
	 * @param  bool  $active
	 * @param  DateTime  $publish_date
	 * @return Post
	 */
	public function update($id, $title, $content, $slug, array $tags, $active, DateTime $publish_date);

	/**
	 * Delete the post with the given ID.
	 *
	 * @param  int  $id
	 * @return void
	 */
	public function delete($id);

	/**
	 * Get a list of all of the tags used by the blog.
	 *
	 * @return array
	 */
	public function allTags();

	/**
	 * Determine if the given post is valid for creation.
	 *
	 * @param  string  $title
	 * @param  string  $slug
	 * @return \Illuminate\Support\MessageBag
	 */
	public function validForCreation($title, $slug);

	/**
	 * Determine if a given post is valid for updating.
	 *
	 * @param  string  $title
	 * @param  string  $slug
	 * @param  int  $id
	 * @return \Illuminate\Support\MessageBag
	 */
	public function validForUpdate($id, $title, $slug);

}