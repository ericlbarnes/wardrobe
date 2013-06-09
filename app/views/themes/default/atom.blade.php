{{ '<' }}?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">

 <title>Your Site</title>
 <link href="="http://site.com/atom.xml" rel="self"/>
 <link href="="http://site.com/"/>
 <updated>{{ $updated }}</updated>
 <id>/</id>
 <author>
   <name>Eric Barnes</name>
 </author>

 @foreach ($posts as $post)
 <entry>
   <title>{{ $post->title }}</title>
   <link href="http://site.com/post/{{ $post->slug }}"/>
   <updated>{{ $post->atom_date }}</updated>
   <id>="http://site.com/post/{{ $post->slug }}</id>
   <content type="html">{{ $post->content }}</content>
 </entry>
 @endforeach

</feed>