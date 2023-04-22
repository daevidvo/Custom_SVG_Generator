const Shape = require('./shape.js')

class Triangle extends Shape { //copies the properties of the Shape class from ./shape.js
    constructor(text, text_color, shape_color){
        super(text, text_color, shape_color)
    }
    render(){
        return `
        <svg width=300 height=200>
            <polygon points='0,150 300,200, 0,200' fill='${this.shape_color}'></polygon>
            <text x='150' y='75' font-size='60' text-anchor='middle' fill='${this.text_color}'>${this.text}</text>
        </svg>
        `
    }
}

module.exports = Triangle