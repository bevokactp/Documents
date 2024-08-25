import React, { useState } from 'react';

// Данные о резонаторах
const resonatorData = [
  {
    name: 'Кварцевые',
    description: 'Используют пьезоэлектрические свойства кварца для создания стабильной частоты.',
    advantages: 'Высокая точность и стабильность.',
    disadvantages: 'Относительно высокая стоимость, чувствительность к температуре.',
    application: 'Часы, радиочастотные устройства.',
    availability: 'Широко доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    complexity: 3,
    lifespan: 10,
    type: 'Электромагнитные',
    resonanceFrequency: 'Высокая',
    qFactor: 'Высокий',
    resonanceAmplitude: 'Средняя',
    bandwidth: 'Нarrow'
  },
  {
    name: 'Мембранные',
    description: 'Используют натянутую мембрану (например, в музыкальных инструментах).',
    advantages: 'Простота конструкции, доступность.',
    disadvantages: 'Меньшая стабильность частоты.',
    application: 'Музыкальные инструменты.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    complexity: 2,
    lifespan: 5,
    type: 'Механические',
    resonanceFrequency: 'Средняя',
    qFactor: 'Средний',
    resonanceAmplitude: 'Высокая',
    bandwidth: 'Широкая'
  },
  {
    name: 'LC-резонаторы с фиксированными элементами',
    description: 'Применяют постоянные индуктивности и ёмкости.',
    advantages: 'Простота реализации, устойчивость.',
    disadvantages: 'Меньшая гибкость в настройке частоты.',
    application: 'Фильтры, осцилляторы.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    complexity: 2,
    lifespan: 8,
    type: 'Электрические',
    resonanceFrequency: 'Средняя',
    qFactor: 'Средний',
    resonanceAmplitude: 'Средняя',
    bandwidth: 'Средняя'
  },
  {
    name: 'LC-резонаторы настраиваемые',
    description: 'Позволяют изменять частоту резонанса путём регулировки индуктивности или ёмкости.',
    advantages: 'Гибкость в настройке частоты.',
    disadvantages: 'Сложность регулировки, стоимость.',
    application: 'Настраиваемые фильтры, осцилляторы.',
    availability: 'Широко доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    complexity: 4,
    lifespan: 8,
    type: 'Электрические',
    resonanceFrequency: 'Высокая',
    qFactor: 'Высокий',
    resonanceAmplitude: 'Средняя',
    bandwidth: 'Средняя'
  },
  {
    name: 'Фабри-Перо',
    description: 'Используют два параллельных зеркала для создания интерференционных узоров.',
    advantages: 'Высокая точность, стабильность.',
    disadvantages: 'Сложность конструкции, чувствительность к окружающей среде.',
    application: 'Лазеры.',
    availability: 'Широко доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    complexity: 5,
    lifespan: 12,
    type: 'Оптические',
    resonanceFrequency: 'Средняя',
    qFactor: 'Высокий',
    resonanceAmplitude: 'Низкая',
    bandwidth: 'Нarrow'
  },
  {
    name: 'Микрочастотного диапазона',
    description: 'Могут быть использованы в различных спектральных диапазонах для создания резонансных частот.',
    advantages: 'Высокая гибкость применения.',
    disadvantages: 'Может требовать специального оборудования.',
    application: 'Радиочастотные системы.',
    availability: 'Широко доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    complexity: 4,
    lifespan: 10,
    type: 'Электромагнитные',
    resonanceFrequency: 'Высокая',
    qFactor: 'Высокий',
    resonanceAmplitude: 'Средняя',
    bandwidth: 'Средняя'
  },
  {
    name: 'Каверны (плоские или цилиндрические)',
    description: 'Обеспечивают резонанс в звуковых системах, таких как органные трубы.',
    advantages: 'Хороший звук, простота конструкции.',
    disadvantages: 'Ограниченные возможности по частоте.',
    application: 'Органные трубы, акустические системы.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    complexity: 2,
    lifespan: 15,
    type: 'Акустические',
    resonanceFrequency: 'Средняя',
    qFactor: 'Средний',
    resonanceAmplitude: 'Высокая',
    bandwidth: 'Широкая'
  },
  {
    name: 'С полым телом',
    description: 'Используют воздушные полости для создания резонансных частот.',
    advantages: 'Хороший звук, простота конструкции.',
    disadvantages: 'Меньшая точность частоты.',
    application: 'Акустические гитары, трубы.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    complexity: 2,
    lifespan: 15,
    type: 'Акустические',
    resonanceFrequency: 'Средняя',
    qFactor: 'Средний',
    resonanceAmplitude: 'Высокая',
    bandwidth: 'Широкая'
  },
  {
    name: 'Кавитронные',
    description: 'Используют резонанс в полостях для создания частот.',
    advantages: 'Высокая точность резонанса.',
    disadvantages: 'Сложность конструкции.',
    application: 'СВЧ-технологии.',
    availability: 'Умеренно доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    complexity: 4,
    lifespan: 12,
    type: 'Электромагнитные',
    resonanceFrequency: 'Высокая',
    qFactor: 'Высокий',
    resonanceAmplitude: 'Средняя',
    bandwidth: 'Нarrow'
  },
  {
    name: 'На кольцевых структурах',
    description: 'Используют кольцевые структуры для создания резонансных частот.',
    advantages: 'Высокая точность, стабильность.',
    disadvantages: 'Сложность реализации.',
    application: 'Фильтры, осцилляторы.',
    availability: 'Широко доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    complexity: 5,
    lifespan: 10,
    type: 'Электромагнитные',
    resonanceFrequency: 'Высокая',
    qFactor: 'Высокий',
    resonanceAmplitude: 'Средняя',
    bandwidth: 'Средняя'
  },
  {
    name: 'Трансформаторные',
    description: 'Используют магнитные свойства трансформаторов для создания резонансных частот.',
    advantages: 'Высокая точность, стабильность.',
    disadvantages: 'Сложность конструкции, вес.',
    application: 'Электрические устройства.',
    availability: 'Широко доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    complexity: 4,
    lifespan: 10,
    type: 'Электромагнитные',
    resonanceFrequency: 'Средняя',
    qFactor: 'Высокий',
    resonanceAmplitude: 'Средняя',
    bandwidth: 'Средняя'
  }
];

const BatteryList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const sortedData = [...resonatorData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы резонаторов</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Название</th>
            <th onClick={() => handleSort('description')}>Описание</th>
            <th onClick={() => handleSort('advantages')}>Преимущества</th>
            <th onClick={() => handleSort('disadvantages')}>Недостатки</th>
            <th onClick={() => handleSort('application')}>Применение</th>
            <th onClick={() => handleSort('availability')}>Доступность</th>
            <th onClick={() => handleSort('quality')}>Качество</th>
            <th onClick={() => handleSort('reliability')}>Надежность</th>
            <th onClick={() => handleSort('complexity')}>Сложность изготовления</th>
            <th onClick={() => handleSort('lifespan')}>Срок службы (лет)</th>
            <th onClick={() => handleSort('type')}>Тип</th>
            <th onClick={() => handleSort('resonanceFrequency')}>Частота резонанса</th>
            <th onClick={() => handleSort('qFactor')}>Добротность (Q-фактор)</th>
            <th onClick={() => handleSort('resonanceAmplitude')}>Амплитуда резонанса</th>
            <th onClick={() => handleSort('bandwidth')}>Ширина полосы пропускания</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((resonator, index) => (
            <tr key={index}>
              <td>{resonator.name}</td>
              <td>{resonator.description}</td>
              <td>{resonator.advantages}</td>
              <td>{resonator.disadvantages}</td>
              <td>{resonator.application}</td>
              <td>{resonator.availability}</td>
              <td>{resonator.quality}</td>
              <td>{resonator.reliability}</td>
              <td>{resonator.complexity}</td>
              <td>{resonator.lifespan}</td>
              <td>{resonator.type}</td>
              <td>{resonator.resonanceFrequency}</td>
              <td>{resonator.qFactor}</td>
              <td>{resonator.resonanceAmplitude}</td>
              <td>{resonator.bandwidth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BatteryList;
