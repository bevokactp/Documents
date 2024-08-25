import React, { useState } from 'react';




const navigationSystemsData = [
	{
	  name: 'RTK',
	  description: 'Real-Time Kinematic — метод высокоточного позиционирования, использующий корректирующие данные.',
	  advantages: ['Высокая точность', 'Мгновенная корректировка', 'Широкое применение'],
	  disadvantages: ['Высокая стоимость оборудования', 'Зависимость от базовой станции'],
	  application: ['Строительство', 'Геодезия', 'Сельское хозяйство'],
	  availability: 4,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 4,
	  lifespan: 10,
	  components: ['Антенна', 'Приемник', 'Базовая станция'],
	  accuracy: '1-2 см',
	  correctionMethod: 'RTK',
	  equipment: 'Приемник GNSS',
	  latency: '1-2 с',
	  coverage: 'Ограниченная зона вокруг базовой станции',
	  interferenceSensitivity: 'Высокая',
	  updateRate: '1-10 Гц',
	  signalType: 'GPS, GLONASS, Galileo',
	  baseStationRequirement: 'Да',
	  atmosphericImpactResistance: 'Средняя',
	  energyResourceImpact: 'Высокое потребление энергии',
	  frequencyBandwidth: '50 MHz',
	  interfacesAndCommunication: 'RS232, USB, Ethernet',
	  visibilityConditions: 'Чистое небо',
	  mapDataQuality: 'Высокая',
	  initializationSpeed: 'Быстрая',
	  calibrationAndSettings: 'Регулярная калибровка',
	  dataPostProcessing: 'Доступно',
	  integrationCapabilities: 'Высокие',
	  multiPathErrorResistance: 'Средняя',
	  adaptabilityToChangingConditions: 'Ограниченная',
	  energyConsumption: 'Высокое',
	  form: 'Компактный',
	  dimensions: '200x150x50 мм'
	},
	{
	  name: 'GNSS',
	  description: 'Global Navigation Satellite System — глобальная система спутниковой навигации.',
	  advantages: ['Мировое покрытие', 'Поддержка множества спутников', 'Высокая точность'],
	  disadvantages: ['Зависимость от спутников', 'Влияние атмосферных условий'],
	  application: ['Автомобильная навигация', 'Мобильные устройства', 'Авиаперевозки'],
	  availability: 5,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 3,
	  lifespan: 15,
	  components: ['Спутники', 'Приемники', 'Антенны'],
	  accuracy: '3-10 м',
	  correctionMethod: 'DIFF',
	  equipment: 'Приемник GNSS',
	  latency: '0.5-2 с',
	  coverage: 'Глобальное',
	  interferenceSensitivity: 'Средняя',
	  updateRate: '1-5 Гц',
	  signalType: 'GPS, GLONASS, Galileo, BeiDou',
	  baseStationRequirement: 'Нет',
	  atmosphericImpactResistance: 'Высокая',
	  energyResourceImpact: 'Среднее потребление энергии',
	  frequencyBandwidth: '25 MHz',
	  interfacesAndCommunication: 'RS232, USB, Bluetooth',
	  visibilityConditions: 'Открытое пространство',
	  mapDataQuality: 'Средняя',
	  initializationSpeed: 'Средняя',
	  calibrationAndSettings: 'Редко требуется',
	  dataPostProcessing: 'Доступно',
	  integrationCapabilities: 'Высокие',
	  multiPathErrorResistance: 'Средняя',
	  adaptabilityToChangingConditions: 'Хорошая',
	  energyConsumption: 'Среднее',
	  form: 'Разные формы',
	  dimensions: 'Разные размеры'
	},
	{
	  name: 'DGPS',
	  description: 'Differential GPS — система дифференциальной корректировки GPS.',
	  advantages: ['Улучшенная точность', 'Снижение погрешностей', 'Широкое применение'],
	  disadvantages: ['Зависимость от базовой станции', 'Ограниченное покрытие'],
	  application: ['Морская навигация', 'Воздушные транспортные средства', 'Геодезические работы'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 8,
	  components: ['Базовая станция', 'Приемник', 'Антенна'],
	  accuracy: '1-3 м',
	  correctionMethod: 'DGPS',
	  equipment: 'Приемник DGPS',
	  latency: '2-5 с',
	  coverage: 'Ограниченная зона вокруг базовой станции',
	  interferenceSensitivity: 'Средняя',
	  updateRate: '1-10 Гц',
	  signalType: 'GPS',
	  baseStationRequirement: 'Да',
	  atmosphericImpactResistance: 'Средняя',
	  energyResourceImpact: 'Среднее потребление энергии',
	  frequencyBandwidth: '30 MHz',
	  interfacesAndCommunication: 'RS232, USB',
	  visibilityConditions: 'Чистое небо',
	  mapDataQuality: 'Средняя',
	  initializationSpeed: 'Средняя',
	  calibrationAndSettings: 'Регулярная калибровка',
	  dataPostProcessing: 'Доступно',
	  integrationCapabilities: 'Средние',
	  multiPathErrorResistance: 'Средняя',
	  adaptabilityToChangingConditions: 'Средняя',
	  energyConsumption: 'Среднее',
	  form: 'Компактный',
	  dimensions: '150x100x50 мм'
	}
  ];




const NavigationSystemsList = () => {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...navigationSystemsData];
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
      <h1>Системы позиционирования</h1>
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
            <th onClick={() => requestSort('accuracy')}>Точность</th>
            <th onClick={() => requestSort('correctionMethod')}>Метод коррекции</th>
            <th onClick={() => requestSort('equipment')}>Оборудование</th>
            <th onClick={() => requestSort('latency')}>Задержка</th>
            <th onClick={() => requestSort('coverage')}>Покрытие</th>
            <th onClick={() => requestSort('interferenceSensitivity')}>Чувствительность к помехам</th>
            <th onClick={() => requestSort('updateRate')}>Скорость обновления</th>
            <th onClick={() => requestSort('signalType')}>Тип сигнала</th>
            <th onClick={() => requestSort('baseStationRequirement')}>Необходимость в базовой станции</th>
            <th onClick={() => requestSort('atmosphericImpactResistance')}>Устойчивость к атмосферным воздействиям</th>
            <th onClick={() => requestSort('energyResourceImpact')}>Влияние на энергетические ресурсы</th>
            <th onClick={() => requestSort('frequencyBandwidth')}>Потребляемая полоса частот</th>
            <th onClick={() => requestSort('interfacesAndCommunication')}>Интерфейсы и связь</th>
            <th onClick={() => requestSort('visibilityConditions')}>Требуемые условия видимости</th>
            <th onClick={() => requestSort('mapDataQuality')}>Качество картографических данных</th>
            <th onClick={() => requestSort('initializationSpeed')}>Скорость инициализации</th>
            <th onClick={() => requestSort('calibrationAndSettings')}>Калибровка и настройки</th>
            <th onClick={() => requestSort('dataPostProcessing')}>Постобработка данных</th>
            <th onClick={() => requestSort('integrationCapabilities')}>Способности к интеграции</th>
            <th onClick={() => requestSort('multiPathErrorResistance')}>Устойчивость к многозначным ошибкам</th>
            <th onClick={() => requestSort('adaptabilityToChangingConditions')}>Адаптивность к изменяющимся условиям</th>
            <th onClick={() => requestSort('energyConsumption')}>Потребление энергии</th>
            <th onClick={() => requestSort('form')}>Форма</th>
            <th onClick={() => requestSort('dimensions')}>Размеры</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((system, index) => (
            <tr key={index}>
              <td>{system.name}</td>
              <td>{system.description}</td>
              <td>{system.advantages.join(', ')}</td>
              <td>{system.disadvantages.join(', ')}</td>
              <td>{system.application.join(', ')}</td>
              <td>{system.availability}</td>
              <td>{system.qualityAndReliability}</td>
              <td>{system.manufacturingComplexity}</td>
              <td>{system.lifespan}</td>
              <td>{system.components.join(', ')}</td>
              <td>{system.accuracy}</td>
              <td>{system.correctionMethod}</td>
              <td>{system.equipment}</td>
              <td>{system.latency}</td>
              <td>{system.coverage}</td>
              <td>{system.interferenceSensitivity}</td>
              <td>{system.updateRate}</td>
              <td>{system.signalType}</td>
              <td>{system.baseStationRequirement}</td>
              <td>{system.atmosphericImpactResistance}</td>
              <td>{system.energyResourceImpact}</td>
              <td>{system.frequencyBandwidth}</td>
              <td>{system.interfacesAndCommunication}</td>
              <td>{system.visibilityConditions}</td>
              <td>{system.mapDataQuality}</td>
              <td>{system.initializationSpeed}</td>
              <td>{system.calibrationAndSettings}</td>
              <td>{system.dataPostProcessing}</td>
              <td>{system.integrationCapabilities}</td>
              <td>{system.multiPathErrorResistance}</td>
              <td>{system.adaptabilityToChangingConditions}</td>
              <td>{system.energyConsumption}</td>
              <td>{system.form}</td>
              <td>{system.dimensions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NavigationSystemsList;
