var Style = (function () {
	/*
	 * Cria uma style
	 * 
	 *	@object styles
	 *  return String
	 */
	return function Style(styles) {
		if (!__is_object(styles)) 
			throw new Exception('CreateEventException', 'The constructor expects an object in parameter "2"');
	
		return stylesToString(styles);
	}

	/*
	 * Gera uma string com os estilos
	 * 
	 *  return String
	 */
	function stylesToString(styles) {
		console.log(styles);
		return Object.keys(styles).map(function(key) {
			if (ALLOWED.style(styles[key]))
				return __has_property(GET.const('STYLES_ALLOWED'), key);
		})
		.join(GET.const('STYLES_STRING_SEPARATOR'));
	}


})();