const Circle = require('./circle.js')

describe('CircleTest', ()=>{
    describe('Circle Text Test',()=>{
        it('The circle text should equal dae', ()=>{ //tests if the circle's text is accurate
            const text = 'dae';
            const testCircle = new Circle(text);
            expect(testCircle.text).toEqual('dae');
        });
    });
    describe('Circle Text Color Test',()=>{ //tests if the circle's text color is accurate
        it('The circle\'s text color should equal gold',()=>{
            const textColor = 'gold';
            const text = 'dae';
            const testCircle = new Circle(text, textColor);
            expect(testCircle.text_color).toEqual('gold');
        });
    });
    describe('Circle Fill Color Test',()=>{ //tests if the circle's fill color is accurate
        it('The circle\'s fill color should equal purple',()=>{
            const circleColor = 'purple';
            const textColor = 'gold';
            const text = 'dae';
            const testCircle = new Circle(text, textColor, circleColor);
            expect(testCircle.shape_color).toEqual('purple');
        });
    });
    describe('Circle SVG Creation Test',()=>{ //tests if the circle's svg creation is accurate
        it('The circle\'s svg creation must be accurate',()=>{
            const circleColor = 'purple';
            const textColor = 'gold';
            const text = 'dae';
            const testCircle = new Circle(text, textColor, circleColor);
            expect(testCircle.render()).toEqual(`
<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='150' cy='100' r='80' fill='purple'></circle>
    <text x='150' y='125' font-size='60' text-anchor='middle' fill='gold'>dae</text>
</svg>
        `);
        });
    });
});