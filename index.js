const inquirer = require('inquirer');
const GenerateShape = require('./lib/shapes.js');
const fs = require('fs');

const Questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text (up to 3 characters): ',
        validate: input => input.length <= 3 || 'Text must be up to 3 characters' 
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color you wish to have (enter keyword or hex): ',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose the shape you would like on your logo: ',
        choices: [ 'Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape? (enter keyword or hex): ',
    }
];

const GenerateSVG = (text, textColor, shapeEl) => {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeEl}<text x="150" y="100" font-family="Arial" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text></svg>
    `
};

function writeToFile(data) {
    fs.writeFile('./examples/logo.svg', data, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg'));
}


function init() {
    inquirer.prompt(Questions).then(answers => {
        const { text, textColor, shape, shapeColor } = answers;
    let shapeEl = GenerateShape.GenerateShapeEl(answers)
    let svg = GenerateSVG(text, textColor, shapeEl )
    writeToFile(svg)
        });
    };


module.exports = Questions;
   
init();
