<?php

class ApiPostController extends BaseController {

	protected $seed = array(
		array('id' => 1, 'title' => 'Testing'),
		array('id' => 2, 'title' => 'Testing #2'),
	);

	public function getIndex()
	{
		return Response::json($this->seed);
	}

	public function getDetails($id)
	{
		// Super secure eh :)
		return Response::json($this->seed[$id-1]);
	}
}