"use client";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Earth from "./Earth";
import Sun from "./Sun";
import { useRef } from "react";
import SceneControls from "./SceneControls";

export default function SolarSystem() {
  const solarRef = useRef<THREE.Group>(null);

  // rotation around the Sun
  useFrame(({ clock }) => {
    if (!solarRef.current) return;
    solarRef.current.rotation.y = clock.getElapsedTime() * 0.01;
  });

  // TEST
  const earthRef = useRef(null);

  return (
    <>
      <SceneControls earth={earthRef} />
      <group ref={solarRef}>
        <Sun />
        <Earth ref={earthRef} />
      </group>
    </>
  );
}
