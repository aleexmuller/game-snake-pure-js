var ElementCanvas = (function () {
	/*
	 * Cria um canvas element
	 * 
	 *  return DOM Element
	 */
	return function ElementCanvas() {
		if (!Const.get('ELEMENT_CANVAS')) 
			throw new Exception('ElementCanvasException','The element canvas can not be created!');
		
		return new Element(Const.get('ELEMENT_CANVAS'));
	}
})(); 
