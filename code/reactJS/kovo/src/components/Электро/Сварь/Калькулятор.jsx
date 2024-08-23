import React, { useState } from 'react';

function Калькулятор() {
  const [material, setMaterial] = useState('Сталь');
  const [thickness, setThickness] = useState(1); // В миллиметрах
  const [diameter, setDiameter] = useState(1); // В миллиметрах
  const [current, setCurrent] = useState(null);
  const [power, setPower] = useState(null);
  const [voltage, setVoltage] = useState(null);

  const materials = {
    'Сталь': { baseCurrent: 10, voltageMultiplier: 1.1 },
    'Алюминий': { baseCurrent: 12, voltageMultiplier: 1.2 },
    'Нержавеющая сталь': { baseCurrent: 15, voltageMultiplier: 1.3 }
  };

  const diameters = [0.8, 1.0, 1.2, 1.6, 2.0]; // Диаметры проволоки в мм

  const calculateCurrent = () => {
    const materialData = materials[material];
    if (materialData) {
      return materialData.baseCurrent * thickness * (diameter / 1.0);
    }
    return 0;
  };

  const calculatePower = (current) => {
    return current * 24; // Примерное значение напряжения, в реальности оно может меняться
  };

  const calculateVoltage = (current) => {
    const materialData = materials[material];
    return current * (materialData ? materialData.voltageMultiplier : 1);
  };

  const handleMaterialChange = (event) => {
    setMaterial(event.target.value);
  };

  const handleThicknessChange = (event) => {
    setThickness(Number(event.target.value));
  };

  const handleDiameterChange = (event) => {
    setDiameter(Number(event.target.value));
  };

  const handleCalculate = () => {
    const calculatedCurrent = calculateCurrent();
    setCurrent(calculatedCurrent);
    setPower(calculatePower(calculatedCurrent));
    setVoltage(calculateVoltage(calculatedCurrent));
  };

  return (
    <div>
      <h2>Калькулятор сварочных токов</h2>
      <div>
        <label>
          Выберите материал:
          <select value={material} onChange={handleMaterialChange}>
            {Object.keys(materials).map((mat) => (
              <option key={mat} value={mat}>
                {mat}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Толщина материала (мм):
          <input
            type="number"
            value={thickness}
            onChange={handleThicknessChange}
            min="0"
          />
        </label>
      </div>
      <div>
        <label>
          Диаметр проволоки (мм):
          <select value={diameter} onChange={handleDiameterChange}>
            {diameters.map((dia) => (
              <option key={dia} value={dia}>
                {dia}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={handleCalculate}>Рассчитать</button>
      {current !== null && (
        <div>
          <h3>Рассчитанные параметры:</h3>
          <p>Сварочный ток: {current.toFixed(2)} А</p>
          <p>Мощность: {power.toFixed(2)} Вт</p>
          <p>Напряжение: {voltage.toFixed(2)} В</p>
        </div>
      )}
    </div>
  );
}

export default Калькулятор;
