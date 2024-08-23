import React, { useState } from 'react';

const resistorData = [
	{
		name: 'Углеродные резисторы',
		description: 'Резисторы, изготовленные из смеси углерода и связующего материала.',
		advantages: 'Низкая стоимость, простота изготовления.',
		disadvantages: 'Высокий уровень шума, низкая стабильность.',
		application: 'Общие электронные устройства.',
		availability: 'Широко доступные',
		isFixed: true,
		material: 'Углерод',
		precision: 'Низкая',
		capacitance: 'Низкая',
		tempRange: '-55°C до +125°C',
		inductance: 'Низкая',
		noise: 'Высокий',
		maxVoltage: '250 В',
		tempCoefficient: 'Высокий',
		tolerance: '±5%',
		qualityReliability: 'Средняя',
		powerRating: '0.125 Вт до 2 Вт',
		resistanceRange: '1 Ом до 10 Мом',
		lifespan: '5-10 лет',
		manufacturingComplexity: 'Низкая'
	},
	{
		name: 'Металлические пленочные резисторы',
		description: 'Резисторы, изготовленные из металлической пленки, нанесенной на керамическую основу.',
		advantages: 'Высокая точность, низкий уровень шума.',
		disadvantages: 'Относительно высокая стоимость.',
		application: 'Прецизионные измерительные устройства, аудиотехника.',
		availability: 'Широко доступны',
		isFixed: true,
		material: 'Металлическая пленка',
		precision: 'Высокая',
		capacitance: 'Очень низкая',
		tempRange: '-55°C до +155°C',
		inductance: 'Низкая',
		noise: 'Низкий',
		maxVoltage: '350 В',
		tempCoefficient: 'Низкий',
		tolerance: '±1%',
		qualityReliability: 'Высокая',
		powerRating: '0.25 Вт до 3 Вт',
		resistanceRange: '1 Ом до 10 Мом',
		lifespan: '10-20 лет',
		manufacturingComplexity: 'Средняя'
	},
	{
		name: 'Металлические проволочные резисторы',
		description: 'Резисторы, изготовленные из проволоки из сплава с высоким сопротивлением.',
		advantages: 'Высокая мощность, стабильность при высоких температурах.',
		disadvantages: 'Высокая индуктивность, громоздкость.',
		application: 'Мощные устройства, цепи с высоким напряжением.',
		availability: 'Доступны',
		isFixed: true,
		material: 'Металлическая проволока',
		precision: 'Средняя',
		capacitance: 'Низкая',
		tempRange: '-55°C до +350°C',
		inductance: 'Высокая',
		noise: 'Низкий',
		maxVoltage: '750 В',
		tempCoefficient: 'Средний',
		tolerance: '±2%',
		qualityReliability: 'Высокая',
		powerRating: '1 Вт до 50 Вт',
		resistanceRange: '0.1 Ом до 100 КОм',
		lifespan: '15-25 лет',
		manufacturingComplexity: 'Средняя'
	},
	{
		name: 'Металлооксидные резисторы',
		description: 'Резисторы, изготовленные из металлического оксида, нанесенного на керамическую основу.',
		advantages: 'Высокая устойчивость к перегрузкам, низкий температурный коэффициент.',
		disadvantages: 'Меньше точность, чем у металлических пленочных резисторов.',
		application: 'Цепи с высокой нагрузкой и стабильностью.',
		availability: 'Широко доступны',
		isFixed: true,
		material: 'Металлооксид',
		precision: 'Средняя',
		capacitance: 'Очень низкая',
		tempRange: '-55°C до +200°C',
		inductance: 'Низкая',
		noise: 'Низкий',
		maxVoltage: '500 В',
		tempCoefficient: 'Низкий',
		tolerance: '±2%',
		qualityReliability: 'Высокая',
		powerRating: '0.25 Вт до 10 Вт',
		resistanceRange: '1 Ом до 100 Мом',
		lifespan: '10-15 лет',
		manufacturingComplexity: 'Средняя'
	},
	{
		name: 'Фольговые резисторы',
		description: 'Резисторы, изготовленные из металлической фольги, нанесенной на изолирующий материал.',
		advantages: 'Очень высокая точность, минимальный шум.',
		disadvantages: 'Очень высокая стоимость.',
		application: 'Прецизионные измерительные устройства, высокоточные схемы.',
		availability: 'Ограниченная доступность',
		isFixed: true,
		material: 'Металлическая фольга',
		precision: 'Очень высокая',
		capacitance: 'Очень низкая',
		tempRange: '-65°C до +175°C',
		inductance: 'Очень низкая',
		noise: 'Минимальный',
		maxVoltage: '400 В',
		tempCoefficient: 'Очень низкий',
		tolerance: '±0.01%',
		qualityReliability: 'Очень высокая',
		powerRating: '0.1 Вт до 2 Вт',
		resistanceRange: '0.1 Ом до 500 КОм',
		lifespan: 'Очень долгий срок службы, более 20 лет',
		manufacturingComplexity: 'Высокая'
	},
	{
		name: 'Потенциометры',
		description: 'Переменные резисторы, которые позволяют регулировать сопротивление вручную.',
		advantages: 'Регулируемое сопротивление, удобство использования.',
		disadvantages: 'Низкая долговечность при постоянном регулировании.',
		application: 'Регулировка громкости, контроль яркости.',
		availability: 'Широко доступны',
		isFixed: false,
		material: 'Разные материалы',
		precision: 'Средняя',
		capacitance: 'Низкая',
		tempRange: '-10°C до +85°C',
		inductance: 'Низкая',
		noise: 'Средний',
		maxVoltage: '250 В',
		tempCoefficient: 'Средний',
		tolerance: '±5%',
		qualityReliability: 'Средняя',
		powerRating: '0.1 Вт до 0.5 Вт',
		resistanceRange: '10 Ом до 1 МОм',
		lifespan: '5-10 лет',
		manufacturingComplexity: 'Средняя'
	},
	{
		name: 'Реостаты',
		description: 'Регулируемые резисторы с более высокой мощностью, чем у потенциометров.',
		advantages: 'Высокая мощность, способность регулировать токи и напряжение в цепи.',
		disadvantages: 'Большие размеры, не всегда подходит для точной настройки.',
		application: 'Лабораторные эксперименты, регулировка тока в цепях.',
		availability: 'Широко доступны',
		isFixed: false,
		material: 'Разные материалы',
		precision: 'Низкая',
		capacitance: 'Низкая',
		tempRange: '-20°C до +150°C',
		inductance: 'Средняя',
		noise: 'Средний',
		maxVoltage: '500 В',
		tempCoefficient: 'Средний',
		tolerance: '±10%',
		qualityReliability: 'Средняя',
		powerRating: '1 Вт до 200 Вт',
		resistanceRange: '1 Ом до 1 МОм',
		lifespan: '5-15 лет',
		manufacturingComplexity: 'Средняя'
	},
	{
		name: 'Термисторы',
		description: 'Резисторы, сопротивление которых сильно зависит от температуры.',
		advantages: 'Высокая чувствительность к температуре, простота конструкции.',
		disadvantages: 'Нелинейная характеристика сопротивления.',
		application: 'Температурные датчики, защита от перегрева.',
		availability: 'Широко доступны',
		isFixed: true,
		material: 'Оксид металла',
		precision: 'Низкая',
		capacitance: 'Средняя',
		tempRange: '-40°C до +150°C',
		inductance: 'Низкая',
		noise: 'Низкий',
		maxVoltage: '30 В',
		tempCoefficient: 'Высокий',
		tolerance: '±20%',
		qualityReliability: 'Средняя',
		powerRating: '0.1 Вт до 0.5 Вт',
		resistanceRange: '1 кОм до 100 КОм',
		lifespan: '5-10 лет',
		manufacturingComplexity: 'Низкая'
	},
	{
		name: 'Варисторы',
		description: 'Резисторы, изменяющие своё сопротивление в зависимости от приложенного напряжения.',
		advantages: 'Защита от перенапряжений, высокая надежность.',
		disadvantages: 'Неустойчивость к частым перегрузкам.',
		application: 'Защита от перенапряжений в цепях.',
		availability: 'Широко доступны',
		isFixed: true,
		material: 'Оксид цинка',
		precision: 'Низкая',
		capacitance: 'Низкая',
		tempRange: '-55°C до +85°C',
		inductance: 'Низкая',
		noise: 'Низкий',
		maxVoltage: '500 В',
		tempCoefficient: 'Средний',
		tolerance: '±10%',
		qualityReliability: 'Средняя',
		powerRating: '0.5 Вт до 50 Вт',
		resistanceRange: '100 Ом до 10 Мом',
		lifespan: '5-15 лет',
		manufacturingComplexity: 'Средняя'
	},
	{
		name: 'Пьезорезисторы',
		description: 'Резисторы, изменяющие свое сопротивление под действием механического напряжения.',
		advantages: 'Высокая чувствительность к механическим воздействиям.',
		disadvantages: 'Ограниченное применение, сложность изготовления.',
		application: 'Датчики давления, акселерометры.',
		availability: 'Ограниченная доступность',
		isFixed: true,
		material: 'Полупроводник',
		precision: 'Высокая',
		capacitance: 'Низкая',
		tempRange: '-40°C до +125°C',
		inductance: 'Низкая',
		noise: 'Низкий',
		maxVoltage: '50 В',
		tempCoefficient: 'Средний',
		tolerance: '±5%',
		qualityReliability: 'Высокая',
		powerRating: '0.05 Вт до 0.5 Вт',
		resistanceRange: '100 Ом до 10 КОм',
		lifespan: '5-10 лет',
		manufacturingComplexity: 'Высокая'
	},
	{
		name: 'Тензорезисторы',
		description: 'Резисторы, изменяющие свое сопротивление в зависимости от механического растяжения.',
		advantages: 'Высокая чувствительность, возможность измерения деформаций.',
		disadvantages: 'Чувствительность к температурным изменениям.',
		application: 'Измерение механических напряжений, датчики веса.',
		availability: 'Ограниченная доступность',
		isFixed: true,
		material: 'Металл или полупроводник',
		precision: 'Высокая',
		capacitance: 'Низкая',
		tempRange: '-30°C до +85°C',
		inductance: 'Низкая',
		noise: 'Низкий',
		maxVoltage: '100 В',
		tempCoefficient: 'Средний',
		tolerance: '±1%',
		qualityReliability: 'Высокая',
		powerRating: '0.01 Вт до 0.5 Вт',
		resistanceRange: '10 Ом до 10 КОм',
		lifespan: '5-10 лет',
		manufacturingComplexity: 'Высокая'
	},
];

const BatteryList = () => {
	const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

	const sortedData = [...resistorData].sort((a, b) => {
		if (a[sortConfig.key] < b[sortConfig.key]) {
			return sortConfig.direction === 'ascending' ? -1 : 1;
		}
		if (a[sortConfig.key] > b[sortConfig.key]) {
			return sortConfig.direction === 'ascending' ? 1 : -1;
		}
		return 0;
	});

	const requestSort = key => {
		let direction = 'ascending';
		if (sortConfig.key === key && sortConfig.direction === 'ascending') {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	};

	return (
		<div>
			<h1>Типы резисторов</h1>
			<table>
				<thead>
					<tr>
						<th onClick={() => requestSort('name')}>Название</th>
						<th onClick={() => requestSort('description')}>Описание</th>
						<th onClick={() => requestSort('advantages')}>Преимущества</th>
						<th onClick={() => requestSort('disadvantages')}>Недостатки</th>
						<th onClick={() => requestSort('application')}>Применение</th>
						<th onClick={() => requestSort('availability')}>Доступность</th>
						<th onClick={() => requestSort('isFixed')}>Фиксированный</th>
						<th onClick={() => requestSort('material')}>Материал</th>
						<th onClick={() => requestSort('precision')}>Точность</th>
						<th onClick={() => requestSort('capacitance')}>Ёмкость</th>
						<th onClick={() => requestSort('tempRange')}>Диапазон температур</th>
						<th onClick={() => requestSort('inductance')}>Индуктивность</th>
						<th onClick={() => requestSort('noise')}>Шум</th>
						<th onClick={() => requestSort('maxVoltage')}>Макс. рабочее напряжение</th>
						<th onClick={() => requestSort('tempCoefficient')}>Температурный коэффициент сопротивления</th>
						<th onClick={() => requestSort('tolerance')}>Допуск</th>
						<th onClick={() => requestSort('qualityReliability')}>Качество/Надежность</th>
						<th onClick={() => requestSort('powerRating')}>Мощность (от-до)</th>
						<th onClick={() => requestSort('resistanceRange')}>Сопротивление (от-до)</th>
						<th onClick={() => requestSort('lifespan')}>Cрок службы</th>
						<th onClick={() => requestSort('manufacturingComplexity')}>сложность изготовления</th>
					</tr>
				</thead>
				<tbody>
					{sortedData.map((resistor, index) => (
						<tr key={index}>
							<td>{resistor.name}</td>
							<td>{resistor.description}</td>
							<td>{resistor.advantages}</td>
							<td>{resistor.disadvantages}</td>
							<td>{resistor.application}</td>
							<td>{resistor.availability}</td>
							<td>{resistor.isFixed ? 'Да' : 'Нет'}</td>
							<td>{resistor.material}</td>
							<td>{resistor.precision}</td>
							<td>{resistor.capacitance}</td>
							<td>{resistor.tempRange}</td>
							<td>{resistor.inductance}</td>
							<td>{resistor.noise}</td>
							<td>{resistor.maxVoltage}</td>
							<td>{resistor.tempCoefficient}</td>
							<td>{resistor.tolerance}</td>
							<td>{resistor.qualityReliability}</td>
							<td>{resistor.powerRating}</td>
							<td>{resistor.resistanceRange}</td>
							<td>{resistor.lifespan}</td>
							<td>{resistor.manufacturingComplexity}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default BatteryList;
