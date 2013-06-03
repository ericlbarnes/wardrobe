<?php
use dflydev\markdown\MarkdownExtraParser;

function md($str)
{
	$markdownParser = new MarkdownExtraParser();

	// Parse the loaded source.
	return $markdownParser->transformMarkdown($str);
}
