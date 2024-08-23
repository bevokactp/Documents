import React from 'react';

function Проверки() {
  const checks = [
    { item: 'Проверка фильтров', interval: 'Каждые 3 месяца' },
    { item: 'Калибровка оборудования', interval: 'Каждые 6 месяцев' },
    { item: 'Обслуживание сварочного аппарата', interval: 'Каждый год' },
    { item: 'Проверка соединений', interval: 'Каждые 6 месяцев' },
    { item: 'Замена расходных материалов', interval: 'Каждые 2 месяца' },
    { item: 'Чистка вентилятора', interval: 'Каждые 3 месяца' },
    { item: 'Проверка электрических соединений', interval: 'Каждые 3 месяца' }
  ];

  return (
    <div>
      <h2>Регулярные проверки и техобслуживание</h2>
      <ul>
        {checks.map((check, index) => (
          <li key={index}>
            {check.item} - {check.interval}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Проверки;
