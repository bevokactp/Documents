import React from 'react';

const Polar2D = ({ x, y, width, height }) => {
  // Преобразование координат в пиксели относительно центра
  const r = Math.sqrt(x**2 + y**2);
  const angle = Math.atan2(y, x);

  const cx = (width / 2) + r * Math.cos(angle);
  const cy = (height / 2) - r * Math.sin(angle);

  return (
    <div>
      <h3>Polar 2D</h3>
      <svg width={width} height={height} style={{ border: '1px solid black' }}>
        {/* Полярная сетка */}
        <circle cx={width / 2} cy={height / 2} r={r} stroke="black" fill="none" />
        <line x1={width / 2} y1={height / 2} x2={cx} y2={cy} stroke="black" />
        <circle cx={cx} cy={cy} r="5" fill="red" />
        {/* Оси */}
        <line x1={0} y1={height / 2} x2={width} y2={height / 2} stroke="black" />
        <line x1={width / 2} y1={0} x2={width / 2} y2={height} stroke="black" />
      </svg>
    </div>
  );
};

export default Polar2D;
