import React, { useState } from 'react';

const chokeData = [
	{
		name: 'Осьевой дроссель',
		description: 'Дроссель с выводами, расположенными на концах катушки.',
		advantages: 'Компактность, простота монтажа.',
		disadvantages: 'Ограниченная мощность.',
		application: 'Электронные устройства, печатные платы.',
		availability: 'Широко доступные',
		quality: 'Среднее',
		reliability: 'Средняя',
		power: '5W',
		size: '10mm x 10mm',
		manufacturingComplexity: 2,
		lifespan: 10,
		qFactor: '30',
		inductance: '100μH',
		qualityCoefficient: '50',
		maxVoltage: '50V',
		maxLosses: '1%',
		maxCurrent: '1A',
		wireMaterial: 'Медь',
		coreMaterial: 'Феррит',
		coreSaturation: 'Среднее',
		type: 'Постоянные',
		workingFrequency: '100kHz',
		resistanceDc: '0.2Ω',
		temperatureRange: '−40°C to +85°C',
		tempCoeffInductance: '±5%',
		magneticMaterialType: 'Феррит',
		shape: 'Цилиндр',
		frequencyRange: 'DC to 100kHz',
		noise: 'Средний',
		shielding: 'Нет',
	},
	{
		name: 'Радиальный дроссель',
		description: 'Дроссель с выводами, расположенными радиально от центра катушки.',
		advantages: 'Высокая мощность, хорошая устойчивость к помехам.',
		disadvantages: 'Большие размеры.',
		application: 'Электронные устройства, силовые блоки.',
		availability: 'Широко доступные',
		quality: 'Хорошее',
		reliability: 'Высокая',
		power: '20W',
		size: '20mm x 20mm',
		manufacturingComplexity: 3,
		lifespan: 15,
		qFactor: '45',
		inductance: '220μH',
		qualityCoefficient: '60',
		maxVoltage: '100V',
		maxLosses: '2%',
		maxCurrent: '2A',
		wireMaterial: 'Медь',
		coreMaterial: 'Никелевое железо',
		coreSaturation: 'Высокое',
		type: 'Постоянные',
		workingFrequency: '200kHz',
		resistanceDc: '0.1Ω',
		temperatureRange: '−25°C to +75°C',
		tempCoeffInductance: '±3%',
		magneticMaterialType: 'Никелевое железо',
		shape: 'Куб',
		frequencyRange: 'DC to 200kHz',
		noise: 'Низкий',
		shielding: 'Да',
	},
	{
		name: 'Тороидальный дроссель',
		description: 'Дроссель с тороидальным сердечником для минимизации электромагнитных помех.',
		advantages: 'Компактный размер, эффективное подавление помех.',
		disadvantages: 'Сложность в изготовлении, высокая стоимость.',
		application: 'Источники питания, радиочастотные фильтры.',
		availability: 'Широко доступные',
		quality: 'Высокое',
		reliability: 'Высокая',
		power: '10W',
		size: '15mm x 15mm',
		manufacturingComplexity: 4,
		lifespan: 12,
		qFactor: '50',
		inductance: '150μH',
		qualityCoefficient: '55',
		maxVoltage: '75V',
		maxLosses: '1.5%',
		maxCurrent: '1.5A',
		wireMaterial: 'Медь',
		coreMaterial: 'Феррит',
		coreSaturation: 'Среднее',
		type: 'Постоянные',
		workingFrequency: '150kHz',
		resistanceDc: '0.15Ω',
		temperatureRange: '−30°C to +80°C',
		tempCoeffInductance: '±4%',
		magneticMaterialType: 'Феррит',
		shape: 'Тор',
		frequencyRange: 'DC to 150kHz',
		noise: 'Низкий',
		shielding: 'Нет',
	},
	{
		name: 'Шумоподавляющий дроссель',
		description: 'Дроссель, предназначенный для подавления высокочастотных помех.',
		advantages: 'Эффективное подавление шума и помех.',
		disadvantages: 'Может снижать частотный диапазон.',
		application: 'Источники питания, радиочастотные системы.',
		availability: 'Широко доступные',
		quality: 'Хорошее',
		reliability: 'Средняя',
		power: '8W',
		size: '12mm x 12mm',
		manufacturingComplexity: 3,
		lifespan: 8,
		qFactor: '40',
		inductance: '120μH',
		qualityCoefficient: '52',
		maxVoltage: '60V',
		maxLosses: '2%',
		maxCurrent: '1.2A',
		wireMaterial: 'Медь',
		coreMaterial: 'Феррит',
		coreSaturation: 'Низкое',
		type: 'Постоянные',
		workingFrequency: '120kHz',
		resistanceDc: '0.25Ω',
		temperatureRange: '−40°C to +75°C',
		tempCoeffInductance: '±6%',
		magneticMaterialType: 'Феррит',
		shape: 'Цилиндр',
		frequencyRange: 'DC to 120kHz',
		noise: 'Низкий',
		shielding: 'Да',
	},
	{
		name: 'Импульсный дроссель',
		description: 'Дроссель для работы с импульсными сигналами.',
		advantages: 'Высокая эффективность в импульсных режимах.',
		disadvantages: 'Ограниченная работа на постоянном токе.',
		application: 'Импульсные источники питания, преобразователи.',
		availability: 'Широко доступные',
		quality: 'Среднее',
		reliability: 'Высокая',
		power: '15W',
		size: '18mm x 18mm',
		manufacturingComplexity: 3,
		lifespan: 12,
		qFactor: '35',
		inductance: '200μH',
		qualityCoefficient: '53',
		maxVoltage: '80V',
		maxLosses: '1.8%',
		maxCurrent: '2A',
		wireMaterial: 'Медь',
		coreMaterial: 'Никелевое железо',
		coreSaturation: 'Высокое',
		type: 'Переменные',
		workingFrequency: '200kHz',
		resistanceDc: '0.2Ω',
		temperatureRange: '−20°C to +70°C',
		tempCoeffInductance: '±5%',
		magneticMaterialType: 'Никелевое железо',
		shape: 'Куб',
		frequencyRange: 'DC to 200kHz',
		noise: 'Средний',
		shielding: 'Нет',
	},
	{
		name: 'Силовой дроссель',
		description: 'Дроссель для применения в высокотоковых цепях.',
		advantages: 'Высокая пропускная способность тока.',
		disadvantages: 'Большие размеры и вес.',
		application: 'Силовые источники питания, преобразователи энергии.',
		availability: 'Широко доступные',
		quality: 'Высокое',
		reliability: 'Высокая',
		power: '50W',
		size: '30mm x 30mm',
		manufacturingComplexity: 4,
		lifespan: 20,
		qFactor: '25',
		inductance: '500μH',
		qualityCoefficient: '45',
		maxVoltage: '150V',
		maxLosses: '2.5%',
		maxCurrent: '5A',
		wireMaterial: 'Медь',
		coreMaterial: 'Никелевое железо',
		coreSaturation: 'Высокое',
		type: 'Постоянные',
		workingFrequency: '100kHz',
		resistanceDc: '0.05Ω',
		temperatureRange: '−25°C to +85°C',
		tempCoeffInductance: '±6%',
		magneticMaterialType: 'Никелевое железо',
		shape: 'Прямоугольник',
		frequencyRange: 'DC to 100kHz',
		noise: 'Низкий',
		shielding: 'Да',
	},
	// Добавьте больше данных по аналогии, если требуется
];


// Функция для сортировки данных по столбцам
const sortData = (data, column, direction) => {
	return [...data].sort((a, b) => {
		if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
		if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
		return 0;
	});
};

const ChokeList = () => {
	const [sortColumn, setSortColumn] = useState('name');
	const [sortDirection, setSortDirection] = useState('asc');

	const handleSort = (column) => {
		const newDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
		setSortColumn(column);
		setSortDirection(newDirection);
	};

	const sortedData = sortData(chokeData, sortColumn, sortDirection);

	return (
		<div>
			<h1>Типы дросселей</h1>
			<table>
				<thead>
					<tr>
						<th onClick={() => handleSort('name')}>Название</th>
						<th onClick={() => handleSort('description')}>Описание</th>
						<th onClick={() => handleSort('advantages')}>Преимущества</th>
						<th onClick={() => handleSort('disadvantages')}>Недостатки</th>
						<th onClick={() => handleSort('application')}>Применение</th>
						<th onClick={() => handleSort('availability')}>Доступность</th>
						<th onClick={() => handleSort('quality')}>Качество</th>
						<th onClick={() => handleSort('reliability')}>Надежность</th>
						<th onClick={() => handleSort('power')}>Мощность</th>
						<th onClick={() => handleSort('size')}>Размеры</th>
						<th onClick={() => handleSort('manufacturingComplexity')}>Сложность изготовления</th>
						<th onClick={() => handleSort('lifespan')}>Срок службы (лет)</th>
						<th onClick={() => handleSort('qFactor')}>Q-фактор</th>
						<th onClick={() => handleSort('inductance')}>Индуктивность</th>
						<th onClick={() => handleSort('qualityCoefficient')}>Коэффициент качества</th>
						<th onClick={() => handleSort('maxVoltage')}>Максимальное напряжение</th>
						<th onClick={() => handleSort('maxLosses')}>Максимальные потери</th>
						<th onClick={() => handleSort('maxCurrent')}>Максимальный ток</th>
						<th onClick={() => handleSort('wireMaterial')}>Материал провода</th>
						<th onClick={() => handleSort('coreMaterial')}>Материал сердечника</th>
						<th onClick={() => handleSort('coreSaturation')}>Насыщение сердечника</th>
						<th onClick={() => handleSort('type')}>Тип</th>
						<th onClick={() => handleSort('workingFrequency')}>Рабочая частота</th>
						<th onClick={() => handleSort('resistanceDc')}>Сопротивление в постоянном токе</th>
						<th onClick={() => handleSort('temperatureRange')}>Температурный диапазон</th>
						<th onClick={() => handleSort('tempCoeffInductance')}>Температурный коэффициент индуктивности</th>
						<th onClick={() => handleSort('magneticMaterialType')}>Тип магнитного материала</th>
						<th onClick={() => handleSort('shape')}>Форма</th>
						<th onClick={() => handleSort('frequencyRange')}>Частотный диапазон</th>
						<th onClick={() => handleSort('noise')}>Шум</th>
						<th onClick={() => handleSort('shielding')}>Экранирование</th>
					</tr>
				</thead>
				<tbody>
					{sortedData.map((choke, index) => (
						<tr key={index}>
							<td>{choke.name}</td>
							<td>{choke.description}</td>
							<td>{choke.advantages}</td>
							<td>{choke.disadvantages}</td>
							<td>{choke.application}</td>
							<td>{choke.availability}</td>
							<td>{choke.quality}</td>
							<td>{choke.reliability}</td>
							<td>{choke.power}</td>
							<td>{choke.size}</td>
							<td>{choke.manufacturingComplexity}</td>
							<td>{choke.lifespan}</td>
							<td>{choke.qFactor}</td>
							<td>{choke.inductance}</td>
							<td>{choke.qualityCoefficient}</td>
							<td>{choke.maxVoltage}</td>
							<td>{choke.maxLosses}</td>
							<td>{choke.maxCurrent}</td>
							<td>{choke.wireMaterial}</td>
							<td>{choke.coreMaterial}</td>
							<td>{choke.coreSaturation}</td>
							<td>{choke.type}</td>
							<td>{choke.workingFrequency}</td>
							<td>{choke.resistanceDc}</td>
							<td>{choke.temperatureRange}</td>
							<td>{choke.tempCoeffInductance}</td>
							<td>{choke.magneticMaterialType}</td>
							<td>{choke.shape}</td>
							<td>{choke.frequencyRange}</td>
							<td>{choke.noise}</td>
							<td>{choke.shielding}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ChokeList;
