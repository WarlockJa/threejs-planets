import * as THREE from "three";
import { Icosahedron } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

export default function Earth() {
  const earthGroup = useRef<THREE.Group>(null);

  // earth textures
  const earthMap = useLoader(TextureLoader, "./assets/planets/earthmap1k.jpg");
  const earthSpecMap = useLoader(
    TextureLoader,
    "./assets/planets/earthspec1k.jpg"
  );
  const earthBumpMap = useLoader(
    TextureLoader,
    "./assets/planets/earthbump1k.jpg"
  );

  // city lights texture
  const earthLightsTexture = useLoader(
    TextureLoader,
    "./assets/planets/earthlights1k.jpg"
  );

  // clouds textures
  const earthCloudTexture = useLoader(
    TextureLoader,
    "./assets/planets/earthcloudmap.jpg"
  );
  const earthCloudAlphaTexture = useLoader(
    TextureLoader,
    "./assets/planets/earthcloudmaptrans.jpg"
  );

  // glow shader params
  const vertexShader = `
  uniform float fresnelBias;
  uniform float fresnelScale;
  uniform float fresnelPower;
  
  varying float vReflectionFactor;
  
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  
    vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
  
    vec3 I = worldPosition.xyz - cameraPosition;
  
    vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );
  
    gl_Position = projectionMatrix * mvPosition;
  }
  `;

  const fragmentShader = `
  uniform vec3 color1;
  uniform vec3 color2;
  
  varying float vReflectionFactor;
  
  void main() {
    float f = clamp( vReflectionFactor, 0.0, 1.0 );
    gl_FragColor = vec4(mix(color2, color1, vec3(f)), f);
  }
  `;

  const uniforms = {
    color1: { value: new THREE.Color(0x0088ff) },
    color2: { value: new THREE.Color(0x000000) },
    fresnelBias: { value: 0.1 },
    fresnelScale: { value: 1.0 },
    fresnelPower: { value: 4.0 },
  };

  // rotation cycle
  useFrame(({ clock }) => {
    if (!earthGroup.current) return;
    earthGroup.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <group rotation={[0, 0, (-23.4 * Math.PI) / 180]} ref={earthGroup}>
      <Icosahedron args={[1, 12]}>
        <meshPhongMaterial
          map={earthMap}
          specularMap={earthSpecMap}
          bumpMap={earthBumpMap}
          bumpScale={0.4}
        />
      </Icosahedron>
      <Icosahedron args={[1, 12]}>
        <meshBasicMaterial
          map={earthLightsTexture}
          blending={2}
          lightMapIntensity={10}
        />
      </Icosahedron>
      <Icosahedron args={[1, 12]} scale={1.01}>
        <meshStandardMaterial
          map={earthCloudTexture}
          blending={2}
          transparent={true}
          opacity={0.4}
          alphaMap={earthCloudAlphaTexture}
        />
      </Icosahedron>
      <Icosahedron args={[1, 12]} scale={1.02}>
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          blending={2}
        />
      </Icosahedron>
    </group>
  );
}
