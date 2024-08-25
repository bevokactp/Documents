import React, { useState } from 'react';


const fuseData = [
	{
		name: 'Стеклянные трубки',
		description: 'Прозрачные в стеклянной трубке.',
		advantages: 'Удобны для визуальной проверки.',
		disadvantages: 'Меньшая прочность по сравнению с керамическими.',
		application: 'Бытовая электроника, малые устройства.',
		availability: 'Широко доступные',
		quality: 'Среднее',
		reliability: 'Средняя',
		manufacturingDifficulty: 2,
		lifespan: 5,
		ratedCurrent: '0.5A - 10A',
		ratedVoltage: '250V',
		responseType: 'Стандартное',
		breakingCharacteristic: 'Медленное срабатывание',
		bodyMaterial: 'Стекло',
		heatDissipation: 'Низкое',
		operatingTemperature: '-10°C to 70°C',
		resistiveResistance: '0.1Ω',
		connectionType: 'Ось',
		dimensions: '5mm x 20mm',
		breakingType: 'Полное разрывание',
		selfRestoringMechanism: 'Нет',
		breakingEnergy: '0.1J',
		overloadLimits: '1.5x номинального тока'
	},
	{
		name: 'Керамические трубки',
		description: 'в керамической трубке.',
		advantages: 'Лучшее рассеивание тепла, высокая прочность.',
		disadvantages: 'Меньшая визуальная проверка.',
		application: 'Силовые устройства, медицинская техника.',
		availability: 'Широко доступные',
		quality: 'Высокое',
		reliability: 'Высокая',
		manufacturingDifficulty: 3,
		lifespan: 10,
		ratedCurrent: '1A - 20A',
		ratedVoltage: '500V',
		responseType: 'Стандартное',
		breakingCharacteristic: 'Быстрое срабатывание',
		bodyMaterial: 'Керамика',
		heatDissipation: 'Высокое',
		operatingTemperature: '-20°C to 85°C',
		resistiveResistance: '0.05Ω',
		connectionType: 'Ось',
		dimensions: '6mm x 25mm',
		breakingType: 'Полное разрывание',
		selfRestoringMechanism: 'Нет',
		breakingEnergy: '0.2J',
		overloadLimits: '2x номинального тока'
	},
	{
		name: 'Микропредохранители',
		description: 'Малые для защиты компонентов.',
		advantages: 'Компактные размеры, высокая точность.',
		disadvantages: 'Могут быть менее надежными при больших токах.',
		application: 'Электроника, компьютерные устройства.',
		availability: 'Широко доступные',
		quality: 'Среднее',
		reliability: 'Средняя',
		manufacturingDifficulty: 4,
		lifespan: 3,
		ratedCurrent: '0.1A - 5A',
		ratedVoltage: '32V',
		responseType: 'Стандартное',
		breakingCharacteristic: 'Быстрое срабатывание',
		bodyMaterial: 'Пластик',
		heatDissipation: 'Среднее',
		operatingTemperature: '-20°C to 60°C',
		resistiveResistance: '0.2Ω',
		connectionType: 'Радиал',
		dimensions: '3mm x 10mm',
		breakingType: 'Полное разрывание',
		selfRestoringMechanism: 'Нет',
		breakingEnergy: '0.05J',
		overloadLimits: '2x номинального тока'
	},
	{
		name: 'Термопредохранители',
		description: ' которые срабатывают при достижении определенной температуры.',
		advantages: 'Защита от перегрева.',
		disadvantages: 'Медленная реакция на перегрузки.',
		application: 'Электрические устройства с возможностью перегрева.',
		availability: 'Широко доступные',
		quality: 'Среднее',
		reliability: 'Высокая',
		manufacturingDifficulty: 3,
		lifespan: 7,
		ratedCurrent: '1A - 15A',
		ratedVoltage: '250V',
		responseType: 'Термочувствительное',
		breakingCharacteristic: 'Медленное срабатывание',
		bodyMaterial: 'Керамика/пластик',
		heatDissipation: 'Высокое',
		operatingTemperature: '80°C - 150°C',
		resistiveResistance: '0.1Ω',
		connectionType: 'Ось',
		dimensions: '5mm x 20mm',
		breakingType: 'Полное разрывание',
		selfRestoringMechanism: 'Нет',
		breakingEnergy: '0.1J',
		overloadLimits: '1.5x номинального тока'
	},
	{
		name: 'Автоматические',
		description: 'с возможностью автоматического восстановления.',
		advantages: 'Могут восстанавливаться после отключения.',
		disadvantages: 'Дороже обычных предохранителей.',
		application: 'Электрические панели, распределительные устройства.',
		availability: 'Широко доступные',
		quality: 'Высокое',
		reliability: 'Высокая',
		manufacturingDifficulty: 4,
		lifespan: 15,
		ratedCurrent: '1A - 100A',
		ratedVoltage: '230V - 400V',
		responseType: 'Автоматическое',
		breakingCharacteristic: 'Медленное срабатывание',
		bodyMaterial: 'Пластик',
		heatDissipation: 'Среднее',
		operatingTemperature: '-10°C to 60°C',
		resistiveResistance: '0.05Ω',
		connectionType: 'Радиал',
		dimensions: '15mm x 50mm',
		breakingType: 'Полное разрывание',
		selfRestoringMechanism: 'Да',
		breakingEnergy: '0.5J',
		overloadLimits: '3x номинального тока'
	},
	{
		name: 'с быстрым срабатыванием',
		description: ' которые срабатывают очень быстро при перегрузке.',
		advantages: 'Быстрое реагирование на короткие замыкания.',
		disadvantages: 'Меньшая толерантность к перегрузкам.',
		application: 'Электроника, чувствительные устройства.',
		availability: 'Широко доступные',
		quality: 'Среднее',
		reliability: 'Средняя',
		manufacturingDifficulty: 2,
		lifespan: 4,
		ratedCurrent: '0.1A - 10A',
		ratedVoltage: '250V',
		responseType: 'Быстрое',
		breakingCharacteristic: 'Быстрое срабатывание',
		bodyMaterial: 'Стекло/пластик',
		heatDissipation: 'Низкое',
		operatingTemperature: '-10°C to 70°C',
		resistiveResistance: '0.05Ω',
		connectionType: 'Ось',
		dimensions: '5mm x 15mm',
		breakingType: 'Полное разрывание',
		selfRestoringMechanism: 'Нет',
		breakingEnergy: '0.1J',
		overloadLimits: '1.2x номинального тока'
	},
	{
		name: 'с медленным срабатыванием',
		description: ' которые срабатывают медленно при длительных перегрузках.',
		advantages: 'Выдерживают кратковременные перегрузки.',
		disadvantages: 'Медленное реагирование на короткие замыкания.',
		application: 'Силовые устройства, трансформаторы.',
		availability: 'Широко доступные',
		quality: 'Среднее',
		reliability: 'Средняя',
		manufacturingDifficulty: 3,
		lifespan: 6,
		ratedCurrent: '1A - 30A',
		ratedVoltage: '500V',
		responseType: 'Медленное',
		breakingCharacteristic: 'Медленное срабатывание',
		bodyMaterial: 'Керамика/пластик',
		heatDissipation: 'Среднее',
		operatingTemperature: '-20°C to 80°C',
		resistiveResistance: '0.1Ω',
		connectionType: 'Радиал',
		dimensions: '10mm x 30mm',
		breakingType: 'Полное разрывание',
		selfRestoringMechanism: 'Нет',
		breakingEnergy: '0.2J',
		overloadLimits: '2x номинального тока'
	},
	{
		name: 'Симметричные',
		description: 'с одинаковыми параметрами с обеих сторон.',
		advantages: 'Удобны для установки в обе стороны.',
		disadvantages: 'Могут быть менее компактными.',
		application: 'Электрические устройства с симметричной компоновкой.',
		availability: 'Широко доступные',
		quality: 'Среднее',
		reliability: 'Средняя',
		manufacturingDifficulty: 3,
		lifespan: 5,
		ratedCurrent: '0.5A - 10A',
		ratedVoltage: '250V',
		responseType: 'Стандартное',
		breakingCharacteristic: 'Медленное срабатывание',
		bodyMaterial: 'Пластик',
		heatDissipation: 'Среднее',
		operatingTemperature: '-10°C to 70°C',
		resistiveResistance: '0.1Ω',
		connectionType: 'Ось',
		dimensions: '5mm x 20mm',
		breakingType: 'Полное разрывание',
		selfRestoringMechanism: 'Нет',
		breakingEnergy: '0.1J',
		overloadLimits: '1.5x номинального тока'
	},
	{
		name: 'Многоразовые',
		description: ' которые можно восстанавливать после срабатывания.',
		advantages: 'Можно использовать повторно.',
		disadvantages: 'Высокая стоимость.',
		application: 'Промышленные и высоконагруженные системы.',
		availability: 'Ограниченно доступные',
		quality: 'Высокое',
		reliability: 'Высокая',
		manufacturingDifficulty: 4,
		lifespan: 20,
		ratedCurrent: '1A - 100A',
		ratedVoltage: '500V',
		responseType: 'Автоматическое',
		breakingCharacteristic: 'Медленное срабатывание',
		bodyMaterial: 'Металл/пластик',
		heatDissipation: 'Высокое',
		operatingTemperature: '-20°C to 85°C',
		resistiveResistance: '0.05Ω',
		connectionType: 'Радиал',
		dimensions: '10mm x 40mm',
		breakingType: 'Полное разрывание',
		selfRestoringMechanism: 'Да',
		breakingEnergy: '0.5J',
		overloadLimits: '3x номинального тока'
	},
	{
		name: 'Радиальные',
		description: 'с радиальными выводами.',
		advantages: 'Компактное размещение на плате.',
		disadvantages: 'Ограниченная доступность.',
		application: 'Электронные устройства и платы.',
		availability: 'Ограниченно доступные',
		quality: 'Среднее',
		reliability: 'Средняя',
		manufacturingDifficulty: 3,
		lifespan: 5,
		ratedCurrent: '0.1A - 10A',
		ratedVoltage: '250V',
		responseType: 'Стандартное',
		breakingCharacteristic: 'Медленное срабатывание',
		bodyMaterial: 'Пластик',
		heatDissipation: 'Низкое',
		operatingTemperature: '-10°C to 70°C',
		resistiveResistance: '0.1Ω',
		connectionType: 'Радиал',
		dimensions: '5mm x 20mm',
		breakingType: 'Полное разрывание',
		selfRestoringMechanism: 'Нет',
		breakingEnergy: '0.1J',
		overloadLimits: '1.5x номинального тока'
	}
];

const FuseList = () => {
	const [sortConfig, setSortConfig] = useState(null);

	const sortedFuses = React.useMemo(() => {
		let sortableItems = [...fuseData];
		if (sortConfig !== null) {
			sortableItems.sort((a, b) => {
				if (a[sortConfig.key] < b[sortConfig.key]) {
					return sortConfig.direction === 'ascending' ? -1 : 1;
				}
				if (a[sortConfig.key] > b[sortConfig.key]) {
					return sortConfig.direction === 'ascending' ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableItems;
	}, [fuseData, sortConfig]);

	const requestSort = (key) => {
		let direction = 'ascending';
		if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	};

	return (
		<div>
			<h1>Типы предохранителей</h1>
			<table>
				<thead>
					<tr>
						<th onClick={() => requestSort('name')}>Название</th>
						<th onClick={() => requestSort('description')}>Описание</th>
						<th onClick={() => requestSort('advantages')}>Преимущества</th>
						<th onClick={() => requestSort('disadvantages')}>Недостатки</th>
						<th onClick={() => requestSort('application')}>Применение</th>
						<th onClick={() => requestSort('availability')}>Доступность</th>
						<th onClick={() => requestSort('quality')}>Качество</th>
						<th onClick={() => requestSort('reliability')}>Надежность</th>
						<th onClick={() => requestSort('manufacturingDifficulty')}>Сложность изготовления</th>
						<th onClick={() => requestSort('lifespan')}>Срок службы лет</th>
						<th onClick={() => requestSort('ratedCurrent')}>Номинальный ток</th>
						<th onClick={() => requestSort('ratedVoltage')}>Номинальное напряжение</th>
						<th onClick={() => requestSort('responseType')}>Тип срабатывания</th>
						<th onClick={() => requestSort('breakingCharacteristic')}>Характеристика срабатывания</th>
						<th onClick={() => requestSort('bodyMaterial')}>Материал корпуса</th>
						<th onClick={() => requestSort('heatDissipation')}>Потери на нагрев</th>
						<th onClick={() => requestSort('operatingTemperature')}>Рабочая температура</th>
						<th onClick={() => requestSort('resistiveResistance')}>Резистивное сопротивление</th>
						<th onClick={() => requestSort('connectionType')}>Тип соединений</th>
						<th onClick={() => requestSort('dimensions')}>Размеры</th>
						<th onClick={() => requestSort('breakingType')}>Тип разрыва</th>
						<th onClick={() => requestSort('selfRestoringMechanism')}>Механизм самовосстановления</th>
						<th onClick={() => requestSort('breakingEnergy')}>Энергия разрыва</th>
						<th onClick={() => requestSort('overloadLimits')}>Пределы перегрузки</th>
					</tr>
				</thead>
				<tbody>
					{sortedFuses.map((fuse, index) => (
						<tr key={index}>
							<td>{fuse.name}</td>
							<td>{fuse.description}</td>
							<td>{fuse.advantages}</td>
							<td>{fuse.disadvantages}</td>
							<td>{fuse.application}</td>
							<td>{fuse.availability}</td>
							<td>{fuse.quality}</td>
							<td>{fuse.reliability}</td>
							<td>{fuse.manufacturingDifficulty}</td>
							<td>{fuse.lifespan}</td>
							<td>{fuse.ratedCurrent}</td>
							<td>{fuse.ratedVoltage}</td>
							<td>{fuse.responseType}</td>
							<td>{fuse.breakingCharacteristic}</td>
							<td>{fuse.bodyMaterial}</td>
							<td>{fuse.heatDissipation}</td>
							<td>{fuse.operatingTemperature}</td>
							<td>{fuse.resistiveResistance}</td>
							<td>{fuse.connectionType}</td>
							<td>{fuse.dimensions}</td>
							<td>{fuse.breakingType}</td>
							<td>{fuse.selfRestoringMechanism}</td>
							<td>{fuse.breakingEnergy}</td>
							<td>{fuse.overloadLimits}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default FuseList;
