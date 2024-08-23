import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const TetrakisHexahedron = () => {
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

    // Создание геометрии куба
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(cubeGeometry, material);
    scene.add(cube);

    // Добавление пирамид на грани куба
    const pyramidGeometry = new THREE.TetrahedronGeometry(0.5, 0);
    const pyramids = [];

    const offsets = [
      [0, 0, 0.5],
      [0, 0, -0.5],
      [0.5, 0, 0],
      [-0.5, 0, 0],
      [0, 0.5, 0],
      [0, -0.5, 0]
    ];

    offsets.forEach((offset) => {
      const pyramid = new THREE.Mesh(pyramidGeometry, material);
      pyramid.position.set(...offset);
      scene.add(pyramid);
      pyramids.push(pyramid);
    });

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      pyramids.forEach((pyramid) => {
        pyramid.rotation.x += 0.01;
        pyramid.rotation.y += 0.01;
      });
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

export default TetrakisHexahedron;
