'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useInViewport } from '@/lib/useInViewport';

/**
 * A slowly morphing "core of the future" — a distorted icosahedron wrapped in
 * a faint wireframe shell, lit emerald-on-navy and floating. Abstract, premium,
 * and cheap to render (single mesh + drei's distort material).
 *
 * Performance: render loop is gated on visibility so it costs nothing until the
 * section scrolls into view, and DPR is capped.
 */
function Core() {
  const inner = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (inner.current) inner.current.rotation.y += delta * 0.12;
    if (shell.current) {
      shell.current.rotation.y -= delta * 0.08;
      shell.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
      {/* solid distorted core — navy metal with emerald sheen reads rich on white */}
      <Icosahedron ref={inner} args={[1.35, 10]}>
        <MeshDistortMaterial
          color="#0A2342"
          emissive="#0b3a2c"
          emissiveIntensity={0.35}
          roughness={0.22}
          metalness={0.7}
          distort={0.38}
          speed={1.6}
        />
      </Icosahedron>

      {/* wireframe shell */}
      <Icosahedron ref={shell} args={[1.7, 2]}>
        <meshBasicMaterial color="#0F7B5F" wireframe transparent opacity={0.18} />
      </Icosahedron>
    </Float>
  );
}

export default function VisionObject() {
  const { ref, inView } = useInViewport<HTMLDivElement>('100px');

  return (
    <div ref={ref} className="h-full w-full">
      <Canvas
        frameloop={inView ? 'always' : 'never'}
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 5]} intensity={2.4} color="#ffffff" />
        <pointLight position={[-4, -2, -3]} intensity={8} color="#0F7B5F" distance={14} />
        <pointLight position={[3, 2, 4]} intensity={5} color="#2fc79b" distance={14} />
        <Core />
      </Canvas>
    </div>
  );
}
