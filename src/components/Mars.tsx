import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import FresnelShader from "./FresnelShader";
import { useRef } from "react";
import { useAtom } from "jotai";
import { writeOnlyHoverFalseAtom, writeOnlyHoverMarsAtom } from "@/store/jotai";

export default function Mars() {
  const marsGroup = useRef<THREE.Group>(null);

  const marsMap = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Mars/mars_1k_color.jpg"
  );
  const marsBump = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Mars/mars_1k_normal.jpg"
  );

  // rotation cycle
  useFrame(({ clock }) => {
    if (!marsGroup.current) return;
    marsGroup.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  // hover detection
  const [, setHoverMars] = useAtom(writeOnlyHoverMarsAtom);
  const [, setHoverFalse] = useAtom(writeOnlyHoverFalseAtom);

  return (
    <group
      position={[180, 0, 6]}
      ref={marsGroup}
      onPointerMove={(e) => {
        e.stopPropagation();
        setHoverMars();
      }}
      // onPointerOut={() => setHoverFalse()}
    >
      <Icosahedron args={[1, 12]} scale={0.53} castShadow receiveShadow>
        <meshPhongMaterial map={marsMap} bumpMap={marsBump} bumpScale={0.4} />
      </Icosahedron>
      <FresnelShader color1={new THREE.Color(0xb4231e)} scale={0.55} />
    </group>
  );
}
