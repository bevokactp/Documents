import React, { useState } from 'react';

const displayData = [
  {
    name: 'Светодиод',
    description: 'Основной тип индикатора, использующий светодиоды.',
    advantages: ['Энергоэффективность', 'Долговечность', 'Яркость'],
    disadvantages: ['Ограниченный угол обзора', 'Может быть дорогим'],
    application: ['Электроника', 'Освещение', 'Индикация'],
    availability: 5,
    qualityAndReliability: 4,
    manufacturingComplexity: 2,
    lifespan: 5,
    components: ['Светодиоды', 'Резисторы', 'Схемы управления'],
    resolution: 'N/A',
    brightness: '5000 cd/m²',
    contrast: 'High',
    viewingAngles: 'Wide',
    colorRendering: 'Good',
    screenSize: 'Small',
    backlightType: 'None',
    responseTime: '2ms',
    refreshRate: 'N/A',
    powerConsumption: 'Low',
    matrixType: 'N/A',
    dynamicRange: 'High',
    colorDepth: '16M colors',
    dimensions: 'Varies',
    weight: 'Light',
    screenSurface: 'Flat',
    connectionInterface: 'Various',
    operatingTemperature: 'From -20°C to +50°C',
  },
  {
    name: 'Семисегментный индикатор',
    description: 'Индикатор, состоящий из семисегментных дисплеев для отображения цифр.',
    advantages: ['Простота использования', 'Четкость отображения чисел'],
    disadvantages: ['Ограниченные возможности отображения', 'Меньшая гибкость'],
    application: ['Часы', 'Калькуляторы', 'Электронные устройства'],
    availability: 5,
    qualityAndReliability: 4,
    manufacturingComplexity: 2,
    lifespan: 10,
    components: ['Светодиоды', 'Схемы управления'],
    resolution: 'N/A',
    brightness: 'Moderate',
    contrast: 'Good',
    viewingAngles: 'Narrow',
    colorRendering: 'Limited',
    screenSize: 'Small',
    backlightType: 'Optional',
    responseTime: 'N/A',
    refreshRate: 'N/A',
    powerConsumption: 'Low',
    matrixType: 'N/A',
    dynamicRange: 'N/A',
    colorDepth: 'Single color',
    dimensions: 'Varies',
    weight: 'Light',
    screenSurface: 'Flat',
    connectionInterface: 'Digital',
    operatingTemperature: 'From 0°C to +50°C',
  },
  {
    name: 'Матричный индикатор',
    description: 'Индикатор, использующий матрицу светодиодов для отображения текста и графики.',
    advantages: ['Гибкость в отображении информации', 'Высокая разрешающая способность'],
    disadvantages: ['Сложность управления', 'Высокое потребление энергии'],
    application: ['Рекламные табло', 'Электронные часы', 'Информационные панели'],
    availability: 4,
    qualityAndReliability: 4,
    manufacturingComplexity: 4,
    lifespan: 7,
    components: ['Светодиоды', 'Контроллеры', 'Схемы управления'],
    resolution: '128x64',
    brightness: 'High',
    contrast: 'High',
    viewingAngles: 'Wide',
    colorRendering: 'Good',
    screenSize: 'Medium',
    backlightType: 'LED',
    responseTime: '5ms',
    refreshRate: '60Hz',
    powerConsumption: 'Moderate',
    matrixType: 'LED matrix',
    dynamicRange: 'High',
    colorDepth: '256 colors',
    dimensions: 'Varies',
    weight: 'Medium',
    screenSurface: 'Flat',
    connectionInterface: 'Digital',
    operatingTemperature: 'From -10°C to +60°C',
  },
  {
    name: 'TFT',
    description: 'Тонкоплёночный транзисторный дисплей с активной матрицей.',
    advantages: ['Высокое качество изображения', 'Хороший цветопередача', 'Широкие углы обзора'],
    disadvantages: ['Высокая стоимость', 'Потребление энергии'],
    application: ['Мобильные устройства', 'Мониторы', 'ТВ'],
    availability: 5,
    qualityAndReliability: 5,
    manufacturingComplexity: 5,
    lifespan: 7,
    components: ['ТФТ матрица', 'Контроллер'],
    resolution: '1920x1080',
    brightness: '400 cd/m²',
    contrast: 'High',
    viewingAngles: 'Wide',
    colorRendering: 'Excellent',
    screenSize: 'Large',
    backlightType: 'LED',
    responseTime: '8ms',
    refreshRate: '60Hz',
    powerConsumption: 'High',
    matrixType: 'TFT',
    dynamicRange: 'High',
    colorDepth: '16.7M colors',
    dimensions: 'Varies',
    weight: 'Medium',
    screenSurface: 'Flat',
    connectionInterface: 'HDMI, VGA',
    operatingTemperature: 'From 0°C to +50°C',
  },
  {
    name: 'LCD',
    description: 'Жидкокристаллический дисплей с пассивной или активной матрицей.',
    advantages: ['Низкое энергопотребление', 'Доступная цена'],
    disadvantages: ['Ограниченные углы обзора', 'Меньшая контрастность по сравнению с OLED'],
    application: ['Мониторы', 'ТВ', 'Мобильные устройства'],
    availability: 5,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['LCD панель', 'Подсветка', 'Контроллер'],
    resolution: '1366x768',
    brightness: '300 cd/m²',
    contrast: 'Moderate',
    viewingAngles: 'Narrow',
    colorRendering: 'Good',
    screenSize: 'Medium',
    backlightType: 'LED',
    responseTime: '10ms',
    refreshRate: '60Hz',
    powerConsumption: 'Low',
    matrixType: 'LCD',
    dynamicRange: 'Moderate',
    colorDepth: '16.7M colors',
    dimensions: 'Varies',
    weight: 'Medium',
    screenSurface: 'Flat',
    connectionInterface: 'HDMI, VGA',
    operatingTemperature: 'From 0°C to +45°C',
  },
  {
    name: 'OLED',
    description: 'Дисплей на органических светодиодах, обеспечивающий высокое качество изображения.',
    advantages: ['Отличная контрастность', 'Яркие цвета', 'Гибкость'],
    disadvantages: ['Высокая стоимость', 'Срок службы'],
    application: ['Смартфоны', 'Телевизоры', 'Гибкие дисплеи'],
    availability: 4,
    qualityAndReliability: 5,
    manufacturingComplexity: 5,
    lifespan: 5,
    components: ['OLED матрица', 'Контроллер'],
    resolution: '1440x2560',
    brightness: '600 cd/m²',
    contrast: 'Excellent',
    viewingAngles: 'Very Wide',
    colorRendering: 'Excellent',
    screenSize: 'Medium to Large',
    backlightType: 'None',
    responseTime: '1ms',
    refreshRate: '120Hz',
    powerConsumption: 'Low to Moderate',
    matrixType: 'OLED',
    dynamicRange: 'High',
    colorDepth: '16.7M colors',
    dimensions: 'Varies',
    weight: 'Light',
    screenSurface: 'Flat',
    connectionInterface: 'HDMI, DisplayPort',
    operatingTemperature: 'From -20°C to +60°C',
  },
  {
    name: 'E-Ink',
    description: 'Дисплей с электронными чернилами, имитирующий вид бумаги.',
    advantages: ['Низкое энергопотребление', 'Хорошая читаемость на солнечном свете'],
    disadvantages: ['Медленная смена изображений', 'Ограниченная цветовая палитра'],
    application: ['Электронные книги', 'Этикетки', 'Электронные газеты'],
    availability: 3,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['E-Ink матрица', 'Контроллер'],
    resolution: '800x600',
    brightness: 'Reflective',
    contrast: 'High',
    viewingAngles: 'Wide',
    colorRendering: 'Limited',
    screenSize: 'Medium',
    backlightType: 'None',
    responseTime: '300ms',
    refreshRate: 'N/A',
    powerConsumption: 'Very Low',
    matrixType: 'E-Ink',
    dynamicRange: 'Moderate',
    colorDepth: 'Black & White',
    dimensions: 'Varies',
    weight: 'Light',
    screenSurface: 'Matte',
    connectionInterface: 'USB',
    operatingTemperature: 'From 0°C to +50°C',
  },
];

const DisplayList = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedData = [...displayData].sort((a, b) => {
    if (sortConfig.key !== null) {
      const isAscending = sortConfig.direction === 'ascending';
      if (typeof a[sortConfig.key] === 'string') {
        return isAscending ? a[sortConfig.key].localeCompare(b[sortConfig.key]) : b[sortConfig.key].localeCompare(a[sortConfig.key]);
      }
      if (typeof a[sortConfig.key] === 'number') {
        return isAscending ? a[sortConfig.key] - b[sortConfig.key] : b[sortConfig.key] - a[sortConfig.key];
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
      <h1>Типы дисплеев</h1>
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
            <th onClick={() => requestSort('resolution')}>Разрешение</th>
            <th onClick={() => requestSort('brightness')}>Яркость</th>
            <th onClick={() => requestSort('contrast')}>Контрастность</th>
            <th onClick={() => requestSort('viewingAngles')}>Углы обзора</th>
            <th onClick={() => requestSort('colorRendering')}>Цветопередача</th>
            <th onClick={() => requestSort('screenSize')}>Размер экрана</th>
            <th onClick={() => requestSort('backlightType')}>Тип подсветки</th>
            <th onClick={() => requestSort('responseTime')}>Время отклика</th>
            <th onClick={() => requestSort('refreshRate')}>Частота обновления</th>
            <th onClick={() => requestSort('powerConsumption')}>Энергопотребление</th>
            <th onClick={() => requestSort('matrixType')}>Тип матрицы</th>
            <th onClick={() => requestSort('dynamicRange')}>Динамический диапазон</th>
            <th onClick={() => requestSort('colorDepth')}>Глубина цвета</th>
            <th onClick={() => requestSort('dimensions')}>Габариты</th>
            <th onClick={() => requestSort('weight')}>Вес</th>
            <th onClick={() => requestSort('screenSurface')}>Поверхность экрана</th>
            <th onClick={() => requestSort('connectionInterface')}>Подключение (интерфейс)</th>
            <th onClick={() => requestSort('operatingTemperature')}>Рабочая температура</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((display, index) => (
            <tr key={index}>
              <td>{display.name}</td>
              <td>{display.description}</td>
              <td>{display.advantages.join(', ')}</td>
              <td>{display.disadvantages.join(', ')}</td>
              <td>{display.application.join(', ')}</td>
              <td>{display.availability}</td>
              <td>{display.qualityAndReliability}</td>
              <td>{display.manufacturingComplexity}</td>
              <td>{display.lifespan}</td>
              <td>{display.components.join(', ')}</td>
              <td>{display.resolution}</td>
              <td>{display.brightness}</td>
              <td>{display.contrast}</td>
              <td>{display.viewingAngles}</td>
              <td>{display.colorRendering}</td>
              <td>{display.screenSize}</td>
              <td>{display.backlightType}</td>
              <td>{display.responseTime}</td>
              <td>{display.refreshRate}</td>
              <td>{display.powerConsumption}</td>
              <td>{display.matrixType}</td>
              <td>{display.dynamicRange}</td>
              <td>{display.colorDepth}</td>
              <td>{display.dimensions}</td>
              <td>{display.weight}</td>
              <td>{display.screenSurface}</td>
              <td>{display.connectionInterface}</td>
              <td>{display.operatingTemperature}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayList;
