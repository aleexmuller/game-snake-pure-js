var Element = (function () {
	/*
	 * Define o construtor da funcao Element
	 * 
	 *	@string name
	 *
	 *  return Object
	 */
	return function Element(name) {
		return new Properties(document.createElement(name));
	}
})(); 





