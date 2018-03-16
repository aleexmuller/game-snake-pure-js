
var Game = (function () {
	return {main: main};

	function main() {
		try {
			var button = new ElementButton();
			button.setContent('Click Me');


			new EventClick(button, function() {
				alert('clicou');
			});


			console.log(button.element);
		} catch(e) {
			console.log(e);
		}
	}
})(); 


Game.main();