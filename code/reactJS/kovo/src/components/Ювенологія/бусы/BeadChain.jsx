import React from 'react';
import PropTypes from 'prop-types';
import Bead from './Bead';

const BeadChain = ({ parts, circleColor, radius }) => {
  const totalBeads = parts.reduce((sum, part) => sum + part.count, 0);
  const angleStep = 360 / totalBeads;

  let currentAngle = 0;
  const centerX = 150; // Центр по X
  const centerY = 150; // Центр по Y

  // Получение диаметра первой части бусин для корректировки радиуса
  const firstPartDiameter = parts[0] ? parts[0].diameter : 0;
  const adjustedRadius = radius + firstPartDiameter / 2;

  const beads = parts.flatMap((part) =>
    Array.from({ length: part.count }, (_, i) => {
      const angle = currentAngle;
      currentAngle += angleStep;

      const beadRadius = part.diameter / 2;
      // Вычисление координат центра бусины
      const x = centerX + (adjustedRadius - beadRadius) * Math.cos((angle * Math.PI) / 180) - beadRadius;
      const y = centerY + (adjustedRadius - beadRadius) * Math.sin((angle * Math.PI) / 180) - beadRadius;

      return (
        <Bead
          key={`${part.shape}-${i}-${angle}`}
          diameter={`${part.diameter}px`}
          color={part.color}
          shape={part.shape}
          style={{ position: 'absolute', top: `${y}px`, left: `${x}px` }}
        />
      );
    })
  );

  return (
    <div style={{ position: 'relative', width: '300px', height: '300px', overflow: 'hidden' }}>
      <svg width="300" height="300" style={{ position: 'absolute', top: 0, left: 0 }}>
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke={circleColor} strokeWidth="2" />
      </svg>
      {beads}
    </div>
  );
};

BeadChain.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      diameter: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      shape: PropTypes.oneOf(['sphere', 'cube']).isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
  circleColor: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
};

export default BeadChain;
