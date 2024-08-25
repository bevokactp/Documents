import React, { useState } from 'react';


const waveguideData = [
	{
	  name: 'Глубоковолновые',
	  description: 'Используются для передачи волн в глубоком подземном пространстве или в специфичных условиях.',
	  advantages: ['Хорошая передача на больших расстояниях', 'Меньше потерь сигнала'],
	  disadvantages: ['Сложность установки', 'Ограниченное применение'],
	  application: ['Системы связи в подземных конструкциях', 'Геофизические исследования'],
	  availability: 2,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 5,
	  lifespan: 30,
	  components: ['Металлические трубы', 'Сенсоры'],
	  bandwidth: 'Низкая до средней',
	  transmissionRange: 'Большие расстояния',
	  energyEfficiency: 'Высокая',
	  capacity: 'Средняя',
	  signalLossResistance: 'Высокая',
	  impedance: 'Низкая',
	  interferenceResistance: 'Средняя',
	  dataTransferSpeed: 'Средняя',
	  frequencyRange: 'Долгие волны',
	  sizeAndShape: 'Большие трубы',
	  attenuationLoss: 'Низкая',
	  temperatureStability: 'Средняя',
	  reflectionCoefficient: 'Низкий',
	  multimodeTransmissionCapability: 'Ограниченная',
	  bendability: 'Ограниченная',
	},
	{
	  name: 'Прямоугольные волноводы',
	  description: 'Используются для передачи микроволн и имеют прямоугольное сечение.',
	  advantages: ['Высокая эффективность передачи микроволн', 'Простота конструкции'],
	  disadvantages: ['Ограниченное направление передачи', 'Может потребоваться точная установка'],
	  application: ['Системы радиолокации', 'Системы связи'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 20,
	  components: ['Металлические прямоугольные трубы'],
	  bandwidth: 'Средняя',
	  transmissionRange: 'Средняя',
	  energyEfficiency: 'Высокая',
	  capacity: 'Высокая',
	  signalLossResistance: 'Средняя',
	  impedance: 'Высокая',
	  interferenceResistance: 'Средняя',
	  dataTransferSpeed: 'Высокая',
	  frequencyRange: 'Микроволны',
	  sizeAndShape: 'Прямоугольные трубы',
	  attenuationLoss: 'Средняя',
	  temperatureStability: 'Высокая',
	  reflectionCoefficient: 'Средний',
	  multimodeTransmissionCapability: 'Средняя',
	  bendability: 'Ограниченная',
	},
	{
	  name: 'Цилиндрические волноводы',
	  description: 'Имеют цилиндрическое сечение и используются для передачи волн в различных частотных диапазонах.',
	  advantages: ['Гибкость в применении', 'Хорошая передача на различных частотах'],
	  disadvantages: ['Сложность изготовления', 'Большие размеры'],
	  application: ['Телевизионные системы', 'Радиолокация'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 25,
	  components: ['Цилиндрические металлические трубы'],
	  bandwidth: 'Широкая',
	  transmissionRange: 'Средняя до большой',
	  energyEfficiency: 'Средняя',
	  capacity: 'Высокая',
	  signalLossResistance: 'Средняя',
	  impedance: 'Средняя',
	  interferenceResistance: 'Средняя',
	  dataTransferSpeed: 'Высокая',
	  frequencyRange: 'Разные частотные диапазоны',
	  sizeAndShape: 'Цилиндрические трубы',
	  attenuationLoss: 'Средняя',
	  temperatureStability: 'Средняя',
	  reflectionCoefficient: 'Средний',
	  multimodeTransmissionCapability: 'Высокая',
	  bendability: 'Ограниченная',
	},
	{
	  name: 'Оптоволоконные волноводы',
	  description: 'Используются для передачи данных через оптические волокна.',
	  advantages: ['Очень высокая скорость передачи', 'Низкие потери сигнала'],
	  disadvantages: ['Высокая стоимость', 'Хрупкость'],
	  application: ['Интернет-соединения', 'Медицинская визуализация'],
	  availability: 5,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 5,
	  lifespan: 30,
	  components: ['Оптические волокна', 'Оптические соединители'],
	  bandwidth: 'Очень высокая',
	  transmissionRange: 'Очень большая',
	  energyEfficiency: 'Высокая',
	  capacity: 'Очень высокая',
	  signalLossResistance: 'Очень высокая',
	  impedance: 'Высокая',
	  interferenceResistance: 'Очень высокая',
	  dataTransferSpeed: 'Очень высокая',
	  frequencyRange: 'Оптические частоты',
	  sizeAndShape: 'Тонкие волокна',
	  attenuationLoss: 'Очень низкая',
	  temperatureStability: 'Высокая',
	  reflectionCoefficient: 'Низкий',
	  multimodeTransmissionCapability: 'Средняя',
	  bendability: 'Ограниченная',
	},
	{
	  name: 'Полупроводниковые волноводы',
	  description: 'Используются для передачи сигналов в полупроводниковых материалах.',
	  advantages: ['Высокая эффективность передачи', 'Компактные размеры'],
	  disadvantages: ['Ограниченный частотный диапазон', 'Высокая стоимость'],
	  application: ['Интегральные схемы', 'Фотонные устройства'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 20,
	  components: ['Полупроводниковые кристаллы', 'Элементы управления'],
	  bandwidth: 'Средняя',
	  transmissionRange: 'Небольшая',
	  energyEfficiency: 'Высокая',
	  capacity: 'Средняя',
	  signalLossResistance: 'Средняя',
	  impedance: 'Средняя',
	  interferenceResistance: 'Средняя',
	  dataTransferSpeed: 'Средняя',
	  frequencyRange: 'Полупроводниковые частоты',
	  sizeAndShape: 'Компактные элементы',
	  attenuationLoss: 'Средняя',
	  temperatureStability: 'Средняя',
	  reflectionCoefficient: 'Средний',
	  multimodeTransmissionCapability: 'Средняя',
	  bendability: 'Ограниченная',
	},
	{
	  name: 'Тонкоплёночные волноводы',
	  description: 'Изготавливаются из тонких пленок и используются для передачи волновых сигналов.',
	  advantages: ['Очень высокая точность', 'Малые размеры'],
	  disadvantages: ['Высокая стоимость производства', 'Чувствительность к загрязнениям'],
	  application: ['Оптические датчики', 'Микроэлектронные устройства'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 5,
	  lifespan: 15,
	  components: ['Тонкие пленки', 'Пластинчатые элементы'],
	  bandwidth: 'Средняя',
	  transmissionRange: 'Небольшая',
	  energyEfficiency: 'Высокая',
	  capacity: 'Средняя',
	  signalLossResistance: 'Средняя',
	  impedance: 'Высокая',
	  interferenceResistance: 'Средняя',
	  dataTransferSpeed: 'Высокая',
	  frequencyRange: 'Оптические частоты',
	  sizeAndShape: 'Тонкие пленки',
	  attenuationLoss: 'Средняя',
	  temperatureStability: 'Высокая',
	  reflectionCoefficient: 'Низкий',
	  multimodeTransmissionCapability: 'Ограниченная',
	  bendability: 'Ограниченная',
	},
	{
	  name: 'Пластинчатые волноводы',
	  description: 'Используются в виде пластин и применяются для различных частотных диапазонов.',
	  advantages: ['Простота установки', 'Низкая стоимость'],
	  disadvantages: ['Ограниченная эффективность', 'Меньшая гибкость'],
	  application: ['Системы связи', 'Радиочастотные устройства'],
	  availability: 3,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 2,
	  lifespan: 15,
	  components: ['Металлические или пластиковые пластины'],
	  bandwidth: 'Средняя',
	  transmissionRange: 'Средняя',
	  energyEfficiency: 'Средняя',
	  capacity: 'Средняя',
	  signalLossResistance: 'Средняя',
	  impedance: 'Средняя',
	  interferenceResistance: 'Средняя',
	  dataTransferSpeed: 'Средняя',
	  frequencyRange: 'Радиочастотные диапазоны',
	  sizeAndShape: 'Плоские пластины',
	  attenuationLoss: 'Средняя',
	  temperatureStability: 'Средняя',
	  reflectionCoefficient: 'Средний',
	  multimodeTransmissionCapability: 'Средняя',
	  bendability: 'Ограниченная',
	},
	{
	  name: 'Лента ферритовая',
	  description: 'Используется для передачи сигналов с помощью ферритовых лент.',
	  advantages: ['Высокая магнитная проницаемость', 'Хорошая эффективность'],
	  disadvantages: ['Ограниченная частотность', 'Сложность монтажа'],
	  application: ['Ферритовые фильтры', 'Магнитные устройства'],
	  availability: 2,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 4,
	  lifespan: 20,
	  components: ['Ферритовые ленты', 'Металлические элементы'],
	  bandwidth: 'Средняя',
	  transmissionRange: 'Средняя',
	  energyEfficiency: 'Средняя',
	  capacity: 'Средняя',
	  signalLossResistance: 'Средняя',
	  impedance: 'Высокая',
	  interferenceResistance: 'Средняя',
	  dataTransferSpeed: 'Средняя',
	  frequencyRange: 'Радиочастотные диапазоны',
	  sizeAndShape: 'Ферритовые ленты',
	  attenuationLoss: 'Средняя',
	  temperatureStability: 'Средняя',
	  reflectionCoefficient: 'Средний',
	  multimodeTransmissionCapability: 'Ограниченная',
	  bendability: 'Ограниченная',
	},
	{
	  name: 'Пластиковые волноводы',
	  description: 'Используются для передачи сигналов в инфракрасном диапазоне.',
	  advantages: ['Низкая стоимость', 'Устойчивость к коррозии'],
	  disadvantages: ['Ограниченная частотность', 'Менее надежные'],
	  application: ['Инфракрасные системы связи', 'Оптические устройства'],
	  availability: 4,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 2,
	  lifespan: 15,
	  components: ['Пластиковые трубы', 'Оптические соединители'],
	  bandwidth: 'Средняя',
	  transmissionRange: 'Небольшая до средней',
	  energyEfficiency: 'Средняя',
	  capacity: 'Средняя',
	  signalLossResistance: 'Средняя',
	  impedance: 'Низкая',
	  interferenceResistance: 'Средняя',
	  dataTransferSpeed: 'Средняя',
	  frequencyRange: 'Инфракрасные частоты',
	  sizeAndShape: 'Пластиковые трубы',
	  attenuationLoss: 'Средняя',
	  temperatureStability: 'Низкая',
	  reflectionCoefficient: 'Средний',
	  multimodeTransmissionCapability: 'Средняя',
	  bendability: 'Высокая',
	},
	{
	  name: 'Сверхвысокочастотные (СВЧ) волноводы',
	  description: 'Используются для передачи сигналов на сверхвысоких частотах.',
	  advantages: ['Высокая пропускная способность', 'Минимальные потери сигнала'],
	  disadvantages: ['Высокая стоимость', 'Ограниченные размеры'],
	  application: ['Радиолокация', 'Связь на высоких частотах'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 20,
	  components: ['Металлические трубы', 'СВЧ элементы'],
	  bandwidth: 'Широкая',
	  transmissionRange: 'Средняя',
	  energyEfficiency: 'Высокая',
	  capacity: 'Высокая',
	  signalLossResistance: 'Высокая',
	  impedance: 'Высокая',
	  interferenceResistance: 'Средняя',
	  dataTransferSpeed: 'Высокая',
	  frequencyRange: 'Сверхвысокие частоты',
	  sizeAndShape: 'Металлические трубы',
	  attenuationLoss: 'Низкая',
	  temperatureStability: 'Высокая',
	  reflectionCoefficient: 'Средний',
	  multimodeTransmissionCapability: 'Средняя',
	  bendability: 'Ограниченная',
	},
	{
	  name: 'Гребенчатые волноводы',
	  description: 'Используются для передачи сигналов с помощью волноводов в виде гребенок.',
	  advantages: ['Высокая эффективность', 'Компенсация потерь сигнала'],
	  disadvantages: ['Сложность конструкции', 'Ограниченная гибкость'],
	  application: ['Системы связи', 'Фильтрация сигналов'],
	  availability: 2,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 5,
	  lifespan: 20,
	  components: ['Гребенчатые элементы', 'Металлические соединители'],
	  bandwidth: 'Средняя',
	  transmissionRange: 'Средняя',
	  energyEfficiency: 'Средняя',
	  capacity: 'Средняя',
	  signalLossResistance: 'Средняя',
	  impedance: 'Высокая',
	  interferenceResistance: 'Средняя',
	  dataTransferSpeed: 'Средняя',
	  frequencyRange: 'Радиочастотные диапазоны',
	  sizeAndShape: 'Гребенчатые элементы',
	  attenuationLoss: 'Средняя',
	  temperatureStability: 'Средняя',
	  reflectionCoefficient: 'Средний',
	  multimodeTransmissionCapability: 'Ограниченная',
	  bendability: 'Ограниченная',
	},
	{
	  name: 'Фазовые волноводы',
	  description: 'Используются для передачи фазовых сигналов с помощью специальных волноводов.',
	  advantages: ['Высокая точность передачи', 'Хорошая устойчивость к помехам'],
	  disadvantages: ['Сложность конструкции', 'Ограниченное применение'],
	  application: ['Радиочастотные системы', 'Фазовые антенны'],
	  availability: 2,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 5,
	  lifespan: 25,
	  components: ['Фазовые элементы', 'Металлические трубы'],
	  bandwidth: 'Средняя',
	  transmissionRange: 'Средняя',
	  energyEfficiency: 'Средняя',
	  capacity: 'Средняя',
	  signalLossResistance: 'Средняя',
	  impedance: 'Высокая',
	  interferenceResistance: 'Высокая',
	  dataTransferSpeed: 'Средняя',
	  frequencyRange: 'Радиочастотные диапазоны',
	  sizeAndShape: 'Специальные элементы',
	  attenuationLoss: 'Средняя',
	  temperatureStability: 'Высокая',
	  reflectionCoefficient: 'Средний',
	  multimodeTransmissionCapability: 'Ограниченная',
	  bendability: 'Ограниченная',
	},
  ];




const WaveguideList = () => {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...waveguideData];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы волноводов</h1>
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
            <th onClick={() => requestSort('lifespan')}>Срок службы</th>
            <th onClick={() => requestSort('components')}>Компоненты</th>
            <th onClick={() => requestSort('bandwidth')}>Полоса пропускания</th>
            <th onClick={() => requestSort('transmissionRange')}>Дальность передачи</th>
            <th onClick={() => requestSort('energyEfficiency')}>Энергетическая эффективность</th>
            <th onClick={() => requestSort('capacity')}>Пропускная способность</th>
            <th onClick={() => requestSort('signalLossResistance')}>Устойчивость к потерь сигнала</th>
            <th onClick={() => requestSort('impedance')}>Импеданс</th>
            <th onClick={() => requestSort('interferenceResistance')}>Устойчивость к помехам</th>
            <th onClick={() => requestSort('dataTransferSpeed')}>Скорость передачи данных</th>
            <th onClick={() => requestSort('frequencyRange')}>Частотный диапазон</th>
            <th onClick={() => requestSort('sizeAndShape')}>Размер и форма</th>
            <th onClick={() => requestSort('attenuationLoss')}>Потери на затухание</th>
            <th onClick={() => requestSort('temperatureStability')}>Температурная стабильность</th>
            <th onClick={() => requestSort('reflectionCoefficient')}>Коэффициент отражения</th>
            <th onClick={() => requestSort('multimodeTransmissionCapability')}>Способность к передаче многорежимного сигнала</th>
            <th onClick={() => requestSort('bendability')}>Изгибаемость и гибкость</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((waveguide, index) => (
            <tr key={index}>
              <td>{waveguide.name}</td>
              <td>{waveguide.description}</td>
              <td>{waveguide.advantages.join(', ')}</td>
              <td>{waveguide.disadvantages.join(', ')}</td>
              <td>{waveguide.application.join(', ')}</td>
              <td>{waveguide.availability}</td>
              <td>{waveguide.qualityAndReliability}</td>
              <td>{waveguide.manufacturingComplexity}</td>
              <td>{waveguide.lifespan}</td>
              <td>{waveguide.components.join(', ')}</td>
              <td>{waveguide.bandwidth}</td>
              <td>{waveguide.transmissionRange}</td>
              <td>{waveguide.energyEfficiency}</td>
              <td>{waveguide.capacity}</td>
              <td>{waveguide.signalLossResistance}</td>
              <td>{waveguide.impedance}</td>
              <td>{waveguide.interferenceResistance}</td>
              <td>{waveguide.dataTransferSpeed}</td>
              <td>{waveguide.frequencyRange}</td>
              <td>{waveguide.sizeAndShape}</td>
              <td>{waveguide.attenuationLoss}</td>
              <td>{waveguide.temperatureStability}</td>
              <td>{waveguide.reflectionCoefficient}</td>
              <td>{waveguide.multimodeTransmissionCapability}</td>
              <td>{waveguide.bendability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WaveguideList;
