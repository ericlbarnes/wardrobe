@extends(theme_path('layout'))

@section('title')
  {{ $post->title }}
@stop

@section('content')
  <section>
  <div class="post">
    <h2 class="title">{{ $post->title }}</h2>
    {{ md($post->content) }}
  </div>
</section>
@stop

