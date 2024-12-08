import { motion } from 'framer-motion';
import '../styles/Skills.css';
import { skillCategories } from '../data/skills';

const SkillCard = ({ title, icon, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="skills__card"
  >
    <div className="skills__card-header">
      <div className="skills__icon-wrapper">{icon}</div>
      <h3 className="skills__category-title">{title}</h3>
    </div>
    <div className="skills__icons-container">
      {skills.map((skill, idx) => (
        <div key={idx} className="skills__icon-item">
          {skill.icon}
          <span className="skills__icon-label">{skill.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);


export const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="skills__title"
        >
          Technical Expertise
        </motion.h2>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};