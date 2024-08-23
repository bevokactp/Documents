import React, { useState } from 'react';
import WaveVisualizer from './WaveVisualizer';
import VibrationModes from './VibrationModes';
import Controls from './Controls';

const App = () => {
  const [frequency, setFrequency] = useState(440); // Default frequency
  const [mode, setMode] = useState('1'); // Default mode

  return (
    <div>
      <h1>Kymatic Visualization</h1>
      <Controls frequency={frequency} setFrequency={setFrequency} mode={mode} setMode={setMode} />
      <WaveVisualizer frequency={frequency} />
      <VibrationModes mode={mode} />
    </div>
  );
};

export default App;
