var ElementCanvas = (function () {
	/*
	 * Cria um canvas element
	 * 
	 *  return DOM Element
	 */
	return function ElementCanvas() {
		if (!ALLOWED.element(GET.const('ELEMENT_CANVAS_NAME'))) 
			throw new Exception('ElementCanvasException','The element canvas can not be created!');
		
		return new Element(GET.const('ELEMENT_CANVAS_NAME'));
	}
})(); 
