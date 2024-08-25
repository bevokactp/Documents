import React, { useState, useMemo } from 'react';

const timerData = [
  {
    name: 'Механические реле с таймером',
    description: 'Таймеры на основе механических реле, часто используемые в старых системах.',
    advantages: ['Надежность', 'Простота конструкции'],
    disadvantages: ['Механическая износостойкость', 'Медленная скорость переключения'],
    application: ['Контроль времени в старых устройствах', 'Простые системы управления'],
    availability: 4,
    quality: 3,
    reliability: 4,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['Механические реле', 'Резисторы', 'Конденсаторы'],
    timeRange: 'До 60 минут',
    operatingPrinciple: 'Механический',
    timeSettingMethod: 'Механический',
    operationType: 'Непрерывный',
    controlType: 'Механический',
    functionalPurpose: 'Основной',
    resolution: 'Мгновенная',
    responseSpeed: 'Средняя',
    timeDisplayMethod: 'Механическое указание',
    controlType: 'Механический',
    functions: ['Управление временем'],
    powerConsumption: 'Низкое',
  },
  {
    name: 'Резисторно-конденсаторные таймеры',
    description: 'Таймеры, использующие резисторы и конденсаторы для задания времени.',
    advantages: ['Простота конструкции', 'Низкая стоимость'],
    disadvantages: ['Меньшая точность', 'Зависимость от температуры'],
    application: ['Электронные часы', 'Простейшие временные задержки'],
    availability: 5,
    quality: 4,
    reliability: 4,
    manufacturingComplexity: 2,
    lifespan: 8,
    components: ['Резисторы', 'Конденсаторы'],
    timeRange: 'До 10 минут',
    operatingPrinciple: 'RC-цепь',
    timeSettingMethod: 'Ручной',
    operationType: 'Непрерывный',
    controlType: 'Ручной',
    functionalPurpose: 'Основной',
    resolution: 'Средняя',
    responseSpeed: 'Средняя',
    timeDisplayMethod: 'Аналоговое',
    controlType: 'Ручной',
    functions: ['Задание времени'],
    powerConsumption: 'Низкое',
  },
  {
    name: 'Микроконтроллерные таймеры',
    description: 'Таймеры, основанные на программируемых микроконтроллерах.',
    advantages: ['Высокая точность', 'Гибкость программирования'],
    disadvantages: ['Сложность программирования', 'Зависимость от питания'],
    application: ['Современные электронные устройства', 'Программируемые системы'],
    availability: 5,
    quality: 5,
    reliability: 5,
    manufacturingComplexity: 4,
    lifespan: 10,
    components: ['Микроконтроллер', 'Кристалл'],
    timeRange: 'От миллисекунд до часов',
    operatingPrinciple: 'Цифровой',
    timeSettingMethod: 'Программный',
    operationType: 'Программируемый',
    controlType: 'Программируемый',
    functionalPurpose: 'Высокий',
    resolution: 'Высокая',
    responseSpeed: 'Высокая',
    timeDisplayMethod: 'Цифровое',
    controlType: 'Программируемый',
    functions: ['Программирование времени', 'Деление времени'],
    powerConsumption: 'Среднее',
  },
  {
    name: 'Программируемые таймеры',
    description: 'Таймеры с возможностью программирования различных временных интервалов.',
    advantages: ['Гибкость настройки', 'Многозадачность'],
    disadvantages: ['Сложность использования', 'Высокая стоимость'],
    application: ['Управление промышленными процессами', 'Автоматизация процессов'],
    availability: 4,
    quality: 4,
    reliability: 4,
    manufacturingComplexity: 4,
    lifespan: 8,
    components: ['Программируемый контроллер', 'Дисплей'],
    timeRange: 'От секунд до недель',
    operatingPrinciple: 'Цифровой',
    timeSettingMethod: 'Программный',
    operationType: 'Программируемый',
    controlType: 'Программируемый',
    functionalPurpose: 'Промышленный',
    resolution: 'Высокая',
    responseSpeed: 'Средняя',
    timeDisplayMethod: 'Цифровое',
    controlType: 'Программируемый',
    functions: ['Многозадачность', 'Программирование различных режимов'],
    powerConsumption: 'Среднее',
  },
  {
    name: 'Часы реального времени',
    description: 'Часы, которые поддерживают текущее время в реальном времени.',
    advantages: ['Точная поддержка времени', 'Малое энергопотребление'],
    disadvantages: ['Ограниченные возможности программирования'],
    application: ['Часы в компьютерах', 'Время в электронных устройствах'],
    availability: 5,
    quality: 5,
    reliability: 5,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['RTC-чип', 'Батарея'],
    timeRange: 'Без ограничения',
    operatingPrinciple: 'Цифровой',
    timeSettingMethod: 'Автоматический',
    operationType: 'Непрерывный',
    controlType: 'Автоматический',
    functionalPurpose: 'Основной',
    resolution: 'Высокая',
    responseSpeed: 'Высокая',
    timeDisplayMethod: 'Цифровое',
    controlType: 'Автоматический',
    functions: ['Отслеживание времени', 'Поддержка текущего времени'],
    powerConsumption: 'Низкое',
  },
  {
    name: 'Таймеры обратного отсчета',
    description: 'Таймеры, которые отсчитывают время до достижения нуля.',
    advantages: ['Подходит для временных отсчётов', 'Гибкость установки времени'],
    disadvantages: ['Ограниченные возможности по времени'],
    application: ['Кухонные таймеры', 'Системы обратного отсчета'],
    availability: 5,
    quality: 4,
    reliability: 4,
    manufacturingComplexity: 2,
    lifespan: 8,
    components: ['Контроллер', 'Дисплей'],
    timeRange: 'До 24 часов',
    operatingPrinciple: 'Цифровой',
    timeSettingMethod: 'Программный',
    operationType: 'Циклический',
    controlType: 'Программируемый',
    functionalPurpose: 'Основной',
    resolution: 'Средняя',
    responseSpeed: 'Высокая',
    timeDisplayMethod: 'Цифровое',
    functions: ['Обратный отсчет', 'Аларм'],
    powerConsumption: 'Низкое',
  },
  {
    name: 'Периодические таймеры',
    description: 'Таймеры, которые выполняют действия через определенные промежутки времени.',
    advantages: ['Регулярность выполнения задач', 'Удобство для задач с постоянными интервалами'],
    disadvantages: ['Ограниченная гибкость настройки'],
    application: ['Автоматизация производственных процессов', 'Периодическое управление'],
    availability: 4,
    quality: 4,
    reliability: 4,
    manufacturingComplexity: 3,
    lifespan: 8,
    components: ['Контроллер', 'Реле'],
    timeRange: 'От секунд до часов',
    operatingPrinciple: 'Цифровой',
    timeSettingMethod: 'Программный',
    operationType: 'Циклический',
    controlType: 'Программируемый',
    functionalPurpose: 'Основной',
    resolution: 'Средняя',
    responseSpeed: 'Средняя',
    timeDisplayMethod: 'Цифровое',
    functions: ['Периодическое управление', 'Управление по интервалу времени'],
    powerConsumption: 'Среднее',
  },
  {
    name: 'Секундомеры',
    description: 'Таймеры для точного измерения промежутков времени.',
    advantages: ['Высокая точность', 'Удобство использования'],
    disadvantages: ['Ограниченное время измерения'],
    application: ['Спортивные соревнования', 'Научные исследования'],
    availability: 5,
    quality: 5,
    reliability: 5,
    manufacturingComplexity: 2,
    lifespan: 7,
    components: ['Контроллер', 'Дисплей'],
    timeRange: 'До 99 минут',
    operatingPrinciple: 'Цифровой',
    timeSettingMethod: 'Программный',
    operationType: 'Непрерывный',
    controlType: 'Программируемый',
    functionalPurpose: 'Основной',
    resolution: 'Высокая',
    responseSpeed: 'Высокая',
    timeDisplayMethod: 'Цифровое',
    functions: ['Измерение времени', 'Хронометрирование'],
    powerConsumption: 'Низкое',
  },
];

const TimerList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const sortedData = useMemo(() => {
    let sortableItems = [...timerData];
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
  }, [timerData, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы таймеров</h1>
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
            <th onClick={() => requestSort('timeRange')}>Диапазон времени</th>
            <th onClick={() => requestSort('operatingPrinciple')}>Принцип работы</th>
            <th onClick={() => requestSort('timeSettingMethod')}>Способ задания времени</th>
            <th onClick={() => requestSort('operationType')}>Тип работы</th>
            <th onClick={() => requestSort('controlType')}>Тип управления</th>
            <th onClick={() => requestSort('functionalPurpose')}>Функциональное назначение</th>
            <th onClick={() => requestSort('resolution')}>Разрешение</th>
            <th onClick={() => requestSort('responseSpeed')}>Скорость отклика</th>
            <th onClick={() => requestSort('timeDisplayMethod')}>Способ отображения времени</th>
            <th onClick={() => requestSort('functions')}>Функции</th>
            <th onClick={() => requestSort('powerConsumption')}>Энергопотребление</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((timer, index) => (
            <tr key={index}>
              <td>{timer.name}</td>
              <td>{timer.description}</td>
              <td>{timer.advantages.join(', ')}</td>
              <td>{timer.disadvantages.join(', ')}</td>
              <td>{timer.application.join(', ')}</td>
              <td>{timer.availability}</td>
              <td>{timer.quality}</td>
              <td>{timer.reliability}</td>
              <td>{timer.manufacturingComplexity}</td>
              <td>{timer.lifespan}</td>
              <td>{timer.components.join(', ')}</td>
              <td>{timer.timeRange}</td>
              <td>{timer.operatingPrinciple}</td>
              <td>{timer.timeSettingMethod}</td>
              <td>{timer.operationType}</td>
              <td>{timer.controlType}</td>
              <td>{timer.functionalPurpose}</td>
              <td>{timer.resolution}</td>
              <td>{timer.responseSpeed}</td>
              <td>{timer.timeDisplayMethod}</td>
              <td>{timer.functions.join(', ')}</td>
              <td>{timer.powerConsumption}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimerList;
