const Shape = require('./shape.js');

class Circle extends Shape { //copies the properties of the Shape class from ./shape.js
    constructor(text, text_color, shape_color){
        super(text, text_color, shape_color);
    };
    render(){
        return `
<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='150' cy='100' r='80' fill='${this.shape_color}'></circle>
    <text x='150' y='125' font-size='60' text-anchor='middle' fill='${this.text_color}'>${this.text}</text>
</svg>
        `
    };
};

module.exports = Circle;