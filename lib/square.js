const Shape = require('./shape.js');

class Square extends Shape { //copies the properties of the Shape class from ./shape.js
    constructor(text, text_color, shape_color){
        super(text, text_color, shape_color);
    };
    render(){
        return `
<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    <rect fill='${this.shape_color}' width='200' height='200'></rect>
    <text x='100' y='100' font-size='60' text-anchor='middle' fill='${this.text_color}'>${this.text}</text>
</svg>
        `
    };
};

module.exports = Square;