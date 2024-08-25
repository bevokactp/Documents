import React, { useState } from 'react';

const Calculations = () => {
    const [voltage, setVoltage] = useState(12);
    const [current, setCurrent] = useState(2);
    const [cosPhi, setCosPhi] = useState('0.95'); // Значение по умолчанию для cos(φ)
    const [power, setPower] = useState('');
    const [mode, setMode] = useState('220'); // Режим работы: 220В, 380В или DC (постоянный ток)

    const calculatePower = () => {
        let calculatedPower = 0;

        if (mode === '220') {
            // Режим 220 В (однофазный)
            // Формула: P = U * I * cos(φ)
            calculatedPower = voltage * current * cosPhi;
        } else if (mode === '380') {
            // Режим 380 В (трехфазный)
            // Формула: P = √3 * U * I * cos(φ)
            calculatedPower = Math.sqrt(3) * voltage * current * cosPhi;
        } else if (mode === 'DC') {
            // Режим постоянного тока
            // Формула: P = U * I
            calculatedPower = voltage * current;
        }

        setPower(calculatedPower.toFixed(2));
    };

    return (
        <div>
            <div>
                <h3>Выбор режима работы</h3>
                <label>
                    <input
                        type="radio"
                        value="220"
                        checked={mode === '220'}
                        onChange={() => setMode('220')}
                    />
                    220 В (однофазный AC)
                </label>
                <label>
                    <input
                        type="radio"
                        value="380"
                        checked={mode === '380'}
                        onChange={() => setMode('380')}
                    />
                    380 В (трехфазный AC)
                </label>
                <label>
                    <input
                        type="radio"
                        value="DC"
                        checked={mode === 'DC'}
                        onChange={() => setMode('DC')}
                    />
                    Постоянный ток DC
                </label>
            </div>

            <div>
                <h3>Расчет мощности</h3>
				<label>Напряжение (В):</label>
				<input
					type="number"
					value={voltage}
					onChange={(e) => setVoltage(parseFloat(e.target.value))}
				/>
                <label>Ток (A):</label>
                <input
                    type="number"
                    value={current}
                    onChange={(e) => setCurrent(parseFloat(e.target.value))}
                />
                {mode !== 'DC' && (
                    <>
                        <label>Коэффициент мощности cos(φ):</label>
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            max="1"
                            value={cosPhi}
                            onChange={(e) => setCosPhi(parseFloat(e.target.value))}
                        />
                    </>
                )}
                <button onClick={calculatePower}>Рассчитать мощность</button>
                <p>Мощность: {power} Вт</p>

                <h3>Формула расчета:</h3>
                {mode === '220' && (
                    <p>
                        Формула: <b>P = U * I * cos(φ)</b><br />
                        Где:<br />
                        <b>P</b> — Мощность (Вт)<br />
                        <b>U</b> — Напряжение (В)<br />
                        <b>I</b> — Ток (A)<br />
                        <b>cos(φ)</b> — Коэффициент мощности
                    </p>
                )}
                {mode === '380' && (
                    <p>
                        Формула: <b>P = √3 * U * I * cos(φ)</b><br />
                        Где:<br />
                        <b>P</b> — Мощность (Вт)<br />
                        <b>U</b> — Напряжение (В)<br />
                        <b>I</b> — Ток (A)<br />
                        <b>cos(φ)</b> — Коэффициент мощности<br />
                        <b>√3</b> — Корень квадратный из 3 (приблизительно 1.732)
                    </p>
                )}
                {mode === 'DC' && (
                    <p>
                        Формула: <b>P = U * I</b><br />
                        Где:<br />
                        <b>P</b> — Мощность (Вт)<br />
                        <b>U</b> — Напряжение (В)<br />
                        <b>I</b> — Ток (A)
                    </p>
                )}
            </div>
        </div>
    );
};

export default Calculations;
