//Requires the shapes.js file to run these tests
const shapes = require('../lib/shapes.js');

describe('shapes', () => {
    //First Question tests to ensure the correct color is applied if the circle option is chosen
    it('Should be a blue circle', () => {
        const data = {
            shape: 'Circle',
            shapeColor: 'blue'
        };
        const expectedshape = `<circle cx="150" cy="100" r="50" fill="blue" />`;
        expect(shapes.GenerateShapeEl(data)).toEqual(expectedshape);
    });
    //Second Question tests to ensure the correct color is applied if the triangle option is chosen
    it('Should be a red triangle', () => {
        const data = {
            shape: 'Triangle',
            shapeColor: 'red'
        };
        const expectedshape = `<polygon points="150,50 200,150 100,150" fill="red" />`;
        expect(shapes.GenerateShapeEl(data)).toEqual(expectedshape);
    });
    //Third Question tests to ensure the correct color is applied if the square option is chosen
    it('Should be a green square', () => {
        const data = {
            shape: 'Square',
            shapeColor: 'green'
        };
        const expectedshape = `<rect x="100" y="50" width="100" height="100" fill="green" />`;
        expect(shapes.GenerateShapeEl(data)).toEqual(expectedshape);
    });
});