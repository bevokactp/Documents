// Scene.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Glass from './Glass'; // Импортируем стеклянный цилиндр

function Scene() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: '10px solid black',
          overflow: 'hidden',
          background: '#000',
        }}
      >
        <Canvas style={{ width: '100%', height: '100%' }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <OrbitControls enableZoom={false} />
          <Glass />
        </Canvas>
      </div>
    </div>
  );
}

export default Scene;
