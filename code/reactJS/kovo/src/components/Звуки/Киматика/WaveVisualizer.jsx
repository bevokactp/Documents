import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Wave = ({ frequency }) => {
  const meshRef = useRef();
  const geometryRef = useRef();

  useEffect(() => {
    if (meshRef.current) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(3000);
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] = i / 100; // X position
        positions[i + 1] = 0; // Y position
        positions[i + 2] = 0; // Z position
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometryRef.current = geometry;
      meshRef.current.geometry = geometry;
    }
  }, []);

  useFrame(() => {
    if (geometryRef.current) {
      const geometry = geometryRef.current;
      const positions = geometry.attributes.position.array;
      const time = Date.now() * 0.001;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] = Math.sin(positions[i] * frequency + time) * 5;
      }
      geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef}>
      <bufferGeometry attach="geometry" />
      <lineBasicMaterial color="blue" />
    </mesh>
  );
};

const WaveVisualizer = ({ frequency }) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Wave frequency={frequency} />
    </Canvas>
  );
};

export default WaveVisualizer;
