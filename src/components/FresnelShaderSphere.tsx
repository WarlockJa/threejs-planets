import { Icosahedron, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function FresnelShader({
  color1 = new THREE.Color(0xffffff),
  color2 = new THREE.Color(0x000000),
  scale = 1,
  args = [1, 32, 32],
}: {
  color1?: THREE.Color;
  color2?: THREE.Color;
  scale?: number | [number, number, number];
  args?: [number, number, number];
}) {
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
    color1: { value: new THREE.Color(color1) },
    color2: { value: new THREE.Color(color2) },
    fresnelBias: { value: 0.1 },
    fresnelScale: { value: 1.0 },
    fresnelPower: { value: 4.0 },
  };
  return (
    <Sphere scale={scale} args={args}>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        blending={2}
      />
    </Sphere>
  );
}
