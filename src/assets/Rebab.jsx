import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import knight from "./knight.glb";

function Rebab() {
  // const rendererRef = useRef(null);

  // useEffect(() => {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );

  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   rendererRef.current.appendChild(renderer.domElement);

  //   const geometry = new THREE.BoxGeometry(1, 1, 1);
  //   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //   const cube = new THREE.Mesh(geometry, material);
  //   scene.add(cube);

  //   const loader = new GLTFLoader().setPath("./assets/knight/");

  //   loader.load(
  //     "knight.glb",
  //     function (gltf) {
  //       scene.add(gltf.scene);
  //     },
  //     undefined,
  //     function (error) {
  //       console.error(error);
  //     }
  //   );

  //   camera.position.z = 5;

  //   function animate() {
  //     requestAnimationFrame(animate);

  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;

  //     renderer.render(scene, camera);
  //   }

  //   animate();

  //   return () => {};
  // }, []);

  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Gamelan Madura"
        frameBorder="0"
        allowFullScreen
        mozallowFullScreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking=""
        execution-while-out-of-viewport=""
        execution-while-not-rendered=""
        web-share=""
        width="100%"
        height="520px"
        allowTransparency="true"
        style={{ backgroundColor: "transparent" }}
        src="https://sketchfab.com/models/3c584ee08f5f4cd4a9c836363c98f30f/embed?autospin=1&autostart=1&ui_theme=dark"
      ></iframe>
    </div>
  );
}

export default Rebab;
