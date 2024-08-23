import React, { useState, useEffect } from 'react';

import { calculateSimpleFigurativeNumbers, calculateCenteredFigurativeNumbers } from './calculateNumbers';
import DrawSimpleFigurativeNumbers from './drawNumbers';
// import './numbers.css'

// Трёхмерные
// 	Пирамидальные
// 	    Тетраэдральные Квадратные пирамидальные
// 	Многогранные
// 	    Кубические Октаэдральные Додекаэдральные Икосаэдральные Звёздчатые октаэдральные
// Четырёхмерные
// 	Многогранные
// 	    Пентатопные Биквадратные

const FigurativeNumbers = () => {
	const [count, setCount] = useState(5);
	const [results, setResults] = useState({});

	useEffect(() => {
		setResults({
			triangular: calculateSimpleFigurativeNumbers[3](count),
			square: calculateSimpleFigurativeNumbers[4](count),
			pentagonal: calculateSimpleFigurativeNumbers[5](count),
			hexagonal: calculateSimpleFigurativeNumbers[6](count),
			heptagonal: calculateSimpleFigurativeNumbers[7](count),
			octagonal: calculateSimpleFigurativeNumbers[8](count),
			dodecagonal: calculateSimpleFigurativeNumbers[12](count),
			centeredTriangular: calculateCenteredFigurativeNumbers[3](count),
			centeredSquare: calculateCenteredFigurativeNumbers[4](count),
			centeredPentagonal: calculateCenteredFigurativeNumbers[5](count),
			centeredHexagonal: calculateCenteredFigurativeNumbers[6](count),
			centeredHeptagonal: calculateCenteredFigurativeNumbers[7](count),
			centeredOctagonal: calculateCenteredFigurativeNumbers[8](count),
			centeredNonagonal: calculateCenteredFigurativeNumbers[9](count),
			centeredDecagonal: calculateCenteredFigurativeNumbers[10](count),
		});
	}, [count]);

	const handleInputChange = (e) => {
		const value = parseInt(e.target.value, 10);
		if (!isNaN(value) && value > 0) {
			setCount(value);
		}
	};


	return (
		<div>
			<div>
				<h1>Плоские фигуративные числа</h1>
				<input type="number" value={count} onChange={handleInputChange} min="1" />
				<table>
					<thead>
						<tr>
							<th>3</th>
							<th>4</th>
							<th>5</th>
							<th>6</th>
							<th>7</th>
							<th>8</th>
							<th>9</th>
							<th>10</th>
							<th>11</th>
							<th>12</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th colSpan="10">Класические</th>
						</tr>
						<tr>
							<td>{results.triangular?.join(', ')}</td>
							<td>{results.square?.join(', ')}</td>
							<td>{results.pentagonal?.join(', ')}</td>
							<td>{results.hexagonal?.join(', ')}</td>
							<td>{results.heptagonal?.join(', ')}</td>
							<td>{results.octagonal?.join(', ')}</td>
							<td>???</td>
							<td>???</td>
							<td>???</td>
							<td>{results.dodecagonal?.join(', ')}</td>
						</tr>

						<tr>
							<td>n * (n + 1) / 2</td>
							<td>n²</td>
							<td>n * (3n - 1) / 2</td>
							<td>n * (2n - 1)</td>
							<td>n * (5n - 3) / 2</td>
							<td>n * (3n - 2)</td>
							<td>???</td>
							<td>???</td>
							<td>???</td>
							<td>n * (5n - 4)</td>
						</tr>
						<tr>
							<td> <DrawSimpleFigurativeNumbers type={3} number={results.triangular?.[results.triangular.length - 1] || 0} /> </td>
							<td> <DrawSimpleFigurativeNumbers type={4} number={results.square?.[results.square.length - 1] || 0} /> </td>
							<td> <DrawSimpleFigurativeNumbers type={5} number={results.pentagonal?.[results.pentagonal.length - 1] || 0} /> </td>
							<td> <DrawSimpleFigurativeNumbers type={6} number={results.hexagonal?.[results.hexagonal.length - 1] || 0} /> </td>
							<td>???</td>
							<td>???</td>
							<td>???</td>
							<td>???</td>
							<td>???</td>
							<td>???</td>
						</tr>
						<tr>
							<th colSpan="10">Центрированые</th>
						</tr>
						<tr>
							<td>{results.centeredTriangular?.join(', ')}</td>
							<td>{results.centeredSquare?.join(', ')}</td>
							<td>{results.centeredPentagonal?.join(', ')}</td>
							<td>{results.centeredHexagonal?.join(', ')}</td>
							<td>{results.centeredHeptagonal?.join(', ')}</td>
							<td>{results.centeredOctagonal?.join(', ')}</td>
							<td>{results.centeredNonagonal?.join(', ')}</td>
							<td>{results.centeredDecagonal?.join(', ')}</td>
							<td>???</td>
							<td>???</td>
						</tr>
						<tr>
							<td>3n(n - 1) / 2 + 1</td>
							<td>n² + n²</td>
							<td>(5n² - 5n + 2) / 2</td>
							<td>3n² - 3n + 1</td>
							<td>(7n² - 7n + 2) / 2</td>
							<td>4n² - 4n + 1</td>
							<td>(9n² - 9n + 2) / 2</td>
							<td>5n² - 5n + 1</td>
							<td>???</td>
							<td>???</td>
						</tr>
						<tr>
							<td>???</td>
							<td>???</td>
							<td>???</td>
							<td>???</td>
							<td>???</td>
							<td>???</td>
							<td>???</td>
							<td>???</td>
							<td>???</td>
							<td>???</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);

};

export default FigurativeNumbers;
