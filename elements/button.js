var ElementButton = (function () {
	/*
	 * Cria um button element
	 * 
	 *  return DOM Element
	 */
	return function ElementButton() {
		if (!Const.get('ELEMENT_BUTTON')) 
			throw new Exception('ElementButtonException','The element button can not be created!');
		
		return new Element(Const.get('ELEMENT_BUTTON'));
	}
})(); 