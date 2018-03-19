var Style = (function () {
	/*
	 * Cria uma style
	 * 
	 *	@object styles
	 *  return String
	 */
	return function Style(styles) {
		if (!__is_object(styles)) 
			throw new Exception('CreateStyleException', 'The constructor expects an object in parameter "2"');

		return function(element) {
			if (!__is_object(element)) 
				throw new Exception('CreateStyleException', 'The constructor expects an object in parameter "1"');

			return element.setAttribute('style', styleToString(styles));
		}
	}

	/*
	 * Gera uma string com os estilos
	 * 
	 *  @object styles
	 *  return String
	 */
	function styleToString(styles) {
		return Object.keys(styles).map(function(key) {
			if (!ALLOWED.style(key))
				throw new Exception('StyleToStringException', 'The style can not be created!');

			if (__has_value(GET.config('STYLES_ALLOWED'), key)) 
				return [key, styles[key]].join(GET.const('STYLES_ATTR_SEPARATOR'));
		}).join(GET.const('STYLES_SEPARATOR'));
	}
})();