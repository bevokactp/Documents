import React from 'react';
import './circular.css';

const CircularView = ({ elements }) => {
  const radiusStep = 100; // Расстояние между уровнями
  const colors = [
    '#f4a261', '#2a9d8f', '#e76f51', '#264653', '#e9c46a',
    '#f1faee', '#f28d35', '#e07a5f', '#c4e0e5', '#8d99ae',
    '#d8d2cb', '#d9ed92', '#e5e5e5', '#f5b7b1', '#a3b18a'
  ]; // Цвета для уровней

  // Функция для вычисления уровня и позиции элемента
  const getLevelAndPosition = (index) => {
    let level = 0;
    let startIndex = 0;
    while (index >= startIndex + (level + 1)) {
      startIndex += (level + 1);
      level += 1;
    }
    const posIndex = index - startIndex; // Позиция элемента на уровне
    return { level, posIndex };
  };

  // Функция для вычисления количества элементов на уровне
  const elementsOnLevel = (level) => level + 1;

  // Функция для вычисления позиции элемента
  const getPosition = (posIndex, level) => {
    const radius = level * radiusStep;
    const numElementsOnLevel = elementsOnLevel(level);
    const angle = (360 / numElementsOnLevel) * posIndex - 90;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    return { x, y };
  };

  // Генерация SVG-орбит
  const renderOrbits = () => {
    // Вычисляем максимальный уровень
    const maxLevel = Math.max(...elements.map((_, index) => getLevelAndPosition(index).level)) + 1;

    // Проверяем, что maxLevel больше нуля
    if (maxLevel <= 0) {
      return null;
    }

    return [...Array(maxLevel).keys()].map(level => (
      <circle
        key={level}
        cx="50%"
        cy="50%"
        r={level * radiusStep}
        stroke="#ddd"
        strokeWidth="1"
        fill="none"
      />
    ));
  };

  return (
    <div className="circular-view">
      {/* SVG для орбит */}
      <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {renderOrbits()}
      </svg>

      {/* Элементы */}
      {elements.map((el, index) => {
        const { level, posIndex } = getLevelAndPosition(index);
        const { x, y } = getPosition(posIndex, level);
        const color = colors[level % colors.length];

        return (
          <div
            key={index}
            className="planet"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              backgroundColor: color,
            }}
          >
            <span className="planet-name">
              {el.nameReal || el.nameModern}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CircularView;
