import React, { useState } from 'react';
import principles from './principles.yaml'; // Adjust the path as needed

const App = () => {
  const [selectedTitle, setSelectedTitle] = useState(null);

  const handleTitleClick = (title) => {
    setSelectedTitle(selectedTitle === title ? null : title);
  };

  return (
    <div>
      <h3>Принципы</h3>
      <ul>
        {principles.map((item) => (
          <li key={item.title}>
            <button onClick={() => handleTitleClick(item.title)}>
              {item.title}
            </button>
            {selectedTitle === item.title && <p>{item.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
