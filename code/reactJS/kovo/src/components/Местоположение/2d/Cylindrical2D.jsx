import React from 'react';

const Cylindrical2D = ({ x, y, width, height }) => {
  // Преобразование координат в пиксели относительно центра
  const cx = (width / 2) + x;
  const cy = (height / 2) - y;

  return (
    <div>
      <h3>Cylindrical 2D</h3>
      <svg width={width} height={height} style={{ border: '1px solid black' }}>
        {/* Цилиндрическая сетка */}
        <circle cx={width / 2} cy={height / 2} r={Math.sqrt(cx**2 + cy**2)} stroke="black" fill="none" />
        <circle cx={cx} cy={cy} r="5" fill="red" />
        {/* Оси */}
        <line x1={0} y1={height / 2} x2={width} y2={height / 2} stroke="black" />
        <line x1={width / 2} y1={0} x2={width / 2} y2={height} stroke="black" />
      </svg>
    </div>
  );
};

export default Cylindrical2D;
