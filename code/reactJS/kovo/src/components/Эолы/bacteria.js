// Bacteria.js

import { Species } from './species.js';

export class Bacteria extends Species {
    constructor(
        motility, sporeProduction, receptors, airRequirements, ancestors, appearanceTime, architecture, baseDNA, baseInternalAir, baseInternalLiquid,
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

        this.motility = motility; // подвижность
        this.sporeProduction = sporeProduction; // производство споров
        this.receptors = receptors; // рецепторы
    }
}
