'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * A handful of glowing "business nodes" orbiting the globe, joined by faint
 * lines to the core — a literal hint of the connected-ecosystem story that
 * the page goes on to tell.
 */
export default function NodeField({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const N = 5;
    return new Array(N).fill(0).map((_, i) => {
      const angle = (i / N) * Math.PI * 2;
      const r = 3.1 + (i % 2) * 0.5;
      return {
        base: new THREE.Vector3(Math.cos(angle) * r, (Math.random() - 0.5) * 2.2, Math.sin(angle) * r),
        speed: 0.12 + Math.random() * 0.1,
        phase: Math.random() * Math.PI * 2,
      };
    });
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.06;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.current.y * 0.18, 3, delta);
  });

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <Node key={i} node={n} />
      ))}
    </group>
  );
}

function Node({ node }: { node: { base: THREE.Vector3; speed: number; phase: number } }) {
  const ref = useRef<THREE.Group>(null);
  const lineRef = useRef<THREE.Line>(null);

  const lineGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    return g;
  }, []);

  useFrame((state) => {
    if (!ref.current || !lineRef.current) return;
    const t = state.clock.elapsedTime;
    const float = Math.sin(t * node.speed * 4 + node.phase) * 0.3;
    ref.current.position.set(node.base.x, node.base.y + float, node.base.z);

    // line from core (0,0,0) to node
    const pos = lineRef.current.geometry.attributes.position as THREE.BufferAttribute;
    pos.setXYZ(0, 0, 0, 0);
    pos.setXYZ(1, ref.current.position.x, ref.current.position.y, ref.current.position.z);
    pos.needsUpdate = true;
  });

  return (
    <group>
      {/* connection line to core */}
      {/* @ts-expect-error drei/three line typing */}
      <line ref={lineRef} geometry={lineGeo}>
        <lineBasicMaterial color="#0F7B5F" transparent opacity={0.28} />
      </line>
      {/* node + glow halo */}
      <group ref={ref}>
        <mesh>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#0F7B5F" />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshBasicMaterial color="#0F7B5F" transparent opacity={0.16} />
        </mesh>
      </group>
    </group>
  );
}
