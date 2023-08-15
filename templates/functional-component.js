const generateFunctionalComponent = (componentName) => `
import React from 'react';

const ${componentName} = () => {
  return (
    <>
    <span> ${componentName} Works</span>
    </>
  );
};

export default ${componentName};
`;

module.exports = generateFunctionalComponent;