#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const { program } = require('commander');
const inquirer = require('inquirer');
const TEMPLATE_DIR = path.join(__dirname, 'templates');
const generateFunctionalComponent = require('./templates/functional-component');
const generateClassComponent = require('./templates/class-component');
const promptOptions = require('./Configs/promptOptions');
const Helper = require('./Utils/helper');

program
  .version('1.0.0')
  .description('React Composer CLI');

program
  .command('generate')
  .description('Generate a new React component')
  .action(() => {
    generateComponent();
  });

program.parse(process.argv);

async function generateComponent() {
  try {
    let response = await inquirer.prompt(promptOptions);
    response.componentName = Helper.capitalizeFirstLetter(response.componentName);
    // Create a directory with the component name
    const componentDirectory = path.join(process.cwd(), response.componentName);
    await fs.ensureDir(componentDirectory);

    let componentContent = response.componentType === 'Class'
      ? generateClassComponent(response.componentName)
      : generateFunctionalComponent(response.componentName);

    const componentFileName = `${response.componentName}.${response.componentLanguage}`;
    const componentPath = path.join(componentDirectory, componentFileName);

    componentContent = `import './${response.componentStyle}';\n` + componentContent;

    const styleFileName = `${response.componentName}.${response.componentStyle}`;
    const styleFilePath = path.join(componentDirectory, styleFileName);
    await fs.outputFile(styleFilePath, `/* Your styles for ${response.componentName} component here */`);

    await fs.outputFile(componentPath, componentContent);
    console.log(`Component "${response.componentName}" generated successfully in "${componentDirectory}" folder.`);
  } catch (error) {
    console.error('Error generating component:', error);
  }
}
module.exports = generateComponent;