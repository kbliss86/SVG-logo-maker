//Function to generate the shape opject based on the shape and color chosen by the user
function GenerateShapeEl(data) {
    //Declarethe shapeEl
    let shapeEl = '';
    //switch case to cycle through the options
    switch (data.shape) {
        //Circle
        case 'Circle':
            shapeEl = `<circle cx="150" cy="100" r="50" fill="${data.shapeColor}" />`;
            return shapeEl;
        //Triangle
        case 'Triangle':
            shapeEl = `<polygon points="150,50 200,150 100,150" fill="${data.shapeColor}" />`;
            return shapeEl;
        //Square
        case 'Square':
            shapeEl = `<rect x="100" y="50" width="100" height="100" fill="${data.shapeColor}" />`;
            return shapeEl;
        default:
            return '';    
    }
};
//export the module for use in tests and index.js
module.exports = {GenerateShapeEl};