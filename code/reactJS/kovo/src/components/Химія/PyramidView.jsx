// PyramidView.jsx
import React from 'react';
// import './pyramid.css';

const PyramidView = ({ elements }) => {
  const getPyramidLevel = (index) => {
    let level = 1;
    let count = 1;
    while (index >= count) {
      index -= count;
      count++;
      level++;
    }
    return level;
  };

  const getElementClasses = (level) => {
    const colors = [
      '#3498db', '#2ecc71', '#e74c3c', '#f1c40f', '#9b59b6',
      '#1abc9c', '#f39c12', '#d35400', '#7f8c8d', '#34495e',
      '#16a085', '#27ae60', '#2980b9', '#ccc4ad', '#f39c12',
      '#a3bac5', '#9aac99'
    ]; // Colors for different levels
    return {
      className: `element-circle level-${level}`,
      backgroundColor: colors[level - 1] || '#3498db' // Default color if out of range
    };
  };

  const groupedElements = elements.reduce((acc, el, index) => {
    const level = getPyramidLevel(index);
    if (!acc[level]) acc[level] = [];
    acc[level].push(el);
    return acc;
  }, {});

  return (
    <div className="pyramid-container">
      {Object.keys(groupedElements).map(level => (
        <div key={level} className={`level level-${level}`}>
          {groupedElements[level].map(el => {
            const { className, backgroundColor } = getElementClasses(level);
            return (
              <div
                key={el.number}
                className={className}
                style={{ backgroundColor }}
              >
                <span>{el.nameReal || el.nameModern}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default PyramidView;
