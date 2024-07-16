import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import { useAtom } from "jotai";
import { writeOnlyHoverSunAtom } from "@/store/jotai";

export default function Sun() {
  const sunTexture = useLoader(THREE.TextureLoader, "./assets/sunmap.jpg");
  // hover detection
  const [, setHoverSun] = useAtom(writeOnlyHoverSunAtom);

  return (
    <Icosahedron
      args={[1, 12]}
      scale={50}
      onPointerMove={(e) => {
        e.stopPropagation();
        setHoverSun();
      }}
    >
      <meshBasicMaterial map={sunTexture} />
      <spotLight
        intensity={80000}
        castShadow
        penumbra={0.5}
        position={[0, 0, 0]}
      />
    </Icosahedron>
  );
}
