import React, { useState } from 'react';

// Данные для разных типов катушек
const coilData = [
  {
    name: 'Осьевые катушки',
    description: 'Катушки с выводами, расположенными на концах катушки.',
    advantages: 'Простота монтажа, компактность.',
    disadvantages: 'Ограниченная мощность.',
    application: 'Электронные устройства, печатные платы.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    manufacturingComplexity: 2,
    lifespan: 10,
    type: 'Постоянные',
    inductance: '100μH',
    maxCurrent: '1A',
    resistance: '0.2Ω',
    qualityCoefficient: '30',
    frequencyRange: 'DC to 100kHz',
    size: '10mm x 10mm',
    coreMaterial: 'Феррит',
    temperatureRange: '−40°C to +85°C',
    shielding: 'Нет',
    maxVoltage: '50V',
    dimensions: '10mm x 10mm',
    wireMaterial: 'Медь',
    tempDriftCoefficient: '±5%',
  },
  {
    name: 'Фланцевые катушки',
    description: 'Катушки с фланцами для крепления.',
    advantages: 'Надежное крепление, высокая устойчивость.',
    disadvantages: 'Большие размеры.',
    application: 'Электронные устройства, силовые блоки.',
    availability: 'Широко доступные',
    quality: 'Хорошее',
    reliability: 'Высокая',
    manufacturingComplexity: 3,
    lifespan: 15,
    type: 'Постоянные',
    inductance: '220μH',
    maxCurrent: '2A',
    resistance: '0.1Ω',
    qualityCoefficient: '45',
    frequencyRange: 'DC to 200kHz',
    size: '20mm x 20mm',
    coreMaterial: 'Никелевое железо',
    temperatureRange: '−25°C to +75°C',
    shielding: 'Да',
    maxVoltage: '100V',
    dimensions: '20mm x 20mm',
    wireMaterial: 'Медь',
    tempDriftCoefficient: '±3%',
  },
  {
    name: 'Тороидальные катушки',
    description: 'Катушки с тороидальным сердечником для минимизации помех.',
    advantages: 'Компактность, высокая эффективность.',
    disadvantages: 'Высокая стоимость.',
    application: 'Источники питания, радиочастотные фильтры.',
    availability: 'Широко доступные',
    quality: 'Высокое',
    reliability: 'Высокая',
    manufacturingComplexity: 4,
    lifespan: 12,
    type: 'Постоянные',
    inductance: '150μH',
    maxCurrent: '1.5A',
    resistance: '0.15Ω',
    qualityCoefficient: '50',
    frequencyRange: 'DC to 150kHz',
    size: '15mm x 15mm',
    coreMaterial: 'Феррит',
    temperatureRange: '−30°C to +80°C',
    shielding: 'Нет',
    maxVoltage: '75V',
    dimensions: '15mm x 15mm',
    wireMaterial: 'Медь',
    tempDriftCoefficient: '±4%',
  },
  {
    name: 'Электромагнитные катушки',
    description: 'Катушки, используемые в электромагнитных устройствах.',
    advantages: 'Высокая чувствительность, быстрый отклик.',
    disadvantages: 'Могут быть подвержены электромагнитным помехам.',
    application: 'Электромагнитные реле, трансформаторы.',
    availability: 'Широко доступные',
    quality: 'Хорошее',
    reliability: 'Средняя',
    manufacturingComplexity: 3,
    lifespan: 10,
    type: 'Многофункциональные',
    inductance: '200μH',
    maxCurrent: '1A',
    resistance: '0.25Ω',
    qualityCoefficient: '40',
    frequencyRange: 'DC to 200kHz',
    size: '18mm x 18mm',
    coreMaterial: 'Никелевое железо',
    temperatureRange: '−20°C to +70°C',
    shielding: 'Да',
    maxVoltage: '60V',
    dimensions: '18mm x 18mm',
    wireMaterial: 'Медь',
    tempDriftCoefficient: '±6%',
  },
  {
    name: 'Шунтирующие катушки',
    description: 'Катушки, используемые для шунтирования высокочастотных помех.',
    advantages: 'Эффективное подавление помех.',
    disadvantages: 'Ограниченная работа на постоянном токе.',
    application: 'Источники питания, радиочастотные фильтры.',
    availability: 'Широко доступные',
    quality: 'Среднее',
    reliability: 'Средняя',
    manufacturingComplexity: 2,
    lifespan: 8,
    type: 'Реактивные',
    inductance: '120μH',
    maxCurrent: '1.2A',
    resistance: '0.3Ω',
    qualityCoefficient: '35',
    frequencyRange: 'DC to 120kHz',
    size: '12mm x 12mm',
    coreMaterial: 'Феррит',
    temperatureRange: '−40°C to +75°C',
    shielding: 'Нет',
    maxVoltage: '60V',
    dimensions: '12mm x 12mm',
    wireMaterial: 'Медь',
    tempDriftCoefficient: '±5%',
  },
];

const CoilList = () => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (column) => {
    const direction = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(direction);
  };

  const sortedData = [...coilData].sort((a, b) => {
    if (sortColumn) {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    }
    return 0;
  });

  return (
    <div>
      <h1>Типы катушек</h1>
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
            <th onClick={() => handleSort('type')}>Тип</th>
            <th onClick={() => handleSort('inductance')}>Индуктивность</th>
            <th onClick={() => handleSort('maxCurrent')}>Максимальный ток</th>
            <th onClick={() => handleSort('resistance')}>Сопротивление</th>
            <th onClick={() => handleSort('qualityCoefficient')}>Коэффициент качества</th>
            <th onClick={() => handleSort('frequencyRange')}>Частотный диапазон</th>
            <th onClick={() => handleSort('size')}>Размеры</th>
            <th onClick={() => handleSort('coreMaterial')}>Материал сердечника</th>
            <th onClick={() => handleSort('temperatureRange')}>Температурный диапазон</th>
            <th onClick={() => handleSort('shielding')}>Экранирование</th>
            <th onClick={() => handleSort('maxVoltage')}>Максимальное напряжение</th>
            <th onClick={() => handleSort('dimensions')}>Габариты</th>
            <th onClick={() => handleSort('wireMaterial')}>Материал провода</th>
            <th onClick={() => handleSort('tempDriftCoefficient')}>Коэффициент температурного дрейфа</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((coil, index) => (
            <tr key={index}>
              <td>{coil.name}</td>
              <td>{coil.description}</td>
              <td>{coil.advantages}</td>
              <td>{coil.disadvantages}</td>
              <td>{coil.application}</td>
              <td>{coil.availability}</td>
              <td>{coil.quality}</td>
              <td>{coil.reliability}</td>
              <td>{coil.manufacturingComplexity}</td>
              <td>{coil.lifespan}</td>
              <td>{coil.type}</td>
              <td>{coil.inductance}</td>
              <td>{coil.maxCurrent}</td>
              <td>{coil.resistance}</td>
              <td>{coil.qualityCoefficient}</td>
              <td>{coil.frequencyRange}</td>
              <td>{coil.size}</td>
              <td>{coil.coreMaterial}</td>
              <td>{coil.temperatureRange}</td>
              <td>{coil.shielding}</td>
              <td>{coil.maxVoltage}</td>
              <td>{coil.dimensions}</td>
              <td>{coil.wireMaterial}</td>
              <td>{coil.tempDriftCoefficient}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoilList;
