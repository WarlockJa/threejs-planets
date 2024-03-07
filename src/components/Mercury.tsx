import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import { useAtom } from "jotai";
import {
  writeOnlyHoverFalseAtom,
  writeOnlyHoverMercuryAtom,
} from "@/store/jotai";

export default function Mercury() {
  const mercuryMap = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Mercury/mercurymap.jpg"
  );
  const mercuryBump = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Mercury/mercurybump.jpg"
  );
  // hover detection
  const [, setHoverMercury] = useAtom(writeOnlyHoverMercuryAtom);
  const [, setHoverFalse] = useAtom(writeOnlyHoverFalseAtom);

  return (
    <Icosahedron
      args={[1, 12]}
      scale={0.4}
      castShadow
      receiveShadow
      position={[69, 0, 10]}
      onPointerOver={() => setHoverMercury()}
      onPointerOut={() => setHoverFalse()}
    >
      <meshPhongMaterial
        map={mercuryMap}
        bumpMap={mercuryBump}
        bumpScale={0.4}
      />
    </Icosahedron>
  );
}
