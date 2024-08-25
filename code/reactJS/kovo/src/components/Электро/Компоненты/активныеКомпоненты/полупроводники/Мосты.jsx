import React, { useState } from 'react';


const bridgeData = [
	{
	  name: 'Мост Уитстона',
	  description: 'Мостовая схема для точного измерения сопротивления.',
	  advantages: ['Высокая точность', 'Широкий диапазон измерений'],
	  disadvantages: ['Зависимость от точности резисторов', 'Сложность настройки'],
	  application: ['Измерения сопротивления', 'Калибровка'],
	  availability: 5,
	  qualityReliability: 5,
	  manufacturingComplexity: 3,
	  lifespan: 20,
	  manufacturingComponents: ['Резисторы', 'Калибраторы'],
	  phaseCount: 1,
	  rectificationScheme: 'Н/Д',
	  elementType: 'Н/Д',
	  controlMethod: 'Н/Д',
	  pulsationType: 'Н/Д',
	  power: 'Н/Д',
	  frequency: 'Н/Д',
	},
	{
	  name: 'Мостовой выпрямитель',
	  description: 'Схема для преобразования переменного тока в постоянный.',
	  advantages: ['Полное выпрямление сигнала', 'Не требует центра трансформатора'],
	  disadvantages: ['Потери на диодах', 'Может быть сложнее в реализации'],
	  application: ['Питание постоянного тока', 'Выпрямление переменного тока'],
	  availability: 5,
	  qualityReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 15,
	  manufacturingComponents: ['Диоды', 'Трансформаторы'],
	  phaseCount: 1,
	  rectificationScheme: 'Двухполупериодные',
	  elementType: 'Диодные выпрямители',
	  controlMethod: 'Неуправляемые выпрямители',
	  pulsationType: 'Пульсирующие выпрямители',
	  power: 'Зависит от диодов',
	  frequency: 'Зависит от применения',
	},
	{
	  name: 'Дифференциальный мост',
	  description: 'Мостовая схема для измерения небольших изменений сопротивления.',
	  advantages: ['Высокая точность измерений', 'Подходит для лабораторных исследований'],
	  disadvantages: ['Требуется тщательная калибровка', 'Высокая стоимость компонентов'],
	  application: ['Лабораторные измерения', 'Промышленные датчики'],
	  availability: 3,
	  qualityReliability: 5,
	  manufacturingComplexity: 4,
	  lifespan: 10,
	  manufacturingComponents: ['Резисторы', 'Измерительные приборы'],
	  phaseCount: 1,
	  rectificationScheme: 'Н/Д',
	  elementType: 'Н/Д',
	  controlMethod: 'Н/Д',
	  pulsationType: 'Н/Д',
	  power: 'Н/Д',
	  frequency: 'Н/Д',
	},
	{
	  name: 'Переносной мост',
	  description: 'Мостовая схема, используемая для измерения индуктивностей в лабораторных условиях.',
	  advantages: ['Компактные размеры', 'Высокая точность измерений'],
	  disadvantages: ['Ограниченная применимость', 'Чувствительность к внешним условиям'],
	  application: ['Измерение индуктивностей', 'Лабораторные тесты'],
	  availability: 4,
	  qualityReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 12,
	  manufacturingComponents: ['Индуктивности', 'Резисторы'],
	  phaseCount: 1,
	  rectificationScheme: 'Н/Д',
	  elementType: 'Н/Д',
	  controlMethod: 'Н/Д',
	  pulsationType: 'Н/Д',
	  power: 'Н/Д',
	  frequency: 'Н/Д',
	},
	{
	  name: 'Капаситивный мост',
	  description: 'Мостовая схема для точного измерения емкости.',
	  advantages: ['Высокая точность', 'Широкий диапазон емкостей'],
	  disadvantages: ['Зависимость от температуры', 'Сложность настройки'],
	  application: ['Измерение емкости конденсаторов', 'Электронные измерения'],
	  availability: 4,
	  qualityReliability: 5,
	  manufacturingComplexity: 4,
	  lifespan: 15,
	  manufacturingComponents: ['Конденсаторы', 'Резисторы'],
	  phaseCount: 1,
	  rectificationScheme: 'Н/Д',
	  elementType: 'Н/Д',
	  controlMethod: 'Н/Д',
	  pulsationType: 'Н/Д',
	  power: 'Н/Д',
	  frequency: 'Н/Д',
	},
	{
	  name: 'Индуктивный мост',
	  description: 'Мостовая схема для точного измерения индуктивности.',
	  advantages: ['Высокая точность', 'Подходит для высокочастотных приложений'],
	  disadvantages: ['Сложность калибровки', 'Чувствительность к помехам'],
	  application: ['Измерение индуктивности катушек', 'Лабораторные тесты'],
	  availability: 3,
	  qualityReliability: 4,
	  manufacturingComplexity: 5,
	  lifespan: 10,
	  manufacturingComponents: ['Индуктивности', 'Резисторы'],
	  phaseCount: 1,
	  rectificationScheme: 'Н/Д',
	  elementType: 'Н/Д',
	  controlMethod: 'Н/Д',
	  pulsationType: 'Н/Д',
	  power: 'Н/Д',
	  frequency: 'Н/Д',
	},
	{
	  name: 'Мост Зеера',
	  description: 'Мостовая схема для измерения индуктивности при низких частотах.',
	  advantages: ['Точная калибровка', 'Низкая чувствительность к частоте'],
	  disadvantages: ['Ограниченный диапазон частот', 'Сложность реализации'],
	  application: ['Измерения индуктивности', 'Радиочастотные приложения'],
	  availability: 3,
	  qualityReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 15,
	  manufacturingComponents: ['Индуктивности', 'Резисторы'],
	  phaseCount: 1,
	  rectificationScheme: 'Н/Д',
	  elementType: 'Н/Д',
	  controlMethod: 'Н/Д',
	  pulsationType: 'Н/Д',
	  power: 'Н/Д',
	  frequency: 'Н/Д',
	},
	{
	  name: 'Синхронный детекторный мост',
	  description: 'Мостовая схема для высокочастотного детектирования сигналов.',
	  advantages: ['Высокая скорость детектирования', 'Низкий уровень шума'],
	  disadvantages: ['Высокая стоимость', 'Сложность настройки'],
	  application: ['Высокочастотные радиосистемы', 'Оптические системы'],
	  availability: 2,
	  qualityReliability: 5,
	  manufacturingComplexity: 5,
	  lifespan: 10,
	  manufacturingComponents: ['Фотодетекторы', 'Синхронные детекторы'],
	  phaseCount: 1,
	  rectificationScheme: 'Н/Д',
	  elementType: 'Н/Д',
	  controlMethod: 'Н/Д',
	  pulsationType: 'Н/Д',
	  power: 'Н/Д',
	  frequency: 'Высокая',
	},
  ];


// Компонент списка мостовых схем
const BridgeList = () => {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

  // Функция для сортировки данных
  const sortedData = React.useMemo(() => {
    let sortableItems = [...bridgeData];
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
  }, [bridgeData, sortConfig]);

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
      <h1>Типы мостовых схем</h1>
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
            <th onClick={() => requestSort('phaseCount')}>Число фаз</th>
            <th onClick={() => requestSort('rectificationScheme')}>Схема выпрямления</th>
            <th onClick={() => requestSort('elementType')}>Тип элементов</th>
            <th onClick={() => requestSort('controlMethod')}>Способ управления</th>
            <th onClick={() => requestSort('pulsationType')}>Пульсации в выходном сигнале</th>
            <th onClick={() => requestSort('power')}>Мощность</th>
            <th onClick={() => requestSort('frequency')}>Частота</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((bridge, index) => (
            <tr key={index}>
              <td>{bridge.name}</td>
              <td>{bridge.description}</td>
              <td>{bridge.advantages.join(', ')}</td>
              <td>{bridge.disadvantages.join(', ')}</td>
              <td>{bridge.application.join(', ')}</td>
              <td>{bridge.availability}</td>
              <td>{bridge.qualityReliability}</td>
              <td>{bridge.manufacturingComplexity}</td>
              <td>{bridge.lifespan}</td>
              <td>{bridge.manufacturingComponents.join(', ')}</td>
              <td>{bridge.phaseCount}</td>
              <td>{bridge.rectificationScheme}</td>
              <td>{bridge.elementType}</td>
              <td>{bridge.controlMethod}</td>
              <td>{bridge.pulsationType}</td>
              <td>{bridge.power}</td>
              <td>{bridge.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BridgeList;
