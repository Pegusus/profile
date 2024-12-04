import React from 'react';
import { Scene3D } from './components/Scene3D/Scene3D';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';

function App() {
  return (
    <div className="outerdiv">
      <Scene3D />
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Achievements />
      </div>
    </div>
  );
}

export default App;