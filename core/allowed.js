var ALLOWED = (function () {
	return {event: event, element: element, style: style};

	/*
	 * Verifica se um evento tem permissão para ser criado
	 * 
	 *  return String or null
	 */
	function event(name) {
		return __has_value(GET.config('EVENT_ALLOWED'), name);
	}

	/*
	 * Verifica se um elemento tem permissão para ser criado
	 * 
	 *  return String or null
	 */
	function element(name) {
		return __has_value(GET.config('ELEMENT_ALLOWED'), name);
	}

	/*
	 * Verifica se um style tem permissão para ser criado
	 * 
	 *  return String or null
	 */
	function style(name) {
		return __has_value(GET.config('STYLES_ALLOWED'), name);
	}
})();