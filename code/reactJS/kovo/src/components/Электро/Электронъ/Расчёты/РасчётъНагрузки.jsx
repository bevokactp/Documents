import React, { useState } from 'react';

const LoadCalculation = () => {
    const [voltage, setVoltage] = useState('');
    const [power, setPower] = useState(''); // Мощность в Ваттах
    const [powerFactor, setPowerFactor] = useState('0.95'); // Значение по умолчанию для cos(φ)
    const [load, setLoad] = useState('');
    const [mode, setMode] = useState('220'); // Режим работы: 220В, 380В или DC (постоянный ток)

    const calculateLoad = () => {
        let calculatedLoad = 0;

        // Преобразуем значения в числовые, если они не пустые
        const voltageValue = parseFloat(voltage);
        const powerValue = parseFloat(power);
        const powerFactorValue = parseFloat(powerFactor);

        if (mode === '220') {
            // Режим 220 В (однофазный)
            // Формула: I = P / (U * cos(φ))
            calculatedLoad = powerValue / (voltageValue * powerFactorValue);
        } else if (mode === '380') {
            // Режим 380 В (трехфазный)
            // Формула: I = P / (√3 * U * cos(φ))
            calculatedLoad = powerValue / (Math.sqrt(3) * voltageValue * powerFactorValue);
        } else if (mode === 'DC') {
            // Режим постоянного тока
            // Формула: I = P / U
            calculatedLoad = powerValue / voltageValue;
        }

        setLoad(calculatedLoad.toFixed(2));
    };

    return (
        <div>
            <h3>Расчет нагрузки</h3>

            <div>
                <h3>Выбор режима работы</h3>
                <label>
                    <input
                        type="radio"
                        value="220"
                        checked={mode === '220'}
                        onChange={() => setMode('220')}
                    />
                    220 В (однофазный)
                </label>
                <label>
                    <input
                        type="radio"
                        value="380"
                        checked={mode === '380'}
                        onChange={() => setMode('380')}
                    />
                    380 В (трехфазный)
                </label>
                <label>
                    <input
                        type="radio"
                        value="DC"
                        checked={mode === 'DC'}
                        onChange={() => setMode('DC')}
                    />
                    Постоянный ток
                </label>
            </div>

            <div>
                <h3>Расчет нагрузки</h3>
                <label>Мощность (Вт):</label>
                <input
                    type="number"
                    value={power}
                    onChange={(e) => setPower(e.target.value)}
                />
                <label>Напряжение (В):</label>
                <input
                    type="number"
                    value={voltage}
                    onChange={(e) => setVoltage(e.target.value)}
                />
                {mode !== 'DC' && (
                    <>
                        <label>Коэффициент мощности cos(φ):</label>
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            max="1"
                            value={powerFactor}
                            onChange={(e) => setPowerFactor(e.target.value)}
                        />
                    </>
                )}
                <button onClick={calculateLoad}>Рассчитать нагрузку</button>
                <p>Нагрузка: {load} A</p>

                <h3>Формула расчета:</h3>
                {mode === '220' && (
                    <p>
                        Формула: <b>I = P / (U * cos(φ))</b><br />
                        Где:<br />
                        <b>I</b> — Нагрузка (A)<br />
                        <b>P</b> — Мощность (Вт)<br />
                        <b>U</b> — Напряжение (В)<br />
                        <b>cos(φ)</b> — Коэффициент мощности
                    </p>
                )}
                {mode === '380' && (
                    <p>
                        Формула: <b>I = P / (√3 * U * cos(φ))</b><br />
                        Где:<br />
                        <b>I</b> — Нагрузка (A)<br />
                        <b>P</b> — Мощность (Вт)<br />
                        <b>U</b> — Напряжение (В)<br />
                        <b>cos(φ)</b> — Коэффициент мощности<br />
                        <b>√3</b> — Корень квадратный из 3 (приблизительно 1.732)
                    </p>
                )}
                {mode === 'DC' && (
                    <p>
                        Формула: <b>I = P / U</b><br />
                        Где:<br />
                        <b>I</b> — Нагрузка (A)<br />
                        <b>P</b> — Мощность (Вт)<br />
                        <b>U</b> — Напряжение (В)
                    </p>
                )}
            </div>
        </div>
    );
};

export default LoadCalculation;
