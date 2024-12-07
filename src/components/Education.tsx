// import { motion } from 'framer-motion';
// import { GraduationCap, School, Calendar, Award } from 'lucide-react';
// import '../styles/Education.css';
// import { education } from '../data/education';

// export const Education = () => {
//   return (
//     <section className="education">
//       <div className="education__container">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="education__title"
//         >
//           Education
//         </motion.h2>

//         <div className="education__list">
//           {education.map((edu, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className="education__card"
//             >
//               <div className="education__icon-wrapper">
//                 {edu.type === 'university' ? (
//                   <GraduationCap className="h-6 w-6" />
//                 ) : (
//                   <School className="h-6 w-6" />
//                 )}
//               </div>
              
//               <div className="education__content">
//                 <h3 className="education__institution">{edu.institution}</h3>
//                 <div className="education__meta">
//                   <span className="education__location">
//                     <School className="h-4 w-4" />
//                     {edu.location}
//                   </span>
//                   <span className="education__period">
//                     <Calendar className="h-4 w-4" />
//                     {edu.period}
//                   </span>
//                 </div>
                
//                 <p className="education__degree">{edu.degree}</p>
                
//                 <div className="education__grades">
//                   {edu.grades.map((grade, idx) => (
//                     <div key={idx} className="education__grade">
//                       <Award className="h-4 w-4" />
//                       <span>{grade}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar, Award } from 'lucide-react';
import '../styles/Education.css';
import { education } from '../data/education';

export const Education = () => {
  return (
    <section className="education">
      <div className="education__container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="education__title"
        >
          Education
        </motion.h2>

        <div className="education__list">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="education__card"
              data-tooltip={edu.about}
            >
              <div className="education__card-content">
                <div className="education__logo">
                  <img 
                      src={edu.logo}
                      alt={edu.institution}
                      className="education__logo-img" 
                  />
                </div>
                <div className="education__details">
                  <h3 className="education__institution">{edu.institution}</h3>
                  <div className="education__meta">
                    <span className="education__location">
                      <School className="h-4 w-4" />
                      {edu.location}
                    </span>
                    <span className="education__period">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </span>
                  </div>
                  <p className="education__degree">{edu.degree}</p>
                  <div className="education__grades">
                    {edu.grades.map((grade, idx) => (
                      <div key={idx} className="education__grade">
                        <Award className="h-4 w-4" />
                        <span>{grade}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};