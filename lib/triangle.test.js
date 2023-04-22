const Triangle = require('./triangle')

describe('TriangleTest', ()=>{
    describe('Triangle Text Test',()=>{
        it('The Triangle text should equal dae', ()=>{ //tests if the triangle's text is accurate
            const text = 'dae';
            const testTriangle = new Triangle(text);
            expect(testTriangle.text).toEqual('dae');
        });
    });
    describe('Triangle Text Color Test',()=>{ //tests if the triangle's text color is accurate
        it('The Triangle\'s text color should equal gold',()=>{
            const textColor = 'gold';
            const text = 'dae';
            const testTriangle = new Triangle(text, textColor);
            expect(testTriangle.text_color).toEqual('gold');
        });
    });
    describe('Triangle Fill Color Test',()=>{ //tests if the triangle's fill color is accurate
        it('The Triangle\'s fill color should equal purple',()=>{
            const triangleColor = 'purple';
            const textColor = 'gold';
            const text = 'dae';
            const testTriangle = new Triangle(text, textColor, triangleColor);
            expect(testTriangle.shape_color).toEqual('purple');
        });
    });
    describe('Triangle SVG Creation Test',()=>{ //tests if the triangle's svg creation is accurate
        it('The Triangle\'s svg creation must be accurate',()=>{
            const triangleColor = 'purple';
            const textColor = 'gold';
            const text = 'dae';
            const testTriangle = new Triangle(text, textColor, triangleColor);
            expect(testTriangle.render()).toEqual(`
<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    <polygon points='150,0 300,200, 0,200' fill='purple'></polygon>
    <text x='150' y='150' font-size='60' text-anchor='middle' fill='gold'>dae</text>
</svg>
        `);
        });
    });
});