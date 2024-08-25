import React, { useState } from 'react';
import './styles.css'; // Импортируем стили

const data = [
  {
    name: "TN-C (Трансформатор-Нейтраль-Комбинированный)",
    description: "Система, где нейтраль и защитный проводник объединены в один провод.",
    advantages: "Простота в установке и низкая стоимость.",
    disadvantages: "Меньшая надежность при высоких токах короткого замыкания.",
    quality: "Среднее качество, зависимое от правильного выполнения заземления.",
    application: "Широко используется в жилых и коммерческих системах.",
    availability: "Широко доступно.",
    difficulty: "Низкая, стандартная установка.",
  },
  {
    name: "TN-C-S (Трансформатор-Нейтраль-Комбинированный-Сегрегированный)",
    description: "Система, где нейтраль и защитный проводник разделены на части системы.",
    advantages: "Улучшенная безопасность и снижение риска повреждений.",
    disadvantages: "Сложность в проектировании и установке.",
    quality: "Высокое качество, улучшенная защита.",
    application: "Используется в сложных системах, таких как офисные здания.",
    availability: "Широко доступно.",
    difficulty: "Средняя, требует дополнительных мер по проектированию.",
  },
  {
    name: "TN-S (Трансформатор-Нейтраль-Раздельный)",
    description: "Система, где нейтраль и защитный проводник полностью разделены на всю систему.",
    advantages: "Высокая степень защиты и надежность.",
    disadvantages: "Необходимость в большем количестве проводников.",
    quality: "Высокое качество и надежность.",
    application: "Используется в промышленных и жилых зданиях с высокими требованиями к безопасности.",
    availability: "Широко доступно.",
    difficulty: "Низкая, стандартная установка.",
  },
  {
    name: "IT (Изолированная Точка)",
    description: "Система с изолированной нейтралью, где нейтраль не соединена напрямую с землей.",
    advantages: "Минимизация тока утечки и повышение надежности системы.",
    disadvantages: "Сложность в контроле и обслуживании.",
    quality: "Среднее качество, требует дополнительных устройств для мониторинга.",
    application: "Используется в медицинских и критически важных системах.",
    availability: "Ограничено специализированными системами.",
    difficulty: "Высокая, требует дополнительных средств защиты.",
  },
  {
    name: "TT (Трансформатор-Точка заземления)",
    description: "Система, где нейтраль заземлена в месте потребителя, а защитный проводник имеет отдельное заземление.",
    advantages: "Независимость от основной сети, хорошая защита от поражения электрическим током.",
    disadvantages: "Необходимость надежного заземления на месте.",
    quality: "Высокое качество, требует регулярного контроля.",
    application: "Используется в автономных системах и в местах с нестабильной основной сетью.",
    availability: "Широко доступно.",
    difficulty: "Средняя, требует надежного заземления.",
  },
  {
    name: "IT-R (Изолированная Точка-Резистивная)",
    description: "Система, где нейтраль изолирована или соединена с землей через резистор для ограничения тока короткого замыкания.",
    advantages: "Снижение тока короткого замыкания и уменьшение риска повреждений.",
    disadvantages: "Сложность настройки и контроля.",
    quality: "Высокое качество, зависит от правильного выбора резистора.",
    application: "Используется в системах с высокими требованиями к надежности и безопасности.",
    availability: "Специализированное оборудование, может быть менее доступным.",
    difficulty: "Высокая, требует точного выбора и настройки резисторов.",
  },
];


// Обновленный список опций для сортировки
const sortOptions = {
  name: 'Название',
  description: 'Описание',
  advantages: 'Преимущества',
  disadvantages: 'Недостатки',
  quality: 'Качество и надежность',
  application: 'Применение',
  availability: 'Доступность',
  difficulty: 'Сложность изготовления',
};

const Table = () => {
  const [items, setItems] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const sortedItems = React.useMemo(() => {
    const sortableItems = [...items];
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
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <div>
        <p>
        Заземление: Процесс подключения частей системы к земле для обеспечения безопасности, предотвращения накопления напряжения и защиты от электрических ударов.
        </p>
      </div>
      <table className="chain-system-table">
        <thead>
          <tr>
            {Object.keys(sortOptions).map((key) => (
              <th
                key={key}
                onClick={() => requestSort(key)}
                style={{ cursor: 'pointer' }}
              >
                {sortOptions[key]} {sortConfig.key === key ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item, index) => (
            <tr key={index}>
              {Object.keys(sortOptions).map((key) => (
                <td key={key}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
