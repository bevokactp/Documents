import React, { useRef, useEffect } from 'react';

const SignalComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const signalHeight = 50;
    const signalWidth = 50;
    const lineWidth = 3;
    ctx.lineWidth = lineWidth;

    const drawSignal = (offsetX, offsetY, signalType = 'wide', flipHorizontally = false) => {
      ctx.beginPath();
      const step = signalWidth;
      const heightAdjustment = signalHeight;

      let steps = [];
      if (signalType === 'wide') {
        steps = [
          { dx: step, dy: 0 },
          { dx: 0, dy: -heightAdjustment },
          { dx: step, dy: 0 },
          { dx: 0, dy: -heightAdjustment },
          { dx: step, dy: 0 },
          { dx: 0, dy: heightAdjustment },
          { dx: step, dy: 0 },
          { dx: 0, dy: heightAdjustment }
        ];
      } else if (signalType === 'narrow') {
        steps = [
          { dx: step, dy: 0 },
          { dx: 0, dy: -heightAdjustment },
          { dx: step, dy: 0 },
          { dx: 0, dy: heightAdjustment }
        ];
      }

      // Calculate the total length of one signal pattern
      const patternLength = steps.reduce((acc, { dx }) => acc + dx, 0);
      const repeatCount = Math.ceil(width / patternLength);

      if (flipHorizontally) {
        steps.reverse();
      }

      for (let i = 0; i < repeatCount; i++) {
        let localX = offsetX + (i * patternLength);
        let localY = offsetY;
        steps.forEach(({ dx, dy }) => {
          ctx.lineTo(localX + dx, localY + dy);
          localX += dx;
          localY += dy;
        });
      }
      ctx.stroke();
    };

    ctx.clearRect(0, 0, width, height);

    const phaseShift = signalWidth * 1.5;
    const verticalShift = signalHeight * (-0.5);
    const phaseHeight = signalHeight;
    ctx.strokeStyle = 'blue';

    drawSignal(phaseShift, (height / 2) + verticalShift - phaseHeight, 'wide', true);
    drawSignal(0, height / 2, 'narrow');

  }, []);

  const width = 500, height = 50, amplitude = 30, frequency = 10;
  const step = width / (frequency * 2);
  const halfStep = step / 2;

  const generatePoints = (offset, verticalOffset = 0) => {
    const points = [];
    for (let i = 0; i <= width; i += step) {
      const x = i + offset;
      const y = (i % (2 * step) === 0)
        ? (height / 1 - amplitude / 2 + verticalOffset)
        : (height / 1 + amplitude / 2 + verticalOffset);
      points.push(`${x},${y}`);
      points.push(`${x + step},${y}`);
    }
    return points;
  };

  const points1 = generatePoints(0);
  const points2 = generatePoints(halfStep, amplitude / 2);



  return (
    <div>
      <canvas ref={canvasRef} width={500} height={200} style={{ border: '1px solid black' }} />
      <svg width={width} height={height * 2} style={{ backgroundColor: '#eee' }}>
        <polyline points={points1.join(' ')} fill="none" stroke="blue" strokeWidth="2" />
        <polyline points={points2.join(' ')} fill="none" stroke="blue" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default SignalComponent;



