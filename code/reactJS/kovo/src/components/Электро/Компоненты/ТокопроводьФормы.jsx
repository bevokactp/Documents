import React, { useState } from "react";

const conductorFormsData = [
	{
		name: "Сферический Соленоид",
		description:
			"Токопроводник в форме сферического соленоида, который создает магнитное поле с фокусированием на центр.",
		advantages: ["Компактный размер", "Высокая магнитная проницаемость"],
		disadvantages: ["Сложность изготовления", "Ограниченные применения"],
		application: ["Электромагнитные устройства", "Медицинские аппараты"],
		availability: 3,
		qualityAndReliability: 4,
		manufacturingComplexity: 4,
		lifespan: 15,
		components: ["Проводник", "Изоляция", "Ферритовые материалы"],
		shape: "Сферический Соленоид",
		dimensions: "Радиус 5 см",
		orientation: "Наклонная",
		material: "Медь, феррит",
		windingDensity: "Средняя",
		turnsNumber: 100,
		wireThickness: "0.5 мм",
		electricalResistance: "0.02 Ω",
		inductance: "0.5 H",
		capacitance: "N/A",
		frequencyCharacteristic: "Средний диапазон",
		electromagneticField: "Сферическое распределение",
		currentDirection: "Переменный",
		temperatureCharacteristics: "Устойчивость до 80°C",
		surfaceArea: "0.1 м²",
		weight: "200 г",
		stiffness: "Средняя",
		conductivity: "Высокая",
		thermalExpansionCoefficient: "16 x 10^-6 /°C",
		thermalConductivity: "400 W/(m·K)",
		corrosionResistance: "Средняя",
		insulation: "Пластик",
		skinEffect: "Средний",
		magneticPermeability: "Высокая",
		electromagneticCompatibility: "Средняя",
		qFactor: "Средний",
		curvatureRadius: "N/A",
		shieldingCapability: "Средняя",
		tensileStrength: "70 MPa",
		maxPower: "500 Вт",
	},
	{
		name: "Цилиндр",
		description:
			"Токопроводник в форме цилиндра, используемый для создания магнитных полей или в качестве проводника.",
		advantages: ["Простота изготовления", "Широкое применение"],
		disadvantages: ["Ограниченная гибкость", "Сложность в интеграции"],
		application: ["Электрические трансформаторы", "Магнитные катушки"],
		availability: 4,
		qualityAndReliability: 4,
		manufacturingComplexity: 2,
		lifespan: 20,
		components: ["Проводник", "Изоляция"],
		shape: "Цилиндр",
		dimensions: "Диаметр 10 см, высота 20 см",
		orientation: "Вертикальная",
		material: "Медь",
		windingDensity: "Средняя",
		turnsNumber: "N/A",
		wireThickness: "1 мм",
		electricalResistance: "0.01 Ω/м",
		inductance: "N/A",
		capacitance: "N/A",
		frequencyCharacteristic: "N/A",
		electromagneticField: "Цилиндрическое распределение",
		currentDirection: "Переменный",
		temperatureCharacteristics: "Высокая устойчивость к нагреву",
		surfaceArea: "0.2 м²",
		weight: "1 кг",
		stiffness: "Высокая",
		conductivity: "Высокая",
		thermalExpansionCoefficient: "16 x 10^-6 /°C",
		thermalConductivity: "400 W/(m·K)",
		corrosionResistance: "Высокая",
		insulation: "Пластик",
		skinEffect: "Низкий",
		magneticPermeability: "Средняя",
		electromagneticCompatibility: "Высокая",
		qFactor: "Низкий",
		curvatureRadius: "N/A",
		shieldingCapability: "Средняя",
		tensileStrength: "100 MPa",
		maxPower: "2000 Вт",
	},
	{
		name: "Спираль",
		description:
			"Токопроводник, выполненный в форме спирали, обеспечивающий компактное размещение и высокую индуктивность.",
		advantages: ["Компактность", "Высокая индуктивность"],
		disadvantages: ["Сложность контроля", "Ограниченная прочность"],
		application: ["Индикаторные лампы", "Магнитные катушки"],
		availability: 4,
		qualityAndReliability: 3,
		manufacturingComplexity: 3,
		lifespan: 15,
		components: ["Проводник", "Изоляция"],
		shape: "Спираль",
		dimensions: "Диаметр 5 см, высота 10 см",
		orientation: "Наклонная",
		material: "Медь",
		windingDensity: "Высокая",
		turnsNumber: 200,
		wireThickness: "0.3 мм",
		electricalResistance: "0.05 Ω",
		inductance: "1 H",
		capacitance: "N/A",
		frequencyCharacteristic: "Высокий диапазон",
		electromagneticField: "Спиральное распределение",
		currentDirection: "Переменный",
		temperatureCharacteristics: "Устойчивость до 70°C",
		surfaceArea: "0.1 м²",
		weight: "150 г",
		stiffness: "Средняя",
		conductivity: "Высокая",
		thermalExpansionCoefficient: "16 x 10^-6 /°C",
		thermalConductivity: "400 W/(m·K)",
		corrosionResistance: "Средняя",
		insulation: "Пластик",
		skinEffect: "Средний",
		magneticPermeability: "Средняя",
		electromagneticCompatibility: "Средняя",
		qFactor: "Средний",
		curvatureRadius: "N/A",
		shieldingCapability: "Средняя",
		tensileStrength: "60 MPa",
		maxPower: "300 Вт",
	},
	{
		name: "Многослойные Катушки",
		description:
			"Катушки, состоящие из нескольких слоев провода, обеспечивающие высокую индуктивность и компактное размещение.",
		advantages: ["Высокая индуктивность", "Компактное размещение"],
		disadvantages: [
			"Сложность в изготовлении",
			"Ограниченная теплопроводность",
		],
		application: ["Электрические трансформаторы", "Медицинские устройства"],
		availability: 3,
		qualityAndReliability: 4,
		manufacturingComplexity: 4,
		lifespan: 20,
		components: ["Проводник", "Изоляция", "Ферритовые материалы"],
		shape: "Многослойные Катушки",
		dimensions: "Диаметр 5 см, высота 5 см",
		orientation: "Вертикальная",
		material: "Медь, феррит",
		windingDensity: "Высокая",
		turnsNumber: 300,
		wireThickness: "0.2 мм",
		electricalResistance: "0.03 Ω",
		inductance: "2 H",
		capacitance: "N/A",
		frequencyCharacteristic: "Средний диапазон",
		electromagneticField: "Слойное распределение",
		currentDirection: "Переменный",
		temperatureCharacteristics: "Устойчивость до 80°C",
		surfaceArea: "0.05 м²",
		weight: "250 г",
		stiffness: "Средняя",
		conductivity: "Высокая",
		thermalExpansionCoefficient: "16 x 10^-6 /°C",
		thermalConductivity: "200 W/(m·K)",
		corrosionResistance: "Средняя",
		insulation: "Пластик",
		skinEffect: "Средний",
		magneticPermeability: "Высокая",
		electromagneticCompatibility: "Средняя",
		qFactor: "Высокий",
		curvatureRadius: "N/A",
		shieldingCapability: "Средняя",
		tensileStrength: "80 MPa",
		maxPower: "700 Вт",
	},
	{
		name: "Плоские Катушки",
		description:
			"Катушки с плоским профилем, используемые для создания электромагнитных полей в компактных устройствах.",
		advantages: ["Компактные размеры", "Высокая плотность мощности"],
		disadvantages: ["Меньшая индуктивность", "Ограниченная область применения"],
		application: ["Индукционные нагреватели", "Электрические трансформаторы"],
		availability: 4,
		qualityAndReliability: 3,
		manufacturingComplexity: 3,
		lifespan: 15,
		components: ["Проводник", "Изоляция"],
		shape: "Плоские Катушки",
		dimensions: "Диаметр 5 см, высота 1 см",
		orientation: "Горизонтальная",
		material: "Медь",
		windingDensity: "Средняя",
		turnsNumber: 100,
		wireThickness: "0.5 мм",
		electricalResistance: "0.02 Ω",
		inductance: "0.2 H",
		capacitance: "N/A",
		frequencyCharacteristic: "Средний диапазон",
		electromagneticField: "Плоское распределение",
		currentDirection: "Переменный",
		temperatureCharacteristics: "Устойчивость до 70°C",
		surfaceArea: "0.1 м²",
		weight: "100 г",
		stiffness: "Низкая",
		conductivity: "Высокая",
		thermalExpansionCoefficient: "16 x 10^-6 /°C",
		thermalConductivity: "200 W/(m·K)",
		corrosionResistance: "Средняя",
		insulation: "Пластик",
		skinEffect: "Средний",
		magneticPermeability: "Средняя",
		electromagneticCompatibility: "Средняя",
		qFactor: "Средний",
		curvatureRadius: "N/A",
		shieldingCapability: "Средняя",
		tensileStrength: "50 MPa",
		maxPower: "300 Вт",
	},
	{
		name: "Трубки",
		description:
			"Токопроводники в форме трубок, используемые для защиты проводов или создания катушек.",
		advantages: ["Защита проводов", "Легкость в установке"],
		disadvantages: ["Ограниченная гибкость", "Меньшая индуктивность"],
		application: ["Электропроводка", "Трансформаторы"],
		availability: 5,
		qualityAndReliability: 4,
		manufacturingComplexity: 2,
		lifespan: 30,
		components: ["Проводник", "Изоляция"],
		shape: "Трубки",
		dimensions: "Диаметр 5 см, длина 20 см",
		orientation: "Горизонтальная",
		material: "Пластик, медь",
		windingDensity: "N/A",
		turnsNumber: "N/A",
		wireThickness: "N/A",
		electricalResistance: "0.01 Ω/м",
		inductance: "N/A",
		capacitance: "N/A",
		frequencyCharacteristic: "N/A",
		electromagneticField: "Незначительное",
		currentDirection: "Переменный",
		temperatureCharacteristics: "Устойчивость до 80°C",
		surfaceArea: "0.2 м²",
		weight: "150 г",
		stiffness: "Средняя",
		conductivity: "Средняя",
		thermalExpansionCoefficient: "20 x 10^-6 /°C",
		thermalConductivity: "100 W/(m·K)",
		corrosionResistance: "Высокая",
		insulation: "Пластик",
		skinEffect: "Низкий",
		magneticPermeability: "Низкая",
		electromagneticCompatibility: "Средняя",
		qFactor: "Низкий",
		curvatureRadius: "Небольшой",
		shieldingCapability: "Средняя",
		tensileStrength: "60 MPa",
		maxPower: "200 Вт",
	},
	{
		name: "Сетки и Решетки",
		description:
			"Токопроводники в форме сеток или решеток, используемые для создания электромагнитных экранов или антенн.",
		advantages: ["Высокая гибкость", "Эффективное экранирование"],
		disadvantages: ["Сложность в производстве", "Меньшая прочность"],
		application: ["Экранирующие устройства", "Антенны"],
		availability: 3,
		qualityAndReliability: 3,
		manufacturingComplexity: 4,
		lifespan: 10,
		components: ["Проводник", "Изоляция"],
		shape: "Сетки и Решетки",
		dimensions: "Разные размеры и формы",
		orientation: "Горизонтальная",
		material: "Медь, алюминий",
		windingDensity: "N/A",
		turnsNumber: "N/A",
		wireThickness: "0.2 мм",
		electricalResistance: "0.05 Ω",
		inductance: "N/A",
		capacitance: "N/A",
		frequencyCharacteristic: "Высокий диапазон",
		electromagneticField: "Равномерное распределение",
		currentDirection: "Переменный",
		temperatureCharacteristics: "Устойчивость до 60°C",
		surfaceArea: "0.5 м²",
		weight: "300 г",
		stiffness: "Низкая",
		conductivity: "Средняя",
		thermalExpansionCoefficient: "18 x 10^-6 /°C",
		thermalConductivity: "150 W/(m·K)",
		corrosionResistance: "Средняя",
		insulation: "Пластик",
		skinEffect: "Средний",
		magneticPermeability: "Низкая",
		electromagneticCompatibility: "Средняя",
		qFactor: "Средний",
		curvatureRadius: "N/A",
		shieldingCapability: "Высокая",
		tensileStrength: "50 MPa",
		maxPower: "1000 Вт",
	},
	{
		name: "Прямой",
		description: "Токопроводник с прямолинейной формой.",
		advantages: ["Простота изготовления", "Широкое применение"],
		disadvantages: ["Ограниченная гибкость"],
		application: ["Электропроводка", "Магнитные катушки"],
		availability: 5,
		qualityAndReliability: 4,
		manufacturingComplexity: 2,
		lifespan: 20,
		components: ["Проводник", "Изоляция"],
		shape: "Прямой",
		dimensions: "1 м (длина)",
		orientation: "Вертикальная",
		material: "Медь",
		windingDensity: "N/A",
		turnsNumber: "N/A",
		wireThickness: "1 мм",
		electricalResistance: "0.01 Ω/м",
		inductance: "N/A",
		capacitance: "N/A",
		frequencyCharacteristic: "N/A",
		electromagneticField: "Линейное распределение",
		currentDirection: "Переменный",
		temperatureCharacteristics: "Высокая устойчивость к нагреву",
		surfaceArea: "0.1 м²",
		weight: "50 г",
		stiffness: "Средняя",
		conductivity: "Высокая",
		thermalExpansionCoefficient: "16 x 10^-6 /°C",
		thermalConductivity: "400 W/(m·K)",
		corrosionResistance: "Высокая",
		insulation: "Пластик",
		skinEffect: "Низкий",
		magneticPermeability: "Высокая",
		electromagneticCompatibility: "Высокая",
		qFactor: "N/A",
		curvatureRadius: "N/A",
		shieldingCapability: "Средняя",
		tensileStrength: "50 MPa",
		maxPower: "1000 Вт",
	},
	{
		name: "Кольцо",
		description: "Токопроводник с круглой формой.",
		advantages: ["Компактность", "Равномерное магнитное поле"],
		disadvantages: ["Сложность изготовления"],
		application: ["Трансформаторы", "Индуктивные компоненты"],
		availability: 4,
		qualityAndReliability: 4,
		manufacturingComplexity: 4,
		lifespan: 15,
		components: ["Проводник", "Изоляция"],
		shape: "Кольцо",
		dimensions: "10 см (диаметр)",
		orientation: "Горизонтальная",
		material: "Алюминий",
		windingDensity: "100 витков/м",
		turnsNumber: "200 витков",
		wireThickness: "0.5 мм",
		electricalResistance: "0.02 Ω/м",
		inductance: "10 µH",
		capacitance: "N/A",
		frequencyCharacteristic: "100 kHz",
		electromagneticField: "Равномерное распределение",
		currentDirection: "Переменный",
		temperatureCharacteristics: "Средняя устойчивость к нагреву",
		surfaceArea: "0.02 м²",
		weight: "150 г",
		stiffness: "Средняя",
		conductivity: "Средняя",
		thermalExpansionCoefficient: "23 x 10^-6 /°C",
		thermalConductivity: "235 W/(m·K)",
		corrosionResistance: "Средняя",
		insulation: "Эпоксидная смола",
		skinEffect: "Средний",
		magneticPermeability: "Средняя",
		electromagneticCompatibility: "Средняя",
		qFactor: "50",
		curvatureRadius: "5 см",
		shieldingCapability: "Высокая",
		tensileStrength: "70 MPa",
		maxPower: "500 Вт",
	},
	{
		name: "Катушка",
		description: "Токопроводник в виде катушки для создания магнитного поля.",
		advantages: ["Высокая индуктивность", "Используется в трансформаторах"],
		disadvantages: ["Большие размеры", "Может быть сложной в изготовлении"],
		application: ["Трансформаторы", "Реле", "Фильтры"],
		availability: 3,
		qualityAndReliability: 5,
		manufacturingComplexity: 4,
		lifespan: 20,
		components: ["Проводник", "Ядро", "Изоляция"],
		shape: "Катушка",
		dimensions: "5 см (диаметр), 10 см (длина)",
		orientation: "Горизонтальная",
		material: "Медь, железо",
		windingDensity: "200 витков/м",
		turnsNumber: "500 витков",
		wireThickness: "0.3 мм",
		electricalResistance: "0.05 Ω/м",
		inductance: "50 µH",
		capacitance: "N/A",
		frequencyCharacteristic: "1 MHz",
		electromagneticField: "Цилиндрическое распределение",
		currentDirection: "Переменный",
		temperatureCharacteristics: "Высокая устойчивость к нагреву",
		surfaceArea: "0.03 м²",
		weight: "200 г",
		stiffness: "Средняя",
		conductivity: "Высокая",
		thermalExpansionCoefficient: "18 x 10^-6 /°C",
		thermalConductivity: "210 W/(m·K)",
		corrosionResistance: "Средняя",
		insulation: "Эпоксидная смола",
		skinEffect: "Средний",
		magneticPermeability: "Высокая",
		electromagneticCompatibility: "Высокая",
		qFactor: "60",
		curvatureRadius: "N/A",
		shieldingCapability: "Средняя",
		tensileStrength: "80 MPa",
		maxPower: "2000 Вт",
	},
	{
		name: "Сферические",
		description: "Токопроводник в виде сферы.",
		advantages: ["Равномерное распределение поля", "Компактность"],
		disadvantages: ["Сложность изготовления", "Ограниченное применение"],
		application: ["Антенны", "Резонаторы"],
		availability: 2,
		qualityAndReliability: 3,
		manufacturingComplexity: 5,
		lifespan: 10,
		components: ["Проводник", "Изоляция"],
		shape: "Сферические",
		dimensions: "10 см (радиус)",
		orientation: "Геометрическая",
		material: "Медь",
		windingDensity: "N/A",
		turnsNumber: "N/A",
		wireThickness: "N/A",
		electricalResistance: "0.03 Ω/м",
		inductance: "N/A",
		capacitance: "N/A",
		frequencyCharacteristic: "N/A",
		electromagneticField: "Сферическое распределение",
		currentDirection: "Переменный",
		temperatureCharacteristics: "Средняя устойчивость к нагреву",
		surfaceArea: "1.26 м²",
		weight: "300 г",
		stiffness: "Низкая",
		conductivity: "Высокая",
		thermalExpansionCoefficient: "20 x 10^-6 /°C",
		thermalConductivity: "390 W/(m·K)",
		corrosionResistance: "Средняя",
		insulation: "Пластик",
		skinEffect: "Средний",
		magneticPermeability: "Высокая",
		electromagneticCompatibility: "Средняя",
		qFactor: "N/A",
		curvatureRadius: "10 см",
		shieldingCapability: "Средняя",
		tensileStrength: "60 MPa",
		maxPower: "1500 Вт",
	},
	{
		name: "Плоские",
		description: "Токопроводник в виде плоской полосы.",
		advantages: ["Простота конструкции", "Легкость в монтаже"],
		disadvantages: ["Ограниченная индуктивность", "Необходима точная укладка"],
		application: ["Плоские катушки", "Электромагнитные экраны"],
		availability: 4,
		qualityAndReliability: 4,
		manufacturingComplexity: 2,
		lifespan: 15,
		components: ["Проводник", "Изоляция"],
		shape: "Плоские",
		dimensions: "1 см (ширина), 0.1 см (толщина)",
		orientation: "Горизонтальная",
		material: "Алюминий",
		windingDensity: "N/A",
		turnsNumber: "N/A",
		wireThickness: "0.1 см",
		electricalResistance: "0.02 Ω/м",
		inductance: "N/A",
		capacitance: "N/A",
		frequencyCharacteristic: "500 kHz",
		electromagneticField: "Плоское распределение",
		currentDirection: "Переменный",
		temperatureCharacteristics: "Средняя устойчивость к нагреву",
		surfaceArea: "0.01 м²",
		weight: "30 г",
		stiffness: "Низкая",
		conductivity: "Средняя",
		thermalExpansionCoefficient: "24 x 10^-6 /°C",
		thermalConductivity: "250 W/(m·K)",
		corrosionResistance: "Средняя",
		insulation: "Пластик",
		skinEffect: "Низкий",
		magneticPermeability: "Средняя",
		electromagneticCompatibility: "Средняя",
		qFactor: "N/A",
		curvatureRadius: "N/A",
		shieldingCapability: "Средняя",
		tensileStrength: "40 MPa",
		maxPower: "500 Вт",
	},
	{
		name: "Тор",
		description: "Токопроводник в виде тора, кольца с круглым сечением.",
		advantages: ["Равномерное магнитное поле", "Компактность"],
		disadvantages: ["Сложность изготовления", "Могут быть сложности в сборке"],
		application: ["Трансформаторы", "Индивидуальные катушки"],
		availability: 3,
		qualityAndReliability: 4,
		manufacturingComplexity: 4,
		lifespan: 15,
		components: ["Проводник", "Изоляция"],
		shape: "Тор",
		dimensions: "20 см (внешний диаметр), 10 см (внутренний диаметр)",
		orientation: "Горизонтальная",
		material: "Медь",
		windingDensity: "150 витков/м",
		turnsNumber: "300 витков",
		wireThickness: "0.5 мм",
		electricalResistance: "0.03 Ω/м",
		inductance: "20 µH",
		capacitance: "N/A",
		frequencyCharacteristic: "500 kHz",
		electromagneticField: "Цилиндрическое распределение",
		currentDirection: "Переменный",
		temperatureCharacteristics: "Высокая устойчивость к нагреву",
		surfaceArea: "0.1 м²",
		weight: "200 г",
		stiffness: "Средняя",
		conductivity: "Высокая",
		thermalExpansionCoefficient: "19 x 10^-6 /°C",
		thermalConductivity: "300 W/(m·K)",
		corrosionResistance: "Средняя",
		insulation: "Эпоксидная смола",
		skinEffect: "Средний",
		magneticPermeability: "Высокая",
		electromagneticCompatibility: "Высокая",
		qFactor: "55",
		curvatureRadius: "10 см",
		shieldingCapability: "Средняя",
		tensileStrength: "70 MPa",
		maxPower: "1000 Вт",
	},
	// Продолжайте добавлять другие формы аналогичным образом
];

const ConductorFormsList = () => {
	const [sortedColumn, setSortedColumn] = useState(null);
	const [sortOrder, setSortOrder] = useState("asc");

	const handleSort = (column) => {
		const newSortOrder =
			sortedColumn === column && sortOrder === "asc" ? "desc" : "asc";
		setSortOrder(newSortOrder);
		setSortedColumn(column);
	};

	const sortedData = [...conductorFormsData].sort((a, b) => {
		if (sortedColumn) {
			const aValue = a[sortedColumn];
			const bValue = b[sortedColumn];

			if (typeof aValue === "number") {
				return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
			} else {
				return sortOrder === "asc"
					? aValue.localeCompare(bValue)
					: bValue.localeCompare(aValue);
			}
		}
		return 0;
	});

	return (
		<div>
			<h1>Формы токопроводников</h1>
			<table>
				<thead>
					<tr>
						<th onClick={() => handleSort("name")}>Название</th>
						<th onClick={() => handleSort("description")}>Описание</th>
						<th onClick={() => handleSort("advantages")}>Преимущества</th>
						<th onClick={() => handleSort("disadvantages")}>Недостатки</th>
						<th onClick={() => handleSort("application")}>Применение</th>
						<th onClick={() => handleSort("availability")}>Доступность</th>
						<th onClick={() => handleSort("qualityAndReliability")}>
							Качество и надежность
						</th>
						<th onClick={() => handleSort("manufacturingComplexity")}>
							Сложность изготовления
						</th>
						<th onClick={() => handleSort("lifespan")}>Срок службы</th>
						<th onClick={() => handleSort("shape")}>Форма</th>
						<th onClick={() => handleSort("dimensions")}>Размеры</th>
						<th onClick={() => handleSort("orientation")}>
							Геометрическая ориентация
						</th>
						<th onClick={() => handleSort("material")}>Материал</th>
						<th onClick={() => handleSort("windingDensity")}>
							Плотность намотки
						</th>
						<th onClick={() => handleSort("turnsNumber")}>Число витков</th>
						<th onClick={() => handleSort("wireThickness")}>
							Толщина проводника
						</th>
						<th onClick={() => handleSort("electricalResistance")}>
							Электрическое сопротивление
						</th>
						<th onClick={() => handleSort("inductance")}>Индуктивность</th>
						<th onClick={() => handleSort("capacitance")}>Емкость</th>
						<th onClick={() => handleSort("frequencyCharacteristic")}>
							Частотная характеристика
						</th>
						<th onClick={() => handleSort("electromagneticField")}>
							Электромагнитное поле
						</th>
						<th onClick={() => handleSort("currentDirection")}>
							Направление тока
						</th>
						<th onClick={() => handleSort("temperatureCharacteristics")}>
							Температурные характеристики
						</th>
						<th onClick={() => handleSort("surfaceArea")}>
							Поверхностная площадь
						</th>
						<th onClick={() => handleSort("weight")}>Вес/масса</th>
						<th onClick={() => handleSort("stiffness")}>Жесткость/гибкость</th>
						<th onClick={() => handleSort("conductivity")}>Проводимость</th>
						<th onClick={() => handleSort("thermalExpansionCoefficient")}>
							Коэффициент теплового расширения
						</th>
						<th onClick={() => handleSort("thermalConductivity")}>
							Теплопроводность
						</th>
						<th onClick={() => handleSort("corrosionResistance")}>
							Коррозионная стойкость
						</th>
						<th onClick={() => handleSort("insulation")}>Изоляция</th>
						<th onClick={() => handleSort("skinEffect")}>Скин-эффект</th>
						<th onClick={() => handleSort("magneticPermeability")}>
							Магнитная проницаемость
						</th>
						<th onClick={() => handleSort("electromagneticCompatibility")}>
							Электромагнитная совместимость
						</th>
						<th onClick={() => handleSort("qFactor")}>Добротность</th>
						<th onClick={() => handleSort("curvatureRadius")}>
							Радиус кривизны
						</th>
						<th onClick={() => handleSort("shieldingCapability")}>
							Способность к экранированию
						</th>
						<th onClick={() => handleSort("tensileStrength")}>
							Прочность на разрыв
						</th>
						<th onClick={() => handleSort("maxPower")}>
							Максимальная пропускаемая мощность
						</th>
					</tr>
				</thead>
				<tbody>
					{sortedData.map((conductor, index) => (
						<tr key={index}>
							<td>{conductor.name}</td>
							<td>{conductor.description}</td>
							<td>{conductor.advantages.join(", ")}</td>
							<td>{conductor.disadvantages.join(", ")}</td>
							<td>{conductor.application.join(", ")}</td>
							<td>{conductor.availability}</td>
							<td>{conductor.qualityAndReliability}</td>
							<td>{conductor.manufacturingComplexity}</td>
							<td>{conductor.lifespan}</td>
							<td>{conductor.shape}</td>
							<td>{conductor.dimensions}</td>
							<td>{conductor.orientation}</td>
							<td>{conductor.material}</td>
							<td>{conductor.windingDensity}</td>
							<td>{conductor.turnsNumber}</td>
							<td>{conductor.wireThickness}</td>
							<td>{conductor.electricalResistance}</td>
							<td>{conductor.inductance}</td>
							<td>{conductor.capacitance}</td>
							<td>{conductor.frequencyCharacteristic}</td>
							<td>{conductor.electromagneticField}</td>
							<td>{conductor.currentDirection}</td>
							<td>{conductor.temperatureCharacteristics}</td>
							<td>{conductor.surfaceArea}</td>
							<td>{conductor.weight}</td>
							<td>{conductor.stiffness}</td>
							<td>{conductor.conductivity}</td>
							<td>{conductor.thermalExpansionCoefficient}</td>
							<td>{conductor.thermalConductivity}</td>
							<td>{conductor.corrosionResistance}</td>
							<td>{conductor.insulation}</td>
							<td>{conductor.skinEffect}</td>
							<td>{conductor.magneticPermeability}</td>
							<td>{conductor.electromagneticCompatibility}</td>
							<td>{conductor.qFactor}</td>
							<td>{conductor.curvatureRadius}</td>
							<td>{conductor.shieldingCapability}</td>
							<td>{conductor.tensileStrength}</td>
							<td>{conductor.maxPower}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ConductorFormsList;
