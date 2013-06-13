@extends(theme_path('layout'))

@section('content')
	<section class="home">
		<div class="hero">
			<p>Te vidit legimus vulputate his. Ea mea quas putent perpetua. Eius voluptaria ullamcorper cu qui, has in evertitur suscipiantur mediocritatem, duo eirmod commune in. In mollis luptatum has, summo noluisse ius an. In cum ubique virtute atomorum, quodsi eloquentiam eu mea, omnesque hendrerit eu vix. Albucius sadipscing ex his. Sit aeterno principes ex.</p>
		</div>
		<h2 class="title">Archives</h2>
    <ul class="archive">
      @foreach ($posts as $post)
        <li>
          <span>{{ date("M/d/Y", strtotime($post->publish_date)) }}</span> <strong><a href="/post/{{ $post->slug }}">{{ $post->title }}</a></strong>
        </li>
      @endforeach
    </ul>
		<p><strong><a href="/archive">Complete Archive »</a></strong></p>
	</section>
@stop
