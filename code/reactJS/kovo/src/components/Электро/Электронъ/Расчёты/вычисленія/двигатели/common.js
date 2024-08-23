// commonCalculations.js

/**
 * Расчет крутящего момента двигателя
 * @param {number} power - Мощность в Ваттах
 * @param {number} speed - Скорость в об/мин
 * @returns {number} Крутящий момент в Н·м
 */
export const calculateTorque = (power, speed) => {
    if (speed <= 0) {
        throw new Error('Скорость должна быть больше нуля.');
    }
    return (power * 60) / (speed * 2 * Math.PI);
};
