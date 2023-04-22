const iq = require('inquirer')

iq
.prompt([ //prompts that the user will answer in the terminal. this is a promise
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
    console.log(data)
})