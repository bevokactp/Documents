// xvam1domari9.js

// Класс для обработки отдельного слова
export class Word {
  constructor(name, etymologies = [], synonyms = [], descriptions = []) {
    this.name = name;
    this.etymologies = etymologies;
    this.synonyms = synonyms;
    this.descriptions = descriptions;
  }

  // Метод для получения данных слова в виде объекта
  getData() {
    return {
      name: this.name,
      etymologies: this.etymologies,
      synonyms: this.synonyms,
      descriptions: this.descriptions
    };
  }
}

// Класс для обработки категории слов
export class CategoryWord {
  constructor(name) {
    this.name = name;
    this.words = [];
  }

  // Получение всех слов в категории
  getWords() {
    return this.words.map(word => word.getData());
  }

  // Метод для получения данных категории
  getData() {
    return {
      name: this.name,
      words: this.getWords()
    };
  }
}

