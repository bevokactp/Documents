// Octahedron.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Octahedron = () => {
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
    const geometry = new THREE.OctahedronGeometry();
    const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });

    const octahedron = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), material);
    scene.add(octahedron);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      octahedron.rotation.x += 0.01;
      octahedron.rotation.y += 0.01;
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

export default Octahedron;
