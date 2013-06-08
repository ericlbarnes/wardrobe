<?php namespace Wardrobe;

use Carbon\Carbon;

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

	/**
	 * Get the atom date for atom feeds
	 * @return DateTime
	 */
	public function getAtomDateAttribute()
	{
		$dt = Carbon::createFromFormat('Y-m-d H:i:s', $this->attributes['publish_date']);
		return $dt->toATOMString();
	}

	/**
	 * Get the atom date for rss feeds
	 * @return DateTime
	 */
	public function getRssDateAttribute()
	{
		$dt = Carbon::createFromFormat('Y-m-d H:i:s', $this->attributes['publish_date']);
		return $dt->toRSSString();
	}
}
