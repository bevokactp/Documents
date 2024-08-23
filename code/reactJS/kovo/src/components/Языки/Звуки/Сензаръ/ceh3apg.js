// Константы для типов
const PHONEME_TYPE = {
    PHONEME_SOUND: 1,
    PHONEME_PHONEME: 2,
};

const IDEOGRAM_TYPE = {
    CONCEPT: 1,
    IDEA: 2,
};

const LOGOGRAM_TYPE = {
    MORPHEME: 1,
    WORD: 2,
};

// Базовый класс для всех символов клинописи
class BaseCuneiform {
    constructor(symbol, description, type) {
        this.symbol = symbol;
        this.description = description;
        this.type = type; // Тип символа
    }

    getInfo() {
        return `${this.symbol}: ${this.description} (${this.type})`;
    }
}

class Phoneme extends BaseCuneiform {
    constructor(symbol, sound, positionTongue, type, description) {
      super(symbol, description);
      this.sound = sound; // Звук, который представляет символ
      this.positionTongue = positionTongue;
      this.type = type;
    }

    getDetails() {
      return `
        Символ: ${this.symbol}
        Звук: ${this.sound}
        Положение языка: ${this.positionTongue}
        Тип: ${this.type === PHONEME_TYPE.PHONEME_SOUND ? 'Фонема звук' : 'Фонема'}
        Описание: ${this.description}
      `;
    }
  }


  class Ideogram extends BaseCuneiform {
    constructor(symbol, concept, description) {
      super(symbol, description);
      this.concept = concept; // Идея или концепция, которую передает символ
    }

    getDetails() {
      return `
        Символ: ${this.symbol}
        Концепция: ${this.concept}
        Тип: Идеограмма
        Описание: ${this.description}
      `;
    }
  }


  class Logogram extends BaseCuneiform {
    constructor(symbol, word, description) {
      super(symbol, description);
      this.word = word; // Слово или морфема, которую представляет символ
    }

    getDetails() {
      return `
        Символ: ${this.symbol}
        Слово/Морфема: ${this.word}
        Тип: Логограмма
        Описание: ${this.description}
      `;
    }
  }

class Alphabet {
    constructor(symbols) {
        this.symbols = symbols;
    }

    getSymbols() {
        return this.symbols;
    }

    getCount() {
        return this.symbols.length;
    }
}

class PhonemeAlphabet extends Alphabet { }
class IdeogramAlphabet extends Alphabet { }
class LogogramAlphabet extends Alphabet { }

// Создание алфавитов
const PHONEME_ALPHABET = new PhonemeAlphabet([
    new Phoneme('👅', 'a', 'Звук дождя', PHONEME_TYPE.PHONEME_SOUND, 'Передняя часть языка касается верхних зубов'),
    new Phoneme('🔻👄', 'b', 'Звук ветра', PHONEME_TYPE.PHONEME_SOUND, 'Губы округлены, язык в нижнем положении'),
    new Phoneme('⬆️👅', 'c', 'Звук грома', PHONEME_TYPE.PHONEME_PHONEME, 'Язык касается задней части нёба'),
    new Phoneme('💨👅', 's', 'Звук шипения', PHONEME_TYPE.PHONEME_PHONEME, 'Язык слегка поднят, воздух проходит через узкий проход'),
    new Phoneme('👄👅', 'l', 'Шелест листвы', PHONEME_TYPE.PHONEME_PHONEME, 'Язык поднят и касается верхних зубов'),
    new Phoneme('👅🔊', 't', 'Рычание тигра', PHONEME_TYPE.PHONEME_PHONEME, 'Язык касается верхних зубов, воздушный поток резкий'),
    new Phoneme('👅🔄', 'r', 'Звук дятла', PHONEME_TYPE.PHONEME_PHONEME, 'Язык вибрирует'),
    new Phoneme('👅🌬️', 'ch', 'Шепот воды', PHONEME_TYPE.PHONEME_PHONEME, 'Язык приподнят к нёбу, воздух проходит через узкий проход'),
    new Phoneme('👅👃', 'n', 'Звук удара волны об камень', PHONEME_TYPE.PHONEME_PHONEME, 'Язык касается нёба, воздух проходит через нос'),
    new Phoneme('👅🗣️', 'g', 'Звук огня', PHONEME_TYPE.PHONEME_PHONEME, 'Язык касается задней части горла'),
    new Phoneme('👅⬆️', 'k', 'Звук слияния воды и огня', PHONEME_TYPE.PHONEME_PHONEME, 'Язык касается верхнего нёба в задней части рта'),
    new Phoneme('👄🦷', 'f', 'Звук шагов орла по песку', PHONEME_TYPE.PHONEME_SOUND, 'Верхние зубы касаются нижней губы'),
    new Phoneme('👄👅', 'v', 'Звук восхода солнца осенью', PHONEME_TYPE.PHONEME_SOUND, 'Губы слегка округлены, язык слегка касается верхних зубов'),
]);

const IDEOGRAM_ALPHABET = new IdeogramAlphabet([
    new Ideogram('🐦', 'birds', IDEOGRAM_TYPE.CONCEPT, 'Понятие птиц'),
    new Ideogram('🌳', 'tree', IDEOGRAM_TYPE.CONCEPT, 'Понятие дерева, природы и жизни'),
    new Ideogram('🔥', 'fire', IDEOGRAM_TYPE.CONCEPT, 'Понятие огня, энергии и тепла'),
    new Ideogram('☀️', 'sun', IDEOGRAM_TYPE.CONCEPT, 'Понятие солнца, света и дня'),
    new Ideogram('⛰️', 'mountain', IDEOGRAM_TYPE.CONCEPT, 'Понятие горы, высоты и устойчивости'),
    new Ideogram('💧', 'water', IDEOGRAM_TYPE.CONCEPT, 'Понятие воды, жизни и чистоты'),
    new Ideogram('📖', 'book', IDEOGRAM_TYPE.IDEA, 'Идея знаний и обучения'),
    new Ideogram('🏛️', 'temple', IDEOGRAM_TYPE.IDEA, 'Идея священного места и культурного наследия'),
    new Ideogram('🚀', 'rocket', IDEOGRAM_TYPE.IDEA, 'Идея прогресса и технологического развития'),
    new Ideogram('🕰️', 'time', IDEOGRAM_TYPE.IDEA, 'Идея времени и исторических изменений'),
    new Ideogram('🎨', 'art', IDEOGRAM_TYPE.IDEA, 'Идея творчества и художественного выражения'),
]);

const LOGOGRAM_ALPHABET = new LogogramAlphabet([
    new Logogram('🌊', 'wave', LOGOGRAM_TYPE.WORD, 'Корень "волна"'),
    new Logogram('🌲', 'tree', LOGOGRAM_TYPE.WORD, 'Корень "дерево"'),
    new Logogram('⭐', 'star', LOGOGRAM_TYPE.WORD, 'Корень "звезда"'),
    new Logogram('🌙', 'moon', LOGOGRAM_TYPE.WORD, 'Корень "луна"'),
    new Logogram('🌸', 'flower', LOGOGRAM_TYPE.WORD, 'Корень "цветок"'),
    new Logogram('⬆️', 'up', LOGOGRAM_TYPE.MORPHEME, 'Приставка "под-"'),
    new Logogram('⬇️', 'down', LOGOGRAM_TYPE.MORPHEME, 'Приставка "под-"'),
    new Logogram('❄️', 'freeze', LOGOGRAM_TYPE.MORPHEME, 'Суффикс "-мороз"'),
    new Logogram('🔥', 'burn', LOGOGRAM_TYPE.MORPHEME, 'Суффикс "-гор"'),
    new Logogram('🌱', 'grow', LOGOGRAM_TYPE.MORPHEME, 'Приставка "про-"'),
]);

export { PHONEME_ALPHABET, IDEOGRAM_ALPHABET, LOGOGRAM_ALPHABET };
