import React from 'react';

const batteryData = [
  {
    name: 'Воздушно-цинковые (Zinc-Air)',
    description: 'Батарейки, использующие кислород из воздуха в качестве катализатора.',
    advantages: 'Высокая плотность энергии, долгий срок хранения, недорогие.',
    disadvantages: 'Ограниченная ёмкость при высокой разрядной мощности, чувствительность к влажности.',
    purpose: 'Слуховые аппараты, медицинские устройства.',
    quality: 'Среднее',
    reliability: 'Средняя',
    application: 'Слуховые аппараты, устройства медицинского назначения.',
    availability: 'Широко доступные',
  },
  {
    name: 'Литиевые (Lithium)',
    description: 'Батарейки с литиевым катодом, обеспечивающие высокую плотность энергии.',
    advantages: 'Высокая плотность энергии, длительный срок службы, низкий уровень саморазрядки.',
    disadvantages: 'Высокая стоимость, чувствительность к перегреву.',
    purpose: 'Электроника, часы, камеры.',
    quality: 'Высокое',
    reliability: 'Высокая',
    application: 'Смартфоны, камеры, часы, медицинские устройства.',
    availability: 'Широко доступные',
  },
  {
    name: 'Литий-ионные (Li-ion)',
    description: 'Батарейки с литиевым электролитом, известные своей высокой плотностью энергии и долговечностью.',
    advantages: 'Высокая плотность энергии, долговечность, низкий уровень саморазрядки.',
    disadvantages: 'Высокая стоимость, необходимость в защите от перегрева и перезаряда.',
    purpose: 'Электроника, электромобили, системы хранения энергии.',
    quality: 'Высокое',
    reliability: 'Высокая',
    application: 'Смартфоны, ноутбуки, электромобили, системы хранения энергии.',
    availability: 'Широко доступные',
  },
  {
    name: 'Оксид-серебряно-цинковые (Silver-Zinc)',
    description: 'Батарейки с использованием оксида серебра и цинка, обеспечивающие высокую плотность энергии.',
    advantages: 'Высокая плотность энергии, стабильная работа при разных температурах.',
    disadvantages: 'Высокая стоимость, ограниченная емкость.',
    purpose: 'Часы, медицинские устройства, высокоточные приборы.',
    quality: 'Высокое',
    reliability: 'Высокая',
    application: 'Часы, медицинские приборы, устройства высокой точности.',
    availability: 'Ограниченная доступность',
  },
  {
    name: 'Солевые (Salt)',
    description: 'Батарейки с использованием солевого электролита, часто применяемые в портативных устройствах.',
    advantages: 'Низкая стоимость, экологичность, широкий температурный диапазон.',
    disadvantages: 'Меньшая плотность энергии по сравнению с другими типами, короткий срок службы.',
    purpose: 'Портативные устройства, игрушки, приборы для использования в обычных условиях.',
    quality: 'Низкое',
    reliability: 'Средняя',
    application: 'Игрушки, портативные устройства, бытовая электроника.',
    availability: 'Широко доступные',
  },
  {
    name: 'Щелочные (Alkaline)',
    description: 'Батарейки с щелочным электролитом, обеспечивающие стабильную работу и долгий срок службы.',
    advantages: 'Высокая плотность энергии, долговечность, низкий уровень саморазрядки.',
    disadvantages: 'Дороговизна по сравнению с обычными батарейками, высокая стоимость.',
    purpose: 'Электроника, игрушки, дистанционные управления.',
    quality: 'Среднее',
    reliability: 'Средняя',
    application: 'Пульты дистанционного управления, игрушки, электроника.',
    availability: 'Широко доступные',
  },
];

const BatteryList = () => {
  return (
    <div>
      <h1>Типы батареек</h1>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Описание</th>
            <th>Преимущества</th>
            <th>Недостатки</th>
            <th>Назначение</th>
            <th>Качество</th>
            <th>Надежность</th>
            <th>Применение</th>
            <th>Доступность</th>
          </tr>
        </thead>
        <tbody>
          {batteryData.map((battery, index) => (
            <tr key={index}>
              <td>{battery.name}</td>
              <td>{battery.description}</td>
              <td>{battery.advantages}</td>
              <td>{battery.disadvantages}</td>
              <td>{battery.purpose}</td>
              <td>{battery.quality}</td>
              <td>{battery.reliability}</td>
              <td>{battery.application}</td>
              <td>{battery.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BatteryList;
