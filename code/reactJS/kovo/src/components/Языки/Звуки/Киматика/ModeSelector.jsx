import React from 'react';

const ModeSelector = ({ mode, setMode }) => {
  return (
    <div>
      <label htmlFor="mode">Mode: </label>
      <select id="mode" value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="1">Mode 1</option>
        <option value="2">Mode 2</option>
        <option value="3">Mode 3</option>
        {/* Add more modes as needed */}
      </select>
    </div>
  );
};

export default ModeSelector;
