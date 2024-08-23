import React, { useState } from 'react';

// Данные о стежках
const stitchData = [
  {
    name: 'Вприкреп',
    description: 'Стежок для прикрепления элементов на ткани.',
    advantages: 'Прочный и надежный.',
    disadvantages: 'Требует навыков.',
    fabric: 'Средние и тонкие ткани',
    application: 'Вышивка, декоративные элементы.',
    complexity: 4,
  },
  {
    name: 'Вышивальный',
    description: 'Стежок, используемый для создания вышивки.',
    advantages: 'Эстетичный и декоративный.',
    disadvantages: 'Может быть сложным для новичков.',
    fabric: 'Все типы тканей',
    application: 'Вышивка, декоративные элементы.',
    complexity: 5,
  },
  {
    name: 'Для обмётывания петель',
    description: 'Стежок, используемый для обмётывания петель.',
    advantages: 'Прочный и практичный.',
    disadvantages: 'Может быть сложным для новичков.',
    fabric: 'Все типы тканей',
    application: 'Обработка краев, обмётывание петель.',
    complexity: 4,
  },
  {
    name: 'Для филейной вышивки',
    description: 'Стежок, используемый для филейной вышивки.',
    advantages: 'Оригинальный и декоративный.',
    disadvantages: 'Может быть трудным для выполнения.',
    fabric: 'Тонкие ткани',
    application: 'Филейная вышивка, декоративные элементы.',
    complexity: 5,
  },
  {
    name: 'Зигзагообразный',
    description: 'Стежок, образующий зигзагообразный узор.',
    advantages: 'Простой и декоративный.',
    disadvantages: 'Может быть менее прочным.',
    fabric: 'Все типы тканей',
    application: 'Вышивка, декоративные элементы.',
    complexity: 3,
  },
  {
    name: 'Косой',
    description: 'Стежок, выполняемый под углом к ткани.',
    advantages: 'Оригинальный и интересный.',
    disadvantages: 'Может требовать навыков.',
    fabric: 'Средние и плотные ткани',
    application: 'Декоративные элементы, вышивка.',
    complexity: 4,
  },
  {
    name: 'Крестик',
    description: 'Классический стежок, создающий узор крестиком.',
    advantages: 'Эстетичный и универсальный.',
    disadvantages: 'Может занимать много времени.',
    fabric: 'Все типы тканей',
    application: 'Вышивка, декоративные элементы.',
    complexity: 4,
  },
  {
    name: 'Локстич',
    description: 'Стежок, используемый для создания локальных узоров.',
    advantages: 'Эффективный и аккуратный.',
    disadvantages: 'Может требовать навыков.',
    fabric: 'Все типы тканей',
    application: 'Вышивка, декоративные элементы.',
    complexity: 3,
  },
  {
    name: 'Назад иголку',
    description: 'Стежок, выполняемый обратным движением иглы.',
    advantages: 'Простой и надежный.',
    disadvantages: 'Может быть менее декоративным.',
    fabric: 'Все типы тканей',
    application: 'Шитье, отделка.',
    complexity: 2,
  },
  {
    name: 'Петельный',
    description: 'Стежок, создающий узор в виде петли.',
    advantages: 'Простой и универсальный.',
    disadvantages: 'Может быть менее прочным.',
    fabric: 'Все типы тканей',
    application: 'Шитье, вышивка, декоративные элементы.',
    complexity: 3,
  },
  {
    name: 'Потайной',
    description: 'Стежок, скрывающийся внутри ткани.',
    advantages: 'Незаметный и аккуратный.',
    disadvantages: 'Может быть сложным для новичков.',
    fabric: 'Все типы тканей',
    application: 'Шитье, отделка.',
    complexity: 4,
  },
  {
    name: 'Прямой',
    description: 'Простой прямой стежок.',
    advantages: 'Легкий в выполнении.',
    disadvantages: 'Может быть менее декоративным.',
    fabric: 'Все типы тканей',
    application: 'Шитье, вышивка, отделка.',
    complexity: 1,
  },
  {
    name: 'Сасико',
    description: 'Традиционный японский стежок для декоративной вышивки.',
    advantages: 'Оригинальный и эстетичный.',
    disadvantages: 'Трудоемкий.',
    fabric: 'Средние и плотные ткани',
    application: 'Вышивка, декоративные элементы.',
    complexity: 5,
  },
  {
    name: 'Тамбурный',
    description: 'Стежок, выполняемый с помощью тамбурного крючка.',
    advantages: 'Декоративный и прочный.',
    disadvantages: 'Может быть сложным для новичков.',
    fabric: 'Тонкие ткани',
    application: 'Вышивка, декоративные элементы.',
    complexity: 4,
  },
];

// Компонент для сортировки и отображения таблицы стежков
const StitchList = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedStitchData = [...stitchData].sort((a, b) => {
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
      <h1>Типы стежков</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Название</th>
            <th onClick={() => requestSort('description')}>Описание</th>
            <th onClick={() => requestSort('advantages')}>Преимущества</th>
            <th onClick={() => requestSort('disadvantages')}>Недостатки</th>
            <th onClick={() => requestSort('fabric')}>Для каких тканей</th>
            <th onClick={() => requestSort('application')}>Применение</th>
            <th onClick={() => requestSort('complexity')}>Сложность</th>
          </tr>
        </thead>
        <tbody>
          {sortedStitchData.map((stitch, index) => (
            <tr key={index}>
              <td>{stitch.name}</td>
              <td>{stitch.description}</td>
              <td>{stitch.advantages}</td>
              <td>{stitch.disadvantages}</td>
              <td>{stitch.fabric}</td>
              <td>{stitch.application}</td>
              <td>{stitch.complexity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StitchList;
