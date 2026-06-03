'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * A field of particles that lives as a loose "constellation" and is pulled
 * onto the surface of a sphere — a globe made of light. Two position buffers
 * (scattered + sphere) are blended on the GPU by a uniform `uMorph` that eases
 * 0→1 on mount, so the cloud *resolves* into a planet.
 */
export default function ParticleGlobe({
  count = 3000,
  radius = 2.1,
  pointer,
}: {
  count?: number;
  radius?: number;
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const points = useRef<THREE.Points>(null);
  const mat = useRef<THREE.ShaderMaterial>(null);

  const { geometry } = useMemo(() => {
    const spherePos = new Float32Array(count * 3);
    const scatterPos = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const seeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Even sphere distribution (Fibonacci)
      const t = i / count;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = Math.PI * (1 + Math.sqrt(5)) * i;
      const sx = radius * Math.sin(inclination) * Math.cos(azimuth);
      const sy = radius * Math.sin(inclination) * Math.sin(azimuth);
      const sz = radius * Math.cos(inclination);
      spherePos.set([sx, sy, sz], i * 3);

      // Scattered cloud start
      const r = radius * (1.8 + Math.random() * 2.4);
      const a = Math.random() * Math.PI * 2;
      const b = Math.acos(2 * Math.random() - 1);
      scatterPos.set(
        [r * Math.sin(b) * Math.cos(a), r * Math.sin(b) * Math.sin(a), r * Math.cos(b)],
        i * 3
      );

      sizes[i] = Math.random() * 1.4 + 0.4;
      seeds[i] = Math.random();
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(spherePos, 3));
    g.setAttribute('aScatter', new THREE.BufferAttribute(scatterPos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
    return { geometry: g };
  }, [count, radius]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMorph: { value: 0 },
      // Light-theme palette: deep navy + emerald particles read crisply on white.
      uColorA: { value: new THREE.Color('#0F7B5F') },
      uColorB: { value: new THREE.Color('#0A2342') },
      uColorC: { value: new THREE.Color('#1b4374') },
    }),
    []
  );

  useFrame((state, delta) => {
    if (!mat.current || !points.current) return;
    const u = mat.current.uniforms;
    u.uTime.value += delta;
    // ease the morph in over the first ~2.4s
    u.uMorph.value = THREE.MathUtils.damp(u.uMorph.value, 1, 1.6, delta);

    // gentle auto-rotate + pointer parallax
    points.current.rotation.y += delta * 0.05;
    points.current.rotation.x = THREE.MathUtils.damp(
      points.current.rotation.x,
      pointer.current.y * 0.25,
      3,
      delta
    );
    points.current.rotation.z = THREE.MathUtils.damp(
      points.current.rotation.z,
      pointer.current.x * 0.1,
      3,
      delta
    );
  });

  return (
    <points ref={points} geometry={geometry}>
      <shaderMaterial
        ref={mat}
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
        uniforms={uniforms}
        vertexShader={VERT}
        fragmentShader={FRAG}
      />
    </points>
  );
}

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uMorph;
  attribute vec3 aScatter;
  attribute float aSize;
  attribute float aSeed;
  varying float vSeed;
  varying float vDepth;

  // smooth ease
  float ease(float x){ return 1.0 - pow(1.0 - x, 3.0); }

  void main() {
    vSeed = aSeed;
    float m = ease(clamp(uMorph - aSeed * 0.25, 0.0, 1.0));
    vec3 pos = mix(aScatter, position, m);

    // subtle breathing once formed
    float breathe = sin(uTime * 0.8 + aSeed * 6.28) * 0.04 * m;
    pos *= 1.0 + breathe;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * (300.0 / -mv.z) * (0.5 + m * 0.5);
  }
`;

const FRAG = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  varying float vSeed;
  varying float vDepth;

  void main() {
    // round, soft particle
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d);

    // color by seed → navy/emerald mix; far particles fade out for depth on white
    vec3 col = mix(uColorB, uColorA, vSeed);
    float depthFade = 1.0 - smoothstep(3.0, 8.5, vDepth) * 0.65;
    gl_FragColor = vec4(col, alpha * depthFade);
  }
`;
