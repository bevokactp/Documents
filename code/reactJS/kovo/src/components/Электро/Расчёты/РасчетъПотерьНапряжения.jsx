import React, { useState, useEffect } from 'react';
import { calculateVoltageDropDC, calculateVoltageDropAC, calculateInductiveReactance, calculateCapacitiveReactance } from './utils'; // Импорт функций из utils.js

const VoltageDropCalculation = () => {
    const [current, setCurrent] = useState(1); // Ток в Амперах
    const [resistance, setResistance] = useState(10); // Сопротивление в Ом
    const [inductance, setInductance] = useState(0.01); // Индуктивность в Гн
    const [capacitance, setCapacitance] = useState(0.000001); // Ёмкость в Фарад
    const [frequency, setFrequency] = useState(50); // Частота в Гц
    const [voltageDropDC, setVoltageDropDC] = useState(''); // Потери напряжения для постоянного тока в Вольтах
    const [voltageDropAC, setVoltageDropAC] = useState(''); // Потери напряжения для переменного тока в Вольтах

    useEffect(() => {
        // Функция для расчета потерь напряжения
        const calculateValues = () => {
            const I = parseFloat(current);
            const R = parseFloat(resistance);
            const L = parseFloat(inductance);
            const C = parseFloat(capacitance);
            const f = parseFloat(frequency);

            // Индуктивное сопротивление (XL)
            const XL = calculateInductiveReactance(f, L);

            // Ёмкостное сопротивление (XC)
            const XC = calculateCapacitiveReactance(f, C);

            // Потери напряжения для постоянного тока (V_drop_DC)
            const V_drop_DC = calculateVoltageDropDC(I, R);
            setVoltageDropDC(V_drop_DC.toFixed(5));

            // Потери напряжения для переменного тока (V_drop_AC)
            const V_drop_AC = calculateVoltageDropAC(I, R, XL, XC);
            setVoltageDropAC(V_drop_AC.toFixed(5));
        };

        calculateValues();
    }, [current, resistance, inductance, capacitance, frequency]); // Зависимости: расчеты выполняются при изменении любого из этих значений

    return (
        <div>
            <h1>Расчет потерь напряжения</h1>

            <div>
                <label>Ток (А):</label>
                <input
                    type="number"
                    value={current}
                    onChange={(e) => setCurrent(e.target.value)}
                />
                <label>Сопротивление (Ом):</label>
                <input
                    type="number"
                    value={resistance}
                    onChange={(e) => setResistance(e.target.value)}
                />
                <label>Индуктивность (Гн):</label>
                <input
                    type="number"
                    value={inductance}
                    onChange={(e) => setInductance(e.target.value)}
                />
                <label>Ёмкость (Фарад):</label>
                <input
                    type="number"
                    value={capacitance}
                    onChange={(e) => setCapacitance(e.target.value)}
                />
                <label>Частота (Гц):</label>
                <input
                    type="number"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                />

                <p>Потери напряжения для постоянного тока: {voltageDropDC} Вольт</p>
                <p>Потери напряжения для переменного тока: {voltageDropAC} Вольт</p>
            </div>

            <div>
                <p> <strong>Потери напряжения для постоянного тока </strong> = Ток (А) * Сопротивление (Ом)<br /> </p>
                <p>
                    <strong>Потери напряжения для переменного тока (V_drop_AC)</strong>:<br />
                    Полное сопротивление (Z) = sqrt(Сопротивление^2 + (Индуктивное сопротивление (XL) - Ёмкостное сопротивление (XC))^2)<br />
                    V_drop_AC (В) = Ток (А) * Полное сопротивление (Z)<br />
                </p>
            </div>
        </div>
    );
};

export default VoltageDropCalculation;
