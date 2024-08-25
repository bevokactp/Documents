import React from 'react';

const pumpData = [
	{
	  name: 'Центростремительные',
	  description: 'Насосы, использующие центростремительную силу для перемещения жидкости.',
	  advantages: ['Высокая производительность', 'Простота конструкции'],
	  disadvantages: ['Может быть шумным', 'Ограниченная способность перекачивать вязкие жидкости'],
	  application: ['Промышленные системы', 'Системы водоснабжения'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 10,
	  components: ['Импеллер', 'Корпус', 'Вал'],
	  performance: 'Высокая',
	  pressure: 'Среднее',
	  power: '1.5kW',
	  size: 'Средний',
	  shape: 'Цилиндрическая',
	  controlType: 'Механическое',
	  noiseLevel: 'Средний',
	  operatingTemperatureRange: '-10°C до 70°C',
	  maxPressure: '5 бар',
	  coolingSystem: 'Воздушное',
	},
	{
	  name: 'Диафрагменные',
	  description: 'Насосы, использующие диафрагму для перекачки жидкости.',
	  advantages: ['Безконтактное перемещение жидкости', 'Хорошая герметичность'],
	  disadvantages: ['Может быть менее эффективным', 'Сложность в обслуживании'],
	  application: ['Химическая промышленность', 'Медицинские приложения'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 8,
	  components: ['Диафрагма', 'Камера', 'Привод'],
	  performance: 'Средняя',
	  pressure: 'Высокое',
	  power: '750W',
	  size: 'Средний',
	  shape: 'Цилиндрическая',
	  controlType: 'Пневматическое',
	  noiseLevel: 'Средний',
	  operatingTemperatureRange: '-20°C до 60°C',
	  maxPressure: '8 бар',
	  coolingSystem: 'Не применимо',
	},
	{
	  name: 'Шестеренные',
	  description: 'Насосы, использующие шестерни для перекачки жидкости.',
	  advantages: ['Высокое давление', 'Малые размеры'],
	  disadvantages: ['Может быть шумным', 'Потребляет много энергии'],
	  application: ['Масляные системы', 'Гидравлические системы'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 10,
	  components: ['Шестерни', 'Корпус', 'Вал'],
	  performance: 'Высокая',
	  pressure: 'Высокое',
	  power: '2kW',
	  size: 'Малый',
	  shape: 'Кубическая',
	  controlType: 'Механическое',
	  noiseLevel: 'Средний',
	  operatingTemperatureRange: '-10°C до 80°C',
	  maxPressure: '10 бар',
	  coolingSystem: 'Воздушное',
	},
	{
	  name: 'Перистальтические',
	  description: 'Насосы, использующие перистальтическое движение для перекачки жидкости.',
	  advantages: ['Гигиеничность', 'Перекачка вязких и агрессивных жидкостей'],
	  disadvantages: ['Может быть менее эффективным при больших объемах', 'Необходима регулярная замена трубок'],
	  application: ['Фармацевтика', 'Пищевая промышленность'],
	  availability: 5,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 5,
	  components: ['Трубка', 'Ролики', 'Корпус'],
	  performance: 'Средняя',
	  pressure: 'Низкое',
	  power: '500W',
	  size: 'Малый',
	  shape: 'Цилиндрическая',
	  controlType: 'Электронное',
	  noiseLevel: 'Низкий',
	  operatingTemperatureRange: '-5°C до 50°C',
	  maxPressure: '3 бар',
	  coolingSystem: 'Не применимо',
	},
	{
	  name: 'Мембранные',
	  description: 'Насосы, использующие мембрану для перекачки жидкости.',
	  advantages: ['Высокая герметичность', 'Подходит для агрессивных жидкостей'],
	  disadvantages: ['Может быть менее долговечным', 'Сложность в обслуживании'],
	  application: ['Химическая обработка', 'Промышленные жидкости'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 7,
	  components: ['Мембрана', 'Камера', 'Привод'],
	  performance: 'Средняя',
	  pressure: 'Высокое',
	  power: '1kW',
	  size: 'Средний',
	  shape: 'Цилиндрическая',
	  controlType: 'Механическое',
	  noiseLevel: 'Средний',
	  operatingTemperatureRange: '-20°C до 60°C',
	  maxPressure: '7 бар',
	  coolingSystem: 'Не применимо',
	},
	{
	  name: 'Поршневые одноступенчатые',
	  description: 'Насосы с одним поршнем для перекачки жидкости.',
	  advantages: ['Компактный размер', 'Хорошая производительность'],
	  disadvantages: ['Может быть менее эффективным при высоких давлениях', 'Может издавать шум'],
	  application: ['Масляные системы', 'Системы водоснабжения'],
	  availability: 4,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 3,
	  lifespan: 10,
	  components: ['Поршень', 'Цилиндр', 'Вал'],
	  performance: 'Средняя',
	  pressure: 'Среднее',
	  power: '1kW',
	  size: 'Малый',
	  shape: 'Цилиндрическая',
	  controlType: 'Механическое',
	  noiseLevel: 'Средний',
	  operatingTemperatureRange: '-10°C до 70°C',
	  maxPressure: '6 бар',
	  coolingSystem: 'Воздушное',
	},
	{
	  name: 'Поршневые многоступенчатые',
	  description: 'Насосы с несколькими поршнями для перекачки жидкости.',
	  advantages: ['Высокое давление', 'Эффективен при больших объемах'],
	  disadvantages: ['Сложность конструкции', 'Может быть шумным'],
	  application: ['Высоконапорные системы', 'Промышленные применения'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 5,
	  lifespan: 12,
	  components: ['Поршни', 'Цилиндры', 'Корпус'],
	  performance: 'Высокая',
	  pressure: 'Высокое',
	  power: '3kW',
	  size: 'Средний',
	  shape: 'Цилиндрическая',
	  controlType: 'Механическое',
	  noiseLevel: 'Высокий',
	  operatingTemperatureRange: '-10°C до 80°C',
	  maxPressure: '15 бар',
	  coolingSystem: 'Воздушное',
	},
	{
	  name: 'Винтовые одинарные',
	  description: 'Насосы, использующие один винт для перекачки жидкости.',
	  advantages: ['Низкий уровень шума', 'Может перекачивать вязкие жидкости'],
	  disadvantages: ['Может быть менее эффективным при высоких давлениях', 'Сложность в обслуживании'],
	  application: ['Масляные системы', 'Промышленные жидкости'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 8,
	  components: ['Винт', 'Корпус', 'Подшипники'],
	  performance: 'Средняя',
	  pressure: 'Среднее',
	  power: '1.5kW',
	  size: 'Средний',
	  shape: 'Цилиндрическая',
	  controlType: 'Механическое',
	  noiseLevel: 'Низкий',
	  operatingTemperatureRange: '-10°C до 70°C',
	  maxPressure: '5 бар',
	  coolingSystem: 'Не применимо',
	},
	{
	  name: 'Двухвинтовые',
	  description: 'Насосы, использующие два винта для перемещения жидкости.',
	  advantages: ['Высокая производительность', 'Эффективность при вязких жидкостях'],
	  disadvantages: ['Сложность конструкции', 'Высокая стоимость'],
	  application: ['Промышленные системы', 'Химическая промышленность'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 5,
	  lifespan: 10,
	  components: ['Винты', 'Корпус', 'Подшипники'],
	  performance: 'Высокая',
	  pressure: 'Высокое',
	  power: '2.5kW',
	  size: 'Средний',
	  shape: 'Цилиндрическая',
	  controlType: 'Механическое',
	  noiseLevel: 'Средний',
	  operatingTemperatureRange: '-10°C до 80°C',
	  maxPressure: '8 бар',
	  coolingSystem: 'Воздушное',
	},
	{
	  name: 'Ротационные с лопастями',
	  description: 'Насосы с ротацией и лопастями для перекачки жидкости.',
	  advantages: ['Низкий уровень шума', 'Высокая эффективность'],
	  disadvantages: ['Может быть менее эффективным при высоких давлениях', 'Необходима регулярная проверка лопастей'],
	  application: ['Промышленные системы', 'Вакуумные системы'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 10,
	  components: ['Лопасти', 'Корпус', 'Вал'],
	  performance: 'Высокая',
	  pressure: 'Среднее',
	  power: '1.5kW',
	  size: 'Средний',
	  shape: 'Цилиндрическая',
	  controlType: 'Механическое',
	  noiseLevel: 'Низкий',
	  operatingTemperatureRange: '-10°C до 70°C',
	  maxPressure: '6 бар',
	  coolingSystem: 'Воздушное',
	},
	{
	  name: 'Ротационные спиральные',
	  description: 'Насосы с ротацией и спиральным движением для перекачки жидкости.',
	  advantages: ['Высокая производительность', 'Малый размер'],
	  disadvantages: ['Может быть шумным', 'Высокая стоимость'],
	  application: ['Промышленные системы', 'Пищевая промышленность'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 5,
	  lifespan: 10,
	  components: ['Спираль', 'Корпус', 'Вал'],
	  performance: 'Высокая',
	  pressure: 'Высокое',
	  power: '2kW',
	  size: 'Средний',
	  shape: 'Цилиндрическая',
	  controlType: 'Электронное',
	  noiseLevel: 'Средний',
	  operatingTemperatureRange: '-10°C до 80°C',
	  maxPressure: '8 бар',
	  coolingSystem: 'Воздушное',
	},
	{
	  name: 'Центробежные одинарные',
	  description: 'Насосы с одним центробежным элементом для перекачки жидкости.',
	  advantages: ['Простота конструкции', 'Высокая производительность'],
	  disadvantages: ['Может быть менее эффективным при вязких жидкостях', 'Может издавать шум'],
	  application: ['Промышленные системы', 'Системы водоснабжения'],
	  availability: 5,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 2,
	  lifespan: 12,
	  components: ['Импеллер', 'Корпус', 'Вал'],
	  performance: 'Высокая',
	  pressure: 'Среднее',
	  power: '1kW',
	  size: 'Средний',
	  shape: 'Цилиндрическая',
	  controlType: 'Механическое',
	  noiseLevel: 'Средний',
	  operatingTemperatureRange: '-10°C до 70°C',
	  maxPressure: '6 бар',
	  coolingSystem: 'Воздушное',
	},
	{
	  name: 'Центробежные многоступенчатые',
	  description: 'Насосы с несколькими центробежными элементами для перекачки жидкости.',
	  advantages: ['Высокое давление', 'Высокая производительность'],
	  disadvantages: ['Сложность конструкции', 'Высокая стоимость'],
	  application: ['Промышленные системы', 'Гидравлические системы'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 5,
	  lifespan: 15,
	  components: ['Импеллеры', 'Корпус', 'Вал'],
	  performance: 'Высокая',
	  pressure: 'Высокое',
	  power: '3kW',
	  size: 'Большой',
	  shape: 'Цилиндрическая',
	  controlType: 'Электронное',
	  noiseLevel: 'Средний',
	  operatingTemperatureRange: '-10°C до 80°C',
	  maxPressure: '15 бар',
	  coolingSystem: 'Воздушное',
	},
  ];


  const PumpList = () => {
	const [sortConfig, setSortConfig] = React.useState({ key: 'name', direction: 'ascending' });

	const sortedData = React.useMemo(() => {
	  let sortableItems = [...pumpData];
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
	}, [sortConfig]);

	const requestSort = (key) => {
	  let direction = 'ascending';
	  if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
		direction = 'descending';
	  }
	  setSortConfig({ key, direction });
	};

	return (
	  <div>
		<h1>Типы насосов</h1>
		<table>
		  <thead>
			<tr>
			  <th onClick={() => requestSort('name')}>Название</th>
			  <th onClick={() => requestSort('description')}>Описание</th>
			  <th onClick={() => requestSort('advantages')}>Преимущества</th>
			  <th onClick={() => requestSort('disadvantages')}>Недостатки</th>
			  <th onClick={() => requestSort('application')}>Применение</th>
			  <th onClick={() => requestSort('availability')}>Доступность</th>
			  <th onClick={() => requestSort('qualityAndReliability')}>Качество и надежность</th>
			  <th onClick={() => requestSort('manufacturingComplexity')}>Сложность изготовления</th>
			  <th onClick={() => requestSort('lifespan')}>Срок службы</th>
			  <th onClick={() => requestSort('performance')}>Производительность</th>
			  <th onClick={() => requestSort('pressure')}>Напор</th>
			  <th onClick={() => requestSort('power')}>Мощность</th>
			  <th onClick={() => requestSort('size')}>Размер</th>
			  <th onClick={() => requestSort('shape')}>Форма</th>
			  <th onClick={() => requestSort('controlType')}>Тип управления</th>
			  <th onClick={() => requestSort('noiseLevel')}>Уровень шума</th>
			  <th onClick={() => requestSort('operatingTemperatureRange')}>Температурный диапазон работы</th>
			  <th onClick={() => requestSort('maxPressure')}>Максимальное давление</th>
			  <th onClick={() => requestSort('coolingSystem')}>Системы охлаждения</th>
			</tr>
		  </thead>
		  <tbody>
			{sortedData.map((pump, index) => (
			  <tr key={index}>
				<td>{pump.name}</td>
				<td>{pump.description}</td>
				<td>{pump.advantages.join(', ')}</td>
				<td>{pump.disadvantages.join(', ')}</td>
				<td>{pump.application.join(', ')}</td>
				<td>{pump.availability}</td>
				<td>{pump.qualityAndReliability}</td>
				<td>{pump.manufacturingComplexity}</td>
				<td>{pump.lifespan}</td>
				<td>{pump.performance}</td>
				<td>{pump.pressure}</td>
				<td>{pump.power}</td>
				<td>{pump.size}</td>
				<td>{pump.shape}</td>
				<td>{pump.controlType}</td>
				<td>{pump.noiseLevel}</td>
				<td>{pump.operatingTemperatureRange}</td>
				<td>{pump.maxPressure}</td>
				<td>{pump.coolingSystem}</td>
			  </tr>
			))}
		  </tbody>
		</table>
	  </div>
	);
  };

  export default PumpList;
