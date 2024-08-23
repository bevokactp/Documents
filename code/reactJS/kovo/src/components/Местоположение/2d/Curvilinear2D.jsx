import React from 'react';

const Curvilinear2D = ({ x, y, width, height }) => {
  // Преобразование координат в пиксели относительно центра
  const cx = (width / 2) + x;
  const cy = (height / 2) - y;

  return (
    <div>
      <h3>Curvilinear 2D</h3>
      <svg width={width} height={height} style={{ border: '1px solid black' }}>
        {/* Криволинейная сетка */}
        <path d={`M${width / 2} ${height / 2} Q${width / 4} ${height / 4}, ${cx} ${cy}`} stroke="black" fill="none" />
        <circle cx={cx} cy={cy} r="5" fill="red" />
        {/* Оси */}
        <line x1={0} y1={height / 2} x2={width} y2={height / 2} stroke="black" />
        <line x1={width / 2} y1={0} x2={width / 2} y2={height} stroke="black" />
      </svg>
    </div>
  );
};

export default Curvilinear2D;
