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

	"accepted"         => ":attribute должен быть принят.",
	"active_url"       => ":attribute не является правильным URL.",
	"after"            => ":attribute должен быть датой после :date.",
	"alpha"            => ":attribute может содержать только буквы.",
	"alpha_dash"       => ":attribute может содержать только буквы, числа и косые.",
	"alpha_num"        => ":attribute может содержать только буквы и числа.",
	"before"           => ":attribute должен быть датой перед :date.",
	"between"          => array(
		"numeric" => ":attribute должен быть между :min - :max.",
		"file"    => ":attribute должен быть между :min - :max килобайт.",
		"string"  => ":attribute должен быть между :min - :max симфолов.",
	),
	"confirmed"        => "Подтверждение :attribute не совпадает.",
	"date"             => ":attribute - неправильная дата.",
	"date_format"      => ":attribute - неправильный формат :format.",
	"different"        => ":attribute и :other должны отличатся.",
	"digits"           => ":attribute должен быть :digits цифр.",
	"digits_between"   => ":attribute должен быть между :min и :max цифр.",
	"email"            => ":attribute - неправильный формат.",
	"exists"           => "выбранный :attribute неправильный.",
	"image"            => ":attribute должен быть изображением.",
	"in"               => "выбранный :attribute неправильный.",
	"integer"          => ":attribute должен быть целым числом.",
	"ip"               => ":attribute должен быть валидным IP адресом.",
	"max"              => array(
		"numeric" => ":attribute не может быть больше :max.",
		"file"    => ":attribute не может быть больше :max килобайт.",
		"string"  => ":attribute не может быть больше :max символов.",
	),
	"mimes"            => ":attribute должен быть файлом: :values.",
	"min"              => array(
		"numeric" => ":attribute должен быть at least :min.",
		"file"    => ":attribute должен быть at least :min килобайт.",
		"string"  => ":attribute должен быть at least :min символов.",
	),
	"not_in"           => "выбранный :attribute неправильный.",
	"numeric"          => ":attribute должен быть числом.",
	"regex"            => ":attribute неправильный формат.",
	"required"         => ":attribute - это поле необходимо.",
	"required_if"      => ":attribute - это поле необходимо, когда :other равно :value.",
	"required_with"    => ":attribute - это поле необходимо, когда :values представлены.",
	"required_without" => ":attribute - это поле необходимо, когда :values не представлены.",
	"same"             => ":attribute и :other must match.",
	"size"             => array(
		"numeric" => ":attribute должен быть :size.",
		"file"    => ":attribute должен быть :size килобайт.",
		"string"  => ":attribute должен быть :size символов.",
	),
	"unique"           => ":attribute уже занят.",
	"url"              => ":attribute неправильный формат.",

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
