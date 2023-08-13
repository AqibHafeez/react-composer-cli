const generateFunctionalComponent = (componentName) => `
import React from 'react';

const ${componentName} = () => {
  return (
    <>
      <span>Functional Component Works</span>
    </>
  );
};

export default ${componentName};
`;

module.exports = generateFunctionalComponent;