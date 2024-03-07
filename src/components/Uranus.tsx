import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Icosahedron, Torus } from "@react-three/drei";
import { useRef } from "react";
import FresnelShader from "./FresnelShader";
import { useAtom } from "jotai";
import {
  writeOnlyHoverFalseAtom,
  writeOnlyHoverUranusAtom,
} from "@/store/jotai";

export default function Uranus() {
  const uranusGroup = useRef<THREE.Group>(null);

  const uranusMap = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Uranus/uranusmap.jpg"
  );
  const uranusRingMap = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Uranus/uranusringcolourvert.jpg"
  );
  const uranusRingAlphaMap = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Uranus/uranusringtransvert.jpg"
  );

  //   rotation cycle
  useFrame(({ clock }) => {
    if (!uranusGroup.current) return;
    uranusGroup.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  // hover detection
  const [, setHoverUranus] = useAtom(writeOnlyHoverUranusAtom);
  const [, setHoverFalse] = useAtom(writeOnlyHoverFalseAtom);

  return (
    <group
      position={[330, 0, 50]}
      rotation={[0, 0, (97.77 * Math.PI) / 180]}
      onPointerOver={() => setHoverUranus()}
      onPointerOut={() => setHoverFalse()}
    >
      <group ref={uranusGroup}>
        <Icosahedron args={[1, 12]} scale={4} castShadow receiveShadow>
          <meshPhongMaterial map={uranusMap} />
        </Icosahedron>
        <Torus
          args={[6, 2, 64, 64]}
          scale={[1, 1, 0.01]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            map={uranusRingMap}
            blending={2}
            alphaMap={uranusRingAlphaMap}
          />
        </Torus>
        <FresnelShader color1={new THREE.Color(0x4e7381)} scale={4} />
      </group>
    </group>
  );
}
