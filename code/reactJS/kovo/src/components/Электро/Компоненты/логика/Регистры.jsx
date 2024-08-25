import React, { useState, useMemo } from 'react';


const registerData = [
	{
	  name: 'Регистры общего назначения',
	  description: 'Регистры, используемые для хранения временных данных в процессорах.',
	  advantages: ['Гибкость в использовании', 'Высокая скорость доступа'],
	  disadvantages: ['Ограниченная разрядность', 'Может потребовать дополнительных операций'],
	  application: ['Процессоры', 'Микроконтроллеры'],
	  availability: 4,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 10,
	  components: ['Транзисторы', 'Резисторы'],
	  accessMethod: 'Прямой',
	  implementationType: 'Статический',
	  interfaceType: 'Параллельный',
	  bitWidth: 32,
	  accessSpeed: 'Высокая',
	  numberOfBits: 32,
	},
	{
	  name: 'Регистры состояния',
	  description: 'Регистры, хранящие состояние процессора и флаги.',
	  advantages: ['Быстрый доступ к состоянию', 'Компактное хранение данных'],
	  disadvantages: ['Ограниченная функциональность', 'Может быть сложно в управлении'],
	  application: ['Процессоры', 'Микропроцессоры'],
	  availability: 5,
	  quality: 5,
	  reliability: 5,
	  manufacturingComplexity: 2,
	  lifespan: 15,
	  components: ['Транзисторы', 'Флажки'],
	  accessMethod: 'Прямой',
	  implementationType: 'Статический',
	  interfaceType: 'Параллельный',
	  bitWidth: 16,
	  accessSpeed: 'Средняя',
	  numberOfBits: 16,
	},
	{
	  name: 'Счетчики команд',
	  description: 'Регистры, используемые для подсчета выполненных команд.',
	  advantages: ['Точное отслеживание команд', 'Легкость интеграции'],
	  disadvantages: ['Ограниченные возможности', 'Может замедлить процессор'],
	  application: ['Процессоры', 'Эмуляторы'],
	  availability: 3,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 12,
	  components: ['Транзисторы', 'Счетчики'],
	  accessMethod: 'Прямой',
	  implementationType: 'Синхронный',
	  interfaceType: 'Параллельный',
	  bitWidth: 16,
	  accessSpeed: 'Средняя',
	  numberOfBits: 16,
	},
	{
	  name: 'Указатели стека',
	  description: 'Регистры, используемые для управления стеком памяти.',
	  advantages: ['Эффективное управление памятью', 'Гибкость в использовании'],
	  disadvantages: ['Может потребовать дополнительного управления', 'Ограниченная емкость'],
	  application: ['Процессоры', 'Микроконтроллеры'],
	  availability: 4,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 10,
	  components: ['Транзисторы', 'Декодеры'],
	  accessMethod: 'Прямой',
	  implementationType: 'Синхронный',
	  interfaceType: 'Параллельный',
	  bitWidth: 32,
	  accessSpeed: 'Высокая',
	  numberOfBits: 32,
	},
  ];


const RegisterList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const sortedData = useMemo(() => {
    let sortableItems = [...registerData];
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
      <h1>Типы регистров и счетчиков</h1>
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
            <th onClick={() => requestSort('accessMethod')}>Способ доступа</th>
            <th onClick={() => requestSort('implementationType')}>Тип реализации</th>
            <th onClick={() => requestSort('interfaceType')}>Тип интерфейса</th>
            <th onClick={() => requestSort('bitWidth')}>Разрядность</th>
            <th onClick={() => requestSort('accessSpeed')}>Скорость доступа</th>
            <th onClick={() => requestSort('numberOfBits')}>Количество битов</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((register, index) => (
            <tr key={index}>
              <td>{register.name}</td>
              <td>{register.description}</td>
              <td>{register.advantages.join(', ')}</td>
              <td>{register.disadvantages.join(', ')}</td>
              <td>{register.application.join(', ')}</td>
              <td>{register.availability}</td>
              <td>{register.quality}</td>
              <td>{register.reliability}</td>
              <td>{register.manufacturingComplexity}</td>
              <td>{register.lifespan}</td>
              <td>{register.components.join(', ')}</td>
              <td>{register.accessMethod}</td>
              <td>{register.implementationType}</td>
              <td>{register.interfaceType}</td>
              <td>{register.bitWidth}</td>
              <td>{register.accessSpeed}</td>
              <td>{register.numberOfBits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisterList;
