import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export const Scene3D = () => {
  const groupRef = useRef();

  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      className="canvas3d1"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <group ref={groupRef}>
        {[...Array(100)].map((_, i) => (
          <Sphere
            key={i}
            position={[
              Math.random() * 10 - 5,
              Math.random() * 10 - 5,
              Math.random() * 10 - 5,
            ]}
            scale={0.02}
          >
            <meshStandardMaterial
              color={new THREE.Color(0.5 + Math.random() * 0.5, 0.5 + Math.random() * 0.5, 1)}
              emissive={new THREE.Color(0.2, 0.2, 0.8)}
              emissiveIntensity={0.5}
            />
          </Sphere>
        ))}
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};