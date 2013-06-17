<?php

/**
 * Site Title
 *
 * Helper that allows you to easily get the site title
 *
 * @return string
 */
function site_title()
{
  return Config::get('wardrobe.title');
}

/**
 * Theme Path
 *
 * Helper that allows you to easily get a theme path inside the views.
 * Example: @extends(theme_path('layout'))
 *
 * @param string $file - The file to load
 * @return string
 */
function theme_path($file = null)
{
  return 'themes/'.Config::get('wardrobe.theme').'/'.$file;
}
