import React, { useState } from 'react';


const diodeData = [
  {
    name: 'Варикап',
    description: 'Диод, изменяющий свою ёмкость в зависимости от приложенного обратного напряжения.',
    advantages: ['Изменяемая ёмкость', 'Применяется в генераторах и радиоприемниках'],
    disadvantages: ['Низкая проводимость при больших токах'],
    application: ['Настройка частоты в радиоприемниках', 'Изменение частоты в генераторах'],
    availability: 4,
    quality: 3,
    complexity: 2,
    lifetime: 5,
    components: ['Полупроводник', 'Металлический контакт'],
    forwardVoltage: 2.5,
    maxForwardVoltage: 5,
    maxForwardCurrent: 10,
    maxForwardPower: 25,
    reverseVoltage: 20,
    maxReverseVoltage: 25,
    maxReversePower: 10,
    reverseCurrent: 1,
    switchingSpeed: 1000,
    tempCoefficient: -0.2,
    recoveryTime: 1,
    capacitance: 5,
    diodeType: 'Varactor',
    tempRange: '-40 to 100',
    packageType: 'TO-92',
    reverseResistance: 1000,
    breakdownEnergy: 50,
    thermalParameter: 0.01,
    reverseCapacitance: 3
  },
  {
    name: 'Диод выпрямительный',
    description: 'Диод, используемый для преобразования переменного тока в постоянный.',
    advantages: ['Высокая надёжность', 'Низкое сопротивление в прямом направлении'],
    disadvantages: ['Потери на прямом падении напряжения'],
    application: ['Блоки питания', 'Выпрямительные схемы'],
    availability: 5,
    quality: 4,
    complexity: 2,
    lifetime: 10,
    components: ['Полупроводник', 'Металлический корпус'],
    forwardVoltage: 0.7,
    maxForwardVoltage: 1,
    maxForwardCurrent: 30,
    maxForwardPower: 20,
    reverseVoltage: 100,
    maxReverseVoltage: 200,
    maxReversePower: 10,
    reverseCurrent: 0.1,
    switchingSpeed: 100,
    tempCoefficient: -0.2,
    recoveryTime: 0.5,
    capacitance: 10,
    diodeType: 'Rectifier',
    tempRange: '-40 to 150',
    packageType: 'DO-41',
    reverseResistance: 100000,
    breakdownEnergy: 75,
    thermalParameter: 0.02,
    reverseCapacitance: 5
  },
  {
    name: 'Диод варикап',
    description: 'Диод, изменяющий свою ёмкость в зависимости от приложенного обратного напряжения.',
    advantages: ['Регулируемая ёмкость', 'Широко используется в радиотехнике'],
    disadvantages: ['Не подходит для больших токов'],
    application: ['Частотные фильтры', 'Настройка частоты в радиопередатчиках'],
    availability: 3,
    quality: 3,
    complexity: 2,
    lifetime: 7,
    components: ['Полупроводник', 'Изоляционный корпус'],
    forwardVoltage: 2.8,
    maxForwardVoltage: 6,
    maxForwardCurrent: 5,
    maxForwardPower: 10,
    reverseVoltage: 15,
    maxReverseVoltage: 30,
    maxReversePower: 5,
    reverseCurrent: 0.5,
    switchingSpeed: 1500,
    tempCoefficient: -0.1,
    recoveryTime: 0.8,
    capacitance: 10,
    diodeType: 'Varactor',
    tempRange: '-40 to 120',
    packageType: 'SOD-323',
    reverseResistance: 50000,
    breakdownEnergy: 60,
    thermalParameter: 0.015,
    reverseCapacitance: 6
  },
  {
    name: 'Диод Ганна',
    description: 'Диод, использующий эффект Ганна для создания микроволнового излучения.',
    advantages: ['Высокая частотная стабильность', 'Используется в генераторах микроволн'],
    disadvantages: ['Сложность управления', 'Небольшой срок службы'],
    application: ['Генераторы микроволн', 'Системы радиолокации'],
    availability: 2,
    quality: 4,
    complexity: 4,
    lifetime: 2,
    components: ['Полупроводник', 'Металлический корпус'],
    forwardVoltage: 3.2,
    maxForwardVoltage: 7,
    maxForwardCurrent: 20,
    maxForwardPower: 50,
    reverseVoltage: 10,
    maxReverseVoltage: 20,
    maxReversePower: 8,
    reverseCurrent: 0.2,
    switchingSpeed: 5000,
    tempCoefficient: -0.3,
    recoveryTime: 1.5,
    capacitance: 8,
    diodeType: 'Gunn',
    tempRange: '-20 to 80',
    packageType: 'Hollow',
    reverseResistance: 20000,
    breakdownEnergy: 40,
    thermalParameter: 0.03,
    reverseCapacitance: 4
  },
  {
    name: 'Диод лавинный',
    description: 'Диод, работающий в режиме лавинного пробоя для стабилизации напряжения.',
    advantages: ['Стабильность при высоких напряжениях', 'Простой в использовании'],
    disadvantages: ['Низкая скорость переключения', 'Может перегреваться'],
    application: ['Стабилизация напряжения', 'Защита схем от перенапряжений'],
    availability: 4,
    quality: 5,
    complexity: 2,
    lifetime: 10,
    components: ['Полупроводник', 'Керамический корпус'],
    forwardVoltage: 6.5,
    maxForwardVoltage: 12,
    maxForwardCurrent: 10,
    maxForwardPower: 30,
    reverseVoltage: 50,
    maxReverseVoltage: 100,
    maxReversePower: 15,
    reverseCurrent: 0.05,
    switchingSpeed: 100,
    tempCoefficient: -0.4,
    recoveryTime: 1,
    capacitance: 15,
    diodeType: 'Zener',
    tempRange: '-40 to 150',
    packageType: 'DO-41',
    reverseResistance: 200000,
    breakdownEnergy: 80,
    thermalParameter: 0.025,
    reverseCapacitance: 7
  },
  {
    name: 'Диод Шоттки',
    description: 'Диод с низким прямым напряжением и высокой скоростью переключения.',
    advantages: ['Низкое прямое напряжение', 'Высокая скорость переключения'],
    disadvantages: ['Высокий обратный ток', 'Низкий максимальный прямой ток'],
    application: ['Схемы выпрямления', 'Высокочастотные приложения'],
    availability: 5,
    quality: 4,
    complexity: 2,
    lifetime: 8,
    components: ['Полупроводник', 'Металлический корпус'],
    forwardVoltage: 0.2,
    maxForwardVoltage: 0.4,
    maxForwardCurrent: 15,
    maxForwardPower: 12,
    reverseVoltage: 30,
    maxReverseVoltage: 40,
    maxReversePower: 5,
    reverseCurrent: 0.05,
    switchingSpeed: 5000,
    tempCoefficient: -0.1,
    recoveryTime: 0.1,
    capacitance: 5,
    diodeType: 'Schottky',
    tempRange: '-50 to 150',
    packageType: 'SOD-123',
    reverseResistance: 30000,
    breakdownEnergy: 60,
    thermalParameter: 0.02,
    reverseCapacitance: 3
  },
  {
    name: 'Диодный мост',
    description: 'Устройство, состоящее из четырех диодов, используется для выпрямления переменного тока.',
    advantages: ['Компактность', 'Эффективное выпрямление переменного тока'],
    disadvantages: ['Потери на прямом падении напряжения', 'Требует теплоотведения'],
    application: ['Выпрямительные схемы', 'Источники питания'],
    availability: 5,
    quality: 4,
    complexity: 3,
    lifetime: 15,
    components: ['Четыре диода', 'Металлический корпус'],
    forwardVoltage: 1.2,
    maxForwardVoltage: 2,
    maxForwardCurrent: 25,
    maxForwardPower: 50,
    reverseVoltage: 200,
    maxReverseVoltage: 400,
    maxReversePower: 20,
    reverseCurrent: 0.1,
    switchingSpeed: 100,
    tempCoefficient: -0.2,
    recoveryTime: 1,
    capacitance: 0,
    diodeType: 'Bridge Rectifier',
    tempRange: '-40 to 150',
    packageType: 'Module',
    reverseResistance: 100000,
    breakdownEnergy: 100,
    thermalParameter: 0.03,
    reverseCapacitance: 0
  },
  {
    name: 'Диод импульсный',
    description: 'Диод, предназначенный для работы с короткими импульсами и высокими токами.',
    advantages: ['Высокая способность к переключению', 'Работа с высокими токами'],
    disadvantages: ['Высокая стоимость', 'Может перегреваться'],
    application: ['Импульсные источники питания', 'Схемы защиты от импульсных перенапряжений'],
    availability: 3,
    quality: 4,
    complexity: 3,
    lifetime: 5,
    components: ['Полупроводник', 'Металлический корпус'],
    forwardVoltage: 1.0,
    maxForwardVoltage: 2,
    maxForwardCurrent: 50,
    maxForwardPower: 40,
    reverseVoltage: 100,
    maxReverseVoltage: 200,
    maxReversePower: 15,
    reverseCurrent: 0.2,
    switchingSpeed: 2000,
    tempCoefficient: -0.3,
    recoveryTime: 2,
    capacitance: 10,
    diodeType: 'Pulse',
    tempRange: '-40 to 125',
    packageType: 'DO-201',
    reverseResistance: 50000,
    breakdownEnergy: 80,
    thermalParameter: 0.02,
    reverseCapacitance: 8
  },
  {
    name: 'Диод лазерный',
    description: 'Диод, излучающий свет при прохождении электрического тока через полупроводник.',
    advantages: ['Высокая яркость', 'Малый размер'],
    disadvantages: ['Высокая стоимость', 'Чувствительность к перегреву'],
    application: ['Лазерные принтеры', 'Оптические диски'],
    availability: 3,
    quality: 4,
    complexity: 5,
    lifetime: 4,
    components: ['Полупроводник', 'Оптический корпус'],
    forwardVoltage: 2.0,
    maxForwardVoltage: 3,
    maxForwardCurrent: 20,
    maxForwardPower: 50,
    reverseVoltage: 5,
    maxReverseVoltage: 10,
    maxReversePower: 2,
    reverseCurrent: 0.01,
    switchingSpeed: 2000,
    tempCoefficient: -0.2,
    recoveryTime: 0.5,
    capacitance: 2,
    diodeType: 'Laser',
    tempRange: '-20 to 60',
    packageType: 'TO-56',
    reverseResistance: 100000,
    breakdownEnergy: 30,
    thermalParameter: 0.03,
    reverseCapacitance: 1
  },
  {
    name: 'Магнитодиод',
    description: 'Диод, использующий магнитное поле для изменения своих характеристик.',
    advantages: ['Магнитная чувствительность', 'Используется в магнитных сенсорах'],
    disadvantages: ['Медленная реакция на изменение магнитного поля'],
    application: ['Магнитные датчики', 'Электронные компасы'],
    availability: 2,
    quality: 3,
    complexity: 4,
    lifetime: 5,
    components: ['Полупроводник', 'Магнитный элемент'],
    forwardVoltage: 1.5,
    maxForwardVoltage: 3,
    maxForwardCurrent: 10,
    maxForwardPower: 15,
    reverseVoltage: 30,
    maxReverseVoltage: 40,
    maxReversePower: 5,
    reverseCurrent: 0.1,
    switchingSpeed: 500,
    tempCoefficient: -0.2,
    recoveryTime: 1,
    capacitance: 8,
    diodeType: 'Magnetic',
    tempRange: '-40 to 120',
    packageType: 'TO-92',
    reverseResistance: 30000,
    breakdownEnergy: 40,
    thermalParameter: 0.025,
    reverseCapacitance: 6
  },
  {
    name: 'Светодиод',
    description: 'Диод, излучающий видимый свет при прохождении тока через полупроводник.',
    advantages: ['Высокая эффективность', 'Долгий срок службы'],
    disadvantages: ['Чувствительность к перегреву', 'Стоимость'],
    application: ['Освещение', 'Индикаторы', 'Дисплеи'],
    availability: 5,
    quality: 5,
    complexity: 2,
    lifetime: 20,
    components: ['Полупроводник', 'Пластиковый корпус'],
    forwardVoltage: 3.3,
    maxForwardVoltage: 5,
    maxForwardCurrent: 20,
    maxForwardPower: 70,
    reverseVoltage: 5,
    maxReverseVoltage: 10,
    maxReversePower: 2,
    reverseCurrent: 0.01,
    switchingSpeed: 1000,
    tempCoefficient: -0.1,
    recoveryTime: 0.1,
    capacitance: 1,
    diodeType: 'LED',
    tempRange: '-40 to 85',
    packageType: 'SMD',
    reverseResistance: 100000,
    breakdownEnergy: 10,
    thermalParameter: 0.02,
    reverseCapacitance: 0.5
  },
  {
    name: 'Диод зенер, стабилитрон',
    description: 'Диод, использующийся для стабилизации напряжения в цепях.',
    advantages: ['Стабилизация напряжения', 'Высокая точность'],
    disadvantages: ['Ограниченная мощность', 'Низкая скорость переключения'],
    application: ['Стабилизация напряжения', 'Шунтирование перенапряжений'],
    availability: 4,
    quality: 4,
    complexity: 2,
    lifetime: 10,
    components: ['Полупроводник', 'Керамический корпус'],
    forwardVoltage: 0.7,
    maxForwardVoltage: 1,
    maxForwardCurrent: 5,
    maxForwardPower: 5,
    reverseVoltage: 20,
    maxReverseVoltage: 30,
    maxReversePower: 2,
    reverseCurrent: 0.02,
    switchingSpeed: 50,
    tempCoefficient: -0.2,
    recoveryTime: 0.5,
    capacitance: 12,
    diodeType: 'Zener',
    tempRange: '-40 to 150',
    packageType: 'DO-35',
    reverseResistance: 100000,
    breakdownEnergy: 25,
    thermalParameter: 0.015,
    reverseCapacitance: 10
  },
  {
    name: 'Стабистор',
    description: 'Диод, обеспечивающий стабильное напряжение для защиты от перенапряжений.',
    advantages: ['Стабильность при высоких напряжениях', 'Простота использования'],
    disadvantages: ['Медленное восстановление', 'Может перегреваться'],
    application: ['Защита схем от перенапряжений', 'Стабилизация напряжения'],
    availability: 3,
    quality: 4,
    complexity: 3,
    lifetime: 7,
    components: ['Полупроводник', 'Металлический корпус'],
    forwardVoltage: 0.7,
    maxForwardVoltage: 1.5,
    maxForwardCurrent: 10,
    maxForwardPower: 15,
    reverseVoltage: 50,
    maxReverseVoltage: 100,
    maxReversePower: 10,
    reverseCurrent: 0.1,
    switchingSpeed: 300,
    tempCoefficient: -0.3,
    recoveryTime: 2,
    capacitance: 20,
    diodeType: 'Transient Voltage Suppression',
    tempRange: '-40 to 125',
    packageType: 'DO-41',
    reverseResistance: 50000,
    breakdownEnergy: 60,
    thermalParameter: 0.02,
    reverseCapacitance: 15
  },
  {
    name: 'Диод туннельный',
    description: 'Диод, использующий туннельный эффект для достижения высокой скорости переключения.',
    advantages: ['Высокая скорость переключения', 'Низкое прямое напряжение'],
    disadvantages: ['Малый максимальный ток', 'Чувствительность к перегреву'],
    application: ['Генераторы высоких частот', 'Элементы памяти'],
    availability: 2,
    quality: 3,
    complexity: 4,
    lifetime: 5,
    components: ['Полупроводник', 'Специальный корпус'],
    forwardVoltage: 0.1,
    maxForwardVoltage: 0.2,
    maxForwardCurrent: 5,
    maxForwardPower: 5,
    reverseVoltage: 10,
    maxReverseVoltage: 20,
    maxReversePower: 2,
    reverseCurrent: 0.02,
    switchingSpeed: 10000,
    tempCoefficient: -0.4,
    recoveryTime: 0.1,
    capacitance: 2,
    diodeType: 'Tunnel',
    tempRange: '-40 to 70',
    packageType: 'TO-66',
    reverseResistance: 10000,
    breakdownEnergy: 20,
    thermalParameter: 0.025,
    reverseCapacitance: 1
  },
  {
    name: 'Фотодиод',
    description: 'Диод, преобразующий световые сигналы в электрические.',
    advantages: ['Высокая чувствительность', 'Быстрая реакция на изменение света'],
    disadvantages: ['Низкое максимальное прямое напряжение', 'Чувствительность к свету'],
    application: ['Оптические датчики', 'Фотометрия'],
    availability: 4,
    quality: 5,
    complexity: 3,
    lifetime: 7,
    components: ['Полупроводник', 'Оптический корпус'],
    forwardVoltage: 0.7,
    maxForwardVoltage: 1,
    maxForwardCurrent: 10,
    maxForwardPower: 7,
    reverseVoltage: 20,
    maxReverseVoltage: 30,
    maxReversePower: 3,
    reverseCurrent: 0.02,
    switchingSpeed: 2000,
    tempCoefficient: -0.15,
    recoveryTime: 0.5,
    capacitance: 15,
    diodeType: 'Photodiode',
    tempRange: '-40 to 85',
    packageType: 'SMD',
    reverseResistance: 50000,
    breakdownEnergy: 25,
    thermalParameter: 0.03,
    reverseCapacitance: 12
  }
];


// Сортировка данных
const sortData = (data, key, ascending) => {
  return [...data].sort((a, b) => {
    if (a[key] < b[key]) return ascending ? -1 : 1;
    if (a[key] > b[key]) return ascending ? 1 : -1;
    return 0;
  });
};

// Компонент таблицы
const DiodeList = () => {
  const [data, setData] = useState(diodeData);
  const [sortConfig, setSortConfig] = useState({ key: '', ascending: true });

  const requestSort = (key) => {
    let ascending = true;
    if (sortConfig.key === key && sortConfig.ascending) {
      ascending = false;
    }
    setData(sortData(data, key, ascending));
    setSortConfig({ key, ascending });
  };

  return (
    <div>
      <h1>Типы диодов</h1>
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
            <th onClick={() => requestSort('complexity')}>Сложность изготовления</th>
            <th onClick={() => requestSort('lifetime')}>Срок службы</th>
            <th onClick={() => requestSort('components')}>Компоненты изготовления</th>
            <th onClick={() => requestSort('forwardVoltage')}>Прямое напряжение</th>
            <th onClick={() => requestSort('maxForwardVoltage')}>Макс. прямое напряжение</th>
            <th onClick={() => requestSort('maxForwardCurrent')}>Макс. прямой ток</th>
            <th onClick={() => requestSort('maxForwardPower')}>Макс. прямая мощность</th>
            <th onClick={() => requestSort('reverseVoltage')}>Обратное напряжение</th>
            <th onClick={() => requestSort('maxReverseVoltage')}>Макс. обратное напряжение</th>
            <th onClick={() => requestSort('maxReversePower')}>Макс. обратная мощность</th>
            <th onClick={() => requestSort('reverseCurrent')}>Обратный ток</th>
            <th onClick={() => requestSort('switchingSpeed')}>Скорость переключения</th>
            <th onClick={() => requestSort('tempCoefficient')}>Температурный коэффициент</th>
            <th onClick={() => requestSort('recoveryTime')}>Время восстановления</th>
            <th onClick={() => requestSort('capacitance')}>Емкость диода</th>
            <th onClick={() => requestSort('diodeType')}>Тип диода</th>
            <th onClick={() => requestSort('tempRange')}>Пределы температур</th>
            <th onClick={() => requestSort('packageType')}>Тип корпуса</th>
            <th onClick={() => requestSort('reverseResistance')}>Обратное сопротивление</th>
            <th onClick={() => requestSort('breakdownEnergy')}>Энергия пробоя</th>
            <th onClick={() => requestSort('thermalParameter')}>Параметр термостойкости</th>
            <th onClick={() => requestSort('reverseCapacitance')}>Обратная ёмкость</th>
          </tr>
        </thead>
        <tbody>
          {data.map((diode, index) => (
            <tr key={index}>
              <td>{diode.name}</td>
              <td>{diode.description}</td>
              <td>{diode.advantages.join(', ')}</td>
              <td>{diode.disadvantages.join(', ')}</td>
              <td>{diode.application.join(', ')}</td>
              <td>{diode.availability}</td>
              <td>{diode.quality}</td>
              <td>{diode.complexity}</td>
              <td>{diode.lifetime}</td>
              <td>{diode.components.join(', ')}</td>
              <td>{diode.forwardVoltage} V</td>
              <td>{diode.maxForwardVoltage} V</td>
              <td>{diode.maxForwardCurrent} A</td>
              <td>{diode.maxForwardPower} W</td>
              <td>{diode.reverseVoltage} V</td>
              <td>{diode.maxReverseVoltage} V</td>
              <td>{diode.maxReversePower} W</td>
              <td>{diode.reverseCurrent} A</td>
              <td>{diode.switchingSpeed} ns</td>
              <td>{diode.tempCoefficient}</td>
              <td>{diode.recoveryTime} ns</td>
              <td>{diode.capacitance} pF</td>
              <td>{diode.diodeType}</td>
              <td>{diode.tempRange}</td>
              <td>{diode.packageType}</td>
              <td>{diode.reverseResistance} Ω</td>
              <td>{diode.breakdownEnergy} mJ</td>
              <td>{diode.thermalParameter}</td>
              <td>{diode.reverseCapacitance} pF</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiodeList;
