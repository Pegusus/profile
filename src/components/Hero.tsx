import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FoxModel from '../components/models/fox';
import '../styles/Hero.css';

export const Hero = () => {
  return (
    <div className="hero">
      {/* 3D Fox Model Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        className="hero__canvas"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <FoxModel />
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>

      {/* <div className="hero__overlay">
        <div className="hero__gradient" />
      </div> */}
      
      <div className="hero__content">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero__title"
        >
          Aniruddha Guin
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero__subtitle"
        >
          Senior Software Engineer at Bazaarvoice
          <br />
          Building scalable solutions and transforming ideas into elegant code.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero__social-links"
        >
          <a href="https://github.com/Pegusus" target="_blank" rel="noopener noreferrer" className="hero__social-link">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/aniruddha-guin-0b37a968" target="_blank" rel="noopener noreferrer" className="hero__social-link">
            <Linkedin size={24} />
          </a>
          <a href="mailto:aniscima@gmail.com" className="hero__social-link">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};
