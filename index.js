//Declare required files/modules
const inquirer = require('inquirer');
const GenerateShape = require('./lib/shapes.js');
const fs = require('fs');
//inquirer questions array
const Questions = [
    //Question for user to choose what text they want on the SVG logo
    {
        type: 'input',
        name: 'text',
        message: 'Enter text (up to 3 characters): ',
        //validates that the input length is less than 3 characters
        validate: input => input.length <= 3 || 'Text must be up to 3 characters' 
    },
    //Questions for user to choose the color of the text
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color you wish to have (enter keyword or hex): ',
    },
    //Question for user to choose the background shape in the SVG logo
    {
        type: 'list',
        name: 'shape',
        message: 'Choose the shape you would like on your logo: ',
        choices: [ 'Circle', 'Triangle', 'Square'],
    },
    //Questions for user to choose the color of the shape in the SVG logo
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape? (enter keyword or hex): ',
    }
];
//arror function to generate the SVG logo code utilizingthe text, textColor and Shape elements
const GenerateSVG = (text, textColor, shapeEl) => {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeEl}<text x="150" y="100" font-family="Arial" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text></svg>
    `
};
//function to create the SVG file in the examples folder of the repository
function writeToFile(data) {
    fs.writeFile('./examples/logo.svg', data, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg'));
}
//function to invoke all other functions on the page starting with inquirer, the shapes.js then generate SVG and finally write file
function init() {
    inquirer.prompt(Questions).then(answers => {
        const { text, textColor, shape, shapeColor } = answers;
    let shapeEl = GenerateShape.GenerateShapeEl(answers)
    let svg = GenerateSVG(text, textColor, shapeEl )
    writeToFile(svg)
        });
    };
//exports so it can be used in testing
module.exports = Questions;
//invokes the init function to run the program   
init();
