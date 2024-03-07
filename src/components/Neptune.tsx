import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import FresnelShader from "./FresnelShader";
import { useRef } from "react";
import { useAtom } from "jotai";
import {
  writeOnlyHoverFalseAtom,
  writeOnlyHoverNeptuneAtom,
} from "@/store/jotai";

export default function Neptune() {
  const neptuneGroup = useRef<THREE.Group>(null);

  const neptuneMap = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Neptune/neptunemap.jpg"
  );

  // rotation cycle
  useFrame(({ clock }) => {
    if (!neptuneGroup.current) return;
    neptuneGroup.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  // hover detection
  const [, setHoverNeptune] = useAtom(writeOnlyHoverNeptuneAtom);
  const [, setHoverFalse] = useAtom(writeOnlyHoverFalseAtom);

  return (
    <group
      position={[380, 0, -22]}
      ref={neptuneGroup}
      onPointerOver={() => setHoverNeptune()}
      onPointerOut={() => setHoverFalse()}
    >
      <Icosahedron args={[1, 12]} scale={3.89} castShadow receiveShadow>
        <meshPhongMaterial map={neptuneMap} />
      </Icosahedron>
      <FresnelShader color1={new THREE.Color(0x4c7b91)} scale={3.92} />
    </group>
  );
}
