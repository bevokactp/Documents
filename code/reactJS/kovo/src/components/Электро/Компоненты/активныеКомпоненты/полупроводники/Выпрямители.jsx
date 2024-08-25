import React, { useState } from 'react';

// Данные о выпрямительных схемах
const rectifierData = [
  {
    name: 'Полупериодный выпрямитель',
    description: 'Выпрямительная схема, использующая один диод для пропускания только одной полуволны переменного тока.',
    advantages: ['Простота конструкции', 'Недорогой'],
    disadvantages: ['Низкая эффективность', 'Высокие пульсации'],
    application: ['Простые источники питания', 'Небольшие электрические устройства'],
    availability: 5,
    qualityReliability: 3,
    manufacturingComplexity: 2,
    lifespan: 10,
    manufacturingComponents: ['Диод'],
    phaseCount: 1,
    constructionType: 'Собранные (из дискретных компонентов)',
    rectificationVoltage: 'Зависит от диода',
    maxCurrent: 'Зависит от диода',
    voltageDrop: 'Зависит от диода',
    temperatureRange: '-20°C до 70°C',
    inputFrequency: '50/60 Hz',
    power: 'Н/Д',
  },
  {
    name: 'Полупериодный выпрямитель с центром обмотки',
    description: 'Схема выпрямителя с двумя диодами и трансформатором с центром обмотки для выпрямления обеих полуволн.',
    advantages: ['Лучшая выпрямленная форма сигнала', 'Использует трансформатор с центром обмотки'],
    disadvantages: ['Сложность в реализации', 'Необходим трансформатор с центром обмотки'],
    application: ['Источник питания с лучшей выпрямленной формой сигнала', 'Устройства с низким током'],
    availability: 4,
    qualityReliability: 4,
    manufacturingComplexity: 4,
    lifespan: 15,
    manufacturingComponents: ['Диоды', 'Трансформатор'],
    phaseCount: 1,
    constructionType: 'Собранные (из дискретных компонентов)',
    rectificationVoltage: 'Зависит от трансформатора',
    maxCurrent: 'Зависит от диодов и трансформатора',
    voltageDrop: 'Зависит от диодов',
    temperatureRange: '-20°C до 70°C',
    inputFrequency: '50/60 Hz',
    power: 'Н/Д',
  },
  {
    name: 'Мостовой выпрямитель',
    description: 'Выпрямительная схема, использующая четыре диода в мостовой конфигурации для преобразования AC в DC.',
    advantages: ['Полное выпрямление сигнала', 'Не требует центра трансформатора'],
    disadvantages: ['Потери на диодах', 'Может быть сложнее в реализации'],
    application: ['Питание постоянного тока', 'Выпрямление переменного тока'],
    availability: 5,
    qualityReliability: 4,
    manufacturingComplexity: 3,
    lifespan: 15,
    manufacturingComponents: ['Диоды'],
    phaseCount: 1,
    constructionType: 'Собранные (из дискретных компонентов)',
    rectificationVoltage: 'Зависит от диодов',
    maxCurrent: 'Зависит от диодов',
    voltageDrop: 'Зависит от диодов',
    temperatureRange: '-20°C до 70°C',
    inputFrequency: '50/60 Hz',
    power: 'Н/Д',
  },
  {
    name: 'Двойной выпрямитель',
    description: 'Схема выпрямителя, использующая два диода для выпрямления двух полуволн переменного тока.',
    advantages: ['Высокая эффективность выпрямления', 'Меньшие пульсации'],
    disadvantages: ['Сложнее в реализации по сравнению с полупериодным'],
    application: ['Электронные устройства', 'Источники питания'],
    availability: 4,
    qualityReliability: 4,
    manufacturingComplexity: 3,
    lifespan: 12,
    manufacturingComponents: ['Диоды'],
    phaseCount: 1,
    constructionType: 'Собранные (из дискретных компонентов)',
    rectificationVoltage: 'Зависит от диодов',
    maxCurrent: 'Зависит от диодов',
    voltageDrop: 'Зависит от диодов',
    temperatureRange: '-20°C до 70°C',
    inputFrequency: '50/60 Hz',
    power: 'Н/Д',
  },
  {
    name: 'Выпрямитель с фильтром',
    description: 'Схема выпрямителя с добавлением фильтров для сглаживания пульсаций.',
    advantages: ['Сглаживание пульсаций', 'Улучшение качества выпрямленного сигнала'],
    disadvantages: ['Увеличение размеров и стоимости', 'Сложность в реализации'],
    application: ['Электронные устройства', 'Системы питания'],
    availability: 4,
    qualityReliability: 5,
    manufacturingComplexity: 4,
    lifespan: 15,
    manufacturingComponents: ['Диоды', 'Фильтры'],
    phaseCount: 1,
    constructionType: 'Собранные (из дискретных компонентов)',
    rectificationVoltage: 'Зависит от диодов',
    maxCurrent: 'Зависит от диодов и фильтров',
    voltageDrop: 'Зависит от диодов',
    temperatureRange: '-20°C до 70°C',
    inputFrequency: '50/60 Hz',
    power: 'Н/Д',
  },
  {
    name: 'Выпрямитель с катушкой индуктивности',
    description: 'Выпрямительная схема с катушкой индуктивности для сглаживания пульсаций.',
    advantages: ['Эффективное сглаживание пульсаций', 'Подходит для источников питания'],
    disadvantages: ['Большие размеры', 'Высокие затраты на компоненты'],
    application: ['Источники питания', 'Энергетические системы'],
    availability: 3,
    qualityReliability: 4,
    manufacturingComplexity: 4,
    lifespan: 15,
    manufacturingComponents: ['Диоды', 'Катушка индуктивности'],
    phaseCount: 1,
    constructionType: 'Собранные (из дискретных компонентов)',
    rectificationVoltage: 'Зависит от диодов',
    maxCurrent: 'Зависит от диодов и катушки индуктивности',
    voltageDrop: 'Зависит от диодов',
    temperatureRange: '-20°C до 70°C',
    inputFrequency: '50/60 Hz',
    power: 'Н/Д',
  },
  {
    name: 'Выпрямитель с управляемыми диодами',
    description: 'Схема выпрямителя, использующая управляемые диоды для контроля выпрямленного сигнала.',
    advantages: ['Управляемость выходным сигналом', 'Высокая гибкость'],
    disadvantages: ['Сложность управления', 'Высокая стоимость компонентов'],
    application: ['Регулируемые источники питания', 'Прецизионные системы'],
    availability: 3,
    qualityReliability: 4,
    manufacturingComplexity: 5,
    lifespan: 10,
    manufacturingComponents: ['Управляемые диоды', 'Контроллеры'],
    phaseCount: 1,
    constructionType: 'Собранные (из дискретных компонентов)',
    rectificationVoltage: 'Зависит от управляемых диодов',
    maxCurrent: 'Зависит от управляемых диодов',
    voltageDrop: 'Зависит от управляемых диодов',
    temperatureRange: '-20°C до 70°C',
    inputFrequency: '50/60 Hz',
    power: 'Н/Д',
  },
  {
    name: 'Выпрямитель с флуктуациями',
    description: 'Схема выпрямителя с дополнительными компонентами для минимизации флуктуаций выходного сигнала.',
    advantages: ['Минимизация флуктуаций', 'Сглаживание выходного сигнала'],
    disadvantages: ['Высокая стоимость компонентов', 'Сложность в настройке'],
    application: ['Прецизионные системы', 'Электронные устройства'],
    availability: 3,
    qualityReliability: 5,
    manufacturingComplexity: 5,
    lifespan: 12,
    manufacturingComponents: ['Диоды', 'Фильтры', 'Регуляторы'],
    phaseCount: 1,
    constructionType: 'Собранные (из дискретных компонентов)',
    rectificationVoltage: 'Зависит от компонентов',
    maxCurrent: 'Зависит от компонентов',
    voltageDrop: 'Зависит от компонентов',
    temperatureRange: '-20°C до 70°C',
    inputFrequency: '50/60 Hz',
    power: 'Н/Д',
  },
  {
    name: 'Выпрямитель с синхронизацией',
    description: 'Выпрямительная схема с функцией синхронизации для обеспечения стабильного выходного сигнала.',
    advantages: ['Стабильный выходной сигнал', 'Высокая точность'],
    disadvantages: ['Высокая стоимость', 'Сложность в реализации'],
    application: ['Высокоточные источники питания', 'Специальные электронные устройства'],
    availability: 3,
    qualityReliability: 5,
    manufacturingComplexity: 5,
    lifespan: 15,
    manufacturingComponents: ['Диоды', 'Синхронизаторы'],
    phaseCount: 1,
    constructionType: 'Собранные (из дискретных компонентов)',
    rectificationVoltage: 'Зависит от компонентов',
    maxCurrent: 'Зависит от компонентов',
    voltageDrop: 'Зависит от компонентов',
    temperatureRange: '-20°C до 70°C',
    inputFrequency: '50/60 Hz',
    power: 'Н/Д',
  },
];

const RectifierList = () => {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

  // Функция для сортировки данных
  const sortedData = React.useMemo(() => {
    let sortableItems = [...rectifierData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [rectifierData, sortConfig]);

  // Функция для обработки кликов на заголовках столбцов
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы выпрямительных схем</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Название</th>
            <th onClick={() => requestSort('description')}>Описание</th>
            <th onClick={() => requestSort('advantages')}>Преимущества</th>
            <th onClick={() => requestSort('disadvantages')}>Недостатки</th>
            <th onClick={() => requestSort('application')}>Применение</th>
            <th onClick={() => requestSort('availability')}>Доступность</th>
            <th onClick={() => requestSort('qualityReliability')}>Качество и надежность</th>
            <th onClick={() => requestSort('manufacturingComplexity')}>Сложность изготовления</th>
            <th onClick={() => requestSort('lifespan')}>Срок службы (лет)</th>
            <th onClick={() => requestSort('manufacturingComponents')}>Компоненты изготовления</th>
            <th onClick={() => requestSort('phaseCount')}>Фазность</th>
            <th onClick={() => requestSort('constructionType')}>Конструктивное исполнение</th>
            <th onClick={() => requestSort('rectificationVoltage')}>Напряжение выпрямления</th>
            <th onClick={() => requestSort('maxCurrent')}>Максимальный ток</th>
            <th onClick={() => requestSort('voltageDrop')}>Падение напряжения</th>
            <th onClick={() => requestSort('temperatureRange')}>Температурный диапазон</th>
            <th onClick={() => requestSort('inputFrequency')}>Частота входного сигнала</th>
            <th onClick={() => requestSort('power')}>Мощность</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((rectifier, index) => (
            <tr key={index}>
              <td>{rectifier.name}</td>
              <td>{rectifier.description}</td>
              <td>{rectifier.advantages.join(', ')}</td>
              <td>{rectifier.disadvantages.join(', ')}</td>
              <td>{rectifier.application.join(', ')}</td>
              <td>{rectifier.availability}</td>
              <td>{rectifier.qualityReliability}</td>
              <td>{rectifier.manufacturingComplexity}</td>
              <td>{rectifier.lifespan}</td>
              <td>{rectifier.manufacturingComponents.join(', ')}</td>
              <td>{rectifier.phaseCount}</td>
              <td>{rectifier.constructionType}</td>
              <td>{rectifier.rectificationVoltage}</td>
              <td>{rectifier.maxCurrent}</td>
              <td>{rectifier.voltageDrop}</td>
              <td>{rectifier.temperatureRange}</td>
              <td>{rectifier.inputFrequency}</td>
              <td>{rectifier.power}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RectifierList;
