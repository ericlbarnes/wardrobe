<?php namespace Wardrobe\Html;

use Illuminate\Routing\UrlGenerator;
use Illuminate\Html\HtmlBuilder as IlluminateHtmlBuilder;

class HtmlBuilder extends IlluminateHtmlBuilder{

	/**
	 * Generate a link to a JavaScript file.
	 *
	 * @param  string  $url
	 * @param  array   $attributes
	 * @return string
	 */
	public function script($url, $attributes = array())
	{
		$url = theme_path($url);
		return parent::script($url, $attributes);
	}

	/**
	 * Generate a link to a CSS file.
	 *
	 * @param  string  $url
	 * @param  array   $attributes
	 * @return string
	 */
	public function style($url, $attributes = array())
	{
		$url = theme_path($url);
		return parent::style($url, $attributes);
	}
}
