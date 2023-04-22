const Shape = require('./shape.js')

class Triangle extends Shape { //copies the properties of the Shape class from ./shape.js
    constructor(text, text_color, shape_color){
        super(text, text_color, shape_color)
    }
    render(){
        return `
<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    <polygon points='150,0 300,200, 0,200' fill='${this.shape_color}'></polygon>
    <text x='150' y='150' font-size='60' text-anchor='middle' fill='${this.text_color}'>${this.text}</text>
</svg>
        `
    }
}

module.exports = Triangle