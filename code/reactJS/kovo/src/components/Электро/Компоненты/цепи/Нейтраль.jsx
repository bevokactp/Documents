import React, { useState } from "react";
import "./styles.css"; // Импортируем стили

const data = [
  {
    name: "Глухозаземленная нейтраль",
    description:
      "Нейтраль имеет прямое соединение с землей, что обеспечивает стабилизацию потенциала и защиту от перенапряжений.",
    advantages: "Обеспечивает высокую степень безопасности и защиту от электрических помех.",
    disadvantages: "Может потребоваться постоянное обслуживание и проверка состояния заземления.",
    quality: "Высокое качество, надежность.",
    application: "Используется в системах с высоким уровнем безопасности, например, в медицинских и промышленных системах.",
    availability: "Широко доступно.",
    difficulty: "Средняя, требует правильной установки и регулярного контроля.",
  },
  {
    name: "Изолированная нейтраль",
    description:
      "Нейтраль не имеет прямого соединения с землей и изолирована от неё.",
    advantages: "Минимизация тока утечки и защита от отказов в сети.",
    disadvantages: "Сложность контроля и защиты от перенапряжений.",
    quality: "Среднее качество, зависит от использования дополнительных устройств.",
    application: "Используется в системах с высокими требованиями к безопасности.",
    availability: "Ограничено специализированными системами.",
    difficulty: "Высокая, требует дополнительных мер защиты.",
  },
  {
    name: "Заземленная нейтраль",
    description:
      "Нейтраль соединена с землей для обеспечения стабильности потенциала.",
    advantages: "Уменьшение риска перенапряжения и стабильность системы.",
    disadvantages:
      "Необходимость надежного заземления для правильной работы системы.",
    quality: "Высокое качество и надежность.",
    application: "Широко используется в бытовых и промышленных сетях.",
    availability: "Широко доступно.",
    difficulty: "Низкая, стандартная установка.",
  },
  {
    name: "Слабо заземленная нейтраль",
    description:
      "Нейтраль соединена с землей через сопротивление или индуктивность.",
    advantages:
      "Снижение риска токов короткого замыкания и уменьшение вреда от перенапряжений.",
    disadvantages: "Требует тщательного расчета и установки.",
    quality: "Зависит от точности расчета и установки.",
    application: "Используется в распределительных системах высокого напряжения.",
    availability: "Ограничено специализированными системами.",
    difficulty: "Высокая, требует специальных расчетов и оборудования.",
  },
  {
    name: "Заземленная нейтраль с импедансом",
    description:
      "Нейтраль соединена с землей через импеданс, что ограничивает токи короткого замыкания.",
    advantages: "Снижение токов короткого замыкания и защита оборудования.",
    disadvantages: "Может потребовать сложного расчета и настройки.",
    quality: "Зависит от импеданса и системы заземления.",
    application: "Используется в распределительных системах для улучшения безопасности.",
    availability: "Ограничено специализированными системами.",
    difficulty: "Средняя, требует расчета и настройки импеданса.",
  },
]

const NeutralTable = () => {
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
  }, [sortConfig]);

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
          Нейтраль: Проводник, который возвращает ток к источнику питания и помогает сбалансировать нагрузки, часто заземляется для обеспечения стабильности.
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
            <th onClick={() => requestSort("difficulty")}>Сложность</th>
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

export default NeutralTable;
