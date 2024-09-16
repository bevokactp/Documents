// Species.js


export class Species {
	constructor(
		airRequirements, ancestors, appearanceTime, architecture, baseDNA, baseInternalAir, baseInternalLiquid, behaviorType, bodyShape, bodyTemperature,
		cellularity, cellWallComposition, chemicalComposition, chromosomes, color, density, dnaSpirals, dnaTiltAngle, externalCoverType, foodAbsorptionMethod,
		foodSources, growthRate, habitatClimates, habitatEnvironment, habitatRange, habitatSize, height, humidityRequirements, id, length, lifeCycle, lifespan,
		lightRequirements, mainMetabolismProducts, metabolism, movementMethods, name, nutrientsProduced, nutritionMode, odor, originPlanetId, reproductionPeriod,
		sexualReproduction, temperatureRequirements, transparency, waterRequirements, weight, width,) {

		this.airRequirements = airRequirements; // требование к воздуху (string)
		this.ancestors = ancestors; // список предков (по идентификаторам) (array of integers)
		this.appearanceTime = appearanceTime; // время появления: 0.. (integer)
		this.architecture = architecture; // названия архитектуры мест проживания (string)
		this.baseDNA = baseDNA;
		this.baseInternalAir = baseInternalAir;
		this.baseInternalLiquid = baseInternalLiquid;
		this.behaviorType = behaviorType; // характер поведения (например, социальный, одиночный, мигрирующий) (может быть в нескольких)
		this.bodyShape = bodyShape; // форма тела (string)
		this.bodyTemperature = bodyTemperature; // температура тела (в градусах Цельсия) (number)
		this.cellularity = cellularity;
		this.cellWallComposition = cellWallComposition; // состав клеточной стенки (string)
		this.chemicalComposition = chemicalComposition; // химический состав (string)
		this.chromosomes = chromosomes; // количество хромосом (integer) 0..
		this.color = color; // цвет покрова: rgba
		this.density = density; // плотность тела: 1.. (number)
		this.dnaSpirals = dnaSpirals; // количество спиралей ДНК: 0.. (integer)
		this.dnaTiltAngle = dnaTiltAngle; // угол наклона ДНК (number)
		this.externalCoverType = externalCoverType; // тип внешнего покрова (например, мех, чешуя, кожа кора) (string)
		this.foodAbsorptionMethod = foodAbsorptionMethod; // способ поглощения пищи (string)
		this.foodSources = foodSources; // пищевые источники, питательные вещества что берут из среды (string)
		this.growthRate = growthRate; // скорость роста при оптимальных условиях (number)
		this.habitatClimates = habitatClimates; // климаты обитания: тропики, горы, муссоны, субтропики, холод, умеренно, тундра (может быть в нескольких)
		this.habitatEnvironment = habitatEnvironment; // среда обитания: воздушно, подземно, наземно, внепланетно, водно, огонь (может быть в нескольких)
		this.habitatRange = habitatRange; // ареал обитания: пустыня, степь, лес, пресноводное, солёноводное, глубоководно, прибрежное, болото, мангры, лава, гейзер, солончаки, луг, рифы, воздушные острова, подземелья (может быть в нескольких)
		this.habitatSize = habitatSize; // размеры занимаемого места обитания м*2 (integer)
		this.height = height; // высота (метр) (number)
		this.humidityRequirements = humidityRequirements; // требование к влажности (string)
		this.id = id; // идентификатор (integer)
		this.length = length; // длина (метр) (number)
		this.lifeCycle = lifeCycle; // жизненный цикл: описание этапов развития вида (string)
		this.lifespan = lifespan; // время жизни в годах / или 0 что означает вечно (integer)
		this.lightRequirements = lightRequirements; // требование к освещению (string)
		this.mainMetabolismProducts = mainMetabolismProducts; // основные продукты метаболизма (string)
		this.metabolism = metabolism; // метаболизм (string)
		this.movementMethods = movementMethods; // методы передвижения (способы передвижения, например, полет, плавание, бег) (может быть в нескольких)
		this.name = name; // название (string)
		this.nutrientsProduced = nutrientsProduced; // питательные вещества что производят в среду (string)
		this.nutritionMode = nutritionMode; // способ питания: автотрофы, гетеротрофы, хемотрофы и др. (string)
		this.odor = odor; // запах выделяемый (string)
		this.originPlanetId = originPlanetId; // планета зарождения (integer)
		this.reproductionPeriod = reproductionPeriod; // период размножения (время года или частота размножения) (string)
		this.sexualReproduction = sexualReproduction; // есть ли половое деление: bool (boolean)
		this.temperatureRequirements = temperatureRequirements; // требование к температуре (string)
		this.transparency = transparency; // прозрачность: прозрачный, непрозрачный (string)
		this.waterRequirements = waterRequirements; // требование к воде (string)
		this.weight = weight; // вес (кг) (number)
		this.width = width; // ширина (метр) (number)
	}
}
