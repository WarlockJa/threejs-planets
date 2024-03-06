import { Icosahedron } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Earth() {
  // const geometry =
  const texture = useLoader(TextureLoader, "./assets/planets/earthmap1k.jpg");

  return (
    <Icosahedron args={[1, 12]}>
      <meshStandardMaterial map={texture} />
    </Icosahedron>
  );
}
