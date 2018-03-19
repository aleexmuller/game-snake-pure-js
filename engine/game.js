
var Game = (function () {
	return {main: main};

	function main() {
		try {
			createButton();

			console.log(new Style({
				width: '100px',
				height: '200px'
			}));

			// var draw = new Draw();

			// var square = draw.square('10%', '10%');

			//square.appendTo(document.body);

		} catch(e) {
			console.log(e);
		}
	}

	function createButton() {
		var button = new ElementButton();
		button.setContent('Click Me');
		button.setAttr('style', 'background: #ccc;');

		new EventClick(button.element, function(e) {
			button.setContent('Clicado');
		});

		button.appendTo(document.body);
	}
})(); 


Game.main();