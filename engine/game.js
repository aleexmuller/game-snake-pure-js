
var Game = (function () {
	return {main: main};

	function main() {
		try {
			createButton();

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
		button.setStyle(new Style({
			width: '100px',
			height: '20px'
		}));
		button.setEvent(new EventClick(function() {
			alert('clicou');
		}));


		button.appendInto(document.body);
	}
})(); 


Game.main();