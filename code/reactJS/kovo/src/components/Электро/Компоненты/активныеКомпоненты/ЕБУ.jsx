import React, { useState } from 'react';

const ecuData = [
  {
    name: 'Bosh ECU 23710-EQ44A',
    description: 'Электронный блок управления для автомобилей Bosh.',
    advantages: ['Высокая производительность', 'Надежность'],
    disadvantages: ['Высокая стоимость', 'Сложность установки'],
    application: ['Автомобили Bosh', 'Автомобильная электроника'],
    availability: 4,
    qualityAndReliability: 5,
    manufacturingComplexity: 3,
    lifespanYears: 10,
    components: ['Процессор', 'Память', 'Интерфейсы'],
    interactionMethod: 'Централизованные ЭБУ',
    interfaceType: ['CAN-шина', 'LIN-шина'],
    coolingAndProtection: ['Встроенные системы охлаждения', 'Защита от влаги и пыли'],
    performance: 'Высокая',
    dataProcessingAbility: 'Высокая',
    energyCharacteristics: 'Среднее потребление',
    operatingTemperatureRange: '-20-80°C',
    size: 'Средний',
    shape: 'Прямоугольный',
    externalImpactResistance: 'Средняя',
    signalProcessingSpeed: 'Высокая',
  },
  {
    name: 'Bosh 21114-1411020-10',
    description: 'ЭБУ для моделей автомобилей Bosh.',
    advantages: ['Надежность', 'Долговечность'],
    disadvantages: ['Ограниченная совместимость', 'Сложность в ремонте'],
    application: ['Автомобили Bosh', 'Электроника для автомобилей'],
    availability: 3,
    qualityAndReliability: 4,
    manufacturingComplexity: 4,
    lifespanYears: 8,
    components: ['Процессор', 'Схемы'],
    interactionMethod: 'Распределенные ЭБУ',
    interfaceType: ['CAN-шина', 'OBD-II интерфейс'],
    coolingAndProtection: ['Защита от влаги и пыли'],
    performance: 'Средняя',
    dataProcessingAbility: 'Средняя',
    energyCharacteristics: 'Низкое потребление',
    operatingTemperatureRange: '-10-70°C',
    size: 'Компактный',
    shape: 'Кубический',
    externalImpactResistance: 'Высокая',
    signalProcessingSpeed: 'Средняя',
  },
  {
    name: 'ЭППХ 5003.3761',
    description: 'ЭБУ для специализированных применений.',
    advantages: ['Высокая устойчивость к внешним воздействиям', 'Многофункциональность'],
    disadvantages: ['Высокая цена', 'Сложная настройка'],
    application: ['Специализированные автомобили', 'Промышленные системы'],
    availability: 2,
    qualityAndReliability: 5,
    manufacturingComplexity: 5,
    lifespanYears: 12,
    components: ['Процессор', 'Оборудование для охлаждения'],
    interactionMethod: 'Централизованные ЭБУ',
    interfaceType: ['FlexRay-шина', 'Bluetooth'],
    coolingAndProtection: ['Встроенные системы охлаждения', 'IP-защита'],
    performance: 'Очень высокая',
    dataProcessingAbility: 'Очень высокая',
    energyCharacteristics: 'Среднее потребление',
    operatingTemperatureRange: '-30-90°C',
    size: 'Большой',
    shape: 'Разнообразные',
    externalImpactResistance: 'Очень высокая',
    signalProcessingSpeed: 'Очень высокая',
  },
];

const ECUList = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedData = [...ecuData].sort((a, b) => {
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
      <h1>Список ЭБУ</h1>
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
            <th onClick={() => requestSort('interactionMethod')}>Способ взаимодействия</th>
            <th onClick={() => requestSort('interfaceType')}>Тип интерфейсов</th>
            <th onClick={() => requestSort('coolingAndProtection')}>Способ охлаждения и защиты</th>
            <th onClick={() => requestSort('performance')}>Производительность</th>
            <th onClick={() => requestSort('dataProcessingAbility')}>Способность к обработке данных</th>
            <th onClick={() => requestSort('energyCharacteristics')}>Энергетические характеристики</th>
            <th onClick={() => requestSort('operatingTemperatureRange')}>Температурный диапазон работы</th>
            <th onClick={() => requestSort('size')}>Размер</th>
            <th onClick={() => requestSort('shape')}>Форма</th>
            <th onClick={() => requestSort('externalImpactResistance')}>Устойчивость к внешним воздействиям</th>
            <th onClick={() => requestSort('signalProcessingSpeed')}>Скорость обработки сигналов</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((ecu, index) => (
            <tr key={index}>
              <td>{ecu.name}</td>
              <td>{ecu.description}</td>
              <td>{ecu.advantages.join(', ')}</td>
              <td>{ecu.disadvantages.join(', ')}</td>
              <td>{ecu.application.join(', ')}</td>
              <td>{ecu.availability}</td>
              <td>{ecu.qualityAndReliability}</td>
              <td>{ecu.manufacturingComplexity}</td>
              <td>{ecu.lifespanYears}</td>
              <td>{ecu.components.join(', ')}</td>
              <td>{ecu.interactionMethod}</td>
              <td>{ecu.interfaceType.join(', ')}</td>
              <td>{ecu.coolingAndProtection.join(', ')}</td>
              <td>{ecu.performance}</td>
              <td>{ecu.dataProcessingAbility}</td>
              <td>{ecu.energyCharacteristics}</td>
              <td>{ecu.operatingTemperatureRange}</td>
              <td>{ecu.size}</td>
              <td>{ecu.shape}</td>
              <td>{ecu.externalImpactResistance}</td>
              <td>{ecu.signalProcessingSpeed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ECUList;
