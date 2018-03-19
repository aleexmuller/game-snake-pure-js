var GET = (function () {
	return {config: config, const: constant};

	/*
	 * Pega o valor de uma configuracao
	 * 
	 * @string name
	 * return String
	 */
	function config(name) {
		return getProperty(CONFIG, name);
	}

	/*
	 * Pega o valor de uma constante
	 * 
	 * @string name
	 * return String
	 */
	function constant(name) {
		return getProperty(CONST, name);
	}

	/*
	 * Recupera o valor de uma propriedade em um array de objetos
	 * 
	 * @object map, @string property
	 * return String
	 */
	function getProperty(map, property) {
		return __has_property(map.find(function (object) {
			return object[property];
		}), property);
	}
})(); 

