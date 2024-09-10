// src/components/App.jsx
import React, { useState } from 'react';
import BeadConfigurator from './BeadConfigurator';
import BeadChain from './BeadChain';
import './App.css';

const App = () => {
  const [parts, setParts] = useState([
    { diameter: 20, color: '#2ff2ff', shape: 'sphere', count: 5, },
    { diameter: 15, color: '#CF9FFF', shape: 'cube', count: 8, },
    { diameter: 25, color: '#9400ff', shape: 'sphere', count: 10, }
  ]);
  const [circleColor, setCircleColor] = useState('#222fff');
  const [radius, setRadius] = useState(100);
  const [beadType, setBeadType] = useState(1);

  return (
    <div className="app-container">
      <div className="configurator">
        <label>
          <select value={beadType} onChange={(e) => setBeadType(parseInt(e.target.value, 10))}>
            <option value={1}>Последовательные части</option>
            <option value={2}>Чередующиеся части</option>
          </select>
        </label>
        {beadType === 1 ? (
          <BeadConfigurator
            parts={parts}
            setParts={setParts}
            circleColor={circleColor}
            setCircleColor={setCircleColor}
            radius={radius}
            setRadius={setRadius}
          />
        ) : (
          <div>
            <p>1, 2, 3 1, 2, 3 .........</p>
          </div>
        )}
      </div>
      {beadType === 1 && (
        <div className="bead-chain">
          <BeadChain parts={parts} circleColor={circleColor} radius={radius} />
        </div>
      )}
    </div>
  );
};

export default App;
