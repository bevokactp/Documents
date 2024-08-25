import React, { useState } from 'react';





const chargeSourcesData = [
	{
	  name: 'Трибоэлектрический эффект',
	  description: 'Процесс генерации электрических зарядов при трении двух материалов.',
	  advantages: ['Высокая чувствительность', 'Простота в реализации'],
	  disadvantages: ['Низкая стабильность', 'Ограниченное применение'],
	  application: ['Электростатические генераторы', 'Датчики'],
	  availability: 3,
	  qualityAndReliability: 2,
	  manufacturingComplexity: 2,
	  lifespan: 5,
	  components: ['Материалы для трения'],
	  materialImpact: 'Сильное трение',
	  environmentalDependence: 'Средняя',
	  frequencyDependence: 'Низкая',
	  insulationProperties: 'Средние',
	  chargeIntensity: 'Низкая',
	  materials: ['Пластик', 'Металлы'],
	  mechanicalStrength: 'Средняя',
	  duration: 'Краткосрочная',
	  magneticPermeability: 'Низкая',
	  degradationProcess: 'Медленный',
	  chargeSizeAndShape: 'Мелкие',
	  chargeGenerationMethod: 'Трение',
	  stability: 'Средняя',
	  ionizationDegree: 'Низкая',
	  materialPurityDegree: 'Средняя',
	  temperatureDependence: 'Средняя',
	  chargeStability: 'Низкая',
	  chemicalStability: 'Средняя',
	  electricalCapacity: 'Низкая',
	  electricField: 'Среднее',
	  electricalResistance: 'Среднее',
	  energyDensity: 'Низкая',
	  chargeAccumulationAndLeakageEffect: 'Незначительный'
	},
	{
	  name: 'Фотогальванический эффект',
	  description: 'Процесс преобразования света в электрический ток.',
	  advantages: ['Высокая эффективность', 'Широкое применение'],
	  disadvantages: ['Зависимость от солнечного света', 'Высокая стоимость'],
	  application: ['Солнечные панели', 'Энергетические установки'],
	  availability: 5,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 4,
	  lifespan: 20,
	  components: ['Фотогальванические элементы', 'Полупроводники'],
	  materialImpact: 'Высокий',
	  environmentalDependence: 'Высокая',
	  frequencyDependence: 'Низкая',
	  insulationProperties: 'Высокие',
	  chargeIntensity: 'Средняя',
	  materials: ['Кремний', 'Галлий'],
	  mechanicalStrength: 'Высокая',
	  duration: 'Долгосрочная',
	  magneticPermeability: 'Низкая',
	  degradationProcess: 'Медленный',
	  chargeSizeAndShape: 'Разные',
	  chargeGenerationMethod: 'Свет',
	  stability: 'Высокая',
	  ionizationDegree: 'Низкая',
	  materialPurityDegree: 'Высокая',
	  temperatureDependence: 'Средняя',
	  chargeStability: 'Высокая',
	  chemicalStability: 'Высокая',
	  electricalCapacity: 'Высокая',
	  electricField: 'Высокое',
	  electricalResistance: 'Низкое',
	  energyDensity: 'Высокая',
	  chargeAccumulationAndLeakageEffect: 'Незначительный'
	},
	{
	  name: 'Фотоэлектрический эффект',
	  description: 'Эффект, при котором свет вызывает выброс электронов из материала.',
	  advantages: ['Эффективное преобразование света', 'Долгий срок службы'],
	  disadvantages: ['Высокая стоимость материалов', 'Зависимость от условий освещения'],
	  application: ['Фотоэлементы', 'Энергетические установки'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 15,
	  components: ['Фотоэлектрические элементы', 'Полупроводники'],
	  materialImpact: 'Средний',
	  environmentalDependence: 'Средняя',
	  frequencyDependence: 'Низкая',
	  insulationProperties: 'Высокие',
	  chargeIntensity: 'Средняя',
	  materials: ['Кремний', 'Селен'],
	  mechanicalStrength: 'Средняя',
	  duration: 'Долгосрочная',
	  magneticPermeability: 'Низкая',
	  degradationProcess: 'Медленный',
	  chargeSizeAndShape: 'Разные',
	  chargeGenerationMethod: 'Свет',
	  stability: 'Высокая',
	  ionizationDegree: 'Низкая',
	  materialPurityDegree: 'Высокая',
	  temperatureDependence: 'Средняя',
	  chargeStability: 'Высокая',
	  chemicalStability: 'Средняя',
	  electricalCapacity: 'Средняя',
	  electricField: 'Высокое',
	  electricalResistance: 'Низкое',
	  energyDensity: 'Средняя',
	  chargeAccumulationAndLeakageEffect: 'Незначительный'
	},
	{
	  name: 'Термоэлектрический эффект',
	  description: 'Эффект, при котором разница температур между двумя материалами вызывает генерацию электрического тока.',
	  advantages: ['Хорошая стабильность', 'Широкий диапазон применения'],
	  disadvantages: ['Низкая эффективность', 'Сложность в реализации'],
	  application: ['Термоэлектрические генераторы', 'Температурные датчики'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 10,
	  components: ['Термоэлектрические материалы'],
	  materialImpact: 'Средний',
	  environmentalDependence: 'Низкая',
	  frequencyDependence: 'Низкая',
	  insulationProperties: 'Средние',
	  chargeIntensity: 'Средняя',
	  materials: ['Селенид висмута', 'Термоэлектрические сплавы'],
	  mechanicalStrength: 'Средняя',
	  duration: 'Долгосрочная',
	  magneticPermeability: 'Низкая',
	  degradationProcess: 'Медленный',
	  chargeSizeAndShape: 'Разные',
	  chargeGenerationMethod: 'Тепло',
	  stability: 'Высокая',
	  ionizationDegree: 'Низкая',
	  materialPurityDegree: 'Средняя',
	  temperatureDependence: 'Высокая',
	  chargeStability: 'Средняя',
	  chemicalStability: 'Высокая',
	  electricalCapacity: 'Средняя',
	  electricField: 'Среднее',
	  electricalResistance: 'Среднее',
	  energyDensity: 'Средняя',
	  chargeAccumulationAndLeakageEffect: 'Незначительный'
	},
	{
	  name: 'Пьезоэлектрический эффект',
	  description: 'Эффект, при котором механическое давление на материал вызывает образование электрического заряда.',
	  advantages: ['Высокая чувствительность', 'Долгий срок службы'],
	  disadvantages: ['Ограниченная применимость', 'Чувствительность к температурным изменениям'],
	  application: ['Пьезоэлектрические датчики', 'Ультразвуковые устройства'],
	  availability: 4,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 3,
	  lifespan: 12,
	  components: ['Пьезоэлектрические кристаллы'],
	  materialImpact: 'Средний',
	  environmentalDependence: 'Средняя',
	  frequencyDependence: 'Низкая',
	  insulationProperties: 'Высокие',
	  chargeIntensity: 'Средняя',
	  materials: ['Кварц', 'Титанат свинца'],
	  mechanicalStrength: 'Высокая',
	  duration: 'Долгосрочная',
	  magneticPermeability: 'Низкая',
	  degradationProcess: 'Медленный',
	  chargeSizeAndShape: 'Разные',
	  chargeGenerationMethod: 'Механическое давление',
	  stability: 'Высокая',
	  ionizationDegree: 'Низкая',
	  materialPurityDegree: 'Высокая',
	  temperatureDependence: 'Средняя',
	  chargeStability: 'Высокая',
	  chemicalStability: 'Высокая',
	  electricalCapacity: 'Средняя',
	  electricField: 'Среднее',
	  electricalResistance: 'Среднее',
	  energyDensity: 'Средняя',
	  chargeAccumulationAndLeakageEffect: 'Незначительный'
	},
	{
	  name: 'Электростатическая индукция',
	  description: 'Процесс генерации электрического заряда в проводнике под воздействием внешнего электрического поля.',
	  advantages: ['Простота применения', 'Не требует физических контактов'],
	  disadvantages: ['Чувствительность к внешним полям', 'Ограниченная эффективность'],
	  application: ['Электростатические генераторы', 'Капациторы'],
	  availability: 4,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 2,
	  lifespan: 10,
	  components: ['Конденсаторы', 'Электростатические поля'],
	  materialImpact: 'Низкий',
	  environmentalDependence: 'Средняя',
	  frequencyDependence: 'Низкая',
	  insulationProperties: 'Высокие',
	  chargeIntensity: 'Средняя',
	  materials: ['Диэлектрики', 'Металлы'],
	  mechanicalStrength: 'Средняя',
	  duration: 'Среднесрочная',
	  magneticPermeability: 'Низкая',
	  degradationProcess: 'Медленный',
	  chargeSizeAndShape: 'Мелкие',
	  chargeGenerationMethod: 'Электростатическое поле',
	  stability: 'Средняя',
	  ionizationDegree: 'Низкая',
	  materialPurityDegree: 'Средняя',
	  temperatureDependence: 'Средняя',
	  chargeStability: 'Средняя',
	  chemicalStability: 'Средняя',
	  electricalCapacity: 'Средняя',
	  electricField: 'Среднее',
	  electricalResistance: 'Среднее',
	  energyDensity: 'Средняя',
	  chargeAccumulationAndLeakageEffect: 'Незначительный'
	},
	{
	  name: 'Электрохимическое явление',
	  description: 'Процесс генерации электрического заряда в результате химических реакций.',
	  advantages: ['Высокая эффективность', 'Широкое применение'],
	  disadvantages: ['Необходимость в химических веществах', 'Ограниченная стабильность'],
	  application: ['Электрохимические источники тока', 'Батареи'],
	  availability: 5,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 8,
	  components: ['Химические вещества', 'Электродные материалы'],
	  materialImpact: 'Высокий',
	  environmentalDependence: 'Средняя',
	  frequencyDependence: 'Низкая',
	  insulationProperties: 'Средние',
	  chargeIntensity: 'Высокая',
	  materials: ['Цинк', 'Медь'],
	  mechanicalStrength: 'Средняя',
	  duration: 'Среднесрочная',
	  magneticPermeability: 'Низкая',
	  degradationProcess: 'Средний',
	  chargeSizeAndShape: 'Разные',
	  chargeGenerationMethod: 'Химическая реакция',
	  stability: 'Средняя',
	  ionizationDegree: 'Низкая',
	  materialPurityDegree: 'Средняя',
	  temperatureDependence: 'Средняя',
	  chargeStability: 'Средняя',
	  chemicalStability: 'Средняя',
	  electricalCapacity: 'Высокая',
	  electricField: 'Среднее',
	  electricalResistance: 'Низкое',
	  energyDensity: 'Высокая',
	  chargeAccumulationAndLeakageEffect: 'Незначительный'
	},
	{
	  name: 'Радиационный эффект',
	  description: 'Процесс генерации электрического заряда под воздействием радиации.',
	  advantages: ['Высокая чувствительность', 'Широкий диапазон применения'],
	  disadvantages: ['Необходимость в радиационном источнике', 'Ограниченная стабильность'],
	  application: ['Детекторы радиации', 'Радиационные источники'],
	  availability: 3,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 4,
	  lifespan: 12,
	  components: ['Радиоактивные вещества', 'Детекторы'],
	  materialImpact: 'Высокий',
	  environmentalDependence: 'Средняя',
	  frequencyDependence: 'Низкая',
	  insulationProperties: 'Средние',
	  chargeIntensity: 'Средняя',
	  materials: ['Цезий', 'Йод'],
	  mechanicalStrength: 'Средняя',
	  duration: 'Среднесрочная',
	  magneticPermeability: 'Низкая',
	  degradationProcess: 'Медленный',
	  chargeSizeAndShape: 'Мелкие',
	  chargeGenerationMethod: 'Радиация',
	  stability: 'Средняя',
	  ionizationDegree: 'Высокая',
	  materialPurityDegree: 'Средняя',
	  temperatureDependence: 'Средняя',
	  chargeStability: 'Средняя',
	  chemicalStability: 'Средняя',
	  electricalCapacity: 'Средняя',
	  electricField: 'Среднее',
	  electricalResistance: 'Среднее',
	  energyDensity: 'Средняя',
	  chargeAccumulationAndLeakageEffect: 'Незначительный'
	},
	{
	  name: 'Акустическое электричество',
	  description: 'Процесс генерации электрических зарядов под воздействием звуковых волн.',
	  advantages: ['Интересные применения', 'Безопасность'],
	  disadvantages: ['Низкая эффективность', 'Зависимость от уровня звука'],
	  application: ['Акустические датчики', 'Энергетические системы'],
	  availability: 2,
	  qualityAndReliability: 2,
	  manufacturingComplexity: 3,
	  lifespan: 5,
	  components: ['Акустические элементы'],
	  materialImpact: 'Низкий',
	  environmentalDependence: 'Средняя',
	  frequencyDependence: 'Средняя',
	  insulationProperties: 'Средние',
	  chargeIntensity: 'Низкая',
	  materials: ['Пьезоэлектрические материалы'],
	  mechanicalStrength: 'Низкая',
	  duration: 'Краткосрочная',
	  magneticPermeability: 'Низкая',
	  degradationProcess: 'Быстрый',
	  chargeSizeAndShape: 'Мелкие',
	  chargeGenerationMethod: 'Звуковые волны',
	  stability: 'Низкая',
	  ionizationDegree: 'Низкая',
	  materialPurityDegree: 'Средняя',
	  temperatureDependence: 'Средняя',
	  chargeStability: 'Низкая',
	  chemicalStability: 'Низкая',
	  electricalCapacity: 'Низкая',
	  electricField: 'Низкое',
	  electricalResistance: 'Среднее',
	  energyDensity: 'Низкая',
	  chargeAccumulationAndLeakageEffect: 'Значительный'
	},
	{
	  name: 'Баллоэлектричество',
	  description: 'Процесс генерации электрических зарядов при конденсации или испарении веществ.',
	  advantages: ['Высокая эффективность', 'Новые возможности'],
	  disadvantages: ['Сложность в реализации', 'Зависимость от условий'],
	  application: ['Электростатические генераторы', 'Датчики'],
	  availability: 3,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 4,
	  lifespan: 8,
	  components: ['Материалы для конденсации'],
	  materialImpact: 'Средний',
	  environmentalDependence: 'Высокая',
	  frequencyDependence: 'Низкая',
	  insulationProperties: 'Средние',
	  chargeIntensity: 'Высокая',
	  materials: ['Вода', 'Газ'],
	  mechanicalStrength: 'Средняя',
	  duration: 'Среднесрочная',
	  magneticPermeability: 'Низкая',
	  degradationProcess: 'Медленный',
	  chargeSizeAndShape: 'Разные',
	  chargeGenerationMethod: 'Конденсация/Испарение',
	  stability: 'Средняя',
	  ionizationDegree: 'Низкая',
	  materialPurityDegree: 'Средняя',
	  temperatureDependence: 'Средняя',
	  chargeStability: 'Средняя',
	  chemicalStability: 'Средняя',
	  electricalCapacity: 'Высокая',
	  electricField: 'Среднее',
	  electricalResistance: 'Среднее',
	  energyDensity: 'Высокая',
	  chargeAccumulationAndLeakageEffect: 'Средний'
	},
	{
	  name: 'Появление электрических зарядов при конденсации или испарении веществ',
	  description: 'Процесс генерации зарядов при изменении состояния вещества.',
	  advantages: ['Высокая чувствительность', 'Разнообразие применений'],
	  disadvantages: ['Чувствительность к внешним факторам', 'Ограниченная стабильность'],
	  application: ['Датчики', 'Электростатические генераторы'],
	  availability: 2,
	  qualityAndReliability: 2,
	  manufacturingComplexity: 3,
	  lifespan: 6,
	  components: ['Материалы для конденсации'],
	  materialImpact: 'Средний',
	  environmentalDependence: 'Высокая',
	  frequencyDependence: 'Низкая',
	  insulationProperties: 'Средние',
	  chargeIntensity: 'Высокая',
	  materials: ['Вода', 'Газ'],
	  mechanicalStrength: 'Низкая',
	  duration: 'Краткосрочная',
	  magneticPermeability: 'Низкая',
	  degradationProcess: 'Средний',
	  chargeSizeAndShape: 'Разные',
	  chargeGenerationMethod: 'Конденсация/Испарение',
	  stability: 'Средняя',
	  ionizationDegree: 'Низкая',
	  materialPurityDegree: 'Средняя',
	  temperatureDependence: 'Средняя',
	  chargeStability: 'Средняя',
	  chemicalStability: 'Средняя',
	  electricalCapacity: 'Средняя',
	  electricField: 'Среднее',
	  electricalResistance: 'Среднее',
	  energyDensity: 'Средняя',
	  chargeAccumulationAndLeakageEffect: 'Средний'
	},
	{
	  name: 'Генерация заряда в результате выделения веществ из материала',
	  description: 'Процесс генерации заряда, когда вещество выделяется из материала.',
	  advantages: ['Высокая эффективность', 'Простота в реализации'],
	  disadvantages: ['Необходимость специальных условий', 'Ограниченная стабильность'],
	  application: ['Электростатические генераторы', 'Датчики'],
	  availability: 3,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 3,
	  lifespan: 7,
	  components: ['Материалы для выделения веществ'],
	  materialImpact: 'Средний',
	  environmentalDependence: 'Средняя',
	  frequencyDependence: 'Низкая',
	  insulationProperties: 'Средние',
	  chargeIntensity: 'Высокая',
	  materials: ['Материалы для выделения'],
	  mechanicalStrength: 'Средняя',
	  duration: 'Среднесрочная',
	  magneticPermeability: 'Низкая',
	  degradationProcess: 'Средний',
	  chargeSizeAndShape: 'Разные',
	  chargeGenerationMethod: 'Выделение веществ',
	  stability: 'Средняя',
	  ionizationDegree: 'Низкая',
	  materialPurityDegree: 'Средняя',
	  temperatureDependence: 'Средняя',
	  chargeStability: 'Средняя',
	  chemicalStability: 'Средняя',
	  electricalCapacity: 'Средняя',
	  electricField: 'Среднее',
	  electricalResistance: 'Среднее',
	  energyDensity: 'Средняя',
	  chargeAccumulationAndLeakageEffect: 'Средний'
	},
	{
	  name: 'Электромагнитная индукция',
	  description: 'Процесс генерации электрического тока при изменении магнитного поля.',
	  advantages: ['Высокая эффективность', 'Широкое применение'],
	  disadvantages: ['Сложность реализации', 'Необходимость в магнитном поле'],
	  application: ['Электрогенераторы', 'Трансформаторы'],
	  availability: 5,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 4,
	  lifespan: 20,
	  components: ['Магнитные поля', 'Электромагнитные катушки'],
	  materialImpact: 'Низкий',
	  environmentalDependence: 'Низкая',
	  frequencyDependence: 'Средняя',
	  insulationProperties: 'Высокие',
	  chargeIntensity: 'Средняя',
	  materials: ['Магнитные материалы', 'Медные провода'],
	  mechanicalStrength: 'Высокая',
	  duration: 'Долгосрочная',
	  magneticPermeability: 'Высокая',
	  degradationProcess: 'Медленный',
	  chargeSizeAndShape: 'Разные',
	  chargeGenerationMethod: 'Магнитное поле',
	  stability: 'Высокая',
	  ionizationDegree: 'Низкая',
	  materialPurityDegree: 'Высокая',
	  temperatureDependence: 'Средняя',
	  chargeStability: 'Высокая',
	  chemicalStability: 'Высокая',
	  electricalCapacity: 'Высокая',
	  electricField: 'Высокое',
	  electricalResistance: 'Низкое',
	  energyDensity: 'Высокая',
	  chargeAccumulationAndLeakageEffect: 'Незначительный'
	},
	{
	  name: 'Сегнетоэлектричество',
	  description: 'Процесс генерации электрического заряда при воздействии на сегнетоэлектрические материалы.',
	  advantages: ['Высокая чувствительность', 'Разнообразные применения'],
	  disadvantages: ['Ограниченное применение', 'Чувствительность к температурным изменениям'],
	  application: ['Датчики', 'Энергетические устройства'],
	  availability: 3,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 4,
	  lifespan: 10,
	  components: ['Сегнетоэлектрические материалы'],
	  materialImpact: 'Средний',
	  environmentalDependence: 'Средняя',
	  frequencyDependence: 'Низкая',
	  insulationProperties: 'Средние',
	  chargeIntensity: 'Средняя',
	  materials: ['Кристаллы сегнетоэлектриков'],
	  mechanicalStrength: 'Средняя',
	  duration: 'Среднесрочная',
	  magneticPermeability: 'Низкая',
	  degradationProcess: 'Медленный',
	  chargeSizeAndShape: 'Разные',
	  chargeGenerationMethod: 'Сегнетоэлектрические эффекты',
	  stability: 'Средняя',
	  ionizationDegree: 'Низкая',
	  materialPurityDegree: 'Средняя',
	  temperatureDependence: 'Средняя',
	  chargeStability: 'Средняя',
	  chemicalStability: 'Средняя',
	  electricalCapacity: 'Средняя',
	  electricField: 'Среднее',
	  electricalResistance: 'Среднее',
	  energyDensity: 'Средняя',
	  chargeAccumulationAndLeakageEffect: 'Средний'
	},
	{
	  name: 'Пироэлектричество',
	  description: 'Процесс генерации электрического заряда при изменении температуры пироэлектрических материалов.',
	  advantages: ['Высокая чувствительность', 'Широкий диапазон применения'],
	  disadvantages: ['Необходимость в изменении температуры', 'Ограниченная стабильность'],
	  application: ['Пироэлектрические датчики', 'Термометрия'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 12,
	  components: ['Пироэлектрические материалы'],
	  materialImpact: 'Средний',
	  environmentalDependence: 'Средняя',
	  frequencyDependence: 'Низкая',
	  insulationProperties: 'Высокие',
	  chargeIntensity: 'Средняя',
	  materials: ['Турмалин', 'Кристаллы пироэлектриков'],
	  mechanicalStrength: 'Средняя',
	  duration: 'Долгосрочная',
	  magneticPermeability: 'Низкая',
	  degradationProcess: 'Медленный',
	  chargeSizeAndShape: 'Разные',
	  chargeGenerationMethod: 'Температура',
	  stability: 'Средняя',
	  ionizationDegree: 'Низкая',
	  materialPurityDegree: 'Средняя',
	  temperatureDependence: 'Высокая',
	  chargeStability: 'Средняя',
	  chemicalStability: 'Средняя',
	  electricalCapacity: 'Средняя',
	  electricField: 'Среднее',
	  electricalResistance: 'Среднее',
	  energyDensity: 'Средняя',
	  chargeAccumulationAndLeakageEffect: 'Средний'
	}
  ];


const ChargeSourcesList = () => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (column) => {
    const direction = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(direction);
  };

  const sortedData = [...chargeSourcesData].sort((a, b) => {
    if (sortColumn) {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    }
    return 0;
  });

  return (
    <div>
      <h1>Источники Электрозаряда</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Название</th>
            <th onClick={() => handleSort('description')}>Описание</th>
            <th onClick={() => handleSort('advantages')}>Преимущества</th>
            <th onClick={() => handleSort('disadvantages')}>Недостатки</th>
            <th onClick={() => handleSort('application')}>Применение</th>
            <th onClick={() => handleSort('availability')}>Доступность</th>
            <th onClick={() => handleSort('qualityAndReliability')}>Качество и надежность</th>
            <th onClick={() => handleSort('manufacturingComplexity')}>Сложность изготовления</th>
            <th onClick={() => handleSort('lifespan')}>Срок службы (лет)</th>
            <th onClick={() => handleSort('components')}>Компоненты изготовления</th>
            <th onClick={() => handleSort('materialImpact')}>Влияние на материалы</th>
            <th onClick={() => handleSort('environmentalDependence')}>Зависимость от окружающей среды</th>
            <th onClick={() => handleSort('frequencyDependence')}>Зависимость от частоты</th>
            <th onClick={() => handleSort('insulationProperties')}>Изоляционные свойства</th>
            <th onClick={() => handleSort('chargeIntensity')}>Интенсивность заряда</th>
            <th onClick={() => handleSort('materials')}>Материалы</th>
            <th onClick={() => handleSort('mechanicalStrength')}>Механическая прочность</th>
            <th onClick={() => handleSort('duration')}>Продолжительность</th>
            <th onClick={() => handleSort('magneticPermeability')}>Проницаемость для магнитных полей</th>
            <th onClick={() => handleSort('degradationProcess')}>Процесс деградации</th>
            <th onClick={() => handleSort('chargeSizeAndShape')}>Размер и форма зарядов</th>
            <th onClick={() => handleSort('chargeGenerationMethod')}>Способ генерации заряда</th>
            <th onClick={() => handleSort('stability')}>Стабильность</th>
            <th onClick={() => handleSort('ionizationDegree')}>Степень ионизации</th>
            <th onClick={() => handleSort('materialPurityDegree')}>Степень чистоты материала</th>
            <th onClick={() => handleSort('temperatureDependence')}>Температурная зависимость</th>
            <th onClick={() => handleSort('chargeStability')}>Устойчивость зарядов</th>
            <th onClick={() => handleSort('chemicalStability')}>Химическая стабильность</th>
            <th onClick={() => handleSort('electricalCapacity')}>Электрическая емкость</th>
            <th onClick={() => handleSort('electricField')}>Электрическое поле</th>
            <th onClick={() => handleSort('electricalResistance')}>Электрическое сопротивление</th>
            <th onClick={() => handleSort('energyDensity')}>Энергетическая плотность</th>
            <th onClick={() => handleSort('chargeAccumulationAndLeakageEffect')}>Эффект накопления и утечки</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((source, index) => (
            <tr key={index}>
              <td>{source.name}</td>
              <td>{source.description}</td>
              <td>{source.advantages.join(', ')}</td>
              <td>{source.disadvantages.join(', ')}</td>
              <td>{source.application.join(', ')}</td>
              <td>{source.availability}</td>
              <td>{source.qualityAndReliability}</td>
              <td>{source.manufacturingComplexity}</td>
              <td>{source.lifespan}</td>
              <td>{source.components.join(', ')}</td>
              <td>{source.materialImpact}</td>
              <td>{source.environmentalDependence}</td>
              <td>{source.frequencyDependence}</td>
              <td>{source.insulationProperties}</td>
              <td>{source.chargeIntensity}</td>
              <td>{source.materials.join(', ')}</td>
              <td>{source.mechanicalStrength}</td>
              <td>{source.duration}</td>
              <td>{source.magneticPermeability}</td>
              <td>{source.degradationProcess}</td>
              <td>{source.chargeSizeAndShape}</td>
              <td>{source.chargeGenerationMethod}</td>
              <td>{source.stability}</td>
              <td>{source.ionizationDegree}</td>
              <td>{source.materialPurityDegree}</td>
              <td>{source.temperatureDependence}</td>
              <td>{source.chargeStability}</td>
              <td>{source.chemicalStability}</td>
              <td>{source.electricalCapacity}</td>
              <td>{source.electricField}</td>
              <td>{source.electricalResistance}</td>
              <td>{source.energyDensity}</td>
              <td>{source.chargeAccumulationAndLeakageEffect}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChargeSourcesList;
