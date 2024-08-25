import React, { useState } from 'react';

const pwmData = [
  {
    name: 'Компараторные на основе операционного усилителя',
    description: 'ШИМ-сигналы генерируются с помощью операционного усилителя в качестве компаратора.',
    advantages: ['Высокая точность', 'Широкий диапазон частот'],
    disadvantages: ['Сложность в настройке', 'Ограниченная скорость'],
    application: ['Мощностные преобразователи', 'Регулировка скорости моторов'],
    availability: 4,
    qualityAndReliability: 4,
    manufacturingComplexity: 4,
    lifespan: 10,
    components: ['Операционный усилитель', 'Сопротивления', 'Конденсаторы'],
    analogDigital: 'Аналог',
    polarity: 'Обе',
    fixedVariableCurrent: 'Переменный',
    fixedVariableVoltage: 'Переменное',
    modulationFixedFrequency: 'С регулируемой частотой',
    modulationVariableFrequency: 'С шириной импульса',
    unipolarSignals: 'Положительный импульс',
    differentialSignals: 'Симметричные сигналы',
    pulseWidthAdjustment: 'Регулируемый коэффициент заполнения',
    frequencyAdjustment: 'Регулируемая частота',
    frequencyRange: '0 - 100 kHz',
    pulseWidthRange: '0.1% - 99.9%',
    modulationAccuracy: 'Высокая',
    maxVoltage: '15V',
    maxCurrent: '10A',
    efficiency: 'Высокая',
    temperatureRange: '-40°C до +85°C',
    resolution: '12 бит',
    responseSpeed: 'Быстрая',
  },
  {
    name: 'Компараторные на основе сравнителя',
    description: 'ШИМ-сигналы генерируются с помощью сравнителя в качестве основного элемента.',
    advantages: ['Простота в реализации', 'Высокая скорость'],
    disadvantages: ['Ограниченная точность', 'Ограниченный диапазон частот'],
    application: ['Простые регуляторы мощности', 'Преобразователи напряжения'],
    availability: 4,
    qualityAndReliability: 3,
    manufacturingComplexity: 3,
    lifespan: 8,
    components: ['Сравнитель', 'Сопротивления', 'Конденсаторы'],
    analogDigital: 'Аналог',
    polarity: 'Обе',
    fixedVariableCurrent: 'Переменный',
    fixedVariableVoltage: 'Переменное',
    modulationFixedFrequency: 'С фиксированной частотой',
    modulationVariableFrequency: 'С амплитудой импульса',
    unipolarSignals: 'Положительный импульс',
    differentialSignals: 'Параллельные сигналы',
    pulseWidthAdjustment: 'Постоянный коэффициент заполнения',
    frequencyAdjustment: 'Фиксированная частота',
    frequencyRange: '0 - 10 kHz',
    pulseWidthRange: '1% - 99%',
    modulationAccuracy: 'Средняя',
    maxVoltage: '10V',
    maxCurrent: '5A',
    efficiency: 'Средняя',
    temperatureRange: '-20°C до +70°C',
    resolution: '8 бит',
    responseSpeed: 'Средняя',
  },
  {
    name: 'Осцилляторные резонаторные',
    description: 'ШИМ-сигналы генерируются с помощью резонаторов и осцилляторов.',
    advantages: ['Высокая стабильность частоты', 'Низкий уровень шумов'],
    disadvantages: ['Ограниченная настройка', 'Высокая стоимость резонаторов'],
    application: ['Точные частотные генераторы', 'Радиочастотные устройства'],
    availability: 3,
    qualityAndReliability: 5,
    manufacturingComplexity: 5,
    lifespan: 15,
    components: ['Резонатор', 'Осциллятор', 'Конденсаторы'],
    analogDigital: 'Аналог',
    polarity: 'Обе',
    fixedVariableCurrent: 'Фиксированный',
    fixedVariableVoltage: 'Фиксированное',
    modulationFixedFrequency: 'С фиксированной частотой',
    modulationVariableFrequency: 'Не применимо',
    unipolarSignals: 'Положительный импульс',
    differentialSignals: 'Не применимо',
    pulseWidthAdjustment: 'Постоянный коэффициент заполнения',
    frequencyAdjustment: 'Фиксированная частота',
    frequencyRange: '1 kHz - 1 MHz',
    pulseWidthRange: 'Не применимо',
    modulationAccuracy: 'Высокая',
    maxVoltage: '12V',
    maxCurrent: '1A',
    efficiency: 'Высокая',
    temperatureRange: '-30°C до +75°C',
    resolution: '10 бит',
    responseSpeed: 'Средняя',
  },
  {
    name: 'RC-осцилляторные',
    description: 'ШИМ-сигналы генерируются с помощью RC-осцилляторов.',
    advantages: ['Простота конструкции', 'Недорогие'],
    disadvantages: ['Меньшая точность', 'Чувствительность к температуре'],
    application: ['Простые генераторы сигналов', 'Мелкие электронные устройства'],
    availability: 4,
    qualityAndReliability: 3,
    manufacturingComplexity: 2,
    lifespan: 8,
    components: ['Резисторы', 'Конденсаторы', 'Транзисторы'],
    analogDigital: 'Аналог',
    polarity: 'Обе',
    fixedVariableCurrent: 'Переменный',
    fixedVariableVoltage: 'Переменное',
    modulationFixedFrequency: 'С фиксированной частотой',
    modulationVariableFrequency: 'Не применимо',
    unipolarSignals: 'Положительный импульс',
    differentialSignals: 'Не применимо',
    pulseWidthAdjustment: 'Постоянный коэффициент заполнения',
    frequencyAdjustment: 'Фиксированная частота',
    frequencyRange: '10 Hz - 10 kHz',
    pulseWidthRange: 'Не применимо',
    modulationAccuracy: 'Средняя',
    maxVoltage: '5V',
    maxCurrent: '500mA',
    efficiency: 'Средняя',
    temperatureRange: '-20°C до +60°C',
    resolution: '8 бит',
    responseSpeed: 'Низкая',
  },
  {
    name: 'Мостовой генератор',
    description: 'ШИМ-сигналы генерируются с использованием мостовых схем.',
    advantages: ['Высокая точность', 'Высокая выходная мощность'],
    disadvantages: ['Сложность конструкции', 'Высокая стоимость'],
    application: ['Мощностные преобразователи', 'Силовая электроника'],
    availability: 3,
    qualityAndReliability: 5,
    manufacturingComplexity: 5,
    lifespan: 15,
    components: ['Транзисторы', 'Резисторы', 'Конденсаторы'],
    analogDigital: 'Цифровой',
    polarity: 'Обе',
    fixedVariableCurrent: 'Переменный',
    fixedVariableVoltage: 'Переменное',
    modulationFixedFrequency: 'С фиксированной частотой',
    modulationVariableFrequency: 'С шириной импульса',
    unipolarSignals: 'Отрицательный импульс',
    differentialSignals: 'Симметричные сигналы',
    pulseWidthAdjustment: 'Регулируемый коэффициент заполнения',
    frequencyAdjustment: 'Регулируемая частота',
    frequencyRange: '10 kHz - 1 MHz',
    pulseWidthRange: '1% - 99%',
    modulationAccuracy: 'Высокая',
    maxVoltage: '20V',
    maxCurrent: '15A',
    efficiency: 'Высокая',
    temperatureRange: '-40°C до +85°C',
    resolution: '10 бит',
    responseSpeed: 'Быстрая',
  },
  {
    name: 'Мостовой усилитель',
    description: 'ШИМ-сигналы генерируются с помощью мостовых усилителей.',
    advantages: ['Высокая выходная мощность', 'Низкий уровень искажений'],
    disadvantages: ['Высокая стоимость', 'Сложность в настройке'],
    application: ['Аудиоусилители', 'Мощностные преобразователи'],
    availability: 3,
    qualityAndReliability: 4,
    manufacturingComplexity: 4,
    lifespan: 12,
    components: ['Усилители', 'Резисторы', 'Конденсаторы'],
    analogDigital: 'Аналог',
    polarity: 'Обе',
    fixedVariableCurrent: 'Переменный',
    fixedVariableVoltage: 'Переменное',
    modulationFixedFrequency: 'С фиксированной частотой',
    modulationVariableFrequency: 'Не применимо',
    unipolarSignals: 'Положительный импульс',
    differentialSignals: 'Симметричные сигналы',
    pulseWidthAdjustment: 'Регулируемый коэффициент заполнения',
    frequencyAdjustment: 'Фиксированная частота',
    frequencyRange: '10 kHz - 100 kHz',
    pulseWidthRange: '1% - 100%',
    modulationAccuracy: 'Средняя',
    maxVoltage: '30V',
    maxCurrent: '20A',
    efficiency: 'Средняя',
    temperatureRange: '-20°C до +70°C',
    resolution: '8 бит',
    responseSpeed: 'Средняя',
  },
  {
    name: 'Таймер',
    description: 'ШИМ-сигналы генерируются с использованием таймеров.',
    advantages: ['Простота использования', 'Низкая стоимость'],
    disadvantages: ['Ограниченный диапазон частот', 'Ограниченная точность'],
    application: ['Микроконтроллеры', 'Простые регуляторы'],
    availability: 5,
    qualityAndReliability: 3,
    manufacturingComplexity: 2,
    lifespan: 5,
    components: ['Микросхема таймера', 'Резисторы', 'Конденсаторы'],
    analogDigital: 'Цифровой',
    polarity: 'Обе',
    fixedVariableCurrent: 'Фиксированный',
    fixedVariableVoltage: 'Фиксированное',
    modulationFixedFrequency: 'С фиксированной частотой',
    modulationVariableFrequency: 'Не применимо',
    unipolarSignals: 'Положительный импульс',
    differentialSignals: 'Не применимо',
    pulseWidthAdjustment: 'Постоянный коэффициент заполнения',
    frequencyAdjustment: 'Фиксированная частота',
    frequencyRange: '1 Hz - 1 kHz',
    pulseWidthRange: 'Не применимо',
    modulationAccuracy: 'Средняя',
    maxVoltage: '5V',
    maxCurrent: '200mA',
    efficiency: 'Средняя',
    temperatureRange: '-20°C до +60°C',
    resolution: '8 бит',
    responseSpeed: 'Низкая',
  },
  {
    name: 'Секвенсор',
    description: 'ШИМ-сигналы генерируются с использованием секвенсоров для создания последовательностей импульсов.',
    advantages: ['Гибкость настройки', 'Простота реализации'],
    disadvantages: ['Ограниченный диапазон частот', 'Ограниченная точность'],
    application: ['Модульные синтезаторы', 'Программируемые генераторы сигналов'],
    availability: 4,
    qualityAndReliability: 4,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['Микросхема секвенсора', 'Резисторы', 'Конденсаторы'],
    analogDigital: 'Цифровой',
    polarity: 'Обе',
    fixedVariableCurrent: 'Переменный',
    fixedVariableVoltage: 'Переменное',
    modulationFixedFrequency: 'С фиксированной частотой',
    modulationVariableFrequency: 'С шириной импульса',
    unipolarSignals: 'Положительный импульс',
    differentialSignals: 'Параллельные сигналы',
    pulseWidthAdjustment: 'Регулируемый коэффициент заполнения',
    frequencyAdjustment: 'Регулируемая частота',
    frequencyRange: '1 kHz - 10 kHz',
    pulseWidthRange: '1% - 99%',
    modulationAccuracy: 'Средняя',
    maxVoltage: '12V',
    maxCurrent: '1A',
    efficiency: 'Средняя',
    temperatureRange: '-20°C до +70°C',
    resolution: '8 бит',
    responseSpeed: 'Средняя',
  },
  {
    name: 'ПЛИС',
    description: 'Программируемая логическая интегральная схема для генерации ШИМ-сигналов.',
    advantages: ['Высокая гибкость', 'Многофункциональность'],
    disadvantages: ['Высокая стоимость', 'Сложность в программировании'],
    application: ['Комплексные цифровые системы', 'Специальные генераторы сигналов'],
    availability: 3,
    qualityAndReliability: 5,
    manufacturingComplexity: 5,
    lifespan: 20,
    components: ['ПЛИС-чип', 'Резисторы', 'Конденсаторы'],
    analogDigital: 'Цифровой',
    polarity: 'Обе',
    fixedVariableCurrent: 'Переменный',
    fixedVariableVoltage: 'Переменное',
    modulationFixedFrequency: 'С фиксированной частотой',
    modulationVariableFrequency: 'С шириной импульса',
    unipolarSignals: 'Положительный импульс',
    differentialSignals: 'Симметричные сигналы',
    pulseWidthAdjustment: 'Регулируемый коэффициент заполнения',
    frequencyAdjustment: 'Регулируемая частота',
    frequencyRange: '1 Hz - 100 MHz',
    pulseWidthRange: '0.1% - 99.9%',
    modulationAccuracy: 'Высокая',
    maxVoltage: '5V',
    maxCurrent: '500mA',
    efficiency: 'Высокая',
    temperatureRange: '-40°C до +85°C',
    resolution: '16 бит',
    responseSpeed: 'Быстрая',
  },
  {
    name: 'Программируемая логическая матрица FPGA',
    description: 'Программируемая матрица для создания и управления ШИМ-сигналами.',
    advantages: ['Высокая производительность', 'Гибкость программирования'],
    disadvantages: ['Высокая стоимость', 'Сложность разработки'],
    application: ['Проектирование цифровых систем', 'Промышленные контроллеры'],
    availability: 2,
    qualityAndReliability: 5,
    manufacturingComplexity: 5,
    lifespan: 20,
    components: ['FPGA-чип', 'Резисторы', 'Конденсаторы'],
    analogDigital: 'Цифровой',
    polarity: 'Обе',
    fixedVariableCurrent: 'Переменный',
    fixedVariableVoltage: 'Переменное',
    modulationFixedFrequency: 'С фиксированной частотой',
    modulationVariableFrequency: 'С шириной импульса',
    unipolarSignals: 'Положительный импульс',
    differentialSignals: 'Симметричные сигналы',
    pulseWidthAdjustment: 'Регулируемый коэффициент заполнения',
    frequencyAdjustment: 'Регулируемая частота',
    frequencyRange: '1 Hz - 200 MHz',
    pulseWidthRange: '0.1% - 100%',
    modulationAccuracy: 'Высокая',
    maxVoltage: '5V',
    maxCurrent: '500mA',
    efficiency: 'Высокая',
    temperatureRange: '-40°C до +85°C',
    resolution: '16 бит',
    responseSpeed: 'Очень быстрая',
  }
];

const PWMList = () => {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = React.useMemo(() => {
    let sortableItems = [...pwmData];
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
  }, [pwmData, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы источников ШИМ</h1>
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
            <th onClick={() => requestSort('lifespan')}>Срок службы</th>
            <th onClick={() => requestSort('components')}>Компоненты</th>
            <th onClick={() => requestSort('analogDigital')}>Аналог/Цифра</th>
            <th onClick={() => requestSort('polarity')}>Полярность</th>
            <th onClick={() => requestSort('fixedVariableCurrent')}>Ток</th>
            <th onClick={() => requestSort('fixedVariableVoltage')}>Напряжение</th>
            <th onClick={() => requestSort('modulationFixedFrequency')}>Модуляция (фикс. частота)</th>
            <th onClick={() => requestSort('modulationVariableFrequency')}>Модуляция (перем. частота)</th>
            <th onClick={() => requestSort('unipolarSignals')}>Однополюсные сигналы</th>
            <th onClick={() => requestSort('differentialSignals')}>Дифференциальные сигналы</th>
            <th onClick={() => requestSort('pulseWidthAdjustment')}>Регулировка по ширине импульса</th>
            <th onClick={() => requestSort('frequencyAdjustment')}>Регулировка по частоте</th>
            <th onClick={() => requestSort('frequencyRange')}>Диапазон частот</th>
            <th onClick={() => requestSort('pulseWidthRange')}>Диапазон ширины импульса</th>
            <th onClick={() => requestSort('modulationAccuracy')}>Точность модуляции</th>
            <th onClick={() => requestSort('maxVoltage')}>Максимальное напряжение</th>
            <th onClick={() => requestSort('maxCurrent')}>Максимальный ток</th>
            <th onClick={() => requestSort('efficiency')}>Эффективность</th>
            <th onClick={() => requestSort('temperatureRange')}>Температурный диапазон</th>
            <th onClick={() => requestSort('resolution')}>Разрешение</th>
            <th onClick={() => requestSort('responseSpeed')}>Скорость отклика</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((pwm, index) => (
            <tr key={index}>
              <td>{pwm.name}</td>
              <td>{pwm.description}</td>
              <td>{pwm.advantages.join(', ')}</td>
              <td>{pwm.disadvantages.join(', ')}</td>
              <td>{pwm.application.join(', ')}</td>
              <td>{pwm.availability}</td>
              <td>{pwm.qualityAndReliability}</td>
              <td>{pwm.manufacturingComplexity}</td>
              <td>{pwm.lifespan}</td>
              <td>{pwm.components.join(', ')}</td>
              <td>{pwm.analogDigital}</td>
              <td>{pwm.polarity}</td>
              <td>{pwm.fixedVariableCurrent}</td>
              <td>{pwm.fixedVariableVoltage}</td>
              <td>{pwm.modulationFixedFrequency}</td>
              <td>{pwm.modulationVariableFrequency}</td>
              <td>{pwm.unipolarSignals}</td>
              <td>{pwm.differentialSignals}</td>
              <td>{pwm.pulseWidthAdjustment}</td>
              <td>{pwm.frequencyAdjustment}</td>
              <td>{pwm.frequencyRange}</td>
              <td>{pwm.pulseWidthRange}</td>
              <td>{pwm.modulationAccuracy}</td>
              <td>{pwm.maxVoltage}</td>
              <td>{pwm.maxCurrent}</td>
              <td>{pwm.efficiency}</td>
              <td>{pwm.temperatureRange}</td>
              <td>{pwm.resolution}</td>
              <td>{pwm.responseSpeed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PWMList;
