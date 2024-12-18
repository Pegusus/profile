import { motion } from "framer-motion";
import { Calendar, Building2, CheckCircle2 } from "lucide-react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from "@mui/lab";
import { Typography } from "@mui/material";
import "../styles/Experience.css";
import { experiences } from "../data/experiences";

export const Experience = () => {
  return (
    <section className="experience">
      <div className="experience__container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="experience__title"
        >
          Professional Experience
        </motion.h2>

        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <div className="experience__card">
                  <div className="experience__header">
                    <div className="experience__company-info">
                      {exp.logo && (
                          <div className="explogoimage">
                            
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="experience__company-logo"
                          />
                          </div>
                      )}
                      <div className="experience__role-info">
                        <Typography variant="h6" className="experience__role">
                          {exp.title}
                        </Typography>
                        <div className="experience__meta">
                          <div className="experience__meta-item">
                            <Building2 className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="experience__meta-item">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Typography className="experience__description">
                    {exp.description}
                  </Typography>
                  <div className="experience__achievements">
                    <Typography variant="subtitle1" className="experience__achievements-title">
                      Key Achievements
                    </Typography>
                    <ul className="experience__achievement-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="experience__achievement-item">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-400" />
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Typography variant="subtitle1" className="experience__achievements-title">
                      Technologies Used
                    </Typography>
                    <div className="experience__technologies">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="experience__tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};
