// Plant.js

import { Species } from './species.js';

export class Plant extends Species {
    constructor(
        // Биология
        photosynthesisType, stemStructure, leafShape, leafSize, leafColor, needleColor, fruitColor, flowerColor,
        stemColor, growthMethod, rootSystem, seedType, fruitSize, flowerSize, ripeLeafColor,
        sheddingLeafColor, hasThorns, crownDiameter, leafArrangement, fruitTaste, rootLength,
        rootType, rootDepth,

        // Физиология
        fruitingAge, rootBranching, droughtTolerance, shadeTolerance, frostTolerance, pHRequirements, shadeDensity,
        dioecious, woodHardness, bioluminescence, resilience, earlyRipeness, earlyFruiting,
        fruitType, floweringPeriod, leafArrangementType, soilTypes, germinationPeriod, dormancyPeriod,
        droughtResistance, frostResistance, fruitingPeriod, growthType,

        // Применение
        isSedative, isLaxative, isAdaptogen, isPhytocid, isResinous, isFiberous, isRubberPlant, usedForWeaving,
        hasEssentialOils, isSugarPlant, producesDriedFruit, usedForHedge, isHoneyPlant, isJuicePlant,
        usedForFermentation, isStoneFruit, hasGum, hasBalm, hasResin, isPollenProducer, isNitrogenFixer, isTanniferous,
        usedForSoilImprovement, isSpicePlant, isDyePlant, isOilPlant, isSalinePlant,

        // Размножение
        seedDispersalMethod, pollinationMethod, seedHarvestTime, cuttingHarvestTime, seedPlantingTime,
        seedGerminationMethods, cuttingPlantingTime, graftingTime, stratificationTime, scarificationMethods,

        // Общие свойства унаследованные
        airRequirements, ancestors, appearanceTime, architecture, baseDNA, baseInternalAir, baseInternalLiquid,
        behaviorType, bodyShape, bodyTemperature, cellularity, cellWallComposition, chemicalComposition,
        chromosomes, color, density, dnaSpirals, dnaTiltAngle, externalCoverType, foodAbsorptionMethod,
        foodSources, growthRate, habitatClimates, habitatEnvironment, habitatRange, habitatSize, height,
        humidityRequirements, id, length, lifeCycle, lifespan, lightRequirements, mainMetabolismProducts,
        metabolism, movementMethods, name, nutrientsProduced, nutritionMode, odor, originPlanetId,
        reproductionPeriod, sexualReproduction, temperatureRequirements, transparency, waterRequirements,
        weight, width
    ) {
        super(
            airRequirements, ancestors, appearanceTime, architecture, baseDNA, baseInternalAir, baseInternalLiquid,
            behaviorType, bodyShape, bodyTemperature, cellularity, cellWallComposition, chemicalComposition,
            chromosomes, color, density, dnaSpirals, dnaTiltAngle, externalCoverType, foodAbsorptionMethod,
            foodSources, growthRate, habitatClimates, habitatEnvironment, habitatRange, habitatSize, height,
            humidityRequirements, id, length, lifeCycle, lifespan, lightRequirements, mainMetabolismProducts,
            metabolism, movementMethods, name, nutrientsProduced, nutritionMode, odor, originPlanetId,
            reproductionPeriod, sexualReproduction, temperatureRequirements, transparency, waterRequirements,
            weight, width
        );

        // Биология
        this.photosynthesisType = photosynthesisType; // тип фотосинтеза
        this.stemStructure = stemStructure; // структура стебля
        this.leafShape = leafShape; // форма листа
        this.leafSize = leafSize; // размер листа
        this.leafColor = leafColor; // цвет листа
        this.needleColor = needleColor; // цвет хвои
        this.fruitColor = fruitColor; // цвет плода
        this.flowerColor = flowerColor; // цвет цветков
        this.stemColor = stemColor; // цвет стебля
        this.growthMethod = growthMethod; // способ роста
        this.rootSystem = rootSystem; // корневая система
        this.seedType = seedType; // вид семени
        this.fruitSize = fruitSize; // размер плода
        this.flowerSize = flowerSize; // размер цветка
        this.ripeLeafColor = ripeLeafColor; // цвет литья зрелых
        this.sheddingLeafColor = sheddingLeafColor; // цвет литья опадающих
        this.hasThorns = hasThorns; // есть колючки
        this.crownDiameter = crownDiameter; // диаметр кроны
        this.leafArrangement = leafArrangement; // листорасположение
        this.fruitTaste = fruitTaste; // вкус плода
        this.rootLength = rootLength; // длина корней
        this.rootType = rootType; // вид корней
        this.rootDepth = rootDepth; // глубина корня

        // Физиология
        this.fruitingAge = fruitingAge; // через сколько лет плодоносит
        this.rootBranching = rootBranching; // ветвистость корня
        this.droughtTolerance = droughtTolerance; // есть засухостойко
        this.shadeTolerance = shadeTolerance; // есть теневыносливо
        this.frostTolerance = frostTolerance; // есть морозостойко
        this.pHRequirements = pHRequirements; // требовательность к pH
        this.shadeDensity = shadeDensity; // какую густоту тени даёт
        this.dioecious = dioecious; // домность
        this.woodHardness = woodHardness; // твёрдость древесины
        this.bioluminescence = bioluminescence; // могут самосветиться
        this.resilience = resilience; // устойчивость, адаптивность, выживание
        this.earlyRipeness = earlyRipeness; // скороспелость
        this.earlyFruiting = earlyFruiting; // скороплодность
        this.fruitType = fruitType; // тип плодов
        this.floweringPeriod = floweringPeriod; // период цветения
        this.leafArrangementType = leafArrangementType; // расположение листьев
        this.soilTypes = soilTypes; // типы почвы
        this.germinationPeriod = germinationPeriod; // период прорастания
        this.dormancyPeriod = dormancyPeriod; // период покоя
        this.droughtResistance = droughtResistance; // устойчивость к засухе
        this.frostResistance = frostResistance; // морозостойкость
        this.fruitingPeriod = fruitingPeriod; // период плодоношения
        this.growthType = growthType; // тип роста

        // Применение
        this.isSedative = isSedative; // есть снотворитель
        this.isLaxative = isLaxative; // есть слабительное
        this.isAdaptogen = isAdaptogen; // есть адаптогены
        this.isPhytocid = isPhytocid; // есть фитонцид
        this.isResinous = isResinous; // есть смолонос
        this.isFiberous = isFiberous; // есть тканевое
        this.isRubberPlant = isRubberPlant; // есть каучуконос
        this.usedForWeaving = usedForWeaving; // используется для плетения
        this.hasEssentialOils = hasEssentialOils; // есть эфироносы
        this.isSugarPlant = isSugarPlant; // есть сахаронос
        this.producesDriedFruit = producesDriedFruit; // дающий сухофрукт
        this.usedForHedge = usedForHedge; // применяется как изгородь
        this.isHoneyPlant = isHoneyPlant; // есть медонос
        this.isJuicePlant = isJuicePlant; // есть соконос
        this.usedForFermentation = usedForFermentation; // применяется ли на квашение, мочение
        this.isStoneFruit = isStoneFruit; // костянка
        this.hasGum = hasGum; // камедь
        this.hasResin = hasResin; // смола
        this.hasBalm = hasBalm; // бальзам
        this.isPollenProducer = isPollenProducer; // есть пыльценос
        this.isNitrogenFixer = isNitrogenFixer; // есть азотфиксатор
        this.isTanniferous = isTanniferous; // есть дубильное
        this.usedForSoilImprovement = usedForSoilImprovement; // используется как рыхлитель почвы
        this.isSpicePlant = isSpicePlant; // есть пряность
        this.isDyePlant = isDyePlant; // есть красконос
        this.isOilPlant = isOilPlant; // есть маслонос
        this.isSalinePlant = isSalinePlant; // есть соленос

        // Размножение
        this.seedDispersalMethod = seedDispersalMethod; // способ семя распространения транспортировки
        this.pollinationMethod = pollinationMethod; // способ опыления
        this.seedHarvestTime = seedHarvestTime; // время заготовки семян
        this.cuttingHarvestTime = cuttingHarvestTime; // время заготовки черенков
        this.seedPlantingTime = seedPlantingTime; // время посадки семян
        this.seedGerminationMethods = seedGerminationMethods; // способы проращивания семян
        this.cuttingPlantingTime = cuttingPlantingTime; // время посадки черенков
        this.graftingTime = graftingTime; // время прививки
        this.stratificationTime = stratificationTime; // время стратификации
        this.scarificationMethods = scarificationMethods; // способы скарификации
    }
}
