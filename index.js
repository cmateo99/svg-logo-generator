


const { Triangle, Circle, Square } = require('./lib/shapes');
const SVG = require('./lib/svg');
import inquirer from 'inquirer';
const fs = require('fs');
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter your logo text (3 letters max):',
                name: 'text',
            },
            {
                type: 'input',
                message: 'Enter the text color as a hexadecimal:',
                name: 'textColor',
                default: 'black',
            },
            {
                type: 'list',
                message: 'Select one of the shapes:',
                name: 'shape',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                message: 'Enter the shape color as a hexadecimal:',
                name: 'shapeColor',
                default: 'white',
            },
        ])
        .then((input) => writeToFile(input))
        
        function writeToFile(input) {
         const svg = new SVG();
         try {
            svg.setText(input.text, input.textColor);
      
            let shape;
            switch (input.shape) {
              case 'circle':
                shape = new Circle();
                break;
              case 'triangle':
                shape = new Triangle();
                break;
              case 'square':
                shape = new Square();
                break;
              default:
                throw new Error('Invalid shape selected');
            }
      
            shape.setColor(input.shapeColor);
            svg.shape = shape.render();
      
            const svgCode = svg.render();
      
            fs.writeFile('logo.svg', svgCode, (err) => {
              if (err) throw err;
              console.log('Generated logo.svg');
            });
          } catch (error) {
            console.error(error);
          }
        }
        
}
init();