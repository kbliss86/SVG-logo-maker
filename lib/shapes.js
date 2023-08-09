function GenerateShapeEl(data) {
    let shapeEl = '';

    switch (data.shape) {
        case 'Circle':
            shapeEl = `<circle cx="150" cy="100" r="50" fill="${data.shapeColor}" />`;
            return shapeEl;
        case 'Triangle':
            shapeEl = `<polygon points="150,50 200,150 100,150" fill="${data.shapeColor}" />`;
            return shapeEl;
        case 'Square':
            shapeEl = `<rect x="100" y="50" width="100" height="100" fill="${data.shapeColor}" />`;
            return shapeEl;
        default:
            return '';    
    }
};

module.exports = {GenerateShapeEl};