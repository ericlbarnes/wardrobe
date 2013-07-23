<?php

return array(

	/*
	|--------------------------------------------------------------------------
	| Validation Language Lines
	|--------------------------------------------------------------------------
	|
	| The following language lines contain the default error messages used by
	| the validator class. Some of these rules have multiple versions such
	| such as the size rules. Feel free to tweak each of these messages.
	|
	*/

	"accepted"         => ":attribute deve essere accettato.",
	"active_url"       => ":attribute non è un URL valido.",
	"after"            => ":attribute deve essere una data dopo :date.",
	"alpha"            => ":attribute può contenere solo lettere.",
	"alpha_dash"       => ":attribute può contenere solo lettere, numeri, e trattini.",
	"alpha_num"        => ":attribute può contenere solo lettere e numeri.",
	"before"           => ":attribute deve essere una data precedente a :date.",
	"between"          => array(
		"numeric" => ":attribute deve essere compreso tra :min - :max.",
		"file"    => ":attribute deve essere compreso tra :min - :max kilobytes.",
		"string"  => ":attribute deve essere compreso tra :min - :max caratteri.",
	),
	"confirmed"        => ":attribute campo di conferma non corrisponde.",
	"date"             => ":attribute non è una data valida.",
	"date_format"      => ":attribute non corrisponde al formato :format.",
	"different"        => ":attribute e :other devono essere differenti.",
	"digits"           => ":attribute deve essere di :digits lettere.",
	"digits_between"   => ":attribute deve essere tra :min e :max lettere.",
	"email"            => ":attribute formato non valido.",
	"exists"           => ":attribute selezionato non è valido.",
	"image"            => ":attribute deve essere un'immagine.",
	"in"               => ":attribute selezionato non è valido.",
	"integer"          => ":attribute deve essere un intero.",
	"ip"               => ":attribute deve essere un indirizzo IP valido.",
	"max"              => array(
		"numeric" => ":attribute non può essere maggiore di :max.",
		"file"    => ":attribute non può essere maggiore di :max kilobytes.",
		"string"  => ":attribute non può essere maggiore di :max caratteri.",
	),
	"mimes"            => ":attribute deve essere un file del tipo: :values.",
	"min"              => array(
		"numeric" => ":attribute deve essere minimo :min.",
		"file"    => ":attribute deve essere minimo :min kilobytes.",
		"string"  => ":attribute deve essere minimo :min caratteri.",
	),
	"not_in"           => ":attribute selezionato non è valido.",
	"numeric"          => ":attribute deve essere un numero.",
	"regex"            => ":attribute formato non valido.",
	"required"         => ":attribute è un campo richiesto.",
	"required_if"      => ":attribute è un campo richiesto se :other è :value.",
	"required_with"    => ":attribute è un campo richiesto se :values è presente.",
	"required_without" => ":attribute è un campo richiesto se :values non è presente.",
	"same"             => ":attribute e :other devono coincidere.",
	"size"             => array(
		"numeric" => ":attribute deve essere :size.",
		"file"    => ":attribute deve essere di :size kilobytes.",
		"string"  => ":attribute deve essere di :size caratteri.",
	),
	"unique"           => ":attribute è stato già preso.",
	"url"              => ":attribute formato non valido.",

	/*
	|--------------------------------------------------------------------------
	| Custom Validation Language Lines
	|--------------------------------------------------------------------------
	|
	| Here you may specify custom validation messages for attributes using the
	| convention "attribute.rule" to name the lines. This makes it quick to
	| specify a specific custom language line for a given attribute rule.
	|
	*/

	'custom' => array(),

	/*
	|--------------------------------------------------------------------------
	| Custom Validation Attributes
	|--------------------------------------------------------------------------
	|
	| The following language lines are used to swap attribute place-holders
	| with something more reader friendly such as E-Mail Address instead
	| of "email". This simply helps us make messages a little cleaner.
	|
	*/

	'attributes' => array(),

);
