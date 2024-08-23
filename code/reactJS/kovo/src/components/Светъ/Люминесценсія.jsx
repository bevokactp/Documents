import React, { useState } from "react";

const luminescenceData = [
  {
    name: "Авантюресценция",
    description:
      "материал имеет блестящие вкрапления, создающие эффект мерцания. Обычно наблюдается в минералах, таких как авантюрин.",
    advantages: [
      "Создает привлекательный визуальный эффект мерцания",
      "Не требует сложного оборудования",
    ],
    disadvantages: [
      "Мерцание может быть неравномерным",
      "Ограниченная область применения",
    ],
    application: ["Ювелирные изделия", "Декоративные элементы"],
    availability: 3,
    qualityAndReliability: 3,
    complexity: 2,
    lifetime: 10,
    components: ["Авантюрины", "Флюоресцентные минералы"],
    sensitivity: "Средняя",
    emissionSpectrum: "Узкий",
    mechanism: "Дисперсия и рассеяние света через вкрапления",
    intensity: "Средняя",
    excitationEnergyRange: "Узкий",
    emissionEnergyRange: "Узкий",
    stability: "Высокая",
    durability: "Высокая",
    excitationMethods: ["Прямое освещение"],
    radiationType: "Видимое свечение с эффектом блесток",
    duration: "Постоянно",
  },
  {
    name: "Биолюминесценция",
    description: "в живых организмах благодаря биохимическим реакциям.",
    advantages: ["Натуральное свечение, не требует внешних источников света."],
    disadvantages: ["Ограниченная яркость, чувствительность к условиям среды."],
    application: ["Исследования в экологии", "Биомедицина"],
    availability: 3,
    qualityAndReliability: 4,
    complexity: 5,
    lifetime: 1,
    components: ["Биохимические вещества", "Ферменты"],
    sensitivity: "Высокая",
    emissionSpectrum: "Узкий",
    mechanism: "Биохимическая реакция",
    intensity: "Низкая",
    excitationEnergyRange: "Широкий",
    emissionEnergyRange: "Широкий",
    stability: "Средняя",
    durability: "Средняя",
    excitationMethods: ["Биохимическая реакция"],
    radiationType: "Ультрафиолетовое",
    duration: "От мгновений до нескольких часов",
  },
  {
    name: "Кандолюминесценция",
    description:
      "при приложении электрического тока к катоду в вакуумной трубке.",
    advantages: ["Высокая яркость, стабильное свечение."],
    disadvantages: ["Необходима сложная аппаратура, высокая цена."],
    application: ["Дисплеи старого типа", "Научные исследования"],
    availability: 2,
    qualityAndReliability: 3,
    complexity: 4,
    lifetime: 2,
    components: ["Катод", "Вакуумная трубка"],
    sensitivity: "Средняя",
    emissionSpectrum: "Широкий",
    mechanism: "Электрический ток",
    intensity: "Высокая",
    excitationEnergyRange: "Узкий",
    emissionEnergyRange: "Широкий",
    stability: "Высокая",
    durability: "Средняя",
    excitationMethods: ["Электрический ток"],
    radiationType: "Видимое",
    duration: "До нескольких часов",
  },
  {
    name: "Катодолюминесценция",
    description:
      "при воздействии электронного пучка на люминесцентный материал.",
    advantages: ["Высокое качество изображения, высокая яркость."],
    disadvantages: ["Высокая стоимость, необходимость вакуумной среды."],
    application: ["Электронные приборы", "Кинескопы"],
    availability: 3,
    qualityAndReliability: 4,
    complexity: 5,
    lifetime: 3,
    components: ["Люминесцентный материал", "Электронная пушка"],
    sensitivity: "Средняя",
    emissionSpectrum: "Широкий",
    mechanism: "Электронный пучок",
    intensity: "Высокая",
    excitationEnergyRange: "Средний",
    emissionEnergyRange: "Широкий",
    stability: "Высокая",
    durability: "Средняя",
    excitationMethods: ["Электронный пучок"],
    radiationType: "Видимое",
    duration: "Несколько минут до нескольких часов",
  },
  {
    name: "Опалесценция",
    description:
      "материал излучает свет, создавая мерцание и переливы (в минералах или искусственных материалах).",
    advantages: [
      "Эстетически привлекательное мерцание",
      "Не требует внешних источников питания",
    ],
    disadvantages: [
      "Ограниченная область применения",
      "Свечение может быть неустойчивым",
    ],
    application: ["Декоративные изделия", "Ювелирные изделия"],
    availability: 4,
    qualityAndReliability: 3,
    complexity: 3,
    lifetime: 10,
    components: ["Опалы", "Флюоресцентные материалы"],
    sensitivity: "Средняя",
    emissionSpectrum: "Широкий",
    mechanism: "Рассеяние и интерференция света",
    intensity: "Низкая до средней",
    excitationEnergyRange: "Широкий",
    emissionEnergyRange: "Широкий",
    stability: "Средняя",
    durability: "Высокая",
    excitationMethods: ["Прямое освещение"],
    radiationType: "Видимое свечение с эффектом перелива",
    duration: "Несколько минут до длительного времени",
  },
  {
    name: "Радиолюминесценция",
    description: "при воздействии радиации на люминесцентный материал.",
    advantages: ["Высокая чувствительность к радиации, хорошее разрешение."],
    disadvantages: ["Необходима защита от радиации, высокая стоимость."],
    application: ["Детекторы радиации", "Научные эксперименты"],
    availability: 2,
    qualityAndReliability: 3,
    complexity: 5,
    lifetime: 5,
    components: ["Люминесцентный материал", "Детектор радиации"],
    sensitivity: "Высокая",
    emissionSpectrum: "Широкий",
    mechanism: "Радиация",
    intensity: "Средняя",
    excitationEnergyRange: "Средний",
    emissionEnergyRange: "Широкий",
    stability: "Высокая",
    durability: "Высокая",
    excitationMethods: ["Радиация"],
    radiationType: "Разное",
    duration: "От минут до нескольких часов",
  },
  {
    name: "Рентгенолюминесценция",
    description:
      "при воздействии рентгеновских лучей на люминесцентные материалы.",
    advantages: ["Высокая чувствительность к рентгеновскому излучению."],
    disadvantages: ["Необходимость защиты от рентгеновского излучения."],
    application: ["Медицинская диагностика", "Научные исследования"],
    availability: 3,
    qualityAndReliability: 4,
    complexity: 5,
    lifetime: 5,
    components: ["Рентгеновские детекторы"],
    sensitivity: "Высокая",
    emissionSpectrum: "Широкий",
    mechanism: "Рентгеновское излучение",
    intensity: "Средняя",
    excitationEnergyRange: "Высокий",
    emissionEnergyRange: "Широкий",
    stability: "Высокая",
    durability: "Высокая",
    excitationMethods: ["Рентгеновское излучение"],
    radiationType: "Рентгеновское",
    duration: "От минут до часов",
  },
  {
    name: "Сонолюминесценция",
    description: "в пузырьках в жидкости при звуковом возбуждении.",
    advantages: [
      "Уникальное явление, может быть использовано для исследований.",
    ],
    disadvantages: ["Неустойчивое свечение, сложность в управлении."],
    application: ["Научные исследования"],
    availability: 1,
    qualityAndReliability: 2,
    complexity: 4,
    lifetime: 1,
    components: ["Жидкость", "Акустические волны"],
    sensitivity: "Средняя",
    emissionSpectrum: "Узкий",
    mechanism: "Акустическое возбуждение",
    intensity: "Низкая",
    excitationEnergyRange: "Низкий",
    emissionEnergyRange: "Низкий",
    stability: "Низкая",
    durability: "Низкая",
    excitationMethods: ["Акустические волны"],
    radiationType: "Ультрафиолетовое",
    duration: "Несколько минут",
  },
  {
    name: "Сцинтилляция",
    description: "при взаимодействии ионизирующего излучения с сцинтиллятором.",
    advantages: ["Высокая чувствительность, хорошее разрешение."],
    disadvantages: ["Необходимость сложного оборудования для детектирования."],
    application: ["Детекторы радиации", "Медицинские исследования"],
    availability: 4,
    qualityAndReliability: 4,
    complexity: 4,
    lifetime: 5,
    components: ["Сцинтиллятор"],
    sensitivity: "Высокая",
    emissionSpectrum: "Широкий",
    mechanism: "Ионизирующее излучение",
    intensity: "Средняя",
    excitationEnergyRange: "Средний",
    emissionEnergyRange: "Широкий",
    stability: "Высокая",
    durability: "Высокая",
    excitationMethods: ["Ионизирующее излучение"],
    radiationType: "Видимое",
    duration: "От минут до часов",
  },
  {
    name: "Термолюминесценция",
    description: "при разогреве материала, ранее подвергавшегося радиации.",
	advantages: [
		"Используется для датировки и определения уровня радиации",
		"Высокая чувствительность",
	  ],
	  disadvantages: [
		"Необходимость сложного оборудования",
		"Зависимость от условий измерений",
	  ],
	  application: [
		"Археологическая и геологическая датировка",
		"Определение уровня радиоактивности",
	  ],
    availability: 3,
    qualityAndReliability: 4,
    complexity: 4,
    lifetime: 5,
    components: ["Люминесцентные минералы", "Термометры"],
    sensitivity: "Средняя",
    emissionSpectrum: "Широкий",
    mechanism: "Тепловое возбуждение",
    intensity: "Средняя",
    excitationEnergyRange: "Средний",
    emissionEnergyRange: "Широкий",
    stability: "Высокая",
    durability: "Высокая",
    excitationMethods: ["Тепловое возбуждение"],
    radiationType: "Разное",
    duration: "От минут до часов",
  },
  {
    name: "Триболюминесценция",
    description: "при трении, ударе или разрыве материала.",
    advantages: ["Простота применения, не требует внешних источников энергии."],
    disadvantages: ["Неустойчивое свечение, трудности с контролем."],
    application: ["Исследования материалов", "Безопасные маркеры"],
    availability: 4,
    qualityAndReliability: 3,
    complexity: 2,
    lifetime: 1,
    components: ["Трибоэлектрические материалы"],
    sensitivity: "Низкая",
    emissionSpectrum: "Узкий",
    mechanism: "Механическое возбуждение",
    intensity: "Низкая",
    excitationEnergyRange: "Низкий",
    emissionEnergyRange: "Узкий",
    stability: "Средняя",
    durability: "Средняя",
    excitationMethods: ["Механическое воздействие"],
    radiationType: "Видимое",
    duration: "Несколько минут",
  },
  {
    name: "Флуоресценция",
    description: "при поглощении света и его немедленном испускании.",
    advantages: ["Высокая чувствительность, доступность материалов."],
    disadvantages: [
      "Короткое время свечения, чувствительность к внешним факторам.",
    ],
    application: ["Биология", "Физика", "Медицина"],
    availability: 5,
    qualityAndReliability: 5,
    complexity: 3,
    lifetime: 1,
    components: ["Флуоресцентные красители", "Лампы"],
    sensitivity: "Высокая",
    emissionSpectrum: "Узкий",
    mechanism: "Флуоресцентное возбуждение",
    intensity: "Средняя",
    excitationEnergyRange: "Узкий",
    emissionEnergyRange: "Узкий",
    stability: "Средняя",
    durability: "Средняя",
    excitationMethods: ["Световое возбуждение"],
    radiationType: "Видимое",
    duration: "Мгновения до нескольких минут",
  },
  {
    name: "Фосфоресценция",
    description:
      "Свечение, продолжающееся после прекращения источника возбуждения.",
    advantages: ["Долгосрочное свечение, широкий спектр применения."],
    disadvantages: [
      "Нуждается в длительном времени для полного свечения, чувствительность к свету.",
    ],
    application: ["Светящиеся в темноте материалы", "Этикетки"],
    availability: 4,
    qualityAndReliability: 4,
    complexity: 3,
    lifetime: 5,
    components: ["Фосфоресцентные материалы"],
    sensitivity: "Средняя",
    emissionSpectrum: "Широкий",
    mechanism: "Фосфоресцентное возбуждение",
    intensity: "Средняя",
    excitationEnergyRange: "Широкий",
    emissionEnergyRange: "Широкий",
    stability: "Высокая",
    durability: "Высокая",
    excitationMethods: ["Световое возбуждение"],
    radiationType: "Видимое",
    duration: "От минут до часов",
  },
  {
    name: "Фотолюминесценция",
    description:
      "при поглощении света и его испускании в другой спектральной области.",
    advantages: ["Высокая чувствительность, простота использования."],
    disadvantages: ["Зависимость от условий окружающей среды."],
    application: ["Оптические устройства", "Анализаторы"],
    availability: 5,
    qualityAndReliability: 5,
    complexity: 2,
    lifetime: 2,
    components: ["Люминесцентные вещества"],
    sensitivity: "Высокая",
    emissionSpectrum: "Узкий",
    mechanism: "Фотолюминесцентное возбуждение",
    intensity: "Средняя",
    excitationEnergyRange: "Широкий",
    emissionEnergyRange: "Широкий",
    stability: "Средняя",
    durability: "Средняя",
    excitationMethods: ["Световое возбуждение"],
    radiationType: "Видимое и ультрафиолетовое",
    duration: "Мгновения до нескольких минут",
  },
  {
    name: "Хемилюминесценция",
    description: "в результате химических реакций.",
    advantages: [
      "Не требует внешних источников света, высокая чувствительность.",
    ],
    disadvantages: [
      "Зависимость от концентрации реагентов, ограниченное время свечения.",
    ],
    application: ["Химические анализаторы", "Медицинские тесты"],
    availability: 4,
    qualityAndReliability: 4,
    complexity: 3,
    lifetime: 1,
    components: ["Химические реагенты"],
    sensitivity: "Высокая",
    emissionSpectrum: "Широкий",
    mechanism: "Химическое возбуждение",
    intensity: "Средняя",
    excitationEnergyRange: "Широкий",
    emissionEnergyRange: "Широкий",
    stability: "Средняя",
    durability: "Средняя",
    excitationMethods: ["Химическая реакция"],
    radiationType: "Разное",
    duration: "От секунд до минут",
  },
  {
    name: "Черенковское излучение",
    description: "при движении заряженных частиц быстрее света в данной среде.",
    advantages: [
      "Используется для детектирования высокоэнергетических частиц.",
    ],
    disadvantages: [
      "Ограниченное применение, необходимость специальных условий.",
    ],
    application: ["Физика частиц", "Астрономия"],
    availability: 2,
    qualityAndReliability: 4,
    complexity: 5,
    lifetime: 5,
    components: ["Оптические детекторы"],
    sensitivity: "Высокая",
    emissionSpectrum: "Ультрафиолетовое",
    mechanism: "Релятивистское движение частиц",
    intensity: "Высокая",
    excitationEnergyRange: "Высокий",
    emissionEnergyRange: "Ультрафиолетовое",
    stability: "Высокая",
    durability: "Высокая",
    excitationMethods: ["Движение частиц"],
    radiationType: "Ультрафиолетовое",
    duration: "Мгновения до минут",
  },
  {
    name: "Электролюминесценция",
    description:
      "при приложении электрического поля к люминесцентному материалу.",
    advantages: ["Высокая яркость, долговечность."],
    disadvantages: ["Необходимость точного управления электрическим полем."],
    application: ["Светодиоды", "Дисплеи"],
    availability: 5,
    qualityAndReliability: 5,
    complexity: 3,
    lifetime: 5,
    components: ["Полупроводниковые материалы"],
    sensitivity: "Средняя",
    emissionSpectrum: "Широкий",
    mechanism: "Электрическое поле",
    intensity: "Высокая",
    excitationEnergyRange: "Широкий",
    emissionEnergyRange: "Широкий",
    stability: "Высокая",
    durability: "Высокая",
    excitationMethods: ["Электрическое поле"],
    radiationType: "Видимое",
    duration: "Долговечное",
  },
];
const sortByKey = (array, key, asc = true) => {
  return array.sort((a, b) => {
    if (a[key] < b[key]) return asc ? -1 : 1;
    if (a[key] > b[key]) return asc ? 1 : -1;
    return 0;
  });
};

const LuminescenceList = () => {
  const [data, setData] = useState(luminescenceData);
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending",
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    setData(sortByKey(luminescenceData, key, direction === "ascending"));
  };

  const getClassNamesFor = (name) => {
    if (sortConfig.key === name) {
      return sortConfig.direction === "ascending" ? "sort-asc" : "sort-desc";
    }
    return "";
  };

  return (
    <div>
      <h1>Типы люминесценции</h1>
      <table>
        <thead>
          <tr>
            <th
              onClick={() => requestSort("name")}
              className={getClassNamesFor("name")}
            >
              Название
            </th>
            <th
              onClick={() => requestSort("description")}
              className={getClassNamesFor("description")}
            >
              Описание
            </th>
            <th
              onClick={() => requestSort("advantages")}
              className={getClassNamesFor("advantages")}
            >
              Преимущества
            </th>
            <th
              onClick={() => requestSort("disadvantages")}
              className={getClassNamesFor("disadvantages")}
            >
              Недостатки
            </th>
            <th
              onClick={() => requestSort("application")}
              className={getClassNamesFor("application")}
            >
              Применение
            </th>
            <th
              onClick={() => requestSort("availability")}
              className={getClassNamesFor("availability")}
            >
              Доступность (1-5)
            </th>
            <th
              onClick={() => requestSort("qualityAndReliability")}
              className={getClassNamesFor("qualityAndReliability")}
            >
              Качество и надежность (1-5)
            </th>
            <th
              onClick={() => requestSort("complexity")}
              className={getClassNamesFor("complexity")}
            >
              Сложность изготовления
            </th>
            <th
              onClick={() => requestSort("lifetime")}
              className={getClassNamesFor("lifetime")}
            >
              Срок службы (лет)
            </th>
            <th
              onClick={() => requestSort("components")}
              className={getClassNamesFor("components")}
            >
              Компоненты изготовления
            </th>
            <th
              onClick={() => requestSort("sensitivity")}
              className={getClassNamesFor("sensitivity")}
            >
              Чувствительность
            </th>
            <th
              onClick={() => requestSort("emissionSpectrum")}
              className={getClassNamesFor("emissionSpectrum")}
            >
              Спектр излучения
            </th>
            <th
              onClick={() => requestSort("mechanism")}
              className={getClassNamesFor("mechanism")}
            >
              Механизм
            </th>
            <th
              onClick={() => requestSort("intensity")}
              className={getClassNamesFor("intensity")}
            >
              Интенсивность
            </th>
            <th
              onClick={() => requestSort("excitationEnergyRange")}
              className={getClassNamesFor("excitationEnergyRange")}
            >
              Энергетический диапазон возбуждения
            </th>
            <th
              onClick={() => requestSort("emissionEnergyRange")}
              className={getClassNamesFor("emissionEnergyRange")}
            >
              Энергетический диапазон эмиссии
            </th>
            <th
              onClick={() => requestSort("stability")}
              className={getClassNamesFor("stability")}
            >
              Стабильность
            </th>
            <th
              onClick={() => requestSort("durability")}
              className={getClassNamesFor("durability")}
            >
              Долговечность
            </th>
            <th
              onClick={() => requestSort("excitationMethods")}
              className={getClassNamesFor("excitationMethods")}
            >
              Способы возбуждения
            </th>
            <th
              onClick={() => requestSort("radiationType")}
              className={getClassNamesFor("radiationType")}
            >
              Характер излучения
            </th>
            <th
              onClick={() => requestSort("duration")}
              className={getClassNamesFor("duration")}
            >
              Продолжительность (мин)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.advantages.join(", ")}</td>
              <td>{item.disadvantages.join(", ")}</td>
              <td>{item.application.join(", ")}</td>
              <td>{item.availability}</td>
              <td>{item.qualityAndReliability}</td>
              <td>{item.complexity}</td>
              <td>{item.lifetime}</td>
              <td>{item.components.join(", ")}</td>
              <td>{item.sensitivity}</td>
              <td>{item.emissionSpectrum}</td>
              <td>{item.mechanism}</td>
              <td>{item.intensity}</td>
              <td>{item.excitationEnergyRange}</td>
              <td>{item.emissionEnergyRange}</td>
              <td>{item.stability}</td>
              <td>{item.durability}</td>
              <td>{item.excitationMethods.join(", ")}</td>
              <td>{item.radiationType}</td>
              <td>{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LuminescenceList;
