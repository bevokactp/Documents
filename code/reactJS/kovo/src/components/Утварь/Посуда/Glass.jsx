// Glass.jsx
import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function Glass() {
  const glassRef = useRef();

  const height = 1; // Высота цилиндра
  const outerRadius = 0.5; // Внешний радиус цилиндра
  const wallThickness = 0.1; // Толщина стенки
  const innerRadius = outerRadius - wallThickness; // Внутренний радиус цилиндра

  // Материалы для внешнего и внутреннего цилиндров
  const glassMaterial = new THREE.MeshStandardMaterial({
    color: '#0ff', // Неоново-синий цвет
    emissive: '#00f', // Эмиссия для неонового эффекта
    roughness: 0.3,
    metalness: 0.8,
    transparent: true,
    opacity: 0.8,
  });

  // Создание внешнего цилиндра
  const outerGeometry = new THREE.CylinderGeometry(outerRadius, outerRadius, height, 64);

  // Создание внутреннего цилиндра
  const innerGeometry = new THREE.CylinderGeometry(innerRadius, innerRadius, height - 0.01, 64);

  useFrame(() => {
    glassRef.current.rotation.x += 0.01;
    glassRef.current.rotation.y += 0.01;
    glassRef.current.rotation.z += 0.01;
  });

  return (
    <group ref={glassRef} scale={[2, 2, 2]}>
      {/* Внешний цилиндр */}
      <mesh geometry={outerGeometry} material={glassMaterial} />

      {/* Внутренний цилиндр */}
      <mesh geometry={innerGeometry} material={new THREE.MeshBasicMaterial({ color: '#000' })} />
    </group>
  );
}

export default Glass;
