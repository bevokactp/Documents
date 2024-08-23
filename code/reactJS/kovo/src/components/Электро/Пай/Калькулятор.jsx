import React, { useState } from 'react';

// Примерные функции для расчета
const calculateSolderAmount = (width, length, type, connectionType) => {
  let baseAmount = width * length;
  // Множитель для типа припоя
  const solderMultiplier = type === 'проволока' ? 1.2 : 1.1;
  // Множитель для типа соединения
  const connectionMultiplier = connectionType === 'через отверстие' ? 1.3 : 1.1;
  return baseAmount * solderMultiplier * connectionMultiplier;
};

const calculateSolderingTime = (type, connectionType) => {
  // Примерное время пайки в секундах
  if (type === 'проволока') {
    return connectionType === 'через отверстие' ? 20 : 15;
  }
  return connectionType === 'через отверстие' ? 25 : 20;
};

const calculateFluxAmount = (width, length, type, connectionType) => {
  // Примерная формула для расчета количества флюса
  const baseAmount = (width * length) * (type === 'флюс' ? 1.5 : 1.2);
  return connectionType === 'через отверстие' ? baseAmount * 1.2 : baseAmount;
};

const Калькулятор = () => {
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [type, setType] = useState('проволока');
  const [connectionType, setConnectionType] = useState('поверхность');
  const [solderResult, setSolderResult] = useState(null);
  const [timeResult, setTimeResult] = useState(null);
  const [fluxResult, setFluxResult] = useState(null);

  const handleCalculate = () => {
    const widthValue = parseFloat(width);
    const lengthValue = parseFloat(length);
    if (isNaN(widthValue) || isNaN(lengthValue) || widthValue <= 0 || lengthValue <= 0) {
      alert('Пожалуйста, введите допустимые значения для ширины и длины.');
      return;
    }
    const solderAmount = calculateSolderAmount(widthValue, lengthValue, type, connectionType);
    const solderingTime = calculateSolderingTime(type, connectionType);
    const fluxAmount = calculateFluxAmount(widthValue, lengthValue, type, connectionType);

    setSolderResult(solderAmount);
    setTimeResult(solderingTime);
    setFluxResult(fluxAmount);
  };

  return (
    <div>
      <h3>Калькулятор пайки</h3>
      <div>
        <label>
          Ширина (мм):
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            min="0"
          />
        </label>
      </div>
      <div>
        <label>
          Длина (мм):
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min="0"
          />
        </label>
      </div>
      <div>
        <label>
          Тип припоя:
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="проволока">Проволока</option>
            <option value="флюс">Флюс</option>
            <option value="припой">Припой</option>
            {/* Добавьте другие типы по необходимости */}
          </select>
        </label>
      </div>
      <div>
        <label>
          Тип соединения:
          <select
            value={connectionType}
            onChange={(e) => setConnectionType(e.target.value)}
          >
            <option value="поверхность">Поверхность</option>
            <option value="через отверстие">Через отверстие</option>
            {/* Добавьте другие типы соединений по необходимости */}
          </select>
        </label>
      </div>
      <button onClick={handleCalculate}>Рассчитать</button>
      {solderResult !== null && (
        <div>
          <h4>Необходимое количество припоя: {solderResult.toFixed(2)} г</h4>
          <h4>Рекомендуемое время пайки: {timeResult} сек</h4>
          <h4>Необходимое количество флюса: {fluxResult.toFixed(2)} г</h4>
        </div>
      )}
    </div>
  );
};

export default Калькулятор;
