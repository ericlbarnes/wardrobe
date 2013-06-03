<?php namespace Wardrobe;

class Tag extends \Eloquent {

	/**
	 * The table associated with the model.
	 *
	 * @var string
	 */
	protected $table = 'tags';

	/**
	 * Turn off timestamps
	 *
	 * @var boolean
	 */
	public $timestamps = false;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = array('post_id', 'tag');

	public function allTags()
	{
		return Tag::orderBy('id', 'desc')->distinct()->get();
	}

	/**
	 * Post relationship
	 *
	 * @return Relationship
	 */
	public function posts()
  {
		return $this->belongsTo('\Wardrobe\Post');
	}
}
