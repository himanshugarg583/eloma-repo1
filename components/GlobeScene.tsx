// @ts-nocheck
"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, QuadraticBezierLine } from "@react-three/drei";
import * as THREE from "three";

const GLOBE_RADIUS = 1.6;

export type Destination = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};

const destinations: Destination[] = [
  { name: "Toronto", country: "Canada", lat: 43.65, lon: -79.38 },
  { name: "New York", country: "USA", lat: 40.71, lon: -74.01 },
  { name: "London", country: "UK", lat: 51.51, lon: -0.13 },
  { name: "Dubai", country: "UAE", lat: 25.2, lon: 55.27 },
  { name: "Mumbai", country: "India", lat: 19.08, lon: 72.88 },
  { name: "Singapore", country: "Singapore", lat: 1.35, lon: 103.82 },
  { name: "Beijing", country: "China", lat: 39.9, lon: 116.4 },
  { name: "Sydney", country: "Australia", lat: -33.87, lon: 151.21 }
];

// The hub that connection arcs radiate from.
const HUB = "Dubai";

function latLonToVec3(lat: number, lon: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

/** Glowing particle shell distributed evenly over the sphere (Fibonacci). */
function ParticleShell() {
  const positions = useMemo(() => {
    const count = 2600;
    const arr = new Float32Array(count * 3);
    const offset = 2 / count;
    const increment = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = i * offset - 1 + offset / 2;
      const radial = Math.sqrt(1 - y * y);
      const phi = i * increment;
      arr[i * 3] = Math.cos(phi) * radial * GLOBE_RADIUS;
      arr[i * 3 + 1] = y * GLOBE_RADIUS;
      arr[i * 3 + 2] = Math.sin(phi) * radial * GLOBE_RADIUS;
    }
    return arr;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#48c98a"
        sizeAttenuation
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
}

function Pin({
  dest,
  globeRef,
  active,
  onHover
}: {
  dest: Destination;
  globeRef: React.MutableRefObject<THREE.Mesh | null>;
  active: boolean;
  onHover: (name: string | null) => void;
}) {
  const pos = useMemo(
    () => latLonToVec3(dest.lat, dest.lon, GLOBE_RADIUS * 1.01),
    [dest]
  );

  return (
    <group position={pos}>
      <Html
        center
        occlude={[globeRef]}
        zIndexRange={[20, 0]}
        className="pointer-events-auto"
      >
        <div
          onMouseEnter={() => onHover(dest.name)}
          onMouseLeave={() => onHover(null)}
          className="group relative cursor-pointer select-none"
        >
          {/* Beacon dot (sits on the city's coordinate) */}
          <span
            className={`block rounded-full bg-gold transition-all duration-200 ${
              active
                ? "h-3 w-3 shadow-[0_0_14px_4px_rgba(201,165,87,0.85)]"
                : "h-2 w-2 shadow-[0_0_8px_2px_rgba(201,165,87,0.5)]"
            }`}
          />

          {/* Destination label — always visible */}
          <span
            className={`pointer-events-none absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-forest-dark/85 px-2 py-0.5 text-[10px] font-semibold backdrop-blur transition-all duration-200 ${
              active ? "scale-105 text-white" : "text-white/90"
            }`}
          >
            {dest.name}
            {active ? (
              <span className="ml-1.5 text-[9px] font-medium uppercase tracking-wider text-gold/80">
                {dest.country}
              </span>
            ) : null}
          </span>
        </div>
      </Html>
    </group>
  );
}

function GlobeGroup() {
  const globeRef = useRef<THREE.Mesh | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const hubPos = useMemo(() => {
    const hub = destinations.find((d) => d.name === HUB)!;
    return latLonToVec3(hub.lat, hub.lon, GLOBE_RADIUS * 1.01);
  }, []);

  const arcs = useMemo(() => {
    return destinations
      .filter((d) => d.name !== HUB)
      .map((d) => {
        const end = latLonToVec3(d.lat, d.lon, GLOBE_RADIUS * 1.01);
        const mid = hubPos
          .clone()
          .add(end)
          .multiplyScalar(0.5)
          .normalize()
          .multiplyScalar(GLOBE_RADIUS * 1.45);
        return { name: d.name, start: hubPos, end, mid };
      });
  }, [hubPos]);

  return (
    <group>
      {/* Solid core — occludes back-facing particles, arcs and pins */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[GLOBE_RADIUS * 0.985, 64, 64]} />
        <meshBasicMaterial color="#05231d" transparent opacity={0.95} />
      </mesh>

      {/* Graticule wireframe for a globe structure */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 0.992, 36, 24]} />
        <meshBasicMaterial color="#0d3a5e" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Glowing particle shell */}
      <ParticleShell />

      {/* Connection arcs from the hub */}
      {arcs.map((arc) => (
        <QuadraticBezierLine
          key={arc.name}
          start={arc.start}
          end={arc.end}
          mid={arc.mid}
          color="#3CB98C"
          lineWidth={1}
          transparent
          opacity={hovered === arc.name || hovered === HUB ? 0.9 : 0.35}
          dashed={false}
        />
      ))}

      {/* Destination pins */}
      {destinations.map((dest) => (
        <Pin
          key={dest.name}
          dest={dest}
          globeRef={globeRef}
          active={hovered === dest.name}
          onHover={setHovered}
        />
      ))}
    </group>
  );
}

export default function GlobeScene() {
  return (
    <Canvas
      className="touch-none"
      dpr={[1, 2]}
      camera={{ position: [0, 0.4, 5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 3, 5]} intensity={0.6} />
      <GlobeGroup />
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.55}
        rotateSpeed={0.45}
        enableDamping
        dampingFactor={0.08}
        minPolarAngle={Math.PI * 0.2}
        maxPolarAngle={Math.PI * 0.8}
      />
    </Canvas>
  );
}
