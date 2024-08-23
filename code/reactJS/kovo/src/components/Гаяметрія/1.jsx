import React, { useState } from 'react';

import Multiplication from './MentalCalc/Multiplication';
import Division from './MentalCalc/Division';
import Exponentiation from './MentalCalc/Exponentiation';
import Roots from './MentalCalc/Roots';

import DivideSegment from './Painting/DivideSegment';
import MeasureAngle from './Painting/MeasureAngle';
import DrawShapes from './Painting/DrawShapes';
import DivideCircle from './Painting/DivideCircle';

// import Enneagram from './Symbols/2d/Enneagram';
// import Meander from './Symbols/2d/Meander';
// import VectorField from './Symbols/2d/VectorField';
// import Snowflake from './Symbols/2d/Snowflake';
// import MandorlaVesicaPiscis from './Symbols/2d/Life/MandorlaVesicaPiscis';
import FigurativeNumbers from './FigurativeNumbers/FigurativeNumbers';
import Trigonometry from './Trigonometry/Trigonometry';
import Series from './Series/Series';

import Fractions from './Fractions/Fractions';


// только положительные
// справа на лево

const Ra9metpi9 = () => {
    const [activeTab, setActiveTab] = useState('Fractions');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Calculation':
                return (
                  <div>
                    <Multiplication />
                    <Division />
                    <Exponentiation />
                    <Roots />
                  </div>
                )
            case 'Painting':
                return (
                  <div>
                    <DivideSegment />
                    <MeasureAngle />
                    <DrawShapes />
                    <DivideCircle />
                  </div>
                )
            case 'Symbols':
                return (
                  <div>
                    <FigurativeNumbers />
                    {/* <MandorlaVesicaPiscis /> */}
                    {/* <Snowflake /> */}
                    {/* <VectorField /> */}
                    {/* <Meander /> */}
                    {/* <Enneagram /> */}
                  </div>
                )
            case 'Trigonometry':
                return (
                  <div>
                    <Trigonometry />
                  </div>
            )
        case 'Series':
            return (
              <div>
                <Series />
              </div>
            )
        case 'Fractions':
            return (
              <div>
                <Fractions />
              </div>
            )
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Ra9metpi9</h1>
            <div>
                <button onClick={() => setActiveTab('Fractions')}>Fractions</button>
                <button onClick={() => setActiveTab('Series')}>Series</button>
                <button onClick={() => setActiveTab('Trigonometry')}>Trigonometry</button>
                <button onClick={() => setActiveTab('Calculation')}>Calculation</button>
                <button onClick={() => setActiveTab('Painting')}>Painting</button>
                <button onClick={() => setActiveTab('Symbols')}>Symbols</button>
            </div>
            <div>
                {renderTabContent()}
            </div>
        </div>
    );
};

export default Ra9metpi9;
