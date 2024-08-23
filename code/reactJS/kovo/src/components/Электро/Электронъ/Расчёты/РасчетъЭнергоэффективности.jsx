import React, { useState, useEffect } from 'react';
import { calculateEnergyEfficiency } from './utils'; // Импорт функции из utils.js

const EnergyEfficiencyCalculation = () => {
    const [outputPower, setOutputPower] = useState(100); // Выходная мощность в Ваттах
    const [inputPower, setInputPower] = useState(150); // Входная мощность в Ваттах
    const [energyEfficiency, setEnergyEfficiency] = useState(''); // Энергоэффективность в %

    useEffect(() => {
        // Функция для расчета энергоэффективности
        const calculateValues = () => {
            const P_output = parseFloat(outputPower);
            const P_input = parseFloat(inputPower);

            // Энергоэффективность
            const efficiency = calculateEnergyEfficiency(P_output, P_input);
            setEnergyEfficiency(efficiency.toFixed(2));
        };

        calculateValues();
    }, [outputPower, inputPower]); // Зависимости: расчеты выполняются при изменении выходной или входной мощности

    return (
        <div>
            <h1>Расчет энергоэффективности</h1>

            <div>
                <label>Выходная мощность (Вт):</label>
                <input
                    type="number"
                    value={outputPower}
                    onChange={(e) => setOutputPower(e.target.value)}
                />
                <label>Входная мощность (Вт):</label>
                <input
                    type="number"
                    value={inputPower}
                    onChange={(e) => setInputPower(e.target.value)}
                />

                <p>Энергоэффективность: {energyEfficiency} %</p>
            </div>

            <div>
                <h2>Формулы и определения</h2>
                <p>
                    <strong>Энергоэффективность (Energy_Efficiency)</strong>:<br />
                    Энергоэффективность рассчитывается как отношение выходной мощности к входной мощности, умноженное на 100, чтобы выразить результат в процентах.<br />
                    Формула:<br />
                    Энергоэффективность (%) = (Выходная мощность (Вт) / Входная мощность (Вт)) * 100
                </p>
            </div>
        </div>
    );
};

export default EnergyEfficiencyCalculation;
