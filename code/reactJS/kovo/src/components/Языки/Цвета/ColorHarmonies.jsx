// ColorHarmonies.jsx
import React, { useState, useEffect } from 'react';
import { getColorHarmonies } from './colorHarmonies';

const ColorHarmonies = ({ r, g, b }) => {
    const [color, setColor] = useState({ r, g, b });

    useEffect(() => {
        setColor({ r, g, b });
    }, [r, g, b]);

    const harmony = getColorHarmonies(color.r, color.g, color.b);

    const renderColorCircles = (colors) => (
        <div style={{ display: 'flex', gap: '10px' }}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    style={{
                        backgroundColor: color,
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'inline-block'
                    }}
                ></div>
            ))}
        </div>
    );

    return (
        <div style={{ overflowX: 'auto' }}>
            <table>
                <tbody>
                    <tr>
                        <td>Complementary</td>
                        <td>{renderColorCircles([harmony.complementaryColor])}</td>
                    </tr>
                    <tr>
                        <td>Analogous</td>
                        <td>{renderColorCircles(harmony.analogousColors)}</td>
                    </tr>
                    <tr>
                        <td>Triadic</td>
                        <td>{renderColorCircles(harmony.triadicColors)}</td>
                    </tr>
                    <tr>
                        <td>Tetradic</td>
                        <td>{renderColorCircles(harmony.tetradicColors)}</td>
                    </tr>
                    <tr>
                        <td>Monochromatic</td>
                        <td>{renderColorCircles(harmony.monochromaticColors)}</td>
                    </tr>
                    <tr>
                        <td>Square</td>
                        <td>{renderColorCircles(harmony.squareColors)}</td>
                    </tr>
                    <tr>
                        <td>Split Complementary</td>
                        <td>{renderColorCircles(harmony.splitComplementaryColors)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ColorHarmonies;
