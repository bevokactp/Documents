import React, { useState } from 'react';

const flipFlopData = [
  {
    name: 'RS-триггер',
    description: 'RS-триггер (Reset-Set) — это базовый триггер, который имеет два входа для установки и сброса состояния.',
    advantages: ['Простота реализации', 'Широкое применение'],
    disadvantages: ['Может иметь неопределенные состояния'],
    application: ['Память в цифровых системах', 'Счетчики'],
    availability: 5,
    quality: 5,
    reliability: 5,
    manufacturingComplexity: 1,
    lifespan: 10,
    components: ['Транзисторы', 'Резисторы'],
    signalType: 'Асинхронные',
    stateStorage: 'Ассиметричные',
    numInputs: 2,
    numOutputs: 1,
    clockType: 'Не требуется',
    switchingSpeed: 'Средняя',
    resetSetWithoutClock: true,
    currentConsumption: 'Низкая',
    operatingVoltage: '3-5 В',
    maxFrequency: '10 МГц',
  },
  {
    name: 'D-триггер',
    description: 'D-триггер (Data) захватывает входное состояние при изменении тактового сигнала и сохраняет его до следующего такта.',
    advantages: ['Простота использования', 'Хорошо подходит для хранения одного бита информации'],
    disadvantages: ['Меньшая гибкость по сравнению с более сложными триггерами'],
    application: ['Регистры', 'Память в цифровых системах'],
    availability: 5,
    quality: 5,
    reliability: 5,
    manufacturingComplexity: 2,
    lifespan: 10,
    components: ['Транзисторы', 'Резисторы'],
    signalType: 'Синхронные',
    stateStorage: 'Симметричные',
    numInputs: 1,
    numOutputs: 1,
    clockType: 'Положительное фронтальное',
    switchingSpeed: 'Высокая',
    resetSetWithoutClock: false,
    currentConsumption: 'Низкая',
    operatingVoltage: '3-5 В',
    maxFrequency: '20 МГц',
  },
  {
    name: 'JK-триггер',
    description: 'JK-триггер — это улучшенная версия RS-триггера, которая не имеет неопределенных состояний и может работать в режиме делителя частоты.',
    advantages: ['Отсутствие неопределенных состояний', 'Многофункциональность'],
    disadvantages: ['Сложность реализации по сравнению с RS и D-триггерами'],
    application: ['Счетчики', 'Делители частоты'],
    availability: 4,
    quality: 4,
    reliability: 4,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['Транзисторы', 'Резисторы'],
    signalType: 'Синхронные',
    stateStorage: 'Симметричные',
    numInputs: 2,
    numOutputs: 1,
    clockType: 'Положительное фронтальное',
    switchingSpeed: 'Высокая',
    resetSetWithoutClock: false,
    currentConsumption: 'Средняя',
    operatingVoltage: '3-5 В',
    maxFrequency: '15 МГц',
  },
  {
    name: 'T-триггер',
    description: 'T-триггер (Toggle) изменяет свое состояние при каждом поступлении тактового сигнала.',
    advantages: ['Простота реализации', 'Используется в счетчиках'],
    disadvantages: ['Меньшая гибкость в управлении состоянием'],
    application: ['Делители частоты', 'Счетчики'],
    availability: 5,
    quality: 5,
    reliability: 5,
    manufacturingComplexity: 2,
    lifespan: 10,
    components: ['Транзисторы', 'Резисторы'],
    signalType: 'Синхронные',
    stateStorage: 'Симметричные',
    numInputs: 1,
    numOutputs: 1,
    clockType: 'Положительное фронтальное',
    switchingSpeed: 'Средняя',
    resetSetWithoutClock: false,
    currentConsumption: 'Низкая',
    operatingVoltage: '3-5 В',
    maxFrequency: '10 МГц',
  },
  {
    name: 'D-триггер с асинхронными входами',
    description: 'D-триггер с асинхронными входами имеет дополнительные входы для установки и сброса состояния без учета тактового сигнала.',
    advantages: ['Гибкость управления состоянием', 'Удобство использования'],
    disadvantages: ['Сложность схемы'],
    application: ['Память в цифровых системах', 'Регистры'],
    availability: 4,
    quality: 4,
    reliability: 4,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['Транзисторы', 'Резисторы'],
    signalType: 'Синхронные и асинхронные',
    stateStorage: 'Симметричные',
    numInputs: 3,
    numOutputs: 1,
    clockType: 'Положительное фронтальное',
    switchingSpeed: 'Высокая',
    resetSetWithoutClock: true,
    currentConsumption: 'Средняя',
    operatingVoltage: '3-5 В',
    maxFrequency: '15 МГц',
  },
];

const FlipFlopList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...flipFlopData];
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
  }, [flipFlopData, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы триггеров</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Название</th>
            <th onClick={() => requestSort('description')}>Описание</th>
            <th onClick={() => requestSort('advantages')}>Преимущества</th>
            <th onClick={() => requestSort('disadvantages')}>Недостатки</th>
            <th onClick={() => requestSort('application')}>Применение</th>
            <th onClick={() => requestSort('availability')}>Доступность</th>
            <th onClick={() => requestSort('quality')}>Качество</th>
            <th onClick={() => requestSort('reliability')}>Надежность</th>
            <th onClick={() => requestSort('manufacturingComplexity')}>Сложность изготовления</th>
            <th onClick={() => requestSort('lifespan')}>Срок службы</th>
            <th onClick={() => requestSort('components')}>Компоненты изготовления</th>
            <th onClick={() => requestSort('signalType')}>По типу входных сигналов</th>
            <th onClick={() => requestSort('stateStorage')}>По способу хранения состояния</th>
            <th onClick={() => requestSort('numInputs')}>Число входов</th>
            <th onClick={() => requestSort('numOutputs')}>Число выходов</th>
            <th onClick={() => requestSort('clockType')}>Тип тактирования</th>
            <th onClick={() => requestSort('switchingSpeed')}>Скорость переключения</th>
            <th onClick={() => requestSort('resetSetWithoutClock')}>Сброс без тактового сигнала</th>
            <th onClick={() => requestSort('currentConsumption')}>Потребляемый ток</th>
            <th onClick={() => requestSort('operatingVoltage')}>Рабочее напряжение</th>
            <th onClick={() => requestSort('maxFrequency')}>Максимальная частота</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((flipFlop, index) => (
            <tr key={index}>
              <td>{flipFlop.name}</td>
              <td>{flipFlop.description}</td>
              <td>{flipFlop.advantages.join(', ')}</td>
              <td>{flipFlop.disadvantages.join(', ')}</td>
              <td>{flipFlop.application.join(', ')}</td>
              <td>{flipFlop.availability}</td>
              <td>{flipFlop.quality}</td>
              <td>{flipFlop.reliability}</td>
              <td>{flipFlop.manufacturingComplexity}</td>
              <td>{flipFlop.lifespan}</td>
              <td>{flipFlop.components.join(', ')}</td>
              <td>{flipFlop.signalType}</td>
              <td>{flipFlop.stateStorage}</td>
              <td>{flipFlop.numInputs}</td>
              <td>{flipFlop.numOutputs}</td>
              <td>{flipFlop.clockType}</td>
              <td>{flipFlop.switchingSpeed}</td>
              <td>{flipFlop.resetSetWithoutClock ? 'Да' : 'Нет'}</td>
              <td>{flipFlop.currentConsumption}</td>
              <td>{flipFlop.operatingVoltage}</td>
              <td>{flipFlop.maxFrequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlipFlopList;
