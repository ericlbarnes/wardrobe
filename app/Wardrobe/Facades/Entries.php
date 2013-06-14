<?php namespace Wardrobe\Facades;

use Wardrobe\Repositories\PostRepositoryInterface;

class Entries {

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
   */
  public function fetch($params = array())
  {
    $per_page = isset($params['per_page']) ? $params['per_page'] : "30";

    return $this->posts->active()->paginate($per_page);
  }
}