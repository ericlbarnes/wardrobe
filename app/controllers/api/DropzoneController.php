<?php

use Carbon\Carbon;
use Symfony\Component\Yaml\Parser;

class ApiDropzoneController extends BaseController {

  /**
   * Create a new API Dropzone controller.
   *
   * @return void
   */
  public function __construct()
  {
    parent::__construct();

    // $this->beforeFilter('auth');
  }

  public function getIndex()
  {
    var_dump('index');
    die;
  }

  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function postIndex()
  {
    if ( ! Input::hasFile('file'))
    {
      return Response::json(array('error' => 'File is required'), 500);
    }

    $contents = trim(File::get(Input::file('file')->getRealPath()));

    if (substr($contents, 0, 3) !== '---')
    {
      throw new Exception('Bad Markdown Formatting');
    }

    if ( ! ($pos = strpos($contents, '---', 3)))
    {
      throw new Exception('Bad Markdown Formatting');
    }

    $frontMatter = trim(substr($contents, 3, $pos - 3));
    $contents = trim(substr($contents, $pos + 3));

    $yaml = new Parser();

    $fields = $yaml->parse($frontMatter);

    return Response::json(array(
      'fields' => $fields,
      'content' => $contents
    ));

  }
}
