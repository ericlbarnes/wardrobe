<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		$this->call('PostTableSeeder');
	}

}

class PostTableSeeder extends Seeder {

    public function run()
    {
        DB::table('posts')->delete();
        Post::create(array('title' => 'Seeded', 'slug' => 'seeded', 'content' => 'Some example content'));
    }

}