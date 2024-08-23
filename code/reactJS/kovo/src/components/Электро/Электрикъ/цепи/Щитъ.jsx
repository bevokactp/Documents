import React, { useState } from "react";
import "./styles.css"; // Импортируем стили

const data = [
  {
    name: "Вводно-распределительные щиты",
    description: "Используются для распределения электроэнергии в здании и подключения потребителей к электрической сети.",
    application: "Жилые здания, офисы, промышленные объекты.",
    features: "Устанавливаются на вводе электропитания в здание, могут включать автоматические выключатели, УЗО, счетчики электроэнергии.",
    availability: "Широко доступно.",
    difficulty: "Средняя сложность монтажа.",
  },
  {
    name: "Распределительные щиты",
    description: "Служат для распределения электроэнергии между различными потребителями внутри здания.",
    application: "Жилые здания, офисы, промышленные объекты.",
    features: "Включают автоматические выключатели, предохранители, системы защиты от перегрузок.",
    availability: "Широко доступно.",
    difficulty: "Средняя сложность установки.",
  },
  {
    name: "Щиты автоматики",
    description: "Используются для управления автоматикой и контроля процессов.",
    application: "Промышленные объекты, системы автоматизации зданий.",
    features: "Включают программируемые контроллеры, реле, таймеры.",
    availability: "Доступно через специализированных поставщиков.",
    difficulty: "Высокая сложность установки и настройки.",
  },
  {
    name: "Щиты управления",
    description: "Используются для управления и контроля различных электрических систем.",
    application: "Промышленные объекты, системы управления зданиями.",
    features: "Включают устройства для управления электродвигателями, системами вентиляции, освещением.",
    availability: "Широко доступно.",
    difficulty: "Средняя сложность установки и настройки.",
  },
  {
    name: "Щиты учета",
    description: "Предназначены для учета потребляемой электроэнергии.",
    application: "Жилые здания, офисы, промышленные объекты.",
    features: "Включают счетчики электроэнергии, устройства передачи данных.",
    availability: "Широко доступно.",
    difficulty: "Низкая сложность установки.",
  },
  {
    name: "Щиты аварийного электроснабжения",
    description: "Обеспечивают электроснабжение в случае аварийного отключения основной сети.",
    application: "Офисы, промышленные объекты, медицинские учреждения.",
    features: "Включают источники бесперебойного питания, генераторы.",
    availability: "Доступно через специализированных поставщиков.",
    difficulty: "Высокая сложность установки и настройки.",
  },
];

const ShieldTable = () => {
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending",
  });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <p>Щиты</p>
      <table className="chain-system-table">
        <thead>
          <tr>
            <th onClick={() => requestSort("name")}>Название</th>
            <th onClick={() => requestSort("description")}>Описание</th>
            <th onClick={() => requestSort("application")}>Применение</th>
            <th onClick={() => requestSort("features")}>Особенности</th>
            <th onClick={() => requestSort("availability")}>Доступность</th>
            <th onClick={() => requestSort("difficulty")}>Сложность</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.application}</td>
              <td>{item.features}</td>
              <td>{item.availability}</td>
              <td>{item.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShieldTable;
