// var Map = (function () {
//     var div = new Div();
//     var pixels = [];
//     /*
// 	 * Define o construtor
// 	 * 
// 	 *  return Map
// 	 */
//     return function Map() {
//         return { draw, activePixel }
//     }

// 	/*
// 	 * desenha o mapa
// 	 * 
// 	 *  return Element
// 	 */
//     function draw(rows, columns) {
//         div.setStyle(new Style({
//             "width": `${(10 * rows)}px`,
//             "height": `${(10 * columns)}px`,
//             "border-width": "1px",
//             "border-style": "solid",
//             "border-color": "#ccc",
//             "display": "flex",
//             "flex-wrap": "wrap"
//         }));
//         div.appendIn(document.body);
//         setPixels(rows, columns);
//     }

//     function setPixels(rows, columns) {
//         for (let i = 0; i < rows; i++) {
//             pixels[i] = [];
//             for (let j = 0; j < columns; j++) {
//                 pixels[i][j] = new Pixel();
//                 pixels[i][j].draw(div.element);
//             }
//         }
//     }

//     function activePixel(row, column) {
//         var pixel = pixels[row][column];
//         pixel.changeColor('#111');
//     }

//     function deactivePixel(row, column) {
//         var pixel = pixels[row][column];
//         pixel.changeColor('#ccc');
//     }
// })();