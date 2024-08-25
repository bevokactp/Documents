import React, { useState } from 'react';
import { copperResistivity, aluminumResistivity } from './удельноеСопротивление';

const CableResistanceCalculation = () => {
    const [length, setLength] = useState(500); // Длина кабеля в метрах
    const [section, setSection] = useState(10); // Сечение кабеля в мм²
    const [material, setMaterial] = useState('Cu'); // Материал кабеля: Cu (медь) или Al (алюминий)
    const [resistance, setResistance] = useState(''); // Сопротивление кабеля в Ом

    // Функция для расчета сопротивления кабеля
    const calculateCableResistance = () => {
        const lengthValue = parseFloat(length);
        const sectionValue = parseFloat(section);

        // Удельное сопротивление материала
        const resistivity = material === 'Cu' ? copperResistivity : aluminumResistivity;

        // Расчет сопротивления кабеля
        // Формула для расчета сопротивления кабеля:
        // R = (ρ * L) / S
        // Где:
        // R — Сопротивление кабеля (Ом)
        // ρ — Удельное сопротивление материала (Ом·мм²/м)
        //    Для меди (Cu) используется 0.00000178 Ом·мм²/м
        //    Для алюминия (Al) используется 0.00000282 Ом·мм²/м
        // L — Длина кабеля (м)
        // S — Сечение кабеля (мм²)
        const resistanceValue = (resistivity * lengthValue) / sectionValue;

        setResistance(resistanceValue.toFixed(5)); // Округляем до 5 знаков после запятой
    };

    return (
        <div>
            <h1>Расчет сопротивления кабеля</h1>

            <div>
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

                <button onClick={calculateCableResistance}>Рассчитать</button>

                <p>Сопротивление кабеля: {resistance} Ом</p>
            </div>
        </div>
    );
};

export default CableResistanceCalculation;
