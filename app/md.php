<?php
use dflydev\markdown\MarkdownExtraParser;
if ( ! function_exists('md'))
{
	function md($str)
	{
		$markdownParser = new MarkdownExtraParser();

		// Parse the loaded source.
		return $markdownParser->transformMarkdown($str);
	}
}