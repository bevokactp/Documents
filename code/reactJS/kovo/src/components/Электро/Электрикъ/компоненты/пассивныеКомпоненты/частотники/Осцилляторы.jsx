import React, { useState } from 'react';

const oscillatorData = [
  {
    name: 'Волновые генераторы',
    description: 'Генераторы, создающие колебания на основе волновых процессов.',
    advantages: 'Высокая точность, широкий диапазон частот.',
    disadvantages: 'Сложность конструкции и настройки.',
    application: 'Радиочастотные устройства, научные исследования.',
    availability: 'Умеренно доступные',
    quality: 'Высокое',
    reliability: 'Средняя',
    complexity: 6,
    lifespan: 10,
    signalType: 'Синусоидальные',
    componentType: 'Электронные',
    frequencyRange: 'Широкий',
    mainFrequency: 'Переменная',
    frequencyStability: 'Высокая',
    amplitude: 'Средняя',
    bandwidth: 'Широкая',
    qFactor: 'Средний',
    materials: 'Различные металлы и полупроводники'
  },
  {
    name: 'Мультивибраторы',
    description: 'Цифровые осцилляторы, создающие прямоугольные импульсы.',
    advantages: 'Простота реализации, стабильная частота.',
    disadvantages: 'Ограниченный диапазон частот.',
    application: 'Цифровые схемы, таймеры.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    complexity: 2,
    lifespan: 5,
    signalType: 'Прямоугольные',
    componentType: 'Электронные',
    frequencyRange: 'Низкий',
    mainFrequency: 'Низкая',
    frequencyStability: 'Средняя',
    amplitude: 'Средняя',
    bandwidth: 'Широкая',
    qFactor: 'Низкий',
    materials: 'Полупроводники, резисторы, конденсаторы'
  },
  {
    name: 'Осцилляторы Армстронга',
    description: 'Осцилляторы с усилением, использующие транзисторы и резисторы для генерации частоты.',
    advantages: 'Высокая стабильность, простота конструкции.',
    disadvantages: 'Может потребоваться калибровка.',
    application: 'Радиочастотные системы, генерация сигналов.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    complexity: 3,
    lifespan: 8,
    signalType: 'Синусоидальные',
    componentType: 'Электронные',
    frequencyRange: 'Средний',
    mainFrequency: 'Средняя',
    frequencyStability: 'Средняя',
    amplitude: 'Средняя',
    bandwidth: 'Средняя',
    qFactor: 'Средний',
    materials: 'Транзисторы, резисторы, конденсаторы'
  },
  {
    name: 'Осцилляторы Баркхаузена',
    description: 'Осцилляторы с положительной обратной связью, использующие транзисторы или усилители.',
    advantages: 'Широкий диапазон частот, стабильность.',
    disadvantages: 'Сложность в настройке и калибровке.',
    application: 'Радио, усилители.',
    availability: 'Умеренно доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    complexity: 4,
    lifespan: 7,
    signalType: 'Синусоидальные',
    componentType: 'Электронные',
    frequencyRange: 'Широкий',
    mainFrequency: 'Переменная',
    frequencyStability: 'Высокая',
    amplitude: 'Средняя',
    bandwidth: 'Широкая',
    qFactor: 'Средний',
    materials: 'Транзисторы, резисторы, конденсаторы'
  },
  {
    name: 'Осцилляторы Ван дер Поля',
    description: 'Осцилляторы, использующие нелинейные элементы и индуктивности для генерации частоты.',
    advantages: 'Высокая стабильность, простой в настройке.',
    disadvantages: 'Может иметь ограничения по диапазону частот.',
    application: 'Радиочастотные устройства, генерация сигналов.',
    availability: 'Умеренно доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    complexity: 3,
    lifespan: 8,
    signalType: 'Синусоидальные',
    componentType: 'Электронные',
    frequencyRange: 'Средний',
    mainFrequency: 'Средняя',
    frequencyStability: 'Средняя',
    amplitude: 'Средняя',
    bandwidth: 'Средняя',
    qFactor: 'Средний',
    materials: 'Индуктивности, конденсаторы, транзисторы'
  },
  {
    name: 'Осцилляторы Гармонический',
    description: 'Осцилляторы, создающие гармонические колебания на основе резонансных цепей.',
    advantages: 'Высокая точность и стабильность.',
    disadvantages: 'Может требовать сложной настройки.',
    application: 'Акустические устройства, радиочастотные системы.',
    availability: 'Широко доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    complexity: 4,
    lifespan: 10,
    signalType: 'Синусоидальные',
    componentType: 'Электронные',
    frequencyRange: 'Средний',
    mainFrequency: 'Средняя',
    frequencyStability: 'Высокая',
    amplitude: 'Средняя',
    bandwidth: 'Узкая',
    qFactor: 'Высокий',
    materials: 'Резисторы, конденсаторы, индуктивности'
  },
  {
    name: 'Осцилляторы Дуффинга',
    description: 'Осцилляторы, использующие нелинейные свойства для генерации частот.',
    advantages: 'Могут создавать сложные сигналы.',
    disadvantages: 'Высокая сложность и стоимость.',
    application: 'Научные исследования, исследования нелинейных систем.',
    availability: 'Редко доступные',
    quality: 'Высокое',
    reliability: 'Средняя',
    complexity: 6,
    lifespan: 8,
    signalType: 'Сложные колебания',
    componentType: 'Электронные',
    frequencyRange: 'Широкий',
    mainFrequency: 'Переменная',
    frequencyStability: 'Низкая',
    amplitude: 'Переменная',
    bandwidth: 'Широкая',
    qFactor: 'Средний',
    materials: 'Нелинейные элементы, полупроводники'
  },
  {
    name: 'Осцилляторы Кольцевой',
    description: 'Осцилляторы на кольцевых структурах для генерации частоты.',
    advantages: 'Высокая стабильность, точность.',
    disadvantages: 'Может потребоваться сложная настройка.',
    application: 'Радиочастотные системы, телекоммуникации.',
    availability: 'Умеренно доступные',
    quality: 'Высокое',
    reliability: 'Средняя',
    complexity: 5,
    lifespan: 10,
    signalType: 'Синусоидальные',
    componentType: 'Электронные',
    frequencyRange: 'Средний',
    mainFrequency: 'Средняя',
    frequencyStability: 'Высокая',
    amplitude: 'Средняя',
    bandwidth: 'Широкая',
    qFactor: 'Средний',
    materials: 'Транзисторы, резисторы, конденсаторы'
  },
  {
    name: 'Осцилляторы Клеппа',
    description: 'Осцилляторы, использующие специальные элементы для создания частоты.',
    advantages: 'Высокая стабильность, точность.',
    disadvantages: 'Высокая стоимость, сложность настройки.',
    application: 'Научные исследования, измерительные приборы.',
    availability: 'Редко доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    complexity: 6,
    lifespan: 8,
    signalType: 'Синусоидальные',
    componentType: 'Электронные',
    frequencyRange: 'Средний',
    mainFrequency: 'Средняя',
    frequencyStability: 'Очень высокая',
    amplitude: 'Средняя',
    bandwidth: 'Узкая',
    qFactor: 'Очень высокий',
    materials: 'Специальные компоненты, полупроводники'
  },
  {
    name: 'Осцилляторы Колпитца',
    description: 'Осцилляторы с использованием конденсаторов и индуктивностей для создания частоты.',
    advantages: 'Широкий диапазон частот, простота конструкции.',
    disadvantages: 'Может требовать точной настройки.',
    application: 'Радиочастотные устройства, генерация сигналов.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    complexity: 3,
    lifespan: 7,
    signalType: 'Синусоидальные',
    componentType: 'Электронные',
    frequencyRange: 'Средний',
    mainFrequency: 'Средняя',
    frequencyStability: 'Средняя',
    amplitude: 'Средняя',
    bandwidth: 'Широкая',
    qFactor: 'Средний',
    materials: 'Конденсаторы, индуктивности, транзисторы'
  },
  {
    name: 'Осцилляторы Кристаллический',
    description: 'Осцилляторы, использующие пьезоэлектрические кристаллы для генерации частоты.',
    advantages: 'Высокая стабильность и точность.',
    disadvantages: 'Высокая стоимость, ограниченный диапазон частот.',
    application: 'Часы, радиочастотные устройства.',
    availability: 'Широко доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    complexity: 4,
    lifespan: 10,
    signalType: 'Синусоидальные',
    componentType: 'Электронные',
    frequencyRange: 'Средний',
    mainFrequency: 'Высокая',
    frequencyStability: 'Очень высокая',
    amplitude: 'Низкая',
    bandwidth: 'Узкая',
    qFactor: 'Высокий',
    materials: 'Пьезоэлектрические кристаллы'
  },
  {
    name: 'Осцилляторы Ослабленный',
    description: 'Осцилляторы с ослабленным сигналом, используемые для специализированных приложений.',
    advantages: 'Могут быть адаптированы для специфических условий.',
    disadvantages: 'Меньшая мощность, сложность настройки.',
    application: 'Специализированные измерения, исследовательские проекты.',
    availability: 'Редко доступные',
    quality: 'Среднее',
    reliability: 'Низкая',
    complexity: 5,
    lifespan: 6,
    signalType: 'Переменный',
    componentType: 'Электронные',
    frequencyRange: 'Специальный',
    mainFrequency: 'Переменная',
    frequencyStability: 'Низкая',
    amplitude: 'Низкая',
    bandwidth: 'Узкая',
    qFactor: 'Низкий',
    materials: 'Специальные электронные компоненты'
  },
  {
    name: 'Осцилляторы Хартли',
    description: 'Осцилляторы, использующие индуктивности и конденсаторы для создания частоты.',
    advantages: 'Простота конструкции, высокая стабильность.',
    disadvantages: 'Может потребоваться точная настройка.',
    application: 'Радиочастотные системы, генерация сигналов.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    complexity: 3,
    lifespan: 7,
    signalType: 'Синусоидальные',
    componentType: 'Электронные',
    frequencyRange: 'Средний',
    mainFrequency: 'Средняя',
    frequencyStability: 'Средняя',
    amplitude: 'Средняя',
    bandwidth: 'Широкая',
    qFactor: 'Средний',
    materials: 'Индуктивности, конденсаторы, транзисторы'
  },
  {
    name: 'Осцилляторы Чуа',
    description: 'Осцилляторы на основе нелинейных элементов, создающие сложные сигналы.',
    advantages: 'Могут генерировать хаотические сигналы.',
    disadvantages: 'Высокая сложность и нестабильность.',
    application: 'Научные исследования, изучение хаоса.',
    availability: 'Редко доступные',
    quality: 'Высокое',
    reliability: 'Низкая',
    complexity: 7,
    lifespan: 5,
    signalType: 'Сложные колебания',
    componentType: 'Электронные',
    frequencyRange: 'Специальный',
    mainFrequency: 'Переменная',
    frequencyStability: 'Низкая',
    amplitude: 'Переменная',
    bandwidth: 'Широкая',
    qFactor: 'Низкий',
    materials: 'Нелинейные элементы, полупроводники'
  },
  {
    name: 'Осцилляторы LC цепи',
    description: 'Осцилляторы на основе индуктивностей и конденсаторов для генерации частоты.',
    advantages: 'Простота реализации, широкий диапазон частот.',
    disadvantages: 'Может потребовать точной настройки.',
    application: 'Радиочастотные устройства, генерация сигналов.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    complexity: 3,
    lifespan: 7,
    signalType: 'Синусоидальные',
    componentType: 'Электронные',
    frequencyRange: 'Широкий',
    mainFrequency: 'Средняя',
    frequencyStability: 'Средняя',
    amplitude: 'Средняя',
    bandwidth: 'Широкая',
    qFactor: 'Средний',
    materials: 'Индуктивности, конденсаторы'
  },
  {
    name: 'Осцилляторы RC цепи',
    description: 'Осцилляторы, использующие резисторы и конденсаторы для создания частоты.',
    advantages: 'Простота реализации, низкая стоимость.',
    disadvantages: 'Ограниченный диапазон частот.',
    application: 'Цифровые схемы, таймеры.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    complexity: 2,
    lifespan: 5,
    signalType: 'Прямоугольные',
    componentType: 'Электронные',
    frequencyRange: 'Низкий',
    mainFrequency: 'Низкая',
    frequencyStability: 'Средняя',
    amplitude: 'Средняя',
    bandwidth: 'Широкая',
    qFactor: 'Низкий',
    materials: 'Резисторы, конденсаторы'
  },
  {
    name: 'Осцилляторы Кварцевые',
    description: 'Осцилляторы, использующие пьезоэлектрические свойства кварца для создания стабильной частоты.',
    advantages: 'Очень высокая стабильность и точность.',
    disadvantages: 'Ограниченный диапазон частот, высокая стоимость.',
    application: 'Часы, радиочастотные устройства.',
    availability: 'Широко доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    complexity: 4,
    lifespan: 15,
    signalType: 'Синусоидальные',
    componentType: 'Электронные',
    frequencyRange: 'Средний',
    mainFrequency: 'Высокая',
    frequencyStability: 'Очень высокая',
    amplitude: 'Низкая',
    bandwidth: 'Узкая',
    qFactor: 'Высокий',
    materials: 'Кварцевые кристаллы'
  },
  {
    name: 'Осцилляторы Фазовые автоподстроечные (PLL)',
    description: 'Осцилляторы, использующие фазовые замыкания для автоматической настройки частоты.',
    advantages: 'Высокая точность, возможность автоматической настройки.',
    disadvantages: 'Может потребоваться дополнительное оборудование для настройки.',
    application: 'Телекоммуникации, радиоприемники.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    complexity: 5,
    lifespan: 10,
    signalType: 'Синусоидальные',
    componentType: 'Электронные',
    frequencyRange: 'Широкий',
    mainFrequency: 'Переменная',
    frequencyStability: 'Высокая',
    amplitude: 'Средняя',
    bandwidth: 'Широкая',
    qFactor: 'Средний',
    materials: 'Полупроводники, резисторы, конденсаторы'
  },
];

const OscillatorList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    setSortConfig({ key, direction });
  };

  const sortedData = [...oscillatorData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  return (
    <div>
      <h1>Типы осцилляторов</h1>
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
            <th onClick={() => handleSort('signalType')}>Тип генерируемого сигнала</th>
            <th onClick={() => handleSort('componentType')}>Тип используемых компонентов</th>
            <th onClick={() => handleSort('frequencyRange')}>Диапазон частот</th>
            <th onClick={() => handleSort('mainFrequency')}>Основная частота</th>
            <th onClick={() => handleSort('frequencyStability')}>Стабильность частоты</th>
            <th onClick={() => handleSort('amplitude')}>Амплитуда</th>
            <th onClick={() => handleSort('bandwidth')}>Ширина полосы пропускания</th>
            <th onClick={() => handleSort('qFactor')}>Добротность (Q-фактор)</th>
            <th onClick={() => handleSort('materials')}>Материалы изготовления</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((oscillator, index) => (
            <tr key={index}>
              <td>{oscillator.name}</td>
              <td>{oscillator.description}</td>
              <td>{oscillator.advantages}</td>
              <td>{oscillator.disadvantages}</td>
              <td>{oscillator.application}</td>
              <td>{oscillator.availability}</td>
              <td>{oscillator.quality}</td>
              <td>{oscillator.reliability}</td>
              <td>{oscillator.complexity}</td>
              <td>{oscillator.lifespan}</td>
              <td>{oscillator.signalType}</td>
              <td>{oscillator.componentType}</td>
              <td>{oscillator.frequencyRange}</td>
              <td>{oscillator.mainFrequency}</td>
              <td>{oscillator.frequencyStability}</td>
              <td>{oscillator.amplitude}</td>
              <td>{oscillator.bandwidth}</td>
              <td>{oscillator.qFactor}</td>
              <td>{oscillator.materials}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OscillatorList;
