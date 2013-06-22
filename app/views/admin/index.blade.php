@extends('admin.layout')

@section('title')
	Admin
@stop

@section('content')
	<div id="main-region"></div>
@stop

@section('footer.js')
	<script type="text/javascript">
		$(document).ready(function() {
			Wardrobe.start({
        user: {{ $user }},
        base_url: "{{ url('/') }}"
      });
		});
	</script>
@stop
