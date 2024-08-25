import React, { useState } from 'react';


const ignitronData = [
	{
	  name: 'Мощностные игнитроны',
	  description: 'Игнитроны для управления мощными токами.',
	  advantages: ['Высокая мощность', 'Долговечность'],
	  disadvantages: ['Большие размеры', 'Высокая стоимость'],
	  application: ['Энергетика', 'Промышленность'],
	  availability: 4,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 3,
	  lifespanYears: 15,
	  materials: ['Металлы', 'Газ'],
	  ignitionVoltage: '1-2 kV',
	  electrodeCount: 2,
	  current: '10 A',
	  switchingSpeed: '500 µs',
	  stability: 'Высокая',
	  operatingVoltage: '1 kV',
	},
	{
	  name: 'Сигнальные игнитроны',
	  description: 'Игнитроны для генерации сигналов.',
	  advantages: ['Низкая стоимость', 'Удобство использования'],
	  disadvantages: ['Меньшая мощность', 'Меньший срок службы'],
	  application: ['Радиосвязь', 'Сигнализация'],
	  availability: 5,
	  quality: 3,
	  reliability: 3,
	  manufacturingComplexity: 2,
	  lifespanYears: 10,
	  materials: ['Стекло', 'Металл'],
	  ignitionVoltage: '0.5-1 kV',
	  electrodeCount: 2,
	  current: '5 A',
	  switchingSpeed: '200 µs',
	  stability: 'Средняя',
	  operatingVoltage: '0.5 kV',
	},
	{
	  name: 'Кварцевые игнитроны',
	  description: 'Игнитроны для высокочастотных приложений с высокой частотной стабильностью.',
	  advantages: ['Высокая частотная стабильность', 'Низкие потери'],
	  disadvantages: ['Высокая стоимость', 'Сложность в производстве'],
	  application: ['Радиолокация', 'Радиочастотные нагревательные установки'],
	  availability: 3,
	  quality: 5,
	  reliability: 4,
	  manufacturingComplexity: 4,
	  lifespanYears: 20,
	  materials: ['Кварц', 'Металлы'],
	  ignitionVoltage: '1-3 kV',
	  electrodeCount: 2,
	  current: '8 A',
	  switchingSpeed: '300 µs',
	  stability: 'Очень высокая',
	  operatingVoltage: '1.5 kV',
	},
	{
	  name: 'Ртутные игнитроны',
	  description: 'Игнитроны, использующие ртуть в качестве рабочего вещества.',
	  advantages: ['Высокая надежность', 'Долговечность'],
	  disadvantages: ['Токсичность ртути', 'Сложность утилизации'],
	  application: ['Телекоммуникации', 'Энергетика'],
	  availability: 2,
	  quality: 4,
	  reliability: 5,
	  manufacturingComplexity: 3,
	  lifespanYears: 12,
	  materials: ['Ртуть', 'Стекло'],
	  ignitionVoltage: '0.8-1.5 kV',
	  electrodeCount: 2,
	  current: '12 A',
	  switchingSpeed: '400 µs',
	  stability: 'Высокая',
	  operatingVoltage: '1 kV',
	},
	{
	  name: 'Микроволновые игнитроны',
	  description: 'Игнитроны, специально разработанные для генерации микроволн.',
	  advantages: ['Высокая эффективность', 'Компактные размеры'],
	  disadvantages: ['Высокая стоимость', 'Ограниченная мощность'],
	  application: ['Микроволновые печи', 'Радиолокация'],
	  availability: 4,
	  quality: 5,
	  reliability: 4,
	  manufacturingComplexity: 5,
	  lifespanYears: 8,
	  materials: ['Металлы', 'Керамика'],
	  ignitionVoltage: '2-4 kV',
	  electrodeCount: 2,
	  current: '7 A',
	  switchingSpeed: '150 µs',
	  stability: 'Очень высокая',
	  operatingVoltage: '2.5 kV',
	},
  ];

const BatteryList = () => {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = React.useMemo(() => {
    let sortableItems = [...ignitronData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        const { key, direction } = sortConfig;
        if (a[key] < b[key]) {
          return direction === 'ascending' ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [ignitronData, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы игнитронов</h1>
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
            <th onClick={() => requestSort('materials')}>Материалы изготовления</th>
            <th onClick={() => requestSort('ignitionVoltage')}>Напряжение зажигания</th>
            <th onClick={() => requestSort('electrodeCount')}>Количество электродов</th>
            <th onClick={() => requestSort('current')}>Ток</th>
            <th onClick={() => requestSort('switchingSpeed')}>Скорость переключения</th>
            <th onClick={() => requestSort('stability')}>Стабильность</th>
            <th onClick={() => requestSort('operatingVoltage')}>Рабочее напряжение</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((ignitron, index) => (
            <tr key={index}>
              <td>{ignitron.name}</td>
              <td>{ignitron.description}</td>
              <td>{ignitron.advantages.join(', ')}</td>
              <td>{ignitron.disadvantages.join(', ')}</td>
              <td>{ignitron.application.join(', ')}</td>
              <td>{ignitron.availability}</td>
              <td>{ignitron.quality}</td>
              <td>{ignitron.reliability}</td>
              <td>{ignitron.manufacturingComplexity}</td>
              <td>{ignitron.lifespanYears}</td>
              <td>{ignitron.materials.join(', ')}</td>
              <td>{ignitron.ignitionVoltage}</td>
              <td>{ignitron.electrodeCount}</td>
              <td>{ignitron.current}</td>
              <td>{ignitron.switchingSpeed}</td>
              <td>{ignitron.stability}</td>
              <td>{ignitron.operatingVoltage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BatteryList;
