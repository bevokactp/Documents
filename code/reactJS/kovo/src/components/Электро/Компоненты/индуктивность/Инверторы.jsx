import React, { useState, useMemo } from 'react';


const inverterData = [
	{
	  name: 'Синусоидальные инверторы',
	  description: 'Инверторы, которые преобразуют постоянный ток в чистый синусоидальный переменный ток.',
	  advantages: ['Высокое качество выходного сигнала', 'Совместимость с большинством устройств'],
	  disadvantages: ['Высокая стоимость', 'Сложность в управлении'],
	  application: ['Энергетика', 'Промышленные системы'],
	  availability: 4,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 4,
	  lifespan: 10,
	  components: ['Трансформатор', 'Полупроводники', 'Конденсаторы'],
	  signalType: 'AC-DC инверторы',
	  controlType: 'Цифровые инверторы',
	  conversionType: 'Прямые инверторы',
	  outputSignalType: 'Синусоидальные инверторы',
	  constructionType: 'Статические инверторы',
	  voltageRange: '220V - 480V',
	  currentRange: '5A - 50A',
	  efficiency: 'Высокая',
	  frequencyRange: '50 Hz - 60 Hz',
	  signalTypeDescription: 'Синусоидальный',
	  size: 'Средний',
	  weight: 'Средний',
	  temperatureRange: '-20°C до +50°C',
	  controlMethod: 'Цифровое управление',
	},
	{
	  name: 'Квадратные инверторы',
	  description: 'Инверторы, которые генерируют выходной сигнал в виде квадратных волн.',
	  advantages: ['Простота конструкции', 'Низкая стоимость'],
	  disadvantages: ['Меньшая эффективность', 'Более шумный выходной сигнал'],
	  application: ['Системы освещения', 'Мелкая электроника'],
	  availability: 5,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 2,
	  lifespan: 8,
	  components: ['Трансформатор', 'Полупроводники'],
	  signalType: 'DC-AC инверторы',
	  controlType: 'Аналоговые инверторы',
	  conversionType: 'Прямые инверторы',
	  outputSignalType: 'Квадратурные инверторы',
	  constructionType: 'Статические инверторы',
	  voltageRange: '12V - 24V',
	  currentRange: '1A - 10A',
	  efficiency: 'Средняя',
	  frequencyRange: '50 Hz',
	  signalTypeDescription: 'Квадратный',
	  size: 'Компактный',
	  weight: 'Легкий',
	  temperatureRange: '0°C до +40°C',
	  controlMethod: 'Аналоговое управление',
	},
	{
	  name: 'Модифицированные синусоидальные инверторы',
	  description: 'Инверторы, которые генерируют выходной сигнал, приближенный к синусоидальному.',
	  advantages: ['Хорошее качество сигнала', 'Невысокая стоимость'],
	  disadvantages: ['Меньшая эффективность по сравнению с синусоидальными инверторами'],
	  application: ['Потребительская электроника', 'Малые солнечные системы'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 7,
	  components: ['Трансформатор', 'Полупроводники', 'Конденсаторы'],
	  signalType: 'DC-AC инверторы',
	  controlType: 'Цифровые инверторы',
	  conversionType: 'Промежуточные инверторы',
	  outputSignalType: 'Модифицированные синусоидальные инверторы',
	  constructionType: 'Статические инверторы',
	  voltageRange: '110V - 220V',
	  currentRange: '2A - 20A',
	  efficiency: 'Средняя',
	  frequencyRange: '50 Hz',
	  signalTypeDescription: 'Модифицированный синусоидальный',
	  size: 'Средний',
	  weight: 'Средний',
	  temperatureRange: '-10°C до +45°C',
	  controlMethod: 'Цифровое управление',
	},
	{
	  name: 'Инверторы с высокочастотной модуляцией',
	  description: 'Инверторы, использующие высокочастотную модуляцию для преобразования постоянного тока в переменный.',
	  advantages: ['Высокая эффективность', 'Компактные размеры'],
	  disadvantages: ['Сложность конструкции', 'Высокая стоимость'],
	  application: ['Автомобильные системы', 'Системы бесперебойного питания'],
	  availability: 3,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 5,
	  lifespan: 12,
	  components: ['Трансформатор', 'Полупроводники', 'Фильтры'],
	  signalType: 'DC-AC инверторы',
	  controlType: 'Цифровые инверторы',
	  conversionType: 'Прямые инверторы',
	  outputSignalType: 'Синусоидальные инверторы',
	  constructionType: 'Статические инверторы',
	  voltageRange: '12V - 48V',
	  currentRange: '10A - 100A',
	  efficiency: 'Высокая',
	  frequencyRange: '100 Hz - 1 kHz',
	  signalTypeDescription: 'Высокочастотная модуляция',
	  size: 'Компактный',
	  weight: 'Легкий',
	  temperatureRange: '-20°C до +60°C',
	  controlMethod: 'Цифровое управление',
	},
	// Добавьте другие инверторы по аналогии
  ];


const InverterList = () => {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = useMemo(() => {
    let sortableItems = [...inverterData];
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
  }, [inverterData, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы инверторов</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Название</th>
            <th onClick={() => requestSort('description')}>Описание</th>
            <th onClick={() => requestSort('advantages')}>Преимущества</th>
            <th onClick={() => requestSort('disadvantages')}>Недостатки</th>
            <th onClick={() => requestSort('application')}>Применение</th>
            <th onClick={() => requestSort('availability')}>Доступность</th>
            <th onClick={() => requestSort('qualityAndReliability')}>Качество и надежность</th>
            <th onClick={() => requestSort('manufacturingComplexity')}>Сложность изготовления</th>
            <th onClick={() => requestSort('lifespan')}>Срок службы</th>
            <th onClick={() => requestSort('components')}>Компоненты</th>
            <th onClick={() => requestSort('signalType')}>Тип инвертируемого сигнала</th>
            <th onClick={() => requestSort('controlType')}>Способ управления</th>
            <th onClick={() => requestSort('conversionType')}>Способ преобразования</th>
            <th onClick={() => requestSort('outputSignalType')}>Тип выходного сигнала</th>
            <th onClick={() => requestSort('constructionType')}>Тип конструктивного исполнения</th>
            <th onClick={() => requestSort('voltageRange')}>Рабочий диапазон напряжений</th>
            <th onClick={() => requestSort('currentRange')}>Рабочий диапазон токов</th>
            <th onClick={() => requestSort('efficiency')}>Эффективность</th>
            <th onClick={() => requestSort('frequencyRange')}>Частотный диапазон</th>
            <th onClick={() => requestSort('signalTypeDescription')}>Тип выходного сигнала</th>
            <th onClick={() => requestSort('size')}>Размеры</th>
            <th onClick={() => requestSort('weight')}>Вес</th>
            <th onClick={() => requestSort('temperatureRange')}>Температурный диапазон</th>
            <th onClick={() => requestSort('controlMethod')}>Способ управления</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((inverter, index) => (
            <tr key={index}>
              <td>{inverter.name}</td>
              <td>{inverter.description}</td>
              <td>{inverter.advantages.join(', ')}</td>
              <td>{inverter.disadvantages.join(', ')}</td>
              <td>{inverter.application.join(', ')}</td>
              <td>{inverter.availability}</td>
              <td>{inverter.qualityAndReliability}</td>
              <td>{inverter.manufacturingComplexity}</td>
              <td>{inverter.lifespan}</td>
              <td>{inverter.components.join(', ')}</td>
              <td>{inverter.signalType}</td>
              <td>{inverter.controlType}</td>
              <td>{inverter.conversionType}</td>
              <td>{inverter.outputSignalType}</td>
              <td>{inverter.constructionType}</td>
              <td>{inverter.voltageRange}</td>
              <td>{inverter.currentRange}</td>
              <td>{inverter.efficiency}</td>
              <td>{inverter.frequencyRange}</td>
              <td>{inverter.signalTypeDescription}</td>
              <td>{inverter.size}</td>
              <td>{inverter.weight}</td>
              <td>{inverter.temperatureRange}</td>
              <td>{inverter.controlMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InverterList;
