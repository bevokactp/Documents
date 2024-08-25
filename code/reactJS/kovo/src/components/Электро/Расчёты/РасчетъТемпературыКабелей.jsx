import React, { useState } from 'react';
import { copperResistivity, aluminumResistivity } from './удельноеСопротивление';

const CableTemperatureCalculation = () => {
    const [current, setCurrent] = useState(5); // Ток в Амперах
    const [length, setLength] = useState(5); // Длина кабеля в метрах
    const [section, setSection] = useState(2.5); // Сечение кабеля в мм²
    const [material, setMaterial] = useState('Cu'); // Материал кабеля: Cu (медь) или Al (алюминий)
    const [ambientTemperature, setAmbientTemperature] = useState(25); // Температура окружающей среды в °C
    const [installationCondition, setInstallationCondition] = useState('Open'); // Условия прокладки: Open (открытая) или Hidden (скрытая)
    const [cableTemperature, setCableTemperature] = useState(''); // Температура кабеля в °C

    // Функция для расчета температуры кабелей
    const calculateCableTemperature = () => {
        const currentValue = parseFloat(current);
        const lengthValue = parseFloat(length);
        const sectionValue = parseFloat(section);
        const ambientTemperatureValue = parseFloat(ambientTemperature);

        // Удельное сопротивление материала
        const resistivity = material === 'Cu' ? copperResistivity : aluminumResistivity;

        // Коэффициент теплового рассеяния
        const thermalCoefficient = installationCondition === 'Open' ? 1.0 : 0.8;

        // Расчет сопротивления кабеля
        const resistance = (resistivity * lengthValue) / sectionValue;

        // Расчет температуры кабеля
        const temperature = ambientTemperatureValue + ((Math.pow(currentValue, 2) * resistance) / thermalCoefficient);

        setCableTemperature(temperature.toFixed(2));
    };

    return (
        <div>
            <h1>Расчет температуры кабеля</h1>

            <div>
                <label>Ток (А):</label>
                <input
                    type="number"
                    value={current}
                    onChange={(e) => setCurrent(e.target.value)}
                />
                <label>Длина кабеля (м):</label>
                <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />
                <label>Сечение кабеля (мм²):</label>
                <input
                    type="number"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                />
                <label>Материал кабеля:</label>
                <select value={material} onChange={(e) => setMaterial(e.target.value)}>
                    <option value="Cu">Медь</option>
                    <option value="Al">Алюминий</option>
                </select>
                <label>Температура окружающей среды (°C):</label>
                <input
                    type="number"
                    value={ambientTemperature}
                    onChange={(e) => setAmbientTemperature(e.target.value)}
                />
                <fieldset>
                    <legend>Условия прокладки:</legend>
                    <label>
                        <input
                            type="radio"
                            value="Open"
                            checked={installationCondition === 'Open'}
                            onChange={(e) => setInstallationCondition(e.target.value)}
                        />
                        Открытая
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Hidden"
                            checked={installationCondition === 'Hidden'}
                            onChange={(e) => setInstallationCondition(e.target.value)}
                        />
                        Скрытая
                    </label>
                </fieldset>

                <button onClick={calculateCableTemperature}>Рассчитать</button>

                <p>Температура кабеля: {cableTemperature} °C</p>

                <h3>Формула расчета:</h3>
                <p>
                    Формула для расчета сопротивления кабеля:<br />
                    <b>R = (ρ * L) / S</b><br />
                    Где:<br />
                    <b>R</b> — Сопротивление кабеля (Ом)<br />
                    <b>ρ</b> — Удельное сопротивление материала (Ом*мм²/м)<br />
                    <b>L</b> — Длина кабеля (м)<br />
                    <b>S</b> — Сечение кабеля (мм²)<br /><br />

                    Формула для расчета температуры кабеля:<br />
                    <b>T<sub>cable</sub> = T<sub>ambient</sub> + (I<sup>2</sup> * R) / k</b><br />
                    Где:<br />
                    <b>T<sub>cable</sub></b> — Температура кабеля (°C)<br />
                    <b>T<sub>ambient</sub></b> — Температура окружающей среды (°C)<br />
                    <b>I</b> — Ток (А)<br />
                    <b>R</b> — Сопротивление кабеля (Ом)<br />
                    <b>k</b> — Коэффициент теплового рассеяния (зависит от условий прокладки)
                </p>
            </div>
        </div>
    );
};

export default CableTemperatureCalculation;
