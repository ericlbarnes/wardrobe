@extends('themes.elb.layout')

@section('title')
	Archives | Eric Barnes
@stop

@section('content')
	<section>
		<h2>Archives</h2>
		<ul class="archive">
			@foreach ($posts as $post)
				<li>
					<span>{{ $post->updated_at }}</span> <strong><a href="/post/{{ $post->slug }}">{{ $post->title }}</a></strong>
				</li>
			@endforeach
		</ul>
	</section>
@stop