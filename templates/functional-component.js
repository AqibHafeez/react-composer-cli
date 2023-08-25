const generateFunctionalComponent = (componentName) => `
import React, { useState, useEffect }  from 'react';

const ${componentName} = () => {

  const [state, setState] = useState(/* initial state */);
  
  useEffect(() => {
    /* effect code */
  }, [/* dependencies */]);
  
  return (
    <>
    <span> ${componentName} Works</span>
    </>
  );
};

export default ${componentName};
`;

module.exports = generateFunctionalComponent;