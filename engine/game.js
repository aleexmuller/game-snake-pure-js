
var Game = (function () {
	return {main: main};

	function main() {
		try {
			var button = new ElementButton();
			button.setContent('Click Me');

			new EventClick(button.element, function(e) {
				button.setContent('Clicado');
			});

			button.appendTo(document.body);

		} catch(e) {
			console.log(e);
		}
	}
})(); 


Game.main();