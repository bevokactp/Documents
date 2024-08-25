import React, { useState } from 'react';

// Данные для методов регулирования
const controlData = [
  {
    name: 'ШИМ',
    description: 'Метод широтно-импульсной модуляции для управления мощностью.',
    advantages: ['Высокая точность управления', 'Энергоэффективность'],
    disadvantages: ['Шум', 'Пульсации тока'],
    application: ['Управление яркостью', 'Регулирование скорости мотора'],
    availability: 5,
    quality: 4,
    reliability: 5,
    manufacturingComplexity: 2,
    lifespan: 10,
    components: ['Транзисторы', 'Конденсаторы'],
    workingPrinciple: 'Широтно-импульсная модуляция',
    controlAccuracy: 'Высокая',
    energyEfficiency: 'Высокая',
    implementationComplexity: 'Средняя',
    regulationRange: '0-100%',
    responseTime: 'Мгновенное',
    stability: 'Высокая',
    positioningAccuracy: 'Высокая',
    feedbackSupport: 'Нет',
    componentCost: 'Средняя',
    thermalLosses: 'Низкие',
    externalImpactResistance: 'Средняя'
  },
  {
    name: 'Сервопривод',
    description: 'Устройство для точного управления положением, углом или скоростью.',
    advantages: ['Высокая точность', 'Широкий диапазон регулирования'],
    disadvantages: ['Высокая стоимость', 'Сложность установки'],
    application: ['Робототехника', 'Автоматизация'],
    availability: 4,
    quality: 5,
    reliability: 5,
    manufacturingComplexity: 4,
    lifespan: 10,
    components: ['Моторы', 'Датчики положения'],
    workingPrinciple: 'Обратная связь и управление',
    controlAccuracy: 'Высокая',
    energyEfficiency: 'Средняя',
    implementationComplexity: 'Высокая',
    regulationRange: '0-180°',
    responseTime: 'Мгновенное',
    stability: 'Высокая',
    positioningAccuracy: 'Высокая',
    feedbackSupport: 'Да',
    componentCost: 'Высокая',
    thermalLosses: 'Средние',
    externalImpactResistance: 'Средняя'
  },
  {
    name: 'Регулирование напряжения',
    description: 'Метод изменения напряжения для управления электрическими цепями.',
    advantages: ['Простота реализации', 'Широкий диапазон применения'],
    disadvantages: ['Потери мощности', 'Меньшая точность'],
    application: ['Блоки питания', 'Радиоэлектроника'],
    availability: 5,
    quality: 4,
    reliability: 4,
    manufacturingComplexity: 2,
    lifespan: 10,
    components: ['Резисторы', 'Трансформаторы'],
    workingPrinciple: 'Изменение уровня напряжения',
    controlAccuracy: 'Средняя',
    energyEfficiency: 'Средняя',
    implementationComplexity: 'Низкая',
    regulationRange: '0-100%',
    responseTime: 'Мгновенное',
    stability: 'Средняя',
    positioningAccuracy: 'Не применимо',
    feedbackSupport: 'Нет',
    componentCost: 'Низкая',
    thermalLosses: 'Средние',
    externalImpactResistance: 'Средняя'
  },
  {
    name: 'PID-регуляторы',
    description: 'Контроллеры, использующие пропорционально-интегрально-дифференциальный алгоритм для управления.',
    advantages: ['Высокая точность', 'Регулировка в реальном времени'],
    disadvantages: ['Сложность настройки', 'Может требовать калибровки'],
    application: ['Системы автоматического управления', 'Производственные процессы'],
    availability: 4,
    quality: 5,
    reliability: 5,
    manufacturingComplexity: 3,
    lifespan: 15,
    components: ['Микроконтроллеры', 'Датчики'],
    workingPrinciple: 'Пропорционально-интегрально-дифференциальное управление',
    controlAccuracy: 'Высокая',
    energyEfficiency: 'Средняя',
    implementationComplexity: 'Средняя',
    regulationRange: 'Широкий',
    responseTime: 'Мгновенное',
    stability: 'Высокая',
    positioningAccuracy: 'Высокая',
    feedbackSupport: 'Да',
    componentCost: 'Средняя',
    thermalLosses: 'Низкие',
    externalImpactResistance: 'Средняя'
  },
  {
    name: 'Цифровое управление FPGA',
    description: 'Управление с помощью программируемых логических устройств для выполнения сложных задач.',
    advantages: ['Высокая гибкость', 'Высокая производительность'],
    disadvantages: ['Высокая стоимость', 'Сложность программирования'],
    application: ['Обработка сигналов', 'Интернет вещей'],
    availability: 3,
    quality: 5,
    reliability: 5,
    manufacturingComplexity: 5,
    lifespan: 10,
    components: ['FPGA', 'Память'],
    workingPrinciple: 'Программируемая логика',
    controlAccuracy: 'Высокая',
    energyEfficiency: 'Средняя',
    implementationComplexity: 'Высокая',
    regulationRange: 'Не применимо',
    responseTime: 'Мгновенное',
    stability: 'Высокая',
    positioningAccuracy: 'Не применимо',
    feedbackSupport: 'Зависит от реализации',
    componentCost: 'Высокая',
    thermalLosses: 'Средние',
    externalImpactResistance: 'Средняя'
  },
  {
    name: 'Цифровое управление DSP',
    description: 'Управление с использованием цифровых сигнальных процессоров для обработки данных в реальном времени.',
    advantages: ['Высокая точность', 'Широкий диапазон применения'],
    disadvantages: ['Сложность реализации', 'Высокая стоимость'],
    application: ['Обработка аудио', 'Измерительные системы'],
    availability: 4,
    quality: 5,
    reliability: 4,
    manufacturingComplexity: 4,
    lifespan: 10,
    components: ['DSP процессоры', 'Память'],
    workingPrinciple: 'Цифровая обработка сигналов',
    controlAccuracy: 'Высокая',
    energyEfficiency: 'Средняя',
    implementationComplexity: 'Высокая',
    regulationRange: 'Не применимо',
    responseTime: 'Мгновенное',
    stability: 'Высокая',
    positioningAccuracy: 'Не применимо',
    feedbackSupport: 'Зависит от реализации',
    componentCost: 'Высокая',
    thermalLosses: 'Средние',
    externalImpactResistance: 'Средняя'
  },
  {
    name: 'Релейное управление',
    description: 'Метод управления, использующий реле для включения и отключения цепей.',
    advantages: ['Простота реализации', 'Низкая стоимость'],
    disadvantages: ['Медленная скорость переключения', 'Износ контактов'],
    application: ['Системы автоматизации', 'Управление освещением'],
    availability: 5,
    quality: 3,
    reliability: 4,
    manufacturingComplexity: 1,
    lifespan: 5,
    components: ['Реле', 'Контакты'],
    workingPrinciple: 'Электромеханическое переключение',
    controlAccuracy: 'Средняя',
    energyEfficiency: 'Средняя',
    implementationComplexity: 'Низкая',
    regulationRange: 'Не применимо',
    responseTime: 'Медленное',
    stability: 'Средняя',
    positioningAccuracy: 'Не применимо',
    feedbackSupport: 'Нет',
    componentCost: 'Низкая',
    thermalLosses: 'Средние',
    externalImpactResistance: 'Средняя'
  },
  {
    name: 'Ступенчатое управление',
    description: 'Метод управления с использованием ступенчатых уровней.',
    advantages: ['Простота реализации', 'Надежность'],
    disadvantages: ['Ограниченные возможности регулирования', 'Меньшая точность'],
    application: ['Контроль температуры', 'Управление мощностью'],
    availability: 4,
    quality: 3,
    reliability: 5,
    manufacturingComplexity: 2,
    lifespan: 8,
    components: ['Реле', 'Переключатели'],
    workingPrinciple: 'Смена уровней управления',
    controlAccuracy: 'Средняя',
    energyEfficiency: 'Средняя',
    implementationComplexity: 'Средняя',
    regulationRange: 'Ограниченный',
    responseTime: 'Мгновенное',
    stability: 'Высокая',
    positioningAccuracy: 'Не применимо',
    feedbackSupport: 'Нет',
    componentCost: 'Низкая',
    thermalLosses: 'Средние',
    externalImpactResistance: 'Средняя'
  },
  {
    name: 'Регуляторы частоты',
    description: 'Устройства для управления частотой работы электродвигателей.',
    advantages: ['Гибкость в управлении', 'Энергоэффективность'],
    disadvantages: ['Сложность настройки', 'Высокая стоимость'],
    application: ['Управление электродвигателями', 'Промышленные процессы'],
    availability: 4,
    quality: 5,
    reliability: 5,
    manufacturingComplexity: 4,
    lifespan: 10,
    components: ['ВЧ преобразователи', 'Микросхемы'],
    workingPrinciple: 'Изменение частоты',
    controlAccuracy: 'Высокая',
    energyEfficiency: 'Высокая',
    implementationComplexity: 'Высокая',
    regulationRange: 'Широкий',
    responseTime: 'Мгновенное',
    stability: 'Высокая',
    positioningAccuracy: 'Не применимо',
    feedbackSupport: 'Да',
    componentCost: 'Высокая',
    thermalLosses: 'Средние',
    externalImpactResistance: 'Средняя'
  },
  {
    name: 'Векторное управление',
    description: 'Метод управления, позволяющий точно контролировать вектор магнитного поля.',
    advantages: ['Высокая точность управления', 'Энергоэффективность'],
    disadvantages: ['Сложность настройки', 'Высокая стоимость'],
    application: ['Управление переменным током', 'Системы автоматизации'],
    availability: 3,
    quality: 5,
    reliability: 5,
    manufacturingComplexity: 5,
    lifespan: 15,
    components: ['Микроконтроллеры', 'Датчики'],
    workingPrinciple: 'Контроль вектора магнитного поля',
    controlAccuracy: 'Высокая',
    energyEfficiency: 'Высокая',
    implementationComplexity: 'Высокая',
    regulationRange: 'Широкий',
    responseTime: 'Мгновенное',
    stability: 'Высокая',
    positioningAccuracy: 'Высокая',
    feedbackSupport: 'Да',
    componentCost: 'Высокая',
    thermalLosses: 'Средние',
    externalImpactResistance: 'Средняя'
  },
  {
    name: 'Модульные контроллеры',
    description: 'Контроллеры, состоящие из модулей, которые можно комбинировать для выполнения различных задач.',
    advantages: ['Гибкость', 'Масштабируемость'],
    disadvantages: ['Сложность конфигурации', 'Высокая стоимость'],
    application: ['Промышленная автоматизация', 'Проектирование систем'],
    availability: 3,
    quality: 5,
    reliability: 4,
    manufacturingComplexity: 4,
    lifespan: 10,
    components: ['Модули', 'Процессоры'],
    workingPrinciple: 'Комбинированное управление',
    controlAccuracy: 'Средняя',
    energyEfficiency: 'Средняя',
    implementationComplexity: 'Высокая',
    regulationRange: 'Широкий',
    responseTime: 'Мгновенное',
    stability: 'Высокая',
    positioningAccuracy: 'Не применимо',
    feedbackSupport: 'Зависит от модуля',
    componentCost: 'Высокая',
    thermalLosses: 'Средние',
    externalImpactResistance: 'Средняя'
  },
  {
    name: 'Резистор переменный',
    description: 'Элемент для изменения сопротивления в электрической цепи.',
    advantages: ['Простота', 'Доступность'],
    disadvantages: ['Ограниченная точность', 'Механический износ'],
    application: ['Регулировка громкости', 'Настройка тока'],
    availability: 5,
    quality: 3,
    reliability: 3,
    manufacturingComplexity: 1,
    lifespan: 5,
    components: ['Резистор', 'Ручка регулировки'],
    workingPrinciple: 'Изменение сопротивления',
    controlAccuracy: 'Средняя',
    energyEfficiency: 'Средняя',
    implementationComplexity: 'Низкая',
    regulationRange: 'Ограниченный',
    responseTime: 'Мгновенное',
    stability: 'Средняя',
    positioningAccuracy: 'Средняя',
    feedbackSupport: 'Нет',
    componentCost: 'Низкая',
    thermalLosses: 'Средние',
    externalImpactResistance: 'Средняя'
  },
];

const ControlList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...controlData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  return (
    <div>
      <h1>Методы регулирования</h1>
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
            <th onClick={() => requestSort('lifespan')}>Срок службы (лет)</th>
            <th onClick={() => requestSort('components')}>Компоненты изготовления</th>
            <th onClick={() => requestSort('workingPrinciple')}>Принцип работы</th>
            <th onClick={() => requestSort('controlAccuracy')}>Точность управления</th>
            <th onClick={() => requestSort('energyEfficiency')}>Энергоэффективность</th>
            <th onClick={() => requestSort('implementationComplexity')}>Сложность реализации</th>
            <th onClick={() => requestSort('regulationRange')}>Диапазон регулирования</th>
            <th onClick={() => requestSort('responseTime')}>Время отклика</th>
            <th onClick={() => requestSort('stability')}>Стабильность</th>
            <th onClick={() => requestSort('positioningAccuracy')}>Точность позиционирования</th>
            <th onClick={() => requestSort('feedbackSupport')}>Поддержка обратной связи</th>
            <th onClick={() => requestSort('componentCost')}>Стоимость компонентов</th>
            <th onClick={() => requestSort('thermalLosses')}>Тепловые потери</th>
            <th onClick={() => requestSort('externalImpactResistance')}>Сопротивляемость к внешним воздействиям</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.advantages.join(', ')}</td>
              <td>{item.disadvantages.join(', ')}</td>
              <td>{item.application.join(', ')}</td>
              <td>{item.availability}</td>
              <td>{item.quality}</td>
              <td>{item.reliability}</td>
              <td>{item.manufacturingComplexity}</td>
              <td>{item.lifespan}</td>
              <td>{item.components.join(', ')}</td>
              <td>{item.workingPrinciple}</td>
              <td>{item.controlAccuracy}</td>
              <td>{item.energyEfficiency}</td>
              <td>{item.implementationComplexity}</td>
              <td>{item.regulationRange}</td>
              <td>{item.responseTime}</td>
              <td>{item.stability}</td>
              <td>{item.positioningAccuracy}</td>
              <td>{item.feedbackSupport}</td>
              <td>{item.componentCost}</td>
              <td>{item.thermalLosses}</td>
              <td>{item.externalImpactResistance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ControlList;
