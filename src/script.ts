import * as THREE from "three";

/**
 * Initial setup of THREE.js and camera.
 */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

/**
 * Create objects
 */
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

/**
 * Animate
 */
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
};

animate();
