import React from 'react';

const FrequencySelector = ({ frequency, setFrequency }) => {
  return (
    <div>
      <label htmlFor="frequency">Frequency (Hz): </label>
      <input
        type="number"
        id="frequency"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        min="20"
        max="20000"
      />
    </div>
  );
};

export default FrequencySelector;
