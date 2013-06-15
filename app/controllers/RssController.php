<?php

use Wardrobe\Repositories\PostRepositoryInterface;

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
    $posts = $this->posts->active(100);

    $data = array(
      'posts'   => $posts,
      'updated' => $posts[0]->atom_date,
    );

    return Response::view('themes.'.$this->theme.'.atom', $data, 200, array(
      'Content-Type' => 'application/rss+xml; charset=UTF-8',
    ));
  }
}