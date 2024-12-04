import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export const Helix = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(40)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const y = (i - 20) * 0.2;
        const radius = 2;
        
        // First strand
        const x1 = Math.cos(angle) * radius;
        const z1 = Math.sin(angle) * radius;
        
        // Second strand
        const x2 = Math.cos(angle + Math.PI) * radius;
        const z2 = Math.sin(angle + Math.PI) * radius;

        return (
          <group key={i}>
            <Sphere position={[x1, y, z1]} scale={0.05}>
              <meshStandardMaterial
                color={new THREE.Color(0.2, 0.6, 1)}
                emissive={new THREE.Color(0.2, 0.6, 1)}
                emissiveIntensity={0.5}
              />
            </Sphere>
            <Sphere position={[x2, y, z2]} scale={0.05}>
              <meshStandardMaterial
                color={new THREE.Color(0.2, 0.8, 1)}
                emissive={new THREE.Color(0.2, 0.8, 1)}
                emissiveIntensity={0.5}
              />
            </Sphere>
          </group>
        );
      })}
    </group>
  );
};