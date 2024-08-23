// src/components/BeadConfigurator.jsx
import React, { useState } from 'react';
import BeadPartForm from './BeadPartForm';
import BeadStatistics from './BeadStatistics';

const BeadConfigurator = ({ parts, setParts, circleColor, setCircleColor, radius, setRadius }) => {
	const [partCount, setPartCount] = useState(parts.length);

	const generateRandomColor = () => {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};

	const updateParts = (count) => {
		const newParts = Array.from({ length: count }, () => ({
			diameter: 20,
			color: generateRandomColor(),
			shape: 'sphere',
			count: 10,
		}));
		setParts(newParts);
	};

	const updatePart = (index, updatedPart) => {
		const newParts = [...parts];
		newParts[index] = updatedPart;
		setParts(newParts);
	};

	const calculateStatistics = () => {
		const totalBeads = parts.reduce((sum, part) => sum + part.count, 0);
		const circumference = 2 * Math.PI * radius; // Длина окружности круга
		const beadDiameters = parts.map(part => part.diameter);
		const maxDiameter = Math.max(...beadDiameters);

		const innerDiameter = 2 * (radius - maxDiameter / 2); // Внутренний диаметр
		const outerDiameter = 2 * (radius + maxDiameter / 2); // Внешний диаметр
		return { totalLength: circumference, innerDiameter, outerDiameter, totalBeads };
	};

	const { totalLength, innerDiameter, outerDiameter, totalBeads } = calculateStatistics();

	return (
		<div>
		    <h3>Ввод</h3>
			<label> Количество частей:
				<input type="number" value={partCount} onChange={(e) => { const count = parseInt(e.target.value, 10); setPartCount(count); updateParts(count); }} min="1" max="10" />
			</label>
			{parts.map((part, index) => (
				<BeadPartForm
					key={index}
					index={index}
					part={part}
					updatePart={updatePart}
				/>
			))}
			<div className="bead-part-form">
				<label> Радиус круга: <input type="number" value={radius} onChange={(e) => setRadius(parseInt(e.target.value, 10))} min="50" /> </label>
				<label> Цвет круга: <input type="color" value={circleColor} onChange={(e) => setCircleColor(e.target.value)} /> </label>
			</div>

			<BeadStatistics totalLength={totalLength} innerDiameter={innerDiameter} outerDiameter={outerDiameter} totalBeads={totalBeads} />
		</div>
	);
};

export default BeadConfigurator;
