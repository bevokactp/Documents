import React, { useState } from 'react';

const logicComponentsData = [
	{
	  name: 'OR',
	  description: 'Логический вентиль OR, выполняющий логическую операцию "Или".',
	  advantages: ['Простота реализации', 'Быстрая работа'],
	  disadvantages: ['Ограниченная функциональность'],
	  application: ['Цифровые схемы', 'Логические схемы'],
	  availability: 5,
	  quality: 5,
	  reliability: 5,
	  manufacturingComplexity: 1,
	  lifespan: 10,
	  components: ['Транзисторы', 'Резисторы'],
	  implementationType: 'Комбинаторное',
	  simpleOrComplex: 'Простые',
	  logicLevels: 'Высокий/Низкий',
	  switchingSpeed: 'Высокая',
	  powerConsumption: 'Низкая',
	  inputOutputResistance: 'Высокое',
	  supplyVoltage: '3-5 В',
	  numInputsOutputs: '2 входа/1 выход',
	},
	{
	  name: 'AND',
	  description: 'Логический вентиль AND, выполняющий логическую операцию "И".',
	  advantages: ['Широкое применение', 'Простота реализации'],
	  disadvantages: ['Меньшая гибкость по сравнению с более сложными вентилями'],
	  application: ['Цифровые схемы', 'Логические схемы'],
	  availability: 5,
	  quality: 5,
	  reliability: 5,
	  manufacturingComplexity: 1,
	  lifespan: 10,
	  components: ['Транзисторы', 'Резисторы'],
	  implementationType: 'Комбинаторное',
	  simpleOrComplex: 'Простые',
	  logicLevels: 'Высокий/Низкий',
	  switchingSpeed: 'Высокая',
	  powerConsumption: 'Низкая',
	  inputOutputResistance: 'Высокое',
	  supplyVoltage: '3-5 В',
	  numInputsOutputs: '2 входа/1 выход',
	},
	{
	  name: 'XOR',
	  description: 'Логический вентиль XOR, выполняющий логическую операцию "Исключающее ИЛИ".',
	  advantages: ['Полезен для создания четных функций', 'Многофункционален'],
	  disadvantages: ['Более сложная схема по сравнению с OR и AND'],
	  application: ['Кодирование', 'Коррекция ошибок'],
	  availability: 4,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 2,
	  lifespan: 10,
	  components: ['Транзисторы', 'Резисторы'],
	  implementationType: 'Комбинаторное',
	  simpleOrComplex: 'Сложные',
	  logicLevels: 'Высокий/Низкий',
	  switchingSpeed: 'Высокая',
	  powerConsumption: 'Средняя',
	  inputOutputResistance: 'Среднее',
	  supplyVoltage: '3-5 В',
	  numInputsOutputs: '2 входа/1 выход',
	},
	{
	  name: 'NAND',
	  description: 'Логический вентиль NAND, выполняющий логическую операцию "НЕ И".',
	  advantages: ['Универсальность', 'Может заменить другие логические элементы'],
	  disadvantages: ['Меньшая простота понимания'],
	  application: ['Цифровые схемы', 'Логические схемы'],
	  availability: 5,
	  quality: 5,
	  reliability: 5,
	  manufacturingComplexity: 1,
	  lifespan: 10,
	  components: ['Транзисторы', 'Резисторы'],
	  implementationType: 'Комбинаторное',
	  simpleOrComplex: 'Простые',
	  logicLevels: 'Высокий/Низкий',
	  switchingSpeed: 'Высокая',
	  powerConsumption: 'Низкая',
	  inputOutputResistance: 'Высокое',
	  supplyVoltage: '3-5 В',
	  numInputsOutputs: '2 входа/1 выход',
	},
	{
	  name: 'NOR',
	  description: 'Логический вентиль NOR, выполняющий логическую операцию "НЕ ИЛИ".',
	  advantages: ['Простота реализации', 'Широкое применение в логических схемах'],
	  disadvantages: ['Меньшая гибкость по сравнению с более сложными вентилями'],
	  application: ['Цифровые схемы', 'Логические схемы'],
	  availability: 5,
	  quality: 5,
	  reliability: 5,
	  manufacturingComplexity: 1,
	  lifespan: 10,
	  components: ['Транзисторы', 'Резисторы'],
	  implementationType: 'Комбинаторное',
	  simpleOrComplex: 'Простые',
	  logicLevels: 'Высокий/Низкий',
	  switchingSpeed: 'Высокая',
	  powerConsumption: 'Низкая',
	  inputOutputResistance: 'Высокое',
	  supplyVoltage: '3-5 В',
	  numInputsOutputs: '2 входа/1 выход',
	},
	{
	  name: 'XNOR',
	  description: 'Логический вентиль XNOR, выполняющий логическую операцию "Исключающее НЕ ИЛИ".',
	  advantages: ['Полезен для создания четных функций', 'Многофункционален'],
	  disadvantages: ['Более сложная схема по сравнению с OR и AND'],
	  application: ['Кодирование', 'Коррекция ошибок'],
	  availability: 4,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 2,
	  lifespan: 10,
	  components: ['Транзисторы', 'Резисторы'],
	  implementationType: 'Комбинаторное',
	  simpleOrComplex: 'Сложные',
	  logicLevels: 'Высокий/Низкий',
	  switchingSpeed: 'Высокая',
	  powerConsumption: 'Средняя',
	  inputOutputResistance: 'Среднее',
	  supplyVoltage: '3-5 В',
	  numInputsOutputs: '2 входа/1 выход',
	},
	{
	  name: 'Flip-Flop',
	  description: 'Триггерный элемент, обеспечивающий хранение одного бита информации.',
	  advantages: ['Хранение данных', 'Стабильная работа'],
	  disadvantages: ['Ограниченная функциональность'],
	  application: ['Счётчики', 'Регистры'],
	  availability: 5,
	  quality: 5,
	  reliability: 5,
	  manufacturingComplexity: 2,
	  lifespan: 10,
	  components: ['Транзисторы', 'Резисторы'],
	  implementationType: 'Последовательное',
	  simpleOrComplex: 'Сложные',
	  logicLevels: 'Высокий/Низкий',
	  switchingSpeed: 'Средняя',
	  powerConsumption: 'Средняя',
	  inputOutputResistance: 'Среднее',
	  supplyVoltage: '3-5 В',
	  numInputsOutputs: '2 входа/2 выхода',
	},
	{
	  name: 'Counter',
	  description: 'Счётчик, осуществляющий подсчёт событий или импульсов.',
	  advantages: ['Подсчёт импульсов', 'Простота реализации'],
	  disadvantages: ['Меньшая гибкость по сравнению с более сложными системами'],
	  application: ['Счётчики времени', 'Измерительные приборы'],
	  availability: 5,
	  quality: 5,
	  reliability: 5,
	  manufacturingComplexity: 2,
	  lifespan: 10,
	  components: ['Транзисторы', 'Резисторы'],
	  implementationType: 'Комбинаторное',
	  simpleOrComplex: 'Сложные',
	  logicLevels: 'Высокий/Низкий',
	  switchingSpeed: 'Средняя',
	  powerConsumption: 'Средняя',
	  inputOutputResistance: 'Среднее',
	  supplyVoltage: '3-5 В',
	  numInputsOutputs: '4 входа/4 выхода',
	},
	{
	  name: 'Shift Register',
	  description: 'Регистры сдвига, которые позволяют сдвигать данные влево или вправо.',
	  advantages: ['Хранение данных', 'Подключение к шинам данных'],
	  disadvantages: ['Ограниченная функциональность'],
	  application: ['Цифровые схемы', 'Управление данными'],
	  availability: 5,
	  quality: 5,
	  reliability: 5,
	  manufacturingComplexity: 3,
	  lifespan: 10,
	  components: ['Транзисторы', 'Резисторы'],
	  implementationType: 'Комбинаторное',
	  simpleOrComplex: 'Сложные',
	  logicLevels: 'Высокий/Низкий',
	  switchingSpeed: 'Средняя',
	  powerConsumption: 'Средняя',
	  inputOutputResistance: 'Среднее',
	  supplyVoltage: '3-5 В',
	  numInputsOutputs: '8 входов/8 выходов',
	},
  ];


const LogicComponentsList = () => {
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [data, setData] = useState(logicComponentsData); // Замените logicComponentsData на свои данные

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    const sortedData = [...data].sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];
      if (aValue < bValue) return order === 'asc' ? -1 : 1;
      if (aValue > bValue) return order === 'asc' ? 1 : -1;
      return 0;
    });
    setSortField(field);
    setSortOrder(order);
    setData(sortedData);
  };

  const renderCell = (item, field) => {
    if (Array.isArray(item[field])) {
      return item[field].join(', ');
    }
    return item[field];
  };

  return (
    <div>
      <h1>Логические компоненты</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Название</th>
            <th onClick={() => handleSort('description')}>Описание</th>
            <th onClick={() => handleSort('advantages')}>Преимущества</th>
            <th onClick={() => handleSort('disadvantages')}>Недостатки</th>
            <th onClick={() => handleSort('application')}>Применение</th>
            <th onClick={() => handleSort('availability')}>Доступность</th>
            <th onClick={() => handleSort('quality')}>Качество</th>
            <th onClick={() => handleSort('reliability')}>Надежность</th>
            <th onClick={() => handleSort('manufacturingComplexity')}>Сложность изготовления</th>
            <th onClick={() => handleSort('lifespan')}>Срок службы (лет)</th>
            <th onClick={() => handleSort('components')}>Компоненты изготовления</th>
            <th onClick={() => handleSort('implementationType')}>По типу реализации</th>
            <th onClick={() => handleSort('simpleOrComplex')}>Простые/Сложные</th>
            <th onClick={() => handleSort('logicLevels')}>Логические уровни</th>
            <th onClick={() => handleSort('switchingSpeed')}>Скорость переключения</th>
            <th onClick={() => handleSort('powerConsumption')}>Потребляемая мощность</th>
            <th onClick={() => handleSort('inputOutputResistance')}>Сопротивление на входе/выходе</th>
            <th onClick={() => handleSort('supplyVoltage')}>Напряжение питания</th>
            <th onClick={() => handleSort('numInputsOutputs')}>Число входов и выходов</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{renderCell(item, 'advantages')}</td>
              <td>{renderCell(item, 'disadvantages')}</td>
              <td>{renderCell(item, 'application')}</td>
              <td>{item.availability}</td>
              <td>{item.quality}</td>
              <td>{item.reliability}</td>
              <td>{item.manufacturingComplexity}</td>
              <td>{item.lifespan}</td>
              <td>{renderCell(item, 'components')}</td>
              <td>{item.implementationType}</td>
              <td>{item.simpleOrComplex}</td>
              <td>{item.logicLevels}</td>
              <td>{item.switchingSpeed}</td>
              <td>{item.powerConsumption}</td>
              <td>{item.inputOutputResistance}</td>
              <td>{item.supplyVoltage}</td>
              <td>{item.numInputsOutputs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogicComponentsList;
