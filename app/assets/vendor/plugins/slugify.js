/*
 * jQuery slugIt plug-in 1.0
 *
 * Copyright (c) 2010 Diego Kuperman
 *
 * Inspired by perl module Text::Unidecode and Django urlfy.js
 *
 * Licensed under the BSD license:
 *      http://www.opensource.org/licenses/bsd-license.php
 */

jQuery.fn.slugIt = function(options) {
    var defaults = {
        events: 'keypress keyup',
        output: '#slug',
        map:    false,
        before: false,
        after: false
    };

    var opts  = jQuery.extend(defaults, options);

    var chars = latin_map();
        chars = jQuery.extend(chars, greek_map());
        chars = jQuery.extend(chars, turkish_map());
        chars = jQuery.extend(chars, russian_map());
        chars = jQuery.extend(chars, ukranian_map());
        chars = jQuery.extend(chars, czech_map());
        chars = jQuery.extend(chars, latvian_map());
        chars = jQuery.extend(chars, polish_map());
        chars = jQuery.extend(chars, symbols_map());
        chars = jQuery.extend(chars, currency_map());

    if ( opts.map ) {
        chars = jQuery.extend(chars, opts.map);
    }

    jQuery(this).bind(defaults.events, function() {
        var text = jQuery(this).val();
        if ( opts.before ) text = opts.before(text);
        text = jQuery.trim(text.toString());

        var slug = new String();
        for (var i = 0; i < text.length; i++) {
            if ( chars[text.charAt(i)] ) { slug += chars[text.charAt(i)] }
            else                         { slug += text.charAt(i) }
        }

        slug = slug.replace(/[^-\w\s$\*\(\)\'\!\_]/g, '-');  // remove unneeded chars
        slug = slug.replace(/^\s+|\s+$/g, ''); // trim leading/trailing spaces
        slug = slug.replace(/[-\s]+/g, '-');   // convert spaces
        slug = slug.replace(/-$/, '');         // remove trailing separator
        slug = slug.toLowerCase();

        if ( opts.after ) slug = opts.after(slug);

        if ( typeof opts.output == "function" ) {
          opts.output(slug)
        } else {
          jQuery(opts.output).val(slug);         // input or textarea
          jQuery(opts.output).html(slug);        // other dom elements
        }

        return this;
    });

    function latin_map() {
        return {
            'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE', 'Ç':
            'C', 'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I', 'Î': 'I',
            'Ï': 'I', 'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö':
            'O', 'Ő': 'O', 'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U', 'Ű': 'U',
            'Ý': 'Y', 'Þ': 'TH', 'ß': 'ss', 'à':'a', 'á':'a', 'â': 'a', 'ã': 'a', 'ä':
            'a', 'å': 'a', 'æ': 'ae', 'ç': 'c', 'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
            'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i', 'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó':
            'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ő': 'o', 'ø': 'o', 'ù': 'u', 'ú': 'u',
            'û': 'u', 'ü': 'u', 'ű': 'u', 'ý': 'y', 'þ': 'th', 'ÿ': 'y'
        };
    }

    function greek_map() {
        return {
            'α':'a', 'β':'b', 'γ':'g', 'δ':'d', 'ε':'e', 'ζ':'z', 'η':'h', 'θ':'8',
            'ι':'i', 'κ':'k', 'λ':'l', 'μ':'m', 'ν':'n', 'ξ':'3', 'ο':'o', 'π':'p',
            'ρ':'r', 'σ':'s', 'τ':'t', 'υ':'y', 'φ':'f', 'χ':'x', 'ψ':'ps', 'ω':'w',
            'ά':'a', 'έ':'e', 'ί':'i', 'ό':'o', 'ύ':'y', 'ή':'h', 'ώ':'w', 'ς':'s',
            'ϊ':'i', 'ΰ':'y', 'ϋ':'y', 'ΐ':'i',
            'Α':'A', 'Β':'B', 'Γ':'G', 'Δ':'D', 'Ε':'E', 'Ζ':'Z', 'Η':'H', 'Θ':'8',
            'Ι':'I', 'Κ':'K', 'Λ':'L', 'Μ':'M', 'Ν':'N', 'Ξ':'3', 'Ο':'O', 'Π':'P',
            'Ρ':'R', 'Σ':'S', 'Τ':'T', 'Υ':'Y', 'Φ':'F', 'Χ':'X', 'Ψ':'PS', 'Ω':'W',
            'Ά':'A', 'Έ':'E', 'Ί':'I', 'Ό':'O', 'Ύ':'Y', 'Ή':'H', 'Ώ':'W', 'Ϊ':'I',
            'Ϋ':'Y'
        };
    }

    function turkish_map() {
        return {
            'ş':'s', 'Ş':'S', 'ı':'i', 'İ':'I', 'ç':'c', 'Ç':'C', 'ü':'u', 'Ü':'U',
            'ö':'o', 'Ö':'O', 'ğ':'g', 'Ğ':'G'
        };
    }

    function russian_map() {
        return {
            'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'yo', 'ж':'zh',
            'з':'z', 'и':'i', 'й':'j', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o',
            'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'х':'h', 'ц':'c',
            'ч':'ch', 'ш':'sh', 'щ':'sh', 'ъ':'', 'ы':'y', 'ь':'', 'э':'e', 'ю':'yu',
            'я':'ya',
            'А':'A', 'Б':'B', 'В':'V', 'Г':'G', 'Д':'D', 'Е':'E', 'Ё':'Yo', 'Ж':'Zh',
            'З':'Z', 'И':'I', 'Й':'J', 'К':'K', 'Л':'L', 'М':'M', 'Н':'N', 'О':'O',
            'П':'P', 'Р':'R', 'С':'S', 'Т':'T', 'У':'U', 'Ф':'F', 'Х':'H', 'Ц':'C',
            'Ч':'Ch', 'Ш':'Sh', 'Щ':'Sh', 'Ъ':'', 'Ы':'Y', 'Ь':'', 'Э':'E', 'Ю':'Yu',
            'Я':'Ya'
        };
    }

    function ukranian_map() {
        return {
            'Є':'Ye', 'І':'I', 'Ї':'Yi', 'Ґ':'G', 'є':'ye', 'і':'i', 'ї':'yi', 'ґ':'g'
        };
    }

    function czech_map() {
        return {
            'č':'c', 'ď':'d', 'ě':'e', 'ň': 'n', 'ř':'r', 'š':'s', 'ť':'t', 'ů':'u',
            'ž':'z', 'Č':'C', 'Ď':'D', 'Ě':'E', 'Ň': 'N', 'Ř':'R', 'Š':'S', 'Ť':'T',
            'Ů':'U', 'Ž':'Z'
        };
    }

    function polish_map() {
        return {
            'ą':'a', 'ć':'c', 'ę':'e', 'ł':'l', 'ń':'n', 'ó':'o', 'ś':'s', 'ź':'z',
            'ż':'z', 'Ą':'A', 'Ć':'C', 'Ę':'e', 'Ł':'L', 'Ń':'N', 'Ó':'o', 'Ś':'S',
            'Ź':'Z', 'Ż':'Z'
        };
    }

    function latvian_map() {
        return {
            'ā':'a', 'č':'c', 'ē':'e', 'ģ':'g', 'ī':'i', 'ķ':'k', 'ļ':'l', 'ņ':'n',
            'š':'s', 'ū':'u', 'ž':'z', 'Ā':'A', 'Č':'C', 'Ē':'E', 'Ģ':'G', 'Ī':'i',
            'Ķ':'k', 'Ļ':'L', 'Ņ':'N', 'Š':'S', 'Ū':'u', 'Ž':'Z'
        };
    }

    function currency_map() {
        return {
            '€': 'euro', '₢': 'cruzeiro', '₣': 'french franc', '£': 'pound',
            '₤': 'lira', '₥': 'mill', '₦': 'naira', '₧': 'peseta', '₨': 'rupee',
            '₩': 'won', '₪': 'new shequel', '₫': 'dong', '₭': 'kip', '₮': 'tugrik',
            '₯': 'drachma', '₰': 'penny', '₱': 'peso', '₲': 'guarani', '₳': 'austral',
            '₴': 'hryvnia', '₵': 'cedi', '¢': 'cent', '¥': 'yen', '元': 'yuan',
            '円': 'yen', '﷼': 'rial', '₠': 'ecu', '¤': 'currency', '฿': 'baht'
        };
    }

    function symbols_map() {
        return {
            '©':'(c)', 'œ': 'oe', 'Œ': 'OE', '∑': 'sum', '®': '(r)', '†': '+',
            '“': '"', '”': '"', '‘': "'", '’': "'", '∂': 'd', 'ƒ': 'f', '™': 'tm',
            '℠': 'sm', '…': '...', '˚': 'o', 'º': 'o', 'ª': 'a', '•': '*',
            '∆': 'delta', '∞': 'infinity', '♥': 'love', '&': 'and'
        };
    }

  return this;
}