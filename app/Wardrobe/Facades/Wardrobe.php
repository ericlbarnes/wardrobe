<?php namespace Wardrobe\Facades;

use Config;
use Wardrobe\Repositories\PostRepositoryInterface;

class Wardrobe {

  /**
   * The post repository implementation.
   *
   * @var Wardrobe\PostRepositoryInterface
   */
  protected $postsRepo;

  /**
   * Create a new wardrobe facade instance.
   *
   * @param  Wardrobe\PostRepositoryInterface  $postsRepo
   * @return void
   */
  public function __construct(PostRepositoryInterface $postsRepo)
  {
    $this->postsRepo = $postsRepo;
  }

  /**
   * Fetch Posts
   *
   * @param array $params
   * @return Posts
   */
  public function posts($params = array())
  {
    $per_page = isset($params['per_page']) ? $params['per_page'] : Config::get('wardrobe.per_page');

    return $this->postsRepo->active($per_page);
  }

  /**
   * Fetch all tags
   */
  public function tags()
  {
    return $this->postsRepo->allTags();
  }
}