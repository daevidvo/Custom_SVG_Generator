const Square = require('./square');

describe('SquareTest', ()=>{
    describe('Square Text Test',()=>{
        it('The Square text should equal dae', ()=>{ //tests if the square's text is accurate
            const text = 'dae';
            const testSquare = new Square(text);
            expect(testSquare.text).toEqual('dae');
        });
    });
    describe('Square Text Color Test',()=>{ //tests if the square's text color is accurate
        it('The Square\'s text color should equal gold',()=>{
            const textColor = 'gold';
            const text = 'dae';
            const testSquare = new Square(text, textColor);
            expect(testSquare.text_color).toEqual('gold');
        });
    });
    describe('Square Fill Color Test',()=>{ //tests if the square's fill color is accurate
        it('The Square\'s fill color should equal purple',()=>{
            const squareColor = 'purple';
            const textColor = 'gold';
            const text = 'dae';
            const testSquare = new Square(text, textColor, squareColor);
            expect(testSquare.shape_color).toEqual('purple');
        });
    });
    describe('Square SVG Creation Test',()=>{ //tests if the square's svg creation is accurate
        it('The Square\'s svg creation must be accurate',()=>{
            const squareColor = 'purple';
            const textColor = 'gold';
            const text = 'dae';
            const testSquare = new Square(text, textColor, squareColor);
            expect(testSquare.render()).toEqual(`
<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    <rect fill='purple' width='300' height='200'></rect>
    <text x='150' y='100' font-size='60' text-anchor='middle' fill='gold'>dae</text>
</svg>
        `);
        });
    });
});