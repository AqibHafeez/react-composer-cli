#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const { program } = require('commander');
const TEMPLATE_DIR = path.join(__dirname, 'templates');
const generateFunctionalComponent = require('./templates/functional-component');
const generateClassComponent = require('./templates/class-component');

program
  .version('0.0.3')
  .description('React Composer CLI');

program
  .command('generate <componentName>')
  .description('Generate a new React component')
  .option('--functional', 'Generate a functional component')
  .option('--class', 'Generate a class component')
  .option('--style', 'Generate separate SCSS files')
  .action((componentName, options) => {
    generateComponent(componentName, options);
  });

program.parse(process.argv);

async function generateComponent(componentName, options) {
  try {
    const componentType = options.class ? 'class' : 'functional';
    let componentContent = componentType === 'class'
      ? generateClassComponent(componentName)
      : generateFunctionalComponent(componentName);

    const componentFileName = `${componentName}.js`;
    const componentPath = path.join(process.cwd(), componentFileName);
    if (options.style) {
      componentContent = `import './${componentName}.scss';\n` + componentContent;
      let styleFilePath = path.join(process.cwd(), `${componentName}.scss`);
      await fs.outputFile(styleFilePath, `/* Your styles for ${componentName} component here */`);
    }
    await fs.outputFile(componentPath, componentContent);
    console.log(`Component "${componentName}" generated successfully.`);
  } catch (error) {
    console.error('Error generating component:', error);
  }
}
module.exports = generateComponent;