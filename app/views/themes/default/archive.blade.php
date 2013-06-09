@extends('themes.default.layout')

@section('title')
  Archives
@stop

@section('content')
  <section>
    <h2 class="title">Archives</h2>
    <ul class="archive">
      @foreach ($posts as $post)
        <li>
          <span>{{ date("M/d/Y", strtotime($post->publish_date)) }}</span> <strong><a href="/post/{{ $post->slug }}">{{ $post->title }}</a></strong>
        </li>
      @endforeach
    </ul>
  </section>
@stop
