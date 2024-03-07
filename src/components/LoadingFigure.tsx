import * as three from "three";
import { Icosahedron, Torus } from "@react-three/drei";
import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";

export default function LoadingFigure() {
  return (
    <>
      <Planet position={[0, 1.5, 90]} scale={0.5} />
      <ambientLight />
    </>
  );
}

function Planet(props: any) {
  const uranusGroup = useRef<three.Group>(null);

  const uranusMap = useLoader(
    three.TextureLoader,
    "./assets/planets/Neptune/neptunemap.jpg"
  );
  const uranusRingMap = useLoader(
    three.TextureLoader,
    "./assets/planets/Uranus/uranusringcolourvert.jpg"
  );
  const uranusRingAlphaMap = useLoader(
    three.TextureLoader,
    "./assets/planets/Uranus/uranusringtransvert.jpg"
  );

  useFrame(({ clock }) => {
    if (!uranusGroup.current) return;
    uranusGroup.current.rotation.y = clock.getElapsedTime() * 1;
  });

  return (
    <group ref={uranusGroup} {...props}>
      <Icosahedron args={[1, 12]} scale={4} castShadow receiveShadow>
        <meshPhongMaterial map={uranusMap} />
      </Icosahedron>
      <Torus
        args={[6, 2, 64, 64]}
        scale={[1, 1, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          map={uranusRingMap}
          blending={2}
          alphaMap={uranusRingAlphaMap}
        />
      </Torus>
      <Electron position={[0, 0, 5.5]} speed={6} />
      <Electron position={[0, 0, -5.5]} speed={6} />
    </group>
  );
}

// Electron like elements
function Electron({ radius = 2.75, speed = 6, ...props }) {
  const loadingRef = useRef<three.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    loadingRef.current &&
      loadingRef.current.position.set(
        Math.sin(t) * radius,
        (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
        0
      );
  });

  return (
    <group {...props}>
      <mesh ref={loadingRef}>
        <dodecahedronGeometry args={[0.25]} />
        <meshBasicMaterial
          color={new three.Color(0x34a1e0)}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
