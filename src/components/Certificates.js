import { useState } from "react";
import { motion } from "framer-motion";
import { certificatesData } from "../data/resumeData";

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCertificates = showAll ? certificatesData : certificatesData.slice(0, 3);

  return (
    <section id="certificates" className="relative py-16 bg-transparent">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight font-display">Certificates</h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light">Professional certifications and achievements</p>
        </motion.div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group rounded-3xl border border-black/5 dark:border-white/5 bg-white dark:bg-dark-card p-5 shadow-sm hover:border-black/10 dark:hover:border-white/10 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => window.open(cert.pdf, '_blank', 'noopener,noreferrer')}
            >
              <div>
                {cert.image && (
                  <div className="mb-4 h-44 w-full overflow-hidden rounded-2xl bg-gray-50 dark:bg-dark-hover p-2 border border-black/5 dark:border-white/5 flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white tracking-tight mt-2">{cert.title}</h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 font-light">{cert.organization}</p>
                <p className="mt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">{cert.year}</p>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-4 inline-flex items-center text-xs font-semibold text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
              >
                Verify Online
                <svg className="ml-1 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {!showAll && certificatesData.length > 3 && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="btn-outline"
            >
              Show More
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
