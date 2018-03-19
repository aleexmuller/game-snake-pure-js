var Draw = (function () {
	var CLASS_MAP = ['width'];
	/*
	 * Define o construtor
	 * 
	 *  return Draw
	 */
	return function Draw() {
		return {
			square: square
		}
	}

	function circle() {

	}

	function square(width, height) {
		var color = Const.get('COLOR_DEFAULT');
		return color;
	}

	function element(type) {
		var element = new ElementDiv();
		element.setAttr('id', type);
		return element;
	}
})();