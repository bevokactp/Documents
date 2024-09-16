// animalConstants.js

export const ANIMAL_MOVEMENT_METHODS = {
    RUNNING: 'бег',
    FLIGHT: 'полет',
    SWIMMING: 'плавание',
};

export const ANIMAL_LIFE_STYLE = {
    NOCTURNAL: 'ночной',
    DIURNAL: 'дневной',
    CREPUSCULAR: 'сумеречный',
};

export const ANIMAL_HABITAT_TYPE = {
    BURROW: 'нора',
    NEST: 'гнездо',
    DEN: 'логово',
    CAVE: 'пещера',
    TREE: 'дерево',
    WATER: 'вода',
    LAND: 'земля',
};

// тяжести кости хрящей
export const ANIMAL_BONE_DENSITY = {
    NO_BONES: 0, // без костей вид
    LIGHT: 1,
    MEDIUM: 2,
    HEAVY: 3,
};

//волосяной покров
export const ANIMAL_HAIR = {
    HAS_HAIR_ON_HEAD: false,
    HAS_BEARD: false,
    PUBIC_HAIR: false, // на лобке
    IS_FULL_BODY_COVERED: false,
};


export const ANIMAL_NOSE = {
    NONE: 'нет',
    NO_SEPTUM: 'без переносицы',
    WITH_SEPTUM: 'с переносицей',
    BEAK: 'клюв',
    SNOUT: 'рыло',
    TRUNK: 'хобот',
    LONG: 'длинный',
    FLAT: 'плоский',
};

// тип конечностей
export const ANIMAL_LIMBS = {
    HOOVES: false,
    CLAWS: false,
    NAILS: false,
    WINGS: false,
    FINS: false,
    SUCTION_CUP_LEGS: false,
    TENTACLES: false,
    HORNS: false,
};
