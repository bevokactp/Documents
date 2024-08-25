// utils.js


// Формула для расчета импеданса
export const calculateImpedance = (resistance, inductiveReactance, capacitiveReactance) => {
    return Math.sqrt(resistance * resistance + (inductiveReactance - capacitiveReactance) * (inductiveReactance - capacitiveReactance));
};

/**
 * Функция для расчета потерь напряжения (V_drop) для постоянного тока.
 * @param {number} current - Ток в Амперах.
 * @param {number} resistance - Сопротивление в Ом.
 * @returns {number} - Потери напряжения в Вольтах.
 */
export const calculateVoltageDropDC = (current, resistance) => {
    return current * resistance;
};

/**
 * Функция для расчета потерь напряжения (V_drop) для переменного тока.
 * @param {number} current - Ток в Амперах.
 * @param {number} resistance - Сопротивление в Ом.
 * @param {number} inductiveReactance - Индуктивное сопротивление в Ом.
 * @param {number} capacitiveReactance - Ёмкостное сопротивление в Ом.
 * @returns {number} - Потери напряжения в Вольтах.
 */
export const calculateVoltageDropAC = (current, resistance, inductiveReactance, capacitiveReactance) => {
    // Полное сопротивление цепи для переменного тока
    const totalImpedance = Math.sqrt(resistance * resistance + (inductiveReactance - capacitiveReactance) * (inductiveReactance - capacitiveReactance));
    return current * totalImpedance;
};

/**
 * Функция для расчета индуктивного сопротивления (XL) в цепи переменного тока.
 * @param {number} frequency - Частота сигнала в Гц.
 * @param {number} inductance - Индуктивность в Гн.
 * @returns {number} - Индуктивное сопротивление в Ом.
 */
export const calculateInductiveReactance = (frequency, inductance) => {
    return 2 * Math.PI * frequency * inductance;
};

/**
 * Функция для расчета ёмкостного сопротивления (XC) в цепи переменного тока.
 * @param {number} frequency - Частота сигнала в Гц.
 * @param {number} capacitance - Ёмкость в Фарад.
 * @returns {number} - Ёмкостное сопротивление в Ом.
 */
export const calculateCapacitiveReactance = (frequency, capacitance) => {
    return 1 / (2 * Math.PI * frequency * capacitance);
};

/**
 * Функция для расчета потребления энергии в электрической цепи.
 * @param {number} power - Мощность в Ваттах.
 * @param {number} time - Время работы в часах.
 * @returns {number} - Потребление энергии в киловатт-часах (kWh).
 */
export const calculateEnergyConsumption = (power, time) => {
    // Потребление энергии = Мощность (Вт) * Время (часы) / 1000 (для перевода в кВтч)
    return (power * time) / 1000;
};

/**
 * Расчет энергоэффективности
 * @param {number} outputPower - Выходная мощность в Ваттах
 * @param {number} inputPower - Входная мощность в Ваттах
 * @returns {number} Энергоэффективность в процентах
 */
export const calculateEnergyEfficiency = (outputPower, inputPower) => {
    if (inputPower === 0) {
        return 0; // Чтобы избежать деления на ноль
    }
    return (outputPower / inputPower) * 100;
};

