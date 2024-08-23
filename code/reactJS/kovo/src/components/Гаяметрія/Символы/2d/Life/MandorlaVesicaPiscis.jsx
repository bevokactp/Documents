import React, { useState } from 'react';

const VesicaPiscis = () => {
  const [showVertical, setShowVertical] = useState(true);
  const [showNarrow, setShowNarrow] = useState(true);
  const [showAlong, setShowAlong] = useState(true);

  const radius = 50;
  const circleRadius = 2 * radius;
  const centerX = 0;
  const centerY = 0;
  const offset = radius; // Расстояние между центрами окружностей

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showVertical}
            onChange={() => setShowVertical(!showVertical)}
          />
          Отвесно око
        </label>
        <label>
          <input
            type="checkbox"
            checked={showNarrow}
            onChange={() => setShowNarrow(!showNarrow)}
          />
          Узкое око
        </label>
        <label>
          <input
            type="checkbox"
            checked={showAlong}
            onChange={() => setShowAlong(!showAlong)}
          />
          Вдоль око
        </label>
      </div>

      <svg width="400" height="400" viewBox="-200 -100 400 200" xmlns="http://www.w3.org/2000/svg">
        {/* Отвесно око */}
        {showVertical && (
          <>
            <circle cx={centerX} cy={centerY - offset} r={circleRadius} stroke="blue" strokeWidth="2" fill="none" />
            <circle cx={centerX} cy={centerY + offset} r={circleRadius} stroke="blue" strokeWidth="2" fill="none" />
          </>
        )}
        {/* Узкое око */}
        {showNarrow && (
          <>
            <circle cx={centerX - offset * 1.75} cy={centerY} r={circleRadius} stroke="navy" strokeWidth="2" fill="none" />
            <circle cx={centerX + offset * 1.75} cy={centerY} r={circleRadius} stroke="navy" strokeWidth="2" fill="none" />
          </>
        )}
        {/* Вдоль око */}
        {showAlong && (
          <>
            <circle cx={centerX - offset} cy={centerY} r={circleRadius} stroke="indigo" strokeWidth="2" fill="none" />
            <circle cx={centerX + offset} cy={centerY} r={circleRadius} stroke="indigo" strokeWidth="2" fill="none" />
          </>
        )}
        {/* Око */}
        <circle cx={centerX} cy={centerY} r={circleRadius / 2} stroke="blueviolet" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
};

export default VesicaPiscis;
