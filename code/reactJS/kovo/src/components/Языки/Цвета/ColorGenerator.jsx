import React, { useState, useEffect } from 'react';
import {
    generatePearlescentColors,
    generateFunctionalColors,
    generateAccentColors,
    generateMatteColors,
    generateGlossyColors,
    generateTexturedColors,
    generateTransparentColors,
    generateSemiTransparentColors,
    generateOpaqueColors,
    generateHighContrastColors,
    generateLowContrastColors,
    generateStaticColors,
    generateDynamicColors,
    generateStableColors,
    generateEnergeticColors,
    generateRelaxingColors,
    generateAggressiveColors,
    generateCalmingColors
} from './colorGenerator';
import './colorGenerator.css';

const ColorGenerator = () => {
    const [colors, setColors] = useState({
        pearlescent: [],
        functional: [],
        accent: [],
        matte: [],
        glossy: [],
        textured: [],
        transparent: [],
        semiTransparent: [],
        opaque: [],
        highContrast: [],
        lowContrast: [],
        static: [],
        dynamic: [],
        stable: [],
        energetic: [],
        relaxing: [],
        aggressive: [],
        calming: []
    });

    // Генерация цветов для всех категорий
    const generateColors = () => {
        setColors({
            pearlescent: generatePearlescentColors(),
            functional: generateFunctionalColors(),
            accent: generateAccentColors(),
            matte: generateMatteColors(),
            glossy: generateGlossyColors(),
            textured: generateTexturedColors(),
            transparent: generateTransparentColors(),
            semiTransparent: generateSemiTransparentColors(),
            opaque: generateOpaqueColors(),
            highContrast: generateHighContrastColors(),
            lowContrast: generateLowContrastColors(),
            static: generateStaticColors(),
            dynamic: generateDynamicColors(),
            stable: generateStableColors(),
            energetic: generateEnergeticColors(),
            relaxing: generateRelaxingColors(),
            aggressive: generateAggressiveColors(),
            calming: generateCalmingColors()
        });
    };

    useEffect(() => {
        generateColors(); // Генерация цветов при загрузке компонента
        document.querySelector('.generate-button').click(); // Автоматическое нажатие на кнопку
    }, []);

    // Маппинг текстов для категорий цветов
    const colorCategoryTexts = {
        pearlescent: 'Перламутровые цвета',
        functional: 'Функциональные цвета',
        accent: 'Акцентные цвета',
        matte: 'Матовые цвета',
        glossy: 'Глянцевые цвета',
        textured: 'Шероховатые цвета',
        transparent: 'Прозрачные цвета',
        semiTransparent: 'Полупрозрачные цвета',
        opaque: 'Непрозрачные цвета',
        highContrast: 'Высококонтрастные цвета',
        lowContrast: 'Низкоконтрастные цвета',
        static: 'Статичные цвета',
        dynamic: 'Динамические цвета',
        stable: 'Стабильные цвета',
        energetic: 'Энергетические цвета',
        relaxing: 'Релаксирующие цвета',
        aggressive: 'Агрессивные цвета',
        calming: 'Успокаивающие цвета'
    };

    return (
        <div className="color-generator">
            <h2>Генератор Цветов</h2>
            <button onClick={generateColors} className="generate-button">Наново</button>
            {Object.keys(colors).map((category, index) => (
                <div key={index} className="color-category">
                    <h3>{colorCategoryTexts[category]}</h3>
                    <div className="color-swatch">
                        {colors[category].map((color, idx) => (
                            <div
                                key={idx}
                                style={{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}
                                className="color-box"
                                onClick={() => navigator.clipboard.writeText(`rgb(${color[0]}, ${color[1]}, ${color[2]})`)}
                                title={`rgb(${color[0]}, ${color[1]}, ${color[2]})`}
                            ></div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ColorGenerator;
