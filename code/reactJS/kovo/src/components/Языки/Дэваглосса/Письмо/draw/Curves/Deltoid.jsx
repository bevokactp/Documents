// draw/Curves/Deltoid.jsx
import React, { useEffect, useRef } from 'react';

const DrawDeltoid = ({ parameters }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { radius, detail } = parameters;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Center coordinates
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    canvas.width = radius * 6;
    canvas.height = radius * 6;

    // Draw the Deltoid curve
    ctx.beginPath();
    for (let i = 0; i <= detail; i++) {
      const theta = (i / detail) * 2 * Math.PI;
      const r = radius * (2 - Math.cos(theta));
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      if (i === 0) {
        ctx.moveTo(centerX + x, centerY - y);
      } else {
        ctx.lineTo(centerX + x, centerY - y);
      }
    }
    ctx.closePath();
    ctx.stroke();
  }, [parameters]);

  return <canvas ref={canvasRef} />;
};

export default DrawDeltoid;
