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
    $data = array(
      'posts'   => $this->posts->active(),
      'updated' => $this->getUpdatedDate($posts),
    );

    header("Content-Type: application/rss+xml; charset=UTF-8");

    return Response::view('themes.'.$this->theme.'.atom', $data, 200, array(
      'Content-Type' => 'application/rss+xml; charset=UTF-8',
    ));
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
