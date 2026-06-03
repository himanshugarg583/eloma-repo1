import type { ThreeElements } from "@react-three/fiber";

// Make all React Three Fiber intrinsic elements (mesh, points, ambientLight,
// shaderMaterial, lineBasicMaterial, etc.) known to TSX globally. Without this,
// `next build` type-checking fails with "Property 'ambientLight' does not exist
// on type 'JSX.IntrinsicElements'". Using R3F's own ThreeElements keeps the full
// set in sync instead of hand-listing each tag.
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

export {};
