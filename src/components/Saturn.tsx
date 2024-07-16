import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Sphere, Torus } from "@react-three/drei";
import { useRef } from "react";
import FresnelShaderSphere from "./FresnelShaderSphere";
import { useAtom } from "jotai";
import { writeOnlyHoverSaturnAtom } from "@/store/jotai";

export default function Saturn() {
  const saturnGroup = useRef<THREE.Group>(null);

  const saturnMap = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Saturn/saturnmap.jpg"
  );
  const saturnRingMap = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Saturn/saturnringcolorvert.jpg"
  );
  const saturnRingAlphaMap = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Saturn/saturnringpatternvert.jpg"
  );

  //   rotation cycle
  useFrame(({ clock }) => {
    if (!saturnGroup.current) return;
    saturnGroup.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  // hover detection
  const [, setHoverSaturn] = useAtom(writeOnlyHoverSaturnAtom);

  return (
    <group
      position={[280, 0, 70]}
      rotation={[0, 0, (26.7 * Math.PI) / 180]}
      onPointerMove={(e) => {
        e.stopPropagation();
        setHoverSaturn();
      }}
    >
      <group ref={saturnGroup}>
        <Sphere
          args={[1, 64, 64]}
          scale={[9.15, 8.235, 9.15]}
          castShadow
          receiveShadow
        >
          <meshPhongMaterial map={saturnMap} />
        </Sphere>
        <Torus
          args={[16, 5, 64, 64]}
          scale={[1, 1, 0.01]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            map={saturnRingMap}
            blending={2}
            alphaMap={saturnRingAlphaMap}
          />
        </Torus>
        <FresnelShaderSphere
          args={[1, 64, 64]}
          color1={new THREE.Color(0xb4af7e)}
          scale={[9.15, 8.235, 9.15]}
        />
      </group>
    </group>
  );
}
