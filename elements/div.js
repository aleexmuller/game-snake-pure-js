var ElementDiv = (function () {
	/*
	 * Cria um div element
	 * 
	 *  return DOM Element
	 */
	return function ElementDiv() {
		if (!ALLOWED.element(GET.const('ELEMENT_DIV_NAME'))) 
			throw new Exception('ElementDivException','The element div can not be created!');
		
		return new Element(GET.const('ELEMENT_DIV_NAME'));
	}
})(); 