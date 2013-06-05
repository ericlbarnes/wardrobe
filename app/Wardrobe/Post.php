<?php namespace Wardrobe;

class Post extends \Eloquent {

	/**
	 * The table associated with the model.
	 *
	 * @var string
	 */
	protected $table = 'posts';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = array('title', 'slug', 'content', 'active', 'publish_date');

	/**
	 * Tags Relationship
	 * @return Relationship
	 */
	public function tags()
  {
		return $this->hasMany('\Wardrobe\Tag', 'post_id');
	}
}
