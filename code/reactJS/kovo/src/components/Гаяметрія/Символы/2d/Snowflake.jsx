import React, { useRef, useEffect } from 'react';

const Snowflake = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const angleOffset = Math.PI / 5;

    const drawLine = (x1, y1, x2, y2, width) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = width;
      ctx.stroke();
    };

    const drawBranch = (x1, y1, x2, y2) => {
      const baseLength = 15; // начальная длина дополнительных линий
      const baseWidth = 1; // начальная толщина линий
      const angle = Math.atan2(y2 - y1, x2 - x1); // угол основной линии

      // Разделить основную линию на 8 равных частей
      const segments = 8;
      for (let i = 1; i < segments; i++) {
        const ratio = i / segments;
        const midX = x1 + ratio * (x2 - x1);
        const midY = y1 + ratio * (y2 - y1);

        // Увеличение длины и толщины в зависимости от сегмента
        const length = baseLength * (1 + ratio * 3); // Увеличиваем длину
        const width = baseWidth * (1 + ratio * 2); // Увеличиваем толщину
        // const angleOffsetIncremented = angleOffset * ratio; // Увеличение угла наклона
        const angleOffsetIncremented = angleOffset; // Увеличение угла наклона

        const angle1 = angle + angleOffsetIncremented;
        const angle2 = angle - angleOffsetIncremented;

        const x1Branch = midX + length * Math.cos(angle1);
        const y1Branch = midY + length * Math.sin(angle1);
        const x2Branch = midX + length * Math.cos(angle2);
        const y2Branch = midY + length * Math.sin(angle2);

        drawLine(midX, midY, x1Branch, y1Branch, width);
        drawLine(midX, midY, x2Branch, y2Branch, width);
      }
    };

    const drawSnowflake = () => {
      const length = 100; // длина основных линий
      const angle = Math.PI / 3; // угол 60 градусов

      for (let i = 0; i < 6; i++) {
        const x = length * Math.cos(angle * i) + centerX;
        const y = length * Math.sin(angle * i) + centerY;
        drawLine(centerX, centerY, x, y, 2); // Толщина основной линии
        drawBranch(centerX, centerY, x, y);
      }
    };

    ctx.clearRect(0, 0, width, height); // Очистить холст перед рисованием
    drawSnowflake();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={300}
      style={{ border: '1px solid black' }}
    />
  );
};

export default Snowflake;
