import React, { useState } from 'react';

const audioComponentData = [
  {
    name: 'Генератор звуковых частот',
    description: 'Устройство для создания звуковых сигналов с определенной частотой.',
    advantages: ['Настраиваемый частотный диапазон', 'Высокая точность частоты'],
    disadvantages: ['Ограниченное использование', 'Необходимость калибровки'],
    application: ['Научные исследования', 'Аудиотестирование'],
    availability: 4,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['Осцилляторы', 'Фильтры', 'Усилители'],
    frequencyRange: '1 Hz - 1 MHz',
    power: 'Variable',
    sensitivity: 'N/A',
    impedance: 'N/A',
    harmonicCoefficient: 'Low',
    dynamicRange: 'Wide',
    soundExpansion: 'N/A',
    soundPressureLevel: 'N/A',
    soundAbsorption: 'N/A',
    angularCoverage: 'N/A',
    waveform: 'Sine',
    resonanceFrequency: 'N/A',
    responseSpeed: 'High',
    powerConsumption: 'Low',
    dimensionsShape: 'Compact',
    resolution: 'N/A',
    noiseResistance: 'High',
  },
  {
    name: 'Громкоговоритель',
    description: 'Устройство для воспроизведения звука на большие расстояния.',
    advantages: ['Высокая мощность', 'Широкое применение'],
    disadvantages: ['Большие размеры', 'Высокое потребление энергии'],
    application: ['Публичные объявления', 'Концерты', 'Аварийные системы'],
    availability: 5,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespan: 8,
    components: ['Излучатель', 'Корпус', 'Усилитель'],
    frequencyRange: '100 Hz - 10 kHz',
    power: '100W - 1000W',
    sensitivity: '95 dB',
    impedance: '8 Ω',
    harmonicCoefficient: 'Moderate',
    dynamicRange: 'Wide',
    soundExpansion: 'Wide',
    soundPressureLevel: 'High',
    soundAbsorption: 'N/A',
    angularCoverage: '120°',
    waveform: 'Varied',
    resonanceFrequency: 'N/A',
    responseSpeed: 'Moderate',
    powerConsumption: 'High',
    dimensionsShape: 'Large',
    resolution: 'N/A',
    noiseResistance: 'Moderate',
  },
  {
    name: 'Динамик',
    description: 'Устройство для преобразования электрических сигналов в звуковые волны.',
    advantages: ['Четкость воспроизведения', 'Разнообразие моделей'],
    disadvantages: ['Ограниченный частотный диапазон', 'Может искажать звук при высокой громкости'],
    application: ['Аудиосистемы', 'Компьютеры', 'Мобильные устройства'],
    availability: 5,
    qualityAndReliability: 5,
    manufacturingComplexity: 3,
    lifespan: 5,
    components: ['Диффузор', 'Катушка', 'Магнит'],
    frequencyRange: '20 Hz - 20 kHz',
    power: '10W - 100W',
    sensitivity: '90 dB',
    impedance: '4 Ω',
    harmonicCoefficient: 'Low',
    dynamicRange: 'Wide',
    soundExpansion: 'N/A',
    soundPressureLevel: 'Moderate',
    soundAbsorption: 'N/A',
    angularCoverage: 'N/A',
    waveform: 'Varied',
    resonanceFrequency: 'N/A',
    responseSpeed: 'High',
    powerConsumption: 'Moderate',
    dimensionsShape: 'Varied',
    resolution: 'N/A',
    noiseResistance: 'Good',
  },
  {
    name: 'Зуммер',
    description: 'Устройство для генерации звуковых сигналов с постоянной частотой.',
    advantages: ['Простота использования', 'Низкая стоимость'],
    disadvantages: ['Ограниченная функция', 'Может быть раздражающим'],
    application: ['Сигнальные устройства', 'Пищалки'],
    availability: 5,
    qualityAndReliability: 3,
    manufacturingComplexity: 2,
    lifespan: 5,
    components: ['Осциллятор', 'Корпус'],
    frequencyRange: '2 kHz - 5 kHz',
    power: 'Low',
    sensitivity: 'N/A',
    impedance: 'N/A',
    harmonicCoefficient: 'High',
    dynamicRange: 'N/A',
    soundExpansion: 'N/A',
    soundPressureLevel: 'Moderate',
    soundAbsorption: 'N/A',
    angularCoverage: 'N/A',
    waveform: 'Square',
    resonanceFrequency: 'N/A',
    responseSpeed: 'Moderate',
    powerConsumption: 'Very Low',
    dimensionsShape: 'Small',
    resolution: 'N/A',
    noiseResistance: 'Moderate',
  },
  {
    name: 'Аудиоусилитель',
    description: 'Устройство для увеличения мощности аудиосигнала.',
    advantages: ['Улучшение качества звука', 'Высокая мощность'],
    disadvantages: ['Большие размеры', 'Высокая стоимость'],
    application: ['Аудиосистемы', 'Концертные системы'],
    availability: 4,
    qualityAndReliability: 5,
    manufacturingComplexity: 4,
    lifespan: 8,
    components: ['Транзисторы', 'Конденсаторы', 'Резисторы'],
    frequencyRange: '20 Hz - 20 kHz',
    power: '50W - 500W',
    sensitivity: 'High',
    impedance: '4 Ω',
    harmonicCoefficient: 'Low',
    dynamicRange: 'Wide',
    soundExpansion: 'N/A',
    soundPressureLevel: 'N/A',
    soundAbsorption: 'N/A',
    angularCoverage: 'N/A',
    waveform: 'Linear',
    resonanceFrequency: 'N/A',
    responseSpeed: 'High',
    powerConsumption: 'High',
    dimensionsShape: 'Medium to Large',
    resolution: 'N/A',
    noiseResistance: 'Good',
  },
  {
    name: 'Микрофон',
    description: 'Устройство для преобразования звуковых волн в электрические сигналы.',
    advantages: ['Высокое качество записи', 'Широкий выбор моделей'],
    disadvantages: ['Чувствителен к шуму', 'Может требовать дополнительного оборудования'],
    application: ['Запись звука', 'Съемка видео', 'Разговоры'],
    availability: 5,
    qualityAndReliability: 5,
    manufacturingComplexity: 4,
    lifespan: 7,
    components: ['Диафрагма', 'Катушка', 'Магнит'],
    frequencyRange: '20 Hz - 20 kHz',
    power: 'Low',
    sensitivity: 'High',
    impedance: 'Low',
    harmonicCoefficient: 'Low',
    dynamicRange: 'Wide',
    soundExpansion: 'N/A',
    soundPressureLevel: 'N/A',
    soundAbsorption: 'N/A',
    angularCoverage: 'Directional',
    waveform: 'N/A',
    resonanceFrequency: 'N/A',
    responseSpeed: 'High',
    powerConsumption: 'Very Low',
    dimensionsShape: 'Varied',
    resolution: 'N/A',
    noiseResistance: 'Good',
  },
  {
    name: 'Пьезокерамический излучатель',
    description: 'Устройство для генерации звуковых волн с помощью пьезокерамики.',
    advantages: ['Высокая эффективность', 'Долговечность'],
    disadvantages: ['Ограниченные частотные характеристики', 'Может быть дорогим'],
    application: ['Сигнальные устройства', 'Аудиоиндикаторы'],
    availability: 3,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['Пьезокерамика', 'Электрод'],
    frequencyRange: '2 kHz - 20 kHz',
    power: 'Low',
    sensitivity: 'Moderate',
    impedance: 'High',
    harmonicCoefficient: 'Low',
    dynamicRange: 'N/A',
    soundExpansion: 'N/A',
    soundPressureLevel: 'Moderate',
    soundAbsorption: 'N/A',
    angularCoverage: 'Narrow',
    waveform: 'Square',
    resonanceFrequency: 'N/A',
    responseSpeed: 'High',
    powerConsumption: 'Very Low',
    dimensionsShape: 'Small',
    resolution: 'N/A',
    noiseResistance: 'High',
  },
  {
    name: 'Пьезоэлектрический излучатель',
    description: 'Устройство для преобразования электрических сигналов в звуковые волны с помощью пьезоэлектрических эффектов.',
    advantages: ['Высокая точность', 'Компактные размеры'],
    disadvantages: ['Ограниченный диапазон частот', 'Может требовать усиления'],
    application: ['Сигнальные устройства', 'Системы оповещения'],
    availability: 4,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespan: 8,
    components: ['Пьезоэлементы', 'Корпус'],
    frequencyRange: '1 kHz - 10 kHz',
    power: 'Low',
    sensitivity: 'High',
    impedance: 'Variable',
    harmonicCoefficient: 'Low',
    dynamicRange: 'N/A',
    soundExpansion: 'N/A',
    soundPressureLevel: 'Moderate',
    soundAbsorption: 'N/A',
    angularCoverage: 'Narrow',
    waveform: 'Square',
    resonanceFrequency: 'N/A',
    responseSpeed: 'High',
    powerConsumption: 'Low',
    dimensionsShape: 'Compact',
    resolution: 'N/A',
    noiseResistance: 'Good',
  },
  {
    name: 'Сигнальные свистки',
    description: 'Устройства для создания громких сигналов с помощью свиста.',
    advantages: ['Простота использования', 'Очень громкие сигналы'],
    disadvantages: ['Ограниченная частотная характеристика', 'Может быть раздражающим'],
    application: ['Спортивные мероприятия', 'Сигнальные системы'],
    availability: 5,
    qualityAndReliability: 3,
    manufacturingComplexity: 1,
    lifespan: 5,
    components: ['Корпус', 'Свисток'],
    frequencyRange: '3 kHz - 5 kHz',
    power: 'N/A',
    sensitivity: 'N/A',
    impedance: 'N/A',
    harmonicCoefficient: 'High',
    dynamicRange: 'N/A',
    soundExpansion: 'N/A',
    soundPressureLevel: 'High',
    soundAbsorption: 'N/A',
    angularCoverage: 'N/A',
    waveform: 'Sawtooth',
    resonanceFrequency: 'N/A',
    responseSpeed: 'Immediate',
    powerConsumption: 'N/A',
    dimensionsShape: 'Small',
    resolution: 'N/A',
    noiseResistance: 'Moderate',
  },
  {
    name: 'Сирены',
    description: 'Устройства для создания громких и проникающих звуковых сигналов.',
    advantages: ['Очень высокая громкость', 'Широкое применение в системах безопасности'],
    disadvantages: ['Большие размеры', 'Высокое потребление энергии'],
    application: ['Системы оповещения', 'Аварийные системы'],
    availability: 4,
    qualityAndReliability: 4,
    manufacturingComplexity: 4,
    lifespan: 8,
    components: ['Излучатель', 'Усилитель'],
    frequencyRange: '500 Hz - 3 kHz',
    power: '500W - 2000W',
    sensitivity: 'High',
    impedance: '8 Ω',
    harmonicCoefficient: 'Moderate',
    dynamicRange: 'Wide',
    soundExpansion: 'Wide',
    soundPressureLevel: 'Very High',
    soundAbsorption: 'N/A',
    angularCoverage: '360°',
    waveform: 'Varied',
    resonanceFrequency: 'N/A',
    responseSpeed: 'High',
    powerConsumption: 'High',
    dimensionsShape: 'Large',
    resolution: 'N/A',
    noiseResistance: 'Good',
  },
  {
    name: 'Ультразвуковой излучатель',
    description: 'Устройство для генерации ультразвуковых волн, невидимых для человеческого глаза.',
    advantages: ['Высокая точность', 'Широкий диапазон частот'],
    disadvantages: ['Ограниченное применение', 'Может требовать дополнительных технологий'],
    application: ['Измерения расстояний', 'Ультразвуковая очистка'],
    availability: 3,
    qualityAndReliability: 4,
    manufacturingComplexity: 4,
    lifespan: 10,
    components: ['Пьезоэлементы', 'Корпус'],
    frequencyRange: '20 kHz - 1 MHz',
    power: 'Low',
    sensitivity: 'High',
    impedance: 'Variable',
    harmonicCoefficient: 'Low',
    dynamicRange: 'N/A',
    soundExpansion: 'N/A',
    soundPressureLevel: 'Moderate',
    soundAbsorption: 'N/A',
    angularCoverage: 'Narrow',
    waveform: 'Sine',
    resonanceFrequency: 'N/A',
    responseSpeed: 'High',
    powerConsumption: 'Low',
    dimensionsShape: 'Compact',
    resolution: 'N/A',
    noiseResistance: 'High',
  },
];

const AudioComponentList = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedData = [...audioComponentData].sort((a, b) => {
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
      <h1>Звуковые компоненты</h1>
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
            <th onClick={() => requestSort('frequencyRange')}>Частотный диапазон</th>
            <th onClick={() => requestSort('power')}>Мощность</th>
            <th onClick={() => requestSort('sensitivity')}>Чувствительность</th>
            <th onClick={() => requestSort('impedance')}>Импеданс</th>
            <th onClick={() => requestSort('harmonicCoefficient')}>Коэффициент гармоник</th>
            <th onClick={() => requestSort('dynamicRange')}>Динамический диапазон</th>
            <th onClick={() => requestSort('soundExpansion')}>Расширение звука</th>
            <th onClick={() => requestSort('soundPressureLevel')}>Уровень звукового давления</th>
            <th onClick={() => requestSort('soundAbsorption')}>Звукопоглощение</th>
            <th onClick={() => requestSort('angularCoverage')}>Угловое покрытие</th>
            <th onClick={() => requestSort('waveform')}>Форма звуковой волны</th>
            <th onClick={() => requestSort('resonanceFrequency')}>Резонансная частота</th>
            <th onClick={() => requestSort('responseSpeed')}>Скорость отклика</th>
            <th onClick={() => requestSort('powerConsumption')}>Потребляемая мощность</th>
            <th onClick={() => requestSort('dimensionsShape')}>Размеры и форма</th>
            <th onClick={() => requestSort('resolution')}>Разрешение</th>
            <th onClick={() => requestSort('noiseResistance')}>Сопротивление шуму</th>
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
              <td>{component.power}</td>
              <td>{component.sensitivity}</td>
              <td>{component.impedance}</td>
              <td>{component.harmonicCoefficient}</td>
              <td>{component.dynamicRange}</td>
              <td>{component.soundExpansion}</td>
              <td>{component.soundPressureLevel}</td>
              <td>{component.soundAbsorption}</td>
              <td>{component.angularCoverage}</td>
              <td>{component.waveform}</td>
              <td>{component.resonanceFrequency}</td>
              <td>{component.responseSpeed}</td>
              <td>{component.powerConsumption}</td>
              <td>{component.dimensionsShape}</td>
              <td>{component.resolution}</td>
              <td>{component.noiseResistance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AudioComponentList;
