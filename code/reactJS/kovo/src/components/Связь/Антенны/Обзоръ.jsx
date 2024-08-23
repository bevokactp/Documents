// Обзоръ.jsx

import React from 'react';
import { formatCategoryName, formatDataForTable } from './антенны';
import data from './data.yaml';
import './styles.css';

const Обзоръ = () => {
  // Создаем таблицу
  const renderTable = (category, details) => {
    const formattedData = formatDataForTable(category, details);

    return (
      <table className="overview-table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Описание</th>
            <th>Плюсы</th>
            <th>Минусы</th>
            <th>Сложность изготовления</th>
            <th>Качество связи</th>
            <th>Применение</th>
            <th>Известные представители</th>
          </tr>
        </thead>
        <tbody>
          {formattedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.описание}</td>
              <td>{item.плюсы}</td>
              <td>{item.минусы}</td>
              <td>{item.сложностьИзготовления}</td>
              <td>{item.качествоСвязи}</td>
              <td>{item.применение}</td>
              <td>{item.известныеПредставители}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      {Object.entries(data).map(([category, subcategories]) => {
        if (subcategories && typeof subcategories === 'object') {
          return (
            <div key={category}>
              <h2>{formatCategoryName(category)}</h2>
              {Object.entries(subcategories).map(([subcategory, details]) => {
                if (details && typeof details === 'object') {
                  return (
                    <div key={subcategory}>
                      <h3>{formatCategoryName(subcategory)}</h3>
                      {renderTable(category, details)}
                    </div>
                  );
                } else {
                  console.error(`Неверный формат данных для подкатегории "${subcategory}" в категории "${category}":`, details);
                  return null;
                }
              })}
            </div>
          );
        } else {
          console.error(`Неверный формат данных для категории "${category}":`, subcategories);
          return null;
        }
      })}
    </div>
  );
};

export default Обзоръ;
