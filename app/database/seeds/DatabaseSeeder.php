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
		$this->call('TagsTableSeeder');
	}

}

class PostTableSeeder extends Seeder {

    public function run()
    {
        DB::table('posts')->delete();
        Wardrobe\Post::create(array('title' => 'Seeded', 'slug' => 'seeded', 'content' => 'Some example content'));
    }
}

class TagsTableSeeder extends Seeder {

	public function run()
	{
		DB::table('tags')->delete();
		Wardrobe\Tag::create(array('post_id' => 1, 'tag' => 'code'));
		Wardrobe\Tag::create(array('post_id' => 1, 'tag' => 'laravel'));
		Wardrobe\Tag::create(array('post_id' => 1, 'tag' => 'javascript'));
	}
}
