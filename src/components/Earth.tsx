import * as THREE from "three";
import { Icosahedron } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import Moon from "./Moon";
import FresnelShader from "./FresnelShader";
import { useAtom } from "jotai";
import { writeOnlyHoverEarthAtom } from "@/store/jotai";

export default function Earth() {
  const earthGroup = useRef<THREE.Group>(null);
  const cloudsRef = useRef(null);

  // earth textures
  const earthMap = useLoader(
    TextureLoader,
    "./assets/planets/Earth/earthmap1k.jpg"
  );
  const earthSpecMap = useLoader(
    TextureLoader,
    "./assets/planets/Earth/earthspec1k.jpg"
  );
  const earthBumpMap = useLoader(
    TextureLoader,
    "./assets/planets/Earth/earthbump1k.jpg"
  );

  // city lights texture
  const earthLightsTexture = useLoader(
    TextureLoader,
    "./assets/planets/Earth/earthlights1k.jpg"
  );

  // clouds textures
  const earthCloudTexture = useLoader(
    TextureLoader,
    "./assets/planets/Earth/earthcloudmap.jpg"
  );
  const earthCloudAlphaTexture = useLoader(
    TextureLoader,
    "./assets/planets/Earth/earthcloudmaptrans.jpg"
  );

  // rotation cycle
  useFrame(({ clock }) => {
    if (!earthGroup.current || !cloudsRef.current) return;
    earthGroup.current.rotation.y = clock.getElapsedTime() * 0.1;
    // @ts-ignore
    cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  // hover detection
  const [, setHoverEarth] = useAtom(writeOnlyHoverEarthAtom);

  return (
    <group position={[150, 0, 0]} rotation={[0, 0, (23.4 * Math.PI) / 180]}>
      <group ref={earthGroup}>
        <group
          onPointerMove={(e) => {
            e.stopPropagation();
            setHoverEarth();
          }}
        >
          <Icosahedron args={[1, 12]} castShadow receiveShadow>
            <meshPhongMaterial
              map={earthMap}
              specularMap={earthSpecMap}
              bumpMap={earthBumpMap}
              bumpScale={0.4}
            />
          </Icosahedron>
          <Icosahedron args={[1, 12]}>
            <meshBasicMaterial map={earthLightsTexture} blending={2} />
          </Icosahedron>
          <Icosahedron args={[1, 12]} scale={1.01} ref={cloudsRef}>
            <meshStandardMaterial
              map={earthCloudTexture}
              blending={2}
              transparent
              opacity={0.4}
              alphaMap={earthCloudAlphaTexture}
            />
          </Icosahedron>
          <FresnelShader
            args={[1, 12]}
            scale={1.02}
            color1={new THREE.Color(0x0088ff)}
            color2={new THREE.Color(0x000000)}
          />
        </group>
        <Moon />
      </group>
    </group>
  );
}
