import React from 'react';

const GalvanicPairsTable = () => {
  // Данные для таблицы
  const data = [
    {
      pair: "Алюминий - Медь",
      electrodePotential: "-1.66 В (Алюминий), +0.34 В (Медь)",
      currentDensity: "Средняя",
      corrosionResistance: "Низкая",
      electrochemicalActivity: "Высокая",
      electrolyteCompatibility: "Хорошо с водными растворами",
      voltage: "~2.0 В",
      currentStrength: "Средняя",
      durability: "Низкая",
      costAndAvailability: "Экономичная, доступная"
    },
    {
      pair: "Алюминий - Нержавеющая сталь",
      electrodePotential: "-1.66 В (Алюминий), +0.25 В (Нержавеющая сталь)",
      currentDensity: "Низкая",
      corrosionResistance: "Средняя",
      electrochemicalActivity: "Средняя",
      electrolyteCompatibility: "Хорошо с водными растворами",
      voltage: "~1.9 В",
      currentStrength: "Низкая",
      durability: "Средняя",
      costAndAvailability: "Доступная, более дорогая"
    },
    {
      pair: "Алюминий - Графит",
      electrodePotential: "-1.66 В (Алюминий), +0.00 В (Графит)",
      currentDensity: "Средняя",
      corrosionResistance: "Низкая",
      electrochemicalActivity: "Средняя",
      electrolyteCompatibility: "Хорошо с водными растворами",
      voltage: "~1.7 В",
      currentStrength: "Средняя",
      durability: "Низкая",
      costAndAvailability: "Доступная"
    },
    {
      pair: "Алюминий - Железо",
      electrodePotential: "-1.66 В (Алюминий), -0.44 В (Железо)",
      currentDensity: "Средняя",
      corrosionResistance: "Низкая",
      electrochemicalActivity: "Высокая",
      electrolyteCompatibility: "Хорошо с водными растворами",
      voltage: "~1.2 В",
      currentStrength: "Средняя",
      durability: "Низкая",
      costAndAvailability: "Экономичная"
    },
    {
      pair: "Цинк - Медь",
      electrodePotential: "-0.76 В (Цинк), +0.34 В (Медь)",
      currentDensity: "Средняя",
      corrosionResistance: "Средняя",
      electrochemicalActivity: "Высокая",
      electrolyteCompatibility: "Хорошо с водными растворами",
      voltage: "~1.1 В",
      currentStrength: "Средняя",
      durability: "Средняя",
      costAndAvailability: "Доступная, экономичная"
    },
    {
      pair: "Цинк - Нержавеющая сталь",
      electrodePotential: "-0.76 В (Цинк), +0.25 В (Нержавеющая сталь)",
      currentDensity: "Низкая",
      corrosionResistance: "Средняя",
      electrochemicalActivity: "Средняя",
      electrolyteCompatibility: "Хорошо с водными растворами",
      voltage: "~1.0 В",
      currentStrength: "Низкая",
      durability: "Средняя",
      costAndAvailability: "Доступная"
    },
    {
      pair: "Алюминий - Цинк",
      electrodePotential: "-1.66 В (Алюминий), -0.76 В (Цинк)",
      currentDensity: "Средняя",
      corrosionResistance: "Низкая",
      electrochemicalActivity: "Высокая",
      electrolyteCompatibility: "Хорошо с водными растворами",
      voltage: "~0.9 В",
      currentStrength: "Средняя",
      durability: "Низкая",
      costAndAvailability: "Экономичная"
    },
    {
      pair: "Железо - Медь",
      electrodePotential: "-0.44 В (Железо), +0.34 В (Медь)",
      currentDensity: "Средняя",
      corrosionResistance: "Средняя",
      electrochemicalActivity: "Средняя",
      electrolyteCompatibility: "Хорошо с водными растворами",
      voltage: "~0.78 В",
      currentStrength: "Средняя",
      durability: "Средняя",
      costAndAvailability: "Доступная"
    },
  ];

  return (
    <div>
      <h2>Гальванические пары</h2>
      <table>
        <thead>
          <tr>
            <th>Гальваническая пара</th>
            <th>Электродный потенциал (В)</th>
            <th>Токовая плотность</th>
            <th>Коррозионная стойкость</th>
            <th>Электрохимическая активность</th>
            <th>Электролитическая совместимость</th>
            <th>Напряжение (В)</th>
            <th>Сила тока</th>
            <th>Долговечность</th>
            <th>Стоимость и доступность</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.pair}</td>
              <td>{item.electrodePotential}</td>
              <td>{item.currentDensity}</td>
              <td>{item.corrosionResistance}</td>
              <td>{item.electrochemicalActivity}</td>
              <td>{item.electrolyteCompatibility}</td>
              <td>{item.voltage}</td>
              <td>{item.currentStrength}</td>
              <td>{item.durability}</td>
              <td>{item.costAndAvailability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GalvanicPairsTable;
