const Questions = require('../index.js');
// const {Questions, GenerateSVG} = require('../index.js');

describe('Questions', () => {
    it('Should have four questions', () => {
        expect(Questions.length).toBe(1)
    });

    it('Text Questions Contains up to 3 characters', () => {
        const textQuestions = Questions.find(q => q.name === 'text');
        expect(textQuestions.validate('XYZ')).toEqual(true);
        expect(textQuestions.validate('WXYZ')).toBe('Text must be up to 3 characters')
    });

    it('Shape Question contains 4 options', () => {
        const shapeQuestions = Questions.find(q => q.name === 'shape');
        expect(shapeQuestions.choices).toEqual(['cicrle', 'triangle', 'square']);
    })
});