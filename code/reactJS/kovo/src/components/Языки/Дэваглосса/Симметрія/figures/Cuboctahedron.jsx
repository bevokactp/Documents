import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Cuboctahedron = () => {
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

    // Вершины кубооктаэдра
    const vertices = new Float32Array([
      1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0,
      1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1,
      0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1
    ]);

    // Индексы граней кубооктаэдра
    const indices = [
      0, 8, 4, 1, 5, 8, 2, 9, 4, 3, 5, 9,
      0, 6, 10, 1, 7, 10, 2, 6, 11, 3, 7, 11,
      0, 2, 4, 1, 3, 5, 0, 2, 6, 1, 3, 7,
      8, 10, 0, 9, 11, 2, 8, 10, 1, 9, 11, 3,
      4, 5, 8, 6, 7, 10, 4, 5, 9, 6, 7, 11
    ];

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    // Применение материалов
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cuboctahedron = new THREE.Mesh(geometry, material);
    scene.add(cuboctahedron);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cuboctahedron.rotation.x += 0.01;
      cuboctahedron.rotation.y += 0.01;
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

export default Cuboctahedron;
