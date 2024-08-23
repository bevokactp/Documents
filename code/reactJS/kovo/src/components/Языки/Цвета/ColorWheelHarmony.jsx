// ColorWheelHarmony.jsx

import React, { useState, useEffect, useRef } from 'react';
import './ColorWheelHarmony.css';
import ColorHarmonies from './ColorHarmonies';
import { hslToRgb } from './colorUtils';

const ColorWheelHarmony = () => {
    const [selectedColor, setSelectedColor] = useState({ r: 255, g: 255, b: 255 });
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const radius = width / 2;

        const drawColorWheel = () => {
            const gradient = context.createConicGradient(0, radius, radius);
            for (let i = 0; i < 360; i++) {
                gradient.addColorStop(i / 360, `hsl(${i}, 100%, 50%)`);
            }
            context.clearRect(0, 0, width, height);
            context.beginPath();
            context.arc(radius, radius, radius, 0, 2 * Math.PI);
            context.clip();
            context.fillStyle = gradient;
            context.fillRect(0, 0, width, height);
        };

        drawColorWheel();
    }, []);

    const handleClick = (event) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const radius = canvas.width / 2;
        const centerX = radius;
        const centerY = radius;
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx); // Вычисляем угол в радианах

        // Преобразуем угол в Hue
        const hue = ((angle + Math.PI) / (2 * Math.PI)) * 360; // Переводим радианы в градусы
        const saturation = Math.min((distance / radius) * 100, 100);
        const lightness = 50;

        // Обеспечиваем корректное значение Hue
        const adjustedHue = (hue + 180) % 360;
        const [r, g, b] = hslToRgb(adjustedHue, saturation, lightness);
        setSelectedColor({ r, g, b });
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: '1', padding: '10px' }}>
                <canvas
                    ref={canvasRef}
                    width="300"
                    height="300"
                    onClick={handleClick}
                    className="color-wheel"
                />
                <div
                    className="color-preview"
                    style={{ backgroundColor: `rgb(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b})`, width: '100px', height: '100px' }}
                />
            </div>
            <div style={{ flex: '1', padding: '10px' }}>
                <ColorHarmonies r={selectedColor.r} g={selectedColor.g} b={selectedColor.b} />
            </div>
        </div>
    );
};

export default ColorWheelHarmony;
