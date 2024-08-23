// constants.js

// Типы фотосинтеза
export const PHOTOSYNTHESIS_TYPES = {
    C3: 'C3',
    C4: 'C4',
    CAM: 'CAM'
};

// Структура стебля
export const STEM_STRUCTURES = {
    HERBACEOUS: 'травянистое',
    WOODY: 'древесное'
};

// Форма листа
export const LEAF_SHAPES = {
    OVAL: 'овальная',
    LANCEOLATE: 'ланцетная',
    HEART: 'сердцевидная',
    PALMATE: 'пальчатая',
    COMPOUND: 'сложная'
};

// Размер листа
export const LEAF_SIZES = {
    SMALL: 'мелко',
    LARGE: 'широко'
};

// Способ роста
export const GROWTH_METHODS = {
    HERBACEOUS: 'травянистое',
    WOODY: 'древесное'
};

// Корневая система
export const ROOT_SYSTEMS = {
    SURFACE: 'поверхностная',
    DEEP: 'глубокая',
    COMBINED: 'комбинированная'
};

// Вид семени
export const SEED_TYPES = {
    DRY: 'сухое',
    FLESHY: 'мясистое'
};

// Размер плода
export const FRUIT_SIZES = {
    SMALL: 'малый',
    MEDIUM: 'средний',
    LARGE: 'большой'
};

// Размер цветка
export const FLOWER_SIZES = {
    SMALL: 'малый',
    MEDIUM: 'средний',
    LARGE: 'большой'
};


// Колючки
export const HAS_THORNS = {
    YES: true,
    NO: false
};



// Вид корней
export const ROOT_TYPES = {
    TAPROOT: 'стержневой',
    FIBROUS: 'волокнистый'
};

// Способ семя распространения
export const SEED_DISPERSAL_METHODS = {
    WIND: 'ветер',
    BIRDS: 'птицы',
    MAMMALS: 'млекопитающие',
    INSECTS: 'насекомые'
};

// Тип плодов
export const FRUIT_TYPES = {
    CEREAL: 'зерновка', // Плод, содержащий семена, используемые как зерно
    FRUIT: 'плод', // Плод, содержащий семена и обычно съедобный
    NUT: 'орех', // Плод, заключенный в твердую оболочку
    LEGUME: 'боб', // Плод, раскрывающийся вдоль линии шва и содержащий несколько семян
    DRUPE: 'костянка', // Плод с плотной оболочкой, вокруг семени (например, вишня)
    BERRY: 'ягода', // Плод с многосемянной мягкой оболочкой (например, виноград)
    CAPSULE: 'коробочка', // Плод, который раскрывается при созревании, чтобы освободить семена
};

// Листорасположение
export const LEAF_ARRANGEMENTS = {
    ALTERNATE: 'очередное', // Листья расположены поочередно вдоль стебля
    OPPOSITE: 'сопротивное', // Листья расположены парами напротив друг друга
    WHORLED: 'вихревое', // Листья расположены кругами вокруг стебля
    BASAL: 'прикорневое', // Листья расположены у основания растения
};

// Способы проращивания семян
export const SEED_GERMINATION_METHODS = {
    SOIL: 'в почве',
    HYDROPONICS: 'гидропоника',
    PAPER_TOWEL: 'в бумажном полотенце'
};


// Способы опыления
export const POLLINATION_METHODS = {
    INSECTS: 'насекомыми',
    WIND: 'ветром',
    SELF: 'самоопыление'
};

// Способ транспортировки семян
export const SEED_TRANSPORTATION_METHODS = {
    WIND: 'ветер',
    ANIMALS: 'животные',
    WATER: 'вода'
};

// Способ роста
export const GROWTH_TYPES = {
    CLIMBING: 'вьётся',
    CREEPING: 'пологъ',
    SHRUB: 'кустарникъ',
    TREE: 'деревокустъ',
    GRASS: 'трава',
    GROUND_COVER: 'почвопокровно',
    ROOT_VEGETABLE: 'корнеплод',
    MYCORRHIZAL: 'грибокорень',
    COASTAL: 'прибрежно',
    MANGROVE: 'мангры',
    SHALLOW_WATER: 'мелководно',
    DEEP_WATER: 'глубоководно'
};
