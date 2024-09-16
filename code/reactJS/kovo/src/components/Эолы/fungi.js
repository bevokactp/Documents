// Fungi.js

import { Species } from './species.js';

export class Fungi extends Species {
    constructor(
        sporeType, growthForm, sporeColor, chitinComposition, sporeSize, maturationTime, soilTypes,
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

        this.sporeType = sporeType; // тип спор
        this.growthForm = growthForm; // форма роста
        this.sporeColor = sporeColor; // цвет споры
        this.chitinComposition = chitinComposition; // состав хитовина
        this.sporeSize = sporeSize; // размеры споров
        this.maturationTime = maturationTime; // время созревания
        this.soilTypes = soilTypes; // типы почвы
    }
}
