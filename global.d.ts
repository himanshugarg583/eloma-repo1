// @types/react v19 moved JSX types from the global `JSX` namespace into
// `React.JSX`. React Three Fiber v8 still augments the old global `JSX`, so its
// intrinsic elements (mesh, ambientLight, shaderMaterial, …) are invisible to
// the type-checker and `next build` fails with
// "Property '<element>' does not exist on type 'JSX.IntrinsicElements'".
// Augmenting `React.JSX.IntrinsicElements` (the namespace actually used now)
// makes them known again.
import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      points: any;
      line: any;
      primitive: any;
      sphereGeometry: any;
      torusGeometry: any;
      boxGeometry: any;
      planeGeometry: any;
      bufferGeometry: any;
      bufferAttribute: any;
      meshPhysicalMaterial: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      lineBasicMaterial: any;
      pointsMaterial: any;
      shaderMaterial: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      spotLight: any;
      hemisphereLight: any;
      color: any;
      fog: any;
    }
  }
}
