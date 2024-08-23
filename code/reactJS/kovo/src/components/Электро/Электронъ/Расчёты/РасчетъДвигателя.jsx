import React, { useState, useEffect } from 'react';

import {
    calculateDCMotorPower,
    calculateDCMotorCurrent,
    calculateStartingCurrentDC
} from './вычисленія/двигатели/dc';

import {
    calculateACMotorPower,
    calculateACMotorCurrent,
    calculateStartingCurrentAC,
    calculateACMotorSpeed
} from './вычисленія/двигатели/ac';

import { calculateTorque } from './вычисленія/двигатели/common';



const ElectricMotorCalculation = () => {
    const [motorType, setMotorType] = useState('DC'); // Тип двигателя: DC или AC

    // DC Motor States
    const [dcVoltage, setDCVoltage] = useState(12);
    const [dcCurrent, setDCCurrent] = useState(2);
    const [dcSpeed, setDCSpeed] = useState(3000); // Скорость оборотов
    const [dcStartingCurrentCoefficient, setDCStartingCurrentCoefficient] = useState(3);
    const [dcPower, setDCPower] = useState('');
    const [dcRequiredCurrent, setDCRequiredCurrent] = useState('');
    const [dcStartingCurrent, setDCStartingCurrent] = useState('');
    const [dcTorque, setDCTorque] = useState('');

    // AC Motor States
    const [acVoltage, setACVoltage] = useState(220);
    const [acCurrent, setACCurrent] = useState(5);
    const [acFrequency, setACFrequency] = useState(50); // Частота в Гц
    const [acPoles, setACPoles] = useState(4); // Количество полюсов
    const [acStartingCurrentCoefficient, setACStartingCurrentCoefficient] = useState(5);
    const [acPower, setACPower] = useState('');
    const [acRequiredCurrent, setACRequiredCurrent] = useState('');
    const [acStartingCurrent, setACStartingCurrent] = useState('');
    const [acSpeed, setACSpeed] = useState(''); // Скорость оборотов для AC
    const [acTorque, setACTorque] = useState('');

    useEffect(() => {
        if (motorType === 'DC') {
            const P = calculateDCMotorPower(dcVoltage, dcCurrent);
            setDCPower(P.toFixed(2));
            const requiredI = calculateDCMotorCurrent(P, dcVoltage);
            setDCRequiredCurrent(requiredI.toFixed(2));
            const startingI = calculateStartingCurrentDC(dcCurrent * dcStartingCurrentCoefficient);
            setDCStartingCurrent(startingI.toFixed(2));
            const torque = calculateTorque(P, dcSpeed);
            setDCTorque(torque.toFixed(2));
        } else if (motorType === 'AC') {
            const P = calculateACMotorPower(acVoltage, acCurrent);
            setACPower(P.toFixed(2));
            const requiredI = calculateACMotorCurrent(P, acVoltage);
            setACRequiredCurrent(requiredI.toFixed(2));
            const startingI = calculateStartingCurrentAC(acCurrent * acStartingCurrentCoefficient);
            setACStartingCurrent(startingI.toFixed(2));
            const speed = calculateACMotorSpeed(acFrequency, acPoles);
            setACSpeed(speed.toFixed(2));
            const torque = calculateTorque(P, speed);
            setACTorque(torque.toFixed(2));
        }
    }, [motorType, dcVoltage, dcCurrent, dcSpeed, dcStartingCurrentCoefficient, acVoltage, acCurrent, acFrequency, acPoles, acStartingCurrentCoefficient]);

    return (
        <div>
            <h1>Расчет и подбор для электрических двигателей</h1>

            <div>
                <label>Выберите тип двигателя:</label>
                <select value={motorType} onChange={(e) => setMotorType(e.target.value)}>
                    <option value="DC">Двигатель постоянного тока (DC)</option>
                    <option value="AC">Двигатель переменного тока (AC)</option>
                </select>
            </div>

            {motorType === 'DC' && (
                <div>
                    <h2>Двигатель постоянного тока (DC)</h2>
                    <label>Напряжение (В):</label>
                    <input
                        type="number"
                        value={dcVoltage}
                        onChange={(e) => setDCVoltage(Number(e.target.value))}
                    />
                    <label>Ток (А):</label>
                    <input
                        type="number"
                        value={dcCurrent}
                        onChange={(e) => setDCCurrent(Number(e.target.value))}
                    />
                    <label>Скорость (об/мин):</label>
                    <input
                        type="number"
                        value={dcSpeed}
                        onChange={(e) => setDCSpeed(Number(e.target.value))}
                    />
                    <label>Коэффициент пускового тока:</label>
                    <input
                        type="number"
                        value={dcStartingCurrentCoefficient}
                        onChange={(e) => setDCStartingCurrentCoefficient(Number(e.target.value))}
                    />

                    <p>Мощность: {dcPower} Вт</p>
                    <p>Необходимый ток: {dcRequiredCurrent} А</p>
                    <p>Пусковой ток: {dcStartingCurrent} А</p>
                    <p>Крутящий момент: {dcTorque} Н·м</p>
                </div>
            )}

            {motorType === 'AC' && (
                <div>
                    <h2>Двигатель переменного тока (AC)</h2>
                    <label>Напряжение (В):</label>
                    <input
                        type="number"
                        value={acVoltage}
                        onChange={(e) => setACVoltage(Number(e.target.value))}
                    />
                    <label>Ток (А):</label>
                    <input
                        type="number"
                        value={acCurrent}
                        onChange={(e) => setACCurrent(Number(e.target.value))}
                    />
                    <label>Частота (Гц):</label>
                    <input
                        type="number"
                        value={acFrequency}
                        onChange={(e) => setACFrequency(Number(e.target.value))}
                    />
                    <label>Количество полюсов:</label>
                    <input
                        type="number"
                        value={acPoles}
                        onChange={(e) => setACPoles(Number(e.target.value))}
                    />
                    <label>Коэффициент пускового тока:</label>
                    <input
                        type="number"
                        value={acStartingCurrentCoefficient}
                        onChange={(e) => setACStartingCurrentCoefficient(Number(e.target.value))}
                    />

                    <p>Мощность: {acPower} Вт</p>
                    <p>Необходимый ток: {acRequiredCurrent} А</p>
                    <p>Пусковой ток: {acStartingCurrent} А</p>
                    <p>Скорость: {acSpeed} об/мин</p>
                    <p>Крутящий момент: {acTorque} Н·м</p>
                </div>
            )}
        </div>
    );
};

export default ElectricMotorCalculation;
