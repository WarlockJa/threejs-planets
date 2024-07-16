import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import { useRef } from "react";
import { useAtom } from "jotai";
import { writeOnlyHoverPlutoAtom } from "@/store/jotai";

export default function Pluto() {
  const plutoGroup = useRef(null);

  const plutoMap = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Pluto/plutomap2k.jpg"
  );
  const plutoBump = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Pluto/plutobump2k.jpg"
  );

  // rotation cycle
  useFrame(({ clock }) => {
    if (!plutoGroup.current) return;
    // @ts-ignore
    plutoGroup.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  // hover detection
  const [, setHoverPluto] = useAtom(writeOnlyHoverPlutoAtom);

  return (
    <Icosahedron
      ref={plutoGroup}
      args={[1, 12]}
      position={[500, 0, 33]}
      scale={0.12}
      castShadow
      receiveShadow
      onPointerMove={(e) => {
        e.stopPropagation();
        setHoverPluto();
      }}
    >
      <meshPhongMaterial map={plutoMap} bumpMap={plutoBump} bumpScale={0.4} />
    </Icosahedron>
  );
}
