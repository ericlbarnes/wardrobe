<?php namespace Wardrobe\Facades;

use Wardrobe\Repositories\PostRepositoryInterface;

class Wardrobe {

  /**
   * The post repository implementation.
   *
   * @var Wardrobe\PostRepositoryInterface
   */
  protected $posts;

  /**
   * Create a new Home controller instance.
   *
   * @param  Wardrobe\PostRepositoryInterface  $posts
   * @return void
   */
  public function __construct(PostRepositoryInterface $posts)
  {
    $this->posts = $posts;
  }

  /**
   * Fetch Posts
   *
   * @param array $params
   * @return Posts
   */
  public function fetch($params = array())
  {
    $per_page = isset($params['per_page']) ? $params['per_page'] : Config::get('wardrobe.per_page');

    return $this->posts->active($per_page);
  }

  /**
   * Fetch all tags
   */
  public function tags()
  {
    return $this->posts->allTags();
  }
}