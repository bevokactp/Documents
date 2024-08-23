// Colors.jsx
import React from 'react';
import ColorsList from './ColorsList';
import ColorSpectrum from './ColorSpectrum';
import ColorWheelHarmony from './ColorWheelHarmony';
import ColorGenerator from './ColorGenerator';
import Names from './Names';

const Colors = () => {

    return (
        <div>
            <Names />
            <ColorGenerator />
            <ColorWheelHarmony />
            <ColorSpectrum />
            <ColorsList />
        </div>
    );
};

export default Colors;
