module.exports = promptOptions = [
    {
      type: 'input',
      name: 'componentName',
      message: 'Please provide a name for your component:',
    },
    {
      type: 'list',
      name: 'componentLanguage',
      message: 'Select the preferred programming language for your component:',
      choices: ['js', 'tsx'],
    },
    {
      type: 'list',
      name: 'componentType',
      message: 'Choose the type of component you wish to generate:',
      choices: ['Functional', 'Class'],
    },
    {
      type: 'list',
      name: 'componentStyle',
      message: 'Select the preferred styling approach for your component:',
      choices: ['css', 'scss'],
    },
  ]