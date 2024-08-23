import React from 'react';

const EnneagramDiagram = () => {
  const radius = 200;
  const center = radius;
  const angle = (2 * Math.PI) / 9;
  const offset = Math.PI / 2; // Поворот на 90 градусов, чтобы точка 9 была вверху
  const textOffset = 10; // Отступ текста от круга

  // Поворот на offset для правильного расположения точек
  const points = Array.from({ length: 9 }, (_, i) => {
    const x = center + (radius - 20) * Math.cos(i * angle - offset);
    const y = center + (radius - 20) * Math.sin(i * angle - offset);
    return { x, y };
  });

  // Линии для эннеаграммы
  const lines = [
    { from: 1, to: 2, color: 'black' },
    { from: 2, to: 4, color: 'black' },
    { from: 4, to: 8, color: 'black' },
    { from: 7, to: 8, color: 'black' },
    { from: 7, to: 5, color: 'black' },
    { from: 1, to: 5, color: 'black' },
    { from: 3, to: 0, color: 'blue' },
    { from: 6, to: 0, color: 'blue' },
  ];

  return (
    <svg width={2 * (radius + 20)} height={2 * (radius + 20)} viewBox={`0 0 ${2 * (radius + 20)} ${2 * (radius + 20)}`} xmlns="http://www.w3.org/2000/svg">
      <circle cx={center + 20} cy={center + 20} r={radius - 20} stroke="black" strokeWidth="2" fill="none" />
      {lines.map((line, index) => (
        <line
          key={index}
          x1={points[line.from].x + 20}
          y1={points[line.from].y + 20}
          x2={points[line.to].x + 20}
          y2={points[line.to].y + 20}
          stroke={line.color}
          strokeWidth="2"
        />
      ))}
      {points.map((point, index) => (
        <text
          key={index}
          x={center + 20 + (radius - 20 + textOffset) * Math.cos(index * angle - offset)}
          y={center + 20 + (radius - 20 + textOffset) * Math.sin(index * angle - offset)}
          fontSize="18"
          textAnchor="middle"
          dy=".3em"
          fill="purple"
        >
          {9 - index}
        </text>
      ))}
    </svg>
  );
};

export default EnneagramDiagram;
