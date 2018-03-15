var Button = (function () {
	/*
	 * Cria um button element
	 * 
	 *  return DOM Element
	 */
	return function() {
		// if (!MAP_ELEMENTS.includes(name)) {
		// 	throw exception('This element can not be created!');
		// } 

		return Element.create(Const.get('ELEMENT_BUTTON'));
	}
})(); 