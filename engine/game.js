var Car = (function () {
	var speed = 10,
		maxSpeed = 10,
		posX = 0,
		posY = 0

	return function Car() {
		return {
			posX: posX,
			posY: posY,
			moveup: moveup,
			movedown: movedown,
			moveleft: moveleft,
			moveright: moveright
		}
	}

	function acelerate() {
		
	}

	function decelerate() {

	}

	function moveup() {
		this.posY -= speed;
	}

	function movedown() {
		this.posY += speed;
	}

	function moveleft() {
		this.posX -= speed;
	}

	function moveright() {
		if (this.posX > 300)
			this.posX = 0; 

		this.posX += speed;
	}
})();



var Game = (function () {
	var interval;
	var car;
	var context;

	return {main: main};

	function main() {
		try {
			//]createButton();

			var button = new ElementButton();
			button.setContent('move CAr');


			var mapa = new ElementCanvas();
			mapa.setStyle(new Style({
				width: '250px',
				height: '200px',
				background: '#ccc'
			}));
			
			var element = mapa.element;
			context = element.getContext('2d');


			car = new Car();

			

			context.beginPath();
			context.fillRect(car.posX, car.posY, 15, 10);
			context.stroke();


			button.setEvent(new EventClick(function() {
				car.moveright();
			}));


			mapa.appendIn(document.body);
			button.appendIn(document.body);

			interval = setInterval(updateGameArea, 20);

		} catch(e) {
			console.log(e);
		}
	}

	function updateGameArea() {
		console.log(car.posX);
		context.clearRect(0, 0, 300, 200);
		context.fillRect(car.posX, car.posY, 15, 10);
	}

	function clear(context) {
		context.clearRect(0, 0, 250, 200);
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
})(); 


Game.main();