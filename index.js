#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const { program } = require('commander');
const TEMPLATE_DIR = path.join(__dirname, 'templates');

program
  .version('0.1.0')
  .description('React Composer');

program
  .command('generate <componentName>')
  .description('Generate a new React component')
  .option('--functional', 'Generate a functional component')
  .option('--class', 'Generate a class component')
  .action((componentName, options) => {
    generateComponent(componentName, options);
  });

program.parse(process.argv);

async function generateComponent(componentName, options) {
  try {
    const componentType = options.class ? 'class' : 'functional';
    const componentTemplatePath = path.join(TEMPLATE_DIR, `${componentType}-component.js`);
    const componentContent = await fs.readFile(componentTemplatePath, 'utf-8');
    const componentFileName = `${componentName}.js`;
    const componentPath = path.join(process.cwd(), componentFileName);
    await fs.outputFile(componentPath, componentContent);
    console.log(`Component "${componentName}" generated successfully.`);
  } catch (error) {
    console.error('Error generating component:', error);
  }
}
module.exports = generateComponent;