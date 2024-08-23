// VectorField.jsx
import React from 'react';
import { Stage, Layer, Line } from 'react-konva';

const generateVectorField = (width, height, spacing) => {
  const vectors = [];
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      const dx = Math.sin(y / 50) * 10;
      const dy = Math.cos(x / 50) * 10;
      vectors.push({ x, y, dx, dy });
    }
  }
  return vectors;
};

const VectorField = () => {
  const width = 300;
  const height = 300;
  const spacing = 20;
  const vectors = generateVectorField(width, height, spacing);

  return (
    <Stage width={width} height={height}>
      <Layer>
        {vectors.map((vector, index) => (
          <Line
            key={index}
            points={[vector.x, vector.y, vector.x + vector.dx, vector.y + vector.dy]}
            stroke="black"
            strokeWidth={2}
            lineCap="round"
            lineJoin="round"
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default VectorField;
