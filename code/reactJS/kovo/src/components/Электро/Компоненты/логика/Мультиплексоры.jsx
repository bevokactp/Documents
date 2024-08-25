import React, { useState } from 'react';

const componentData = [
  {
    name: '74HC4051',
    description: '8-канальный мультиплексор/демультиплексор.',
    advantages: ['Низкое энергопотребление', 'Высокая скорость переключения'],
    disadvantages: ['Ограниченное количество каналов', 'Чувствительность к помехам'],
    application: ['Аналоговые и цифровые мультиплексоры'],
    availability: 4,
    quality: 4,
    reliability: 4,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['Полупроводниковые элементы', 'Конденсаторы'],
    controlType: 'Цифровой',
    structure: 'Мультиплексор',
    implementationMethod: 'IC',
    numberOfInputs: 8,
    numberOfOutputs: 1,
    operatingMode: 'Мультиплексирование',
    switchingTime: '50ns',
    selectionRatio: '1:8',
    powerConsumption: 'Low'
  },
  {
    name: '74HC4067',
    description: '16-канальный мультиплексор/демультиплексор.',
    advantages: ['Большое количество каналов', 'Низкое энергопотребление'],
    disadvantages: ['Более сложная схема', 'Более высокая стоимость'],
    application: ['Мультиплексоры для аналоговых сигналов'],
    availability: 4,
    quality: 5,
    reliability: 4,
    manufacturingComplexity: 4,
    lifespan: 8,
    components: ['Полупроводниковые элементы', 'Конденсаторы'],
    controlType: 'Цифровой',
    structure: 'Мультиплексор',
    implementationMethod: 'IC',
    numberOfInputs: 16,
    numberOfOutputs: 1,
    operatingMode: 'Мультиплексирование',
    switchingTime: '70ns',
    selectionRatio: '1:16',
    powerConsumption: 'Low'
  },
  {
    name: 'CD4051',
    description: '8-канальный мультиплексор/демультиплексор с низким потреблением энергии.',
    advantages: ['Низкое потребление энергии', 'Высокая надежность'],
    disadvantages: ['Ограниченное количество каналов', 'Ограниченные характеристики скорости'],
    application: ['Аналоговые мультиплексоры'],
    availability: 3,
    quality: 4,
    reliability: 5,
    manufacturingComplexity: 3,
    lifespan: 12,
    components: ['Полупроводниковые элементы', 'Резисторы'],
    controlType: 'Аналоговый',
    structure: 'Мультиплексор',
    implementationMethod: 'IC',
    numberOfInputs: 8,
    numberOfOutputs: 1,
    operatingMode: 'Мультиплексирование',
    switchingTime: '100ns',
    selectionRatio: '1:8',
    powerConsumption: 'Low'
  },
  {
    name: '74LS151',
    description: '8-канальный мультиплексор с функцией логического элемента.',
    advantages: ['Быстрая скорость переключения', 'Многофункциональность'],
    disadvantages: ['Большое энергопотребление', 'Высокая стоимость'],
    application: ['Мультиплексоры и логические элементы'],
    availability: 4,
    quality: 4,
    reliability: 3,
    manufacturingComplexity: 3,
    lifespan: 8,
    components: ['Полупроводниковые элементы', 'Конденсаторы'],
    controlType: 'Цифровой',
    structure: 'Мультиплексор',
    implementationMethod: 'IC',
    numberOfInputs: 8,
    numberOfOutputs: 1,
    operatingMode: 'Мультиплексирование',
    switchingTime: '20ns',
    selectionRatio: '1:8',
    powerConsumption: 'High'
  },
  {
    name: 'MAX4617',
    description: '4-канальный аналоговый переключатель с низким сопротивлением.',
    advantages: ['Низкое сопротивление', 'Высокая скорость переключения'],
    disadvantages: ['Ограниченное количество каналов', 'Чувствительность к помехам'],
    application: ['Аналоговые переключатели'],
    availability: 5,
    quality: 5,
    reliability: 5,
    manufacturingComplexity: 4,
    lifespan: 10,
    components: ['Полупроводниковые элементы', 'Конденсаторы'],
    controlType: 'Аналоговый',
    structure: 'Переключатель',
    implementationMethod: 'IC',
    numberOfInputs: 4,
    numberOfOutputs: 4,
    operatingMode: 'Переключение',
    switchingTime: '10ns',
    selectionRatio: '1:4',
    powerConsumption: 'Low'
  }
];

const ComponentList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'availability', direction: 'ascending' });

  const sortedData = [...componentData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Компоненты</h1>
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
            <th onClick={() => requestSort('controlType')}>Тип управления</th>
            <th onClick={() => requestSort('structure')}>Структура</th>
            <th onClick={() => requestSort('implementationMethod')}>Способ реализации</th>
            <th onClick={() => requestSort('numberOfInputs')}>Число входов</th>
            <th onClick={() => requestSort('numberOfOutputs')}>Число выходов</th>
            <th onClick={() => requestSort('operatingMode')}>Режим работы</th>
            <th onClick={() => requestSort('switchingTime')}>Время переключения</th>
            <th onClick={() => requestSort('selectionRatio')}>Коэффициент отбора</th>
            <th onClick={() => requestSort('powerConsumption')}>Энергопотребление</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((component, index) => (
            <tr key={index}>
              <td>{component.name}</td>
              <td>{component.description}</td>
              <td>{component.advantages.join(', ')}</td>
              <td>{component.disadvantages.join(', ')}</td>
              <td>{component.application.join(', ')}</td>
              <td>{component.availability}</td>
              <td>{component.quality}</td>
              <td>{component.reliability}</td>
              <td>{component.manufacturingComplexity}</td>
              <td>{component.lifespan}</td>
              <td>{component.components.join(', ')}</td>
              <td>{component.controlType}</td>
              <td>{component.structure}</td>
              <td>{component.implementationMethod}</td>
              <td>{component.numberOfInputs}</td>
              <td>{component.numberOfOutputs}</td>
              <td>{component.operatingMode}</td>
              <td>{component.switchingTime}</td>
              <td>{component.selectionRatio}</td>
              <td>{component.powerConsumption}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComponentList;
