import React, { useState } from 'react';


// по мѣре 25
// внутри ра

const Mu11Da108May = () => {
  const [height, setHeight] = useState(400);
  const width = height * 1.07;

  // Диагональ прямоугольника
  const diagonal = Math.sqrt((width ** 2) + (height ** 2));

  // Радиус равен одной трети диагонали, деленной на 2
  const radius = (diagonal / 3) / 2;

  // Внутреннее окружность
  const circumference = 2 * Math.PI * radius;

  // ! Ширина диагоналей равна одной трети внутреннего окружности а не 30
  const strokeWidth = circumference / 30;

  // Расчеты
  const diagonalLength = strokeWidth;
  const circleRadiusWithStroke = radius + strokeWidth / 2;
  const circleRadiusWithoutStroke = radius;

  return (
    <div style={{ textAlign: 'center' }}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg" style={{ margin: 'auto', display: 'block' }}>
        {/* Прямоугольник */}
        <rect x="0" y="0" width={width} height={height} fill="transparent" stroke="black" strokeWidth="2" />

        {/* Треугольники */}
        {/* Верхний треугольник */}
        <polygon points={`0,0 ${width / 2},${height / 2} ${width},0`} fill="black" />
        {/* Нижний треугольник */}
        <polygon points={`0,${height} ${width / 2},${height / 2} ${width},${height}`} fill="white" />
        {/* Правый треугольник */}
        <polygon points={`${width},0 ${width / 2},${height / 2} ${width},${height}`} fill="red" />
        {/* Левый треугольник */}
        <polygon points={`0,0 ${width / 2},${height / 2} 0,${height}`} fill="purple" />

        {/* Диагонали */}
        <line x1="0" y1="0" x2={width} y2={height} stroke="yellow" strokeWidth={strokeWidth} />
        <line x1={width} y1="0" x2="0" y2={height} stroke="yellow" strokeWidth={strokeWidth} />

        {/* Круг в центре */}
        <circle cx={width / 2} cy={height / 2} r={radius} fill="blueViolet" stroke="yellow" strokeWidth={strokeWidth} />

        {/* Буква "Р" в центре круга */}
        <text
          x={width / 2}
          y={height / 2}
          fontSize={radius * 0.6} // Размер шрифта пропорционален радиусу круга
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="white"
          dy=".3em" // Небольшая корректировка для центрирования по вертикали
        >
          Ра
        </text>

      </svg>

      <div style={{ marginTop: '20px' }}>
        <label>
          Высота прямоугольника:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            min="1"
            style={{ marginLeft: '10px', width: '80px' }}
          />
        </label>
        <div>
          <p>Прямоугольник:</p>
          <ul>
            <li>Высота: {height}</li>
            <li>Ширина: {width.toFixed(2)}</li>
            <li>Площадь: {(width * height).toFixed(2)}</li>
            <li>Ширина диагоналей: {diagonalLength.toFixed(2)}</li>
            <li>Радиус круга с учетом толщины окружности: {circleRadiusWithStroke.toFixed(2)}</li>
            <li>Радиус круга без учета толщины окружности: {circleRadiusWithoutStroke.toFixed(2)}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mu11Da108May;
