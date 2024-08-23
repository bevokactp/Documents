import React, { useState } from 'react';

// Данные о магнетронах
const magnetronData = [
  {
    name: 'Турбинные магнетроны',
    description: 'Магнетроны с резонаторными камерами для генерации микроволн.',
    advantages: ['Высокая мощность', 'Долговечность'],
    disadvantages: ['Большие размеры', 'Высокая стоимость'],
    application: ['Микроволновые печи', 'Радары'],
    availability: 4,
    quality: 4,
    reliability: 4,
    manufacturingComplexity: 3,
    lifespanYears: 15,
    components: ['Металлы', 'Керамика'],
    frequencyRange: '1-10 GHz',
    radiationPower: '500 W',
    anodeVoltage: '2-3 kV',
    anodeCurrent: '10 A',
    switchingSpeed: '200 µs',
    gainCoefficient: '20 dB',
    operatingTemperature: '50-100°C',
    frequencyStability: 'Высокая',
    efficiency: '85%',
    size: 'Большой',
    shape: 'Цилиндрический',
  },
  {
    name: 'Супергетеродинные магнетроны',
    description: 'Магнетроны для супергетеродинных радиоприемников.',
    advantages: ['Высокая чувствительность', 'Низкий уровень шумов'],
    disadvantages: ['Сложность настройки', 'Высокая стоимость'],
    application: ['Радиолокация', 'Радиосвязь'],
    availability: 3,
    quality: 5,
    reliability: 4,
    manufacturingComplexity: 4,
    lifespanYears: 12,
    components: ['Стекло', 'Металл'],
    frequencyRange: '2-12 GHz',
    radiationPower: '300 W',
    anodeVoltage: '1.5-2.5 kV',
    anodeCurrent: '8 A',
    switchingSpeed: '150 µs',
    gainCoefficient: '15 dB',
    operatingTemperature: '30-80°C',
    frequencyStability: 'Очень высокая',
    efficiency: '80%',
    size: 'Средний',
    shape: 'Плоский',
  },
  {
    name: 'Магнетроны для радиолокации',
    description: 'Магнетроны, специально разработанные для радиолокационных систем.',
    advantages: ['Высокая мощность', 'Долговечность'],
    disadvantages: ['Высокая стоимость', 'Большие размеры'],
    application: ['Радиолокация', 'Системы управления движением'],
    availability: 2,
    quality: 4,
    reliability: 5,
    manufacturingComplexity: 3,
    lifespanYears: 20,
    components: ['Металлы', 'Керамика'],
    frequencyRange: '1-5 GHz',
    radiationPower: '1 kW',
    anodeVoltage: '3-4 kV',
    anodeCurrent: '12 A',
    switchingSpeed: '300 µs',
    gainCoefficient: '25 dB',
    operatingTemperature: '40-90°C',
    frequencyStability: 'Высокая',
    efficiency: '90%',
    size: 'Большой',
    shape: 'Цилиндрический',
  },
  {
    name: 'Микроволновые магнетроны',
    description: 'Магнетроны, используемые для генерации микроволн в бытовых и промышленных устройствах.',
    advantages: ['Компактные размеры', 'Высокая эффективность'],
    disadvantages: ['Ограниченная мощность', 'Сложность в обслуживании'],
    application: ['Микроволновые печи', 'Промышленные нагреватели'],
    availability: 5,
    quality: 4,
    reliability: 4,
    manufacturingComplexity: 2,
    lifespanYears: 10,
    components: ['Металлы', 'Пластики'],
    frequencyRange: '2.45 GHz',
    radiationPower: '1.5 kW',
    anodeVoltage: '1.2-2 kV',
    anodeCurrent: '7 A',
    switchingSpeed: '100 µs',
    gainCoefficient: '10 dB',
    operatingTemperature: '20-70°C',
    frequencyStability: 'Средняя',
    efficiency: '75%',
    size: 'Средний',
    shape: 'Компактный',
  },
  {
    name: 'Пулевые магнетроны',
    description: 'Магнетроны, предназначенные для работы в импульсном режиме.',
    advantages: ['Высокая пиковая мощность', 'Кратковременная работа'],
    disadvantages: ['Низкая средняя мощность', 'Необходима высокая частота импульсов'],
    application: ['Радарные системы', 'Системы электронной борьбы'],
    availability: 3,
    quality: 5,
    reliability: 4,
    manufacturingComplexity: 4,
    lifespanYears: 8,
    components: ['Металлы', 'Керамика'],
    frequencyRange: '1-10 GHz',
    radiationPower: '2 kW',
    anodeVoltage: '2-4 kV',
    anodeCurrent: '15 A',
    switchingSpeed: '50 µs',
    gainCoefficient: '30 dB',
    operatingTemperature: '30-85°C',
    frequencyStability: 'Очень высокая',
    efficiency: '70%',
    size: 'Большой',
    shape: 'Цилиндрический',
  },
];

const sortData = (data, key, ascending) => {
  return [...data].sort((a, b) => {
    if (a[key] < b[key]) return ascending ? -1 : 1;
    if (a[key] > b[key]) return ascending ? 1 : -1;
    return 0;
  });
};

const MagnetronList = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [sortedData, setSortedData] = useState(magnetronData);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    setSortedData(sortData(magnetronData, key, direction === 'ascending'));
  };

  return (
    <div>
      <h1>Типы магнетронов</h1>
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
            <th onClick={() => requestSort('lifespanYears')}>Срок службы (лет)</th>
            <th onClick={() => requestSort('components')}>Компоненты для изготовления</th>
            <th onClick={() => requestSort('frequencyRange')}>Частотный диапазон</th>
            <th onClick={() => requestSort('radiationPower')}>Мощность излучения</th>
            <th onClick={() => requestSort('anodeVoltage')}>Напряжение анода</th>
            <th onClick={() => requestSort('anodeCurrent')}>Ток анода</th>
            <th onClick={() => requestSort('switchingSpeed')}>Скорость переключения</th>
            <th onClick={() => requestSort('gainCoefficient')}>Коэффициент усиления</th>
            <th onClick={() => requestSort('operatingTemperature')}>Рабочая температура</th>
            <th onClick={() => requestSort('frequencyStability')}>Стабильность частоты</th>
            <th onClick={() => requestSort('efficiency')}>Эффективность</th>
            <th onClick={() => requestSort('size')}>Размер</th>
            <th onClick={() => requestSort('shape')}>Форма</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((magnetron, index) => (
            <tr key={index}>
              <td>{magnetron.name}</td>
              <td>{magnetron.description}</td>
              <td>{magnetron.advantages.join(', ')}</td>
              <td>{magnetron.disadvantages.join(', ')}</td>
              <td>{magnetron.application.join(', ')}</td>
              <td>{magnetron.availability}</td>
              <td>{magnetron.quality}</td>
              <td>{magnetron.reliability}</td>
              <td>{magnetron.manufacturingComplexity}</td>
              <td>{magnetron.lifespanYears}</td>
              <td>{magnetron.components.join(', ')}</td>
              <td>{magnetron.frequencyRange}</td>
              <td>{magnetron.radiationPower}</td>
              <td>{magnetron.anodeVoltage}</td>
              <td>{magnetron.anodeCurrent}</td>
              <td>{magnetron.switchingSpeed}</td>
              <td>{magnetron.gainCoefficient}</td>
              <td>{magnetron.operatingTemperature}</td>
              <td>{magnetron.frequencyStability}</td>
              <td>{magnetron.efficiency}</td>
              <td>{magnetron.size}</td>
              <td>{magnetron.shape}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MagnetronList;
