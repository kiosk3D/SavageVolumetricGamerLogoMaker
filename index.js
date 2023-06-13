const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for the logo:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal value):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal value):',
    },
  ])
  .then(answers => {
    const { text, textColor, shape, shapeColor } = answers;

    const svgContent = `
      <svg width="300" height="200">
        <text x="150" y="100" fill="${textColor}" text-anchor="middle">${text}</text>
        ${generateShapeSvg(shape, shapeColor)}
      </svg>
    `;

    fs.writeFile('logo.svg', svgContent, err => {
      if (err) {
        console.error('Error creating the SVG file:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  })
  .catch(err => {
    console.error('Error:', err);
  });

function generateShapeSvg(shape, color) {
  let shapeSvg = '';

  switch (shape) {
    case 'circle':
      shapeSvg = `<circle cx="150" cy="100" r="50" fill="${color}" />`;
      break;
    case 'triangle':
      shapeSvg = `<polygon points="150,18 244,182 56,182" fill="${color}" />`;
      break;
    case 'square':
      shapeSvg = `<rect x="100" y="50" width="100" height="100" fill="${color}" />`;
      break;
    default:
      break;
  }

  return shapeSvg;
}
