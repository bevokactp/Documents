// Rhombohedron.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Rhombohedron = () => {
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

    // Параметры ромбоэдра
    const a = 1; // Длина рёбер

    // Вершины ромбоэдра
    const vertices = new Float32Array([
      0, 0, 0,
      a, 0, 0,
      a / 2, Math.sqrt(3) * a / 2, 0,
      0, 0, a,
      a, 0, a,
      a / 2, Math.sqrt(3) * a / 2, a
    ]);

    // Рёбра ромбоэдра
    const indices = [
      0, 1, 1, 2, 2, 0, // Нижняя грань
      3, 4, 4, 5, 5, 3, // Верхняя грань
      0, 3, 1, 4, 2, 5  // Боковые грани
    ];

    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setIndex(indices);

    const rhombohedron = new THREE.LineSegments(geometry, material);
    scene.add(rhombohedron);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      rhombohedron.rotation.x += 0.01;
      rhombohedron.rotation.y += 0.01;
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

export default Rhombohedron;
