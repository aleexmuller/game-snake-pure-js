var Exception = (function () {
	/*
	 * Cria uma exception
	 * 
	 *	@string name, @string message
	 *  return Object
	 */
	return function Exception(name, message) {
		return {
			name: name, 
			message: message
		}
	}
})(); 