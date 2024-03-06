import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";

export default function Sun() {
  const sunTexture = useLoader(THREE.TextureLoader, "./assets/sunmap.jpg");

  return (
    <Icosahedron args={[1, 12]} scale={50}>
      <meshBasicMaterial map={sunTexture} />
      <pointLight intensity={800} castShadow />
    </Icosahedron>
  );
}
