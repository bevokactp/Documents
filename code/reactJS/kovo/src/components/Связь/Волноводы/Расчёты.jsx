// WaveguideCalculator.jsx
import React, { useState } from 'react';
import calculateWaveguideProperties from './волноводы';

const WaveguideCalculator = () => {
    const [frequencyRange, setFrequencyRange] = useState({ min: '1', max: '10' });
    const [impedance, setImpedance] = useState('50');
    const [waveguideType, setWaveguideType] = useState('rectangular');
    const [waveguideDimensions, setWaveguideDimensions] = useState({ width: '3', height: '10', radius: '3' });
    const [propagationSpeed, setPropagationSpeed] = useState('38');
    const [attenuationCoefficient, setAttenuationCoefficient] = useState('0.1');
    const [resonantFrequency, setResonantFrequency] = useState('2.4');
    const [transmissionCoefficient, setTransmissionCoefficient] = useState('1');
    const [reflectionCoefficient, setReflectionCoefficient] = useState('0');
    const [polarization, setPolarization] = useState('vertical');
    const [gainCoefficient, setGainCoefficient] = useState('10');
    const [bandwidth, setBandwidth] = useState('1');
    const [material, setMaterial] = useState('metal');
    const [results, setResults] = useState({
        wavelengthRange: '0 - 0 м',
        cutOffFrequency: '0',
        waveguideLength: '0',
        waveguideImpedance: '0',
        efficiency: '0',
        vswr: '1',
        polarization: 'Не указано',
        gain: '0 dB',
        bandwidth: '0 ГГц',
        material: 'Не указано'
    });

    const calculate = () => {
        const freqMin = parseFloat(frequencyRange.min);
        const freqMax = parseFloat(frequencyRange.max);
        const speed = parseFloat(propagationSpeed);
        const attenuation = parseFloat(attenuationCoefficient);
        const resFreq = parseFloat(resonantFrequency);
        const reflection = parseFloat(reflectionCoefficient);
        const gain = parseFloat(gainCoefficient);
        const bandwidthValue = parseFloat(bandwidth);

        const dimensions = {
            width: parseFloat(waveguideDimensions.width),
            height: parseFloat(waveguideDimensions.height),
            radius: parseFloat(waveguideDimensions.radius),
        };

        const properties = calculateWaveguideProperties(
            waveguideType,
            dimensions,
            freqMin,
            freqMax,
            speed,
            attenuation,
            resFreq,
            reflection,
            polarization,
            gain,
            bandwidthValue,
            material
        );

        setResults({
            wavelengthRange: properties.wavelengthRange,
            cutOffFrequency: properties.cutOffFrequency,
            waveguideLength: properties.waveguideLength,
            waveguideImpedance: properties.waveguideImpedance,
            efficiency: properties.efficiency,
            vswr: properties.vswr,
            polarization: properties.polarization,
            gain: properties.gain,
            bandwidth: properties.bandwidth,
            material: properties.material
        });
    };

    return (
        <div className="calculator">
            <button onClick={calculate}>Рассчитать</button>
            <div>
                <label>Частотный диапазон (ГГц): </label>
                <input
                    type="number"
                    placeholder="Минимальная частота"
                    value={frequencyRange.min}
                    onChange={(e) => setFrequencyRange({ ...frequencyRange, min: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Максимальная частота"
                    value={frequencyRange.max}
                    onChange={(e) => setFrequencyRange({ ...frequencyRange, max: e.target.value })}
                />
            </div>
            <div>
                <label>Импеданс (Ом): </label>
                <input
                    type="number"
                    value={impedance}
                    onChange={(e) => setImpedance(e.target.value)}
                />
            </div>
            <div>
                <label>Тип волновода: </label>
                <select
                    value={waveguideType}
                    onChange={(e) => setWaveguideType(e.target.value)}
                >
                    <option value="rectangular">Прямоугольный</option>
                    <option value="circular">Круглый</option>
                    <option value="acoustic">Акустический</option>
                    <option value="dielectric">Диэлектрический</option>
                    <option value="metallic">Металлический</option>
                    <option value="radiowave">Радиоволновой</option>
                    <option value="beam">Лучевой</option>
                    <option value="optical">Световод</option>
                </select>
            </div>
            {waveguideType === 'rectangular' && (
                <>
                    <div>
                        <label>Ширина волновода (м): </label>
                        <input
                            type="number"
                            value={waveguideDimensions.width}
                            onChange={(e) => setWaveguideDimensions({ ...waveguideDimensions, width: e.target.value })}
                        />
                    </div>
                    <div>
                        <label>Высота волновода (м): </label>
                        <input
                            type="number"
                            value={waveguideDimensions.height}
                            onChange={(e) => setWaveguideDimensions({ ...waveguideDimensions, height: e.target.value })}
                        />
                    </div>
                </>
            )}
            {waveguideType === 'circular' && (
                <div>
                    <label>Радиус волновода (м): </label>
                    <input
                        type="number"
                        value={waveguideDimensions.radius}
                        onChange={(e) => setWaveguideDimensions({ ...waveguideDimensions, radius: e.target.value })}
                    />
                </div>
            )}
            <div>
                <label>Скорость распространения волны (м/с): </label>
                <input
                    type="number"
                    value={propagationSpeed}
                    onChange={(e) => setPropagationSpeed(e.target.value)}
                />
            </div>
            <div>
                <label>Коэффициент затухания: </label>
                <input
                    type="number"
                    value={attenuationCoefficient}
                    onChange={(e) => setAttenuationCoefficient(e.target.value)}
                />
            </div>
            <div>
                <label>Резонансная частота (ГГц): </label>
                <input
                    type="number"
                    value={resonantFrequency}
                    onChange={(e) => setResonantFrequency(e.target.value)}
                />
            </div>
            <div>
                <label>Коэффициент передачи: </label>
                <input
                    type="number"
                    value={transmissionCoefficient}
                    onChange={(e) => setTransmissionCoefficient(e.target.value)}
                />
            </div>
            <div>
                <label>Коэффициент отражения: </label>
                <input
                    type="number"
                    value={reflectionCoefficient}
                    onChange={(e) => setReflectionCoefficient(e.target.value)}
                />
            </div>
            <div>
                <label>Коэффициент усиления: </label>
                <input
                    type="number"
                    value={gainCoefficient}
                    onChange={(e) => setGainCoefficient(e.target.value)}
                />
            </div>
            <div>
                <label>Ширина полосы пропускания (ГГц): </label>
                <input
                    type="number"
                    value={bandwidth}
                    onChange={(e) => setBandwidth(e.target.value)}
                />
            </div>
            <div>

				<label>
				Поляризация:
                    <select
                        value={polarization}
                        onChange={(e) => setPolarization(e.target.value)}
                    >
                        <option value="vertical">Вертикальная</option>
                        <option value="horizontal">горизонтальная</option>
                        <option value="circular">круговая</option>
                    </select>
                </label>
            </div>
            <div>

                <label>
				Материал:
                    <select
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                    >
                        <option value="metal">Metal</option>
                        <option value="dielectric">Dielectric</option>
                        <option value="ceramic">Ceramic</option>
                        <option value="composite">Composite</option>
                    </select>
                </label>
            </div>

            <div className="results">
                <p>Диапазон длины волны: {results.wavelengthRange}</p>
                <p>Частота среза: {results.cutOffFrequency} ГГц</p>
                <p>Длина волновода: {results.waveguideLength} м</p>
                <p>Коэффициент волнового сопротивления: {results.waveguideImpedance}</p>
                <p>Эффективность: {results.efficiency}</p>
                <p>КСВ: {results.vswr}</p>
                <p>Поляризация: {results.polarization}</p>
                <p>Коэффициент усиления: {results.gain}</p>
                <p>Ширина полосы пропускания: {results.bandwidth}</p>
                <p>Материал: {results.material}</p>
            </div>
        </div>
    );
};

export default WaveguideCalculator;
