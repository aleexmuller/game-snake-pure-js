

function draw(rows, columns) {
    div.setStyle(new Style({
        "width": `${(10 * rows)}px`,
        "height": `${(10 * columns)}px`,
        "border-width": "1px",
        "border-style": "solid",
        "border-color": "#ccc",
        "display": "flex",
        "flex-wrap": "wrap"
    }));
    div.appendIn(document.body);
    setPixels(rows, columns);
}


const style = new Style({
    width: 10,
    height: 10
})


// var map = new Map();
// map.draw(30, 30);

// map.activePixel(2, 2);

// function Snake() {
//     var body = [];

//     function Snake() {
//         body.push({
//             actual: {
//                 row: 1,
//                 col: 2
//             },
//             last: {
//                 row: 1,
//                 col: 1
//             }
//         });
//     }

//     function increase() {

//     }
// }

// const snake = [{
//     row: 1,
//     col: 1
// }];

// // for (let i = 0; i < 10; i++) {
// //     map.activePixel(2, i + 2);
// // }
