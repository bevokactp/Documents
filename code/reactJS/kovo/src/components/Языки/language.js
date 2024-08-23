// Constants for the type field in Language class
export const LANGUAGE_TYPES = {
    SOUNDS: 'звуки',       // Sounds
    DANCES: 'танцы',       // Dances
    SCENTS: 'запахи',      // Scents
    MOVEMENTS: 'движения', // Movements
    THOUGHTS: 'мыслено',   // Thoughts
    SYMBOLS: 'символы',    // Symbols
    TASTES: 'вкусы'        // Tastes
};

// Language class definition
export class Language {
    /**
     * Creates an instance of Language.
     * @param {number} id - The unique identifier for the language.
     * @param {string} type - The type of the language, using LANGUAGE_TYPES.
     * @param {string} name - The name of the language.
     */
    constructor(id, type, name) {
        this.id = id;
        this.type = type;
        this.name = name;

        this.validate();
    }

    /**
     * Validates the Language instance.
     * @throws {Error} Throws an error if any validation fails.
     */
    validate() {
        if (typeof this.id !== 'number' || this.id <= 0) {
            throw new Error('Invalid id: must be a positive integer');
        }

        if (!Object.values(LANGUAGE_TYPES).includes(this.type)) {
            throw new Error('Invalid type: must be one of the values in LANGUAGE_TYPES');
        }

        if (typeof this.name !== 'string') {
            throw new Error('Invalid name: must be a string');
        }
    }
}
