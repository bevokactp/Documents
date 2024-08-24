import React, { useRef, useEffect, useState } from 'react';
import './НаправленіяПисьма.css';

const TextDisplay = () => {
  const [text, setText] = useState('Введите текст здесь');
  const circleCanvasRef = useRef(null);
  const arcCanvasRef = useRef(null);

  useEffect(() => {
    const drawCircleText = () => {
      const canvas = circleCanvasRef.current;
      const context = canvas.getContext('2d');
      const radius = canvas.width / 2 - 10; // Учитываем отступ
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const textArray = text.split('');
      const angleStep = (2 * Math.PI) / textArray.length;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = '16px Arial';
      context.strokeStyle = 'blue';
      context.lineWidth = 2;

      textArray.forEach((char, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        context.save();
        context.translate(x, y);
        context.rotate(angle + Math.PI / 2);
        context.strokeText(char, 0, 0);
        context.restore();
      });
    };

    const drawArcText = () => {
      const canvas = arcCanvasRef.current;
      const context = canvas.getContext('2d');
      const radius = canvas.width / 2 - 10; // Учитываем отступ
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const textArray = text.split('');
      const textWidth = textArray.length * 16; // Приблизительная ширина одного символа
      const totalArcLength = Math.PI * radius; // Длина дуги в пикселях
      const textArcLength = textWidth; // Длина текста по дуге в пикселях
      const arcLength = Math.min(totalArcLength, textArcLength); // Длина дуги для текста
      const startAngle = -Math.PI / 2 - (arcLength / 2) / radius; // Начальный угол для центрирования текста
      const angleStep = arcLength / radius / textArray.length; // Шаг угла для каждого символа

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = '16px Arial';
      context.strokeStyle = 'blue';
      context.lineWidth = 2;

      textArray.forEach((char, index) => {
        const angle = startAngle + index * angleStep;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        context.save();
        context.translate(x, y);
        context.rotate(angle + Math.PI / 2);
        context.strokeText(char, 0, 0);
        context.restore();
      });
    };

    drawCircleText();
    drawArcText();
  }, [text]);

  return (
    <div className="container">
      <textarea
        className="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="text-examples">
        <div className="example">
          <div className="label">Слева направо</div>
          <div className="circle left-to-right">
            <span>{text}</span>
          </div>
        </div>
        <div className="example">
          <div className="label">Справа налево</div>
          <div className="circle right-to-left">
            <span>{text.split('').reverse().join('')}</span>
          </div>
        </div>
        <div className="example">
          <div className="label">Сверху вниз</div>
          <div className="circle top-to-bottom">
            <span>{text}</span>
          </div>
        </div>
        <div className="example">
          <div className="label">Снизу вверх</div>
          <div className="circle bottom-to-top">
            <span>{text}</span>
          </div>
        </div>
        <div className="example">
          <div className="label">Диагонально</div>
          <div className="circle diagonal">
            <span>{text}</span>
          </div>
        </div>
        <div className="example">
          <div className="label">По кругу</div>
          <canvas ref={circleCanvasRef} width="200" height="200" className="circle-canvas"></canvas>
        </div>
        <div className="example">
          <div className="label">По дуге</div>
          <canvas ref={arcCanvasRef} width="200" height="200" className="arc-canvas"></canvas>
        </div>
      </div>
    </div>
  );
};

export default TextDisplay;
