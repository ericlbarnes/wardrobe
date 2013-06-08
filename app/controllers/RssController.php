<?php

use Wardrobe\PostRepositoryInterface;

class RssController extends BaseController {

  /**
   * The post repository implementation.
   *
   * @var Wardrobe\PostRepositoryInterface
   */
  protected $posts;

  /**
   * Create a new API Posts controller.
   *
   * @param  Wardrobe\PostRepositoryInterface  $posts
   * @return void
   */
  public function __construct(PostRepositoryInterface $posts)
  {
    parent::__construct();

    $this->posts = $posts;
  }

  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function getIndex()
  {
    $posts = $this->posts->active();

    header("Content-Type: application/rss+xml; charset=UTF-8");
    return View::make('themes.'.$this->theme.'.atom')
                                             ->with('posts', $posts)
                                             ->with('updated', $this->getUpdatedDate($posts));
  }

  /**
   * Get the last post publish date to set the feed updated attribute
   *
   * @param Illuminate\Database\Eloquent\Collection $posts
   * @return DateTime
   */
  protected function getUpdatedDate($posts)
  {
    return $posts[0]->atom_date;
  }
}
