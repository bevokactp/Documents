import React, { useState } from 'react';

// Пример данных об операционных усилителях
const amplifierData = [
  {
    name: 'LM358',
    description: 'Двухканальный операционный усилитель с низким потреблением тока.',
    advantages: ['Низкое потребление энергии', 'Широкий диапазон напряжений питания'],
    disadvantages: ['Низкая скорость нарастания', 'Ограниченная полоса пропускания'],
    application: ['Аналоговые схемы', 'Усилители сигналов'],
    availability: 4,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespanYears: 10,
    components: ['Семисторы', 'Резисторы', 'Конденсаторы'],
    inputType: 'Дифференциальный',
    noise: 'Низкий',
    speed: 'Средняя',
    powerConsumption: 'Низкое',
    transistors: 'NPN',
    accuracy: 'Средняя',
    gainLevel: 'Средний',
    gainCoefficient: '100',
    inputResistance: '1 МОм',
    outputResistance: '100 Ом',
    bandwidth: '1 МГц',
    slewRate: '0.5 В/мкс',
    gainControl: 'Нет',
  },
  {
    name: 'AD8099',
    description: 'Высокоскоростной операционный усилитель с низким шумом.',
    advantages: ['Высокая скорость нарастания', 'Низкий уровень шума'],
    disadvantages: ['Высокое потребление тока', 'Высокая стоимость'],
    application: ['Аналоговые усилители', 'Проекторы и системы видеонаблюдения'],
    availability: 3,
    qualityAndReliability: 5,
    manufacturingComplexity: 4,
    lifespanYears: 15,
    components: ['Полупроводники', 'Фильтры'],
    inputType: 'Дифференциальный',
    noise: 'Очень низкий',
    speed: 'Высокая',
    powerConsumption: 'Высокое',
    transistors: 'BJT',
    accuracy: 'Высокая',
    gainLevel: 'Высокий',
    gainCoefficient: '1000',
    inputResistance: '10 МОм',
    outputResistance: '10 Ом',
    bandwidth: '10 МГц',
    slewRate: '10 В/мкс',
    gainControl: 'Да',
  },
  {
    name: 'LM318',
    description: 'Операционный усилитель с высокой скоростью нарастания и широким диапазоном напряжений питания.',
    advantages: ['Высокая скорость нарастания', 'Широкий диапазон напряжений питания'],
    disadvantages: ['Относительно высокий уровень шума', 'Средняя точность'],
    application: ['Усилители сигналов', 'Фильтры'],
    availability: 5,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespanYears: 12,
    components: ['Полупроводники', 'Резисторы', 'Конденсаторы'],
    inputType: 'Дифференциальный',
    noise: 'Средний',
    speed: 'Высокая',
    powerConsumption: 'Среднее',
    transistors: 'NPN',
    accuracy: 'Средняя',
    gainLevel: 'Средний',
    gainCoefficient: '200',
    inputResistance: '5 МОм',
    outputResistance: '50 Ом',
    bandwidth: '5 МГц',
    slewRate: '2 В/мкс',
    gainControl: 'Нет',
  },
  {
    name: 'LM741',
    description: 'Стандартный операционный усилитель с универсальным применением.',
    advantages: ['Широкое применение', 'Низкая стоимость'],
    disadvantages: ['Ограниченная полоса пропускания', 'Низкая скорость нарастания'],
    application: ['Общие усилители', 'Аналоговые схемы'],
    availability: 5,
    qualityAndReliability: 3,
    manufacturingComplexity: 2,
    lifespanYears: 8,
    components: ['Резисторы', 'Конденсаторы'],
    inputType: 'Дифференциальный',
    noise: 'Средний',
    speed: 'Низкая',
    powerConsumption: 'Низкое',
    transistors: 'BJT',
    accuracy: 'Средняя',
    gainLevel: 'Средний',
    gainCoefficient: '50',
    inputResistance: '10 МОм',
    outputResistance: '10 Ом',
    bandwidth: '1 МГц',
    slewRate: '0.3 В/мкс',
    gainControl: 'Нет',
  },
  {
    name: 'LM324',
    description: 'Четырехканальный операционный усилитель с хорошим соотношением цена/качество.',
    advantages: ['Четыре усилителя в одном корпусе', 'Хорошая цена'],
    disadvantages: ['Ограниченная полоса пропускания', 'Средняя точность'],
    application: ['Аналоговые схемы', 'Усилители сигналов'],
    availability: 4,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespanYears: 10,
    components: ['Семисторы', 'Резисторы', 'Конденсаторы'],
    inputType: 'Дифференциальный',
    noise: 'Средний',
    speed: 'Средняя',
    powerConsumption: 'Среднее',
    transistors: 'NPN',
    accuracy: 'Средняя',
    gainLevel: 'Средний',
    gainCoefficient: '100',
    inputResistance: '10 МОм',
    outputResistance: '100 Ом',
    bandwidth: '1 МГц',
    slewRate: '1 В/мкс',
    gainControl: 'Нет',
  },
  {
    name: 'AD741',
    description: 'Операционный усилитель с высоким уровнем усиления и хорошей температурной стабильностью.',
    advantages: ['Высокий уровень усиления', 'Хорошая температурная стабильность'],
    disadvantages: ['Высокая стоимость', 'Низкая скорость нарастания'],
    application: ['Аналоговые усилители', 'Прецизионные измерения'],
    availability: 3,
    qualityAndReliability: 5,
    manufacturingComplexity: 4,
    lifespanYears: 15,
    components: ['Полупроводники', 'Резисторы'],
    inputType: 'Дифференциальный',
    noise: 'Низкий',
    speed: 'Средняя',
    powerConsumption: 'Низкое',
    transistors: 'BJT',
    accuracy: 'Высокая',
    gainLevel: 'Высокий',
    gainCoefficient: '500',
    inputResistance: '1 МОм',
    outputResistance: '10 Ом',
    bandwidth: '2 МГц',
    slewRate: '0.7 В/мкс',
    gainControl: 'Нет',
  },
];

const AmplifierList = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedData = [...amplifierData].sort((a, b) => {
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
      <h1>Операционные усилители</h1>
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
            <th onClick={() => requestSort('inputType')}>Тип входа</th>
            <th onClick={() => requestSort('noise')}>Шум</th>
            <th onClick={() => requestSort('speed')}>Скорость</th>
            <th onClick={() => requestSort('powerConsumption')}>Токопотребление</th>
            <th onClick={() => requestSort('transistors')}>Транзисторы</th>
            <th onClick={() => requestSort('accuracy')}>Точность</th>
            <th onClick={() => requestSort('gainLevel')}>Уровень усиления</th>
            <th onClick={() => requestSort('gainCoefficient')}>Коэффициент усиления</th>
            <th onClick={() => requestSort('inputResistance')}>Входное сопротивление</th>
            <th onClick={() => requestSort('outputResistance')}>Выходное сопротивление</th>
            <th onClick={() => requestSort('bandwidth')}>Полоса пропускания</th>
            <th onClick={() => requestSort('slewRate')}>Скорость нарастания</th>
            <th onClick={() => requestSort('gainControl')}>Регуляция темпа усиления</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((amplifier, index) => (
            <tr key={index}>
              <td>{amplifier.name}</td>
              <td>{amplifier.description}</td>
              <td>{amplifier.advantages.join(', ')}</td>
              <td>{amplifier.disadvantages.join(', ')}</td>
              <td>{amplifier.application.join(', ')}</td>
              <td>{amplifier.availability}</td>
              <td>{amplifier.qualityAndReliability}</td>
              <td>{amplifier.manufacturingComplexity}</td>
              <td>{amplifier.lifespanYears}</td>
              <td>{amplifier.components.join(', ')}</td>
              <td>{amplifier.inputType}</td>
              <td>{amplifier.noise}</td>
              <td>{amplifier.speed}</td>
              <td>{amplifier.powerConsumption}</td>
              <td>{amplifier.transistors}</td>
              <td>{amplifier.accuracy}</td>
              <td>{amplifier.gainLevel}</td>
              <td>{amplifier.gainCoefficient}</td>
              <td>{amplifier.inputResistance}</td>
              <td>{amplifier.outputResistance}</td>
              <td>{amplifier.bandwidth}</td>
              <td>{amplifier.slewRate}</td>
              <td>{amplifier.gainControl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AmplifierList;
