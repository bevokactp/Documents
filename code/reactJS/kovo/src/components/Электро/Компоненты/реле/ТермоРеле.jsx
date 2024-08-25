import React, { useState } from 'react';

const ThermoSwitchesList = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...thermoSwitchesData];
    if (sortConfig.key) {
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
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Термо переключатели</h1>
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
            <th onClick={() => requestSort('weight')}>Вес</th>
            <th onClick={() => requestSort('responseTime')}>Время отклика</th>
            <th onClick={() => requestSort('thermoelectricCoefficient')}>Коэффициент термоэлектрической силы</th>
            <th onClick={() => requestSort('coolingPower')}>Мощность охлаждения</th>
            <th onClick={() => requestSort('size')}>Размеры</th>
            <th onClick={() => requestSort('resolution')}>Разрешение</th>
            <th onClick={() => requestSort('speed')}>Скорость</th>
            <th onClick={() => requestSort('temperatureReactionSpeed')}>Скорость реакции на изменения температуры</th>
            <th onClick={() => requestSort('stability')}>Стабильность</th>
            <th onClick={() => requestSort('structuralStrength')}>Структурная прочность</th>
            <th onClick={() => requestSort('temperatureRange')}>Температурный диапазон</th>
            <th onClick={() => requestSort('operationalTemperatureRange')}>Температурный диапазон работы</th>
            <th onClick={() => requestSort('thermalConductivity')}>Тепловая проводимость</th>
            <th onClick={() => requestSort('thermalExpansion')}>Тепловое расширение</th>
            <th onClick={() => requestSort('thermalConductivityCoefficient')}>Теплопроводность</th>
            <th onClick={() => requestSort('currentConsumption')}>Токопотребление</th>
            <th onClick={() => requestSort('accuracy')}>Точность</th>
            <th onClick={() => requestSort('temperatureSensitivity')}>Чувствительность к температуре</th>
            <th onClick={() => requestSort('noise')}>Шум</th>
            <th onClick={() => requestSort('electricalResistance')}>Электрическое сопротивление</th>
            <th onClick={() => requestSort('energyConversionEfficiency')}>Эффективность преобразования энергии</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.advantages.join(', ')}</td>
              <td>{item.disadvantages.join(', ')}</td>
              <td>{item.application.join(', ')}</td>
              <td>{item.availability}</td>
              <td>{item.qualityAndReliability}</td>
              <td>{item.manufacturingComplexity}</td>
              <td>{item.lifespan}</td>
              <td>{item.weight}</td>
              <td>{item.responseTime}</td>
              <td>{item.thermoelectricCoefficient}</td>
              <td>{item.coolingPower}</td>
              <td>{item.size}</td>
              <td>{item.resolution}</td>
              <td>{item.speed}</td>
              <td>{item.temperatureReactionSpeed}</td>
              <td>{item.stability}</td>
              <td>{item.structuralStrength}</td>
              <td>{item.temperatureRange}</td>
              <td>{item.operationalTemperatureRange}</td>
              <td>{item.thermalConductivity}</td>
              <td>{item.thermalExpansion}</td>
              <td>{item.thermalConductivityCoefficient}</td>
              <td>{item.currentConsumption}</td>
              <td>{item.accuracy}</td>
              <td>{item.temperatureSensitivity}</td>
              <td>{item.noise}</td>
              <td>{item.electricalResistance}</td>
              <td>{item.energyConversionEfficiency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ThermoSwitchesList;



const thermoSwitchesData = [
	{
	  name: 'Терморезистор',
	  description: 'Элемент, сопротивление которого изменяется в зависимости от температуры.',
	  advantages: ['Высокая точность', 'Простота использования'],
	  disadvantages: ['Медленный отклик', 'Ограниченный температурный диапазон'],
	  application: ['Температурные датчики', 'Измерительные приборы'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 2,
	  lifespan: 10,
	  components: ['Полупроводниковые материалы'],
	  weight: 'Низкий',
	  responseTime: 'Медленный',
	  thermoelectricCoefficient: 'Низкий',
	  coolingPower: 'Нет',
	  size: 'Малый',
	  resolution: 'Средняя',
	  speed: 'Низкая',
	  temperatureReactionSpeed: 'Медленная',
	  stability: 'Средняя',
	  structuralStrength: 'Средняя',
	  temperatureRange: '-50°C до 150°C',
	  operationalTemperatureRange: '-50°C до 150°C',
	  thermalConductivity: 'Низкая',
	  thermalExpansion: 'Низкий',
	  thermalConductivityCoefficient: 'Низкий',
	  currentConsumption: 'Низкий',
	  accuracy: 'Высокая',
	  temperatureSensitivity: 'Средняя',
	  noise: 'Низкий',
	  electricalResistance: 'Высокое',
	  energyConversionEfficiency: 'Средняя'
	},
	{
	  name: 'Термопара',
	  description: 'Устройство для измерения температуры с помощью термоэлектрического эффекта.',
	  advantages: ['Широкий температурный диапазон', 'Высокая скорость отклика'],
	  disadvantages: ['Необходимость в калибровке', 'Может быть дорогой'],
	  application: ['Промышленные датчики', 'Научные исследования'],
	  availability: 5,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 4,
	  lifespan: 15,
	  components: ['Металлы', 'Сплавы'],
	  weight: 'Средний',
	  responseTime: 'Быстрый',
	  thermoelectricCoefficient: 'Высокий',
	  coolingPower: 'Нет',
	  size: 'Средний',
	  resolution: 'Высокая',
	  speed: 'Высокая',
	  temperatureReactionSpeed: 'Быстрая',
	  stability: 'Высокая',
	  structuralStrength: 'Средняя',
	  temperatureRange: '-200°C до 1800°C',
	  operationalTemperatureRange: '-200°C до 1800°C',
	  thermalConductivity: 'Средняя',
	  thermalExpansion: 'Средний',
	  thermalConductivityCoefficient: 'Средний',
	  currentConsumption: 'Низкий',
	  accuracy: 'Высокая',
	  temperatureSensitivity: 'Высокая',
	  noise: 'Низкий',
	  electricalResistance: 'Низкое',
	  energyConversionEfficiency: 'Высокая'
	},
	{
	  name: 'Элемент Пельтье',
	  description: 'Устройство, использующее термоэлектрический эффект для создания холода и тепла.',
	  advantages: ['Компактность', 'Можно использовать для охлаждения и обогрева'],
	  disadvantages: ['Низкая эффективность', 'Необходима внешняя система охлаждения'],
	  application: ['Кулер для электронных устройств', 'Температурные контроллеры'],
	  availability: 3,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 3,
	  lifespan: 10,
	  components: ['Полупроводниковые материалы'],
	  weight: 'Средний',
	  responseTime: 'Средний',
	  thermoelectricCoefficient: 'Средний',
	  coolingPower: 'Средний',
	  size: 'Средний',
	  resolution: 'Средняя',
	  speed: 'Средняя',
	  temperatureReactionSpeed: 'Средняя',
	  stability: 'Средняя',
	  structuralStrength: 'Средняя',
	  temperatureRange: '-20°C до 70°C',
	  operationalTemperatureRange: '-20°C до 70°C',
	  thermalConductivity: 'Средняя',
	  thermalExpansion: 'Средний',
	  thermalConductivityCoefficient: 'Средний',
	  currentConsumption: 'Средний',
	  accuracy: 'Средняя',
	  temperatureSensitivity: 'Средняя',
	  noise: 'Низкий',
	  electricalResistance: 'Среднее',
	  energyConversionEfficiency: 'Средняя'
	},
	{
	  name: 'Термостат',
	  description: 'Устройство для поддержания заданной температуры.',
	  advantages: ['Простота управления', 'Эффективность'],
	  disadvantages: ['Может быть неточным', 'Зависимость от внешних факторов'],
	  application: ['Системы отопления и охлаждения', 'Контроль температуры в бытовых устройствах'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 2,
	  lifespan: 12,
	  components: ['Механические и электронные компоненты'],
	  weight: 'Низкий',
	  responseTime: 'Средний',
	  thermoelectricCoefficient: 'Не применимо',
	  coolingPower: 'Не применимо',
	  size: 'Небольшой',
	  resolution: 'Средняя',
	  speed: 'Средняя',
	  temperatureReactionSpeed: 'Средняя',
	  stability: 'Высокая',
	  structuralStrength: 'Средняя',
	  temperatureRange: '-50°C до 100°C',
	  operationalTemperatureRange: '-50°C до 100°C',
	  thermalConductivity: 'Не применимо',
	  thermalExpansion: 'Не применимо',
	  thermalConductivityCoefficient: 'Не применимо',
	  currentConsumption: 'Низкий',
	  accuracy: 'Средняя',
	  temperatureSensitivity: 'Средняя',
	  noise: 'Низкий',
	  electricalResistance: 'Не применимо',
	  energyConversionEfficiency: 'Не применимо'
	}
  ];

