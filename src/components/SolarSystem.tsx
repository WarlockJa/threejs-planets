"use client";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Earth from "./Earth";
import Sun from "./Sun";
import { useRef } from "react";
import { useAtom } from "jotai";
import { hoverAtom, scenePositionAtom } from "@/store/jotai";
import Mercury from "./Mercury";
import Venus from "./Venus";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Pluto from "./Pluto";
import Neptune from "./Neptune";
import { useCursor } from "@react-three/drei";

export default function SolarSystem() {
  const solarRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const [scenePosition] = useAtom(scenePositionAtom);

  const groupPosVector = useRef(new THREE.Vector3(0, 0, 0));
  useFrame(({ camera }) => {
    if (!solarRef.current) return;

    if (groupPosVector.current.distanceTo(scenePosition.position) > 0.02) {
      groupPosVector.current.lerp(scenePosition.position, 0.02);
      solarRef.current?.position.set(
        groupPosVector.current.x,
        groupPosVector.current.y,
        groupPosVector.current.z
      );

      camera.position.lerp(scenePosition.cameraPosition, 0.02);
    }
  });

  // hovered state
  const [hover, setHover] = useAtom(hoverAtom);
  useCursor(hover.isHover);

  return (
    <>
      <group
        ref={solarRef}
        onClick={(e) => {
          e.stopPropagation();
          setHover({ ...hover, isClicked: true });
        }}
      >
        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
        <Pluto />
      </group>
    </>
  );
}
