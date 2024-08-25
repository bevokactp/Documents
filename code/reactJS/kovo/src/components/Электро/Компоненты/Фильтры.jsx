import React, { useState } from 'react';

// Пример данных о фильтрах
const filterData = [
  {
    name: 'LC-фильтры',
    description: 'Фильтры, состоящие из индуктивности и ёмкости.',
    advantages: ['Высокая эффективность фильтрации', 'Широкий диапазон частот'],
    disadvantages: ['Большие размеры', 'Сложность в настройке'],
    application: ['Схемы радиообработки', 'Фильтрация в источниках питания'],
    availability: 4,
    qualityAndReliability: 5,
    manufacturingComplexity: 4,
    lifespanYears: 15,
    components: ['Катушки индуктивности', 'Конденсаторы'],
    activeOrPassive: 'Активные',
    order: 2,
    frequencies: 'Широкий диапазон',
    cutoffFrequency: 'Средняя',
    rollOff: 'Крутая',
    impulseResponse: 'Высокая',
    phase: 'Линейная',
    quality: 'Высокое',
  },
  {
    name: 'RC-фильтры',
    description: 'Фильтры, состоящие из резистора и ёмкости.',
    advantages: ['Простота конструкции', 'Низкая стоимость'],
    disadvantages: ['Ограниченный диапазон частот', 'Меньшая эффективность по сравнению с LC-фильтрами'],
    application: ['Схемы подавления помех', 'Фильтрация в аудиосистемах'],
    availability: 5,
    qualityAndReliability: 3,
    manufacturingComplexity: 2,
    lifespanYears: 10,
    components: ['Резисторы', 'Конденсаторы'],
    activeOrPassive: 'Пассивные',
    order: 1,
    frequencies: 'Ограниченный диапазон',
    cutoffFrequency: 'Низкая',
    rollOff: 'Плавная',
    impulseResponse: 'Средняя',
    phase: 'Нелинейная',
    quality: 'Среднее',
  },
  {
    name: 'RL-фильтры',
    description: 'Фильтры, состоящие из резистора и индуктивности.',
    advantages: ['Высокая стабильность', 'Устойчивость к высоким частотам'],
    disadvantages: ['Сложность в настройке', 'Меньшая эффективность на низких частотах'],
    application: ['Фильтрация в источниках питания', 'Радиочастотные схемы'],
    availability: 3,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespanYears: 12,
    components: ['Резисторы', 'Катушки индуктивности'],
    activeOrPassive: 'Пассивные',
    order: 2,
    frequencies: 'Средний диапазон',
    cutoffFrequency: 'Средняя',
    rollOff: 'Средняя',
    impulseResponse: 'Высокая',
    phase: 'Линейная',
    quality: 'Высокое',
  },
];

const FilterList = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedData = [...filterData].sort((a, b) => {
    if (sortConfig.key) {
      const isAscending = sortConfig.direction === 'asc';
      if (typeof a[sortConfig.key] === 'string') {
        return isAscending
          ? a[sortConfig.key].localeCompare(b[sortConfig.key])
          : b[sortConfig.key].localeCompare(a[sortConfig.key]);
      }
      if (typeof a[sortConfig.key] === 'number') {
        return isAscending
          ? a[sortConfig.key] - b[sortConfig.key]
          : b[sortConfig.key] - a[sortConfig.key];
      }
      if (Array.isArray(a[sortConfig.key])) {
        return isAscending
          ? a[sortConfig.key].length - b[sortConfig.key].length
          : b[sortConfig.key].length - a[sortConfig.key].length;
      }
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы фильтров</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Название</th>
            <th onClick={() => requestSort('description')}>Описание</th>
            <th onClick={() => requestSort('advantages')}>Преимущества</th>
            <th onClick={() => requestSort('disadvantages')}>Недостатки</th>
            <th onClick={() => requestSort('application')}>Применение</th>
            <th onClick={() => requestSort('availability')}>Доступность</th>
            <th onClick={() => requestSort('qualityAndReliability')}>Качество и Надежность</th>
            <th onClick={() => requestSort('manufacturingComplexity')}>Сложность изготовления</th>
            <th onClick={() => requestSort('lifespanYears')}>Срок службы лет</th>
            <th onClick={() => requestSort('components')}>Компоненты изготовления</th>
            <th onClick={() => requestSort('activeOrPassive')}>Актив/Пассив</th>
            <th onClick={() => requestSort('order')}>Порядок</th>
            <th onClick={() => requestSort('frequencies')}>Частоты</th>
            <th onClick={() => requestSort('cutoffFrequency')}>Пороговая частота</th>
            <th onClick={() => requestSort('rollOff')}>Крутизна</th>
            <th onClick={() => requestSort('impulseResponse')}>Реакция на импульсы</th>
            <th onClick={() => requestSort('phase')}>Фаза</th>
            <th onClick={() => requestSort('quality')}>Качество</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((filter, index) => (
            <tr key={index}>
              <td>{filter.name}</td>
              <td>{filter.description}</td>
              <td>{filter.advantages.join(', ')}</td>
              <td>{filter.disadvantages.join(', ')}</td>
              <td>{filter.application.join(', ')}</td>
              <td>{filter.availability}</td>
              <td>{filter.qualityAndReliability}</td>
              <td>{filter.manufacturingComplexity}</td>
              <td>{filter.lifespanYears}</td>
              <td>{filter.components.join(', ')}</td>
              <td>{filter.activeOrPassive}</td>
              <td>{filter.order}</td>
              <td>{filter.frequencies}</td>
              <td>{filter.cutoffFrequency}</td>
              <td>{filter.rollOff}</td>
              <td>{filter.impulseResponse}</td>
              <td>{filter.phase}</td>
              <td>{filter.quality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterList;
