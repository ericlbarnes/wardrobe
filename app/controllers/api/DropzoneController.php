<?php

use Carbon\Carbon;
use Symfony\Component\Yaml\Parser;

class ApiDropzoneController extends BaseController {

	/**
	 * Create a new API Dropzone controller.
	 *
	 * @return \ApiDropzoneController
	 */
	public function __construct()
	{
		parent::__construct();

		$this->beforeFilter('auth');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @throws Exception
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

	/**
	 * Post an image from the admin
	 *
	 * @return Json
	 */
	public function postImage()
	{
		$file = Input::file('file');
		$destinationPath = public_path().'/img/';
		$filename = $file->getClientOriginalName();
		if (Input::file('file')->move($destinationPath, $filename))
		{
			// @note - Using the absolute url so it loads images when ran in sub folder
			// this will make exporting less portable and may need to re-address at a later point.
			return Response::json(array('filename' => url('/img/'.$filename)));
		}
		return Response::json(array('error' => 'Upload failed. Please ensure your public/img directory is writable.'));
	}

}
