import React, { useState } from 'react';



const optoelectronicComponents = [
	{
	  name: 'Фототрекеры',
	  description: 'Устройства, которые отслеживают движение света и изменяют направление.',
	  advantages: ['Высокая точность', 'Низкое энергопотребление'],
	  disadvantages: ['Сложность изготовления', 'Высокая стоимость'],
	  application: 'Солнечные батареи, системы наведения',
	  availability: 4,
	  qualityReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 10,
	  manufacturingComponents: ['Полупроводники', 'Транзисторы'],
	  insulationType: 'Полупроводниковые релейные',
	  constructionType: 'Транзисторные',
	  operationPrinciple: 'Активные',
	  forwardVoltage: '3.2V',
	  reverseVoltage: '10V',
	  maxForwardCurrent: '20mA',
	  maxReverseCurrent: '10μA',
	  turnOnTime: '50ns',
	  turnOffTime: '100ns',
	  insulation: 'Изолированные',
	  temperatureRange: '-40°C до 85°C',
	  angularResolution: '0.1°',
	  dataRate: '10Mbps',
	  transmissionCoefficient: '90%',
	},
	{
	  name: 'Фотодиоды',
	  description: 'Полупроводниковые устройства, которые преобразуют свет в электрический ток.',
	  advantages: ['Быстрая реакция', 'Высокая чувствительность'],
	  disadvantages: ['Ограниченная мощность', 'Зависимость от температуры'],
	  application: 'Датчики, оптические системы связи',
	  availability: 5,
	  qualityReliability: 5,
	  manufacturingComplexity: 2,
	  lifespan: 15,
	  manufacturingComponents: ['Полупроводники', 'Диоды'],
	  insulationType: 'Полупроводниковые релейные',
	  constructionType: 'Диодные',
	  operationPrinciple: 'Пассивные',
	  forwardVoltage: '1.1V',
	  reverseVoltage: '20V',
	  maxForwardCurrent: '10mA',
	  maxReverseCurrent: '5μA',
	  turnOnTime: '20ns',
	  turnOffTime: '50ns',
	  insulation: 'Изолированные',
	  temperatureRange: '-55°C до 125°C',
	  angularResolution: '0.05°',
	  dataRate: '100Mbps',
	  transmissionCoefficient: '95%',
	},
	{
	  name: 'Оптические реле',
	  description: 'Реле, которое переключается с использованием оптического сигнала вместо электрического.',
	  advantages: ['Гальваническая развязка', 'Высокая скорость переключения'],
	  disadvantages: ['Сложность конструкции', 'Относительно высокая цена'],
	  application: 'Системы автоматизации, телекоммуникации',
	  availability: 3,
	  qualityReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 20,
	  manufacturingComponents: ['Лазеры', 'Фотодиоды', 'Оптоволокно'],
	  insulationType: 'Полупроводниковые релейные',
	  constructionType: 'Транзисторные',
	  operationPrinciple: 'Активные',
	  forwardVoltage: '2.5V',
	  reverseVoltage: '15V',
	  maxForwardCurrent: '50mA',
	  maxReverseCurrent: '1μA',
	  turnOnTime: '10ns',
	  turnOffTime: '20ns',
	  insulation: 'Изолированные',
	  temperatureRange: '-30°C до 85°C',
	  angularResolution: 'N/A',
	  dataRate: '1Gbps',
	  transmissionCoefficient: '85%',
	},
	{
	  name: 'Фотосопротивления',
	  description: 'Резистивные элементы, изменяющие своё сопротивление в зависимости от интенсивности падающего света.',
	  advantages: ['Простота конструкции', 'Низкая стоимость'],
	  disadvantages: ['Медленная реакция', 'Ограниченная точность'],
	  application: 'Освещение, оптические датчики',
	  availability: 5,
	  qualityReliability: 3,
	  manufacturingComplexity: 1,
	  lifespan: 10,
	  manufacturingComponents: ['Кадмийсульфидные материалы', 'Полупроводники'],
	  insulationType: 'Полупроводниковые релейные',
	  constructionType: 'Диодные',
	  operationPrinciple: 'Пассивные',
	  forwardVoltage: '1.5V',
	  reverseVoltage: '5V',
	  maxForwardCurrent: '10mA',
	  maxReverseCurrent: '2μA',
	  turnOnTime: '200ms',
	  turnOffTime: '300ms',
	  insulation: 'Неизолированные',
	  temperatureRange: '-20°C до 70°C',
	  angularResolution: 'N/A',
	  dataRate: 'N/A',
	  transmissionCoefficient: '70%',
	},
	{
	  name: 'Оптические передатчики и приемники',
	  description: 'Устройства для передачи и приема оптических сигналов по оптоволокну.',
	  advantages: ['Высокая скорость передачи данных', 'Малая потеря сигнала'],
	  disadvantages: ['Сложность установки', 'Зависимость от качества оптоволокна'],
	  application: 'Телекоммуникации, сети передачи данных',
	  availability: 4,
	  qualityReliability: 5,
	  manufacturingComplexity: 5,
	  lifespan: 25,
	  manufacturingComponents: ['Лазеры', 'Фотодиоды', 'Оптоволокно'],
	  insulationType: 'Полупроводниковые релейные',
	  constructionType: 'Транзисторные',
	  operationPrinciple: 'Активные',
	  forwardVoltage: '1.8V',
	  reverseVoltage: '10V',
	  maxForwardCurrent: '30mA',
	  maxReverseCurrent: '5μA',
	  turnOnTime: '5ns',
	  turnOffTime: '10ns',
	  insulation: 'Изолированные',
	  temperatureRange: '-40°C до 85°C',
	  angularResolution: 'N/A',
	  dataRate: '10Gbps',
	  transmissionCoefficient: '99%',
	},
  ];


// Компонент для отображения таблицы с сортировкой
const OptoelectronicComponentsTable = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedComponents = [...optoelectronicComponents].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  return (
    <div>
      <h1>Оптоэлектронные компоненты</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortData('name')}>Название</th>
            <th onClick={() => sortData('description')}>Описание</th>
            <th onClick={() => sortData('advantages')}>Преимущества</th>
            <th onClick={() => sortData('disadvantages')}>Недостатки</th>
            <th onClick={() => sortData('application')}>Применение</th>
            <th onClick={() => sortData('availability')}>Доступность</th>
            <th onClick={() => sortData('qualityReliability')}>Качество и надежность</th>
            <th onClick={() => sortData('manufacturingComplexity')}>Сложность изготовления</th>
            <th onClick={() => sortData('lifespan')}>Срок службы (лет)</th>
            <th onClick={() => sortData('manufacturingComponents')}>Компоненты изготовления</th>
            <th onClick={() => sortData('insulationType')}>По способу изоляции</th>
            <th onClick={() => sortData('constructionType')}>По конструкции</th>
            <th onClick={() => sortData('operationPrinciple')}>По принципу работы</th>
            <th onClick={() => sortData('forwardVoltage')}>Напряжение прямого тока</th>
            <th onClick={() => sortData('reverseVoltage')}>Напряжение обратного тока</th>
            <th onClick={() => sortData('maxForwardCurrent')}>Максимальный прямой ток</th>
            <th onClick={() => sortData('maxReverseCurrent')}>Максимальный обратный ток</th>
            <th onClick={() => sortData('turnOnTime')}>Время включения</th>
            <th onClick={() => sortData('turnOffTime')}>Время выключения</th>
            <th onClick={() => sortData('insulation')}>Изоляция</th>
            <th onClick={() => sortData('temperatureRange')}>Температурный диапазон</th>
            <th onClick={() => sortData('angularResolution')}>Угловое разрешение</th>
            <th onClick={() => sortData('dataRate')}>Скорость передачи данных</th>
            <th onClick={() => sortData('transmissionCoefficient')}>Коэффициент передачи</th>
          </tr>
        </thead>
        <tbody>
          {sortedComponents.map((component, index) => (
            <tr key={index}>
              <td>{component.name}</td>
              <td>{component.description}</td>
              <td>{component.advantages.join(', ')}</td>
              <td>{component.disadvantages.join(', ')}</td>
              <td>{component.application}</td>
              <td>{component.availability}</td>
              <td>{component.qualityReliability}</td>
              <td>{component.manufacturingComplexity}</td>
              <td>{component.lifespan}</td>
              <td>{component.manufacturingComponents.join(', ')}</td>
              <td>{component.insulationType}</td>
              <td>{component.constructionType}</td>
              <td>{component.operationPrinciple}</td>
              <td>{component.forwardVoltage}</td>
              <td>{component.reverseVoltage}</td>
              <td>{component.maxForwardCurrent}</td>
              <td>{component.maxReverseCurrent}</td>
              <td>{component.turnOnTime}</td>
              <td>{component.turnOffTime}</td>
              <td>{component.insulation}</td>
              <td>{component.temperatureRange}</td>
              <td>{component.angularResolution}</td>
              <td>{component.dataRate}</td>
              <td>{component.transmissionCoefficient}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OptoelectronicComponentsTable;
