"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import SolarSystem from "./SolarSystem";

export default function Scene() {
  // sky box
  const skyBoxFiles = [
    "./assets/skybox/skybox_left.png", // left
    "./assets/skybox/skybox_right.png", // right
    "./assets/skybox/skybox_up.png", // up
    "./assets/skybox/skybox_down.png", // down
    "./assets/skybox/skybox_front.png", // back
    "./assets/skybox/skybox_back.png", // front
  ];

  return (
    <Canvas camera={{ position: [0, 0, 100] }} shadows>
      <OrbitControls minPolarAngle={0.001} maxPolarAngle={Math.PI - 0.001} />
      <Stars count={5000} radius={50} depth={800} fade />
      <Environment background files={skyBoxFiles} />
      <SolarSystem />
    </Canvas>
  );
}
