const inquirer = require('inquirer');
const fs = require('fs');

const Questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text (up to 3 characters): ',
        validate: input => input.length <= 3 || 'Text must be up to 3 characters' 
    }
];

const GenerateSVG = ('test');

inquirer.prompt(Questions).then(answers => {
    const { text } = answers;
});

module.exports = Questions;
    
