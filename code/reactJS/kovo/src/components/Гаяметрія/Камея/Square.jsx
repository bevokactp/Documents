import React from "react";
import { calculateMagicSquareAndDetails } from "./square";

const Square = ({ numbers }) => {
    const size = Math.sqrt(numbers.length);
    if (numbers.length === 0 || size % 1 !== 0) {
        return <p>Invalid numbers</p>;
    }

    let square, percentDeviation, magicConstant;

    if ([2, 3, 4, 5].includes(size)) {
        ({ square, percentDeviation, magicConstant } = calculateMagicSquareAndDetails(numbers));
    } else {
        return <p>Supported sizes: 4, 9, 16, 25!</p>;
    }

    const cellSize = 50; // Размер ячейки в пикселях
    const offset = 10; // Отступ для стилизации

    // Функции для вычисления сумм
    const getRowSums = () => square.map((row) => row.reduce((acc, val) => acc + val, 0));
    const getColSums = () => square[0].map((_, colIndex) => square.reduce((acc, row) => acc + row[colIndex], 0));
    const getMainDiagonalSum = () => square.reduce((acc, row, index) => acc + row[index], 0);
    const getAntiDiagonalSum = () => square.reduce((acc, row, index) => acc + row[size - 1 - index], 0);

    const rowSums = getRowSums();
    const colSums = getColSums();
    const mainDiagonalSum = getMainDiagonalSum();
    const antiDiagonalSum = getAntiDiagonalSum();

    const svgSize = (cellSize + offset) * (size + 2) * 1.5;

    const antiDiagonalX = size * (cellSize + offset) + (cellSize + offset) / 2;
    const antiDiagonalY = -cellSize / 1.5;
    const mainDiagonalX = antiDiagonalX;
    const mainDiagonalY = antiDiagonalX;

    return (
        <div style={{ textAlign: "center", marginTop: "20px", position: "relative" }}>
            <p>Magic Constant: {magicConstant}</p>
            <p> {numbers.join(", ")} = {percentDeviation.toFixed(2)}% </p>
            <svg width={svgSize} height={svgSize} style={{ borderRadius: "50%", border: "3px solid indigo", padding: "10px", display: "inline-block", }} >
                {/* Рисуем ячейки */}
                {square.map((row, rowIndex) =>
                    row.map((num, colIndex) => {
                        const x = colIndex * (cellSize + offset) + cellSize / 2;
                        const y = rowIndex * (cellSize + offset) + cellSize / 2;
                        return (
                            <g key={`${rowIndex}-${colIndex}`}>
                                <circle
                                    cx={x + svgSize / 2 - (size * (cellSize + offset)) / 2}
                                    cy={y + svgSize / 2 - (size * (cellSize + offset)) / 2}
                                    r={cellSize / 2}
                                    stroke="black"
                                    strokeWidth="2"
                                    fill="blue"
                                />
                                <text
                                    x={x + svgSize / 2 - (size * (cellSize + offset)) / 2}
                                    y={y + svgSize / 2 - (size * (cellSize + offset)) / 2}
                                    fontSize="20"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill="white"
                                >
                                    {num}
                                </text>
                            </g>
                        );
                    })
                )}
                {/* Рисуем суммы по строкам */}
                {rowSums.map((sum, rowIndex) => {
                    const x = size * (cellSize + offset) + (cellSize + offset) / 2;
                    const y = rowIndex * (cellSize + offset) + cellSize / 2;
                    return (
                        <g key={`row-sum-${rowIndex}`}>
                            <circle
                                cx={x + svgSize / 2 - (size * (cellSize + offset)) / 2}
                                cy={y + svgSize / 2 - (size * (cellSize + offset)) / 2}
                                r={cellSize / 2}
                                stroke="black"
                                strokeWidth="2"
                                fill="purple"
                            />
                            <text
                                x={x + svgSize / 2 - (size * (cellSize + offset)) / 2}
                                y={y + svgSize / 2 - (size * (cellSize + offset)) / 2}
                                fontSize="20"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="white"
                            >
                                {sum}
                            </text>
                        </g>
                    );
                })}
                {/* Рисуем суммы по столбцам */}
                {colSums.map((sum, colIndex) => {
                    const x = colIndex * (cellSize + offset) + cellSize / 2;
                    const y = size * (cellSize + offset) + (cellSize + offset) / 2;
                    return (
                        <g key={`col-sum-${colIndex}`}>
                            <circle
                                cx={x + svgSize / 2 - (size * (cellSize + offset)) / 2}
                                cy={y + svgSize / 2 - (size * (cellSize + offset)) / 2}
                                r={cellSize / 2}
                                stroke="black"
                                strokeWidth="2"
                                fill="indigo"
                            />
                            <text
                                x={x + svgSize / 2 - (size * (cellSize + offset)) / 2}
                                y={y + svgSize / 2 - (size * (cellSize + offset)) / 2}
                                fontSize="20"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="white"
                            >
                                {sum}
                            </text>
                        </g>
                    );
                })}
                {/* Рисуем суммы диагоналей */}
                <g>
                    <circle
                        cx={mainDiagonalX + svgSize / 2 - (size * (cellSize + offset)) / 2}
                        cy={mainDiagonalY + svgSize / 2 - (size * (cellSize + offset)) / 2}
                        r={cellSize / 2}
                        stroke="black"
                        strokeWidth="2"
                        fill="blueviolet"
                    />
                    <text
                        x={mainDiagonalX + svgSize / 2 - (size * (cellSize + offset)) / 2}
                        y={mainDiagonalY + svgSize / 2 - (size * (cellSize + offset)) / 2}
                        fontSize="20"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                    >
                        {mainDiagonalSum}
                    </text>
                </g>
                <g>
                    <circle
                        cx={antiDiagonalX + svgSize / 2 - (size * (cellSize + offset)) / 2}
                        cy={antiDiagonalY + svgSize / 2 - (size * (cellSize + offset)) / 2}
                        r={cellSize / 2}
                        stroke="black"
                        strokeWidth="2"
                        fill="blueviolet"
                    />
                    <text
                        x={antiDiagonalX + svgSize / 2 - (size * (cellSize + offset)) / 2}
                        y={antiDiagonalY + svgSize / 2 - (size * (cellSize + offset)) / 2}
                        fontSize="20"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                    >
                        {antiDiagonalSum}
                    </text>
                </g>
            </svg>
        </div>
    );
};

export default Square;
