import React, { useState } from 'react';

const ignitronData = [
	{
	  name: 'Динисторы для защиты',
	  description: 'Динисторы, предназначенные для защиты схем от перенапряжений.',
	  advantages: ['Быстрая реакция на перенапряжения', 'Высокая надежность'],
	  disadvantages: ['Ограниченные возможности управления', 'Может быть дорогим'],
	  application: ['Системы защиты от перенапряжений'],
	  availability: 4,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 3,
	  lifespanYears: 10,
	  components: ['Полупроводники', 'Диэлектрики'],
	  efficiency: 95,
	  turnOnTime: '20 µs',
	  turnOffTime: '15 µs',
	  switchingTime: '25 µs',
	  ignitionVoltage: '50 V',
	  latchingVoltage: '30 V',
	  breakdownVoltage: '400 V',
	  holdingVoltage: '10 V',
	  gateVoltage: '1.5 V',
	  operatingMode: 'Постоянный ток',
	  switchingMethod: 'Управляемые через изменение напряжения',
	  onStateResistance: '0.5 Ω',
	  turnOnMethod: 'По напряжению',
	  turnOffMethod: 'По снижению тока',
	  temperatureRange: '-40°C to 85°C',
	  controlType: 'С управляющим электродом',
	  anodeCurrent: '10 A',
	  ignitionCurrent: '5 A',
	  holdingCurrent: '1 A',
	  gateCurrent: '0.1 A'
	},
	{
	  name: 'Динисторы для контроля мощности',
	  description: 'Динисторы, используемые для контроля мощности в различных приложениях.',
	  advantages: ['Высокая точность контроля', 'Долговечность'],
	  disadvantages: ['Может быть сложным в настройке', 'Ограниченная доступность'],
	  application: ['Контроль мощности в промышленных системах'],
	  availability: 3,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 4,
	  lifespanYears: 12,
	  components: ['Полупроводники', 'Металлы'],
	  efficiency: 90,
	  turnOnTime: '15 µs',
	  turnOffTime: '10 µs',
	  switchingTime: '20 µs',
	  ignitionVoltage: '60 V',
	  latchingVoltage: '35 V',
	  breakdownVoltage: '500 V',
	  holdingVoltage: '15 V',
	  gateVoltage: '2 V',
	  operatingMode: 'Переменный ток',
	  switchingMethod: 'Управляемые через управляющий электрод',
	  onStateResistance: '0.4 Ω',
	  turnOnMethod: 'По напряжению',
	  turnOffMethod: 'По снижению тока',
	  temperatureRange: '-30°C to 75°C',
	  controlType: 'С управляющим электродом',
	  anodeCurrent: '15 A',
	  ignitionCurrent: '7 A',
	  holdingCurrent: '2 A',
	  gateCurrent: '0.2 A'
	},
	{
	  name: 'Симисторы стандартные',
	  description: 'Симисторы, используемые в стандартных приложениях для управления мощностью.',
	  advantages: ['Надежность', 'Простота использования'],
	  disadvantages: ['Ограниченная функциональность', 'Стареющие технологии'],
	  application: ['Бытовая электроника', 'Простейшие схемы управления'],
	  availability: 5,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 2,
	  lifespanYears: 8,
	  components: ['Полупроводники'],
	  efficiency: 85,
	  turnOnTime: '10 µs',
	  turnOffTime: '8 µs',
	  switchingTime: '12 µs',
	  ignitionVoltage: '40 V',
	  latchingVoltage: '25 V',
	  breakdownVoltage: '300 V',
	  holdingVoltage: '8 V',
	  gateVoltage: '1 V',
	  operatingMode: 'Переменный ток',
	  switchingMethod: 'Управляемые через управляющий электрод',
	  onStateResistance: '0.6 Ω',
	  turnOnMethod: 'По напряжению',
	  turnOffMethod: 'По снижению тока',
	  temperatureRange: '-20°C to 70°C',
	  controlType: 'С управляющим электродом',
	  anodeCurrent: '5 A',
	  ignitionCurrent: '3 A',
	  holdingCurrent: '1 A',
	  gateCurrent: '0.05 A'
	},
	{
	  name: 'Тиристор классический',
	  description: 'Классические тиристоры для общего применения в электронных схемах.',
	  advantages: ['Широкий диапазон применения', 'Хорошая совместимость'],
	  disadvantages: ['Может требовать сложной схемы управления', 'Ограниченные возможности по скорости переключения'],
	  application: ['Электронные управляемые системы', 'Промышленные контроллеры'],
	  availability: 4,
	  quality: 4,
	  reliability: 5,
	  manufacturingComplexity: 3,
	  lifespanYears: 15,
	  components: ['Полупроводники', 'Изоляторы'],
	  efficiency: 90,
	  turnOnTime: '30 µs',
	  turnOffTime: '20 µs',
	  switchingTime: '35 µs',
	  ignitionVoltage: '70 V',
	  latchingVoltage: '40 V',
	  breakdownVoltage: '600 V',
	  holdingVoltage: '20 V',
	  gateVoltage: '2 V',
	  operatingMode: 'Переменный ток и постоянный ток',
	  switchingMethod: 'Управляемые через управляющий электрод',
	  onStateResistance: '0.3 Ω',
	  turnOnMethod: 'По напряжению',
	  turnOffMethod: 'По снижению тока',
	  temperatureRange: '-40°C to 100°C',
	  controlType: 'С управляющим электродом',
	  anodeCurrent: '20 A',
	  ignitionCurrent: '10 A',
	  holdingCurrent: '5 A',
	  gateCurrent: '0.5 A'
	},
	{
	  name: 'Тиристор модулярный',
	  description: 'Модулярные тиристоры, используемые в модульных системах управления.',
	  advantages: ['Высокая гибкость', 'Легкость в установке и замене'],
	  disadvantages: ['Высокая стоимость', 'Может требовать специального монтажа'],
	  application: ['Модульные системы управления', 'Промышленные системы'],
	  availability: 3,
	  quality: 5,
	  reliability: 5,
	  manufacturingComplexity: 4,
	  lifespanYears: 20,
	  components: ['Полупроводники', 'Корпусные материалы'],
	  efficiency: 92,
	  turnOnTime: '25 µs',
	  turnOffTime: '18 µs',
	  switchingTime: '28 µs',
	  ignitionVoltage: '80 V',
	  latchingVoltage: '45 V',
	  breakdownVoltage: '800 V',
	  holdingVoltage: '25 V',
	  gateVoltage: '2.5 V',
	  operatingMode: 'Переменный ток и постоянный ток',
	  switchingMethod: 'Управляемые через изменение напряжения',
	  onStateResistance: '0.2 Ω',
	  turnOnMethod: 'По напряжению',
	  turnOffMethod: 'По снижению тока',
	  temperatureRange: '-40°C to 120°C',
	  controlType: 'С управляющим электродом',
	  anodeCurrent: '30 A',
	  ignitionCurrent: '15 A',
	  holdingCurrent: '8 A',
	  gateCurrent: '0.8 A'
	},
	{
	  name: 'Тиристор мягкий',
	  description: 'Мягкие тиристоры с низким уровнем перегрева и хорошей управляемостью.',
	  advantages: ['Мягкое включение и выключение', 'Хорошая управляемость'],
	  disadvantages: ['Ограниченные возможности по мощности', 'Может требовать дополнительного охлаждения'],
	  application: ['Электронные устройства с мягким включением', 'Системы управления мощностью'],
	  availability: 4,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 3,
	  lifespanYears: 12,
	  components: ['Полупроводники', 'Теплоотводы'],
	  efficiency: 88,
	  turnOnTime: '35 µs',
	  turnOffTime: '25 µs',
	  switchingTime: '40 µs',
	  ignitionVoltage: '65 V',
	  latchingVoltage: '38 V',
	  breakdownVoltage: '700 V',
	  holdingVoltage: '15 V',
	  gateVoltage: '1.8 V',
	  operatingMode: 'Переменный ток',
	  switchingMethod: 'Управляемые через управляющий электрод',
	  onStateResistance: '0.4 Ω',
	  turnOnMethod: 'По напряжению',
	  turnOffMethod: 'По снижению тока',
	  temperatureRange: '-30°C to 90°C',
	  controlType: 'С управляющим электродом',
	  anodeCurrent: '12 A',
	  ignitionCurrent: '6 A',
	  holdingCurrent: '2 A',
	  gateCurrent: '0.3 A'
	},
	{
	  name: 'Тиристор регуляторный',
	  description: 'Регуляторные тиристоры для управления переменным током в различных схемах.',
	  advantages: ['Точная регулировка', 'Хорошая стабильность'],
	  disadvantages: ['Может быть дорогим', 'Сложность в настройке'],
	  application: ['Регуляторы мощности', 'Системы управления освещением'],
	  availability: 4,
	  quality: 4,
	  reliability: 5,
	  manufacturingComplexity: 4,
	  lifespanYears: 15,
	  components: ['Полупроводники', 'Печатные платы'],
	  efficiency: 90,
	  turnOnTime: '20 µs',
	  turnOffTime: '15 µs',
	  switchingTime: '25 µs',
	  ignitionVoltage: '55 V',
	  latchingVoltage: '30 V',
	  breakdownVoltage: '600 V',
	  holdingVoltage: '20 V',
	  gateVoltage: '2 V',
	  operatingMode: 'Переменный ток',
	  switchingMethod: 'Управляемые через изменение напряжения',
	  onStateResistance: '0.3 Ω',
	  turnOnMethod: 'По напряжению',
	  turnOffMethod: 'По снижению тока',
	  temperatureRange: '-40°C to 100°C',
	  controlType: 'С управляющим электродом',
	  anodeCurrent: '25 A',
	  ignitionCurrent: '12 A',
	  holdingCurrent: '6 A',
	  gateCurrent: '0.6 A'
	},
	{
	  name: 'Тиристор с управляющим электродом',
	  description: 'Тиристоры с управляющим электродом для точного управления током.',
	  advantages: ['Высокая управляемость', 'Широкий диапазон применения'],
	  disadvantages: ['Может быть сложным в управлении', 'Высокая стоимость'],
	  application: ['Электронные регуляторы', 'Системы управления'],
	  availability: 3,
	  quality: 5,
	  reliability: 5,
	  manufacturingComplexity: 4,
	  lifespanYears: 20,
	  components: ['Полупроводники', 'Изоляторы'],
	  efficiency: 92,
	  turnOnTime: '15 µs',
	  turnOffTime: '12 µs',
	  switchingTime: '18 µs',
	  ignitionVoltage: '70 V',
	  latchingVoltage: '40 V',
	  breakdownVoltage: '800 V',
	  holdingVoltage: '25 V',
	  gateVoltage: '2 V',
	  operatingMode: 'Переменный ток и постоянный ток',
	  switchingMethod: 'Управляемые через управляющий электрод',
	  onStateResistance: '0.2 Ω',
	  turnOnMethod: 'По напряжению',
	  turnOffMethod: 'По снижению тока',
	  temperatureRange: '-40°C to 120°C',
	  controlType: 'С управляющим электродом',
	  anodeCurrent: '35 A',
	  ignitionCurrent: '18 A',
	  holdingCurrent: '10 A',
	  gateCurrent: '1 A'
	},
	{
	  name: 'Тиристоры с управляемым запиранием',
	  description: 'Тиристоры, которые могут быть выключены с помощью внешнего управляющего сигнала.',
	  advantages: ['Высокая управляемость', 'Может быть выключен внешним сигналом'],
	  disadvantages: ['Высокая стоимость', 'Сложность управления'],
	  application: ['Системы управления с требованием внешнего запирания'],
	  availability: 3,
	  quality: 5,
	  reliability: 5,
	  manufacturingComplexity: 4,
	  lifespanYears: 18,
	  components: ['Полупроводники', 'Комплексные схемы'],
	  efficiency: 90,
	  turnOnTime: '25 µs',
	  turnOffTime: '20 µs',
	  switchingTime: '30 µs',
	  ignitionVoltage: '60 V',
	  latchingVoltage: '35 V',
	  breakdownVoltage: '700 V',
	  holdingVoltage: '20 V',
	  gateVoltage: '2 V',
	  operatingMode: 'Переменный ток и постоянный ток',
	  switchingMethod: 'Управляемые через управляющий электрод',
	  onStateResistance: '0.3 Ω',
	  turnOnMethod: 'По напряжению',
	  turnOffMethod: 'По снижению тока',
	  temperatureRange: '-40°C to 100°C',
	  controlType: 'С управляющим электродом',
	  anodeCurrent: '28 A',
	  ignitionCurrent: '14 A',
	  holdingCurrent: '7 A',
	  gateCurrent: '0.8 A'
	},
	{
	  name: 'Тиристоры скоростные',
	  description: 'Скоростные тиристоры с высокой частотой переключения.',
	  advantages: ['Высокая скорость переключения', 'Подходит для высокочастотных приложений'],
	  disadvantages: ['Высокая стоимость', 'Может требовать специального охлаждения'],
	  application: ['Высокочастотные схемы', 'Модернизированные системы управления'],
	  availability: 2,
	  quality: 5,
	  reliability: 5,
	  manufacturingComplexity: 5,
	  lifespanYears: 12,
	  components: ['Полупроводники', 'Теплоотводы'],
	  efficiency: 93,
	  turnOnTime: '10 µs',
	  turnOffTime: '8 µs',
	  switchingTime: '12 µs',
	  ignitionVoltage: '80 V',
	  latchingVoltage: '50 V',
	  breakdownVoltage: '900 V',
	  holdingVoltage: '30 V',
	  gateVoltage: '3 V',
	  operatingMode: 'Переменный ток и постоянный ток',
	  switchingMethod: 'Управляемые через управляющий электрод',
	  onStateResistance: '0.2 Ω',
	  turnOnMethod: 'По напряжению',
	  turnOffMethod: 'По снижению тока',
	  temperatureRange: '-40°C to 120°C',
	  controlType: 'С управляющим электродом',
	  anodeCurrent: '40 A',
	  ignitionCurrent: '20 A',
	  holdingCurrent: '10 A',
	  gateCurrent: '1 A'
	},
	{
	  name: 'Тиристоры стандартные',
	  description: 'Стандартные тиристоры для использования в широком спектре приложений.',
	  advantages: ['Универсальность', 'Хорошее соотношение цена/качество'],
	  disadvantages: ['Могут быть менее эффективными в специфических приложениях', 'Стареющие технологии'],
	  application: ['Общие электронные схемы', 'Промышленные контроллеры'],
	  availability: 5,
	  quality: 4,
	  reliability: 4,
	  manufacturingComplexity: 3,
	  lifespanYears: 10,
	  components: ['Полупроводники'],
	  efficiency: 85,
	  turnOnTime: '25 µs',
	  turnOffTime: '18 µs',
	  switchingTime: '28 µs',
	  ignitionVoltage: '50 V',
	  latchingVoltage: '30 V',
	  breakdownVoltage: '600 V',
	  holdingVoltage: '15 V',
	  gateVoltage: '1.5 V',
	  operatingMode: 'Переменный ток и постоянный ток',
	  switchingMethod: 'Управляемые через управляющий электрод',
	  onStateResistance: '0.4 Ω',
	  turnOnMethod: 'По напряжению',
	  turnOffMethod: 'По снижению тока',
	  temperatureRange: '-30°C to 85°C',
	  controlType: 'С управляющим электродом',
	  anodeCurrent: '10 A',
	  ignitionCurrent: '5 A',
	  holdingCurrent: '2 A',
	  gateCurrent: '0.2 A'
	}
  ];


const IgnitronList = () => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (column) => {
    const newSortOrder = sortColumn === column && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortOrder(newSortOrder);
  };

  const sortedData = [...ignitronData].sort((a, b) => {
    if (sortColumn) {
      const aValue = typeof a[sortColumn] === 'string' ? a[sortColumn].toLowerCase() : a[sortColumn];
      const bValue = typeof b[sortColumn] === 'string' ? b[sortColumn].toLowerCase() : b[sortColumn];
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <div>
      <h1>Типы тиристоров</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Название {sortColumn === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('description')}>Описание {sortColumn === 'description' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('advantages')}>Преимущества {sortColumn === 'advantages' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('disadvantages')}>Недостатки {sortColumn === 'disadvantages' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('application')}>Применение {sortColumn === 'application' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('availability')}>Доступность {sortColumn === 'availability' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('quality')}>Качество {sortColumn === 'quality' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('reliability')}>Надежность {sortColumn === 'reliability' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('manufacturingComplexity')}>Сложность изготовления {sortColumn === 'manufacturingComplexity' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('lifespanYears')}>Срок службы лет {sortColumn === 'lifespanYears' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('components')}>Компоненты изготовления {sortColumn === 'components' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('efficiency')}>Эффективность {sortColumn === 'efficiency' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('turnOnTime')}>Время включения {sortColumn === 'turnOnTime' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('turnOffTime')}>Время выключения {sortColumn === 'turnOffTime' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('switchingTime')}>Время переключения {sortColumn === 'switchingTime' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('ignitionVoltage')}>Напряжение зажигания {sortColumn === 'ignitionVoltage' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('latchingVoltage')}>Напряжение запирания {sortColumn === 'latchingVoltage' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('breakdownVoltage')}>Напряжение пробоя {sortColumn === 'breakdownVoltage' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('holdingVoltage')}>Напряжение удержания {sortColumn === 'holdingVoltage' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('gateVoltage')}>Напряжение управляющего электродa {sortColumn === 'gateVoltage' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('operatingMode')}>По режиму работы {sortColumn === 'operatingMode' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('switchingMethod')}>По способу включения и выключения {sortColumn === 'switchingMethod' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('onStateResistance')}>Сопротивление в включенном состоянии {sortColumn === 'onStateResistance' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('turnOnMethod')}>Способ включения {sortColumn === 'turnOnMethod' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('turnOffMethod')}>Способ выключения {sortColumn === 'turnOffMethod' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('temperatureRange')}>Температурный диапазон {sortColumn === 'temperatureRange' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('controlType')}>Тип управления {sortColumn === 'controlType' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('anodeCurrent')}>Ток анода {sortColumn === 'anodeCurrent' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('ignitionCurrent')}>Ток зажигания {sortColumn === 'ignitionCurrent' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('holdingCurrent')}>Ток удержания {sortColumn === 'holdingCurrent' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
            <th onClick={() => handleSort('gateCurrent')}>Ток управляющего электродa {sortColumn === 'gateCurrent' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((ignitron, index) => (
            <tr key={index}>
              <td>{ignitron.name}</td>
              <td>{ignitron.description}</td>
              <td>{ignitron.advantages.join(', ')}</td>
              <td>{ignitron.disadvantages.join(', ')}</td>
              <td>{ignitron.application.join(', ')}</td>
              <td>{ignitron.availability}</td>
              <td>{ignitron.quality}</td>
              <td>{ignitron.reliability}</td>
              <td>{ignitron.manufacturingComplexity}</td>
              <td>{ignitron.lifespanYears}</td>
              <td>{ignitron.components.join(', ')}</td>
              <td>{ignitron.efficiency}%</td>
              <td>{ignitron.turnOnTime}</td>
              <td>{ignitron.turnOffTime}</td>
              <td>{ignitron.switchingTime}</td>
              <td>{ignitron.ignitionVoltage}</td>
              <td>{ignitron.latchingVoltage}</td>
              <td>{ignitron.breakdownVoltage}</td>
              <td>{ignitron.holdingVoltage}</td>
              <td>{ignitron.gateVoltage}</td>
              <td>{ignitron.operatingMode}</td>
              <td>{ignitron.switchingMethod}</td>
              <td>{ignitron.onStateResistance}</td>
              <td>{ignitron.turnOnMethod}</td>
              <td>{ignitron.turnOffMethod}</td>
              <td>{ignitron.temperatureRange}</td>
              <td>{ignitron.controlType}</td>
              <td>{ignitron.anodeCurrent}</td>
              <td>{ignitron.ignitionCurrent}</td>
              <td>{ignitron.holdingCurrent}</td>
              <td>{ignitron.gateCurrent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IgnitronList;
