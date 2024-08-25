import React, { useState } from 'react';

const counterData = [
  {
    name: 'Бинарный счётчик',
    description: 'Счётчик, который работает в двоичной системе счисления.',
    advantages: ['Простота реализации', 'Низкое потребление энергии'],
    disadvantages: ['Ограниченная точность', 'Сложности при работе с большими числами'],
    application: ['Электронные часы', 'Счетчики в цифровых устройствах'],
    availability: 5,
    quality: 4,
    reliability: 5,
    manufacturingComplexity: 2,
    lifespan: 10,
    components: ['Транзисторы', 'Резисторы', 'Кремниевые элементы'],
    countProcessType: 'Двоичный',
    countType: 'Универсальный',
    functionalPurpose: 'Общее назначение',
    triggerType: 'Синхронные',
    countingType: 'Циклический',
    numberOfDigits: 8,
    countSpeed: 'Высокая',
    maxCountValue: '255',
    synchronization: 'Синхронная',
    switchingDelay: 'Низкая',
    nominalVoltageCurrent: '5 В / 10 мА',
  },
  {
    name: 'Десятковый счётчик',
    description: 'Счётчик, который работает в десятичной системе счисления.',
    advantages: ['Хорошо подходит для человеческого восприятия', 'Четкое представление чисел'],
    disadvantages: ['Сложнее в реализации, чем бинарные счётчики'],
    application: ['Счётчики для счетных устройств', 'Электронные дисплеи'],
    availability: 4,
    quality: 4,
    reliability: 4,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['Транзисторы', 'Резисторы', 'Кремниевые элементы'],
    countProcessType: 'Десятичный',
    countType: 'Универсальный',
    functionalPurpose: 'Общее назначение',
    triggerType: 'Синхронные',
    countingType: 'Циклический',
    numberOfDigits: 4,
    countSpeed: 'Средняя',
    maxCountValue: '9999',
    synchronization: 'Синхронная',
    switchingDelay: 'Средняя',
    nominalVoltageCurrent: '5 В / 20 мА',
  },
  {
    name: 'С произвольным базисом',
    description: 'Счётчик, который может работать в произвольной системе счисления.',
    advantages: ['Гибкость в использовании', 'Адаптивность к различным системам счисления'],
    disadvantages: ['Сложность реализации', 'Высокие требования к точности'],
    application: ['Специализированные вычислительные устройства', 'Аналоговые и цифровые системы'],
    availability: 3,
    quality: 3,
    reliability: 3,
    manufacturingComplexity: 4,
    lifespan: 10,
    components: ['Транзисторы', 'Резисторы', 'Кремниевые элементы'],
    countProcessType: 'Произвольный',
    countType: 'Специализированный',
    functionalPurpose: 'Специализированное назначение',
    triggerType: 'Синхронные и асинхронные',
    countingType: 'Адаптивный',
    numberOfDigits: 16,
    countSpeed: 'Высокая',
    maxCountValue: '65535',
    synchronization: 'Гибридная',
    switchingDelay: 'Высокая',
    nominalVoltageCurrent: '12 В / 50 мА',
  },
];

const CounterList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...counterData];
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
  }, [sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы счётчиков</h1>
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
            <th onClick={() => requestSort('countProcessType')}>Тип счётного процесса</th>
            <th onClick={() => requestSort('countType')}>Тип счёта</th>
            <th onClick={() => requestSort('functionalPurpose')}>Функциональное назначение</th>
            <th onClick={() => requestSort('triggerType')}>Тип триггеров</th>
            <th onClick={() => requestSort('countingType')}>Тип подсчета</th>
            <th onClick={() => requestSort('numberOfDigits')}>Число разрядов</th>
            <th onClick={() => requestSort('countSpeed')}>Скорость счёта</th>
            <th onClick={() => requestSort('maxCountValue')}>Максимальное значение счёта</th>
            <th onClick={() => requestSort('countType')}>Тип счёта</th>
            <th onClick={() => requestSort('synchronization')}>Синхронизация</th>
            <th onClick={() => requestSort('switchingDelay')}>Время задержки переключения</th>
            <th onClick={() => requestSort('nominalVoltageCurrent')}>Номинальное напряжение и ток</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((counter, index) => (
            <tr key={index}>
              <td>{counter.name}</td>
              <td>{counter.description}</td>
              <td>{counter.advantages.join(', ')}</td>
              <td>{counter.disadvantages.join(', ')}</td>
              <td>{counter.application.join(', ')}</td>
              <td>{counter.availability}</td>
              <td>{counter.quality}</td>
              <td>{counter.reliability}</td>
              <td>{counter.manufacturingComplexity}</td>
              <td>{counter.lifespan}</td>
              <td>{counter.components.join(', ')}</td>
              <td>{counter.countProcessType}</td>
              <td>{counter.countType}</td>
              <td>{counter.functionalPurpose}</td>
              <td>{counter.triggerType}</td>
              <td>{counter.countingType}</td>
              <td>{counter.numberOfDigits}</td>
              <td>{counter.countSpeed}</td>
              <td>{counter.maxCountValue}</td>
              <td>{counter.countType}</td>
              <td>{counter.synchronization}</td>
              <td>{counter.switchingDelay}</td>
              <td>{counter.nominalVoltageCurrent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CounterList;
