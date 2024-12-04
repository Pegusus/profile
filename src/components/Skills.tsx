import { motion } from 'framer-motion';
import { Brain, Code, Database, Cloud, Terminal, Globe } from 'lucide-react';
import '../styles/Skills.css';
import { skillCategories } from '../data/skills';

const SkillBar = ({ name, level }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="skill-bar"
  >
    <div className="skill-bar__header">
      <span className="skill-bar__name">{name}</span>
      <span className="skill-bar__level">{level}%</span>
    </div>
    <div className="skill-bar__track">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        className="skill-bar__progress"
      />
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="skills__card"
            >
              <div className="skills__card-header">
                <div className="skills__icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="skills__category-title">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <SkillBar key={idx} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};