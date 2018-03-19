var ElementButton = (function () {
	/*
	 * Cria um button element
	 * 
	 *  return DOM Element
	 */
	return function ElementButton() {
		if (!ALLOWED.element(GET.const('ELEMENT_BUTTON_NAME'))) 
			throw new Exception('ElementButtonException','The element button can not be created!');
		
		return new Element(GET.const('ELEMENT_BUTTON_NAME'));
	}
})(); 