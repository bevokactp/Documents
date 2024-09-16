// Crystals.js

import { Species } from './species.js';

export class Crystals extends Species {
    constructor(
        mohsHardness, crystalSystem, formationMethods, opticalProperties, radioactivity, electricalConductivity,
        magneticProperties, formChangeAbilities, crystallographicOrientation, porosity, aggregationForm,
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

        this.mohsHardness = mohsHardness; // твердость по шкале Мооса
        this.crystalSystem = crystalSystem; // кристаллическая система
        this.formationMethods = formationMethods; // способы образования
        this.opticalProperties = opticalProperties; // оптические свойства
        this.radioactivity = radioactivity; // радиоактивность
        this.electricalConductivity = electricalConductivity; // электрическая проводимость
        this.magneticProperties = magneticProperties; // магнитные свойства
        this.formChangeAbilities = formChangeAbilities; // способности к изменению формы
        this.crystallographicOrientation = crystallographicOrientation; // кристаллографическая ориентация
        this.porosity = porosity; // пористость
        this.aggregationForm = aggregationForm; // агрегационная форма
    }
}
