"use client";
import { Canvas } from "@react-three/fiber";
import Earth from "./Earth";
import { Environment, OrbitControls, Stars } from "@react-three/drei";

export default function SolarSystem() {
  const skyBoxFiles = [
    "./assets/skybox/skybox_left.png", // left
    "./assets/skybox/skybox_right.png", // right
    "./assets/skybox/skybox_up.png", // up
    "./assets/skybox/skybox_down.png", // down
    "./assets/skybox/skybox_front.png", // back
    "./assets/skybox/skybox_back.png", // front
  ];
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <OrbitControls minPolarAngle={0.001} maxPolarAngle={Math.PI - 0.001} />
      <Stars count={5000} radius={50} depth={500} fade />
      <pointLight position={[10, 0.5, 10]} intensity={800} />
      <Environment background files={skyBoxFiles} />
      <Earth />
    </Canvas>
  );
}
