import { motion } from "framer-motion";
import { licenses } from "../data/licenses";
import "../styles/Licenses.css";

export const Licenses = () => {
  return (
    <section className="licenses">
      <div className="licenses__container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="licenses__title"
        >
          Licenses and Certifications
        </motion.h2>

        <div className="licenses__grid">
          {licenses.map((license, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="licenses__card"
            >
              <div className="licenses__card-header">
                {license.logo ? (
                  <img
                    src={license.logo}
                    alt={`${license.organization} logo`}
                    className="licenses__logo"
                  />
                ) : (
                  <div className="licenses__logo-placeholder">No Logo</div>
                )}
                <h3 className="licenses__card-title">{license.title}</h3>
              </div>

              <div className="licenses__organization_details">
               <p className="licenses__organization">{license.organization}</p>
                    <p className="licenses__date">
                        <strong>Issued:</strong> {license.issueDate}
                        {license.expiryDate && (
                        <span> · Expired: {license.expiryDate}</span>
                        )}
                    </p>
                    {license.credentialId && (
                <p className="licenses__credential-id">
                  <strong>Credential ID:</strong> {license.credentialId}
                </p>
              )}

              {license.credentialUrl && (
                <a
                  href={license.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="licenses__credential-link"
                >
                  Show Credential
                </a>
              )}
               </div>

              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};