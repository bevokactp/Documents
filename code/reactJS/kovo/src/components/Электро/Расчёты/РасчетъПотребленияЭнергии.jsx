import React, { useState, useEffect } from 'react';
import { calculateEnergyConsumption } from './utils'; // Импорт функции из utils.js

const EnergyConsumptionCalculation = () => {
    const [power, setPower] = useState(100); // Мощность в Ваттах
    const [time, setTime] = useState(1); // Время работы в часах
    const [energyConsumption, setEnergyConsumption] = useState(''); // Потребление энергии в киловатт-часах

    useEffect(() => {
        // Функция для расчета потребления энергии
        const calculateValues = () => {
            const P = parseFloat(power);
            const T = parseFloat(time);

            // Потребление энергии
            const energy = calculateEnergyConsumption(P, T);
            setEnergyConsumption(energy.toFixed(5));
        };

        calculateValues();
    }, [power, time]); // Зависимости: расчеты выполняются при изменении мощности или времени

    return (
        <div>
            <h1>Расчет потребления энергии</h1>

            <div>
                <label>Мощность (Вт):</label>
                <input
                    type="number"
                    value={power}
                    onChange={(e) => setPower(e.target.value)}
                />
                <label>Время работы (часы):</label>
                <input
                    type="number"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />

                <p>Потребление энергии: {energyConsumption} кВтч</p>
            </div>

            <div>
                <h2>Формулы и определения</h2>
                <p>
                    <strong>Потребление энергии (Energy_Consumption)</strong>:<br />
                    Потребление энергии рассчитывается как произведение мощности на время работы в часах, переведенное в киловатт-часы.<br />
                    Формула:<br />
                    Потребление энергии (кВтч) = Мощность (Вт) * Время (часы) / 1000
                </p>
            </div>
        </div>
    );
};

export default EnergyConsumptionCalculation;
