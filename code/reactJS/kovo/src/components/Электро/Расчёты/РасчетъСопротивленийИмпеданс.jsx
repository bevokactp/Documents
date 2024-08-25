import React, { useState, useEffect } from 'react';

import { calculateInductiveReactance, calculateCapacitiveReactance, calculateImpedance } from './utils'; // Импорт функций из utils.js

const ImpedanceCalculation = () => {
    const [resistance, setResistance] = useState(10); // Активное сопротивление в Ом
    const [inductance, setInductance] = useState(0.01); // Индуктивность в Гн
    const [capacitance, setCapacitance] = useState(0.000001); // Ёмкость в Фарад
    const [frequency, setFrequency] = useState(50); // Частота в Гц
    const [inductiveReactance, setInductiveReactance] = useState(''); // Индуктивное сопротивление в Ом
    const [capacitiveReactance, setCapacitiveReactance] = useState(''); // Ёмкостное сопротивление в Ом
    const [impedance, setImpedance] = useState(''); // Импеданс в Ом

    useEffect(() => {
        // Функция для расчета импеданса
        const calculateImpedanceEffect = () => {
            const R = parseFloat(resistance);
            const L = parseFloat(inductance);
            const C = parseFloat(capacitance);
            const f = parseFloat(frequency);

            // Индуктивное сопротивление — это сопротивление, создаваемое индуктивным элементом при переменном токе.
            // Формула: XL = 2 * π * f * L
            // XL — Индуктивное сопротивление (Ом)
            // π — Число Пи (приблизительно 3.14159)
            // f — Частота сигнала (Гц)
            // L — Индуктивность (Гн)
            const XL = calculateInductiveReactance(f, L);
            setInductiveReactance(XL.toFixed(5));

            // Ёмкостное сопротивление — это сопротивление, создаваемое ёмкостным элементом при переменном токе.
            // Формула: XC = 1 / (2 * π * f * C)
            // XC — Ёмкостное сопротивление (Ом)
            // π — Число Пи (приблизительно 3.14159)
            // f — Частота сигнала (Гц)
            // C — Ёмкость (Фарад)
            const XC = calculateCapacitiveReactance(f, C);
            setCapacitiveReactance(XC.toFixed(5));

            // Импеданс — это комплексное сопротивление цепи, учитывающее активное сопротивление и реактивные сопротивления.
            // Формула: Z = sqrt(R^2 + (XL - XC)^2)
            // Z — Импеданс (Ом)
            // R — Активное сопротивление (Ом)
            // XL — Индуктивное сопротивление (Ом)
            const Z = calculateImpedance(R, XL, XC);
            setImpedance(Z.toFixed(5));
        };

        calculateImpedanceEffect();
    }, [resistance, inductance, capacitance, frequency]); // Зависимости: расчеты выполняются при изменении любого из этих значений

    return (
        <div>
            <h1>Расчет импеданса</h1>

            <div>
                <label>Активное сопротивление (Ом):</label>
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

                <p>Индуктивное сопротивление (XL): {inductiveReactance} Ом</p>
                <p>Ёмкостное сопротивление (XC): {capacitiveReactance} Ом</p>
                <p>Импеданс (Z): {impedance} Ом</p>
            </div>

            <div>
                <h2>Формулы и определения</h2>
                <p>
                    <strong>Индуктивное сопротивление (XL)</strong>:<br />
                    Индуктивное сопротивление — это сопротивление, которое создается при прохождении переменного тока через индуктивный элемент (катушка, трансформатор, реактор, дроссель, переходной конденсатор).<br />
                    XL (ом) = 2 * π * Частота сигнала (Гц) * Индуктивность (Гн)<br />
                </p>
                <p>
                    <strong>Ёмкостное сопротивление (XC)</strong>:<br />
                    Ёмкостное сопротивление — это сопротивление, которое создается при прохождении переменного тока через ёмкостный элемент (конденсатор (танталовый, керамический, электролитический)).<br />
                    XC (ом) = 1 / (2 * π * Частота сигнала (Гц) * Ёмкость (Фарад))<br />
                </p>
                <p>
                    <strong>Импеданс (Z)</strong>:<br />
                    Импеданс — это комплексное сопротивление цепи, учитывающее активное сопротивление и реактивные сопротивления.<br />
                    Z (ом) = sqrt(R^2 + (XL - XC)^2)<br />
                </p>
            </div>
        </div>
    );
};

export default ImpedanceCalculation;
