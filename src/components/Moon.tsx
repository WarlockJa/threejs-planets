import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";

export default function Moon() {
  const moonMap = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Earth/moonmap1k.jpg"
  );
  const moonBump = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Earth/moonbump1k.jpg"
  );

  return (
    <Icosahedron
      args={[1, 12]}
      position={[0, 0, 5]}
      scale={0.3}
      castShadow
      receiveShadow
    >
      <meshPhongMaterial map={moonMap} bumpMap={moonBump} bumpScale={0.4} />
    </Icosahedron>
  );
}
