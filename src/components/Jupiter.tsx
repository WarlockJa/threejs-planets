import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import FresnelShader from "./FresnelShader";
import { useRef } from "react";
import { useAtom } from "jotai";
import { writeOnlyHoverJupiterAtom } from "@/store/jotai";

export default function Jupiter() {
  const jupiterGroup = useRef<THREE.Group>(null);

  const jupiterMap = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Jupiter/jupiter2_4k.jpg"
  );

  // rotation cycle
  useFrame(({ clock }) => {
    if (!jupiterGroup.current) return;
    jupiterGroup.current.rotation.y = clock.getElapsedTime() * 0.01;
  });

  // hover detection
  const [, setHoverJupiter] = useAtom(writeOnlyHoverJupiterAtom);

  return (
    <group
      position={[230, 0, 4]}
      ref={jupiterGroup}
      onPointerMove={(e) => {
        e.stopPropagation();
        setHoverJupiter();
      }}
    >
      <Icosahedron args={[1, 12]} scale={11.21} castShadow receiveShadow>
        <meshPhongMaterial map={jupiterMap} />
      </Icosahedron>
      <FresnelShader color1={new THREE.Color(0xc09c78)} scale={11.21} />
    </group>
  );
}
