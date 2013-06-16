@extends(theme_path('layout'))

@section('content')
	<section class="home">
		@foreach ($posts as $post)
      <div class="post">
        <h1><a href="/post/{{ $post->slug }}">{{ $post->title }}</a></h1>
        <div class="date">{{ date("M/d/Y", strtotime($post->publish_date)) }}</div>
        <div class="content">
          {{ md($post->content) }}
        </div>
      </div>
    @endforeach

    {{ $posts->links() }}
	</section>
@stop
