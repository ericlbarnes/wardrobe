<?php namespace Wardrobe;

use Config, Cache;
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
	protected $fillable = array('title', 'slug', 'content', 'active', 'publish_date', 'user_id');

	/**
	 * Tags Relationship
	 *
	 * @return Relationship
	 */
	public function tags()
	{
		return $this->hasMany('\Wardrobe\Tag', 'post_id');
	}

	/**
	 * Meta Relationship
	 *
	 * @return Relationship
	 */
	public function meta()
	{
		return $this->hasMany('\Wardrobe\Meta', 'post_id');
	}

	/**
	 * User relationship
	 *
	 * @return Relationship
	 */
	public function user()
	{
		return $this->belongsTo('Wardrobe\User');
	}

	/**
	 * Get the content parsed into html
	 *
	 * @return string
	 */
	public function getParsedContentAttribute()
	{
		if (Config::get('wardrobe.cache'))
		{
			$content = $this->attributes['content'];
			return Cache::rememberForever('post-'.$this->attributes['id'], function() use ($content)
			{
				return md($content);
			});
		}
		return md($this->attributes['content']);
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
