import React, { useState } from "react";

// способ изготовления (вязное тканное нетканное)
// структура (плоские вязаные флис)
// текстура (ворсовые гладкие текстурированные)

// Обновленный массив данных о тканях с полным набором полей
const fabricData = [
	{
		name: "Крапива",
		description:
			"Ткань из натуральных волокон крапивы, обладающая уникальными свойствами.",
		advantages: "Природная, прочная, дышащая.",
		disadvantages: "Может быть жесткой, требует деликатного ухода.",
		application: "Одежда, домашний текстиль, экологически чистые изделия.",
		weight: "Средний",
		moistureWicking: "Хорошее",
		waterResistance: "Низкая",
		airPermeability: "Высокая",
		chemicalResistance: "Средняя",
		durability: "Средняя",
		availability: "Специализированные магазины тканей и рынки.",
		soundInsulation: "Средняя",
		washingMethod: "Ручная стирка",
		fireResistance: "Низкая",
		density: "Средняя",
		coating: "Нет",
		coatingApplication: "Нет",
		staticElectricityPrevention: "Средняя",
		transparency: "Непрозрачная",
		strength: "Средняя",
		stretchability: "Низкая",
		reflective: "Нет",
		repairDifficulty: "Средняя",
		careDifficulty: "Средняя",
		manufacturingMethod: "Тканное",
		creaseResistance: "Средняя",
		structure: "Плоские",
		texture: "Гладкая",
		heatRetention: "Среднее",
		thickness: "Средняя",
		pattern: "Без узоров",
		layeringLevel: "0",
		shrinkage: "Низкая",
		storageConditions: "Сухое место, избегать влаги.",
		stainResistance: "Средняя",
		uvResistance: "Средняя",
		coldResistance: "Средняя",
	},
	{
		name: "Конопля",
		description: "Ткань из волокон конопли, прочная и экологичная.",
		advantages: "Прочность, дышащая, антисептические свойства.",
		disadvantages: "Может быть жесткой, требует деликатного ухода.",
		application: "Одежда, аксессуары, сумки.",
		weight: "Средний",
		moistureWicking: "Хорошее",
		waterResistance: "Низкая",
		airPermeability: "Высокая",
		chemicalResistance: "Средняя",
		durability: "Высокая",
		availability: "Специализированные магазины тканей и рынки.",
		soundInsulation: "Средняя",
		washingMethod: "Ручная стирка",
		fireResistance: "Средняя",
		density: "Средняя",
		coating: "Нет",
		coatingApplication: "Нет",
		staticElectricityPrevention: "Средняя",
		transparency: "Непрозрачная",
		strength: "Высокая",
		stretchability: "Низкая",
		reflective: "Нет",
		repairDifficulty: "Средняя",
		careDifficulty: "Средняя",
		manufacturingMethod: "Тканное",
		creaseResistance: "Средняя",
		structure: "Плоские",
		texture: "Гладкая",
		heatRetention: "Среднее",
		thickness: "Средняя",
		pattern: "Без узоров",
		layeringLevel: "0",
		shrinkage: "Средняя",
		storageConditions: "Сухое место, избегать влаги.",
		stainResistance: "Средняя",
		uvResistance: "Средняя",
		coldResistance: "Средняя",
	},
	{
		name: "Хлопок",
		description: "Популярная натуральная ткань, мягкая и комфортная.",
		advantages: "Мягкость, дышащая, гипоаллергенная.",
		disadvantages: "Может садиться при стирке, легко мнется.",
		application: "Одежда, постельное белье, полотенца.",
		weight: "Разный",
		moistureWicking: "Хорошее",
		waterResistance: "Низкая",
		airPermeability: "Высокая",
		chemicalResistance: "Средняя",
		durability: "Средняя",
		availability: "Широко доступные",
		soundInsulation: "Средняя",
		washingMethod: "Машинная стирка",
		fireResistance: "Низкая",
		density: "Средняя",
		coating: "Нет",
		coatingApplication: "Нет",
		staticElectricityPrevention: "Низкая",
		transparency: "Непрозрачная",
		strength: "Средняя",
		stretchability: "Средняя",
		reflective: "Нет",
		repairDifficulty: "Низкая",
		careDifficulty: "Низкая",
		manufacturingMethod: "Тканное",
		creaseResistance: "Низкая",
		structure: "Плоские",
		texture: "Гладкая",
		heatRetention: "Среднее",
		thickness: "Средняя",
		pattern: "Разнообразные узоры",
		layeringLevel: "0",
		shrinkage: "Средняя",
		storageConditions: "Хранить в сухом месте.",
		stainResistance: "Средняя",
		uvResistance: "Средняя",
		coldResistance: "Средняя",
	},
	{
		name: "Лен",
		description:
			"Легкая натуральная ткань из льна, известная своей прочностью.",
		advantages: "Прочность, воздухопроницаемость, хорошая терморегуляция.",
		disadvantages: "Мнется, требует особого ухода.",
		application: "Одежда, скатерти, постельное белье.",
		weight: "Средний",
		moistureWicking: "Хорошее",
		waterResistance: "Низкая",
		airPermeability: "Высокая",
		chemicalResistance: "Средняя",
		durability: "Высокая",
		availability: "Широко доступные",
		soundInsulation: "Средняя",
		washingMethod: "Ручная стирка",
		fireResistance: "Средняя",
		density: "Средняя",
		coating: "Нет",
		coatingApplication: "Нет",
		staticElectricityPrevention: "Средняя",
		transparency: "Непрозрачная",
		strength: "Высокая",
		stretchability: "Низкая",
		reflective: "Нет",
		repairDifficulty: "Средняя",
		careDifficulty: "Средняя",
		manufacturingMethod: "Тканное",
		creaseResistance: "Низкая",
		structure: "Плоские",
		texture: "Гладкая",
		heatRetention: "Среднее",
		thickness: "Средняя",
		pattern: "Без узоров",
		layeringLevel: "0",
		shrinkage: "Средняя",
		storageConditions: "Хранить в сухом месте.",
		stainResistance: "Средняя",
		uvResistance: "Средняя",
		coldResistance: "Средняя",
	},
	{
		name: "Шелк",
		description: "Роскошная ткань с гладкой текстурой и блеском.",
		advantages: "Мягкость, блеск, дышащая.",
		disadvantages: "Сложный уход, высокая цена.",
		application: "Одежда, постельное белье, аксессуары.",
		weight: "Легкий",
		moistureWicking: "Среднее",
		waterResistance: "Низкая",
		airPermeability: "Высокая",
		chemicalResistance: "Низкая",
		durability: "Средняя",
		availability: "Широко доступные",
		soundInsulation: "Низкая",
		washingMethod: "Ручная стирка или химчистка",
		fireResistance: "Низкая",
		density: "Низкая",
		coating: "Нет",
		coatingApplication: "Нет",
		staticElectricityPrevention: "Средняя",
		transparency: "Полупрозрачная",
		strength: "Средняя",
		stretchability: "Низкая",
		reflective: "Высокая",
		repairDifficulty: "Высокая",
		careDifficulty: "Высокая",
		manufacturingMethod: "Тканное",
		creaseResistance: "Средняя",
		structure: "Плоские",
		texture: "Гладкая",
		heatRetention: "Низкое",
		thickness: "Тонкая",
		pattern: "Разнообразные узоры",
		layeringLevel: "0",
		shrinkage: "Низкая",
		storageConditions: "Хранить в сухом месте, избегать солнечного света.",
		stainResistance: "Низкая",
		uvResistance: "Низкая",
		coldResistance: "Низкая",
	},
	{
		name: "Полиэстер",
		description: "Синтетическая ткань, устойчивая к сминанию и износу.",
		advantages: "Износостойкость, легкость в уходе, не мнется.",
		disadvantages: "Не дышащая, может вызывать потоотделение.",
		application: "Одежда, спортивная форма, мебель.",
		weight: "Разный",
		moistureWicking: "Среднее",
		waterResistance: "Средняя",
		airPermeability: "Низкая",
		chemicalResistance: "Высокая",
		durability: "Высокая",
		availability: "Широко доступные",
		soundInsulation: "Средняя",
		washingMethod: "Машинная стирка",
		fireResistance: "Средняя",
		density: "Средняя",
		coating: "Нет",
		coatingApplication: "Нет",
		staticElectricityPrevention: "Средняя",
		transparency: "Непрозрачная",
		strength: "Высокая",
		stretchability: "Средняя",
		reflective: "Нет",
		repairDifficulty: "Низкая",
		careDifficulty: "Низкая",
		manufacturingMethod: "Тканное",
		creaseResistance: "Высокая",
		structure: "Плоские",
		texture: "Гладкая",
		heatRetention: "Низкое",
		thickness: "Средняя",
		pattern: "Разнообразные узоры",
		layeringLevel: "0",
		shrinkage: "Низкая",
		storageConditions: "Хранить в сухом месте.",
		stainResistance: "Средняя",
		uvResistance: "Высокая",
		coldResistance: "Средняя",
	},
	{
		name: "Капрон",
		description: "Синтетическая ткань с высокой прочностью и эластичностью.",
		advantages: "Прочность, износостойкость, устойчивость к растяжению.",
		disadvantages: "Может быть жесткой, не дышащая.",
		application: "Одежда, носки, спортивные изделия.",
		weight: "Легкий",
		moistureWicking: "Низкое",
		waterResistance: "Средняя",
		airPermeability: "Низкая",
		chemicalResistance: "Средняя",
		durability: "Высокая",
		availability: "Широко доступные",
		soundInsulation: "Низкая",
		washingMethod: "Машинная стирка",
		fireResistance: "Средняя",
		density: "Средняя",
		coating: "Нет",
		coatingApplication: "Нет",
		staticElectricityPrevention: "Средняя",
		transparency: "Полупрозрачная",
		strength: "Высокая",
		stretchability: "Высокая",
		reflective: "Нет",
		repairDifficulty: "Средняя",
		careDifficulty: "Средняя",
		manufacturingMethod: "Тканное",
		creaseResistance: "Высокая",
		structure: "Плоские",
		texture: "Гладкая",
		heatRetention: "Низкое",
		thickness: "Тонкая",
		pattern: "Без узоров",
		layeringLevel: "0",
		shrinkage: "Низкая",
		storageConditions: "Хранить в сухом месте.",
		stainResistance: "Средняя",
		uvResistance: "Средняя",
		coldResistance: "Низкая",
	},
	{
		name: "Нейлон",
		description: "Синтетическая ткань с отличной прочностью и эластичностью.",
		advantages: "Легкость, прочность, устойчивость к износу.",
		disadvantages:
			"Может быть не дышащим, склонен к образованию статического электричества.",
		application: "Одежда, сумки, спортивная форма.",
		weight: "Легкий",
		moistureWicking: "Среднее",
		waterResistance: "Средняя",
		airPermeability: "Низкая",
		chemicalResistance: "Средняя",
		durability: "Высокая",
		availability: "Широко доступные",
		soundInsulation: "Низкая",
		washingMethod: "Машинная стирка",
		fireResistance: "Низкая",
		density: "Средняя",
		coating: "Нет",
		coatingApplication: "Нет",
		staticElectricityPrevention: "Низкая",
		transparency: "Непрозрачная",
		strength: "Высокая",
		stretchability: "Высокая",
		reflective: "Нет",
		repairDifficulty: "Средняя",
		careDifficulty: "Средняя",
		manufacturingMethod: "Тканное",
		creaseResistance: "Высокая",
		structure: "Плоские",
		texture: "Гладкая",
		heatRetention: "Среднее",
		thickness: "Тонкая",
		pattern: "Разнообразные узоры",
		layeringLevel: "0",
		shrinkage: "Низкая",
		storageConditions: "Хранить в сухом месте.",
		stainResistance: "Средняя",
		uvResistance: "Средняя",
		coldResistance: "Средняя",
	},
	{
		name: "Бязь",
		description:
			"Натуральная ткань с плотным переплетением волокон, используется в постельном белье.",
		advantages: "Долговечность, гипоаллергенность, хорошее удержание формы.",
		disadvantages: "Мнется, может быть жесткой.",
		application: "Постельное белье, рабочая одежда.",
		weight: "Средний",
		moistureWicking: "Среднее",
		waterResistance: "Низкая",
		airPermeability: "Средняя",
		chemicalResistance: "Средняя",
		durability: "Высокая",
		availability: "Широко доступные",
		soundInsulation: "Средняя",
		washingMethod: "Машинная стирка",
		fireResistance: "Средняя",
		density: "Средняя",
		coating: "Нет",
		coatingApplication: "Нет",
		staticElectricityPrevention: "Средняя",
		transparency: "Непрозрачная",
		strength: "Средняя",
		stretchability: "Низкая",
		reflective: "Нет",
		repairDifficulty: "Низкая",
		careDifficulty: "Средняя",
		manufacturingMethod: "Тканное",
		creaseResistance: "Низкая",
		structure: "Плоские",
		texture: "Гладкая",
		heatRetention: "Среднее",
		thickness: "Средняя",
		pattern: "Разнообразные узоры",
		layeringLevel: "0",
		shrinkage: "Средняя",
		storageConditions: "Хранить в сухом месте.",
		stainResistance: "Средняя",
		uvResistance: "Средняя",
		coldResistance: "Средняя",
	},
	{
		name: "Деним",
		description:
			"Ткань с плотным переплетением, известная своей прочностью и долговечностью.",
		advantages: "Прочность, долговечность, классический вид.",
		disadvantages: "Может быть жесткой, требует стирки перед использованием.",
		application: "Одежда, джинсы, куртки.",
		weight: "Средний",
		moistureWicking: "Среднее",
		waterResistance: "Средняя",
		airPermeability: "Средняя",
		chemicalResistance: "Средняя",
		durability: "Высокая",
		availability: "Широко доступные",
		soundInsulation: "Средняя",
		washingMethod: "Машинная стирка",
		fireResistance: "Средняя",
		density: "Средняя",
		coating: "Нет",
		coatingApplication: "Нет",
		staticElectricityPrevention: "Средняя",
		transparency: "Непрозрачная",
		strength: "Высокая",
		stretchability: "Низкая",
		reflective: "Нет",
		repairDifficulty: "Средняя",
		careDifficulty: "Средняя",
		manufacturingMethod: "Тканное",
		creaseResistance: "Средняя",
		structure: "Плоские",
		texture: "Грубая",
		heatRetention: "Среднее",
		thickness: "Средняя",
		pattern: "Без узоров",
		layeringLevel: "0",
		shrinkage: "Низкая",
		storageConditions: "Хранить в сухом месте.",
		stainResistance: "Средняя",
		uvResistance: "Средняя",
		coldResistance: "Средняя",
	},
	{
		name: "Трикотаж",
		description:
			"Эластичная ткань с переплетением петель, обладает высокой растяжимостью.",
		advantages: "Эластичность, комфорт, дышащая.",
		disadvantages:
			"Может растягиваться со временем, требует аккуратного ухода.",
		application: "Одежда, спортивная форма, нижнее белье.",
		weight: "Разный",
		moistureWicking: "Хорошее",
		waterResistance: "Низкая",
		airPermeability: "Высокая",
		chemicalResistance: "Средняя",
		durability: "Средняя",
		availability: "Широко доступные",
		soundInsulation: "Средняя",
		washingMethod: "Машинная стирка",
		fireResistance: "Средняя",
		density: "Средняя",
		coating: "Нет",
		coatingApplication: "Нет",
		staticElectricityPrevention: "Средняя",
		transparency: "Непрозрачная",
		strength: "Средняя",
		stretchability: "Высокая",
		reflective: "Нет",
		repairDifficulty: "Средняя",
		careDifficulty: "Средняя",
		manufacturingMethod: "Вязаное",
		creaseResistance: "Средняя",
		structure: "Вязаные",
		texture: "Гладкая",
		heatRetention: "Среднее",
		thickness: "Разная",
		pattern: "Разнообразные узоры",
		layeringLevel: "0",
		shrinkage: "Средняя",
		storageConditions: "Хранить в сухом месте.",
		stainResistance: "Средняя",
		uvResistance: "Средняя",
		coldResistance: "Средняя",
	},
	{
		name: "Оксфорд",
		description:
			"Плотная ткань с характерным переплетением, часто используется для сорочек.",
		advantages: "Прочность, классический вид, не мнется.",
		disadvantages: "Может быть жесткой, требует стирки перед использованием.",
		application: "Одежда, деловые рубашки, куртки.",
		weight: "Средний",
		moistureWicking: "Среднее",
		waterResistance: "Низкая",
		airPermeability: "Средняя",
		chemicalResistance: "Средняя",
		durability: "Высокая",
		availability: "Широко доступные",
		soundInsulation: "Средняя",
		washingMethod: "Машинная стирка",
		fireResistance: "Средняя",
		density: "Средняя",
		coating: "Нет",
		coatingApplication: "Нет",
		staticElectricityPrevention: "Средняя",
		transparency: "Непрозрачная",
		strength: "Высокая",
		stretchability: "Низкая",
		reflective: "Нет",
		repairDifficulty: "Средняя",
		careDifficulty: "Средняя",
		manufacturingMethod: "Тканное",
		creaseResistance: "Высокая",
		structure: "Плоские",
		texture: "Гладкая",
		heatRetention: "Среднее",
		thickness: "Средняя",
		pattern: "Без узоров",
		layeringLevel: "0",
		shrinkage: "Низкая",
		storageConditions: "Хранить в сухом месте.",
		stainResistance: "Средняя",
		uvResistance: "Средняя",
		coldResistance: "Средняя",
	},
];

const FabricList = () => {
	const [sortConfig, setSortConfig] = useState({ key: "", ascending: true });

	const handleSort = (key) => {
		const isAscending = sortConfig.key === key ? !sortConfig.ascending : true;
		setSortConfig({ key, ascending: isAscending });
	};

	const sortedData = React.useMemo(() => {
		if (!sortConfig.key) return fabricData;
		return [...fabricData].sort((a, b) => {
			if (a[sortConfig.key] < b[sortConfig.key])
				return sortConfig.ascending ? -1 : 1;
			if (a[sortConfig.key] > b[sortConfig.key])
				return sortConfig.ascending ? 1 : -1;
			return 0;
		});
	}, [fabricData, sortConfig]);

	return (
		<div>
			<h1>Ткани</h1>
			<table>
				<thead>
					<tr>
						<th onClick={() => handleSort("name")}>Название</th>
						<th onClick={() => handleSort("description")}>Описание</th>
						<th onClick={() => handleSort("advantages")}>Преимущества</th>
						<th onClick={() => handleSort("disadvantages")}>Недостатки</th>
						<th onClick={() => handleSort("application")}>Применение</th>
						<th onClick={() => handleSort("weight")}>Вес</th>
						<th onClick={() => handleSort("moistureWicking")}>
							Влагоотводящие
						</th>
						<th onClick={() => handleSort("waterResistance")}>Водостойкость</th>
						<th onClick={() => handleSort("airPermeability")}>
							Воздухопроницаемость
						</th>
						<th onClick={() => handleSort("chemicalResistance")}>
							Выдерживают воздействие активных химических веществ
						</th>
						<th onClick={() => handleSort("durability")}>Долговечность</th>
						<th onClick={() => handleSort("availability")}>Доступность</th>
						<th onClick={() => handleSort("soundInsulation")}>
							Звукоизоляционные
						</th>
						<th onClick={() => handleSort("washingMethod")}>
							Методы стирки и чистки
						</th>
						<th onClick={() => handleSort("fireResistance")}>Огнестойкость</th>
						<th onClick={() => handleSort("density")}>Плотность</th>
						<th onClick={() => handleSort("coating")}>Покрытие</th>
						<th onClick={() => handleSort("coatingApplication")}>
							Покрытие пропитка (если есть)
						</th>
						<th onClick={() => handleSort("staticElectricityPrevention")}>
							Предотвращают накопление статического электричества
						</th>
						<th onClick={() => handleSort("transparency")}>Прозрачность</th>
						<th onClick={() => handleSort("strength")}>Прочность</th>
						<th onClick={() => handleSort("stretchability")}>
							Растяжимость эластичность
						</th>
						<th onClick={() => handleSort("reflective")}>Светоотражающие</th>
						<th onClick={() => handleSort("repairDifficulty")}>
							Сложность в ремонте
						</th>
						<th onClick={() => handleSort("careDifficulty")}>
							Сложность в уходе
						</th>
						<th onClick={() => handleSort("manufacturingMethod")}>
							Способ изготовления
						</th>
						<th onClick={() => handleSort("creaseResistance")}>
							Стойкость к складкам
						</th>
						<th onClick={() => handleSort("structure")}>Структура</th>
						<th onClick={() => handleSort("texture")}>Текстура</th>
						<th onClick={() => handleSort("heatRetention")}>Теплоудержание</th>
						<th onClick={() => handleSort("thickness")}>Толщина</th>
						<th onClick={() => handleSort("pattern")}>Узорчатость</th>
						<th onClick={() => handleSort("layeringLevel")}>Слоистость</th>
						<th onClick={() => handleSort("shrinkage")}>Усадка</th>
						<th onClick={() => handleSort("storageConditions")}>
							Условия хранения
						</th>
						<th onClick={() => handleSort("stainResistance")}>
							Устойчивость к загрязнениям
						</th>
						<th onClick={() => handleSort("uvResistance")}>
							Устойчивые к ультрафиолету
						</th>
						<th onClick={() => handleSort("coldResistance")}>
							Холодостойкость
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
							<td>{item.application}</td>
							<td>{item.weight}</td>
							<td>{item.moistureWicking}</td>
							<td>{item.waterResistance}</td>
							<td>{item.airPermeability}</td>
							<td>{item.chemicalResistance}</td>
							<td>{item.durability}</td>
							<td>{item.availability}</td>
							<td>{item.soundInsulation}</td>
							<td>{item.washingMethod}</td>
							<td>{item.fireResistance}</td>
							<td>{item.density}</td>
							<td>{item.coating}</td>
							<td>{item.coatingApplication}</td>
							<td>{item.staticElectricityPrevention}</td>
							<td>{item.transparency}</td>
							<td>{item.strength}</td>
							<td>{item.stretchability}</td>
							<td>{item.reflective}</td>
							<td>{item.repairDifficulty}</td>
							<td>{item.careDifficulty}</td>
							<td>{item.manufacturingMethod}</td>
							<td>{item.creaseResistance}</td>
							<td>{item.structure}</td>
							<td>{item.texture}</td>
							<td>{item.heatRetention}</td>
							<td>{item.thickness}</td>
							<td>{item.pattern}</td>
							<td>{item.layeringLevel}</td>
							<td>{item.shrinkage}</td>
							<td>{item.storageConditions}</td>
							<td>{item.stainResistance}</td>
							<td>{item.uvResistance}</td>
							<td>{item.coldResistance}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default FabricList;
