import React, { useState } from 'react';

// Данные о различных типах часов
const clockData = [
  {
    name: 'Кварцевые часы',
    description: 'Часы, работающие на основе кварцевого кристалла, который обеспечивает высокую точность.',
    advantages: ['Высокая точность', 'Доступная цена'],
    disadvantages: ['Может требовать замены батареи', 'Часто менее долговечны'],
    application: ['Повседневное использование', 'Модные аксессуары'],
    availability: 5,
    qualityAndReliability: 4,
    manufacturingComplexity: 2,
    lifespan: 5,
    components: ['Кварцевый кристалл', 'Электронные компоненты'],
    resolution: 'Высокое',
    accuracy: '±15 секунд/месяц',
    frequencyStability: 'Хорошая',
    energyEfficiency: 'Высокая',
    powerConsumption: 'Низкое',
  },
  {
    name: 'Часы на основе временных регистров с микроконтроллерами',
    description: 'Часы, использующие микроконтроллер для управления временными регистрами и обеспечения точности.',
    advantages: ['Гибкость настройки', 'Высокая точность'],
    disadvantages: ['Высокая стоимость', 'Сложность в ремонте'],
    application: ['Научные исследования', 'Системы контроля'],
    availability: 3,
    qualityAndReliability: 4,
    manufacturingComplexity: 4,
    lifespan: 10,
    components: ['Микроконтроллер', 'Временные регистры'],
    resolution: 'Очень высокая',
    accuracy: '±1 секунда/месяц',
    frequencyStability: 'Отличная',
    energyEfficiency: 'Средняя',
    powerConsumption: 'Среднее',
  },
  {
    name: 'Часы на основе временных регистров с ПЛИС',
    description: 'Часы, использующие программируемые логические интегральные схемы для управления временем.',
    advantages: ['Высокая точность', 'Настраиваемость'],
    disadvantages: ['Сложность в разработке', 'Высокая стоимость'],
    application: ['Электронные устройства', 'Промышленные системы'],
    availability: 2,
    qualityAndReliability: 5,
    manufacturingComplexity: 5,
    lifespan: 15,
    components: ['ПЛИС', 'Временные регистры'],
    resolution: 'Очень высокая',
    accuracy: '±0.1 секунда/месяц',
    frequencyStability: 'Отличная',
    energyEfficiency: 'Средняя',
    powerConsumption: 'Низкое',
  },
  {
    name: 'Атомные часы Цезий',
    description: 'Часы, использующие колебания атомов цезия для обеспечения максимальной точности.',
    advantages: ['Высочайшая точность', 'Долговечность'],
    disadvantages: ['Высокая стоимость', 'Большие размеры'],
    application: ['Научные исследования', 'Стандартизация времени'],
    availability: 1,
    qualityAndReliability: 5,
    manufacturingComplexity: 5,
    lifespan: 20,
    components: ['Атомы цезия', 'Лазеры'],
    resolution: 'Экстремально высокая',
    accuracy: '±1 наносекунда/день',
    frequencyStability: 'Отличная',
    energyEfficiency: 'Низкая',
    powerConsumption: 'Высокое',
  },
  {
    name: 'Атомные часы Рубидий',
    description: 'Часы, использующие атомы рубидия для обеспечения высокой точности.',
    advantages: ['Высокая точность', 'Компактные размеры'],
    disadvantages: ['Дорогие', 'Может требовать калибровки'],
    application: ['Научные исследования', 'Телекоммуникации'],
    availability: 2,
    qualityAndReliability: 5,
    manufacturingComplexity: 4,
    lifespan: 15,
    components: ['Атомы рубидия', 'Лазеры'],
    resolution: 'Очень высокая',
    accuracy: '±10 наносекунд/день',
    frequencyStability: 'Отличная',
    energyEfficiency: 'Средняя',
    powerConsumption: 'Среднее',
  },
  {
    name: 'Водяные часы',
    description: 'Часы, использующие течение воды для измерения времени.',
    advantages: ['Оригинальность', 'Без необходимости в батареях'],
    disadvantages: ['Меньшая точность', 'Зависимость от источника воды'],
    application: ['Декор', 'Эксперименты'],
    availability: 3,
    qualityAndReliability: 3,
    manufacturingComplexity: 3,
    lifespan: 10,
    components: ['Водяной резервуар', 'Пробка'],
    resolution: 'Средняя',
    accuracy: '±1 минута/день',
    frequencyStability: 'Низкая',
    energyEfficiency: 'Не применимо',
    powerConsumption: 'Не применимо',
  },
  {
    name: 'Механические часы',
    description: 'Часы, работающие на основе механизма с пружинами и шестернями.',
    advantages: ['Долговечность', 'Без необходимости в батареях'],
    disadvantages: ['Сложность в обслуживании', 'Менее точные, чем кварцевые'],
    application: ['Часы-юбилейные', 'Ремесленные изделия'],
    availability: 4,
    qualityAndReliability: 4,
    manufacturingComplexity: 4,
    lifespan: 20,
    components: ['Пружины', 'Шестерни'],
    resolution: 'Средняя',
    accuracy: '±5 секунд/день',
    frequencyStability: 'Средняя',
    energyEfficiency: 'Высокая',
    powerConsumption: 'Не применимо',
  },
  {
    name: 'Маятниковые часы',
    description: 'Часы, использующие маятник для обеспечения точности хода.',
    advantages: ['Высокая точность', 'Интересный механизм'],
    disadvantages: ['Чувствительность к внешним условиям', 'Занимают много места'],
    application: ['Настольные часы', 'Декор'],
    availability: 3,
    qualityAndReliability: 4,
    manufacturingComplexity: 4,
    lifespan: 25,
    components: ['Маятник', 'Часовой механизм'],
    resolution: 'Высокая',
    accuracy: '±1 секунда/день',
    frequencyStability: 'Высокая',
    energyEfficiency: 'Средняя',
    powerConsumption: 'Не применимо',
  },
  {
    name: 'Ноктурлабиум',
    description: 'Астрономический инструмент, использующий положение звезды относительно полярной звезды для определения местного времени.',
    advantages: ['Позволяет определять время ночью', 'Не требует внешних источников света'],
    disadvantages: ['Требует точной настройки', 'Сложность в использовании'],
    application: ['Астрономия', 'Навигация'],
    availability: 2,
    qualityAndReliability: 3,
    manufacturingComplexity: 4,
    lifespan: 15,
    components: ['Круглая платформа', 'Механизм для установки в полярной звезде'],
    resolution: 'Средняя',
    accuracy: '±5 минут/ночь',
    frequencyStability: 'Средняя',
    energyEfficiency: 'Не применимо',
    powerConsumption: 'Не применимо',
  },
    {
    name: 'Огненные часы',
    description: 'Часы, использующие огонь или тепло для измерения времени.',
    advantages: ['Оригинальность', 'Зрелищность'],
    disadvantages: ['Низкая точность', 'Ограниченное применение'],
    application: ['Декор', 'Эксперименты'],
    availability: 2,
    qualityAndReliability: 2,
    manufacturingComplexity: 4,
    lifespan: 5,
    components: ['Огнеупорные материалы', 'Термометры'],
    resolution: 'Низкая',
    accuracy: '±10 минут/день',
    frequencyStability: 'Низкая',
    energyEfficiency: 'Не применимо',
    powerConsumption: 'Не применимо',
  },
  {
    name: 'Песочные часы',
    description: 'Часы, использующие песок для измерения времени.',
    advantages: ['Простота конструкции', 'Не требует батареек'],
    disadvantages: ['Низкая точность', 'Ограниченное время измерения'],
    application: ['Кухонные часы', 'Декор'],
    availability: 5,
    qualityAndReliability: 3,
    manufacturingComplexity: 2,
    lifespan: 10,
    components: ['Стекло', 'Песок'],
    resolution: 'Средняя',
    accuracy: '±1 минута/час',
    frequencyStability: 'Низкая',
    energyEfficiency: 'Не применимо',
    powerConsumption: 'Не применимо',
  },
  {
    name: 'Солнечные часы',
    description: 'Часы, использующие солнечные лучи для измерения времени.',
    advantages: ['Экологичность', 'Не требует батареек'],
    disadvantages: ['Зависимость от солнечного света', 'Низкая точность'],
    application: ['Декор', 'Садовые украшения'],
    availability: 4,
    qualityAndReliability: 3,
    manufacturingComplexity: 3,
    lifespan: 15,
    components: ['Циферблат', 'Солнечный элемент'],
    resolution: 'Низкая',
    accuracy: '±10 минут/день',
    frequencyStability: 'Низкая',
    energyEfficiency: 'Высокая',
    powerConsumption: 'Не применимо',
  },
  {
    name: 'Цветочные часы',
    description: 'Часы, использующие рост и цветение растений для определения времени.',
    advantages: ['Оригинальность', 'Экологичность'],
    disadvantages: ['Низкая точность', 'Зависимость от условий роста'],
    application: ['Декор', 'Садоводство'],
    availability: 2,
    qualityAndReliability: 2,
    manufacturingComplexity: 4,
    lifespan: 5,
    components: ['Растения', 'Контейнеры'],
    resolution: 'Низкая',
    accuracy: '±1 час/день',
    frequencyStability: 'Низкая',
    energyEfficiency: 'Высокая',
    powerConsumption: 'Не применимо',
  },
  {
    name: 'Электрические часы',
    description: 'Часы, работающие от электрической сети или батареи.',
    advantages: ['Высокая точность', 'Удобство использования'],
    disadvantages: ['Зависимость от источника питания', 'Может быть менее долговечным'],
    application: ['Повседневное использование', 'Офисные часы'],
    availability: 5,
    qualityAndReliability: 4,
    manufacturingComplexity: 2,
    lifespan: 10,
    components: ['Электронные компоненты', 'Источник питания'],
    resolution: 'Высокая',
    accuracy: '±1 секунда/день',
    frequencyStability: 'Высокая',
    energyEfficiency: 'Средняя',
    powerConsumption: 'Низкое',
  },
];

const ClockList = () => {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...clockData];
    if (sortConfig.key) {
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
  }, [sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы часов</h1>
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
            <th onClick={() => requestSort('resolution')}>Разрешение</th>
            <th onClick={() => requestSort('accuracy')}>Точность</th>
            <th onClick={() => requestSort('frequencyStability')}>Стабильность частоты</th>
            <th onClick={() => requestSort('energyEfficiency')}>Энергетическая эффективность</th>
            <th onClick={() => requestSort('powerConsumption')}>Энергопотребление</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((clock, index) => (
            <tr key={index}>
              <td>{clock.name}</td>
              <td>{clock.description}</td>
              <td>{clock.advantages.join(', ')}</td>
              <td>{clock.disadvantages.join(', ')}</td>
              <td>{clock.application.join(', ')}</td>
              <td>{clock.availability}</td>
              <td>{clock.qualityAndReliability}</td>
              <td>{clock.manufacturingComplexity}</td>
              <td>{clock.lifespan}</td>
              <td>{clock.components.join(', ')}</td>
              <td>{clock.resolution}</td>
              <td>{clock.accuracy}</td>
              <td>{clock.frequencyStability}</td>
              <td>{clock.energyEfficiency}</td>
              <td>{clock.powerConsumption}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClockList;
