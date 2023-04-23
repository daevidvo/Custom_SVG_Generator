const Shape = require('./shape.js');

describe('ShapeTest',()=>{
    describe('Shape Text Test',()=>{
        it('The shape\'s text must be equal to dae',()=>{ //tests if the shape text function is working
            const text = 'dae';
            const newShape = new Shape(text);
            expect(newShape.text).toEqual('dae');
        });
    });
    describe('Shape Text Color Test',()=>{
        it('The shape\'s text color must be equal to gold',()=>{ //tests if the user input color is working for the text
            const text = 'dae';
            const text_color = 'gold';
            const newShape = new Shape(text, text_color);
            expect(newShape.text_color).toEqual('gold');
        });
    });
    describe('Shape\'s Color Test',()=>{
        it('The shape\'s color must be equal to purple',()=>{ //tests if the user input color is working for the shape
            const text = 'dae';
            const text_color = 'gold';
            const shape_color = 'purple';
            const newShape = new Shape(text, text_color, shape_color);
            expect(newShape.shape_color).toEqual('purple');
        });
    });
});