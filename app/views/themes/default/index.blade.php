@extends('themes.default.layout')

@section('content')
	<section class="home">
		<h1>Header</h1>
		<div class="hero">
			<p>I am Eric Barnes a product engineer at <a href="http://userscape.com">UserScape</a> where I work on <a href="http://helpspot.com">HelpSpot</a> and <a href="http://besnappy.com">Snappy</a>.</p>
		</div>
		<h3 class="archives">Recent Posts</h3>
		<ul class="archive">
			@foreach ($posts as $post)
				<li>
					<span>{{ $post->updated_at }}</span> <strong><a href="/post/{{ $post->slug }}">{{ $post->title }}</a></strong>
				</li>
			@endforeach
		</ul>
		<p><strong><a href="/archive">Complete Archive »</a></strong></p>
	</section>
@stop
