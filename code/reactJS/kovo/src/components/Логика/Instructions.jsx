import React from 'react';
import instructions from './instructions.yaml';


const App = () => {
  return (
    <div>
      <h3>Наставленія</h3>
      <ul>
      {instructions.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default App;
