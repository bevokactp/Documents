// Color.js
import { rgbaToHex, rgbaToHsl } from './colorUtils';

class Color {
	constructor(number, nameReal, nameCurrent, r, g, b, a = 1) {
		this.number = number;
		this.nameReal = nameReal;
		this.nameCurrent = nameCurrent;
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}

	getRgba() {
		return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
	}

	getHex() {
		return rgbaToHex(this.r, this.g, this.b);
	}

	getHsl() {
		return rgbaToHsl(this.r, this.g, this.b);
	}
}

export default Color;
