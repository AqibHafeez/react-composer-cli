const generateClassComponent = (componentName) => `
import React, { Component } from 'react';

class ${componentName} extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize your state properties here
    };
  }
  componentDidMount() {
    // Perform any initialization, API calls, or subscriptions here
  }
  
  componentWillUnmount() {
    // Clean up resources, cancel subscriptions, etc. here
  }

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