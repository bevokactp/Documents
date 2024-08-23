import React, { useState } from "react";

const knittingTechniquesData = [
  {
    name: 'Амигуруми',
    description: 'грушек и фигурок в японском стиле, использующая мелкие детали и обвязку.',
    advantages: 'Позволяет создавать милые и сложные игрушки, развивает творческие навыки.',
    disadvantages: 'Может быть трудоемким, требует внимательности при работе с мелкими деталями.',
    application: 'Игрушки, сувениры, декоративные элементы.',
    materialAvailability: 'Широко доступные',
    needlesHooks: 'Крючок',
    stitchesUsed: 'Основные и специальные петли для игрушек',
    construction: 'Целиковое или отдельными частями',
    yarnsUsed: 'Средние и тонкие пряжи',
    finishing: 'Скрытые швы',
    difficulty: 2,
  },
  {
    name: 'Бриошь',
    description: 'создающая объемное и двустороннее полотно с использованием специального набора петель.',
    advantages: 'Объемное и теплое полотно, двухсторонний эффект.',
    disadvantages: 'Может быть сложным для новичков, требует специальных техник и инструментов.',
    application: 'Шарфы, свитера, шапки.',
    materialAvailability: 'Широко доступные',
    needlesHooks: 'Спицы',
    stitchesUsed: 'Бриошевые петли',
    construction: 'Целиковое',
    yarnsUsed: 'Разные пряжи',
    finishing: 'Скрытые швы',
    difficulty: 3,
  },
  {
    name: 'На вилке',
    description: 'приспособление, напоминающее вилку, для создания сетчатых узоров и текстур.',
    advantages: 'Создает уникальные узоры и текстуры, быстрое создание изделий.',
    disadvantages: 'Требует специального инструмента, может быть трудным для новичков.',
    application: 'Аксессуары, декоративные элементы.',
    materialAvailability: 'Широко доступные',
    needlesHooks: 'Спицы или крючок (в зависимости от техники)',
    stitchesUsed: 'Сетчатые узоры',
    construction: 'Целиковое или отдельными частями',
    yarnsUsed: 'Разные пряжи',
    finishing: 'Скрытые или видимые швы',
    difficulty: 2,
  },
  {
    name: 'На лумах',
    description: 'Техника, используемая для создания объемных узоров с помощью специальных инструментов, известных как лумы.',
    advantages: 'Создает уникальные узоры и текстуры, подходящие для различных изделий.',
    disadvantages: 'Требует специальных инструментов, может быть сложно для новичков.',
    application: 'Одеяла, шарфы, аксессуары.',
    materialAvailability: 'Широко доступные',
    needlesHooks: 'Лумы',
    stitchesUsed: 'Узоры на лумах',
    construction: 'Целиковое или отдельными частями',
    yarnsUsed: 'Разные пряжи',
    finishing: 'Скрытые швы',
    difficulty: 2,
  },
  {
    name: 'Нукинг',
    description: 'используемая для создания объемных узоров с помощью нук и специального приема работы с пряжей.',
    advantages: 'Создает объемные текстуры, позволяет работать с различными узорами.',
    disadvantages: 'Может быть сложным для освоения, требует практики.',
    application: 'Шарфы, свитера, аксессуары.',
    materialAvailability: 'Широко доступные',
    needlesHooks: 'Нуки',
    stitchesUsed: 'Нукинговые петли, текстуры',
    construction: 'Целиковое',
    yarnsUsed: 'Разные пряжи',
    finishing: 'Скрытые швы',
    difficulty: 3,
  },
  {
    name: 'Пулинг',
    description: 'где пряжа вытягивается для создания особых текстур и узоров.',
    advantages: 'Создает интересные текстуры и узоры, добавляет эффект объемности.',
    disadvantages: 'Требует точности при вытягивании пряжи, может быть трудоемким.',
    application: 'Аксессуары, декоративные элементы.',
    materialAvailability: 'Широко доступные',
    needlesHooks: 'Спицы или крючок',
    stitchesUsed: 'Пулинговые узоры',
    construction: 'Целиковое или отдельными частями',
    yarnsUsed: 'Разные пряжи',
    finishing: 'Скрытые или видимые швы',
    difficulty: 2,
  },
  {
    name: 'Свинг',
    description: 'создающая текстурные и декоративные узоры с использованием специальных приемов и техник.',
    advantages: 'Создает интересные и разнообразные узоры, подходит для декоративных элементов.',
    disadvantages: 'Может быть сложным для новичков, требует внимания к деталям.',
    application: 'Аксессуары, декоративные элементы.',
    materialAvailability: 'Широко доступные',
    needlesHooks: 'Спицы или крючок',
    stitchesUsed: 'Свинг-узоры',
    construction: 'Целиковое или отдельными частями',
    yarnsUsed: 'Разные пряжи',
    finishing: 'Скрытые или видимые швы',
    difficulty: 2,
  },
  {
    name: 'Сибори',
    description: 'создающая уникальные узоры и текстуры с использованием специальных приемов обработки пряжи.',
    advantages: 'Позволяет создавать интересные узоры и текстуры, добавляет эффект ручной работы.',
    disadvantages: 'Может быть трудоемким, требует практики.',
    application: 'Одеяла, шарфы, аксессуары.',
    materialAvailability: 'Широко доступные',
    needlesHooks: 'Спицы или крючок',
    stitchesUsed: 'Сибори-узоры',
    construction: 'Целиковое или отдельными частями',
    yarnsUsed: 'Разные пряжи',
    finishing: 'Скрытые швы',
    difficulty: 2,
  },
  {
    name: 'Филейное',
    description: 'создающая узоры с помощью воздушных и заполненных ячеек, часто используется для создания кружевных изделий.',
    advantages: 'Позволяет создавать легкие и ажурные изделия, идеальна для кружевных узоров.',
    disadvantages: 'Может быть сложным для новичков, требует точности при работе с узорами.',
    application: 'Кружевные изделия, занавески, пледы.',
    materialAvailability: 'Широко доступные',
    needlesHooks: 'Крючок',
    stitchesUsed: 'Филейные узоры',
    construction: 'Целиковое или отдельными частями',
    yarnsUsed: 'Тонкие пряжи',
    finishing: 'Скрытые швы',
    difficulty: 2,
  },
  {
    name: 'Фриформ',
    description: 'позволяющая создавать уникальные и нестандартные узоры и текстуры, используя произвольные формы и методы.',
    advantages: 'Позволяет создавать нестандартные и креативные изделия, развивает творческий подход.',
    disadvantages: 'Может быть трудоемким и требовать большого количества времени, отсутствие четких инструкций.',
    application: 'Аксессуары, декоративные элементы, нестандартные изделия.',
    materialAvailability: 'Широко доступные',
    needlesHooks: 'Спицы или крючок',
    stitchesUsed: 'Произвольные узоры',
    construction: 'Целиковое или отдельными частями',
    yarnsUsed: 'Разные пряжи',
    finishing: 'Скрытые или видимые швы',
    difficulty: 3,
  },
  {
    name: 'Энтрелак',
    description: 'создающая узоры с помощью небольших блоков, которые вяжутся отдельно и соединяются между собой.',
    advantages: 'Создает уникальные и структурированные узоры, подходит для различных изделий.',
    disadvantages: 'Может быть сложным для новичков, требует внимательности при соединении блоков.',
    application: 'Одеяла, шарфы, сумки.',
    materialAvailability: 'Широко доступные',
    needlesHooks: 'Спицы',
    stitchesUsed: 'Блоки энтрелак',
    construction: 'Отдельными частями',
    yarnsUsed: 'Разные пряжи',
    finishing: 'Скрытые или видимые швы',
    difficulty: 2,
  },
  {
    name: 'Перуанское брумстик',
    description: 'использование сложных узоров и многослойных текстур для создания выразительных и теплых изделий.',
    advantages: 'Традиционные узоры, высокое тепло и текстура, культурная значимость.',
    disadvantages: 'Может быть сложным для новичков, требует знания традиционных техник и узоров.',
    application: 'Шапки, свитера, одеяла, изделия с традиционными узорами.',
    materialAvailability: 'Широко доступные',
    needlesHooks: 'Спицы или крючок',
    stitchesUsed: 'Перуанские узоры, многослойные текстуры',
    construction: 'Целиковое или отдельными частями',
    yarnsUsed: 'Теплые и плотные пряжи, часто из шерсти альпака',
    finishing: 'Скрытые швы',
    difficulty: 3,
  },
  {
    name: "Fair Isle",
    description:
      "с использованием двух и более цветов пряжи для создания сложных узоров, характерных для региона Фейр-Айленд.",
    advantages: "Уникальные узоры, традиционные техники.",
    disadvantages:
      "Может быть трудным для освоения, требует работы с несколькими цветами.",
    application: "Свитеры, шарфы, перчатки.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы",
    stitchesUsed: "Фейр-Айлендские узоры",
    construction: "Целиковое",
    yarnsUsed: "Разноцветные пряжи",
    finishing: "Видимые швы",
    difficulty: 4,
  },
  {
    name: "Ажурное",
    description:
      "с использованием дырочек и открытых узоров для создания легких и воздушных изделий.",
    advantages: "Элегантный внешний вид, легкость изделия.",
    disadvantages: "Требует точности, может быть менее теплым.",
    application: "Шали, пледы, легкие топы.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы",
    stitchesUsed: "Ажурные петли",
    construction: "Отдельными частями",
    yarnsUsed: "Легкие и тонкие пряжи",
    finishing: "Скрытые швы",
    difficulty: 2,
  },
  {
    name: "Гладкое",
    description:
      "создающая ровное полотно с использованием лицевых и изнаночных петель.",
    advantages: "Простота выполнения, универсальность.",
    disadvantages: "Может быть скучным для опытных вязальщиц, мало текстуры.",
    application: "Базовая одежда, аксессуары.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы",
    stitchesUsed: "Лицевые и изнаночные петли",
    construction: "Целиковое",
    yarnsUsed: "Разные пряжи",
    finishing: "Скрытые швы",
    difficulty: 1,
  },
  {
    name: "Двойное",
    description:
      "создавать двусторонние изделия с разными узорами с обеих сторон.",
    advantages: "Двусторонний эффект, высокая прочность.",
    disadvantages: "Требует определенных навыков, может быть трудоемким.",
    application: "Одеяла, шарфы, пледы.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы",
    stitchesUsed: "Двойные петли, смена узоров",
    construction: "Целиковое",
    yarnsUsed: "Разные пряжи",
    finishing: "Скрытые швы",
    difficulty: 4,
  },
  {
    name: "Диагональное",
    description:
      "при котором узоры и текстуры располагаются по диагонали, создавая интересные формы.",
    advantages:
      "Создает оригинальные формы и узоры, подходит для нестандартных изделий.",
    disadvantages: "Может быть сложным для выполнения, требует точности.",
    application: "Пледы, подушки, одежда.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы или крючок",
    stitchesUsed: "Диагональные узоры, смена направлений",
    construction: "Целиковое или отдельными частями",
    yarnsUsed: "Разные пряжи",
    finishing: "Скрытые швы",
    difficulty: 2,
  },
  {
    name: "Жаккардовое",
    description:
      "использующий несколько цветов пряжи для создания сложных узоров и рисунков.",
    advantages: "Яркие и сложные узоры, большое разнообразие рисунков.",
    disadvantages:
      "Может быть сложно для новичков, требует умения работать с несколькими цветами.",
    application: "Свитеры, пледы, шарфы.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы",
    stitchesUsed: "Жаккардовые петли, смена цветов",
    construction: "Целиковое",
    yarnsUsed: "Разноцветные пряжи",
    finishing: "Видимые швы",
    difficulty: 4,
  },
  {
    name: "Интарсия",
    description:
      "использующая несколько цветов пряжи для создания ярких и детализированных узоров.",
    advantages: "Яркие узоры, возможность создания сложных рисунков.",
    disadvantages:
      "Может быть сложно для новичков, требует управления несколькими цветами.",
    application: "Свитеры, пледы, аксессуары.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы",
    stitchesUsed: "Интарсийные петли, смена цветов",
    construction: "Целиковое",
    yarnsUsed: "Разноцветные пряжи",
    finishing: "Видимые швы",
    difficulty: 4,
  },
  {
    name: "Квадратами бабушки",
    description:
      "Каждый квадрат вяжется отдельно и затем соединяется для формирования окончательного изделия.",
    advantages:
      "Позволяет легко комбинировать различные узоры и цвета, подходит для создания больших изделий из мелких мотивов.",
    disadvantages:
      "Может быть трудоемким из-за необходимости соединения квадратов, требует аккуратности при выполнении швов.",
    application: "Одеяла, пледы, подушки, одежда.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы или крючок",
    stitchesUsed: "Квадратные мотивы, разные узоры",
    construction: "Отдельными частями",
    yarnsUsed: "Разные пряжи",
    finishing: "Скрытые или видимые швы",
    difficulty: 2,
  },
  {
    name: "Косы",
    description: 'создающая узоры в виде переплетающихся "кос" и плетений.',
    advantages: "Эффектные и объемные узоры, добавляют интерес к изделию.",
    disadvantages: "Может быть сложным для новичков, требует точности.",
    application: "Свитеры, шапки, шарфы.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы",
    stitchesUsed: "Косы, плетения",
    construction: "Целиковое",
    yarnsUsed: "Разные пряжи",
    finishing: "Скрытые швы",
    difficulty: 2,
  },
  {
    name: "Круговое",
    description: "при которой изделие создается круговыми рядами без швов.",
    advantages: "Отсутствие швов, удобство для круглых изделий.",
    disadvantages:
      "Может быть сложно для новичков, требует специальных инструментов.",
    application: "Шапки, носки, рукава.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы",
    stitchesUsed: "Разные петли, смена узоров",
    construction: "Целиковое",
    yarnsUsed: "Разные пряжи",
    finishing: "Скрытые швы",
    difficulty: 2,
  },
  {
    name: "Мозаичное",
    description:
      "используются разноцветные пряжи для создания узоров и рисунков.",
    advantages: "Яркие и разнообразные узоры, творческая свобода.",
    disadvantages: "Может быть сложным для начинающих, требует аккуратности.",
    application: "Свитеры, одеяла, носки.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы",
    stitchesUsed: "Мозаичные петли, смена цветов",
    construction: "Целиковое",
    yarnsUsed: "Разноцветные пряжи",
    finishing: "Видимые швы",
    difficulty: 4,
  },
  {
    name: "Огуречное",
    description:
      "использующая особый метод формирования петель для создания плотных и объемных изделий.",
    advantages: "Создает интересную текстуру, подходит для зимней одежды.",
    disadvantages: "Может быть трудно исправить ошибки, требует навыков.",
    application: "Шарфы, шапки, пледы.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы",
    stitchesUsed: "Огуречные петли",
    construction: "Целиковое",
    yarnsUsed: "Средней плотности пряжи",
    finishing: "Скрытые швы",
    difficulty: 2,
  },
  {
    name: "Прямое",
    description: "создающая прямые ряды без изменений направления вязания.",
    advantages: "Простота выполнения, подходит для многих изделий.",
    disadvantages: "Не подходит для создания круглых или сложных форм.",
    application: "Шарфы, свитера, пледы.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы",
    stitchesUsed: "Лицевые и изнаночные петли",
    construction: "Целиковое",
    yarnsUsed: "Разные пряжи",
    finishing: "Скрытые швы",
    difficulty: 1,
  },
  {
    name: "Рельефное",
    description:
      "создающая текстурные узоры с помощью комбинации лицевых и изнаночных петель.",
    advantages: "Создает интересные текстуры, разнообразие узоров.",
    disadvantages:
      "Может быть трудным для освоения, требует внимания к деталям.",
    application: "Пледы, свитера, аксессуары.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы",
    stitchesUsed: "Рельефные петли, выпуклые узоры",
    construction: "Целиковое или отдельными частями",
    yarnsUsed: "Разные пряжи в зависимости от текстуры",
    finishing: "Скрытые швы",
    difficulty: 2,
  },
  {
    name: "Твидом",
    description:
      "создающая текстурное полотно с характерной структурой, имитирующее твид.",
    advantages:
      "Создает интересные текстуры и узоры, подходит для зимней одежды.",
    disadvantages:
      "Может быть сложным для новичков, требует определенной техники.",
    application: "Свитеры, пальто, шарфы.",
    materialAvailability: "Широко доступные",
    needlesHooks: "Спицы",
    stitchesUsed: "Твидовые петли, текстурные узоры",
    construction: "Целиковое",
    yarnsUsed: "Текстурные пряжи",
    finishing: "Скрытые швы",
    difficulty: 2,
  },
  {
    name: "Тунисское",
    description:
      "которая использует длинные крючки и сочетает в себе элементы вязания и вышивания.",
    advantages:
      "Создает плотное и упругое полотно, подходит для различных изделий.",
    disadvantages:
      "Может быть трудным для начинающих, требует специального крючка.",
    application: "Одеяла, пледы, сумки.",
    materialAvailability: "Специальные материалы",
    needlesHooks: "Крючок",
    stitchesUsed: "Тунисские петли",
    construction: "Целиковое",
    yarnsUsed: "Средней плотности пряжи",
    finishing: "Видимые швы",
    difficulty: 2,
  },
];

const KnittingTechniquesList = () => {
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending",
  });

  const sortedData = [...knittingTechniquesData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort("name")}>Название</th>
            <th onClick={() => requestSort("description")}>Описание</th>
            <th onClick={() => requestSort("advantages")}>Преимущества</th>
            <th onClick={() => requestSort("disadvantages")}>Недостатки</th>
            <th onClick={() => requestSort("application")}>Применение</th>
            <th onClick={() => requestSort("materialAvailability")}>
              Доступность по материалам
            </th>
            <th onClick={() => requestSort("needlesHooks")}>
              Спицами и/или крючком
            </th>
            <th onClick={() => requestSort("stitchesUsed")}>
              Петли используемые
            </th>
            <th onClick={() => requestSort("construction")}>
              Целиковое/Отдельными частями
            </th>
            <th onClick={() => requestSort("yarnsUsed")}>Пряжи используемые</th>
            <th onClick={() => requestSort("finishing")}>
              Швы по окончания работы
            </th>
            <th onClick={() => requestSort("difficulty")}>
              Сложность исполнения
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((technique, index) => (
            <tr key={index}>
              <td>{technique.name}</td>
              <td>{technique.description}</td>
              <td>{technique.advantages}</td>
              <td>{technique.disadvantages}</td>
              <td>{technique.application}</td>
              <td>{technique.materialAvailability}</td>
              <td>{technique.needlesHooks}</td>
              <td>{technique.stitchesUsed}</td>
              <td>{technique.construction}</td>
              <td>{technique.yarnsUsed}</td>
              <td>{technique.finishing}</td>
              <td>{technique.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KnittingTechniquesList;
