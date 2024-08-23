import React from 'react';
import FrequencySelector from './FrequencySelector';
import ModeSelector from './ModeSelector';

const Controls = ({ frequency, setFrequency, mode, setMode }) => {
  return (
    <div>
      <FrequencySelector frequency={frequency} setFrequency={setFrequency} />
      <ModeSelector mode={mode} setMode={setMode} />
      {/* Add additional controls if necessary */}
    </div>
  );
};

export default Controls;
