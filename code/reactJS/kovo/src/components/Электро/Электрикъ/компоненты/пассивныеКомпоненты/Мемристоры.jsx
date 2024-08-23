import React, { useState } from 'react';

const memristorData = [
  {
    name: 'Оксидные',
    description: ' использующие оксиды металлов в качестве активного материала.',
    advantages: 'Высокая плотность памяти, долговечность.',
    disadvantages: 'Медленная скорость переключения, высокая стоимость.',
    application: 'Хранение данных, вычислительные задачи.',
    availability: 'Ограниченная доступность',
    quality: 'Высокое',
    reliability: 'Высокая',
    difficulty: 4,
    lifetime: 10,
    resistanceMechanism: 'с переключением фазы',
    controlMethod: 'Активные',
    onResistance: '100 Ω',
    offResistance: '10 MΩ',
    thresholdVoltage: '1.2 V',
    switchingTime: '100 ns',
    switchingEnergy: '0.1 nJ',
    recoverySpeed: 'Быстрая',
    operatingTemperatureRange: '-40°C to 85°C',
    memoryMechanism: 'Фазовое изменение',
    energyEfficiency: '90%',
    resistanceStability: 'Стабильная',
    writeReadSpeed: 'Высокая',
    temperatureCoefficientOfResistance: '0.01%/°C',
    maxOperatingVoltage: '5 V',
    maxOperatingCurrent: '1 mA',
    programmingResistance: '50 Ω',
    reverseResistance: '5 MΩ',
    retentionCoefficient: '95%',
    leakageCoefficient: '0.1%',
    memoryDensity: 'Высокая',
  },
  {
    name: 'Полимерные',
    description: ' использующие полимерные материалы для изменения сопротивления.',
    advantages: 'Гибкость, низкая стоимость, легкость в производстве.',
    disadvantages: 'Меньшая стабильность, ограниченный температурный диапазон.',
    application: 'Электроника, датчики, гибкие устройства.',
    availability: 'Широкая доступность',
    quality: 'Среднее',
    reliability: 'Средняя',
    difficulty: 2,
    lifetime: 5,
    resistanceMechanism: 'с переменным сопротивлением',
    controlMethod: 'Пассивные',
    onResistance: '1 kΩ',
    offResistance: '1 MΩ',
    thresholdVoltage: '0.8 V',
    switchingTime: '200 ns',
    switchingEnergy: '0.05 nJ',
    recoverySpeed: 'Средняя',
    operatingTemperatureRange: '-20°C to 60°C',
    memoryMechanism: 'Полимерное изменение',
    energyEfficiency: '85%',
    resistanceStability: 'Средняя',
    writeReadSpeed: 'Средняя',
    temperatureCoefficientOfResistance: '0.05%/°C',
    maxOperatingVoltage: '3 V',
    maxOperatingCurrent: '500 µA',
    programmingResistance: '200 Ω',
    reverseResistance: '10 MΩ',
    retentionCoefficient: '90%',
    leakageCoefficient: '0.2%',
    memoryDensity: 'Средняя',
  },
  {
    name: 'Композитные',
    description: ' состоящие из композитных материалов для улучшения характеристик.',
    advantages: 'Высокая производительность, устойчивость к внешним воздействиям.',
    disadvantages: 'Сложность в производстве, высокая стоимость.',
    application: 'Высокоскоростные память, специализированные вычисления.',
    availability: 'Ограниченная доступность',
    quality: 'Высокое',
    reliability: 'Очень высокая',
    difficulty: 5,
    lifetime: 15,
    resistanceMechanism: 'с переключением фазы и переменным сопротивлением',
    controlMethod: 'Активные',
    onResistance: '50 Ω',
    offResistance: '100 MΩ',
    thresholdVoltage: '1.5 V',
    switchingTime: '50 ns',
    switchingEnergy: '0.2 nJ',
    recoverySpeed: 'Очень быстрая',
    operatingTemperatureRange: '-50°C to 90°C',
    memoryMechanism: 'Композитное изменение',
    energyEfficiency: '95%',
    resistanceStability: 'Очень стабильная',
    writeReadSpeed: 'Очень высокая',
    temperatureCoefficientOfResistance: '0.02%/°C',
    maxOperatingVoltage: '10 V',
    maxOperatingCurrent: '2 mA',
    programmingResistance: '25 Ω',
    reverseResistance: '10 MΩ',
    retentionCoefficient: '98%',
    leakageCoefficient: '0.05%',
    memoryDensity: 'Очень высокая',
  },
];

const MemristorList = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...memristorData];
    if (sortConfig !== null) {
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
  }, [memristorData, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы мемристоров</h1>
      <table>
        <thead>
          <tr>
            {[
              'Название', 'Описание', 'Преимущества', 'Недостатки', 'Применение', 'Доступность',
              'Качество', 'Надежность', 'Сложность изготовления', 'Срок службы лет',
              'По механизму изменения сопротивления', 'По способу управления',
              'Сопротивление в состоянии ON', 'Сопротивление в состоянии OFF',
              'Пороговое напряжение', 'Время переключения', 'Энергия переключения',
              'Скорость восстановления', 'Температурный диапазон', 'Механизм запоминания',
              'Энергетическая эффективность', 'Стабильность сопротивления',
              'Скорость записи/чтения', 'Температурный коэффициент сопротивления',
              'Максимальное рабочее напряжение', 'Максимальный рабочий ток',
              'Сопротивление в состоянии программирования', 'Обратное сопротивление',
              'Коэффициент запоминания', 'Коэффициент утечки', 'Плотность памяти'
            ].map((header) => (
              <th key={header} onClick={() => requestSort(header)}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((memristor, index) => (
            <tr key={index}>
              <td>{memristor.name}</td>
              <td>{memristor.description}</td>
              <td>{memristor.advantages}</td>
              <td>{memristor.disadvantages}</td>
              <td>{memristor.application}</td>
              <td>{memristor.availability}</td>
              <td>{memristor.quality}</td>
              <td>{memristor.reliability}</td>
              <td>{memristor.difficulty}</td>
              <td>{memristor.lifetime}</td>
              <td>{memristor.resistanceMechanism}</td>
              <td>{memristor.controlMethod}</td>
              <td>{memristor.onResistance}</td>
              <td>{memristor.offResistance}</td>
              <td>{memristor.thresholdVoltage}</td>
              <td>{memristor.switchingTime}</td>
              <td>{memristor.switchingEnergy}</td>
              <td>{memristor.recoverySpeed}</td>
              <td>{memristor.operatingTemperatureRange}</td>
              <td>{memristor.memoryMechanism}</td>
              <td>{memristor.energyEfficiency}</td>
              <td>{memristor.resistanceStability}</td>
              <td>{memristor.writeReadSpeed}</td>
              <td>{memristor.temperatureCoefficientOfResistance}</td>
              <td>{memristor.maxOperatingVoltage}</td>
              <td>{memristor.maxOperatingCurrent}</td>
              <td>{memristor.programmingResistance}</td>
              <td>{memristor.reverseResistance}</td>
              <td>{memristor.retentionCoefficient}</td>
              <td>{memristor.leakageCoefficient}</td>
              <td>{memristor.memoryDensity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemristorList;
