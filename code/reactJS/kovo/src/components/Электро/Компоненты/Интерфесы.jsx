import React, { useState } from 'react';

// Данные интерфейсов передачи данных
const interfaceData = [
  {
    name: 'Universal Serial Bus (USB)',
    description: 'Широко используемый интерфейс для подключения периферийных устройств к компьютерам.',
    advantages: ['Универсальность', 'Поддержка горячей замены', 'Высокая скорость передачи данных'],
    disadvantages: ['Ограниченная длина кабеля', 'Сложности совместимости с некоторыми устройствами'],
    application: ['Компьютеры', 'Принтеры', 'Сканеры', 'Внешние накопители'],
    availability: 5,
    quality: 5,
    reliability: 5,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['Полупроводники', 'Конденсаторы'],
    wireless: false,
    dataTransmissionType: 'Синхронный',
    dataTransmissionLevel: 'Цифровой',
    dataRate: 'До 10 Гбит/с',
    maxCableLength: '5 м',
    connectionType: 'USB Type-A/B/C',
    powerConsumption: 'Low',
    noiseImmunity: 'Средняя',
    throughput: 'Высокая'
  },
  {
    name: 'I2C',
    description: 'Синхронный двухпроводный интерфейс для связи между микроконтроллерами и периферийными устройствами.',
    advantages: ['Простота подключения', 'Поддержка нескольких устройств на одной линии'],
    disadvantages: ['Ограниченная скорость передачи данных', 'Ограниченная длина кабеля'],
    application: ['Микроконтроллеры', 'Датчики', 'EEPROM'],
    availability: 5,
    quality: 4,
    reliability: 4,
    manufacturingComplexity: 2,
    lifespan: 10,
    components: ['Резисторы', 'Полупроводники'],
    wireless: false,
    dataTransmissionType: 'Синхронный',
    dataTransmissionLevel: 'Цифровой',
    dataRate: 'До 1 Мбит/с',
    maxCableLength: '1 м',
    connectionType: '2 провода (SDA, SCL)',
    powerConsumption: 'Low',
    noiseImmunity: 'Средняя',
    throughput: 'Средняя'
  },
  {
    name: 'SPI',
    description: 'Синхронный последовательный интерфейс для связи микроконтроллеров и периферийных устройств.',
    advantages: ['Высокая скорость передачи данных', 'Гибкость конфигурации'],
    disadvantages: ['Большое количество проводов', 'Отсутствие стандартного протокола'],
    application: ['Микроконтроллеры', 'Датчики', 'Память'],
    availability: 5,
    quality: 5,
    reliability: 4,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['Полупроводники', 'Конденсаторы'],
    wireless: false,
    dataTransmissionType: 'Синхронный',
    dataTransmissionLevel: 'Цифровой',
    dataRate: 'До 50 Мбит/с',
    maxCableLength: '1 м',
    connectionType: '4 провода (MOSI, MISO, SCK, SS)',
    powerConsumption: 'Low',
    noiseImmunity: 'Высокая',
    throughput: 'Высокая'
  },
  {
    name: 'UART',
    description: 'Асинхронный последовательный интерфейс для передачи данных между компьютерами и периферией.',
    advantages: ['Простота реализации', 'Минимальное количество проводов'],
    disadvantages: ['Низкая скорость передачи данных', 'Нет поддержки многопроцессорных систем'],
    application: ['Микроконтроллеры', 'Серийные порты компьютеров'],
    availability: 5,
    quality: 4,
    reliability: 4,
    manufacturingComplexity: 2,
    lifespan: 10,
    components: ['Полупроводники', 'Резисторы'],
    wireless: false,
    dataTransmissionType: 'Асинхронный',
    dataTransmissionLevel: 'Цифровой',
    dataRate: 'До 115.2 Кбит/с',
    maxCableLength: '15 м',
    connectionType: '2 провода (TX, RX)',
    powerConsumption: 'Low',
    noiseImmunity: 'Средняя',
    throughput: 'Средняя'
  },
  {
    name: 'Wi-Fi',
    description: 'Беспроводной интерфейс для подключения к сети и передачи данных по радиоканалу.',
    advantages: ['Беспроводное соединение', 'Высокая скорость передачи данных', 'Широкое распространение'],
    disadvantages: ['Зависимость от сигнала', 'Высокое энергопотребление'],
    application: ['Компьютеры', 'Смартфоны', 'Сетевые устройства'],
    availability: 5,
    quality: 5,
    reliability: 4,
    manufacturingComplexity: 4,
    lifespan: 5,
    components: ['Радиочастотные компоненты', 'Антенны'],
    wireless: true,
    dataTransmissionType: 'Радиочастотный',
    dataTransmissionLevel: 'Цифровой',
    dataRate: 'До 9.6 Гбит/с',
    maxCableLength: 'Не применяется',
    connectionType: 'Wi-Fi',
    powerConsumption: 'High',
    noiseImmunity: 'Средняя',
    throughput: 'Высокая'
  },
  {
    name: 'Bluetooth',
    description: 'Беспроводной интерфейс для обмена данными на коротких расстояниях.',
    advantages: ['Беспроводное соединение', 'Низкое энергопотребление', 'Поддержка различных профилей'],
    disadvantages: ['Ограниченная дальность действия', 'Низкая скорость передачи данных по сравнению с Wi-Fi'],
    application: ['Наушники', 'Мобильные устройства', 'Беспроводные аксессуары'],
    availability: 5,
    quality: 4,
    reliability: 4,
    manufacturingComplexity: 3,
    lifespan: 5,
    components: ['Радиочастотные компоненты'],
    wireless: true,
    dataTransmissionType: 'Радиочастотный',
    dataTransmissionLevel: 'Цифровой',
    dataRate: 'До 3 Мбит/с',
    maxCableLength: 'Не применяется',
    connectionType: 'Bluetooth',
    powerConsumption: 'Low',
    noiseImmunity: 'Средняя',
    throughput: 'Средняя'
  },
  // Добавьте остальные интерфейсы по аналогии
];

const InterfaceList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'availability', direction: 'ascending' });

  const sortedData = [...interfaceData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
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
      <h1>Виды интерфейсов передачи данных</h1>
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
            <th onClick={() => requestSort('manufacturingComplexity')}>Сложность изготовления</th>
            <th onClick={() => requestSort('lifespan')}>Срок службы</th>
            <th onClick={() => requestSort('components')}>Компоненты изготовления</th>
            <th onClick={() => requestSort('wireless')}>Есть беспроводный</th>
            <th onClick={() => requestSort('dataTransmissionType')}>По типу передачи данных</th>
            <th onClick={() => requestSort('dataTransmissionLevel')}>По уровню передачи данных</th>
            <th onClick={() => requestSort('dataRate')}>Скорость передачи данных</th>
            <th onClick={() => requestSort('maxCableLength')}>Максимальная длина кабеля</th>
            <th onClick={() => requestSort('connectionType')}>Тип подключения</th>
            <th onClick={() => requestSort('powerConsumption')}>Энергопотребление</th>
            <th onClick={() => requestSort('noiseImmunity')}>Помехозащищенность</th>
            <th onClick={() => requestSort('throughput')}>Пропускная способность</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.description}</td>
              <td>{data.advantages.join(', ')}</td>
              <td>{data.disadvantages.join(', ')}</td>
              <td>{data.application.join(', ')}</td>
              <td>{data.availability}</td>
              <td>{data.quality}</td>
              <td>{data.reliability}</td>
              <td>{data.manufacturingComplexity}</td>
              <td>{data.lifespan}</td>
              <td>{data.components.join(', ')}</td>
              <td>{data.wireless ? 'Да' : 'Нет'}</td>
              <td>{data.dataTransmissionType}</td>
              <td>{data.dataTransmissionLevel}</td>
              <td>{data.dataRate}</td>
              <td>{data.maxCableLength}</td>
              <td>{data.connectionType}</td>
              <td>{data.powerConsumption}</td>
              <td>{data.noiseImmunity}</td>
              <td>{data.throughput}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InterfaceList;
