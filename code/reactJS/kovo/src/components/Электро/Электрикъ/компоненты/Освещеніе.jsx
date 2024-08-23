import React, { useState, useMemo } from 'react';

const lightData = [
  {
    name: 'LED',
    description: 'Светодиоды, которые обеспечивают долгий срок службы и энергоэффективность.',
    advantages: ['Энергоэффективность', 'Долгий срок службы', 'Мгновенный запуск'],
    disadvantages: ['Может быть дорогим', 'Может мигать при низком качестве'],
    application: ['Домашнее освещение', 'Офисное освещение', 'Уличное освещение'],
    availability: 5,
    quality: 4,
    manufacturingComplexity: 3,
    lifespanYears: 10,
    components: ['Полупроводниковые материалы', 'Светодиоды'],
    type: 'Полупроводниковые',
    brightness: 'Высокая',
    luminousEfficiency: 'Высокая',
    warmUpSpeed: 'Мгновенный',
    energyEfficiency: 'Высокая',
    shades: ['Белый', 'Тёплый белый', 'RGB'],
    colorRendering: 'Хорошая',
    lightSpectrum: 'Широкий',
    startTime: 'Мгновенный',
    brightnessAdjustable: true,
    dimmable: true,
    needsHeatSink: true,
  },
  {
    name: 'LED с изменяемым цветом (RGB)',
    description: 'Светодиоды с возможностью изменения цвета.',
    advantages: ['Изменяемый цвет', 'Энергоэффективность', 'Долгий срок службы'],
    disadvantages: ['Может быть дорогим', 'Может потребовать дополнительных контроллеров'],
    application: ['Декоративное освещение', 'Сценическое освещение'],
    availability: 4,
    quality: 4,
    manufacturingComplexity: 4,
    lifespanYears: 10,
    components: ['Полупроводниковые материалы', 'Светодиоды', 'Контроллер'],
    type: 'Полупроводниковые',
    brightness: 'Высокая',
    luminousEfficiency: 'Высокая',
    warmUpSpeed: 'Мгновенный',
    energyEfficiency: 'Высокая',
    shades: ['RGB'],
    colorRendering: 'Хорошая',
    lightSpectrum: 'Широкий',
    startTime: 'Мгновенный',
    brightnessAdjustable: true,
    dimmable: true,
    needsHeatSink: true,
  },
  {
    name: 'LED с регулировкой яркости',
    description: 'Светодиоды с возможностью изменения яркости.',
    advantages: ['Регулируемая яркость', 'Энергоэффективность', 'Долгий срок службы'],
    disadvantages: ['Может быть дорогим', 'Может потребовать дополнительных контроллеров'],
    application: ['Домашнее освещение', 'Офисное освещение'],
    availability: 5,
    quality: 5,
    manufacturingComplexity: 4,
    lifespanYears: 10,
    components: ['Полупроводниковые материалы', 'Светодиоды', 'Регулятор яркости'],
    type: 'Полупроводниковые',
    brightness: 'Регулируемая',
    luminousEfficiency: 'Высокая',
    warmUpSpeed: 'Мгновенный',
    energyEfficiency: 'Высокая',
    shades: ['Белый', 'Тёплый белый'],
    colorRendering: 'Хорошая',
    lightSpectrum: 'Широкий',
    startTime: 'Мгновенный',
    brightnessAdjustable: true,
    dimmable: true,
    needsHeatSink: true,
  },
  {
    name: 'LED ленты',
    description: 'Гибкие ленты, оснащенные светодиодами для декоративного освещения.',
    advantages: ['Гибкость в установке', 'Энергоэффективность', 'Долгий срок службы'],
    disadvantages: ['Может быть дорогим', 'Необходимы профили для монтажа'],
    application: ['Декоративное освещение', 'Акцентное освещение'],
    availability: 5,
    quality: 4,
    manufacturingComplexity: 3,
    lifespanYears: 8,
    components: ['Полупроводниковые материалы', 'Светодиоды', 'Гибкая плата'],
    type: 'Полупроводниковые',
    brightness: 'Средняя',
    luminousEfficiency: 'Высокая',
    warmUpSpeed: 'Мгновенный',
    energyEfficiency: 'Высокая',
    shades: ['Белый', 'Тёплый белый', 'RGB'],
    colorRendering: 'Хорошая',
    lightSpectrum: 'Широкий',
    startTime: 'Мгновенный',
    brightnessAdjustable: true,
    dimmable: true,
    needsHeatSink: false,
  },
  {
    name: 'ВУД',
    description: 'Дуговая лампа для использования в художественном освещении.',
    advantages: ['Высокая яркость', 'Хорошее цветопередача'],
    disadvantages: ['Нужен теплоотвод', 'Медленный разогрев'],
    application: ['Художественное освещение', 'Технические применения'],
    availability: 3,
    quality: 4,
    manufacturingComplexity: 4,
    lifespanYears: 5,
    components: ['Аргон', 'Трубка'],
    type: 'Дуговая',
    brightness: 'Высокая',
    luminousEfficiency: 'Средняя',
    warmUpSpeed: 'Медленный',
    energyEfficiency: 'Средняя',
    shades: ['Чёрный'],
    colorRendering: 'Хорошая',
    lightSpectrum: 'Широкий',
    startTime: 'Медленный',
    brightnessAdjustable: false,
    dimmable: false,
    needsHeatSink: true,
  },
  {
    name: 'Инфракрасные',
    description: 'Лампы, излучающие инфракрасное излучение, используемые в обогреве и медицинских процедурах.',
    advantages: ['Тепловое излучение', 'Используется в медицинских процедурах'],
    disadvantages: ['Не видим для глаза', 'Может быть дорогим'],
    application: ['Обогрев', 'Медицинские процедуры'],
    availability: 4,
    quality: 3,
    manufacturingComplexity: 3,
    lifespanYears: 7,
    components: ['Инфракрасная трубка', 'Электрод'],
    type: 'Инфракрасно',
    brightness: 'Низкая',
    luminousEfficiency: 'Низкая',
    warmUpSpeed: 'Мгновенный',
    energyEfficiency: 'Средняя',
    shades: ['Нет'],
    colorRendering: 'Нет',
    lightSpectrum: 'Инфракрасный',
    startTime: 'Мгновенный',
    brightnessAdjustable: false,
    dimmable: false,
    needsHeatSink: true,
  },
  {
    name: 'Ксеноновые',
    description: 'Газоразрядные лампы, используемые в автомобилях и для мощного освещения.',
    advantages: ['Высокая яркость', 'Хорошая цветопередача'],
    disadvantages: ['Высокое потребление энергии', 'Медленный разогрев'],
    application: ['Автомобильное освещение', 'Фотографическое освещение'],
    availability: 3,
    quality: 4,
    manufacturingComplexity: 4,
    lifespanYears: 3,
    components: ['Ксенон', 'Электрод'],
    type: 'Электродуговые',
    brightness: 'Очень высокая',
    luminousEfficiency: 'Средняя',
    warmUpSpeed: 'Медленный',
    energyEfficiency: 'Средняя',
    shades: ['Белый'],
    colorRendering: 'Хорошая',
    lightSpectrum: 'Широкий',
    startTime: 'Медленный',
    brightnessAdjustable: false,
    dimmable: false,
    needsHeatSink: true,
  },
  {
    name: 'Люминесцентные',
    description: 'Лампы, использующие флуоресцентное покрытие для создания света.',
    advantages: ['Высокая энергоэффективность', 'Долгий срок службы'],
    disadvantages: ['Содержат ртуть', 'Медленный разогрев'],
    application: ['Офисное освещение', 'Учебные заведения'],
    availability: 5,
    quality: 4,
    manufacturingComplexity: 3,
    lifespanYears: 10,
    components: ['Флуоресцентное покрытие', 'Газовая смесь'],
    type: 'Флуоресцентные',
    brightness: 'Средняя',
    luminousEfficiency: 'Высокая',
    warmUpSpeed: 'Медленный',
    energyEfficiency: 'Высокая',
    shades: ['Белый', 'Тёплый белый'],
    colorRendering: 'Средняя',
    lightSpectrum: 'Широкий',
    startTime: 'Медленный',
    brightnessAdjustable: false,
    dimmable: false,
    needsHeatSink: false,
  },
  {
    name: 'Металлогалогенные',
    description: 'Лампы, использующие металлогалогенные соли для создания яркого света.',
    advantages: ['Высокая яркость', 'Хорошая цветопередача'],
    disadvantages: ['Медленный разогрев', 'Может содержать ртуть'],
    application: ['Флористическое освещение', 'Спортивные залы'],
    availability: 4,
    quality: 4,
    manufacturingComplexity: 4,
    lifespanYears: 6,
    components: ['Металлогалогенные соли', 'Электрод'],
    type: 'Электродуговые',
    brightness: 'Очень высокая',
    luminousEfficiency: 'Средняя',
    warmUpSpeed: 'Медленный',
    energyEfficiency: 'Средняя',
    shades: ['Белый', 'Синий'],
    colorRendering: 'Хорошая',
    lightSpectrum: 'Широкий',
    startTime: 'Медленный',
    brightnessAdjustable: false,
    dimmable: false,
    needsHeatSink: true,
  },
  {
    name: 'Накаливания',
    description: 'Традиционные лампы, излучающие свет за счет накала вольфрамовой нити.',
    advantages: ['Низкая стоимость', 'Тёплый свет'],
    disadvantages: ['Низкая энергоэффективность', 'Короткий срок службы'],
    application: ['Домашнее освещение', 'Офисное освещение'],
    availability: 5,
    quality: 2,
    manufacturingComplexity: 2,
    lifespanYears: 1,
    components: ['Вольфрамовая нить', 'Стеклянная колба'],
    type: 'Накал',
    brightness: 'Средняя',
    luminousEfficiency: 'Низкая',
    warmUpSpeed: 'Мгновенный',
    energyEfficiency: 'Низкая',
    shades: ['Жёлтый'],
    colorRendering: 'Хорошая',
    lightSpectrum: 'Широкий',
    startTime: 'Мгновенный',
    brightnessAdjustable: false,
    dimmable: false,
    needsHeatSink: false,
  },
  {
    name: 'Натриевые',
    description: 'Газоразрядные лампы с натрием, создающие жёлтый свет.',
    advantages: ['Высокая энергоэффективность', 'Долгий срок службы'],
    disadvantages: ['Плохая цветопередача', 'Медленный разогрев'],
    application: ['Уличное освещение', 'Промышленные зоны'],
    availability: 4,
    quality: 3,
    manufacturingComplexity: 3,
    lifespanYears: 4,
    components: ['Натрий', 'Электрод'],
    type: 'Газоразрядные',
    brightness: 'Высокая',
    luminousEfficiency: 'Средняя',
    warmUpSpeed: 'Медленный',
    energyEfficiency: 'Высокая',
    shades: ['Жёлтый'],
    colorRendering: 'Плохая',
    lightSpectrum: 'Ограниченный',
    startTime: 'Медленный',
    brightnessAdjustable: false,
    dimmable: false,
    needsHeatSink: true,
  },
  {
    name: 'Ртутные',
    description: 'Газоразрядные лампы, содержащие ртуть для создания света.',
    advantages: ['Высокая яркость', 'Долгий срок службы'],
    disadvantages: ['Содержат ртуть', 'Медленный разогрев'],
    application: ['Офисное освещение', 'Производственные помещения'],
    availability: 3,
    quality: 3,
    manufacturingComplexity: 4,
    lifespanYears: 5,
    components: ['Ртуть', 'Электрод'],
    type: 'Газоразрядные',
    brightness: 'Высокая',
    luminousEfficiency: 'Средняя',
    warmUpSpeed: 'Медленный',
    energyEfficiency: 'Средняя',
    shades: ['Белый'],
    colorRendering: 'Средняя',
    lightSpectrum: 'Широкий',
    startTime: 'Медленный',
    brightnessAdjustable: false,
    dimmable: false,
    needsHeatSink: true,
  },
  {
    name: 'Тритиевая',
    description: 'Лампы, использующие тритий для создания слабого светового излучения.',
    advantages: ['Долгий срок службы', 'Не требует внешнего источника питания'],
    disadvantages: ['Низкая яркость', 'Может содержать радиоактивные материалы'],
    application: ['Медицинские приборы', 'Декоративное освещение'],
    availability: 2,
    quality: 4,
    manufacturingComplexity: 4,
    lifespanYears: 15,
    components: ['Тритий', 'Световая трубка'],
    type: 'Тритиевые',
    brightness: 'Низкая',
    luminousEfficiency: 'Низкая',
    warmUpSpeed: 'Мгновенный',
    energyEfficiency: 'Средняя',
    shades: ['Светло-зелёный'],
    colorRendering: 'Низкая',
    lightSpectrum: 'Ограниченный',
    startTime: 'Мгновенный',
    brightnessAdjustable: false,
    dimmable: false,
    needsHeatSink: false,
  },
  {
    name: 'Угольная',
    description: 'Лампы, использующие уголь для создания света.',
    advantages: ['Непрерывный свет', 'Может быть дешевле'],
    disadvantages: ['Медленный разогрев', 'Низкая энергоэффективность'],
    application: ['Атмосферное освещение', 'Декоративное освещение'],
    availability: 1,
    quality: 2,
    manufacturingComplexity: 3,
    lifespanYears: 2,
    components: ['Уголь', 'Электрод'],
    type: 'Электродуговые',
    brightness: 'Низкая',
    luminousEfficiency: 'Низкая',
    warmUpSpeed: 'Медленный',
    energyEfficiency: 'Низкая',
    shades: ['Чёрный'],
    colorRendering: 'Средняя',
    lightSpectrum: 'Ограниченный',
    startTime: 'Медленный',
    brightnessAdjustable: false,
    dimmable: false,
    needsHeatSink: false,
  },
  {
    name: 'Ультрафиолетовые',
    description: 'Лампы, излучающие ультрафиолетовый свет, используемые в медицинских и промышленных целях.',
    advantages: ['Эффективны для стерилизации', 'Используются в специализированных приложениях'],
    disadvantages: ['Может быть опасным для кожи', 'Нужен фильтр'],
    application: ['Стерилизация', 'Проверка подлинности документов'],
    availability: 3,
    quality: 4,
    manufacturingComplexity: 3,
    lifespanYears: 5,
    components: ['Ультрафиолетовая трубка', 'Электрод'],
    type: 'Ультрафиолетово',
    brightness: 'Низкая',
    luminousEfficiency: 'Низкая',
    warmUpSpeed: 'Мгновенный',
    energyEfficiency: 'Средняя',
    shades: ['Нет'],
    colorRendering: 'Нет',
    lightSpectrum: 'Ультрафиолетовый',
    startTime: 'Мгновенный',
    brightnessAdjustable: false,
    dimmable: false,
    needsHeatSink: false,
  },
  {
    name: 'Энергосберегающая',
    description: 'Лампы, предназначенные для экономии электроэнергии по сравнению с традиционными лампами накаливания.',
    advantages: ['Высокая энергоэффективность', 'Долгий срок службы'],
    disadvantages: ['Может содержать ртуть', 'Медленный разогрев'],
    application: ['Домашнее освещение', 'Офисное освещение'],
    availability: 5,
    quality: 4,
    manufacturingComplexity: 3,
    lifespanYears: 8,
    components: ['Флуоресцентное покрытие', 'Газовая смесь'],
    type: 'Флуоресцентные',
    brightness: 'Средняя',
    luminousEfficiency: 'Высокая',
    warmUpSpeed: 'Медленный',
    energyEfficiency: 'Высокая',
    shades: ['Белый', 'Тёплый белый'],
    colorRendering: 'Средняя',
    lightSpectrum: 'Широкий',
    startTime: 'Медленный',
    brightnessAdjustable: false,
    dimmable: false,
    needsHeatSink: false,
  },
];


const BatteryList = () => {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = React.useMemo(() => {
    let sortableItems = [...lightData];
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
  }, [lightData, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы источников света</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Название</th>
            <th onClick={() => requestSort('description')}>Описание</th>
            <th onClick={() => requestSort('advantages')}>Преимущества</th>
            <th onClick={() => requestSort('disadvantages')}>Недостатки</th>
            <th onClick={() => requestSort('application')}>Применение</th>
            <th onClick={() => requestSort('availability')}>Доступность</th>
            <th onClick={() => requestSort('quality')}>Качество</th>
            <th onClick={() => requestSort('manufacturingComplexity')}>Сложность изготовления</th>
            <th onClick={() => requestSort('lifespanYears')}>Срок службы (лет)</th>
            <th onClick={() => requestSort('components')}>Компоненты</th>
            <th onClick={() => requestSort('type')}>Тип</th>
            <th onClick={() => requestSort('brightness')}>Яркость</th>
            <th onClick={() => requestSort('luminousEfficiency')}>Светоотдача</th>
            <th onClick={() => requestSort('warmUpSpeed')}>Разогрева скорость</th>
            <th onClick={() => requestSort('energyEfficiency')}>Энергоэффективность</th>
            <th onClick={() => requestSort('shades')}>Оттенки</th>
            <th onClick={() => requestSort('colorRendering')}>Цветопередача</th>
            <th onClick={() => requestSort('lightSpectrum')}>Спектр светов</th>
            <th onClick={() => requestSort('startTime')}>Время запуска</th>
            <th onClick={() => requestSort('brightnessAdjustable')}>Возможность регулировки яркости</th>
            <th onClick={() => requestSort('dimmable')}>Диммируемые</th>
            <th onClick={() => requestSort('needsHeatSink')}>Нужен теплоотвод</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((light, index) => (
            <tr key={index}>
              <td>{light.name}</td>
              <td>{light.description}</td>
              <td>{light.advantages.join(', ')}</td>
              <td>{light.disadvantages.join(', ')}</td>
              <td>{light.application.join(', ')}</td>
              <td>{light.availability}</td>
              <td>{light.quality}</td>
              <td>{light.manufacturingComplexity}</td>
              <td>{light.lifespanYears}</td>
              <td>{light.components.join(', ')}</td>
              <td>{light.type}</td>
              <td>{light.brightness}</td>
              <td>{light.luminousEfficiency}</td>
              <td>{light.warmUpSpeed}</td>
              <td>{light.energyEfficiency}</td>
              <td>{light.shades.join(', ')}</td>
              <td>{light.colorRendering}</td>
              <td>{light.lightSpectrum}</td>
              <td>{light.startTime}</td>
              <td>{light.brightnessAdjustable ? 'Да' : 'Нет'}</td>
              <td>{light.dimmable ? 'Да' : 'Нет'}</td>
              <td>{light.needsHeatSink ? 'Да' : 'Нет'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BatteryList;
