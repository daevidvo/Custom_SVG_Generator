const Shape = require('./shape.js')

class Square extends Shape { //copies the properties of the Shape class from ./shape.js
    super(text, text_color, shape_color)
}

module.exports = Square