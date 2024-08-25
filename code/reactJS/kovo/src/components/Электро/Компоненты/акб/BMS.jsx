import React, { useState } from 'react';




const bmsData = [
	{
	  name: 'Активные BMS',
	  description: 'Системы управления батареями с активным управлением зарядом и разрядом.',
	  advantages: ['Высокая точность управления', 'Эффективное управление зарядом и разрядом'],
	  disadvantages: ['Сложность конструкции', 'Высокая стоимость'],
	  application: ['Электромобили', 'Солнечные батареи'],
	  availability: 4,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 4,
	  lifespan: 10,
	  components: ['Контроллер', 'Датчики', 'Коммутатор'],
	  cellCount: 16,
	  maxVoltage: '48V',
	  maxCurrent: '100A',
	  balancingMethods: ['Активное балансирование', 'Пассивное балансирование'],
	  protectionLevel: 'Высокий',
	  measurementAccuracy: '±1%',
	  operatingEnvironment: 'От -20°C до +60°C',
	  communicationInterfaces: ['CAN', 'UART'],
	  responseTime: '10ms',
	  energyEfficiency: 'Высокая',
	  calibrationAndSetup: 'Автоматическая',
	  diagnosticAndMonitoringFunctions: ['Диагностика ошибок', 'Мониторинг состояния батареи'],
	},
	{
	  name: 'Пассивные BMS',
	  description: 'Системы управления батареями с пассивным балансированием.',
	  advantages: ['Низкая стоимость', 'Простота конструкции'],
	  disadvantages: ['Меньшая точность', 'Меньшая эффективность'],
	  application: ['Мелкие электроника', 'Батареи для запасных источников питания'],
	  availability: 5,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 2,
	  lifespan: 5,
	  components: ['Балансировочные резисторы', 'Контроллер'],
	  cellCount: 8,
	  maxVoltage: '24V',
	  maxCurrent: '50A',
	  balancingMethods: ['Пассивное балансирование'],
	  protectionLevel: 'Средний',
	  measurementAccuracy: '±5%',
	  operatingEnvironment: 'От 0°C до +40°C',
	  communicationInterfaces: ['I2C'],
	  responseTime: '50ms',
	  energyEfficiency: 'Средняя',
	  calibrationAndSetup: 'Ручная',
	  diagnosticAndMonitoringFunctions: ['Мониторинг состояния батареи'],
	},
	{
	  name: 'Гибридные BMS',
	  description: 'Системы управления батареями, сочетающие элементы активного и пассивного балансирования.',
	  advantages: ['Комбинированное управление', 'Универсальность'],
	  disadvantages: ['Сложность интеграции', 'Высокая стоимость'],
	  application: ['Электромобили', 'Системы накопления энергии'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 5,
	  lifespan: 8,
	  components: ['Контроллер', 'Балансировочные резисторы', 'Датчики'],
	  cellCount: 12,
	  maxVoltage: '36V',
	  maxCurrent: '75A',
	  balancingMethods: ['Активное балансирование', 'Пассивное балансирование'],
	  protectionLevel: 'Высокий',
	  measurementAccuracy: '±2%',
	  operatingEnvironment: 'От -10°C до +50°C',
	  communicationInterfaces: ['CAN', 'UART', 'I2C'],
	  responseTime: '20ms',
	  energyEfficiency: 'Высокая',
	  calibrationAndSetup: 'Автоматическая',
	  diagnosticAndMonitoringFunctions: ['Диагностика ошибок', 'Мониторинг состояния батареи', 'Анализ производительности'],
	},
	{
	  name: 'Модульные BMS',
	  description: 'Системы управления батареями, организованные в модульной архитектуре.',
	  advantages: ['Модульность', 'Гибкость в конфигурации'],
	  disadvantages: ['Сложность сборки', 'Возможные проблемы с совместимостью модулей'],
	  application: ['Электромобили', 'Энергетические системы'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 7,
	  components: ['Модули управления', 'Датчики', 'Коммутаторы'],
	  cellCount: 20,
	  maxVoltage: '60V',
	  maxCurrent: '120A',
	  balancingMethods: ['Активное балансирование'],
	  protectionLevel: 'Высокий',
	  measurementAccuracy: '±1%',
	  operatingEnvironment: 'От -20°C до +60°C',
	  communicationInterfaces: ['CAN', 'UART', 'RS485'],
	  responseTime: '15ms',
	  energyEfficiency: 'Высокая',
	  calibrationAndSetup: 'Автоматическая',
	  diagnosticAndMonitoringFunctions: ['Диагностика ошибок', 'Мониторинг состояния батареи', 'Анализ производительности'],
	},
	{
	  name: 'Централизованные BMS',
	  description: 'Системы управления батареями с централизованным контроллером.',
	  advantages: ['Простота управления', 'Легкость в интеграции'],
	  disadvantages: ['Ограниченная гибкость', 'Меньшая масштабируемость'],
	  application: ['Бытовая электроника', 'Системы резервного питания'],
	  availability: 5,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 2,
	  lifespan: 6,
	  components: ['Центральный контроллер', 'Датчики'],
	  cellCount: 10,
	  maxVoltage: '30V',
	  maxCurrent: '60A',
	  balancingMethods: ['Пассивное балансирование'],
	  protectionLevel: 'Средний',
	  measurementAccuracy: '±3%',
	  operatingEnvironment: 'От 0°C до +45°C',
	  communicationInterfaces: ['I2C'],
	  responseTime: '30ms',
	  energyEfficiency: 'Средняя',
	  calibrationAndSetup: 'Ручная',
	  diagnosticAndMonitoringFunctions: ['Мониторинг состояния батареи'],
	},
	{
	  name: 'Децентрализованные BMS',
	  description: 'Системы управления батареями с распределенным контролем.',
	  advantages: ['Высокая гибкость', 'Масштабируемость'],
	  disadvantages: ['Сложность в управлении', 'Высокая стоимость'],
	  application: ['Энергетические системы', 'Электромобили'],
	  availability: 3,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 5,
	  lifespan: 9,
	  components: ['Распределенные модули управления', 'Датчики'],
	  cellCount: 24,
	  maxVoltage: '72V',
	  maxCurrent: '150A',
	  balancingMethods: ['Активное балансирование', 'Пассивное балансирование'],
	  protectionLevel: 'Высокий',
	  measurementAccuracy: '±1%',
	  operatingEnvironment: 'От -20°C до +60°C',
	  communicationInterfaces: ['CAN', 'RS485', 'Ethernet'],
	  responseTime: '25ms',
	  energyEfficiency: 'Высокая',
	  calibrationAndSetup: 'Автоматическая',
	  diagnosticAndMonitoringFunctions: ['Диагностика ошибок', 'Мониторинг состояния батареи', 'Анализ производительности'],
	},
	{
	  name: 'Цифровые BMS',
	  description: 'Системы управления батареями, использующие цифровые технологии для управления и мониторинга.',
	  advantages: ['Высокая точность', 'Современные технологии'],
	  disadvantages: ['Высокая стоимость', 'Зависимость от программного обеспечения'],
	  application: ['Современная электроника', 'Электромобили'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 7,
	  components: ['Цифровой контроллер', 'Датчики', 'Коммутатор'],
	  cellCount: 12,
	  maxVoltage: '36V',
	  maxCurrent: '80A',
	  balancingMethods: ['Активное балансирование'],
	  protectionLevel: 'Высокий',
	  measurementAccuracy: '±2%',
	  operatingEnvironment: 'От -10°C до +50°C',
	  communicationInterfaces: ['CAN', 'UART'],
	  responseTime: '20ms',
	  energyEfficiency: 'Высокая',
	  calibrationAndSetup: 'Автоматическая',
	  diagnosticAndMonitoringFunctions: ['Диагностика ошибок', 'Мониторинг состояния батареи', 'Анализ производительности'],
	},
	{
	  name: 'Аналоговые BMS',
	  description: 'Системы управления батареями, использующие аналоговые схемы для управления и мониторинга.',
	  advantages: ['Простота конструкции', 'Низкая стоимость'],
	  disadvantages: ['Меньшая точность', 'Ограниченные функции'],
	  application: ['Простая электроника', 'Не требовательные системы'],
	  availability: 5,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 2,
	  lifespan: 5,
	  components: ['Аналоговый контроллер', 'Балансировочные резисторы'],
	  cellCount: 8,
	  maxVoltage: '24V',
	  maxCurrent: '40A',
	  balancingMethods: ['Пассивное балансирование'],
	  protectionLevel: 'Средний',
	  measurementAccuracy: '±5%',
	  operatingEnvironment: 'От 0°C до +40°C',
	  communicationInterfaces: ['None'],
	  responseTime: '50ms',
	  energyEfficiency: 'Средняя',
	  calibrationAndSetup: 'Ручная',
	  diagnosticAndMonitoringFunctions: ['Мониторинг состояния батареи'],
	},
	{
	  name: 'Системы управления зарядом и разрядом',
	  description: 'Системы управления, ориентированные на оптимизацию процессов зарядки и разрядки батарей.',
	  advantages: ['Оптимизация процесса зарядки', 'Увеличение срока службы батарей'],
	  disadvantages: ['Сложность настройки', 'Зависимость от качества зарядного устройства'],
	  application: ['Энергетические системы', 'Системы накопления энергии'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 8,
	  components: ['Контроллер зарядки', 'Датчики'],
	  cellCount: 20,
	  maxVoltage: '60V',
	  maxCurrent: '100A',
	  balancingMethods: ['Активное балансирование', 'Пассивное балансирование'],
	  protectionLevel: 'Высокий',
	  measurementAccuracy: '±2%',
	  operatingEnvironment: 'От -10°C до +50°C',
	  communicationInterfaces: ['CAN', 'UART'],
	  responseTime: '15ms',
	  energyEfficiency: 'Высокая',
	  calibrationAndSetup: 'Автоматическая',
	  diagnosticAndMonitoringFunctions: ['Диагностика ошибок', 'Мониторинг состояния батареи', 'Анализ зарядки'],
	},
	{
	  name: 'Системы балансировки батарей',
	  description: 'Системы, предназначенные для балансировки напряжения между ячейками батареи.',
	  advantages: ['Равномерное распределение заряда', 'Увеличение срока службы батареи'],
	  disadvantages: ['Необходимость регулярного обслуживания', 'Стоимость'],
	  application: ['Электромобили', 'Энергетические системы'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 7,
	  components: ['Балансировочные модули', 'Датчики'],
	  cellCount: 12,
	  maxVoltage: '36V',
	  maxCurrent: '80A',
	  balancingMethods: ['Активное балансирование'],
	  protectionLevel: 'Средний',
	  measurementAccuracy: '±2%',
	  operatingEnvironment: 'От -10°C до +50°C',
	  communicationInterfaces: ['CAN', 'UART'],
	  responseTime: '20ms',
	  energyEfficiency: 'Средняя',
	  calibrationAndSetup: 'Автоматическая',
	  diagnosticAndMonitoringFunctions: ['Мониторинг состояния батареи'],
	},
  ];


  // Компонент для отображения таблицы с сортировкой
const BMSList = () => {
  const [data, setData] = useState(bmsData);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig.key) {
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
  }, [data, sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы BMS</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Название</th>
            <th onClick={() => requestSort('description')}>Описание</th>
            <th onClick={() => requestSort('advantages')}>Преимущества</th>
            <th onClick={() => requestSort('disadvantages')}>Недостатки</th>
            <th onClick={() => requestSort('application')}>Применение</th>
            <th onClick={() => requestSort('availability')}>Доступность</th>
            <th onClick={() => requestSort('qualityAndReliability')}>Качество и Надежность</th>
            <th onClick={() => requestSort('manufacturingComplexity')}>Сложность изготовления</th>
            <th onClick={() => requestSort('lifespan')}>Срок службы</th>
            <th onClick={() => requestSort('cellCount')}>Количество ячеек</th>
            <th onClick={() => requestSort('maxVoltage')}>Максимальное напряжение</th>
            <th onClick={() => requestSort('maxCurrent')}>Максимальный ток</th>
            <th onClick={() => requestSort('balancingMethods')}>Методы балансировки</th>
            <th onClick={() => requestSort('protectionLevel')}>Уровень защиты</th>
            <th onClick={() => requestSort('measurementAccuracy')}>Точность измерений</th>
            <th onClick={() => requestSort('operatingEnvironment')}>Среда эксплуатации</th>
            <th onClick={() => requestSort('communicationInterfaces')}>Интерфейсы связи</th>
            <th onClick={() => requestSort('responseTime')}>Время отклика</th>
            <th onClick={() => requestSort('energyEfficiency')}>Энергоэффективность</th>
            <th onClick={() => requestSort('calibrationAndSetup')}>Калибровка и настройка</th>
            <th onClick={() => requestSort('diagnosticAndMonitoringFunctions')}>Функции диагностики и мониторинга</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((bms, index) => (
            <tr key={index}>
              <td>{bms.name}</td>
              <td>{bms.description}</td>
              <td>{bms.advantages.join(', ')}</td>
              <td>{bms.disadvantages.join(', ')}</td>
              <td>{bms.application.join(', ')}</td>
              <td>{bms.availability}</td>
              <td>{bms.qualityAndReliability}</td>
              <td>{bms.manufacturingComplexity}</td>
              <td>{bms.lifespan}</td>
              <td>{bms.cellCount}</td>
              <td>{bms.maxVoltage}</td>
              <td>{bms.maxCurrent}</td>
              <td>{bms.balancingMethods.join(', ')}</td>
              <td>{bms.protectionLevel}</td>
              <td>{bms.measurementAccuracy}</td>
              <td>{bms.operatingEnvironment}</td>
              <td>{bms.communicationInterfaces.join(', ')}</td>
              <td>{bms.responseTime}</td>
              <td>{bms.energyEfficiency}</td>
              <td>{bms.calibrationAndSetup}</td>
              <td>{bms.diagnosticAndMonitoringFunctions.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BMSList;
