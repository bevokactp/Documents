// антенны.js

export const calculateAntennaParameters = ({
	type,
	frequencyRange,
	impedance,
	waveResistance,
	vswr,
	polarization,
	gain,
	bandwidth,
	length,
	width,
	height,
	material,
	radiationPattern,
	angularResolution,
	beamWidth,
	radiationProfile,
	fieldDistribution,
	antennaResistance,
	signalStrength,
	reflectionCoefficient,
  }) => {
	// Преобразуем входные параметры в числа, если необходимо
	const freq = parseFloat(frequencyRange);
	const imp = parseFloat(impedance);
	const waveRes = parseFloat(waveResistance);
	const vswrValue = parseFloat(vswr);
	const gainValue = parseFloat(gain);
	const bandwidthValue = parseFloat(bandwidth);
	const lengthValue = parseFloat(length);
	const widthValue = parseFloat(width);
	const heightValue = parseFloat(height);
	const angularRes = parseFloat(angularResolution);
	const beamWidthValue = parseFloat(beamWidth);
	const antennaRes = parseFloat(antennaResistance);
	const signalStr = parseFloat(signalStrength);
	const reflectionCoeff = parseFloat(reflectionCoefficient);

	// Примеры расчетов (эти расчеты являются упрощенными для примера)
	const efficiency = gainValue / (gainValue + 1); // Примерный расчет эффективности
	const effectiveBandwidth = bandwidthValue * 0.8; // Примерное вычисление эффективности полосы пропускания
	const impedanceMismatch = Math.abs(imp - antennaRes); // Примерное вычисление несоответствия импеданса

	// Формируем результат
	const results = {
	  type,
	  frequencyRange: freq,
	  impedance: imp,
	  waveResistance: waveRes,
	  vswr: vswrValue,
	  polarization,
	  gain: gainValue,
	  bandwidth: effectiveBandwidth,
	  dimensions: {
		length: lengthValue,
		width: widthValue,
		height: heightValue,
	  },
	  material,
	  radiationPattern,
	  angularResolution: angularRes,
	  beamWidth: beamWidthValue,
	  radiationProfile,
	  fieldDistribution,
	  antennaResistance: antennaRes,
	  signalStrength: signalStr,
	  reflectionCoefficient: reflectionCoeff,
	  efficiency,
	  impedanceMismatch,
	};

	return results;
  };



/**
 * Форматирует имя категории или подкатегории, добавляя пробелы между заглавными буквами.
 * @param {string} categoryName - Имя категории или подкатегории.
 * @returns {string} - Отформатированное имя с пробелами и первой заглавной буквой.
 */
export function formatCategoryName(categoryName) {
	// Шаг 1: Добавляем пробелы перед заглавной буквой, если она идет сразу после строчной буквы
	let step1 = categoryName.replace(/([a-zа-я])([A-ZА-Я])/g, '$1 $2');
	// Шаг 2: Добавляем пробелы между последовательностями заглавных букв и следующими строчными буквами
	let step2 = step1.replace(/([A-ZА-Я])([A-ZА-Я][a-zа-я])/g, '$1 $2');
	// Шаг 3: Делаем первую букву заглавной
    let result = step2.charAt(0).toUpperCase() + step2.slice(1).toLowerCase();
	return result;
  }

  /**
   * Форматирует данные для отображения в таблице.
   * @param {string} categoryName - Имя категории или подкатегории.
   * @param {object} data - Объект данных для форматирования.
   * @returns {Array} - Массив отформатированных данных.
   */
  export function formatDataForTable(categoryName, data) {
	const formattedData = [];

	// Проверяем, что данные не пустые и являются объектом
	if (data && typeof data === 'object') {
	  Object.entries(data).forEach(([subCategory, details]) => {
		formattedData.push({
		  name: formatCategoryName(subCategory), // Форматируем подкатегории
		  описание: details.описание || '',
		  плюсы: details.плюсы || '',
		  минусы: details.минусы || '',
		  сложностьИзготовления: details.сложностьИзготовления || '',
		  качествоСвязи: details.качествоСвязи || '',
		  применение: details.применение || '',
		  известныеПредставители: details.известныеПредставители || ''
		});
	  });
	} else {
	  console.error(`Неверный формат данных для категории "${categoryName}":`, data);
	}

	return formattedData;
  }
