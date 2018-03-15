var Exception = (function () {
	return {make: make}
	/*
	 * Cria um closure que retorna um Error
	 * 
	 *	@string name
	 *  return Error
	 */
	function make (name) {
		return function (message) {	
			return new Error ([name, message].join('- '));
		}
	}
})(); 