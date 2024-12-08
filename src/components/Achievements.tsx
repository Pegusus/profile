import { motion } from 'framer-motion';
import '../styles/Achievements.css';
import { achievements } from '../data/achievements';

export const Achievements = () => {
  return (
    <section className="achievements">
      <div className="achievements__container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="achievements__title"
        >
          Achievements & Education
        </motion.h2>

        <div className="achievements__grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="achievements__card"
            >
              <div className="achievements__icon-wrapper">
                {achievement.icon}
              </div>
              <h3 className="achievements__card-title">
                {achievement.title}
              </h3>
              <p className="achievements__description">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};