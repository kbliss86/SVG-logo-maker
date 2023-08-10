//Requires the index.js file to run this test
const Questions = require('../index.js');


describe('Questions', () => {
    //First questions tests to make sure there are 4 inquirer prompts
    it('Should have four questions', () => {
        expect(Questions.length).toBe(4)
    });
    //Second Questions tests to make sure that the firs questions only allows 3 characters to be selected
    it('Text Questions Contains up to 3 characters', () => {
        const textQuestions = Questions.find(q => q.name === 'text');
        expect(textQuestions.validate('XYZ')).toEqual(true);
        expect(textQuestions.validate('WXYZ')).toBe('Text must be up to 3 characters')
    });
    //Third Question tests to make sure the shapes questions has the appropriate number and correct shapes
    it('Shape Question contains 3 options', () => {
        const shapeQuestions = Questions.find(q => q.name === 'shape');
        expect(shapeQuestions.choices).toEqual(['Circle', 'Triangle', 'Square']);
    })
});