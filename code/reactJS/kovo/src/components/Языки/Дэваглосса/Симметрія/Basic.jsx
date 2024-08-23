import React, { useRef, useEffect } from 'react';


const TriangleWithHeight = () => {
	const trianglePoints = "50,15 100,100 0,100"; // Координаты для равнобедренного треугольника
	const heightX = 50; // X-координата точки, где высота пересекает основание
	const heightY = 100; // Y-координата точки основания

	return (
		<svg width="200" height="200">
			{/* Рисуем равнобедренный треугольник */}
			<polygon points={trianglePoints} fill="violet" stroke="black" strokeWidth="2" />

			{/* Рисуем высоту от синей вершины на основание */}
			<line
				x1="50"
				y1="15"
				x2={heightX}
				y2={heightY}
				stroke="blue"
				strokeWidth="2"
				strokeDasharray="4" // Делаем высоту пунктирной
			/>

			{/* Рисуем точки для вершин треугольника */}
			<circle cx="50" cy="15" r="4" fill="blue" />
			<circle cx="100" cy="100" r="4" fill="violet" />
			<circle cx="0" cy="100" r="4" fill="violet" />

			{/* Обозначение высоты */}
			<text x="40" y="30" fill="blue" fontSize="12">Height</text>
		</svg>
	);
};

const CircleWithDiameter = () => {
	const radius = 50; // Радиус круга
	const centerX = 100; // X-координата центра круга
	const centerY = 100; // Y-координата центра круга
	const diameter = radius * 2; // Диаметр круга

	return (
		<svg width="200" height="200">
			{/* Рисуем фиолетовый круг */}
			<circle
				cx={centerX}
				cy={centerY}
				r={radius}
				fill="violet"
				stroke="black"
				strokeWidth="2"
			/>

			{/* Рисуем синюю линию диаметра */}
			<line
				x1={centerX - radius}
				y1={centerY}
				x2={centerX + radius}
				y2={centerY}
				stroke="blue"
				strokeWidth="2"
			/>
		</svg>
	);
};


const SquareWithLines = () => {
	const squareSize = 100;
	const halfSize = squareSize / 2;
	const points = [
		`0,0`, // верхний левый угол
		`${squareSize},0`, // верхний правый угол
		`${squareSize},${squareSize}`, // нижний правый угол
		`0,${squareSize}`, // нижний левый угол
		`0,0` // возвращаемся к верхнему левому углу для замыкания квадрата
	].join(' ');

	return (
		<svg width="200" height="200">
			{/* Рисуем квадрат */}
			<polygon points={points} fill="violet" stroke="black" strokeWidth="2" />

			{/* Рисуем синюю вертикальную линию */}
			<line
				x1={halfSize}
				y1="0"
				x2={halfSize}
				y2={squareSize}
				stroke="blue"
				strokeWidth="2"
			/>

			{/* Рисуем синюю горизонтальную линию */}
			<line
				x1="0"
				y1={halfSize}
				x2={squareSize}
				y2={halfSize}
				stroke="blue"
				strokeWidth="2"
			/>

			{/* Рисуем диагонали квадрата */}
			<line
				x1="0"
				y1="0"
				x2={squareSize}
				y2={squareSize}
				stroke="blue"
				strokeWidth="2"
			/>
			<line
				x1={squareSize}
				y1="0"
				x2="0"
				y2={squareSize}
				stroke="blue"
				strokeWidth="2"
			/>
		</svg>
	);
};


const App = () => {

	return (
		<div>
			<div>
				<h3>зеркальная симметрия -- относительно плоскости или линии, при которой фигура отражается как в зеркале</h3>
				<TriangleWithHeight />
				<CircleWithDiameter />
				<SquareWithLines />
			</div>
			<div>
			осевая симметрия -- относительно оси, при которой фигура сохраняет свои свойства при отражении через эту ось.
провести синюю высоту на основание треугольник равнобедренный
провести синюю плоскость через середину граней куба

	вращательная симметрия -- при вращении фигуры на определённый угол вокруг центра.
вражающийся круг: вращение на любой угол.
правильные треугольник вращается на угол 360 /3
правильные квадрат вращается на угол 360 / 4
правильные пентагон вращается на угол 360 / 5
правильные секстагон вращается на угол 360 / 6


	центральная симметрия -- относительно центра, при которой каждый элемент фигуры отражается на противоположную сторону центра.
примеры:
круг: центральная симметрия относительно центра.
квадрат: симметрия относительно центра.

	скользящая симметрия -- трансляции и зеркального отражения вдоль определенной линии.
примеры:
плиточные узоры: мозаики и узоры, которые повторяются при скольжении.

	винтовая симметрия --  возникающая при одновременном вращении и скольжении вдоль оси.
примеры:
винты: спиральные структуры, такие как спиральные раковины или винтовые лестницы.
некоторые кристаллы: имеют винтовую симметрию.

	сферическая симметрия --  где объект выглядит одинаково при любом вращении вокруг центра.
примеры:
сфера: идеальная сферическая симметрия.
шар: также обладает сферической симметрией.

	аксиальная симметрия (радиальная симметрия, симметрия вращения неопределённого порядка) -- относительно одной оси, где объект выглядит одинаково при любом вращении вокруг этой оси.
примеры:
цилиндр: обладает аксиальной симметрией вокруг своей оси.
конус: также имеет аксиальную симметрию.

	двусторонняя симметрия -- случай зеркальной симметрии, где объект имеет симметрию относительно одной плоскости.
примеры:
прямоугольник: симметрия относительно двух взаимно перпендикулярных осей.
равнобедренный треугольник: симметрия относительно высоты.

	трансляционная симметрия --  при которой объект повторяется через определенные шаги или отрезки вдоль заданного направления.
примеры:
плиточные узоры: узоры, которые повторяются при сдвиге.
геометрические решетки: регулярные структуры, такие как кристаллические решетки.

Симметрия сдвигов: Включает симметрию, связанную с периодическими сдвигами.

			</div>
		</div>
	);
};

export default App;
