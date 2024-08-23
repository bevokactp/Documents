// waveguides.js

const calculateWaveguideProperties = (
    type, dimensions, freqMin, freqMax, speed, attenuation, resFreq, reflection, polarization, gain, bandwidth, material
) => {
    let cutOffFrequency, waveguideLength, waveguideImpedance, efficiency, vswr;

    switch(type) {
        case 'rectangular':
            const { width, height } = dimensions;
            cutOffFrequency = speed / (2 * Math.sqrt(width**2 + height**2));
            waveguideLength = (resFreq * speed) / (2 * Math.sqrt(1 - (freqMin / cutOffFrequency)**2));
            waveguideImpedance = Math.sqrt((width * height) / (width + height));
            break;

        case 'circular':
            const { radius } = dimensions;
            cutOffFrequency = (speed / (2 * Math.PI * radius)) * (1 / Math.sqrt(1 - (Math.PI / (2 * radius))**2));
            waveguideLength = (resFreq * speed) / (2 * Math.sqrt(1 - (freqMin / cutOffFrequency)**2));
            waveguideImpedance = (2 * Math.PI * radius) / speed;
            break;

        case 'acoustic':
        case 'dielectric':
        case 'metallic':
        case 'radiowave':
        case 'beam':
        case 'optical':
            // Примерные расчеты для других типов
            cutOffFrequency = 0; // placeholder
            waveguideLength = 0; // placeholder
            waveguideImpedance = 0; // placeholder
            break;

        default:
            throw new Error("Unknown waveguide type");
    }

    // Эффективность и КСВ
    efficiency = Math.exp(-attenuation * waveguideLength); // пример расчета эффективности
    vswr = (1 + reflection) / (1 - reflection);

    // Пример расчета для поляризации и коэффициента усиления
    const polarizationText = polarization || 'Не указано';
    const gainText = gain ? `${gain.toFixed(2)} dB` : 'Не указано';
    const bandwidthText = bandwidth ? `${bandwidth.toFixed(2)} ГГц` : 'Не указано';
    const materialText = material || 'Не указано';

    return {
        wavelengthRange: `${(speed / freqMax).toFixed(2)} - ${(speed / freqMin).toFixed(2)} м`,
        cutOffFrequency: cutOffFrequency.toFixed(2),
        waveguideLength: waveguideLength.toFixed(2),
        waveguideImpedance: waveguideImpedance.toFixed(2),
        efficiency: efficiency.toFixed(2),
        vswr: vswr.toFixed(2),
        polarization: polarizationText,
        gain: gainText,
        bandwidth: bandwidthText,
        material: materialText
    };
};

export default calculateWaveguideProperties;
