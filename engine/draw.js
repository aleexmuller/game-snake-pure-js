var Draw = (function () {
	/*
	 * Define o construtor
	 * 
	 *  return Draw
	 */
	return function Draw() {
		return {
			map: createMap,
			pix: createPix
		}
	}

    /*
	 * Cria um pix
	 * 
	 *  return Element
	 */
	function createPix() {
		return _createMyElement(new Style({
			"width": GET.config('PIX_WIDTH'),
			"height": GET.config('PIX_HEIGHT'),
			"border-width": GET.config('PIX_BORDER_WIDTH'),
			"border-style": "solid",
			"border-color": GET.config('PIX_BORDER_COLOR'),
			"background": GET.config('PIX_COLOR'),
			"position": "realtive",
			"float": "left"
		}));
	}

	/*
	 * Cria o mapa
	 * 
	 *  return Element
	 */
	function createMap() {
		return _createMyElement(new Style({
			"width": "396px",
			"height": "300px",
			"border-width": "1px",
			"border-style": "solid",
			"border-color": "#ccc"
		}));
	}

	/*
	 * Cria um pix
	 * 
	 *	@Style style
	 *  return Element
	 */
	function _createMyElement(style) {
		if (!__is_function(style)) 
			throw new Exception('CreatePixException', 'The method _createMyElement expects an function in parameter "1"');

		var myElement = new ElementDiv();
		   	myElement.setStyle(style);
		return myElement;
	}
})();