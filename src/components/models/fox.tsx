import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { purple } from '@mui/material/colors';

export function FoxModel({ position = [0, 0, 0], scale = 1 }) {
  const { nodes } = useGLTF('/profile/fox.glb');
  const groupRef = useRef();

  // Optional animation logic
//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += animationSpeed; // Fox spins slowly
//     }
//   });

  return (
    <group ref={groupRef} position={position} scale={scale} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_0.geometry}
          position={[-0.367, 1.173, -0.02]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.25}
          renderOrder={1000}
        >
          <meshStandardMaterial />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('/fox.glb');
