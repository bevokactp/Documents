// Преобразование одномерного массива в квадратную матрицу
function arrayToSquare(arr) {
    const size = Math.sqrt(arr.length);
    const matrix = [];

    for (let i = 0; i < size; i++) {
        matrix.push(arr.slice(i * size, i * size + size));
    }

    return matrix;
}

// Функция для реверсирования главной диагонали
function reverseMainDiagonal(matrix) {
    const size = matrix.length;

    for (let i = 0; i < size / 2; i++) {
        [matrix[i][i], matrix[size - 1 - i][size - 1 - i]] = [matrix[size - 1 - i][size - 1 - i], matrix[i][i]];
    }

    return matrix;
}

// Функция для реверсирования вспомогательной диагонали
function reverseAntiDiagonal(matrix) {
    const size = matrix.length;

    for (let i = 0; i < size / 2; i++) {
        [matrix[i][size - 1 - i], matrix[size - 1 - i][i]] = [matrix[size - 1 - i][i], matrix[i][size - 1 - i]];
    }

    return matrix;
}



// Функция для вычисления отклонения от магического квадрата
function calculateDeviation(square) {
    const size = square.length;
    const magicConstant = (size * (size * size + 1)) / 2;
    let deviation = 0;

    // Вычисление отклонения для строк и столбцов
    for (let i = 0; i < size; i++) {
        const rowSum = square[i].reduce((acc, val) => acc + val, 0);
        const colSum = square.reduce((acc, row) => acc + row[i], 0);

        deviation += Math.abs(magicConstant - rowSum);
        deviation += Math.abs(magicConstant - colSum);
    }

    // Вычисление отклонения для диагоналей
    const mainDiagonalSum = square.reduce((acc, row, index) => acc + row[index], 0);
    const antiDiagonalSum = square.reduce((acc, row, index) => acc + row[size - 1 - index], 0);

    deviation += Math.abs(magicConstant - mainDiagonalSum);
    deviation += Math.abs(magicConstant - antiDiagonalSum);

    return deviation;
}

// Максимально возможное отклонение для текущего размера квадрата
function calculateMaxDeviation(size) {
    const magicConstant = (size * (size * size + 1)) / 2;
    const maxSum = size * (size * size);

    // Пределы отклонения
    const rowColDiagonalDeviation = (maxSum - magicConstant) * (size * 2 + 2);
    return rowColDiagonalDeviation;
}

// Основная функция для вычисления магического квадрата и его отклонения
export function calculateMagicSquareAndDetails(numbers) {
    // Сортируем числа
    numbers.sort((a, b) => a - b);

    // Преобразуем в квадратную матрицу
    let square = arrayToSquare(numbers);

    // Реверсируем главную и вспомогательную диагонали
    square = reverseMainDiagonal(square);
    square = reverseAntiDiagonal(square);

    // Вычисляем магическую константу
    const size = square.length;
    const magicConstant = (size * (size * size + 1)) / 2;

    // Вычисляем отклонение
    const deviation = calculateDeviation(square);

    // Вычисляем максимально возможное отклонение
    const maxDeviation = calculateMaxDeviation(size);

    // Рассчитываем процентное отклонение и нормализованное отклонение
    const percentDeviation = Math.min((deviation / maxDeviation) * 100, 100); // Ограничиваем 100%

    return { square, percentDeviation, magicConstant };
}
