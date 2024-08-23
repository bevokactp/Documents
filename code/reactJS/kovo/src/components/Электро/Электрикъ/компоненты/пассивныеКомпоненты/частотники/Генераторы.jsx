import React, { useState } from 'react';


const generatorData = [
  {
    name: 'Генераторы LC',
    description: 'Генераторы, использующие индуктивности и конденсаторы для создания частоты.',
    advantages: ['Простота реализации', 'Широкий диапазон частот'],
    disadvantages: ['Может потребовать точной настройки'],
    application: ['Радиочастотные устройства', 'Генерация сигналов'],
    availability: 5, // 1 - труднодоступные, 5 - легко доступные
    qualityReliability: 4, // 1 - низкое, 5 - высокое
    complexity: 3,
    lifespan: 10,
    materials: ['Индуктивности', 'Конденсаторы'],
    signalTypes: ['Синусоидальные', 'Прямоугольные'],
    frequency: 'Переменная',
    frequencyRange: 'Широкий',
    frequencyStability: 'Средняя',
    mainFrequency: 'Средняя',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Широкий',
    accuracyResolution: 'Среднее',
    bandwidth: 'Широкая',
    qFactor: 'Средний',
  },
  {
    name: 'Генераторы RC',
    description: 'Генераторы, использующие резисторы и конденсаторы для создания частоты.',
    advantages: ['Простота реализации', 'Низкая стоимость'],
    disadvantages: ['Ограниченный диапазон частот'],
    application: ['Цифровые схемы', 'Таймеры'],
    availability: 4,
    qualityReliability: 3,
    complexity: 2,
    lifespan: 5,
    materials: ['Резисторы', 'Конденсаторы'],
    signalTypes: ['Прямоугольные'],
    frequency: 'Низкая',
    frequencyRange: 'Низкий',
    frequencyStability: 'Средняя',
    mainFrequency: 'Низкая',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Ограниченный',
    accuracyResolution: 'Среднее',
    bandwidth: 'Широкая',
    qFactor: 'Низкий',
  },
  {
    name: 'Генераторы Армстронга',
    description: 'Генераторы, использующие резонансный контур с усилителем обратной связи.',
    advantages: ['Стабильность частоты', 'Высокая надежность'],
    disadvantages: ['Сложность настройки'],
    application: ['Радиочастотные устройства', 'Передатчики'],
    availability: 3,
    qualityReliability: 4,
    complexity: 4,
    lifespan: 15,
    materials: ['Трансформаторы', 'Конденсаторы', 'Индуктивности'],
    signalTypes: ['Синусоидальные'],
    frequency: 'Высокая',
    frequencyRange: 'Широкий',
    frequencyStability: 'Высокая',
    mainFrequency: 'Высокая',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Широкий',
    accuracyResolution: 'Высокое',
    bandwidth: 'Средняя',
    qFactor: 'Высокий',
  },
  {
    name: 'Генераторы Блокинг',
    description: 'Генераторы, создающие импульсы с помощью блокировки в транзисторе.',
    advantages: ['Простота конструкции', 'Высокая частота'],
    disadvantages: ['Необходима точная настройка'],
    application: ['Импульсные схемы', 'Таймеры'],
    availability: 4,
    qualityReliability: 3,
    complexity: 3,
    lifespan: 7,
    materials: ['Транзисторы', 'Конденсаторы'],
    signalTypes: ['Импульсные'],
    frequency: 'Высокая',
    frequencyRange: 'Средний',
    frequencyStability: 'Средняя',
    mainFrequency: 'Высокая',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Средний',
    accuracyResolution: 'Среднее',
    bandwidth: 'Широкая',
    qFactor: 'Средний',
  },
  {
    name: 'Генераторы Вачкара',
    description: 'Генераторы, основанные на использовании катушек индуктивности и конденсаторов.',
    advantages: ['Надежность', 'Стабильность частоты'],
    disadvantages: ['Может требовать настройки'],
    application: ['Радиочастотные приложения', 'Микроволновые устройства'],
    availability: 3,
    qualityReliability: 4,
    complexity: 4,
    lifespan: 12,
    materials: ['Индуктивности', 'Конденсаторы'],
    signalTypes: ['Синусоидальные'],
    frequency: 'Средняя',
    frequencyRange: 'Широкий',
    frequencyStability: 'Высокая',
    mainFrequency: 'Средняя',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Широкий',
    accuracyResolution: 'Высокое',
    bandwidth: 'Средняя',
    qFactor: 'Высокий',
  },
  {
    name: 'Генераторы Волновой',
    description: 'Генераторы, создающие волновые сигналы с помощью резонаторов.',
    advantages: ['Широкий диапазон частот', 'Надежность'],
    disadvantages: ['Сложность настройки'],
    application: ['Радиочастотные устройства', 'Акустика'],
    availability: 4,
    qualityReliability: 4,
    complexity: 4,
    lifespan: 10,
    materials: ['Резонаторы', 'Конденсаторы'],
    signalTypes: ['Синусоидальные'],
    frequency: 'Переменная',
    frequencyRange: 'Широкий',
    frequencyStability: 'Высокая',
    mainFrequency: 'Средняя',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Широкий',
    accuracyResolution: 'Высокое',
    bandwidth: 'Широкая',
    qFactor: 'Высокий',
  },
  {
    name: 'Генераторы Кварцевый',
    description: 'Генераторы, использующие кварцевые кристаллы для стабилизации частоты.',
    advantages: ['Очень высокая стабильность частоты', 'Широкое применение'],
    disadvantages: ['Высокая стоимость', 'Ограниченные диапазоны частот'],
    application: ['Часы', 'Синхронизация'],
    availability: 5,
    qualityReliability: 5,
    complexity: 5,
    lifespan: 20,
    materials: ['Кварцевые кристаллы'],
    signalTypes: ['Синусоидальные'],
    frequency: 'Высокая',
    frequencyRange: 'Ограниченный',
    frequencyStability: 'Очень высокая',
    mainFrequency: 'Высокая',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Ограниченный',
    accuracyResolution: 'Высокое',
    bandwidth: 'Узкая',
    qFactor: 'Высокий',
  },
  {
    name: 'Генераторы Клаппа',
    description: 'Генераторы, использующие схемы с переключением для создания частоты.',
    advantages: ['Простота конструкции', 'Дешевизна'],
    disadvantages: ['Низкая стабильность'],
    application: ['Аналоговые устройства', 'Простые схемы'],
    availability: 4,
    qualityReliability: 3,
    complexity: 2,
    lifespan: 5,
    materials: ['Переключатели', 'Конденсаторы'],
    signalTypes: ['Импульсные'],
    frequency: 'Средняя',
    frequencyRange: 'Ограниченный',
    frequencyStability: 'Низкая',
    mainFrequency: 'Средняя',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Ограниченный',
    accuracyResolution: 'Среднее',
    bandwidth: 'Средняя',
    qFactor: 'Низкий',
  },
  {
    name: 'Генераторы Колпитца',
    description: 'Генераторы, использующие контур Колпитца для создания устойчивых частот.',
    advantages: ['Высокая стабильность', 'Простота'],
    disadvantages: ['Сложность настройки'],
    application: ['Радиочастотные схемы', 'Микроволновые устройства'],
    availability: 3,
    qualityReliability: 4,
    complexity: 3,
    lifespan: 10,
    materials: ['Индуктивности', 'Конденсаторы'],
    signalTypes: ['Синусоидальные'],
    frequency: 'Средняя',
    frequencyRange: 'Широкий',
    frequencyStability: 'Высокая',
    mainFrequency: 'Средняя',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Широкий',
    accuracyResolution: 'Высокое',
    bandwidth: 'Средняя',
    qFactor: 'Высокий',
  },
  {
    name: 'Генераторы Кольцевой',
    description: 'Генераторы, использующие кольцевые контуры для создания частоты.',
    advantages: ['Простота конструкции', 'Стабильность частоты'],
    disadvantages: ['Ограниченные диапазоны частот'],
    application: ['Радиочастотные устройства', 'Импульсные схемы'],
    availability: 3,
    qualityReliability: 4,
    complexity: 3,
    lifespan: 8,
    materials: ['Индуктивности', 'Конденсаторы'],
    signalTypes: ['Синусоидальные', 'Прямоугольные'],
    frequency: 'Переменная',
    frequencyRange: 'Средний',
    frequencyStability: 'Средняя',
    mainFrequency: 'Средняя',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Широкий',
    accuracyResolution: 'Среднее',
    bandwidth: 'Широкая',
    qFactor: 'Средний',
  },
  {
    name: 'Генераторы на туннельных диодах',
    description: 'Генераторы, использующие туннельные диоды для создания частоты.',
    advantages: ['Высокая частота', 'Широкий диапазон'],
    disadvantages: ['Сложность настройки', 'Ограниченная долговечность'],
    application: ['Радиочастотные схемы', 'Микроволновые устройства'],
    availability: 2,
    qualityReliability: 3,
    complexity: 4,
    lifespan: 5,
    materials: ['Туннельные диоды'],
    signalTypes: ['Синусоидальные'],
    frequency: 'Высокая',
    frequencyRange: 'Широкий',
    frequencyStability: 'Средняя',
    mainFrequency: 'Высокая',
    amplitude: 'Высокая',
    harmonicSpectrum: 'Широкий',
    accuracyResolution: 'Среднее',
    bandwidth: 'Широкая',
    qFactor: 'Средний',
  },
  {
    name: 'Генераторы Пирса',
    description: 'Генераторы, использующие контур Пирса для создания устойчивых частот.',
    advantages: ['Высокая стабильность частоты', 'Надежность'],
    disadvantages: ['Сложность настройки'],
    application: ['Радиочастотные устройства', 'Микроволновые устройства'],
    availability: 4,
    qualityReliability: 5,
    complexity: 4,
    lifespan: 12,
    materials: ['Индуктивности', 'Конденсаторы', 'Транзисторы'],
    signalTypes: ['Синусоидальные'],
    frequency: 'Средняя',
    frequencyRange: 'Широкий',
    frequencyStability: 'Высокая',
    mainFrequency: 'Средняя',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Широкий',
    accuracyResolution: 'Высокое',
    bandwidth: 'Средняя',
    qFactor: 'Высокий',
  },
  {
    name: 'Генераторы Релейные',
    description: 'Генераторы, использующие реле для создания импульсных сигналов.',
    advantages: ['Простота конструкции', 'Низкая стоимость'],
    disadvantages: ['Низкая частота', 'Механическая износостойкость'],
    application: ['Импульсные схемы', 'Контрольные устройства'],
    availability: 5,
    qualityReliability: 3,
    complexity: 2,
    lifespan: 7,
    materials: ['Реле', 'Конденсаторы'],
    signalTypes: ['Импульсные'],
    frequency: 'Низкая',
    frequencyRange: 'Ограниченный',
    frequencyStability: 'Низкая',
    mainFrequency: 'Низкая',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Ограниченный',
    accuracyResolution: 'Среднее',
    bandwidth: 'Узкая',
    qFactor: 'Низкий',
  },
  {
    name: 'Генераторы Тактовых Импульсов',
    description: 'Генераторы, создающие периодические импульсы для синхронизации.',
    advantages: ['Простота реализации', 'Высокая точность'],
    disadvantages: ['Ограниченный диапазон частот'],
    application: ['Синхронизация', 'Таймеры'],
    availability: 5,
    qualityReliability: 4,
    complexity: 2,
    lifespan: 8,
    materials: ['Транзисторы', 'Резисторы'],
    signalTypes: ['Импульсные'],
    frequency: 'Средняя',
    frequencyRange: 'Ограниченный',
    frequencyStability: 'Высокая',
    mainFrequency: 'Средняя',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Средний',
    accuracyResolution: 'Высокое',
    bandwidth: 'Средняя',
    qFactor: 'Средний',
  },
  {
    name: 'Генераторы Триггерные',
    description: 'Генераторы, использующие триггерные элементы для создания частотных сигналов.',
    advantages: ['Простота настройки', 'Надежность'],
    disadvantages: ['Может потребовать точной настройки'],
    application: ['Цифровые схемы', 'Импульсные устройства'],
    availability: 4,
    qualityReliability: 4,
    complexity: 3,
    lifespan: 6,
    materials: ['Триггерные элементы', 'Конденсаторы'],
    signalTypes: ['Прямоугольные'],
    frequency: 'Средняя',
    frequencyRange: 'Ограниченный',
    frequencyStability: 'Средняя',
    mainFrequency: 'Средняя',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Ограниченный',
    accuracyResolution: 'Среднее',
    bandwidth: 'Средняя',
    qFactor: 'Средний',
  },
  {
    name: 'Генераторы Хартли',
    description: 'Генераторы, использующие контур Хартли для генерации частоты.',
    advantages: ['Высокая стабильность частоты', 'Простота'],
    disadvantages: ['Ограниченный диапазон частот'],
    application: ['Радиочастотные устройства', 'Микроволновые схемы'],
    availability: 3,
    qualityReliability: 4,
    complexity: 3,
    lifespan: 10,
    materials: ['Индуктивности', 'Конденсаторы'],
    signalTypes: ['Синусоидальные'],
    frequency: 'Средняя',
    frequencyRange: 'Широкий',
    frequencyStability: 'Высокая',
    mainFrequency: 'Средняя',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Широкий',
    accuracyResolution: 'Высокое',
    bandwidth: 'Средняя',
    qFactor: 'Высокий',
  },
  {
    name: 'Гетеродин',
    description: 'Генераторы, использующие принцип гетеродинного смешивания частот.',
    advantages: ['Широкий диапазон частот', 'Высокая точность'],
    disadvantages: ['Сложность настройки', 'Влияние на стабильность'],
    application: ['Радиочастотные приемники', 'Измерительные приборы'],
    availability: 3,
    qualityReliability: 4,
    complexity: 4,
    lifespan: 10,
    materials: ['Смешивающие элементы', 'Конденсаторы'],
    signalTypes: ['Синусоидальные', 'Прямоугольные'],
    frequency: 'Высокая',
    frequencyRange: 'Широкий',
    frequencyStability: 'Средняя',
    mainFrequency: 'Высокая',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Широкий',
    accuracyResolution: 'Высокое',
    bandwidth: 'Широкая',
    qFactor: 'Средний',
  },
  {
    name: 'Мультивибратор',
    description: 'Генератор, создающий импульсы с помощью двух транзисторов.',
    advantages: ['Простота реализации', 'Низкая стоимость'],
    disadvantages: ['Ограниченный диапазон частот'],
    application: ['Импульсные схемы', 'Таймеры'],
    availability: 5,
    qualityReliability: 4,
    complexity: 2,
    lifespan: 6,
    materials: ['Транзисторы', 'Резисторы'],
    signalTypes: ['Импульсные'],
    frequency: 'Низкая',
    frequencyRange: 'Ограниченный',
    frequencyStability: 'Средняя',
    mainFrequency: 'Низкая',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Ограниченный',
    accuracyResolution: 'Среднее',
    bandwidth: 'Широкая',
    qFactor: 'Низкий',
  },
  {
    name: 'Частотные синтезаторы',
    description: 'Устройства, создающие различные частоты путем синтеза сигналов.',
    advantages: ['Гибкость в настройке частоты', 'Высокая точность'],
    disadvantages: ['Высокая стоимость', 'Сложность реализации'],
    application: ['Радио', 'Измерительные приборы'],
    availability: 3,
    qualityReliability: 5,
    complexity: 5,
    lifespan: 15,
    materials: ['Синтезирующие элементы', 'Частотные резонаторы'],
    signalTypes: ['Синусоидальные', 'Прямоугольные'],
    frequency: 'Переменная',
    frequencyRange: 'Широкий',
    frequencyStability: 'Высокая',
    mainFrequency: 'Переменная',
    amplitude: 'Средняя',
    harmonicSpectrum: 'Широкий',
    accuracyResolution: 'Высокое',
    bandwidth: 'Широкая',
    qFactor: 'Высокий',
  },
];


const GeneratorList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    setSortConfig({ key, direction });
  };

  const sortedData = [...generatorData].sort((a, b) => {
    if (typeof a[sortConfig.key] === 'number') {
      return sortConfig.direction === 'ascending' ? a[sortConfig.key] - b[sortConfig.key] : b[sortConfig.key] - a[sortConfig.key];
    }
    if (typeof a[sortConfig.key] === 'string') {
      return sortConfig.direction === 'ascending'
        ? a[sortConfig.key].localeCompare(b[sortConfig.key])
        : b[sortConfig.key].localeCompare(a[sortConfig.key]);
    }
    return 0;
  });

  return (
    <div>
      <h1>Типы генераторов</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Название</th>
            <th onClick={() => handleSort('description')}>Описание</th>
            <th onClick={() => handleSort('advantages')}>Преимущества</th>
            <th onClick={() => handleSort('disadvantages')}>Недостатки</th>
            <th onClick={() => handleSort('application')}>Применение</th>
            <th onClick={() => handleSort('availability')}>Доступность</th>
            <th onClick={() => handleSort('qualityReliability')}>Качество и надежность</th>
            <th onClick={() => handleSort('complexity')}>Сложность изготовления</th>
            <th onClick={() => handleSort('lifespan')}>Срок службы (лет)</th>
            <th onClick={() => handleSort('materials')}>Материалы изготовления</th>
            <th onClick={() => handleSort('signalTypes')}>Виды сигналов</th>
            <th onClick={() => handleSort('frequency')}>Частота</th>
            <th onClick={() => handleSort('frequencyRange')}>Диапазон частот</th>
            <th onClick={() => handleSort('frequencyStability')}>Стабильность частоты</th>
            <th onClick={() => handleSort('mainFrequency')}>Основная частота</th>
            <th onClick={() => handleSort('amplitude')}>Амплитуда</th>
            <th onClick={() => handleSort('harmonicSpectrum')}>Спектр гармоник</th>
            <th onClick={() => handleSort('accuracyResolution')}>Точность и разрешение</th>
            <th onClick={() => handleSort('bandwidth')}>Ширина полосы пропускания</th>
            <th onClick={() => handleSort('qFactor')}>Добротность (Q-фактор)</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((generator, index) => (
            <tr key={index}>
              <td>{generator.name}</td>
              <td>{generator.description}</td>
              <td>{generator.advantages.join(', ')}</td>
              <td>{generator.disadvantages.join(', ')}</td>
              <td>{generator.application.join(', ')}</td>
              <td>{generator.availability}</td>
              <td>{generator.qualityReliability}</td>
              <td>{generator.complexity}</td>
              <td>{generator.lifespan}</td>
              <td>{generator.materials.join(', ')}</td>
              <td>{generator.signalTypes.join(', ')}</td>
              <td>{generator.frequency}</td>
              <td>{generator.frequencyRange}</td>
              <td>{generator.frequencyStability}</td>
              <td>{generator.mainFrequency}</td>
              <td>{generator.amplitude}</td>
              <td>{generator.harmonicSpectrum}</td>
              <td>{generator.accuracyResolution}</td>
              <td>{generator.bandwidth}</td>
              <td>{generator.qFactor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GeneratorList;
