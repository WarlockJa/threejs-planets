import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import FresnelShader from "./FresnelShader";
import { useRef } from "react";
import { useAtom } from "jotai";
import {
  writeOnlyHoverFalseAtom,
  writeOnlyHoverVenusAtom,
} from "@/store/jotai";

export default function Venus() {
  const venusGroup = useRef<THREE.Group>(null);

  const venusMap = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Venus/venusmap.jpg"
  );
  const venusBump = useLoader(
    THREE.TextureLoader,
    "./assets/planets/Venus/venusbump.jpg"
  );

  // rotation cycle
  useFrame(({ clock }) => {
    if (!venusGroup.current) return;
    venusGroup.current.rotation.y = -clock.getElapsedTime() * 0.1;
  });

  // hover detection
  const [, setHoverVenus] = useAtom(writeOnlyHoverVenusAtom);
  const [, setHoverFalse] = useAtom(writeOnlyHoverFalseAtom);

  return (
    <group
      position={[123, 0, 8]}
      ref={venusGroup}
      onPointerOver={() => setHoverVenus()}
      onPointerOut={() => setHoverFalse()}
    >
      <Icosahedron args={[1, 12]} scale={0.98} castShadow receiveShadow>
        <meshPhongMaterial map={venusMap} bumpMap={venusBump} bumpScale={0.4} />
      </Icosahedron>
      <FresnelShader color1={new THREE.Color(0xa57c1b)} scale={0.99} />
    </group>
  );
}
