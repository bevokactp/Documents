export class Card {
	constructor(rank, name, quantity, description) {
	  this.rank = rank;
	  this.name = name;
	  this.quantity = quantity;
	  this.description = description;
	}
  }

  export class Suit {
	constructor(names, cards) {
	  this.names = names;
	  this.cards = cards;
	}

	getFirstName() {
	  return this.names[0];
	}

	getOtherNames() {
	  return this.names.slice(1);
	}

	getFormattedName() {
	  const capitalizeFirstLetter = (name) => name.charAt(0).toUpperCase() + name.slice(1);
	  const formatSuitName = (names) => names.map(capitalizeFirstLetter).join(", ");

	  return `${this.getFirstName().toUpperCase()} (${formatSuitName(this.getOtherNames())})`;
	}

	getTotalCards() {
	  return this.cards.reduce((sum, card) => sum + card.quantity, 0);
	}

	getTotalDigitCards() {
	  return this.cards
		.filter(card => card.rank >= 1 && card.rank <= 9)
		.reduce((sum, card) => sum + card.quantity, 0);
	}

	getTotalNamedCards() {
	  return this.cards
		.filter(card => card.rank > 9 && card.rank < 14)
		.reduce((sum, card) => sum + card.quantity, 0);
	}

	getTotalLords() {
	  return this.cards
		.filter(card => card.rank === 14)
		.reduce((sum, card) => sum + card.quantity, 0);
	}
  }
