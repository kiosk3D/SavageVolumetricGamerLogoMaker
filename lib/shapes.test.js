const { Triangle, Circle, Square } = require('../lib/shapes');

describe('Triangle', () => {
  test('should render a triangle with the specified color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle', () => {
  test('should render a circle with the specified color', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="100" cy="100" r="80" fill="red" />');
  });
});

describe('Square', () => {
  test('should render a square with the specified color', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="50" y="50" width="150" height="150" fill="green" />');
  });
});
