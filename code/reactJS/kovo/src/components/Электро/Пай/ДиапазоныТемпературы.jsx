import React, { useState } from 'react';

// Данные о температурных режимах для различных типов припоя
const temperatureData = {
  'Оловяно-свинцовый припой': { min: 190, max: 210 },
  'Безсвинцовый припой': { min: 220, max: 240 },
  'Свинцово-сурьмяной припой': { min: 180, max: 200 },
  'Серебряный припой': { min: 240, max: 260 },
  'Паяльная паста': { min: 150, max: 180 },
  'Паяльные флюсы': { min: 150, max: 170 },
  'Сплав Розе': { min: 210, max: 230 },
  'Сплав Вуда': { min: 230, max: 250 },
};

const ДиапазоныТемпературы = () => {
  const [selectedType, setSelectedType] = useState('Свинцово-сурьмяной припой');

  return (
    <div>
      <h1>Температурные режимы пайки</h1>
      <div>
        <label>
          Тип припоя:
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {Object.keys(temperatureData).map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <h2>Рекомендованные температурные режимы:</h2>
        <p>Минимальная температура: {temperatureData[selectedType].min}°C</p>
        <p>Максимальная температура: {temperatureData[selectedType].max}°C</p>
      </div>
    </div>
  );
};

export default ДиапазоныТемпературы;
