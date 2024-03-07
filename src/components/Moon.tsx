import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import { useAtom } from "jotai";
import { writeOnlyHoverFalseAtom, writeOnlyHoverMoonAtom } from "@/store/jotai";

export default function Moon() {
  const moonMap = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Earth/moonmap4k.jpg"
  );
  const moonBump = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Earth/moonbump4k.jpg"
  );
  // hover detection
  const [, setHoverMoon] = useAtom(writeOnlyHoverMoonAtom);
  const [, setHoverFalse] = useAtom(writeOnlyHoverFalseAtom);

  return (
    <Icosahedron
      args={[1, 12]}
      position={[0, 0, 5]}
      scale={0.3}
      castShadow
      receiveShadow
      onPointerOver={() => setHoverMoon()}
      onPointerOut={() => setHoverFalse()}
    >
      <meshPhongMaterial map={moonMap} bumpMap={moonBump} bumpScale={0.4} />
    </Icosahedron>
  );
}
