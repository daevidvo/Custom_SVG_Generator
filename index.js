const iq = require('inquirer') //prompts
const fs = require('fs') //creates the file
const Triangle = require('./lib/triangle.js') //triangle class
const Square = require('./lib/square.js') //square class
const Circle = require('./lib/circle.js') //circle class

iq
.prompt([ //prompts that the user will answer in the terminal. this is promise based.
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to have in your svg? (Please use 3 or less characters)'
    },
    {
        type: 'input',
        name: 'text_color',
        message: 'What color would you like your text to be? (can use words or hexadecimal values)'
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'What color would you like your svg to be? (can use words or hexadecimal values)'
    },
    {
        type: 'checkbox',
        name: 'desired_shape',
        message: 'What shape would you like?',
        choices: ['Triangle', 'Square', 'Circle']
    }
])
.then((data)=>{
    if(data.text.trim().length > 3) {
        throw new Error('Please make your text 3 characters or less (spaces not included)')
    }
    if(!isNaN(parseInt(data.text_color))){
        throw new Error('Please choose a text color keyword or hexadecimal value')
    }
    if(!isNaN(parseInt(data.shape_color))){
        throw new Error('Please choose a shape color keyword or hexadecimal value')
    }
    switch (data.desired_shape[0]){
        case 'Triangle':
            const renderedTriangle = new Triangle(data.text.trim(), data.text_color.trim(), data.shape_color.trim()).render()
            return renderedTriangle;
        case 'Square':
            const renderedSquare = new Square(data.text.trim(), data.text_color.trim(), data.shape_color.trim()).render()
            return renderedSquare;
        case 'Circle':
            const renderedCircle = new Circle(data.text.trim(), data.text_color.trim(), data.shape_color.trim()).render()
            return renderedCircle;
    }
})
.then((renderedShape)=>{ //function that will create the svg file using the given user inputs
    fs.writeFile('./examples/renderedShape.svg', renderedShape, (err)=>{err?console.log(err):console.log('Your SVG has been generated! Please check ./examples/')})
})
.catch((err)=>{console.log(err)}) //will occur if there is an error thrown (i.e. more than 3 chars in the text)