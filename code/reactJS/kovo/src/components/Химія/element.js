export const STATES = {
	GAS: 'газ',
	LIQUID: 'жидкость',
	SOLID: 'твердый'
  };

  // Константы для реакционной способности
  export const REACTIVITY = {
	HIGH: 'высокая',
	MEDIUM: 'средняя',
	LOW: 'низкая'
  };

  export class Element {
	constructor(
	  number, nameModern, nameReal, shortName, isArtificial, state, isMetal, isNonMetal, isMetalloids,
	  isAlkaliMetal, isAlkalineEarthMetal, isPlatinoidMetal, isHalogen, isRareEarth, isAcidic, isReducing, isOxidizing,
	  reactivity, valences, isotopes, oxidationStates, isOrganic, isInorganic, isStable, molecularMass,
	  hardness, isRadioactivity, isDispersed, meltingPoint, boilingPoint, solidificationPoint,
	  isSuperconductivity, isFluidity, electricalConductivity, thermalConductivity, density,
	  electronegativity, isNoble, isInert
	) {
	  this.number = number;                // Номер элемента (positive int)
	  this.nameModern = nameModern;        // Наименование текущщее элемента (str)
	  this.nameReal = nameReal;            // Наименование настоящее элемента (str)
	  this.shortName = shortName;          // Краткое наименование элемента (str)
	  this.isArtificial = isArtificial;    // Искусственный (bool)
	  this.state = state;                  // Состояние (газ, жидкость, твердый) (str)
	  this.isMetal = isMetal;              // Металл (bool)
	  this.isNonMetal = isNonMetal;        // Неметалл (bool)
	  this.isMetalloids = isMetalloids;    // Полуметалл (bool)
	  this.isAlkaliMetal = isAlkaliMetal;  // Щелочный металл (bool)
	  this.isAlkalineEarthMetal = isAlkalineEarthMetal; // Щелочноземельный металл (bool)
	  this.isPlatinoidMetal = isPlatinoidMetal; // Платиноидный металл (bool)
	  this.isHalogen = isHalogen;          // Галоген (bool)
	  this.isRareEarth = isRareEarth;      // Редкоземельный элемент (bool)
	  this.isAcidic = isAcidic;            // Кислотный (bool)
	  this.isReducing = isReducing;        // Восстановитель (bool)
	  this.isOxidizing = isOxidizing;      // Окислитель (bool)
	  this.reactivity = reactivity;        // Реакционная способность (str: высокая, средняя, низкая)
	  this.valences = valences;            // Валентности (array int)
	  this.isotopes = isotopes;            // Изотопы (array str)
	  this.oxidationStates = oxidationStates; // Степени окисления (array int)
	  this.isOrganic = isOrganic;          // Органический элемент (bool)
	  this.isInorganic = isInorganic;      // Неорганический элемент (bool)
	  this.isStable = isStable;            // Стабилен (bool)
	  this.molecularMass = molecularMass;  // Молекулярная масса (positive int)
	  this.hardness = hardness;            // Твердость (positive int)
	  this.isRadioactivity = isRadioactivity; // Радиоактивность (bool)
	  this.isDispersed = isDispersed;      // Разсеянный элемент (bool)
	  this.isRareEarth = isRareEarth;      // Редкоземельный элемент (bool)
	  this.meltingPoint = meltingPoint;    // Температура плавления (int)
	  this.boilingPoint = boilingPoint;    // Температура кипения (int)
	  this.solidificationPoint = solidificationPoint; // Температура затвердывания (int)
	  this.isSuperconductivity = isSuperconductivity; // Сверхпроводимость (bool)
	  this.isFluidity = isFluidity;        // Свертекучесть (bool)
	  this.electricalConductivity = electricalConductivity; // Электропроводимость (int)
	  this.thermalConductivity = thermalConductivity; // Теплопроводимость (int)
	  this.density = density;              // Плотность (positive int)
	  this.electronegativity = electronegativity; // Электроотрицательность (int)
	  this.isNoble = isNoble;              // Благородный элемент (bool)
	  this.isInert = isInert;              // Инертный элемент (bool)

	  this.validateProperties();
	}

	validateProperties() {
	  if (this.isMetal) {
		// Если элемент металл, то он может быть платиноидным, щелочным или щелочноземельным
		this.isPlatinoidMetal = this.isPlatinoidMetal || false;
		this.isAlkaliMetal = this.isAlkaliMetal || false;
		this.isAlkalineEarthMetal = this.isAlkalineEarthMetal || false;
	  } else if (this.isNonMetal || this.isMetalloids) {
		// Если элемент не металл или полуметалл, то он не может быть платиноидным, щелочным или щелочноземельным
		this.isPlatinoidMetal = false;
		this.isAlkaliMetal = false;
		this.isAlkalineEarthMetal = false;
	  }
	}
  }
