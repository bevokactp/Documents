import React from 'react';

const Circle = ({ numbers }) => {
	const radius = 50; // радиус основного круга
	const sizeImage = 300;
	const centerX = sizeImage / 2; // центр по оси X
	const centerY = sizeImage / 2; // центр по оси Y
	const smallRadius = 20; // радиус маленького круга вокруг каждой цифры
	const secondRadius = radius * 2; // радиус второго круга
	const angleStep = (2 * Math.PI) / (numbers.length - 1);

	const getCoordinates = (index, radius) => {
		const angle = angleStep * index;
		return {
			x: centerX + radius * Math.cos(angle),
			y: centerY + radius * Math.sin(angle),
		};
	};

	// Функция для вычисления среднего значения второго круга
	const calculateAverageSecondCircle = (centerNumber) => {
		return numbers.map(num => num + centerNumber).reduce((acc, val) => acc + val, 0) / numbers.length;
	};

	// Найти лучшее число
	const findBestCenterNumber = () => {
		const overallAverage = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
		let bestNumber = numbers[0];
		let smallestDifference = Infinity;

		for (let i = 0; i < numbers.length; i++) {
			const centerNumber = numbers[i];
			const averageSecondCircle = calculateAverageSecondCircle(centerNumber);
			const difference = Math.abs(averageSecondCircle - overallAverage);

			if (difference < smallestDifference) {
				smallestDifference = difference;
				bestNumber = centerNumber;
			}
		}

		return bestNumber;
	};

	const centerNumber = findBestCenterNumber();
	const averageSecondCircle = calculateAverageSecondCircle(centerNumber);

	// Найти индекс первого числа, равного centerNumber
	const centerIndex = numbers.indexOf(centerNumber);

	// Создаем новый массив без первого встреченного centerNumber
	const filteredNumbers = numbers.filter((num, index) => !(num === centerNumber && index === centerIndex));

	return (
		<div style={{ textAlign: 'left', marginTop: '20px' }}>
			<div style={{ textAlign: 'left', marginBottom: '10px' }}>
				<p>{numbers.join(', ')} = {averageSecondCircle.toFixed(2)}</p>
			</div>
			<div style={{ borderRadius: '50%', border: '3px solid indigo', padding: '10px', display: 'inline-block' }}>
				<svg width={sizeImage} height={sizeImage}>
					{/* Основной круг */}
					<circle cx={centerX} cy={centerY} r={radius} stroke="indigo" strokeWidth="3" fill="none" />
					{/* Второй круг */}
					<circle cx={centerX} cy={centerY} r={secondRadius} stroke="indigo" strokeWidth="3" fill="none" />
					{/* Рисуем центральное число */}
					<g>
						<circle cx={centerX} cy={centerY} r={smallRadius} stroke="blue" strokeWidth="2" fill="indigo" />
						<text x={centerX} y={centerY} fontSize="20" textAnchor="middle" dominantBaseline="middle" fill="white">{centerNumber}</text>
					</g>
					{/* Рисуем числа на первом круге */}
					{filteredNumbers.map((num, index) => {

						const { x, y } = getCoordinates(index, radius);

						return (
							<g key={index}>
								<circle cx={x} cy={y} r={smallRadius} stroke="blue" strokeWidth="2" fill="purple" />
								<text x={x} y={y} fontSize="20" textAnchor="middle" dominantBaseline="middle" fill="white">{num}</text>
							</g>
						);
					})}
					{/* Рисуем числа на втором круге с добавлением центра */}
					{filteredNumbers.map((num, index) => {
						// Вычисляем угол для второго круга с учетом смещения
						const { x, y } = getCoordinates(index, secondRadius);

						return (
							<g key={`second-${index}`}>
								<circle cx={x} cy={y} r={smallRadius} stroke="blue" strokeWidth="2" fill="blue" />
								<text x={x} y={y} fontSize="20" textAnchor="middle" dominantBaseline="middle" fill="white">{num + centerNumber}</text>
							</g>
						);
					})}
				</svg>
			</div>
		</div>
	);
};

export default Circle;
