import React, { useState } from 'react';

const dischargeData = [
  {
    name: 'Тлеющий',
    description: 'Разряд, при котором ток протекает через газ с образованием слабого света.',
    advantages: ['Низкое энергопотребление', 'Долгий срок службы'],
    disadvantages: ['Низкая яркость', 'Ограниченные применения'],
    application: ['Освещение индикаторов', 'Зарядные устройства'],
    availability: 4,
    qualityAndReliability: 4,
    manufacturingComplexity: 2,
    lifespanYears: 5,
    components: ['Электроды', 'Газовая среда'],
    dcDischarge: 'Непрерывный разряд',
    acDischarge: 'Частотный разряд',
    frequencyDischarge: 'С фиксированной частотой',
    gasMedium: 'Неоновый',
    excitationMethod: 'Токовый разряд',
    operatingVoltage: '100-200 В',
    dischargeCurrent: '0.1-1 мА',
    dischargeStability: 'Средняя',
    operatingTemperatureRange: '-10-50°C',
    ignitionTime: 'Мгновенное',
    duration: 'Долгий',
    luminousFlux: 'Низкий',
    energyEfficiency: 'Средняя',
    powerConsumption: 'Низкая',
    indicationAbility: 'Средняя',
  },
  {
    name: 'Коронный',
    description: 'Разряд, при котором ток проходит через газ с образованием яркой короны.',
    advantages: ['Высокая яркость', 'Широкое применение'],
    disadvantages: ['Высокая стоимость', 'Высокое энергопотребление'],
    application: ['Лазеры', 'Медицинские приборы'],
    availability: 3,
    qualityAndReliability: 5,
    manufacturingComplexity: 4,
    lifespanYears: 8,
    components: ['Электроды', 'Стабилизаторы'],
    dcDischarge: 'Импульсный разряд',
    acDischarge: 'Синусоидальный разряд',
    frequencyDischarge: 'С регулируемой частотой',
    gasMedium: 'Аргонный',
    excitationMethod: 'Электрический разряд',
    operatingVoltage: '200-300 В',
    dischargeCurrent: '1-10 мА',
    dischargeStability: 'Высокая',
    operatingTemperatureRange: '-20-60°C',
    ignitionTime: 'Несколько секунд',
    duration: 'Средний',
    luminousFlux: 'Высокий',
    energyEfficiency: 'Средняя',
    powerConsumption: 'Средняя',
    indicationAbility: 'Высокая',
  },
  {
    name: 'Дуговой',
    description: 'Разряд, при котором ток проходит через газ с образованием яркой дуги.',
    advantages: ['Очень высокая яркость', 'Долгий срок службы'],
    disadvantages: ['Высокая температура', 'Высокое энергопотребление'],
    application: ['Промышленное освещение', 'Проекторы'],
    availability: 4,
    qualityAndReliability: 5,
    manufacturingComplexity: 5,
    lifespanYears: 10,
    components: ['Электроды', 'Рефлекторы'],
    dcDischarge: 'Непрерывный разряд',
    acDischarge: 'Частотный разряд',
    frequencyDischarge: 'С фиксированной частотой',
    gasMedium: 'Ксеноновый',
    excitationMethod: 'Оптическое возбуждение',
    operatingVoltage: '500-1000 В',
    dischargeCurrent: '10-50 мА',
    dischargeStability: 'Очень высокая',
    operatingTemperatureRange: '-10-80°C',
    ignitionTime: 'Несколько минут',
    duration: 'Очень долгий',
    luminousFlux: 'Очень высокий',
    energyEfficiency: 'Средняя',
    powerConsumption: 'Высокая',
    indicationAbility: 'Средняя',
  },
  {
    name: 'Искровой',
    description: 'Разряд, при котором ток проходит через газ с образованием искры.',
    advantages: ['Мгновенное зажигание', 'Широкий спектр'],
    disadvantages: ['Короткий срок службы', 'Необходима частая замена'],
    application: ['Флешеры', 'Научные эксперименты'],
    availability: 2,
    qualityAndReliability: 3,
    manufacturingComplexity: 3,
    lifespanYears: 2,
    components: ['Электроды', 'Изоляторы'],
    dcDischarge: 'Импульсный разряд',
    acDischarge: 'Частотный разряд',
    frequencyDischarge: 'С фиксированной частотой',
    gasMedium: 'Криптоновый',
    excitationMethod: 'Магнитное возбуждение',
    operatingVoltage: '50-100 В',
    dischargeCurrent: '5-15 мА',
    dischargeStability: 'Низкая',
    operatingTemperatureRange: '0-40°C',
    ignitionTime: 'Мгновенное',
    duration: 'Короткий',
    luminousFlux: 'Средний',
    energyEfficiency: 'Низкая',
    powerConsumption: 'Средняя',
    indicationAbility: 'Высокая',
  },
];

const DischargeList = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedData = [...dischargeData].sort((a, b) => {
    if (sortConfig.key) {
      const isAscending = sortConfig.direction === 'asc';
      if (typeof a[sortConfig.key] === 'string') {
        return isAscending
          ? a[sortConfig.key].localeCompare(b[sortConfig.key])
          : b[sortConfig.key].localeCompare(a[sortConfig.key]);
      }
      if (typeof a[sortConfig.key] === 'number') {
        return isAscending
          ? a[sortConfig.key] - b[sortConfig.key]
          : b[sortConfig.key] - a[sortConfig.key];
      }
      if (Array.isArray(a[sortConfig.key])) {
        return isAscending
          ? a[sortConfig.key].length - b[sortConfig.key].length
          : b[sortConfig.key].length - a[sortConfig.key].length;
      }
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Виды разрядов</h1>
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
            <th onClick={() => requestSort('lifespanYears')}>Срок службы лет</th>
            <th onClick={() => requestSort('components')}>Компоненты изготовления</th>
            <th onClick={() => requestSort('dcDischarge')}>Разряд с постоянным током</th>
            <th onClick={() => requestSort('acDischarge')}>Разряд с переменным током</th>
            <th onClick={() => requestSort('frequencyDischarge')}>Разряд с переменной частотой</th>
            <th onClick={() => requestSort('gasMedium')}>Газовая среда</th>
            <th onClick={() => requestSort('excitationMethod')}>Способ возбуждения</th>
            <th onClick={() => requestSort('operatingVoltage')}>Рабочее напряжение</th>
            <th onClick={() => requestSort('dischargeCurrent')}>Ток разряда</th>
            <th onClick={() => requestSort('dischargeStability')}>Стабильность разряда</th>
            <th onClick={() => requestSort('operatingTemperatureRange')}>Температурный диапазон работы</th>
            <th onClick={() => requestSort('ignitionTime')}>Время зажигания</th>
            <th onClick={() => requestSort('duration')}>Продолжительность</th>
            <th onClick={() => requestSort('luminousFlux')}>Световой поток</th>
            <th onClick={() => requestSort('energyEfficiency')}>Энергетическая эффективность</th>
            <th onClick={() => requestSort('powerConsumption')}>Потребляемая мощность</th>
            <th onClick={() => requestSort('indicationAbility')}>Способность к индикации</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((discharge, index) => (
            <tr key={index}>
              <td>{discharge.name}</td>
              <td>{discharge.description}</td>
              <td>{discharge.advantages.join(', ')}</td>
              <td>{discharge.disadvantages.join(', ')}</td>
              <td>{discharge.application.join(', ')}</td>
              <td>{discharge.availability}</td>
              <td>{discharge.qualityAndReliability}</td>
              <td>{discharge.manufacturingComplexity}</td>
              <td>{discharge.lifespanYears}</td>
              <td>{discharge.components.join(', ')}</td>
              <td>{discharge.dcDischarge}</td>
              <td>{discharge.acDischarge}</td>
              <td>{discharge.frequencyDischarge}</td>
              <td>{discharge.gasMedium}</td>
              <td>{discharge.excitationMethod}</td>
              <td>{discharge.operatingVoltage}</td>
              <td>{discharge.dischargeCurrent}</td>
              <td>{discharge.dischargeStability}</td>
              <td>{discharge.operatingTemperatureRange}</td>
              <td>{discharge.ignitionTime}</td>
              <td>{discharge.duration}</td>
              <td>{discharge.luminousFlux}</td>
              <td>{discharge.energyEfficiency}</td>
              <td>{discharge.powerConsumption}</td>
              <td>{discharge.indicationAbility}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DischargeList;
