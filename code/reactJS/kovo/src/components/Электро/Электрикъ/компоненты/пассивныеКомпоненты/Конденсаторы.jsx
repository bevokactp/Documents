import React, { useState } from 'react';

// Массив данных для различных типов конденсаторов и батареек
const componentData = [
  {
    name: 'Алюминиевые',
    description: 'Конденсаторы с электролитом на основе алюминия.',
    advantages: 'Высокая емкость, низкая стоимость.',
    disadvantages: 'Короткий срок службы, чувствительность к перегреву.',
    application: 'Питательные и фильтрующие цепи.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    temperatureRange: '−40°C to +85°C',
    tolerance: '±20%',
    material: 'Алюминий, электролит',
    power: 'Зависит от размера',
    nominalCapacitance: '1μF to 10000μF',
    polarity: 'Полярные',
    eslRange: '0.1nH to 10nH',
    esrRange: '0.01Ω to 10Ω',
    operatingTemperature: '−40°C to +85°C',
    size: '10mm x 20mm',
    resistiveResistance: '0.01Ω',
    dischargeSpeed: 'Медленная',
    manufacturingComplexity: 3,
    lifespan: 1000,
    temperatureRange: '−40°C to +85°C',
    temperatureCoefficient: '±10%',
    leadType: 'Осьевой',
    capacitorType: 'Электролитический',
    coatingType: 'Обычное',
    measurementAccuracy: '±5%',
    fixed: true,
    shape: 'Цилиндр',
    workingVoltageRange: '6V to 50V',
    frequencyRange: 'DC',
    noise: 'Низкий',
    capacitiveLosses: 'Низкие',
  },
  {
    name: 'Дисковые',
    description: 'Конденсаторы с плоской дисковой формой.',
    advantages: 'Компактные размеры, стабильные характеристики.',
    disadvantages: 'Меньшая емкость по сравнению с другими типами.',
    application: 'Используются в фильтрах и резонансных цепях.',
    availability: 'Широко доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    temperatureRange: '−55°C to +125°C',
    tolerance: '±5%',
    material: 'Керамика, стекло',
    power: 'Низкая',
    nominalCapacitance: '1pF to 1μF',
    polarity: 'Неполярные',
    eslRange: '0.01nH to 5nH',
    esrRange: '0.001Ω to 1Ω',
    operatingTemperature: '−55°C to +125°C',
    size: '5mm x 5mm',
    resistiveResistance: '0.001Ω',
    dischargeSpeed: 'Высокая',
    manufacturingComplexity: 2,
    lifespan: 2000,
    temperatureRange: '−55°C to +125°C',
    temperatureCoefficient: '±1%',
    leadType: 'Чашечный',
    capacitorType: 'Керамический',
    coatingType: 'Покрытие из эпоксидной смолы',
    measurementAccuracy: '±1%',
    fixed: true,
    shape: 'Дисковый',
    workingVoltageRange: '10V to 500V',
    frequencyRange: 'DC to GHz',
    noise: 'Низкий',
    capacitiveLosses: 'Минимальные',
  },
  {
    name: 'Ионисторы',
    description: 'Конденсаторы с высоким удельным зарядом и низким внутренним сопротивлением.',
    advantages: 'Высокая плотность энергии, быстрая зарядка и разрядка.',
    disadvantages: 'Высокая стоимость, ограниченная ёмкость.',
    application: 'Энергетические накопители, гибридные транспортные средства.',
    availability: 'Ограниченная',
    quality: 'Высокое',
    reliability: 'Высокая',
    temperatureRange: '−40°C to +70°C',
    tolerance: '±10%',
    material: 'Активированный уголь',
    power: 'Высокая',
    nominalCapacitance: '1F to 1000F',
    polarity: 'Неполярные',
    eslRange: '0.1μH to 10μH',
    esrRange: '0.001Ω to 0.1Ω',
    operatingTemperature: '−40°C to +70°C',
    size: '35mm x 70mm',
    resistiveResistance: '0.001Ω',
    dischargeSpeed: 'Высокая',
    manufacturingComplexity: 4,
    lifespan: 50000,
    temperatureRange: '−40°C to +70°C',
    temperatureCoefficient: '±5%',
    leadType: 'Верхний вывод',
    capacitorType: 'Ионистор',
    coatingType: 'Пластиковое покрытие',
    measurementAccuracy: '±2%',
    fixed: false,
    shape: 'Цилиндр',
    workingVoltageRange: '2.5V to 5V',
    frequencyRange: 'DC',
    noise: 'Низкий',
    capacitiveLosses: 'Низкие',
  },
  {
    name: 'Керамические',
    description: 'Конденсаторы, использующие керамический диэлектрик.',
    advantages: 'Высокая стабильность, низкие потери.',
    disadvantages: 'Меньшая ёмкость, высокая цена.',
    application: 'Радиочастотные и высокочастотные приложения.',
    availability: 'Широко доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    temperatureRange: '−55°C to +125°C',
    tolerance: '±10%',
    material: 'Керамика',
    power: 'Низкая',
    nominalCapacitance: '10pF to 100nF',
    polarity: 'Неполярные',
    eslRange: '0.01nH to 2nH',
    esrRange: '0.001Ω to 0.1Ω',
    operatingTemperature: '−55°C to +125°C',
    size: '4mm x 4mm',
    resistiveResistance: '0.01Ω',
    dischargeSpeed: 'Средняя',
    manufacturingComplexity: 2,
    lifespan: 3000,
    temperatureRange: '−55°C to +125°C',
    temperatureCoefficient: '±1%',
    leadType: 'Верхний вывод',
    capacitorType: 'Керамический',
    coatingType: 'Незначительное',
    measurementAccuracy: '±1%',
    fixed: true,
    shape: 'Дисковый',
    workingVoltageRange: '25V to 1000V',
    frequencyRange: 'DC to GHz',
    noise: 'Низкий',
    capacitiveLosses: 'Минимальные',
  },
  {
    name: 'Металлизированные',
    description: 'Конденсаторы, в которых один из электродов покрыт тонким слоем металла.',
    advantages: 'Высокая стабильность, хороший термостойкость.',
    disadvantages: 'Меньшая ёмкость по сравнению с другими типами.',
    application: 'Электронные фильтры, выравнивающие цепи.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    temperatureRange: '−40°C to +85°C',
    tolerance: '±10%',
    material: 'Металл, пластиковая пленка',
    power: 'Средняя',
    nominalCapacitance: '100pF to 10μF',
    polarity: 'Неполярные',
    eslRange: '0.01nH to 10nH',
    esrRange: '0.01Ω to 1Ω',
    operatingTemperature: '−40°C to +85°C',
    size: '7mm x 15mm',
    resistiveResistance: '0.1Ω',
    dischargeSpeed: 'Средняя',
    manufacturingComplexity: 3,
    lifespan: 2000,
    temperatureRange: '−40°C to +85°C',
    temperatureCoefficient: '±5%',
    leadType: 'Фланцевый',
    capacitorType: 'Металлизированный',
    coatingType: 'Пластиковое покрытие',
    measurementAccuracy: '±5%',
    fixed: true,
    shape: 'Цилиндр',
    workingVoltageRange: '10V to 400V',
    frequencyRange: 'DC to MHz',
    noise: 'Низкий',
    capacitiveLosses: 'Низкие',
  },
  {
    name: 'Многослойные',
    description: 'Конденсаторы, состоящие из нескольких слоев диэлектрика и электродов.',
    advantages: 'Высокая ёмкость в компактных размерах.',
    disadvantages: 'Высокая стоимость.',
    application: 'Питательные цепи, высокочастотные фильтры.',
    availability: 'Ограниченная',
    quality: 'Высокое',
    reliability: 'Высокая',
    temperatureRange: '−55°C to +125°C',
    tolerance: '±5%',
    material: 'Многослойный керамический диэлектрик',
    power: 'Средняя',
    nominalCapacitance: '10nF to 1μF',
    polarity: 'Неполярные',
    eslRange: '0.01nH to 5nH',
    esrRange: '0.01Ω to 0.1Ω',
    operatingTemperature: '−55°C to +125°C',
    size: '5mm x 5mm',
    resistiveResistance: '0.01Ω',
    dischargeSpeed: 'Средняя',
    manufacturingComplexity: 4,
    lifespan: 5000,
    temperatureRange: '−55°C to +125°C',
    temperatureCoefficient: '±1%',
    leadType: 'Верхний вывод',
    capacitorType: 'Многослойный',
    coatingType: 'Незначительное',
    measurementAccuracy: '±1%',
    fixed: true,
    shape: 'Прямоугольный',
    workingVoltageRange: '10V to 1000V',
    frequencyRange: 'DC to GHz',
    noise: 'Низкий',
    capacitiveLosses: 'Минимальные',
  },
  {
    name: 'Ниобиевые',
    description: 'Конденсаторы с диэлектриком из ниобиевого оксида.',
    advantages: 'Высокая стабильность, широкий диапазон рабочих температур.',
    disadvantages: 'Высокая стоимость.',
    application: 'Высокоточные измерения, стабилизаторы напряжения.',
    availability: 'Ограниченная',
    quality: 'Высокое',
    reliability: 'Высокая',
    temperatureRange: '−55°C to +125°C',
    tolerance: '±5%',
    material: 'Ниобий',
    power: 'Средняя',
    nominalCapacitance: '10nF to 1μF',
    polarity: 'Неполярные',
    eslRange: '0.1nH to 5nH',
    esrRange: '0.01Ω to 0.1Ω',
    operatingTemperature: '−55°C to +125°C',
    size: '7mm x 15mm',
    resistiveResistance: '0.01Ω',
    dischargeSpeed: 'Средняя',
    manufacturingComplexity: 5,
    lifespan: 5000,
    temperatureRange: '−55°C to +125°C',
    temperatureCoefficient: '±1%',
    leadType: 'Верхний вывод',
    capacitorType: 'Ниобиевый',
    coatingType: 'Пластиковое покрытие',
    measurementAccuracy: '±1%',
    fixed: true,
    shape: 'Цилиндр',
    workingVoltageRange: '10V to 500V',
    frequencyRange: 'DC to GHz',
    noise: 'Низкий',
    capacitiveLosses: 'Минимальные',
  },
  {
    name: 'Переменной ёмкости',
    description: 'Конденсаторы, у которых можно регулировать ёмкость.',
    advantages: 'Регулируемая ёмкость, универсальность.',
    disadvantages: 'Сложность в управлении, высокая стоимость.',
    application: 'Регулировка частоты, настройки фильтров.',
    availability: 'Ограниченная',
    quality: 'Среднее',
    reliability: 'Средняя',
    temperatureRange: '−40°C to +85°C',
    tolerance: '±10%',
    material: 'Разные диэлектрики',
    power: 'Зависит от конструкции',
    nominalCapacitance: '1pF to 100μF',
    polarity: 'Неполярные',
    eslRange: '0.01nH to 10nH',
    esrRange: '0.01Ω to 1Ω',
    operatingTemperature: '−40°C to +85°C',
    size: '10mm x 20mm',
    resistiveResistance: '0.01Ω',
    dischargeSpeed: 'Средняя',
    manufacturingComplexity: 4,
    lifespan: 2000,
    temperatureRange: '−40°C to +85°C',
    temperatureCoefficient: '±10%',
    leadType: 'Разные',
    capacitorType: 'Переменной ёмкости',
    coatingType: 'Разное',
    measurementAccuracy: '±10%',
    fixed: false,
    shape: 'Цилиндрический',
    workingVoltageRange: '1V to 500V',
    frequencyRange: 'DC to MHz',
    noise: 'Средний',
    capacitiveLosses: 'Средние',
  },
  {
    name: 'Плёночные',
    description: 'Конденсаторы с диэлектриком из пленки.',
    advantages: 'Высокая точность, стабильность.',
    disadvantages: 'Большие размеры для высокой ёмкости.',
    application: 'Электронные фильтры, временные задержки.',
    availability: 'Широко доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    temperatureRange: '−40°C to +85°C',
    tolerance: '±5%',
    material: 'Пластиковая пленка',
    power: 'Низкая',
    nominalCapacitance: '10nF to 10μF',
    polarity: 'Неполярные',
    eslRange: '0.01nH to 5nH',
    esrRange: '0.01Ω to 0.1Ω',
    operatingTemperature: '−40°C to +85°C',
    size: '10mm x 20mm',
    resistiveResistance: '0.01Ω',
    dischargeSpeed: 'Средняя',
    manufacturingComplexity: 3,
    lifespan: 5000,
    temperatureRange: '−40°C to +85°C',
    temperatureCoefficient: '±2%',
    leadType: 'Фланцевый',
    capacitorType: 'Плёночный',
    coatingType: 'Пластиковое покрытие',
    measurementAccuracy: '±2%',
    fixed: true,
    shape: 'Прямоугольный',
    workingVoltageRange: '10V to 1000V',
    frequencyRange: 'DC to MHz',
    noise: 'Низкий',
    capacitiveLosses: 'Низкие',
  },
  {
    name: 'Полимерные',
    description: 'Конденсаторы с полимерным диэлектриком.',
    advantages: 'Высокая стабильность, низкое эквивалентное последовательное сопротивление.',
    disadvantages: 'Высокая стоимость.',
    application: 'Высокочастотные и высокоскоростные приложения.',
    availability: 'Ограниченная',
    quality: 'Высокое',
    reliability: 'Высокая',
    temperatureRange: '−55°C to +125°C',
    tolerance: '±10%',
    material: 'Полимер',
    power: 'Высокая',
    nominalCapacitance: '10nF to 100μF',
    polarity: 'Неполярные',
    eslRange: '0.01nH to 5nH',
    esrRange: '0.001Ω to 0.1Ω',
    operatingTemperature: '−55°C to +125°C',
    size: '5mm x 10mm',
    resistiveResistance: '0.01Ω',
    dischargeSpeed: 'Высокая',
    manufacturingComplexity: 4,
    lifespan: 5000,
    temperatureRange: '−55°C to +125°C',
    temperatureCoefficient: '±2%',
    leadType: 'Верхний вывод',
    capacitorType: 'Полимерный',
    coatingType: 'Пластиковое покрытие',
    measurementAccuracy: '±2%',
    fixed: true,
    shape: 'Цилиндр',
    workingVoltageRange: '10V to 500V',
    frequencyRange: 'DC to GHz',
    noise: 'Низкий',
    capacitiveLosses: 'Минимальные',
  },
  {
    name: 'Слюдяные',
    description: 'Конденсаторы с диэлектриком из слюды.',
    advantages: 'Высокая стабильность, низкие потери.',
    disadvantages: 'Высокая стоимость, большие размеры.',
    application: 'Высокочастотные приложения, точные измерения.',
    availability: 'Ограниченная',
    quality: 'Высокое',
    reliability: 'Высокая',
    temperatureRange: '−55°C to +150°C',
    tolerance: '±2%',
    material: 'Слюда',
    power: 'Низкая',
    nominalCapacitance: '10pF to 1μF',
    polarity: 'Неполярные',
    eslRange: '0.01nH to 2nH',
    esrRange: '0.01Ω to 0.1Ω',
    operatingTemperature: '−55°C to +150°C',
    size: '10mm x 15mm',
    resistiveResistance: '0.01Ω',
    dischargeSpeed: 'Средняя',
    manufacturingComplexity: 5,
    lifespan: 10000,
    temperatureRange: '−55°C to +150°C',
    temperatureCoefficient: '±2%',
    leadType: 'Верхний вывод',
    capacitorType: 'Слюдяной',
    coatingType: 'Пластиковое покрытие',
    measurementAccuracy: '±2%',
    fixed: true,
    shape: 'Цилиндр',
    workingVoltageRange: '10V to 1000V',
    frequencyRange: 'DC to GHz',
    noise: 'Низкий',
    capacitiveLosses: 'Минимальные',
  },
  {
    name: 'Танталовые',
    description: 'Конденсаторы с диэлектриком из тантала.',
    advantages: 'Высокая ёмкость, компактные размеры.',
    disadvantages: 'Высокая стоимость, чувствительность к перегреву.',
    application: 'Медицинские устройства, высокоэффективные фильтры.',
    availability: 'Ограниченная',
    quality: 'Высокое',
    reliability: 'Высокая',
    temperatureRange: '−55°C to +125°C',
    tolerance: '±10%',
    material: 'Тантал',
    power: 'Средняя',
    nominalCapacitance: '1μF to 100μF',
    polarity: 'Полярные',
    eslRange: '0.1nH to 5nH',
    esrRange: '0.01Ω to 0.1Ω',
    operatingTemperature: '−55°C to +125°C',
    size: '5mm x 10mm',
    resistiveResistance: '0.01Ω',
    dischargeSpeed: 'Средняя',
    manufacturingComplexity: 4,
    lifespan: 5000,
    temperatureRange: '−55°C to +125°C',
    temperatureCoefficient: '±2%',
    leadType: 'Верхний вывод',
    capacitorType: 'Танталовый',
    coatingType: 'Пластиковое покрытие',
    measurementAccuracy: '±2%',
    fixed: true,
    shape: 'Цилиндр',
    workingVoltageRange: '10V to 50V',
    frequencyRange: 'DC to MHz',
    noise: 'Низкий',
    capacitiveLosses: 'Минимальные',
  },
  {
    name: 'Фольгованные',
    description: 'Конденсаторы с фольгированными электродами.',
    advantages: 'Низкие потери, высокая стабильность.',
    disadvantages: 'Меньшая ёмкость, большие размеры.',
    application: 'Фильтры, временные задержки.',
    availability: 'Ограниченная',
    quality: 'Среднее',
    reliability: 'Средняя',
    temperatureRange: '−40°C to +85°C',
    tolerance: '±10%',
    material: 'Фольга, пластик',
    power: 'Средняя',
    nominalCapacitance: '10nF to 100μF',
    polarity: 'Неполярные',
    eslRange: '0.1nH to 10nH',
    esrRange: '0.01Ω to 1Ω',
    operatingTemperature: '−40°C to +85°C',
    size: '10mm x 20mm',
    resistiveResistance: '0.01Ω',
    dischargeSpeed: 'Средняя',
    manufacturingComplexity: 3,
    lifespan: 3000,
    temperatureRange: '−40°C to +85°C',
    temperatureCoefficient: '±5%',
    leadType: 'Осьевой',
    capacitorType: 'Фольгованный',
    coatingType: 'Пластиковое покрытие',
    measurementAccuracy: '±5%',
    fixed: true,
    shape: 'Цилиндр',
    workingVoltageRange: '10V to 500V',
    frequencyRange: 'DC to MHz',
    noise: 'Средний',
    capacitiveLosses: 'Средние',
  },
  {
    name: 'Электролитические',
    description: 'Конденсаторы с электролитом в качестве диэлектрика.',
    advantages: 'Высокая ёмкость, низкая стоимость.',
    disadvantages: 'Ограниченный срок службы, чувствительность к перегреву.',
    application: 'Питательные и фильтрующие цепи.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    temperatureRange: '−40°C to +85°C',
    tolerance: '±20%',
    material: 'Электролит, алюминий или тантал',
    power: 'Средняя',
    nominalCapacitance: '1μF to 10000μF',
    polarity: 'Полярные',
    eslRange: '0.1nH to 10nH',
    esrRange: '0.01Ω to 10Ω',
    operatingTemperature: '−40°C to +85°C',
    size: '10mm x 20mm',
    resistiveResistance: '0.01Ω',
    dischargeSpeed: 'Медленная',
    manufacturingComplexity: 3,
    lifespan: 1000,
    temperatureRange: '−40°C to +85°C',
    temperatureCoefficient: '±20%',
    leadType: 'Осьевой',
    capacitorType: 'Электролитический',
    coatingType: 'Пластиковое покрытие',
    measurementAccuracy: '±10%',
    fixed: true,
    shape: 'Цилиндр',
    workingVoltageRange: '6V to 50V',
    frequencyRange: 'DC',
    noise: 'Средний',
    capacitiveLosses: 'Средние',
  },
];

const ComponentList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...componentData];
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
  }, [componentData, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы конденсаторов</h1>
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
            <th onClick={() => requestSort('reliability')}>Надежность</th>
            <th onClick={() => requestSort('temperatureRange')}>Диапазон рабочих температур</th>
            <th onClick={() => requestSort('tolerance')}>Допуск</th>
            <th onClick={() => requestSort('material')}>Материал</th>
            <th onClick={() => requestSort('power')}>Мощность</th>
            <th onClick={() => requestSort('nominalCapacitance')}>Номинальная емкость</th>
            <th onClick={() => requestSort('polarity')}>Полярность</th>
            <th onClick={() => requestSort('eslRange')}>Пределы эквивалентного последовательного индуктивности (ESL)</th>
            <th onClick={() => requestSort('esrRange')}>Пределы эквивалентного последовательного резистора (ESR)</th>
            <th onClick={() => requestSort('operatingTemperature')}>Рабочая температура мин-мах</th>
            <th onClick={() => requestSort('size')}>Размеры</th>
            <th onClick={() => requestSort('resistiveResistance')}>Резистивное сопротивление</th>
            <th onClick={() => requestSort('dischargeSpeed')}>Скорость разряда</th>
            <th onClick={() => requestSort('manufacturingComplexity')}>Сложность изготовления</th>
            <th onClick={() => requestSort('lifespan')}>Срок службы лет</th>
            <th onClick={() => requestSort('temperatureRange')}>Температурный диапазон</th>
            <th onClick={() => requestSort('temperatureCoefficient')}>Температурный коэффициент сопротивления</th>
            <th onClick={() => requestSort('leadType')}>Тип вывода</th>
            <th onClick={() => requestSort('capacitorType')}>Тип конденсатора</th>
            <th onClick={() => requestSort('coatingType')}>Тип покрытия</th>
            <th onClick={() => requestSort('measurementAccuracy')}>Точность измерений</th>
            <th onClick={() => requestSort('fixed')}>Фиксированный</th>
            <th onClick={() => requestSort('shape')}>Форма</th>
            <th onClick={() => requestSort('workingVoltageRange')}>Диапазон рабочего напряжения</th>
            <th onClick={() => requestSort('frequencyRange')}>Частотный диапазон</th>
            <th onClick={() => requestSort('noise')}>Шум</th>
            <th onClick={() => requestSort('capacitiveLosses')}>Ёмкостные потери</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((component) => (
            <tr key={component.name}>
              <td>{component.name}</td>
              <td>{component.description}</td>
              <td>{component.advantages}</td>
              <td>{component.disadvantages}</td>
              <td>{component.application}</td>
              <td>{component.availability}</td>
              <td>{component.quality}</td>
              <td>{component.reliability}</td>
              <td>{component.temperatureRange}</td>
              <td>{component.tolerance}</td>
              <td>{component.material}</td>
              <td>{component.power}</td>
              <td>{component.nominalCapacitance}</td>
              <td>{component.polarity}</td>
              <td>{component.eslRange}</td>
              <td>{component.esrRange}</td>
              <td>{component.operatingTemperature}</td>
              <td>{component.size}</td>
              <td>{component.resistiveResistance}</td>
              <td>{component.dischargeSpeed}</td>
              <td>{component.manufacturingComplexity}</td>
              <td>{component.lifespan}</td>
              <td>{component.temperatureRange}</td>
              <td>{component.temperatureCoefficient}</td>
              <td>{component.leadType}</td>
              <td>{component.capacitorType}</td>
              <td>{component.coatingType}</td>
              <td>{component.measurementAccuracy}</td>
              <td>{component.fixed ? 'Да' : 'Нет'}</td>
              <td>{component.shape}</td>
              <td>{component.workingVoltageRange}</td>
              <td>{component.frequencyRange}</td>
              <td>{component.noise}</td>
              <td>{component.capacitiveLosses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComponentList;
