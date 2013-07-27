<?php

use Illuminate\Database\Migrations\Migration;

class CreateMeta extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('posts_meta', function($table)
		{
			$table->integer('id');
			$table->integer('post_id');
			$table->string('key');
			$table->text('value');
			$table->unique(array('post_id', 'key'));
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('posts_meta');
	}

}