const generateClassComponent = (componentName) => `
import React, { Component } from 'react';

class ${componentName} extends Component {
  render() {
    return (
      <>
        <span> ${componentName} Works</span>
      </>
    );
  }
}

export default ${componentName};
`;

module.exports = generateClassComponent;