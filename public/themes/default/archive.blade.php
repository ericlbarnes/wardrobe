@extends(theme_path('layout'))

@section('title')
  Archives
@stop

@section('content')
  <section>

    {{-- Archive Heading --}}
    {{-- Notice the triple brackets to escape any xss for tags and search term. --}}
    @if (isset($tag))
      <h2 class="title">{{{ ucfirst($tag) }}} Archives</h2>
    @elseif ($search)
      <h2 class="title">Results for {{{ $search }}}</h2>
    @else
      <h2 class="title">Archives</h2>
    @endif

    @foreach ($posts as $post)
      @include(theme_path('inc.post'))
    @endforeach

    {{ $posts->links() }}

  </section>
@stop
