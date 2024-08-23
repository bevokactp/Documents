// MonoclinicPrism.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const MonoclinicPrism = () => {
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

    // Параметры параллелограмма
    const a = 1;
    const b = 1.5;
    const h = 2; // Высота призмы
    const alpha = Math.PI / 6; // 30 градусов

    // Вершины параллелограмма в основании
    const vertices = new Float32Array([
      0, 0, 0,                      // Вершина 0
      a, 0, 0,                      // Вершина 1
      a * Math.cos(alpha), a * Math.sin(alpha), 0, // Вершина 2
      Math.cos(alpha), Math.sin(alpha), 0, // Вершина 3

      0, 0, h,                      // Вершина 4 (верхняя грань)
      a, 0, h,                      // Вершина 5
      a * Math.cos(alpha), a * Math.sin(alpha), h, // Вершина 6
      Math.cos(alpha), Math.sin(alpha), h // Вершина 7
    ]);

    // Рёбра призмы
    const indices = [
      0, 1, 1, 2, 2, 3, 3, 0,  // Нижняя грань (основание)
      4, 5, 5, 6, 6, 7, 7, 4,  // Верхняя грань
      0, 4, 1, 5, 2, 6, 3, 7   // Боковые грани
    ];

    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setIndex(indices);

    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

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

export default MonoclinicPrism;
