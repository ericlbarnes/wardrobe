@extends(theme_path('layout'))

@section('title')
  {{ site_title() }}
@stop

@section('content')
	<section class="home">
		@foreach ($posts as $post)
      @include(theme_path('inc.post'))
    @endforeach

    {{ $posts->links() }}
	</section>
@stop
