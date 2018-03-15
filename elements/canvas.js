var Canvas = (function () {
	var exception = Exception.make('CanvasException');
	/*
	 * Cria um canvas element
	 * 
	 *  return DOM Element
	 */
	return function() {
		if (!Const.get('ELEMENT_CANVAS')) {
			throw exception('This element can not be created!');
		}
		return Element.create(Const.get('ELEMENT_CANVAS'));
	}
})(); 
