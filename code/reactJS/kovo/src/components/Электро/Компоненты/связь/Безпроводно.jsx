import React, { useState } from 'react';




const wirelessCommunicationData = [
	{
	  name: 'Радиоволны',
	  description: 'Используются для передачи информации на больших расстояниях с помощью электромагнитных волн.',
	  advantages: ['Дальность передачи', 'Широкое применение'],
	  disadvantages: ['Может быть подвержено помехам', 'Зависимость от условий среды'],
	  application: ['Радио', 'Телевидение', 'Связь'],
	  availability: 5,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 20,
	  components: ['Антенны', 'Передатчики', 'Приемники'],
	  frequencyRange: '3 kHz - 300 GHz',
	  transmissionRange: 'До тысяч километров',
	  dataTransferSpeed: 'Низкая до высокой',
	  bandwidth: 'Разная в зависимости от технологии',
	  interferenceResistance: 'Средняя',
	  visibilityRequirement: 'Независимо от видимости',
	  transmissionMedium: 'Воздух',
	  accuracy: 'Средняя',
	  energyEfficiency: 'Средняя',
	  environmentalSensitivity: 'Средняя',
	  transmissionDelay: 'Низкая',
	  dataSecurity: 'Средняя',
	  interferenceWithOtherSystems: 'Средняя',
	  energyConsumption: 'Среднее',
	  scalability: 'Высокая',
	  feedbackAndControl: 'Среднее',
	  applicationFlexibility: 'Высокая',
	},
	{
	  name: 'Микроволны',
	  description: 'Используются для передачи данных на короткие и средние расстояния, часто для высокоскоростной связи.',
	  advantages: ['Высокая скорость передачи данных', 'Меньше помех'],
	  disadvantages: ['Меньшая дальность передачи', 'Чувствительность к погодным условиям'],
	  application: ['Мобильная связь', 'Wi-Fi', 'Системы радаров'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 15,
	  components: ['Микроволновые антенны', 'Передатчики', 'Приемники'],
	  frequencyRange: '1 GHz - 300 GHz',
	  transmissionRange: 'До нескольких километров',
	  dataTransferSpeed: 'Высокая',
	  bandwidth: 'Высокая',
	  interferenceResistance: 'Высокая',
	  visibilityRequirement: 'Независимо от видимости',
	  transmissionMedium: 'Воздух',
	  accuracy: 'Высокая',
	  energyEfficiency: 'Средняя',
	  environmentalSensitivity: 'Средняя',
	  transmissionDelay: 'Низкая',
	  dataSecurity: 'Средняя',
	  interferenceWithOtherSystems: 'Низкая',
	  energyConsumption: 'Среднее',
	  scalability: 'Средняя',
	  feedbackAndControl: 'Среднее',
	  applicationFlexibility: 'Средняя',
	},
	{
	  name: 'Инфракрасные волны',
	  description: 'Используются для передачи информации на короткие расстояния с помощью инфракрасного излучения.',
	  advantages: ['Высокая скорость передачи данных', 'Минимальные помехи от других источников'],
	  disadvantages: ['Короткая дальность передачи', 'Зависимость от преград между передатчиком и приемником'],
	  application: ['Пульты дистанционного управления', 'Кабельные системы'],
	  availability: 5,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 2,
	  lifespan: 10,
	  components: ['Инфракрасные диоды', 'Фотоприемники'],
	  frequencyRange: '300 GHz - 400 THz',
	  transmissionRange: 'До нескольких метров',
	  dataTransferSpeed: 'Средняя',
	  bandwidth: 'Средняя',
	  interferenceResistance: 'Высокая',
	  visibilityRequirement: 'Необходима прямая видимость',
	  transmissionMedium: 'Воздух',
	  accuracy: 'Высокая',
	  energyEfficiency: 'Средняя',
	  environmentalSensitivity: 'Высокая',
	  transmissionDelay: 'Низкая',
	  dataSecurity: 'Средняя',
	  interferenceWithOtherSystems: 'Низкая',
	  energyConsumption: 'Среднее',
	  scalability: 'Низкая',
	  feedbackAndControl: 'Низкое',
	  applicationFlexibility: 'Низкая',
	},
	{
	  name: 'Видимый свет',
	  description: 'Используется для передачи данных с помощью оптических сигналов, видимых человеческому глазу.',
	  advantages: ['Очень высокая скорость передачи данных', 'Высокая точность'],
	  disadvantages: ['Нужна прямая видимость', 'Может быть подвержено помехам от солнечного света'],
	  application: ['Оптоволоконные сети', 'Лазерные системы'],
	  availability: 4,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 5,
	  lifespan: 20,
	  components: ['Оптические волокна', 'Лазеры'],
	  frequencyRange: '430 THz - 770 THz',
	  transmissionRange: 'До нескольких километров',
	  dataTransferSpeed: 'Очень высокая',
	  bandwidth: 'Очень высокая',
	  interferenceResistance: 'Высокая',
	  visibilityRequirement: 'Необходима прямая видимость',
	  transmissionMedium: 'Воздух или оптические волокна',
	  accuracy: 'Очень высокая',
	  energyEfficiency: 'Средняя',
	  environmentalSensitivity: 'Средняя',
	  transmissionDelay: 'Очень низкая',
	  dataSecurity: 'Высокая',
	  interferenceWithOtherSystems: 'Низкая',
	  energyConsumption: 'Среднее',
	  scalability: 'Высокая',
	  feedbackAndControl: 'Высокое',
	  applicationFlexibility: 'Средняя',
	},
	{
	  name: 'Ультразвуковые волны',
	  description: 'Используются для передачи данных на небольшие расстояния с помощью ультразвука.',
	  advantages: ['Простота реализации', 'Малое энергопотребление'],
	  disadvantages: ['Короткая дальность передачи', 'Чувствительность к преградам'],
	  application: ['Ультразвуковые датчики', 'Медицинская диагностика'],
	  availability: 5,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 2,
	  lifespan: 10,
	  components: ['Ультразвуковые преобразователи', 'Датчики'],
	  frequencyRange: '20 kHz - 1 GHz',
	  transmissionRange: 'До нескольких метров',
	  dataTransferSpeed: 'Низкая',
	  bandwidth: 'Низкая',
	  interferenceResistance: 'Средняя',
	  visibilityRequirement: 'Не требуется',
	  transmissionMedium: 'Воздух или жидкости',
	  accuracy: 'Средняя',
	  energyEfficiency: 'Высокая',
	  environmentalSensitivity: 'Средняя',
	  transmissionDelay: 'Низкая',
	  dataSecurity: 'Средняя',
	  interferenceWithOtherSystems: 'Низкая',
	  energyConsumption: 'Низкое',
	  scalability: 'Низкая',
	  feedbackAndControl: 'Среднее',
	  applicationFlexibility: 'Низкая',
	},
	{
	  name: 'Электрическое поле',
	  description: 'Используется для передачи информации через изменяющееся электрическое поле.',
	  advantages: ['Высокая скорость передачи данных', 'Простота реализации'],
	  disadvantages: ['Чувствительность к помехам', 'Ограниченная дальность передачи'],
	  application: ['Системы RFID', 'Беспроводные зарядные устройства'],
	  availability: 4,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 3,
	  lifespan: 15,
	  components: ['Антенны', 'Передатчики'],
	  frequencyRange: 'DC - 10 MHz',
	  transmissionRange: 'До нескольких метров',
	  dataTransferSpeed: 'Средняя',
	  bandwidth: 'Средняя',
	  interferenceResistance: 'Средняя',
	  visibilityRequirement: 'Не требуется',
	  transmissionMedium: 'Воздух',
	  accuracy: 'Средняя',
	  energyEfficiency: 'Средняя',
	  environmentalSensitivity: 'Средняя',
	  transmissionDelay: 'Низкая',
	  dataSecurity: 'Средняя',
	  interferenceWithOtherSystems: 'Средняя',
	  energyConsumption: 'Среднее',
	  scalability: 'Средняя',
	  feedbackAndControl: 'Среднее',
	  applicationFlexibility: 'Средняя',
	},
	{
	  name: 'Магнитное поле',
	  description: 'Используется для передачи информации через изменяющееся магнитное поле.',
	  advantages: ['Высокая безопасность передачи', 'Простота реализации'],
	  disadvantages: ['Ограниченная дальность передачи', 'Чувствительность к помехам'],
	  application: ['Беспроводные зарядные устройства', 'Системы для передачи данных на короткие расстояния'],
	  availability: 3,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 3,
	  lifespan: 15,
	  components: ['Магнитные катушки', 'Передатчики'],
	  frequencyRange: 'DC - 100 kHz',
	  transmissionRange: 'До нескольких метров',
	  dataTransferSpeed: 'Средняя',
	  bandwidth: 'Средняя',
	  interferenceResistance: 'Средняя',
	  visibilityRequirement: 'Не требуется',
	  transmissionMedium: 'Воздух',
	  accuracy: 'Средняя',
	  energyEfficiency: 'Средняя',
	  environmentalSensitivity: 'Средняя',
	  transmissionDelay: 'Низкая',
	  dataSecurity: 'Высокая',
	  interferenceWithOtherSystems: 'Средняя',
	  energyConsumption: 'Среднее',
	  scalability: 'Средняя',
	  feedbackAndControl: 'Среднее',
	  applicationFlexibility: 'Средняя',
	},
	{
	  name: 'Термоэлектричество',
	  description: 'Использует термоэлектрические эффекты для передачи энергии и данных.',
	  advantages: ['Малое энергопотребление', 'Простота реализации'],
	  disadvantages: ['Короткая дальность передачи', 'Ограниченная скорость передачи данных'],
	  application: ['Беспроводные сенсоры', 'Медицинские устройства'],
	  availability: 2,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 10,
	  components: ['Термоэлектрические элементы', 'Сенсоры'],
	  frequencyRange: 'DC',
	  transmissionRange: 'До нескольких метров',
	  dataTransferSpeed: 'Низкая',
	  bandwidth: 'Низкая',
	  interferenceResistance: 'Средняя',
	  visibilityRequirement: 'Не требуется',
	  transmissionMedium: 'Воздух',
	  accuracy: 'Средняя',
	  energyEfficiency: 'Высокая',
	  environmentalSensitivity: 'Средняя',
	  transmissionDelay: 'Низкая',
	  dataSecurity: 'Средняя',
	  interferenceWithOtherSystems: 'Низкая',
	  energyConsumption: 'Низкое',
	  scalability: 'Низкая',
	  feedbackAndControl: 'Низкое',
	  applicationFlexibility: 'Низкая',
	},
	{
	  name: 'Вибрации твердых тел',
	  description: 'Используют вибрации твердых материалов для передачи данных на короткие расстояния.',
	  advantages: ['Простота реализации', 'Малое энергопотребление'],
	  disadvantages: ['Ограниченная дальность передачи', 'Чувствительность к физическим преградам'],
	  application: ['Сенсоры', 'Беспроводные устройства'],
	  availability: 1,
	  qualityAndReliability: 2,
	  manufacturingComplexity: 2,
	  lifespan: 10,
	  components: ['Вибрационные датчики', 'Сенсоры'],
	  frequencyRange: '10 Hz - 10 kHz',
	  transmissionRange: 'До нескольких метров',
	  dataTransferSpeed: 'Низкая',
	  bandwidth: 'Низкая',
	  interferenceResistance: 'Средняя',
	  visibilityRequirement: 'Не требуется',
	  transmissionMedium: 'Твердые материалы',
	  accuracy: 'Средняя',
	  energyEfficiency: 'Высокая',
	  environmentalSensitivity: 'Средняя',
	  transmissionDelay: 'Низкая',
	  dataSecurity: 'Средняя',
	  interferenceWithOtherSystems: 'Низкая',
	  energyConsumption: 'Низкое',
	  scalability: 'Низкая',
	  feedbackAndControl: 'Низкое',
	  applicationFlexibility: 'Низкая',
	},
	{
	  name: 'Химические реакции',
	  description: 'Используют химические реакции для передачи информации или энергии.',
	  advantages: ['Малое энергопотребление', 'Простота реализации'],
	  disadvantages: ['Ограниченная дальность передачи', 'Чувствительность к внешним условиям'],
	  application: ['Беспроводные сенсоры', 'Медицинские устройства'],
	  availability: 2,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 4,
	  lifespan: 5,
	  components: ['Химические сенсоры', 'Реактивы'],
	  frequencyRange: 'DC',
	  transmissionRange: 'До нескольких метров',
	  dataTransferSpeed: 'Низкая',
	  bandwidth: 'Низкая',
	  interferenceResistance: 'Средняя',
	  visibilityRequirement: 'Не требуется',
	  transmissionMedium: 'Химические вещества',
	  accuracy: 'Средняя',
	  energyEfficiency: 'Высокая',
	  environmentalSensitivity: 'Высокая',
	  transmissionDelay: 'Низкая',
	  dataSecurity: 'Средняя',
	  interferenceWithOtherSystems: 'Низкая',
	  energyConsumption: 'Низкое',
	  scalability: 'Низкая',
	  feedbackAndControl: 'Низкое',
	  applicationFlexibility: 'Низкая',
	},
	{
	  name: 'Магнитная индукция',
	  description: 'Использует изменения магнитного поля для передачи информации.',
	  advantages: ['Высокая безопасность передачи', 'Низкое энергопотребление'],
	  disadvantages: ['Ограниченная дальность передачи', 'Чувствительность к помехам'],
	  application: ['Беспроводные зарядные устройства', 'Системы передачи данных на короткие расстояния'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 15,
	  components: ['Магнитные катушки', 'Передатчики'],
	  frequencyRange: 'DC - 100 kHz',
	  transmissionRange: 'До нескольких метров',
	  dataTransferSpeed: 'Средняя',
	  bandwidth: 'Средняя',
	  interferenceResistance: 'Средняя',
	  visibilityRequirement: 'Не требуется',
	  transmissionMedium: 'Воздух',
	  accuracy: 'Средняя',
	  energyEfficiency: 'Средняя',
	  environmentalSensitivity: 'Средняя',
	  transmissionDelay: 'Низкая',
	  dataSecurity: 'Высокая',
	  interferenceWithOtherSystems: 'Средняя',
	  energyConsumption: 'Среднее',
	  scalability: 'Средняя',
	  feedbackAndControl: 'Среднее',
	  applicationFlexibility: 'Средняя',
	},
  ];



const WirelessCommunicationList = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedData = [...wirelessCommunicationData].sort((a, b) => {
    if (sortConfig.key !== null) {
      const isAscending = sortConfig.direction === 'ascending';
      if (typeof a[sortConfig.key] === 'string') {
        return isAscending ? a[sortConfig.key].localeCompare(b[sortConfig.key]) : b[sortConfig.key].localeCompare(a[sortConfig.key]);
      }
      if (typeof a[sortConfig.key] === 'number') {
        return isAscending ? a[sortConfig.key] - b[sortConfig.key] : b[sortConfig.key] - a[sortConfig.key];
      }
      if (Array.isArray(a[sortConfig.key])) {
        return isAscending ? a[sortConfig.key].join(', ').localeCompare(b[sortConfig.key].join(', ')) : b[sortConfig.key].join(', ').localeCompare(a[sortConfig.key].join(', '));
      }
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Беспроводная связь</h1>
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
            <th onClick={() => requestSort('lifespan')}>Срок службы (лет)</th>
            <th onClick={() => requestSort('components')}>Компоненты изготовления</th>
            <th onClick={() => requestSort('frequencyRange')}>Диапазон частот</th>
            <th onClick={() => requestSort('transmissionRange')}>Дальность передачи</th>
            <th onClick={() => requestSort('dataTransferSpeed')}>Скорость передачи данных</th>
            <th onClick={() => requestSort('bandwidth')}>Пропускная способность</th>
            <th onClick={() => requestSort('interferenceResistance')}>Устойчивость к помехам</th>
            <th onClick={() => requestSort('visibilityRequirement')}>Требование к видимости</th>
            <th onClick={() => requestSort('transmissionMedium')}>Среда передачи</th>
            <th onClick={() => requestSort('accuracy')}>Точность</th>
            <th onClick={() => requestSort('energyEfficiency')}>Энергетическая эффективность</th>
            <th onClick={() => requestSort('environmentalSensitivity')}>Чувствительность к окружающей среде</th>
            <th onClick={() => requestSort('transmissionDelay')}>Задержка передачи</th>
            <th onClick={() => requestSort('dataSecurity')}>Безопасность передачи данных</th>
            <th onClick={() => requestSort('interferenceWithOtherSystems')}>Интерференция с другими системами</th>
            <th onClick={() => requestSort('energyConsumption')}>Энергетическая потребляемость</th>
            <th onClick={() => requestSort('scalability')}>Масштабируемость</th>
            <th onClick={() => requestSort('feedbackAndControl')}>Обратная связь и контроль</th>
            <th onClick={() => requestSort('applicationFlexibility')}>Гибкость в применении</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((component, index) => (
            <tr key={index}>
              <td>{component.name}</td>
              <td>{component.description}</td>
              <td>{component.advantages.join(', ')}</td>
              <td>{component.disadvantages.join(', ')}</td>
              <td>{component.application.join(', ')}</td>
              <td>{component.availability}</td>
              <td>{component.qualityAndReliability}</td>
              <td>{component.manufacturingComplexity}</td>
              <td>{component.lifespan}</td>
              <td>{component.components.join(', ')}</td>
              <td>{component.frequencyRange}</td>
              <td>{component.transmissionRange}</td>
              <td>{component.dataTransferSpeed}</td>
              <td>{component.bandwidth}</td>
              <td>{component.interferenceResistance}</td>
              <td>{component.visibilityRequirement}</td>
              <td>{component.transmissionMedium}</td>
              <td>{component.accuracy}</td>
              <td>{component.energyEfficiency}</td>
              <td>{component.environmentalSensitivity}</td>
              <td>{component.transmissionDelay}</td>
              <td>{component.dataSecurity}</td>
              <td>{component.interferenceWithOtherSystems}</td>
              <td>{component.energyConsumption}</td>
              <td>{component.scalability}</td>
              <td>{component.feedbackAndControl}</td>
              <td>{component.applicationFlexibility}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WirelessCommunicationList;
