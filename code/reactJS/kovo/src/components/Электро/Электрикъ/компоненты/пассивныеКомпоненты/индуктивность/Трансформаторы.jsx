import React, { useState } from 'react';

// Данные для различных типов трансформаторов
const transformerData = [
  {
    name: 'Автотрансформаторы',
    description: 'Трансформаторы с общими обмотками для первичного и вторичного витков.',
    advantages: 'Компактность, высокая эффективность.',
    disadvantages: 'Отсутствие изоляции между обмотками.',
    application: 'Энергетические системы, регулировка напряжения.',
    availability: 'Широко доступные',
    quality: 'Хорошее',
    reliability: 'Высокая',
    manufacturingComplexity: 2,
    lifespan: 15,
    hasDistribution: true,
    hasDoubleWinding: false,
    hasPulse: false,
    hasAdjustable: false,
    hasMagnetic: true,
    hasWelding: false,
    materials: 'Сталь, медь',
    coreMaterial: 'Феррит',
    power: '500W',
    voltage: '220V',
    frequency: '50Hz',
    efficiency: '95%',
    transformationCoefficient: '1.5',
    insulationClass: 'B',
    magneticPermeability: '1000',
    weight: '1.5kg',
    size: '100mm x 100mm x 80mm',
    temperatureRange: '−20°C to +60°C',
    harmonicCoefficient: '5%',
    losses: '5W',
    noise: 'Low',
  },
  {
    name: 'Силовые трансформаторы',
    description: 'Трансформаторы для передачи и распределения электроэнергии.',
    advantages: 'Высокая мощность, надежность.',
    disadvantages: 'Большие размеры, высокая стоимость.',
    application: 'Энергетические системы, электростанции.',
    availability: 'Широко доступные',
    quality: 'Высокое',
    reliability: 'Очень высокая',
    manufacturingComplexity: 4,
    lifespan: 25,
    hasDistribution: true,
    hasDoubleWinding: true,
    hasPulse: false,
    hasAdjustable: false,
    hasMagnetic: true,
    hasWelding: false,
    materials: 'Сталь, медь',
    coreMaterial: 'Никелевое железо',
    power: '5kW',
    voltage: '11kV',
    frequency: '60Hz',
    efficiency: '98%',
    transformationCoefficient: '2',
    insulationClass: 'F',
    magneticPermeability: '1500',
    weight: '50kg',
    size: '800mm x 600mm x 400mm',
    temperatureRange: '−30°C to +70°C',
    harmonicCoefficient: '3%',
    losses: '50W',
    noise: 'Medium',
  },
  {
    name: 'Изоляционные трансформаторы',
    description: 'Трансформаторы для гальванической изоляции между первичной и вторичной обмотками.',
    advantages: 'Изоляция, защита от помех.',
    disadvantages: 'Ограниченная мощность.',
    application: 'Медицинские приборы, электробезопасность.',
    availability: 'Широко доступные',
    quality: 'Хорошее',
    reliability: 'Средняя',
    manufacturingComplexity: 3,
    lifespan: 20,
    hasDistribution: false,
    hasDoubleWinding: true,
    hasPulse: false,
    hasAdjustable: false,
    hasMagnetic: false,
    hasWelding: false,
    materials: 'Медь, изоляционные материалы',
    coreMaterial: 'Феррит',
    power: '200W',
    voltage: '110V',
    frequency: '50Hz',
    efficiency: '90%',
    transformationCoefficient: '1',
    insulationClass: 'H',
    magneticPermeability: '500',
    weight: '2kg',
    size: '150mm x 150mm x 100mm',
    temperatureRange: '−10°C to +50°C',
    harmonicCoefficient: '7%',
    losses: '10W',
    noise: 'Low',
  },
  {
    name: 'Высокочастотные трансформаторы',
    description: 'Трансформаторы для работы на высоких частотах.',
    advantages: 'Высокая частотная эффективность.',
    disadvantages: 'Высокая стоимость, ограниченные мощности.',
    application: 'Радиочастотные усилители, коммутационные устройства.',
    availability: 'Специальные',
    quality: 'Высокое',
    reliability: 'Средняя',
    manufacturingComplexity: 4,
    lifespan: 15,
    hasDistribution: false,
    hasDoubleWinding: false,
    hasPulse: true,
    hasAdjustable: false,
    hasMagnetic: true,
    hasWelding: false,
    materials: 'Керамика, медь',
    coreMaterial: 'Керамика',
    power: '50W',
    voltage: '12V',
    frequency: '2MHz',
    efficiency: '85%',
    transformationCoefficient: '2.5',
    insulationClass: 'E',
    magneticPermeability: '2000',
    weight: '0.5kg',
    size: '50mm x 50mm x 40mm',
    temperatureRange: '−20°C to +70°C',
    harmonicCoefficient: '10%',
    losses: '8W',
    noise: 'High',
  },
  {
    name: 'Шумоподавляющие трансформаторы',
    description: 'Трансформаторы, предназначенные для подавления высокочастотных помех.',
    advantages: 'Эффективное подавление помех.',
    disadvantages: 'Ограниченная эффективность на низких частотах.',
    application: 'Электронные устройства, фильтры помех.',
    availability: 'Специальные',
    quality: 'Среднее',
    reliability: 'Средняя',
    manufacturingComplexity: 3,
    lifespan: 12,
    hasDistribution: false,
    hasDoubleWinding: false,
    hasPulse: false,
    hasAdjustable: false,
    hasMagnetic: true,
    hasWelding: false,
    materials: 'Медь, феррит',
    coreMaterial: 'Феррит',
    power: '100W',
    voltage: '220V',
    frequency: '100kHz',
    efficiency: '80%',
    transformationCoefficient: '1.2',
    insulationClass: 'B',
    magneticPermeability: '1200',
    weight: '1kg',
    size: '80mm x 80mm x 60mm',
    temperatureRange: '−10°C to +60°C',
    harmonicCoefficient: '6%',
    losses: '12W',
    noise: 'Medium',
  },
];

const TransformerList = () => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (column) => {
    const direction = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(direction);
  };

  const sortedData = [...transformerData].sort((a, b) => {
    if (sortColumn) {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (typeof aValue === 'string') {
        return sortDirection === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }
      if (typeof aValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      if (typeof aValue === 'boolean') {
        return sortDirection === 'asc' ? (aValue === bValue ? 0 : aValue ? -1 : 1) : (aValue === bValue ? 0 : aValue ? 1 : -1);
      }
      return 0;
    }
    return 0;
  });

  return (
    <div>
      <h1>Типы трансформаторов</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Название</th>
            <th onClick={() => handleSort('description')}>Описание</th>
            <th onClick={() => handleSort('advantages')}>Преимущества</th>
            <th onClick={() => handleSort('disadvantages')}>Недостатки</th>
            <th onClick={() => handleSort('application')}>Применение</th>
            <th onClick={() => handleSort('availability')}>Доступность</th>
            <th onClick={() => handleSort('quality')}>Качество</th>
            <th onClick={() => handleSort('reliability')}>Надежность</th>
            <th onClick={() => handleSort('manufacturingComplexity')}>Сложность изготовления</th>
            <th onClick={() => handleSort('lifespan')}>Срок службы (лет)</th>
            <th onClick={() => handleSort('hasDistribution')}>Есть распределительные</th>
            <th onClick={() => handleSort('hasDoubleWinding')}>Есть трансформаторы с двойной обмоткой</th>
            <th onClick={() => handleSort('hasPulse')}>Есть импульсные</th>
            <th onClick={() => handleSort('hasAdjustable')}>Есть регулируемые</th>
            <th onClick={() => handleSort('hasMagnetic')}>Есть магнитные</th>
            <th onClick={() => handleSort('hasWelding')}>Есть сварочные</th>
            <th onClick={() => handleSort('materials')}>Материалы</th>
            <th onClick={() => handleSort('coreMaterial')}>Материал сердечника</th>
            <th onClick={() => handleSort('power')}>Мощность</th>
            <th onClick={() => handleSort('voltage')}>Напряжение</th>
            <th onClick={() => handleSort('frequency')}>Частота</th>
            <th onClick={() => handleSort('efficiency')}>Эффективность</th>
            <th onClick={() => handleSort('transformationCoefficient')}>Коэффициент трансформации</th>
            <th onClick={() => handleSort('insulationClass')}>Класс изоляции</th>
            <th onClick={() => handleSort('magneticPermeability')}>Магнитная проницаемость</th>
            <th onClick={() => handleSort('weight')}>Вес</th>
            <th onClick={() => handleSort('size')}>Размеры</th>
            <th onClick={() => handleSort('temperatureRange')}>Температурный диапазон</th>
            <th onClick={() => handleSort('harmonicCoefficient')}>Коэффициент гармоник</th>
            <th onClick={() => handleSort('losses')}>Потери</th>
            <th onClick={() => handleSort('noise')}>Шум</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((transformer, index) => (
            <tr key={index}>
              <td>{transformer.name}</td>
              <td>{transformer.description}</td>
              <td>{transformer.advantages}</td>
              <td>{transformer.disadvantages}</td>
              <td>{transformer.application}</td>
              <td>{transformer.availability}</td>
              <td>{transformer.quality}</td>
              <td>{transformer.reliability}</td>
              <td>{transformer.manufacturingComplexity}</td>
              <td>{transformer.lifespan}</td>
              <td>{transformer.hasDistribution ? 'Да' : 'Нет'}</td>
              <td>{transformer.hasDoubleWinding ? 'Да' : 'Нет'}</td>
              <td>{transformer.hasPulse ? 'Да' : 'Нет'}</td>
              <td>{transformer.hasAdjustable ? 'Да' : 'Нет'}</td>
              <td>{transformer.hasMagnetic ? 'Да' : 'Нет'}</td>
              <td>{transformer.hasWelding ? 'Да' : 'Нет'}</td>
              <td>{transformer.materials}</td>
              <td>{transformer.coreMaterial}</td>
              <td>{transformer.power}</td>
              <td>{transformer.voltage}</td>
              <td>{transformer.frequency}</td>
              <td>{transformer.efficiency}</td>
              <td>{transformer.transformationCoefficient}</td>
              <td>{transformer.insulationClass}</td>
              <td>{transformer.magneticPermeability}</td>
              <td>{transformer.weight}</td>
              <td>{transformer.size}</td>
              <td>{transformer.temperatureRange}</td>
              <td>{transformer.harmonicCoefficient}</td>
              <td>{transformer.losses}</td>
              <td>{transformer.noise}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransformerList;
