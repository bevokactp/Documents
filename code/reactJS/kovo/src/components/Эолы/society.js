// society.js

import { Species } from './species.js'; // Import Species class if not already imported

// Enumeration for different levels of society
export const LEVEL_SOCIETY = {
    7: 'цивилизация', // Civilization
    6: 'орда',        // Horde
    5: 'народ',       // Nation
    4: 'артель',      // Artel (a type of collective organization)
    3: 'племя',       // Tribe
    2: 'род',         // Clan
    1: 'семья'        // Family
};

// Society class definition
export class Society {
    /**
     * Creates an instance of Society.
     * @param {Species} species - The Species instance to which this society belongs.
     * @param {number} population - The population of the society.
     * @param {number} level - The level of the society, using LEVEL_SOCIETY.
     * @param {string} [mainBuilding=''] - The main building of the society.
     * @param {string} [capital=''] - The capital city of the society.
     * @param {string} [description=''] - A description of the society.
     */
    constructor(species, population, level, mainBuilding = '', capital = '', description = '') {
        this.species = species; // Instance of Species class
        this.population = population;
        this.level = level;
        this.mainBuilding = mainBuilding;
        this.capital = capital;
        this.description = description;

        this.validate();
    }

    /**
     * Validates the Society instance.
     * @throws {Error} Throws an error if any validation fails.
     */
    validate() {
        if (!(this.species instanceof Species)) {
            throw new Error('Invalid species: must be an instance of Species');
        }

        if (!Object.keys(LEVEL_SOCIETY).includes(this.level.toString())) {
            throw new Error('Invalid society level: must be a valid level from LEVEL_SOCIETY');
        }

        if (typeof this.population !== 'number' || this.population < 1) {
            throw new Error('Invalid population: must be an integer greater than 1');
        }

        if (typeof this.mainBuilding !== 'string') {
            throw new Error('Invalid mainBuilding: must be a string');
        }

        if (typeof this.capital !== 'string') {
            throw new Error('Invalid capital: must be a string');
        }

        if (typeof this.description !== 'string') {
            throw new Error('Invalid description: must be a string');
        }
    }
}
