import React, { useState } from 'react';


const transistorData = [
	{
		name: 'Двойной затворный МОП',
		description: 'Полупроводниковый элемент с двумя затворами, обеспечивающий улучшенные характеристики по сравнению с одно-канальными МОП MOSFET.',
		advantages: ['Высокая скорость переключения', 'Низкое сопротивление в включенном состоянии'],
		disadvantages: ['Сложность в производстве', 'Высокая цена'],
		application: ['Аналоговые и цифровые схемы', 'Мощные переключатели'],
		availability: 3,
		quality: 4,
		complexity: 4,
		lifetime: 10,
		components: ['Полупроводник', 'Металлические контакты'],
		type: 'Полевой',
		frequencyConverter: false,
		analogDigital: 'Гибридный',
		gateType: 'С управляющим электродом',
		Vce: 100,
		Ic: 20,
		β: 50,
		Pmax: 50,
		RdsOn: 0.1,
		Vth: 2,
		switchingSpeed: 1000000,
		inputOutputResistance: 'Низкое',
		tempCoefficient: -0.5,
		maxVbe: 30,
		fT: 10,
		capacitance: 20,
		tempRange: '-40 to 125',
	},
	{
		name: 'Переходный полевой',
		description: 'Полевой с pn-переходом, который используется для управления током в цепях.',
		advantages: ['Высокая входная импеданс', 'Стабильность работы'],
		disadvantages: ['Низкая выходная мощность', 'Чувствительность к температуре'],
		application: ['Слабые сигналы', 'Усилители'],
		availability: 4,
		quality: 3,
		complexity: 2,
		lifetime: 8,
		components: ['Полупроводник', 'Металлические контакты'],
		type: 'полевой',
		frequencyConverter: false,
		analogDigital: 'Аналоговый',
		gateType: 'Без управляющего электрода',
		Vce: 50,
		Ic: 5,
		β: 30,
		Pmax: 10,
		RdsOn: 'Высокое',
		Vth: 1,
		switchingSpeed: 50000,
		inputOutputResistance: 'Высокое',
		tempCoefficient: -0.3,
		maxVbe: 15,
		fT: 5,
		capacitance: 10,
		tempRange: '-40 to 85',
	},
	{
		name: 'МОП МОП MOSFET',
		description: 'Металло-оксидный полевой с высоким сопротивлением между затвором и источником.',
		advantages: ['Низкое сопротивление в открытом состоянии', 'Высокая скорость переключения'],
		disadvantages: ['Чувствительность к статическому электричеству', 'Низкая линейность'],
		application: ['Усилители мощности', 'Переключатели в цифровых схемах'],
		availability: 5,
		quality: 5,
		complexity: 3,
		lifetime: 15,
		components: ['Полупроводник', 'Оксидный слой', 'Металлические контакты'],
		type: 'полевой',
		frequencyConverter: true,
		analogDigital: 'Цифровой',
		gateType: 'С управляющим электродом',
		Vce: 200,
		Ic: 50,
		β: 100,
		Pmax: 75,
		RdsOn: 0.05,
		Vth: 4,
		switchingSpeed: 5000000,
		inputOutputResistance: 'Низкое',
		tempCoefficient: -0.2,
		maxVbe: 40,
		fT: 20,
		capacitance: 30,
		tempRange: '-55 to 150',
	},
	{
		name: 'N-канальный',
		description: 'Полевой, в котором основной носитель заряда - электроны.',
		advantages: ['Низкое сопротивление в открытом состоянии', 'Высокая скорость переключения'],
		disadvantages: ['Чувствительность к ESD', 'Проблемы с тепловыделением'],
		application: ['Выключатели', 'Усилители'],
		availability: 4,
		quality: 4,
		complexity: 3,
		lifetime: 12,
		components: ['Полупроводник', 'Оксидный слой'],
		type: 'МОП MOSFET',
		frequencyConverter: false,
		analogDigital: 'Цифровой',
		gateType: 'С управляющим электродом',
		Vce: 100,
		Ic: 30,
		β: 60,
		Pmax: 60,
		RdsOn: 0.07,
		Vth: 3,
		switchingSpeed: 2000000,
		inputOutputResistance: 'Низкое',
		tempCoefficient: -0.4,
		maxVbe: 35,
		fT: 15,
		capacitance: 25,
		tempRange: '-40 to 125',
	},
	{
		name: 'P-канальный',
		description: 'Полевой, в котором основной носитель заряда - дырки.',
		advantages: ['Низкое сопротивление в открытом состоянии', 'Меньше тепловыделение по сравнению с биполярными транзисторами'],
		disadvantages: ['Сложность в управлении', 'Ограниченная максимальная мощность'],
		application: ['Выключатели', 'Усилители'],
		availability: 4,
		quality: 3,
		complexity: 3,
		lifetime: 10,
		components: ['Полупроводник', 'Оксидный слой'],
		type: 'МОП MOSFET',
		frequencyConverter: false,
		analogDigital: 'Цифровой',
		gateType: 'С управляющим электродом',
		Vce: 75,
		Ic: 20,
		β: 50,
		Pmax: 45,
		RdsOn: 0.1,
		Vth: 2.5,
		switchingSpeed: 1000000,
		inputOutputResistance: 'Низкое',
		tempCoefficient: -0.3,
		maxVbe: 30,
		fT: 12,
		capacitance: 20,
		tempRange: '-40 to 125',
	},
	{
		name: 'Биполярный с NPN',
		description: 'с соединением, использующий электроны как основной носитель заряда.',
		advantages: ['Высокий коэффициент усиления', 'Стабильность'],
		disadvantages: ['Высокое сопротивление в закрытом состоянии', 'Медленная скорость переключения'],
		application: ['Усилители', 'Переключатели'],
		availability: 5,
		quality: 4,
		complexity: 2,
		lifetime: 8,
		components: ['Полупроводник', 'Металлические контакты'],
		type: 'Биполярный',
		frequencyConverter: false,
		analogDigital: 'Аналоговый',
		gateType: 'Без управляющего электрода',
		Vce: 50,
		Ic: 10,
		β: 100,
		Pmax: 1,
		RdsOn: 'Высокое',
		Vth: 0.7,
		switchingSpeed: 100000,
		inputOutputResistance: 'Среднее',
		tempCoefficient: -0.2,
		maxVbe: 30,
		fT: 15,
		capacitance: 10,
		tempRange: '-55 to 150',
	},
	{
		name: 'Биполярный с PNP',
		description: 'с соединением, использующий дырки как основной носитель заряда.',
		advantages: ['Высокий коэффициент усиления', 'Стабильность работы'],
		disadvantages: ['Сложность в управлении', 'Медленная скорость переключения'],
		application: ['Усилители', 'Переключатели'],
		availability: 4,
		quality: 4,
		complexity: 2,
		lifetime: 8,
		components: ['Полупроводник', 'Металлические контакты'],
		type: 'Биполярный',
		frequencyConverter: false,
		analogDigital: 'Аналоговый',
		gateType: 'Без управляющего электрода',
		Vce: 40,
		Ic: 8,
		β: 90,
		Pmax: 1,
		RdsOn: 'Высокое',
		Vth: 0.7,
		switchingSpeed: 80000,
		inputOutputResistance: 'Среднее',
		tempCoefficient: -0.25,
		maxVbe: 25,
		fT: 12,
		capacitance: 12,
		tempRange: '-55 to 125',
	},
	{
		name: 'Дарлингтона',
		description: 'Составной биполярный, объединяющий два транзистора в одном корпусе для увеличения коэффициента усиления.',
		advantages: ['Очень высокий коэффициент усиления', 'Хорошая стабильность'],
		disadvantages: ['Большая задержка переключения', 'Высокая стоимость'],
		application: ['Усилители', 'Мощные переключатели'],
		availability: 3,
		quality: 4,
		complexity: 4,
		lifetime: 10,
		components: ['Полупроводник', 'Металлические контакты'],
		type: 'Биполярный',
		frequencyConverter: false,
		analogDigital: 'Аналоговый',
		gateType: 'Без управляющего электрода',
		Vce: 60,
		Ic: 5,
		β: 1000,
		Pmax: 10,
		RdsOn: 'Высокое',
		Vth: 0.7,
		switchingSpeed: 50000,
		inputOutputResistance: 'Среднее',
		tempCoefficient: -0.3,
		maxVbe: 30,
		fT: 7,
		capacitance: 20,
		tempRange: '-40 to 125',
	},
	{
		name: 'IGBT (биполяр и МОП)',
		description: 'сочетающий в себе свойства биполярного транзистора и МОП MOSFET, обеспечивая высокую мощность и эффективность.',
		advantages: ['Высокая эффективность при высоких напряжениях', 'Высокая скорость переключения', 'Низкие потери в состоянии включения'],
		disadvantages: ['Сложность в управлении', 'Высокая цена', 'Склонность к перегреву при высоких токах'],
		application: ['Инверторы', 'Электрические приводы', 'Импульсные источники питания', 'Силовая электроника'],
		availability: 4,
		quality: 5,
		complexity: 4,
		lifetime: 15,
		components: ['Полупроводник', 'Металлические контакты', 'Изолирующий оксид'],
		type: 'IGBT',
		frequencyConverter: true,
		analogDigital: 'Гибридный',
		gateType: 'С управляющим электродом',
		Vce: 1200,
		Ic: 100,
		β: 200,
		Pmax: 500,
		RdsOn: 0.02,
		Vth: 5,
		switchingSpeed: 100000,
		inputOutputResistance: 'Низкое',
		tempCoefficient: -0.15,
		maxVbe: 20,
		fT: 15,
		capacitance: 50,
		tempRange: '-40 to 150',
	},
	{
		name: 'КМОП (N МОП и P МОП)',
		description: 'комбинацию N-канальных и P-канальных МОП MOSFET для низкого потребления энергии.',
		advantages: ['Низкое потребление энергии', 'Высокая интеграция'],
		disadvantages: ['Чувствительность к статическому электричеству', 'Сложность в производстве'],
		application: ['Цифровые схемы', 'Память'],
		availability: 5,
		quality: 5,
		complexity: 4,
		lifetime: 15,
		components: ['Полупроводник', 'Оксидный слой'],
		type: 'Полевой',
		frequencyConverter: false,
		analogDigital: 'Цифровой',
		gateType: 'С управляющим электродом',
		Vce: 30,
		Ic: 20,
		β: 50,
		Pmax: 5,
		RdsOn: 0.1,
		Vth: 3,
		switchingSpeed: 2000000,
		inputOutputResistance: 'Низкое',
		tempCoefficient: -0.2,
		maxVbe: 30,
		fT: 20,
		capacitance: 25,
		tempRange: '-40 to 125',
	},
	{
		name: 'Тонкоплёночный',
		description: 'Транзистор, построенный на основе тонких пленок полупроводникового материала, используется в дисплеях и других устройствах.',
		advantages: ['Гибкость в применении', 'Хорошее управление'],
		disadvantages: ['Низкая прочность', 'Сложность производства'],
		application: ['ЖК-дисплеи', 'Кристаллические экраны'],
		availability: 3,
		quality: 3,
		complexity: 5,
		lifetime: 8,
		components: ['Тонкие пленки', 'Полупроводник'],
		type: 'Тонкоплёночные',
		frequencyConverter: false,
		analogDigital: 'Тонкоплёночные',
		gateType: 'С управляющим электродом',
		Vce: 40,
		Ic: 10,
		β: 30,
		Pmax: 3,
		RdsOn: 0.2,
		Vth: 2,
		switchingSpeed: 50000,
		inputOutputResistance: 'Среднее',
		tempCoefficient: -0.3,
		maxVbe: 25,
		fT: 8,
		capacitance: 15,
		tempRange: '-30 to 85',
	},
	{
		name: 'Фото',
		description: 'Транзистор, чувствительный к свету, используется в оптоэлектронных системах.',
		advantages: ['Чувствительность к свету', 'Простота в использовании'],
		disadvantages: ['Медленная реакция на изменения света', 'Низкая стабильность'],
		application: ['Оптоэлектронные системы', 'Световые датчики'],
		availability: 4,
		quality: 3,
		complexity: 2,
		lifetime: 5,
		components: ['Полупроводник', 'Прозрачные материалы'],
		type: 'Фото',
		frequencyConverter: false,
		analogDigital: 'Аналоговый',
		gateType: 'Без управляющего электрода',
		Vce: 20,
		Ic: 5,
		β: 50,
		Pmax: 1,
		RdsOn: 'Высокое',
		Vth: 0.5,
		switchingSpeed: 10000,
		inputOutputResistance: 'Среднее',
		tempCoefficient: -0.4,
		maxVbe: 20,
		fT: 5,
		capacitance: 12,
		tempRange: '-30 to 70',
	},
];



const TransistorList = () => {
	const [sortConfig, setSortConfig] = useState(null);

	const sortedData = React.useMemo(() => {
		let sortableData = [...transistorData];
		if (sortConfig !== null) {
			sortableData.sort((a, b) => {
				if (a[sortConfig.key] < b[sortConfig.key]) {
					return sortConfig.direction === 'ascending' ? -1 : 1;
				}
				if (a[sortConfig.key] > b[sortConfig.key]) {
					return sortConfig.direction === 'ascending' ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableData;
	}, [transistorData, sortConfig]);

	const requestSort = key => {
		let direction = 'ascending';
		if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	};

	const getClassNamesFor = (name) => {
		if (!sortConfig) {
			return;
		}
		return sortConfig.key === name ? sortConfig.direction : undefined;
	};

	return (
		<div>
			<h1>Типы транзисторов</h1>
			<table>
				<thead>
					<tr>
						<th onClick={() => requestSort('name')} className={getClassNamesFor('name')}>Название</th>
						<th onClick={() => requestSort('description')} className={getClassNamesFor('description')}>Описание</th>
						<th onClick={() => requestSort('advantages')} className={getClassNamesFor('advantages')}>Преимущества</th>
						<th onClick={() => requestSort('disadvantages')} className={getClassNamesFor('disadvantages')}>Недостатки</th>
						<th onClick={() => requestSort('application')} className={getClassNamesFor('application')}>Применение</th>
						<th onClick={() => requestSort('availability')} className={getClassNamesFor('availability')}>Доступность</th>
						<th onClick={() => requestSort('quality')} className={getClassNamesFor('quality')}>Качество</th>
						<th onClick={() => requestSort('complexity')} className={getClassNamesFor('complexity')}>Сложность изготовления</th>
						<th onClick={() => requestSort('lifetime')} className={getClassNamesFor('lifetime')}>Срок службы (лет)</th>
						<th onClick={() => requestSort('components')} className={getClassNamesFor('components')}>Компоненты изготовления</th>
						<th onClick={() => requestSort('type')} className={getClassNamesFor('type')}>Тип</th>
						<th onClick={() => requestSort('frequencyConverter')} className={getClassNamesFor('frequencyConverter')}>Преобразователь частоты</th>
						<th onClick={() => requestSort('analogDigital')} className={getClassNamesFor('analogDigital')}>Аналоговые / Цифровые / Гибридные</th>
						<th onClick={() => requestSort('gateType')} className={getClassNamesFor('gateType')}>Тип затвора</th>
						<th onClick={() => requestSort('Vce')} className={getClassNamesFor('Vce')}>Номинальное напряжение коллектор-эмиттер</th>
						<th onClick={() => requestSort('Ic')} className={getClassNamesFor('Ic')}>Номинальный ток коллектора</th>
						<th onClick={() => requestSort('β')} className={getClassNamesFor('β')}>Коэффициент усиления</th>
						<th onClick={() => requestSort('Pmax')} className={getClassNamesFor('Pmax')}>Максимальная мощность</th>
						<th onClick={() => requestSort('RdsOn')} className={getClassNamesFor('RdsOn')}>Сопротивление между истоком и стоком</th>
						<th onClick={() => requestSort('Vth')} className={getClassNamesFor('Vth')}>Напряжение порога</th>
						<th onClick={() => requestSort('switchingSpeed')} className={getClassNamesFor('switchingSpeed')}>Скорость переключения</th>
						<th onClick={() => requestSort('inputOutputResistance')} className={getClassNamesFor('inputOutputResistance')}>Сопротивление входа и выхода</th>
						<th onClick={() => requestSort('tempCoefficient')} className={getClassNamesFor('tempCoefficient')}>Температурный коэффициент</th>
						<th onClick={() => requestSort('maxVbe')} className={getClassNamesFor('maxVbe')}>Максимальное напряжение базы-эмиттера</th>
						<th onClick={() => requestSort('fT')} className={getClassNamesFor('fT')}>Максимальная частота перехода</th>
						<th onClick={() => requestSort('capacitance')} className={getClassNamesFor('capacitance')}>Емкость перехода</th>
						<th onClick={() => requestSort('tempRange')} className={getClassNamesFor('tempRange')}>Температурный диапазон</th>
					</tr>
				</thead>
				<tbody>
					{sortedData.map((transistor, index) => (
						<tr key={index}>
							<td>{transistor.name}</td>
							<td>{transistor.description}</td>
							<td>{transistor.advantages.join(', ')}</td>
							<td>{transistor.disadvantages.join(', ')}</td>
							<td>{transistor.application.join(', ')}</td>
							<td>{transistor.availability}</td>
							<td>{transistor.quality}</td>
							<td>{transistor.complexity}</td>
							<td>{transistor.lifetime}</td>
							<td>{transistor.components.join(', ')}</td>
							<td>{transistor.type}</td>
							<td>{transistor.frequencyConverter ? 'Да' : 'Нет'}</td>
							<td>{transistor.analogDigital}</td>
							<td>{transistor.gateType}</td>
							<td>{transistor.Vce}</td>
							<td>{transistor.Ic}</td>
							<td>{transistor.β}</td>
							<td>{transistor.Pmax}</td>
							<td>{transistor.RdsOn}</td>
							<td>{transistor.Vth}</td>
							<td>{transistor.switchingSpeed}</td>
							<td>{transistor.inputOutputResistance}</td>
							<td>{transistor.tempCoefficient}</td>
							<td>{transistor.maxVbe}</td>
							<td>{transistor.fT}</td>
							<td>{transistor.capacitance}</td>
							<td>{transistor.tempRange}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TransistorList;
