import React, { useState } from 'react';
import Cartesian2D from './2d/Cartesian2D';
import Conic2D from './2d/Conic2D';
import Curvilinear2D from './2d/Curvilinear2D';
import Cylindrical2D from './2d/Cylindrical2D';
import Geographic2D from './2d/Geographic2D';
import Mercator2D from './2d/Mercator2D';
import Polar2D from './2d/Polar2D';

const Mectonovozeh1 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);

  return (
    <div>
      <h1>Визуализация систем координат 2D</h1>
      <div style={{ marginBottom: '20px' }}>
        <label> X: <input type="number" value={x} onChange={(e) => setX(parseInt(e.target.value) || 0)} /> </label>
        <label> Y: <input type="number" value={y} onChange={(e) => setY(parseInt(e.target.value) || 0)} /> </label>
        <label> Width: <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value) || 400)} /> </label>
        <label> Height: <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value) || 400)} /> </label>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ border: '1px solid #ddd', padding: '10px' }}>
          <Cartesian2D x={x} y={y} width={width} height={height} />
        </div>
        <div style={{ border: '1px solid #ddd', padding: '10px' }}>
          <Conic2D x={x} y={y} width={width} height={height} />
        </div>
        <div style={{ border: '1px solid #ddd', padding: '10px' }}>
          <Curvilinear2D x={x} y={y} width={width} height={height} />
        </div>
        <div style={{ border: '1px solid #ddd', padding: '10px' }}>
          <Cylindrical2D x={x} y={y} width={width} height={height} />
        </div>
        <div style={{ border: '1px solid #ddd', padding: '10px' }}>
          <Geographic2D x={x} y={y} width={width} height={height} />
        </div>
        <div style={{ border: '1px solid #ddd', padding: '10px' }}>
          <Mercator2D x={x} y={y} width={width} height={height} />
        </div>
        <div style={{ border: '1px solid #ddd', padding: '10px' }}>
          <Polar2D x={x} y={y} width={width} height={height} />
        </div>
      </div>
    </div>
  );
};

export default Mectonovozeh1;
