var Mapa = (function () {
	return function Mapa(maxX, maxY) {
		var mapa = [];
		for (var x = 0, x <= maxX, x++) {
			for (var y = 0, y <= maxY, y++) {
				mapa[x][y] = new Pix();
			}
		}
		return mapa;
	}

})();

var Pix = (function () {
	var element;


	function paint() {
		this.element.setStyle({
			"background": "#000"
		});
	}
})();



var Game = (function () {
	return {main: main};

	function main() {
		try {
			// createButton();
			drawMap();

		} catch(e) {
			console.log(e);
		}
	}

	function createButton() {
		var button = new ElementButton();

		button.setContent('Click Me');

		button.setStyle(new Style({
			width: '100px',
			height: '20px'
		}));

		button.setEvent(new EventClick(function() {
			alert('clicou');
		}));


		button.appendIn(document.body);
	}

	function drawMap() {


		var mapa = new Mapa(100, 100);
		mapa.paintPix();





		var mapaTest = [];

		console.log(mapaTest);

		// mapaTest.forEach(function (item, xIndex) {

		// });

		var draw = new Draw();
		var mapa = draw.map();
		 	mapa.appendIn(document.body);

		for (var i = 0; i < 825; i++) {
			var pix = draw.pix();
				pix.appendIn(mapa.element);
		}
	}

	function generateMap(columns, lines) {
		var mapa = [];
		for (var x = 0, x <= columns, x++) {
			for (var y = 0, y <= lines, y++) {
				mapa[x][y] = 
			}
		}	
	}

})(); 


Game.main();