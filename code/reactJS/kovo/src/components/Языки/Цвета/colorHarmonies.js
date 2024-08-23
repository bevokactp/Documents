import { rgbaToHex, rgbaToHsl, hslToRgb } from './colorUtils';

// Функция для получения цветовых схем
export const getColorHarmonies = (r, g, b) => {

	// Дополнительный цвет (complementary)
	const getComplementaryColor = (r, g, b) => {
		return {
			r: 255 - r,
			g: 255 - g,
			b: 255 - b
		};
	};

	// Аналогичные цвета (analogous)
	const getAnalogousColors = (r, g, b) => {
		const hslColor = rgbaToHsl(r, g, b);
		let h = parseInt(hslColor.match(/hsl\((\d+)\,/)[1], 10);
		let s = parseInt(hslColor.match(/,\s(\d+)%\)/)[1], 10);
		let l = parseInt(hslColor.match(/,\s(\d+)%\)/)[1], 10);

		const offset = 30; // Угол смещения для аналогичных цветов
		const analogousColors = [
			{ h: (h + offset) % 360, s, l },
			{ h: (h - offset + 360) % 360, s, l }
		];

		return analogousColors.map(({ h, s, l }) => {
			return rgbaToHex(
				...hslToRgb(h, s, l) // Преобразование HSL в RGB
			);
		});
	};

	// Триадные цвета (triadic)
	const getTriadicColors = (r, g, b) => {
		const hslColor = rgbaToHsl(r, g, b);
		let h = parseInt(hslColor.match(/hsl\((\d+)\,/)[1], 10);
		let s = parseInt(hslColor.match(/,\s(\d+)%\)/)[1], 10);
		let l = parseInt(hslColor.match(/,\s(\d+)%\)/)[1], 10);

		const triadicColors = [
			{ h: (h + 120) % 360, s, l },
			{ h: (h - 120 + 360) % 360, s, l }
		];

		return triadicColors.map(({ h, s, l }) => {
			return rgbaToHex(
				...hslToRgb(h, s, l) // Преобразование HSL в RGB
			);
		});
	};

	// Тетрадные цвета (tetradic)
	const getTetradicColors = (r, g, b) => {
		const hslColor = rgbaToHsl(r, g, b);
		let h = parseInt(hslColor.match(/hsl\((\d+)\,/)[1], 10);
		let s = parseInt(hslColor.match(/,\s(\d+)%\)/)[1], 10);
		let l = parseInt(hslColor.match(/,\s(\d+)%\)/)[1], 10);

		const tetradicColors = [
			{ h: (h + 90) % 360, s, l },
			{ h: (h - 90 + 360) % 360, s, l },
			{ h: (h + 180) % 360, s, l }
		];

		return tetradicColors.map(({ h, s, l }) => {
			return rgbaToHex(
				...hslToRgb(h, s, l) // Преобразование HSL в RGB
			);
		});
	};

	// Монохроматические цвета (monochromatic)
	const getMonochromaticColors = (r, g, b) => {
		const hslColor = rgbaToHsl(r, g, b);
		let h = parseInt(hslColor.match(/hsl\((\d+)\,/)[1], 10);
		let s = parseInt(hslColor.match(/,\s(\d+)%\)/)[1], 10);
		let l = parseInt(hslColor.match(/,\s(\d+)%\)/)[1], 10);

		const monochromaticColors = [
			{ h, s, l: Math.max(0, l - 20) },
			{ h, s, l: Math.min(100, l + 20) }
		];

		return monochromaticColors.map(({ h, s, l }) => {
			return rgbaToHex(
				...hslToRgb(h, s, l) // Преобразование HSL в RGB
			);
		});
	};

	// Квадратные цвета (square)
	const getSquareColors = (r, g, b) => {
		const hslColor = rgbaToHsl(r, g, b);
		let h = parseInt(hslColor.match(/hsl\((\d+)\,/)[1], 10);
		let s = parseInt(hslColor.match(/,\s(\d+)%\)/)[1], 10);
		let l = parseInt(hslColor.match(/,\s(\d+)%\)/)[1], 10);

		const squareColors = [
			{ h: (h + 90) % 360, s, l },
			{ h: (h + 180) % 360, s, l },
			{ h: (h + 270) % 360, s, l }
		];

		return squareColors.map(({ h, s, l }) => {
			return rgbaToHex(
				...hslToRgb(h, s, l) // Преобразование HSL в RGB
			);
		});
	};

	// Разделённые дополнительные цвета (split complementary)
	const getSplitComplementaryColors = (r, g, b) => {
		const hslColor = rgbaToHsl(r, g, b);
		let h = parseInt(hslColor.match(/hsl\((\d+)\,/)[1], 10);
		let s = parseInt(hslColor.match(/,\s(\d+)%\)/)[1], 10);
		let l = parseInt(hslColor.match(/,\s(\d+)%\)/)[1], 10);

		const splitComplementaryColors = [
			{ h: (h + 150) % 360, s, l },
			{ h: (h + 210) % 360, s, l }
		];

		return splitComplementaryColors.map(({ h, s, l }) => {
			return rgbaToHex(
				...hslToRgb(h, s, l) // Преобразование HSL в RGB
			);
		});
	};

	return {
		complementaryColor: rgbaToHex(...Object.values(getComplementaryColor(r, g, b))),
		analogousColors: getAnalogousColors(r, g, b),
		triadicColors: getTriadicColors(r, g, b),
		tetradicColors: getTetradicColors(r, g, b),
		monochromaticColors: getMonochromaticColors(r, g, b),
		squareColors: getSquareColors(r, g, b),
		splitComplementaryColors: getSplitComplementaryColors(r, g, b),
	};
};
