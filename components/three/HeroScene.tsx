'use client';

import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import ParticleGlobe from './ParticleGlobe';
import NodeField from './NodeField';
import { useInViewport } from '@/lib/useInViewport';

/**
 * The R3F canvas for the hero. Pointer position is tracked here and passed
 * down so the globe + nodes respond to the cursor with gentle parallax.
 *
 * Performance: the render loop only runs while the hero is on screen
 * (`frameloop` toggles to "never" once scrolled past), DPR is capped, and the
 * canvas sits behind the headline with pointer-events disabled.
 */
export default function HeroScene() {
  const pointer = useRef({ x: 0, y: 0 });
  const { ref, inView } = useInViewport<HTMLDivElement>('0px');

  const onPointerMove = (e: React.PointerEvent) => {
    pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
  };

  return (
    <div ref={ref} className="absolute inset-0" onPointerMove={onPointerMove}>
      <Canvas
        frameloop={inView ? 'always' : 'never'}
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          precision: 'highp',
          preserveDrawingBuffer: false
        }}
      >
        <ambientLight intensity={0.5} />
        <ParticleGlobe pointer={pointer} />
        <NodeField pointer={pointer} />
        {/* faint emerald rim light from behind */}
        <pointLight position={[0, 0, -4]} intensity={6} color="#0F7B5F" distance={12} />
      </Canvas>
    </div>
  );
}
