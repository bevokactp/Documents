
export class Fraction {
    constructor(numerator, denominator, description) {
        this.numerator = numerator;
        this.denominator = denominator;
        this.description = description;
    }

    // Преобразует число в 12-ричную систему
    static decimalToBase12(num) {
        const digits = '0123456789AB'; // Символы для 12-ричной системы
        let result = '';

        // Преобразуем целую часть
        let integralPart = Math.floor(num);
        let fractionalPart = num - integralPart;

        if (integralPart === 0) {
            result = '0';
        } else {
            while (integralPart > 0) {
                result = digits[integralPart % 12] + result;
                integralPart = Math.floor(integralPart / 12);
            }
        }

        // Преобразуем дробную часть
        if (fractionalPart > 0) {
            result += '.';
            while (fractionalPart > 0 && result.length <= 15) { // Ограничиваем длину дробной части
                fractionalPart *= 12;
                let digit = Math.floor(fractionalPart);
                result += digits[digit];
                fractionalPart -= digit;
            }
        }

        return result;
    }

    // Возвращает дробь в формате "x/A" с основанием 12
    asFraction12WithBase() {
        if (this.denominator === 0) {
            throw new Error('Denominator cannot be zero.');
        }

        const base12Denominator = 'A'; // Это 12 в 12-ричной системе
        const base12Numerator = Math.floor((this.numerator * 12) / this.denominator);

        return `${Fraction.decimalToBase12(base12Numerator)}/${base12Denominator}`;
    }

    // Возвращает дробь в формате "x/y"
    asFraction10() {
        return `${this.numerator}/${this.denominator}`;
    }

    // Возвращает дробь в формате "x/10"
    asFraction10WithBase() {
        const value = (this.numerator * 10) / this.denominator;
        return `${Math.round(value)}/10`;
    }

    // Возвращает дробь в десятичном формате с указанной точностью
    toBase10Decimal(precision = 5) {
        return (this.numerator / this.denominator).toFixed(precision);
    }

    // Возвращает десятичное значение в 12-ричной системе
    toBase12Decimal() {
        const decimalValue = this.numerator / this.denominator;
        return Fraction.decimalToBase12(decimalValue);
    }
}
