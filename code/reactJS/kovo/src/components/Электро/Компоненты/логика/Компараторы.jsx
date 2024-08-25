import React, { useState } from 'react';

// Пример данных о компараторах
const comparatorData = [
  {
    name: 'Обычные компараторы',
    description: 'Компараторы для базовых операций сравнения сигналов.',
    advantages: ['Простота использования', 'Широкое применение'],
    disadvantages: ['Ограниченная скорость переключения', 'Средняя точность'],
    application: ['Аналоговые схемы', 'Основные логические операции'],
    availability: 5,
    qualityAndReliability: 4,
    manufacturingComplexity: 2,
    lifespanYears: 10,
    components: ['Резисторы', 'Конденсаторы', 'Транзисторы'],
    analogOrDigital: 'Аналог',
    switchingSpeed: 'Средняя',
    thresholdAccuracy: 'Средняя',
    inputOffset: 'Низкое',
    outputVoltage: 'Среднее',
    supplyVoltage: '5-15 В',
    currentConsumption: 'Низкое',
    hysteresisPresence: 'Нет',
  },
  {
    name: 'Компенсированные компараторы',
    description: 'Компараторы с улучшенными характеристиками компенсации.',
    advantages: ['Улучшенная точность', 'Стабильность работы'],
    disadvantages: ['Высокая стоимость', 'Сложность настройки'],
    application: ['Прецизионные измерения', 'Калибровочные системы'],
    availability: 4,
    qualityAndReliability: 5,
    manufacturingComplexity: 4,
    lifespanYears: 15,
    components: ['Специальные резисторы', 'Точные конденсаторы'],
    analogOrDigital: 'Аналог',
    switchingSpeed: 'Высокая',
    thresholdAccuracy: 'Высокая',
    inputOffset: 'Низкое',
    outputVoltage: 'Высокое',
    supplyVoltage: '5-20 В',
    currentConsumption: 'Среднее',
    hysteresisPresence: 'Да',
  },
  {
    name: 'Цифровые компараторы',
    description: 'Компараторы, работающие с цифровыми сигналами.',
    advantages: ['Высокая скорость переключения', 'Высокая точность'],
    disadvantages: ['Ограниченная работа с аналоговыми сигналами', 'Дорогие'],
    application: ['Цифровые системы', 'Процессорные схемы'],
    availability: 3,
    qualityAndReliability: 5,
    manufacturingComplexity: 4,
    lifespanYears: 12,
    components: ['Цифровые элементы', 'Микросхемы'],
    analogOrDigital: 'Цифровой',
    switchingSpeed: 'Очень высокая',
    thresholdAccuracy: 'Высокая',
    inputOffset: 'Низкое',
    outputVoltage: 'Высокое',
    supplyVoltage: '3.3-5 В',
    currentConsumption: 'Низкое',
    hysteresisPresence: 'Нет',
  },
  {
    name: 'Сравнительные пороговые компараторы',
    description: 'Компараторы, использующие пороговое значение для сравнения сигналов.',
    advantages: ['Высокая стабильность', 'Простота настройки'],
    disadvantages: ['Ограниченная скорость переключения', 'Необходимость в точной настройке'],
    application: ['Измерительные системы', 'Системы контроля сигналов'],
    availability: 4,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespanYears: 10,
    components: ['Резисторы', 'Конденсаторы'],
    analogOrDigital: 'Аналог',
    switchingSpeed: 'Средняя',
    thresholdAccuracy: 'Средняя',
    inputOffset: 'Среднее',
    outputVoltage: 'Среднее',
    supplyVoltage: '5-15 В',
    currentConsumption: 'Низкое',
    hysteresisPresence: 'Да',
  },
  {
    name: 'Широкополосные компараторы',
    description: 'Компараторы с широкой полосой пропускания для высокочастотных сигналов.',
    advantages: ['Высокая скорость переключения', 'Широкий диапазон частот'],
    disadvantages: ['Высокая стоимость', 'Сложность в настройке'],
    application: ['Высокочастотные схемы', 'Радиочастотные системы'],
    availability: 3,
    qualityAndReliability: 4,
    manufacturingComplexity: 5,
    lifespanYears: 12,
    components: ['Специальные полупроводники', 'Точные конденсаторы'],
    analogOrDigital: 'Аналог',
    switchingSpeed: 'Очень высокая',
    thresholdAccuracy: 'Средняя',
    inputOffset: 'Среднее',
    outputVoltage: 'Высокое',
    supplyVoltage: '5-12 В',
    currentConsumption: 'Среднее',
    hysteresisPresence: 'Нет',
  },
  {
    name: 'Шмидт-триггеры',
    description: 'Компараторы с гистерезисом для предотвращения дребезга сигнала.',
    advantages: ['Гистерезис предотвращает дребезг', 'Устойчивость к шуму'],
    disadvantages: ['Меньшая точность по сравнению с обычными компараторами', 'Меньшая скорость переключения'],
    application: ['Цифровые схемы', 'Системы обработки сигналов'],
    availability: 5,
    qualityAndReliability: 4,
    manufacturingComplexity: 2,
    lifespanYears: 8,
    components: ['Резисторы', 'Транзисторы'],
    analogOrDigital: 'Аналог',
    switchingSpeed: 'Средняя',
    thresholdAccuracy: 'Низкая',
    inputOffset: 'Низкое',
    outputVoltage: 'Среднее',
    supplyVoltage: '5-15 В',
    currentConsumption: 'Низкое',
    hysteresisPresence: 'Да',
  },
];

const ComparatorList = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedData = [...comparatorData].sort((a, b) => {
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
      <h1>Типы компараторов</h1>
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
            <th onClick={() => requestSort('analogOrDigital')}>Аналог/Цифра</th>
            <th onClick={() => requestSort('switchingSpeed')}>Скорость переключения</th>
            <th onClick={() => requestSort('thresholdAccuracy')}>Точность порога</th>
            <th onClick={() => requestSort('inputOffset')}>Входное смещение</th>
            <th onClick={() => requestSort('outputVoltage')}>Выходное напряжение</th>
            <th onClick={() => requestSort('supplyVoltage')}>Напряжение питания</th>
            <th onClick={() => requestSort('currentConsumption')}>Потребляемый ток</th>
            <th onClick={() => requestSort('hysteresisPresence')}>Гистерезис</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((comparator, index) => (
            <tr key={index}>
              <td>{comparator.name}</td>
              <td>{comparator.description}</td>
              <td>{comparator.advantages.join(', ')}</td>
              <td>{comparator.disadvantages.join(', ')}</td>
              <td>{comparator.application.join(', ')}</td>
              <td>{comparator.availability}</td>
              <td>{comparator.qualityAndReliability}</td>
              <td>{comparator.manufacturingComplexity}</td>
              <td>{comparator.lifespanYears}</td>
              <td>{comparator.components.join(', ')}</td>
              <td>{comparator.analogOrDigital}</td>
              <td>{comparator.switchingSpeed}</td>
              <td>{comparator.thresholdAccuracy}</td>
              <td>{comparator.inputOffset}</td>
              <td>{comparator.outputVoltage}</td>
              <td>{comparator.supplyVoltage}</td>
              <td>{comparator.currentConsumption}</td>
              <td>{comparator.hysteresisPresence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparatorList;
