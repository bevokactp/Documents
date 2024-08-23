import { Species } from './Species.js';

export class AnimalSpecies extends Species {
	constructor(
		airRequirements, ancestors, appearanceTime, architecture, baseDNA, baseInternalAir, baseInternalLiquid, behaviorType, bodyShape, bodyTemperature,
		cellularity, cellWallComposition, chemicalComposition, chromosomes, color, density, dnaSpirals, dnaTiltAngle, externalCoverType, foodAbsorptionMethod,
		foodSources, growthRate, habitatClimates, habitatEnvironment, habitatRange, habitatSize, height, humidityRequirements, id, length, lifeCycle, lifespan,
		lightRequirements, mainMetabolismProducts, metabolism, movementMethods, name, nutrientsProduced, nutritionMode, odor, originPlanetId, reproductionPeriod,
		sexualReproduction, temperatureRequirements, transparency, waterRequirements, weight, width,

		// Дополнительные свойства для AnimalSpecies
		behaviorMovementMethods, // способ передвижения: бег, полет, плавание (string)
		behaviorLifeStyle, // образ жизни: ночной, дневной, сумеречный (string)
		behaviorHabitatType, // тип места обитания: нора, гнездо, логово (string)
		behaviorHibernationPeriod, // период спячки (если применимо, в месяцах) (integer)

		anatomyBoneWeight, // тяжесть кости: 0 нет костей, 1 легко, 2 средне, 3 тяжело (integer)
		anatomyHasHair, // есть волосы: bool (boolean)
		anatomyHasBeard, // есть борода: bool (boolean)
		anatomyHasPubicHair, // есть ли волосы на лобке: bool (boolean)
		anatomyFullBodyHair, // покрыто всё тело волосами: bool (boolean)
		anatomyHasTail, // есть хвост: bool (boolean)
		anatomyNoseType, // тип носа: нет, без переносицы, с переносицей, клюв, рыло, хобот, длинный, плоский (string)
		anatomyLimbs, // конечности (есть ли копыта, когти, ногти, крылья, плавники, ноги с присосками, щупальцы, рог) (array of strings)

		physiologyEndocrineGlands, // железы внутренней секреции (array of strings)
		physiologyTongueCount, // количество языков (integer)
		physiologyHeartCount, // количество сердец (integer)
		physiologyStomachCount, // количество желудков (integer)
		physiologyLiverCount, // количество печени (integer)
		physiologyKidneyCount, // количество почек (integer)
		physiologyBloodColor, // цвет крови: rgba (string)
		physiologyBloodGroup, // группа крови (array of strings)
		physiologyTeethCount, // количество зубов (integer)
		physiologyVertebraeCount // количество позвонков (integer)
	) {
		// Вызов конструктора родительского класса Species
		super(
			airRequirements, ancestors, appearanceTime, architecture, baseDNA, baseInternalAir, baseInternalLiquid, behaviorType, bodyShape, bodyTemperature,
			cellularity, cellWallComposition, chemicalComposition, chromosomes, color, density, dnaSpirals, dnaTiltAngle, externalCoverType, foodAbsorptionMethod,
			foodSources, growthRate, habitatClimates, habitatEnvironment, habitatRange, habitatSize, height, humidityRequirements, id, length, lifeCycle, lifespan,
			lightRequirements, mainMetabolismProducts, metabolism, movementMethods, name, nutrientsProduced, nutritionMode, odor, originPlanetId, reproductionPeriod,
			sexualReproduction, temperatureRequirements, transparency, waterRequirements, weight, width
		);

		// Сохранение дополнительных свойств класса AnimalSpecies
		this.behaviorMovementMethods = behaviorMovementMethods;
		this.behaviorLifeStyle = behaviorLifeStyle;
		this.behaviorHabitatType = behaviorHabitatType;
		this.behaviorHibernationPeriod = behaviorHibernationPeriod;

		this.anatomyBoneWeight = anatomyBoneWeight;
		this.anatomyHasHair = anatomyHasHair;
		this.anatomyHasBeard = anatomyHasBeard;
		this.anatomyHasPubicHair = anatomyHasPubicHair;
		this.anatomyFullBodyHair = anatomyFullBodyHair;
		this.anatomyHasTail = anatomyHasTail;
		this.anatomyNoseType = anatomyNoseType;
		this.anatomyLimbs = anatomyLimbs;

		this.physiologyEndocrineGlands = physiologyEndocrineGlands;
		this.physiologyTongueCount = physiologyTongueCount;
		this.physiologyHeartCount = physiologyHeartCount;
		this.physiologyStomachCount = physiologyStomachCount;
		this.physiologyLiverCount = physiologyLiverCount;
		this.physiologyKidneyCount = physiologyKidneyCount;
		this.physiologyBloodColor = physiologyBloodColor;
		this.physiologyBloodGroup = physiologyBloodGroup;
		this.physiologyTeethCount = physiologyTeethCount;
		this.physiologyVertebraeCount = physiologyVertebraeCount;
	}
}
