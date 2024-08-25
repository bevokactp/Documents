
import React, { useState } from 'react';


const samplingData = [
	{
	  name: 'Резистивные лестницы',
	  description: 'Метод преобразования аналоговых сигналов в цифровые с использованием резисторов.',
	  advantages: ['Высокая точность', 'Низкое энергопотребление'],
	  disadvantages: ['Большие размеры', 'Сложность в настройке'],
	  application: ['Аналого-цифровое преобразование', 'Измерительные приборы'],
	  availability: 3,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 15,
	  components: ['Резисторы', 'Схемы переключения'],
	  inputRange: 'Широкий',
	  linearity: 'Высокая',
	  bitCount: '12 бит',
	  outputType: 'Цифровой',
	  powerSupply: 'Однополярный',
	  channelCount: 'Многоканальный',
	  polarity: 'Однополярный',
	  resolution: 'Высокая',
	  updateSpeed: 'Средняя',
	  conversionSpeed: 'Медленная',
	  outputAccuracy: 'Высокая',
	  noise: 'Низкий',
	  energyConsumption: 'Низкое'
	},
	{
	  name: 'Сигма-дельта',
	  description: 'Метод преобразования аналоговых сигналов в цифровые с использованием модуляции сигма-дельта.',
	  advantages: ['Высокая разрешающая способность', 'Отличная точность'],
	  disadvantages: ['Низкая скорость преобразования', 'Высокое энергопотребление'],
	  application: ['Цифровое аудио', 'Измерительные системы'],
	  availability: 4,
	  quality: 5,
	  reliability: 5,
	  manufacturingComplexity: 4,
	  lifespan: 10,
	  components: ['Модуляторы сигма-дельта', 'Фильтры'],
	  inputRange: 'Средний',
	  linearity: 'Высокая',
	  bitCount: '24 бит',
	  outputType: 'Цифровой',
	  powerSupply: 'Двуполярный',
	  channelCount: 'Одноканальный',
	  polarity: 'Двуполярный',
	  resolution: 'Высокая',
	  updateSpeed: 'Низкая',
	  conversionSpeed: 'Медленная',
	  outputAccuracy: 'Высокая',
	  noise: 'Низкий',
	  energyConsumption: 'Высокое'
	},
	{
	  name: 'Параллельные',
	  description: 'Метод преобразования аналоговых сигналов в цифровые с использованием параллельных аналогово-цифровых преобразователей.',
	  advantages: ['Высокая скорость преобразования', 'Многофункциональность'],
	  disadvantages: ['Большие размеры', 'Высокая стоимость'],
	  application: ['Высокоскоростные системы', 'Измерительные приборы'],
	  availability: 3,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 10,
	  components: ['Параллельные преобразователи', 'Схемы сбора данных'],
	  inputRange: 'Широкий',
	  linearity: 'Средняя',
	  bitCount: '8-16 бит',
	  outputType: 'Цифровой',
	  powerSupply: 'Однополярный',
	  channelCount: 'Многоканальный',
	  polarity: 'Однополярный',
	  resolution: 'Средняя',
	  updateSpeed: 'Высокая',
	  conversionSpeed: 'Высокая',
	  outputAccuracy: 'Средняя',
	  noise: 'Средний',
	  energyConsumption: 'Среднее'
	},
	{
	  name: 'Цифровые интегралы',
	  description: 'Метод интегрирования аналоговых сигналов с последующим преобразованием в цифровые значения.',
	  advantages: ['Высокая точность интегрирования', 'Простота реализации'],
	  disadvantages: ['Ограниченная скорость интегрирования', 'Низкая точность на высоких частотах'],
	  application: ['Измерительные системы', 'Контроль сигналов'],
	  availability: 4,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 12,
	  components: ['Интеграторы', 'Фильтры'],
	  inputRange: 'Средний',
	  linearity: 'Средняя',
	  bitCount: '10 бит',
	  outputType: 'Цифровой',
	  powerSupply: 'Однополярный',
	  channelCount: 'Одноканальный',
	  polarity: 'Однополярный',
	  resolution: 'Средняя',
	  updateSpeed: 'Средняя',
	  conversionSpeed: 'Средняя',
	  outputAccuracy: 'Средняя',
	  noise: 'Средний',
	  energyConsumption: 'Низкое'
	},
	{
	  name: 'Временная дискретизация',
	  description: 'Метод преобразования сигналов с фиксированным временным интервалом для обработки цифровых данных.',
	  advantages: ['Высокая точность в временном измерении', 'Простота реализации'],
	  disadvantages: ['Ограничение по частоте дискретизации', 'Непригодность для непрерывных сигналов'],
	  application: ['Анализ сигналов', 'Цифровая обработка сигналов'],
	  availability: 5,
	  quality: 4,
	  reliability: 5,
	  manufacturingComplexity: 2,
	  lifespan: 20,
	  components: ['Счетчики времени', 'Аналого-цифровые преобразователи'],
	  inputRange: 'Средний',
	  linearity: 'Высокая',
	  bitCount: '12 бит',
	  outputType: 'Цифровой',
	  powerSupply: 'Однополярный',
	  channelCount: 'Одноканальный',
	  polarity: 'Однополярный',
	  resolution: 'Высокая',
	  updateSpeed: 'Высокая',
	  conversionSpeed: 'Средняя',
	  outputAccuracy: 'Высокая',
	  noise: 'Низкий',
	  energyConsumption: 'Низкое'
	},
	{
	  name: 'Цифровое интегрирование',
	  description: 'Метод обработки сигналов, при котором аналоговые сигналы интегрируются и преобразуются в цифровые данные.',
	  advantages: ['Высокая точность', 'Поддержка широкого диапазона сигналов'],
	  disadvantages: ['Сложность реализации', 'Необходимость калибровки'],
	  application: ['Измерительные приборы', 'Анализ сигналов'],
	  availability: 4,
	  quality: 5,
	  reliability: 5,
	  manufacturingComplexity: 4,
	  lifespan: 15,
	  components: ['Интеграторы', 'Цифровые микросхемы'],
	  inputRange: 'Широкий',
	  linearity: 'Высокая',
	  bitCount: '16 бит',
	  outputType: 'Цифровой',
	  powerSupply: 'Двуполярный',
	  channelCount: 'Многоканальный',
	  polarity: 'Двуполярный',
	  resolution: 'Высокая',
	  updateSpeed: 'Средняя',
	  conversionSpeed: 'Средняя',
	  outputAccuracy: 'Высокая',
	  noise: 'Средний',
	  energyConsumption: 'Среднее'
	},
	{
	  name: 'Блоки на основе зарядного насоса',
	  description: 'Методы преобразования сигналов, использующие зарядный насос для генерации необходимых уровней напряжения.',
	  advantages: ['Высокая точность', 'Компактные размеры'],
	  disadvantages: ['Сложность в реализации', 'Зависимость от внешних факторов'],
	  application: ['Аналого-цифровое преобразование', 'Медицинские приборы'],
	  availability: 3,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 12,
	  components: ['Зарядные насосы', 'Конденсаторы'],
	  inputRange: 'Средний',
	  linearity: 'Средняя',
	  bitCount: '10 бит',
	  outputType: 'Цифровой',
	  powerSupply: 'Двуполярный',
	  channelCount: 'Одноканальный',
	  polarity: 'Двуполярный',
	  resolution: 'Средняя',
	  updateSpeed: 'Средняя',
	  conversionSpeed: 'Средняя',
	  outputAccuracy: 'Средняя',
	  noise: 'Средний',
	  energyConsumption: 'Среднее'
	},
	{
	  name: 'Линейные',
	  description: 'Методы преобразования аналоговых сигналов в цифровые с использованием линейных методов.',
	  advantages: ['Простота реализации', 'Высокая линейность'],
	  disadvantages: ['Ограниченная точность', 'Может потребоваться калибровка'],
	  application: ['Аналого-цифровое преобразование', 'Контроль сигналов'],
	  availability: 5,
	  quality: 3,
	  reliability: 4,
	  manufacturingComplexity: 2,
	  lifespan: 20,
	  components: ['Линейные преобразователи', 'Резисторы'],
	  inputRange: 'Средний',
	  linearity: 'Высокая',
	  bitCount: '8 бит',
	  outputType: 'Цифровой',
	  powerSupply: 'Однополярный',
	  channelCount: 'Одноканальный',
	  polarity: 'Однополярный',
	  resolution: 'Средняя',
	  updateSpeed: 'Высокая',
	  conversionSpeed: 'Средняя',
	  outputAccuracy: 'Средняя',
	  noise: 'Низкий',
	  energyConsumption: 'Низкое'
	}
  ];



const SamplingList = () => {
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [data, setData] = useState(samplingData);

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
      <h1>Методы семплирования и удержания</h1>
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
            <th onClick={() => handleSort('inputRange')}>Диапазон входных сигналов</th>
            <th onClick={() => handleSort('linearity')}>Линейность</th>
            <th onClick={() => handleSort('bitCount')}>По количеству бит</th>
            <th onClick={() => handleSort('outputType')}>По типу выхода</th>
            <th onClick={() => handleSort('powerSupply')}>По типу питания</th>
            <th onClick={() => handleSort('channelCount')}>По числу каналов</th>
            <th onClick={() => handleSort('polarity')}>Полярность</th>
            <th onClick={() => handleSort('resolution')}>Разрешающая способность</th>
            <th onClick={() => handleSort('updateSpeed')}>Скорость обновления</th>
            <th onClick={() => handleSort('conversionSpeed')}>Скорость преобразования</th>
            <th onClick={() => handleSort('outputAccuracy')}>Точность выходного сигнала</th>
            <th onClick={() => handleSort('noise')}>Шум</th>
            <th onClick={() => handleSort('energyConsumption')}>Энергопотребление</th>
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
              <td>{item.inputRange}</td>
              <td>{item.linearity}</td>
              <td>{item.bitCount}</td>
              <td>{item.outputType}</td>
              <td>{item.powerSupply}</td>
              <td>{item.channelCount}</td>
              <td>{item.polarity}</td>
              <td>{item.resolution}</td>
              <td>{item.updateSpeed}</td>
              <td>{item.conversionSpeed}</td>
              <td>{item.outputAccuracy}</td>
              <td>{item.noise}</td>
              <td>{item.energyConsumption}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SamplingList;
