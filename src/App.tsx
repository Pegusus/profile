import { Scene3D } from './components/Scene3D/Scene3D';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Licenses } from './components/Licenses';
import { Works } from './components/Works';

function App() {
  return (
    <div className="outerdiv">
      <Scene3D />
      <div className="relative z-10">
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Works />
        <Achievements />
        <Licenses />
      </div>
    </div>
  );
}

export default App;