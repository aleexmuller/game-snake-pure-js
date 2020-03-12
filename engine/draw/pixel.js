var Pixel = (function () {
    /*
	 * Define o construtor
	 * 
	 *  return Pixel
	 */
    return function Pixel() {
        return { draw, changeColor }
    }

	/*
	 * desenha o mapa
	 * 
	 *  return Element
	 */
    function draw(appendIn) {
        this.div = new Div();
        this.div.setStyle(new Style({
            "width": "10px",
            "height": "10px",
            "background": "#ccc"
        }));
        this.div.appendIn(appendIn);
    }

    function changeColor(color) {
        this.div.setStyle(new Style({
            "width": "10px",
            "height": "10px",
            "background": color
        }));
    }
})();