const ScreenMap = (function () {
    const _pixels = [];
    const _dimension = {
        cols: 0,
        rows: 0
    }

    return function ScreenMap(cols, rows) {
        Object.assign(_dimension, { cols, rows })
        return {
            activatePixel,
            deactivatePixel,
            eachPixel,
            _getPixel,
            init
        }
    }

    function init() {
        for (let y = 0; y < _dimension.rows; y++) {
            for (let x = 0; x < _dimension.cols; x++) {
                _pixels.push({
                    coordinate: { x, y },
                    state: 0
                })
            }
        }
    }

    function _getPixel(x, y) {
        const pixel = _pixels.filter(function (pixel) {
            if (pixel.coordinate.x == x
                && pixel.coordinate.y == y) {
                return pixel
            }
        })
        return pixel[0]
    }

    function eachPixel(func) {
        _pixels.forEach(function (pixel) {
            func(Object.assign({}, pixel))
        })
    }

    function activatePixel(x, y) {
        const pixel = _getPixel(x, y)
        pixel.state = 1
    }

    function deactivatePixel(x, y) {
        const pixel = _getPixel(x, y)
        pixel.state = 0
    }
})();
