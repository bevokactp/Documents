// TriclinicParallelepiped.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const TriclinicParallelepiped = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    // Установка размеров рендерера
    const size = 300;
    renderer.setSize(size, size);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Изменение размера камеры и проекции
    camera.aspect = size / size;
    camera.updateProjectionMatrix();

    // Создание геометрии и материала
    const geometry = new THREE.BufferGeometry();

    // Параметры параллелепипеда
    const a = 1;
    const b = 1.5;
    const c = 2;
    const alpha = Math.PI / 6; // 30 градусов
    const beta = Math.PI / 4;  // 45 градусов
    const gamma = Math.PI / 3; // 60 градусов

    // Вершины параллелепипеда
    const vertices = new Float32Array([
      0, 0, 0,
      a, 0, 0,
      a, b, 0,
      0, b, 0,
      0, 0, c,
      a, 0, c,
      a, b, c,
      0, b, c
    ]);

    // Рёбра параллелепипеда
    const indices = [
      0, 1, 1, 2, 2, 3, 3, 0, // Базовая грань
      4, 5, 5, 6, 6, 7, 7, 4, // Верхняя грань
      0, 4, 1, 5, 2, 6, 3, 7  // Боковые грани
    ];

    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setIndex(indices);

    const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });

    const parallelepiped = new THREE.LineSegments(geometry, material);
    scene.add(parallelepiped);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      parallelepiped.rotation.x += 0.01;
      parallelepiped.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Очистка при размонтировании компонента
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '300px',
        height: '300px',
        border: '2px solid black',
        overflow: 'hidden',
      }}
    />
  );
};

export default TriclinicParallelepiped;
