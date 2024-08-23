import React, { useState } from 'react';
import FunctionFilters from './FunctionFilters';
import FunctionTable from './FunctionTable';
import FunctionGraph from './FunctionGraph';
import FunctionCircle from './FunctionCircle';
import UnitCircle from './UnitCircle';

import './trigonometry.css';

const TrigonometricFunctions = () => {
  const [degree, setDegree] = useState(0);
  const [selectedFunctions, setSelectedFunctions] = useState({
    sin: true,
    cos: true,
    tan: true,
    cot: true,
    sec: true,
    csc: true,
  });
  const [activeTab, setActiveTab] = useState('unitCircle');

  const handleDegreeChange = (e) => {
    const value = Math.max(0, Math.min(360, Number(e.target.value)));
    setDegree(value);
  };

  return (
    <div>
      <div> <label> Угол (в градусах): <input type="number" value={degree} onChange={handleDegreeChange} min="0" max="360" /> </label> </div>

      <FunctionFilters selectedFunctions={selectedFunctions} setSelectedFunctions={setSelectedFunctions} />

      <div>
        <button onClick={() => setActiveTab('table')}>Таблица значений</button>
        <button onClick={() => setActiveTab('graph')}>Графики функций</button>
        <button onClick={() => setActiveTab('circle')}>Значения на окружности</button>
        <button onClick={() => setActiveTab('unitCircle')}>Единичная окружность</button>
      </div>

      <div>
        {activeTab === 'table' && <FunctionTable degree={degree} selectedFunctions={selectedFunctions} />}
        {activeTab === 'graph' && <FunctionGraph degree={degree} selectedFunctions={selectedFunctions} />}
        {activeTab === 'circle' && <FunctionCircle degree={degree} selectedFunctions={selectedFunctions} />}
        {activeTab === 'unitCircle' && <UnitCircle degree={degree} selectedFunctions={selectedFunctions} />}
      </div>
    </div>
  );
};

export default TrigonometricFunctions;
