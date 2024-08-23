import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HexagonalPrism = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    const size = 300;
    renderer.setSize(size, size);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    camera.aspect = size / size;
    camera.updateProjectionMatrix();

    // Создание геометрии гексагональной призмы
    const radius = 1; // Радиус основания призмы
    const height = 2; // Высота призмы
    const geometry = new THREE.CylinderGeometry(radius, radius, height, 6);
    const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });

    // Отображение только рёбер фигуры
    const prism = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), material);
    scene.add(prism);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      prism.rotation.x += 0.01;
      prism.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '300px', height: '300px', border: '2px solid black', overflow: 'hidden' }} />;
};

export default HexagonalPrism;
