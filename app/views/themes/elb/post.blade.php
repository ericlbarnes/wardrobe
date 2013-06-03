@extends('themes.elb.layout')

@section('title')
	{{ $post->title }} | Eric Barnes
@stop

@section('content')
	<section>
  <div class="post">
    <h2 class="title">{{ $post->title }}</h2>
    {{ md($post->content) }}
  </div>
</section>
@stop

