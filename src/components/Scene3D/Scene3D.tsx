import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Helix } from './Helix';
import { FloatingShapes } from './FloatingShapes';
import '../../styles/Scene3D.css';

export const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      className="canvas3d"
    >
      {/* <color attach="background" args={['#000920']} /> */}
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      <group position={[0, 0, 0]}>
        <Helix />
        <FloatingShapes />
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};