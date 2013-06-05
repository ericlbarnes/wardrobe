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
		$this->call('UserTableSeeder');
	}

}

class PostTableSeeder extends Seeder {

    public function run()
    {
        DB::table('posts')->delete();
        Wardrobe\Post::create(array(
        	'title' => 'Seeded',
        	'slug' => 'seeded',
        	'content' => 'Some example content',
        	'active' => 1,
        	'publish_date' => new DateTime,
        ));
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

class UserTableSeeder extends Seeder {

	public function run()
	{
		DB::table('users')->delete();

		Wardrobe\User::create(array(
			'first_name' => 'Taylor',
			'last_name'  => 'Otwell',
			'email'      => 'taylorotwell@gmail.com',
			'password'   => Hash::make('secret'),
		));

		Wardrobe\User::create(array(
			'first_name' => 'Eric',
			'last_name'  => 'Barnes',
			'email'      => 'eric@ericlbarnes.com',
			'password'   => Hash::make('password'),
		));

		Wardrobe\User::create(array(
			'first_name' => 'Demo',
			'last_name'  => 'Demo',
			'email'      => 'demo@example.com',
			'password'   => Hash::make('demo'),
		));
	}
}
