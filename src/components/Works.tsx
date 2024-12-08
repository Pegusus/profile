import { motion } from "framer-motion";
import { works } from "../data/works";
import "../styles/Works.css";
import '@mariusbongarts/previewbox/dist';

export const Works = () => {
    return (
        <section className="works">
          <div className="works__container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="works__title"
            >
              Works & Articles
            </motion.h2>
    
            <div className="works__grid">
              {works.map((work, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="works__card"
                >
                    <previewbox-link
                      url={work.link}
                      title={work.title}
                      description={work.description}
                      imageUrl={work.image}
                    ></previewbox-link>
                </motion.div>
              )})}
            </div>
          </div>
        </section>
      );
};

