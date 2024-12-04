import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Octahedron, Dodecahedron, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const Shape = ({ Component, position, rotationSpeed, scale }) => {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * rotationSpeed) * 0.3;
      ref.current.rotation.y = clock.getElapsedTime() * rotationSpeed;
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <Component ref={ref} position={position} scale={scale}>
      <meshPhongMaterial
        color={new THREE.Color(0.5, 0.9, 1.1)}
        shininess={50}
        transparent
        opacity={1}
      />
    </Component>
  );
};

export const FloatingShapes = () => {
  return (
    <group>
      <Shape
        Component={Octahedron}
        position={[-4, 2, -2]}
        rotationSpeed={0.5}
        scale={0.4}
      />
      <Shape
        Component={Dodecahedron}
        position={[4, -1, -3]}
        rotationSpeed={0.3}
        scale={0.3}
      />
      <Shape
        Component={Icosahedron}
        position={[0, 3, -4]}
        rotationSpeed={0.4}
        scale={0.35}
      />
    </group>
  );
};