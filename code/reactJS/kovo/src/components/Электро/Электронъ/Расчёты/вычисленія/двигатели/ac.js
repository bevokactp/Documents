// acMotors.js

/**
 * Расчет мощности двигателя переменного тока
 * @param {number} voltage - Напряжение в Вольтах
 * @param {number} current - Ток в Амперах
 * @returns {number} Мощность в Ваттах
 */
export const calculateACMotorPower = (voltage, current) => {
    if (voltage < 0 || current < 0) {
        throw new Error('Напряжение и ток должны быть положительными числами.');
    }
    return voltage * current;
};

/**
 * Расчет необходимого тока для двигателя переменного тока
 * @param {number} power - Мощность в Ваттах
 * @param {number} voltage - Напряжение в Вольтах
 * @returns {number} Необходимый ток в Амперах
 */
export const calculateACMotorCurrent = (power, voltage) => {
    if (voltage <= 0) {
        throw new Error('Напряжение должно быть больше нуля.');
    }
    return power / voltage;
};

/**
 * Расчет пускового тока для двигателя переменного тока
 * @param {number} current - Рабочий ток в Амперах
 * @param {number} startFactor - Коэффициент пускового тока
 * @returns {number} Пусковой ток в Амперах
 */
export const calculateStartingCurrentAC = (current, startFactor = 6) => {
    if (current < 0 || startFactor <= 0) {
        throw new Error('Ток и коэффициент пускового тока должны быть положительными числами.');
    }
    return current * startFactor;
};

/**
 * Расчет скорости вращения двигателя переменного тока
 * @param {number} frequency - Частота в Гц
 * @param {number} poles - Количество полюсов
 * @returns {number} Скорость в об/мин
 */
export const calculateACMotorSpeed = (frequency, poles) => {
    if (frequency <= 0 || poles <= 0) {
        throw new Error('Частота и количество полюсов должны быть положительными числами.');
    }
    return (120 * frequency) / poles;
};
