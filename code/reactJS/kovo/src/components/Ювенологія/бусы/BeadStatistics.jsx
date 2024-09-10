// src/components/BeadStatistics.jsx
import React from 'react';

const BeadStatistics = ({ totalLength, innerDiameter, outerDiameter, totalBeads }) => {
  return (
    <div>
      <h3>Статистика</h3>
      <p>Общая длина бус: {totalLength.toFixed(2)} см</p>
      <p>Внутренний диаметр: {innerDiameter.toFixed(2)} см</p>
      <p>Внешний диаметр: {outerDiameter.toFixed(2)} см</p>
      <p>Общее количество бусин: {totalBeads}</p> {/* Добавляем общее количество бусин */}
    </div>
  );
};

export default BeadStatistics;
