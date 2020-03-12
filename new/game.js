const Drawer = (function () {

})


const screenMap = new ScreenMap(100, 100)
screenMap.init()

const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

const pixLength = 10;
const position = {
	previous: {
		x: 0,
		y: 0
	},
	actual: {
		x: 0,
		y: 0
	}
}

var render = function render() {
	screenMap.eachPixel(function (pixel) {
		context.beginPath();
		if (pixel.state) {
			context.fillStyle = "red";
		} else {
			context.fillStyle = "blue";
		}
		context.fillRect(
			pixel.coordinate.x * pixLength,
			pixel.coordinate.y * pixLength,
			pixLength * 1,
			pixLength * 1
		)
		context.stroke();
	})
	screenMap.deactivatePixel(position.previous.x, position.previous.y)
	screenMap.activatePixel(position.actual.x, position.actual.y)
}

window.addEventListener('keyup', function (e) {
	if (e.keyCode === 38) {
		// Pressionando a seta pra cima
		position.previous.y = position.actual.y
		position.previous.x = position.actual.x
		position.actual.y--;
	}
	if (e.keyCode === 40) {
		// Pressionando a seta pra baixo
		position.previous.y = position.actual.y
		position.previous.x = position.actual.x
		position.actual.y++;
	}
	if (e.keyCode === 37) {
		// Pressionando a seta pra esquerda
		position.previous.y = position.actual.y
		position.previous.x = position.actual.x
		position.actual.x--;
	}
	if (e.keyCode === 39) {
		// Pressionando a seta pra direita
		position.previous.y = position.actual.y
		position.previous.x = position.actual.x
		position.actual.x++;
	}
}, false);

// Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	render();

	then = now;

	// Executa isso o mais breve possível
	requestAnimationFrame(main);
};

// Suporte cross-browser para requestAnimationFrame
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Que comece o jogo!
var then = Date.now();
main();
