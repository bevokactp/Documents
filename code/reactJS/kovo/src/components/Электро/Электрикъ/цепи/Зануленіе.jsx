import React, { useState } from "react";
import "./styles.css"; // Импортируем стили

const data = [
  {
    name: "Прямое зануление",
    description:
      "Соединение металлических частей с нулевым проводом, который заземлен на трансформаторной подстанции.",
    advantages: "Хорошая защита от поражения электрическим током.",
    disadvantages:
      "Необходимость правильного подключения нулевого проводника и его заземления.",
    quality: "Высокое качество и надежность.",
    application: "Домовые и коммерческие электрические системы.",
    availability: "Широко доступно.",
    difficulty: "Низкая, стандартная установка.",
  },
  {
    name: "Непрямое зануление",
    description:
      "Металлические части не соединены напрямую с нулем, защита осуществляется дополнительным оборудованием.",
    advantages:
      "Потенциально меньшая вероятность повреждения при частичных замыканиях.",
    disadvantages: "Сложность в реализации защиты от замыканий на землю.",
    quality:
      "Среднее качество, надежность зависит от дополнительного оборудования.",
    application: "Защита в сложных системах с изолированной нейтралью.",
    availability: "Специализированное оборудование может быть менее доступным.",
    difficulty: "Высокая, требует дополнительного оборудования и настройки.",
  },
  {
    name: "Зануление в сети с изолированной нейтралью",
    description:
      "Нейтраль трансформатора изолирована от земли, защита осуществляется дополнительным оборудованием.",
    advantages: "Высокий уровень надежности.",
    disadvantages: "Сложность в реализации и дорогостоящее оборудование.",
    quality: "Высокое качество и надежность.",
    application:
      "Обеспечение надежности и безопасности в промышленных установках.",
    availability: "Ограниченная доступность и высокая стоимость.",
    difficulty: "Высокая, требует сложного оборудования и настройки.",
  },
];

const GroundingTable = () => {
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
      <div>
        <p>
          Зануление: Метод подключения металлических частей оборудования к
          нейтральному проводнику для защиты от накопления опасного напряжения и
          обеспечения безопасности.
        </p>
      </div>
      <table className="chain-system-table">
        <thead>
          <tr>
            <th onClick={() => requestSort("name")}>Название</th>
            <th onClick={() => requestSort("description")}>Описание</th>
            <th onClick={() => requestSort("advantages")}>Преимущества</th>
            <th onClick={() => requestSort("disadvantages")}>Недостатки</th>
            <th onClick={() => requestSort("quality")}>Качество</th>
            <th onClick={() => requestSort("application")}>Применение</th>
            <th onClick={() => requestSort("availability")}>Доступность</th>
            <th onClick={() => requestSort("difficulty")}>
              Сложность изготовления
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.advantages}</td>
              <td>{item.disadvantages}</td>
              <td>{item.quality}</td>
              <td>{item.application}</td>
              <td>{item.availability}</td>
              <td>{item.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroundingTable;
