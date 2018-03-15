var Element = (function () {
	// mapa dos elementos que podem ser criados
	// const MAP_ELEMENTS = [ELEMENT_BUTTON, ELEMENT_P, ELEMENT_DIV, ELEMENT_CANVAS];

	// cria um closure exception
	var exception = Exception.make('ElementException');

	// retorna o map de metodos
	return {create: create, get: get};

	/*
	 * Cria um elemento
	 * 
	 *	@string name
	 *  return DOM Element
	 */
	function create (name) {
		// if (!MAP_ELEMENTS.includes(name)) {
		// 	throw exception('This element can not be created!');
		// } 
		return document.createElement(name);
	}

	/*
	 * Pega um elemento no DOM
	 * 
	 *	@string name
	 *  return DOM Element
	 */
	function get(name) {
		return document.getElementsByTagName(name);
	}
})(); 




