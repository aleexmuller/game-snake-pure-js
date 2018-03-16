var Const = (function () {
	return {get: get};

	/*
	 * Pega o valor de uma constante
	 * 
	 * @string name
	 * return String
	 */
	function get (name) {
		const value = CONFIG.find(function (config) {
			return config[name];
		});
		return __has_property(value, name);
	}
})(); 

