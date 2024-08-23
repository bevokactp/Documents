import React, { useState, useEffect } from 'react';
import Circle from './Circle';
import Square from './Square';

export default function Mar() {
  const [arrayLength, setArrayLength] = useState(4);
  const [numbers, setNumbers] = useState([]);

  const minNum = 4;
  const maxNum = 25;

  useEffect(() => {
    generateNumbers(arrayLength);
  }, [arrayLength]);

  const generateNumbers = (length) => {
    const newNumbers = Array.from({ length }, () =>
      Math.floor(Math.random() * maxNum) + 1
    );
    setNumbers(newNumbers);
  };

  const handleChange = (e) => {
    const length = Math.min(Math.max(Number(e.target.value), minNum), maxNum);
    setArrayLength(length);
    generateNumbers(length);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="number"
        min={minNum}
        max={maxNum}
        value={arrayLength}
        onChange={handleChange}
        style={{ marginBottom: '10px', fontSize: '16px', padding: '5px' }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginRight: '20px' }}>
          <Circle numbers={numbers} />
        </div>
        <div>
          <Square numbers={numbers} />
        </div>
      </div>
    </div>
  );
}
