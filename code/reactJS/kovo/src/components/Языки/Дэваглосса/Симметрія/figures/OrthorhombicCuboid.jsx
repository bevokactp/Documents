// OrthorhombicCuboid.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const OrthorhombicCuboid = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    const size = 300;
    renderer.setSize(size, size);
    mountRef.current.appendChild(renderer.domElement);

    camera.aspect = size / size;
    camera.updateProjectionMatrix();

    const geometry = new THREE.BoxGeometry(1, 2, 3); // Размеры для кубоида
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
    const cuboid = new THREE.Mesh(geometry, material);
    scene.add(cuboid);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cuboid.rotation.x += 0.01;
      cuboid.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
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

export default OrthorhombicCuboid;
