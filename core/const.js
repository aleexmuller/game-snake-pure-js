var Const = (function () {
	var constants = {
		// valores de eventos
		'EVENT_CLICK': 'click',
		'EVENT_FOCUS': 'focus',
		'EVENT_FOCUSOUT': 'focusout',
		'EVENT_HOVER': 'hover',

		// valores de elementos
		'ELEMENT_BUTTON': 'button', 
	  	'ELEMENT_P': 'p', 
	  	'ELEMENT_DIV': 'div', 
	  	'ELEMENT_CANVAS': 'canvas', 
	  	'ELEMENT_BODY': 'body'
	}

	return {get: get};

	/*
	 * Pega o valor de uma constante
	 * 
	 *  return String
	 */
	function get(name) {
		return constants[name];
	}
})(); 

