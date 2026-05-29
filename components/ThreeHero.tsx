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
  const isDragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });

  const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value));

  useFrame(({ pointer, clock }) => {
    if (!group.current) {
      return;
    }

    const spinSpeed = isDragging.current ? 0 : 0.0025;
    group.current.rotation.y += spinSpeed;

    if (!isDragging.current) {
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
    }
    const floatY = Math.sin(clock.elapsedTime * 0.6) * 0.08;
    const idleOffsetX = isDragging.current ? 0 : pointer.x * 0.35;
    const idleOffsetY = isDragging.current ? 0 : pointer.y * 0.22;
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      dragOffset.current.x + idleOffsetX,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      dragOffset.current.y + idleOffsetY + floatY,
      0.1
    );
  });

  return (
    <group
      ref={group}
      onPointerDown={(event) => {
        event.stopPropagation();
        isDragging.current = true;
        lastPointer.current = { x: event.clientX, y: event.clientY };
        const target = event.target as HTMLElement | null;
        if (target?.setPointerCapture) {
          target.setPointerCapture(event.pointerId);
        }
      }}
      onPointerUp={(event) => {
        event.stopPropagation();
        isDragging.current = false;
        const target = event.target as HTMLElement | null;
        if (target?.releasePointerCapture) {
          target.releasePointerCapture(event.pointerId);
        }
      }}
      onPointerLeave={() => {
        isDragging.current = false;
      }}
      onPointerMove={(event) => {
        if (!isDragging.current || !group.current) {
          return;
        }

        event.stopPropagation();
        const deltaX = event.clientX - lastPointer.current.x;
        const deltaY = event.clientY - lastPointer.current.y;

        dragOffset.current = {
          x: clamp(dragOffset.current.x + deltaX * 0.005, -0.6, 0.6),
          y: clamp(dragOffset.current.y - deltaY * 0.005, -0.4, 0.4)
        };

        lastPointer.current = { x: event.clientX, y: event.clientY };
      }}
    >
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
          <meshStandardMaterial color="#3CB98C" metalness={0.9} />
        </mesh>
      </Float>
    </group>
  );
}

export default function ThreeHero() {
  return (
    <div className="h-full w-full">
      <Canvas className="touch-none" camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 4, 4]} intensity={1} />
        <pointLight position={[-4, -2, -4]} intensity={0.6} />
        <Globe />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
