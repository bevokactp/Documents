// TetragonalPrism.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const TetragonalPrism = () => {
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
    const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });

    // Параметры призмы
    const a = 1; // Длина рёбер в основании
    const b = 2; // Высота призмы

    // Вершины тетрагональной призмы
    const vertices = new Float32Array([
      0, 0, 0,
      a, 0, 0,
      a / 2, Math.sqrt(3) * a / 2, 0,
      0, 0, b,
      a, 0, b,
      a / 2, Math.sqrt(3) * a / 2, b
    ]);

    // Рёбра тетрагональной призмы
    const indices = [
      0, 1, 1, 2, 2, 0, // Базовая грань
      0, 3, 1, 4, 2, 5, // Верхняя грань
      3, 4, 4, 5, 5, 3  // Боковые грани
    ];

    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setIndex(indices);

    const prism = new THREE.LineSegments(geometry, material);
    scene.add(prism);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      prism.rotation.x += 0.01;
      prism.rotation.y += 0.01;
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

export default TetragonalPrism;
