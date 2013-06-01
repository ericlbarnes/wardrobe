<?php

class Post extends Eloquent {

	protected $fillable = array('title', 'slug', 'content');

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'posts';

}