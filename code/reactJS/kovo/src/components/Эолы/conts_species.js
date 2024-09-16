// Скорость роста при оптимальных условиях
export const GROWTH_RATE_CHOICES = {
	VERY_SLOW: "очень медленный", // Рост очень медленный
	SLOW: "медленный",            // Рост медленный
	MODERATE: "умеренный",        // Рост умеренный
	FAST: "быстрый",              // Рост быстрый
	VERY_FAST: "очень быстрый",   // Рост очень быстрый
};


// Тип поведения вида
export const BEHAVIOR_TYPE_CHOICES = {
	PREDATORY: "социальный",
	HERBIVOROUS: "одиночный",
	OMNIVOROUS: "мигрирующий",
	PARASITIC: "вегосыроедческий",
	SCAVENGER: "мясоед",
};

// Среда обитания вида
export const HABITAT_ENVIRONMENT_CHOICES = {
	AIR: "воздушно",             // Вид обитает в воздухе или летает
	UNDERGROUND: "подземно",     // Вид обитает под землей
	LAND: "наземно",             // Вид обитает на суше
	EXTRATERRESTRIAL: "внепланетно", // Вид обитает за пределами Земли
	WATER: "водно",              // Вид обитает в воде
	FIRE: "огонь",               // Вид обитает в экстремально горячих средах
};

// Тип питания вида
export const NUTRITION_MODE_CHOICES = {
	AUTOTROPHIC: "автотрофный",   // Вид производит пищу самостоятельно (например, растения)
	HETEROTROPHIC: "гетеротрофный", // Вид получает пищу от других организмов (например, животные)
	MIXOTROPHIC: "миксотрофный",  // Вид может использовать оба метода питания
};



// основа построения днк вида
export const BASE_DNA_CHOICES = {
	CARBON: "углерод",
	SILICON: "кремний",
	NITROGEN: "азот",
	SULFUR: "сера",
	PHOSPHORUS: "фосфор",
};

// основная жидкость для вида
export const BASE_INTERNAL_LIQUID_CHOICES = {
	WATER: "вода",
	SULFURIC_ACID: "серная кислота",
	AMMONIA: "аммиак",
	HYDROFLUORIC_ACID: "фтороводород",
	CYANIC_ACID: "цианистый водород",
	METHANE: "метан",
};

// чем дышит вид
export const BASE_INTERNAL_AIR_CHOICES = {
	OXYGEN: "кислород",
	CARBON_DIOXIDE: "углекислый газ",
};

export const CELLULARITY_CHOICES = {
	NONE: 0, // безклеточный вид
	UNICELLULAR: 1, // одноклеточный вид
	MULTICELLULAR: 2, // многоклеточный вид
};

// является ли вид способным пропускать свет через себя
export const TRANSPARENCY_CHOICES = {
	TRANSPARENT: "прозрачный",
	OPAQUE: "непрозрачный",
};


// Методы передвижения
export const MOVEMENT_METHODS = {
	FLIGHT: "полет",
	SWIMMING: "плавание",
	RUNNING: "бег",
	SLITHERING: "ползание",
	CRAWLING: "ползание",
};

// Типы внешнего покрова
export const EXTERNAL_COVER_TYPES = {
	FUR: "мех",
	SCALES: "чешуя",
	SKIN: "кожа",
	BARK: "кора",
};

// Архитектура мест проживания
export const ARCHITECTURES = {
	NESTS: "гнезда",
	BURROWS: "норки",
	SHELTERS: "укрытия",
	HOVELS: "хижины",
};

// Среда обитания
export const HABITAT_ENVIRONMENTS = {
	AIR: "воздушно",
	UNDERGROUND: "подземно",
	LAND: "наземно",
	EXTRATERRESTRIAL: "внепланетно",
	WATER: "водно",
	FIRE: "огонь",
};

// Ареал обитания
export const HABITAT_RANGES = {
	DESERT: "пустыня",
	STEPPE: "степь",
	FOREST: "лес",
	FRESHWATER: "пресноводное",
	SALTWATER: "солёноводное",
	DEEP_SEA: "глубоководно",
	COASTAL: "прибрежное",
	SWAMP: "болото",
	MANGROVES: "мангры",
	LAVA: "лава",
	GEYSER: "гейзер",
	SALT_FLATS: "солончаки",
	MEADOW: "луг",
	REEFS: "рифы",
	AIR_ISLANDS: "воздушные острова",
	CAVES: "подземелья",
};

// Климат обитания
export const HABITAT_CLIMATES = {
	TROPICAL: "тропики",
	MOUNTAIN: "горы",
	MONSOON: "муссоны",
	SUBTROPICAL: "субтропики",
	COLD: "холод",
	TEMPERATE: "умеренно",
	TUNDRA: "тундра",
};
