import React, { useState } from 'react';

import { copperResistivity, aluminumResistivity } from './удельноеСопротивление';


const WireSectionCalculation = () => {
    const [current, setCurrent] = useState(5); // Ток в Амперах
    const [length, setLength] = useState(5); // Длина провода в метрах
    const [voltageDrop, setVoltageDrop] = useState(3); // Допустимое падение напряжения в %
    const [material, setMaterial] = useState('Cu'); // Материал провода: Cu (медь) или Al (алюминий)
    const [voltage, setVoltage] = useState(220); // Напряжение в Вольтах
    const [wireSection, setWireSection] = useState(''); // Сечение провода в мм²
    const [wireDiameter, setWireDiameter] = useState(''); // Диаметр провода в мм

    // Функция для расчета сечения и диаметра провода
    const calculateWireSection = () => {
        const currentValue = parseFloat(current);
        const lengthValue = parseFloat(length);
        const voltageDropValue = parseFloat(voltageDrop);
        const voltageValue = parseFloat(voltage);

        // Удельное сопротивление материала
        const resistivity = material === 'Cu' ? copperResistivity : aluminumResistivity;


        // Формула для расчета сечения провода
        // S = (2 * I * L * ρ) / (ΔU / U)
        // Где:
        // S - Сечение провода (мм²)
        // I - Ток (А)
        // L - Длина провода (м)
        // ρ - Удельное сопротивление материала (Ом*мм²/м)
        // ΔU - Допустимое падение напряжения (%)
        // U - Напряжение (В)

        const section = (2 * currentValue * lengthValue * resistivity) / (voltageDropValue / voltageValue);

        // Формула для расчета диаметра провода
        // D = √(4 * S / π)
        // Где:
        // D - Диаметр провода (мм)
        // S - Сечение провода (мм²)

        const diameter = Math.sqrt((4 * section) / Math.PI);

        setWireSection(section.toFixed(5));
        setWireDiameter(diameter.toFixed(5));
    };

    return (
        <div>
            <h1>Расчет сечения и диаметра проводов</h1>

            <div>
                <label>Ток (А):</label>
                <input
                    type="number"
                    value={current}
                    onChange={(e) => setCurrent(e.target.value)}
                />
                <label>Длина провода (м):</label>
                <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />
                <label>Допустимое падение напряжения (%):</label>
                <input
                    type="number"
                    value={voltageDrop}
                    onChange={(e) => setVoltageDrop(e.target.value)}
                />
                <label>Напряжение (В):</label>
                <input
                    type="number"
                    value={voltage}
                    onChange={(e) => setVoltage(e.target.value)}
                />
                <label>Материал провода:</label>
                <select value={material} onChange={(e) => setMaterial(e.target.value)}>
                    <option value="Cu">Медь</option>
                    <option value="Al">Алюминий</option>
                </select>

                <button onClick={calculateWireSection}>Рассчитать</button>

                <p>Сечение провода: {wireSection} мм²</p>
                <p>Диаметр провода: {wireDiameter} мм</p>

                <h3>Формула расчета:</h3>
                <p>
                    Формула для расчета сечения:<br />
                    <b>S = (2 * I * L * ρ) / (ΔU / U)</b><br />
                    Где:<br />
                    <b>S</b> — Сечение провода (мм²)<br />
                    <b>I</b> — Ток (А)<br />
                    <b>L</b> — Длина провода (м)<br />
                    <b>ρ</b> — Удельное сопротивление материала (Ом*мм²/м)<br />
                    <b>ΔU</b> — Допустимое падение напряжения (%)<br />
                    <b>U</b> — Напряжение (В)<br /><br />

                    Формула для расчета диаметра:<br />
                    <b>D = √(4 * S / π)</b><br />
                    Где:<br />
                    <b>D</b> — Диаметр провода (мм)<br />
                    <b>S</b> — Сечение провода (мм²)
                </p>
            </div>
        </div>
    );
};

export default WireSectionCalculation;
