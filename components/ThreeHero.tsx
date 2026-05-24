// @ts-nocheck
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      sphereGeometry: any;
      torusGeometry: any;
      meshPhysicalMaterial: any;
      meshStandardMaterial: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
    }
  }
}

function Globe() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ pointer, clock }) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y += 0.0025;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.y * 0.25,
      0.05
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -pointer.x * 0.2,
      0.05
    );
    group.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.08;
  });

  return (
    <group ref={group}>
      <Float speed={1} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh>
          <sphereGeometry args={[1.15, 64, 64]} />
          <meshPhysicalMaterial
            color="#e9e5de"
            metalness={0.8}
            roughness={0.22}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        <mesh rotation={[0.6, 0.2, 0]}>
          <torusGeometry args={[1.4, 0.02, 16, 100]} />
          <meshStandardMaterial color="#c9a557" metalness={0.9} />
        </mesh>
      </Float>
    </group>
  );
}

export default function ThreeHero() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 4, 4]} intensity={1} />
        <pointLight position={[-4, -2, -4]} intensity={0.6} />
        <Globe />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
