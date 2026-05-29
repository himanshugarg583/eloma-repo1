// @ts-nocheck
"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const RADIUS = 1.45;

function Earth() {
  const cloudsRef = useRef(null);

  const [colorMap, cloudsMap] = useLoader(THREE.TextureLoader, [
    "/textures/earth.jpg",
    "/textures/earth-clouds.png"
  ]);
  colorMap.colorSpace = THREE.SRGBColorSpace;
  colorMap.anisotropy = 8;

  // Gentle cloud drift relative to the surface.
  useFrame((_, delta) => {
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.018;
  });

  return (
    // Axial tilt ~23.5°
    <group rotation={[0.41, 0, 0.12]}>
      {/* Solid textured Earth */}
      <mesh>
        <sphereGeometry args={[RADIUS, 96, 96]} />
        <meshStandardMaterial map={colorMap} roughness={0.92} metalness={0.04} />
      </mesh>

      {/* Lighter cloud layer */}
      <mesh ref={cloudsRef} scale={1.012}>
        <sphereGeometry args={[RADIUS, 96, 96]} />
        <meshStandardMaterial
          color="#ffffff"
          alphaMap={cloudsMap}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      {/* Soft atmosphere rim */}
      <mesh scale={1.08}>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshBasicMaterial
          color="#a9cdec"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

export default function HeroGlobe() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.7], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.0} />
      <directionalLight position={[5, 3, 5]} intensity={1.25} />
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.42}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI * 0.25}
        maxPolarAngle={Math.PI * 0.75}
        touches={{ ONE: undefined, TWO: undefined }}
      />
    </Canvas>
  );
}
