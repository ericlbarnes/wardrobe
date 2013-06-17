{{ '<' }}?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">

 <title>{{ site_title() }}</title>
 <link href="{{ Config::get('app.url') }}/atom.xml" rel="self"/>
 <link href="{{ Config::get('app.url') }}"/>
 <updated>{{ $updated }}</updated>
 <id>{{ Config::get('app.url') }}/</id>

 @foreach ($posts as $post)
 <entry>
   <title>{{ $post->title }}</title>
   <link href="{{ Config::get('app.url') }}/post/{{ $post->slug }}"/>
   <author>
      <name>{{ site_title() }}</name>
    </author>
   <updated>{{ $post->atom_date }}</updated>
   <id>{{ Config::get('app.url') }}/post/{{ $post->slug }}</id>
   <content type="html">{{ $post->content }}</content>
 </entry>
 @endforeach

</feed>