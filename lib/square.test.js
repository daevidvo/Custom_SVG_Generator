const Square = require('./square')

describe('SquareTest', ()=>{
    describe('Square Text Test',()=>{
        it('The Square text should equal dae', ()=>{
            const text = 'dae';
            const testSquare = new Square(text)
            expect(testSquare.text).toEqual('dae')
        })
    })
    describe('Square Text Color Test',()=>{
        it('The Square\'s text color should equal gold',()=>{
            const textColor = 'gold';
            const text = 'dae';
            const testCircle = new Square(text, textColor)
            expect(testCircle.text_color).toEqual('gold')
        })
    })
    describe('Circle Fill Color Test',()=>{
        it('The circle\'s fill color should equal purple',()=>{
            const circleColor = 'purple';
            const textColor = 'gold';
            const text = 'dae';
            const testCircle = new Circle(text, textColor, circleColor)
            expect(testCircle.shape_color).toEqual('purple')
        })
    })
    describe('Circle SVG Creation Test',()=>{
        it('The circle\'s svg creation must be accurate',()=>{
            const circleColor = 'purple';
            const textColor = 'gold';
            const text = 'dae';
            const testCircle = new Circle(text, textColor, circleColor)
            expect(testCircle.render()).toEqual(`
<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='150' cy='100' r='80' fill='purple'></circle>
    <text x='150' y='125' font-size='60' text-anchor='middle' fill='gold'>dae</text>
</svg>
        `)
        })
    })
})