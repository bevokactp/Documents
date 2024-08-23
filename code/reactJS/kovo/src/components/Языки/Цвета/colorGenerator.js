// colorGenerator.js
import { hslToRgb } from './colorUtils';

// Генерация случайного числа в диапазоне
const getRandomInRange = (min, max) => Math.random() * (max - min) + min;

// Генерация светлых цветов
export const generateLightColors = (count = 10) => {
    return Array.from({ length: count }, () => {
        const h = getRandomInRange(0, 360);
        const s = getRandomInRange(0, 100);
        const l = getRandomInRange(70, 90); // Более светлые оттенки
        return hslToRgb(h, s, l);
    });
};

// Генерация темных цветов
export const generateDarkColors = (count = 10) => {
    return Array.from({ length: count }, () => {
        const h = getRandomInRange(0, 360);
        const s = getRandomInRange(0, 100);
        const l = getRandomInRange(10, 30); // Более темные оттенки
        return hslToRgb(h, s, l);
    });
};

// Генерация ярких цветов
export const generateBrightColors = (count = 10) => {
    return Array.from({ length: count }, () => {
        const h = getRandomInRange(0, 360);
        const s = getRandomInRange(80, 100); // Яркие оттенки
        const l = getRandomInRange(40, 60); // Не слишком светлые
        return hslToRgb(h, s, l);
    });
};

// Генерация холодных цветов
export const generateCoolColors = (count = 10) => {
    return Array.from({ length: count }, () => {
        const h = getRandomInRange(180, 240); // Холодные оттенки
        const s = getRandomInRange(50, 100);
        const l = getRandomInRange(40, 60);
        return hslToRgb(h, s, l);
    });
};

// Генерация теплых цветов
export const generateWarmColors = (count = 10) => {
    return Array.from({ length: count }, () => {
        const h = getRandomInRange(0, 60); // Теплые оттенки
        const s = getRandomInRange(50, 100);
        const l = getRandomInRange(40, 60);
        return hslToRgb(h, s, l);
    });
};

// Генерация цветов близких к теплому белому (2700K)
export const generateWarmWhiteColors = (count = 10) => {
    return Array.from({ length: count }, () => {
        const h = getRandomInRange(30, 50); // Теплые оттенки белого
        const s = getRandomInRange(0, 20);  // Низкая насыщенность
        const l = getRandomInRange(80, 90); // Светлые оттенки
        return hslToRgb(h, s, l);
    });
};

// Генерация цветов близких к нейтральному белому (4000K)
export const generateNeutralWhiteColors = (count = 10) => {
    return Array.from({ length: count }, () => {
        const h = getRandomInRange(0, 20); // Нейтральные оттенки белого
        const s = getRandomInRange(0, 10); // Очень низкая насыщенность
        const l = getRandomInRange(80, 90); // Светлые оттенки
        return hslToRgb(h, s, l);
    });
};

// Генерация цветов близких к холодному белому (6500K)
export const generateCoolWhiteColors = (count = 10) => {
    return Array.from({ length: count }, () => {
        const h = getRandomInRange(200, 240); // Холодные оттенки белого
        const s = getRandomInRange(0, 10);  // Низкая насыщенность
        const l = getRandomInRange(80, 90); // Светлые оттенки
        return hslToRgb(h, s, l);
    });
};

// Генерация пастельных цветов
export const generatePastelColors = (count = 10) => {
    return Array.from({ length: count }, () => {
        const h = getRandomInRange(0, 360);
        const s = getRandomInRange(10, 30); // Низкая насыщенность
        const l = getRandomInRange(80, 90); // Светлые оттенки
        return hslToRgb(h, s, l);
    });
};

// Генерация неоновых цветов
export const generateNeonColors = (count = 10) => {
    return Array.from({ length: count }, () => {
        const h = getRandomInRange(0, 360);
        const s = getRandomInRange(80, 100); // Очень насыщенные
        const l = getRandomInRange(40, 60);  // Не слишком светлые
        return hslToRgb(h, s, l);
    });
};

// Генерация металлических цветов
export const generateMetallicColors = (count = 10) => {
    // Металлические цвета сложнее, их часто создают с помощью текстур или эффектов
    // Поэтому здесь просто используем фиксированные оттенки
    const metallicColors = [
        [192, 192, 192], // Серебро
        [255, 215, 0],   // Золото
        [205, 127, 50],  // Медный
        [169, 169, 169], // Светло-серый
        [255, 69, 0],    // Оранжевый
        [0, 255, 255],   // Циан
        [0, 0, 255],     // Синий
        [128, 0, 128],   // Фиолетовый
        [255, 20, 147],  // Фуксия
        [255, 99, 71]    // Томаты
    ];
    return Array.from({ length: count }, (_, i) => metallicColors[i % metallicColors.length]);
};

// Генерация перламутровых цветов
export const generatePearlescentColors = (count = 10) => {
    // Перламутровые цвета также часто имитируются с помощью текстур
    // Здесь просто используем фиксированные оттенки
    const pearlescentColors = [
        [255, 240, 245], // Светло-розовый
        [240, 255, 255], // Бело-голубой
        [255, 228, 225], // Королевский розовый
        [240, 248, 255], // Алиса-синий
        [255, 239, 213], // Розовое золото
        [255, 245, 238], // Лавандовый
        [255, 250, 250], // Белый
        [255, 240, 245], // Розовый
        [248, 248, 255], // Лаванда
        [240, 255, 240]  // Холодный белый
    ];
    return Array.from({ length: count }, (_, i) => pearlescentColors[i % pearlescentColors.length]);
};

// Генерация голографических цветов
export const generateHolographicColors = (count = 10) => {
    // Голографические цвета сложно моделировать статично, часто используются с эффектами
    // Поэтому здесь просто используем фиксированные оттенки
    const holographicColors = [
        [0, 255, 255],   // Циан
        [255, 105, 180], // Лососевый
        [255, 20, 147],  // Фуксия
        [0, 191, 255],   // Дельфин
        [255, 69, 0],    // Томаты
        [128, 128, 0],   // Оливковый
        [255, 228, 225], // Королевский розовый
        [255, 140, 0],   // Оранжевый
        [240, 248, 255], // Алиса-синий
        [255, 192, 203]  // Розовый
    ];
    return Array.from({ length: count }, (_, i) => holographicColors[i % holographicColors.length]);
};

// Генерация флуоресцентных цветов
export const generateFluorescentColors = (count = 10) => {
    // Флуоресцентные цвета тоже часто используются с эффектами
    // Здесь просто используем яркие оттенки
    const fluorescentColors = [
        [0, 255, 0],     // Зеленый
        [255, 0, 255],   // Фуксия
        [255, 0, 0],     // Красный
        [255, 255, 0],   // Желтый
        [0, 255, 255],   // Голубой
        [255, 105, 180], // Лососевый
        [255, 20, 147],  // Фуксия
        [0, 191, 255],   // Дельфин
        [255, 69, 0],    // Томаты
        [255, 140, 0]    // Оранжевый
    ];
    return Array.from({ length: count }, (_, i) => fluorescentColors[i % fluorescentColors.length]);
};


// Генерация функциональных цветов
export const generateFunctionalColors = () => {
    // Пример генерации функциональных цветов
    return [
        [255, 255, 255], // Белый
        [200, 200, 200], // Светло-серый
        [100, 100, 100], // Темно-серый
        [0, 0, 0]        // Черный
    ];
};

// Генерация акцентных цветов
export const generateAccentColors = () => {
    // Пример генерации акцентных цветов
    return [
        [255, 0, 0],     // Красный
        [0, 255, 0],     // Зеленый
        [0, 0, 255],     // Синий
        [255, 165, 0]    // Оранжевый
    ];
};

// Генерация матовых цветов
export const generateMatteColors = () => {
    // Пример генерации матовых цветов
    return Array.from({ length: 10 }, () => [
        Math.floor(Math.random() * 128),
        Math.floor(Math.random() * 128),
        Math.floor(Math.random() * 128)
    ]);
};

// Генерация глянцевых цветов
export const generateGlossyColors = () => {
    // Пример генерации глянцевых цветов
    return Array.from({ length: 10 }, () => [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255)
    ]);
};

// Генерация шероховатых цветов
export const generateTexturedColors = () => {
    // Пример генерации шероховатых цветов
    return Array.from({ length: 10 }, () => [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255)
    ]);
};

// Генерация прозрачных цветов
export const generateTransparentColors = () => {
    // Пример генерации прозрачных цветов
    return [
        [255, 0, 0, 0.1], // Полупрозрачный красный
        [0, 255, 0, 0.1], // Полупрозрачный зеленый
        [0, 0, 255, 0.1], // Полупрозрачный синий
        [255, 255, 0, 0.1] // Полупрозрачный желтый
    ];
};

// Генерация полупрозрачных цветов
export const generateSemiTransparentColors = () => {
    // Пример генерации полупрозрачных цветов
    return [
        [255, 0, 0, 0.5], // Полупрозрачный красный
        [0, 255, 0, 0.5], // Полупрозрачный зеленый
        [0, 0, 255, 0.5], // Полупрозрачный синий
        [255, 255, 0, 0.5] // Полупрозрачный желтый
    ];
};

// Генерация непрозрачных цветов
export const generateOpaqueColors = () => {
    // Пример генерации непрозрачных цветов
    return [
        [255, 0, 0],     // Красный
        [0, 255, 0],     // Зеленый
        [0, 0, 255],     // Синий
        [255, 255, 0]    // Желтый
    ];
};

// Генерация высококонтрастных цветов
export const generateHighContrastColors = () => {
    // Пример генерации высококонтрастных цветов
    return [
        [0, 0, 0],       // Черный
        [255, 255, 255], // Белый
        [255, 0, 0],     // Красный
        [0, 0, 255]      // Синий
    ];
};

// Генерация низкоконтрастных цветов
export const generateLowContrastColors = () => {
    // Пример генерации низкоконтрастных цветов
    return [
        [240, 240, 240], // Очень светло-серый
        [200, 200, 200], // Светло-серый
        [180, 180, 180], // Легкий серый
        [160, 160, 160]  // Серый
    ];
};

// Генерация статичных цветов
export const generateStaticColors = () => {
    // Пример генерации статичных цветов
    return [
        [0, 128, 128],   // Темный бирюзовый
        [128, 128, 0],   // Оливковый
        [128, 0, 128],   // Фиолетовый
        [0, 128, 0]      // Темный зеленый
    ];
};

// Генерация динамических цветов
export const generateDynamicColors = () => {
    // Пример генерации динамических цветов
    return Array.from({ length: 10 }, () => [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255)
    ]);
};

// Генерация стабильных цветов
export const generateStableColors = () => {
    // Пример генерации стабильных цветов
    return [
        [255, 0, 0],     // Красный
        [0, 255, 0],     // Зеленый
        [0, 0, 255],     // Синий
        [255, 255, 0]    // Желтый
    ];
};

// Генерация энергетических цветов
export const generateEnergeticColors = () => {
    // Пример генерации энергетических цветов
    return [
        [255, 69, 0],    // Оранжевый
        [255, 0, 0],     // Красный
        [255, 20, 147],  // Фуксия
        [255, 140, 0]    // Темный оранжевый
    ];
};

// Генерация релаксирующих цветов
export const generateRelaxingColors = () => {
    // Пример генерации релаксирующих цветов
    return [
        [173, 216, 230], // Светло-голубой
        [144, 238, 144], // Светло-зеленый
        [240, 230, 140], // Слоновая кость
        [221, 160, 221]  // Сливочный
    ];
};

// Генерация агрессивных цветов
export const generateAggressiveColors = () => {
    // Пример генерации агрессивных цветов
    return [
        [255, 0, 0],     // Красный
        [255, 20, 147],  // Фуксия
        [255, 105, 180], // Розовый
        [255, 69, 0]     // Оранжевый
    ];
};

// Генерация успокаивающих цветов
export const generateCalmingColors = () => {
    // Пример генерации успокаивающих цветов
    return [
        [173, 216, 230], // Светло-голубой
        [144, 238, 144], // Светло-зеленый
        [255, 239, 213], // Персиковый
        [224, 255, 255]  // Снежный голубой
    ];
};
