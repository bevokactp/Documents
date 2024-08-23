import React, { useState } from 'react';

const magnetData = [
  {
    name: 'Ферритовые магниты (Ceramic Ferrite Magnets)',
    description: 'Магниты на основе ферритов, часто используются в электронике.',
    advantages: 'Низкая стоимость, хорошие магнитные свойства.',
    disadvantages: 'Низкая энергия магнитного поля.',
    application: 'Динамики, электрические моторы.',
    availability: 'Широко доступные',
    isPermanent: true,
  },
  {
    name: 'Неодимовые магниты (Neodymium Magnets, NdFeB)',
    description: 'Очень сильные магниты, созданные на основе неодима, железа и бора.',
    advantages: 'Высокая сила магнитного поля, компактные размеры.',
    disadvantages: 'Высокая стоимость, чувствительность к коррозии.',
    application: 'Электрические двигатели, медицинские приборы.',
    availability: 'Широко доступные',
    isPermanent: true,
  },
  {
    name: 'Самарий-кобальтовые магниты (Samarium-Cobalt Magnets, SmCo)',
    description: 'Магниты на основе самария и кобальта, отличающиеся высокой стабильностью.',
    advantages: 'Высокая стабильность при высоких температурах, коррозионная стойкость.',
    disadvantages: 'Высокая стоимость.',
    application: 'Авиация, космическая техника.',
    availability: 'Ограниченная доступность',
    isPermanent: true,
  },
  {
    name: 'Алюминиево-никелево-кобальтовые магниты (Alnico Magnets)',
    description: 'Магниты с высоким уровнем магнитного потока, состоящие из алюминия, никеля и кобальта.',
    advantages: 'Высокая температура работы, стабильные магнитные свойства.',
    disadvantages: 'Меньше магнитной силы по сравнению с неодимовыми.',
    application: 'Датчики, измерительные приборы.',
    availability: 'Широко доступные',
    isPermanent: true,
  },
  {
    name: 'Электромагниты',
    description: 'Магниты, создаваемые при протекании электрического тока через катушку.',
    advantages: 'Можно регулировать силу магнитного поля, не постоянные.',
    disadvantages: 'Необходим источник питания, ограниченная мобильность.',
    application: 'Реле, электродвигатели.',
    availability: 'Широко доступные',
    isPermanent: false,
  },
  {
    name: 'Гибкие магниты (Flexible Magnets)',
    description: 'Магниты, которые могут быть изгибаемыми, обычно на основе полимеров.',
    advantages: 'Гибкость, легкость в обработке.',
    disadvantages: 'Низкая сила магнитного поля.',
    application: 'Рекламные магниты, сувениры.',
    availability: 'Широко доступные',
    isPermanent: true,
  },
  {
    name: 'Темпоромальные магниты (Temporary Magnets)',
    description: 'Магниты, которые теряют свои магнитные свойства после прекращения внешнего магнитного поля.',
    advantages: 'Можно использовать в коротких периодах времени.',
    disadvantages: 'Не сохраняют магнитные свойства.',
    application: 'Используются в лабораторных испытаниях.',
    availability: 'Ограниченная доступность',
    isPermanent: false,
  },
  {
    name: 'Естественные магниты',
    description: 'Магниты, которые встречаются в природе, такие как магнитные минералы.',
    advantages: 'Естественный источник магнитных свойств.',
    disadvantages: 'Ограниченные магнитные свойства и форма.',
    application: 'Научные исследования, коллекционирование.',
    availability: 'Ограниченная доступность',
    isPermanent: true,
  },
];

const MagnetList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...magnetData];
    sortableItems.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return sortableItems;
  }, [sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Типы магнитов</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Название</th>
            <th onClick={() => requestSort('description')}>Описание</th>
            <th onClick={() => requestSort('advantages')}>Преимущества</th>
            <th onClick={() => requestSort('disadvantages')}>Недостатки</th>
            <th onClick={() => requestSort('application')}>Применение</th>
            <th onClick={() => requestSort('availability')}>Доступность</th>
            <th onClick={() => requestSort('isPermanent')}>Постоян</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((magnet, index) => (
            <tr key={index}>
              <td>{magnet.name}</td>
              <td>{magnet.description}</td>
              <td>{magnet.advantages}</td>
              <td>{magnet.disadvantages}</td>
              <td>{magnet.application}</td>
              <td>{magnet.availability}</td>
              <td>{magnet.isPermanent ? 'Да' : 'Нет'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MagnetList;
