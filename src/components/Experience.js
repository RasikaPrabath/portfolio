import { motion } from "framer-motion";
import { experienceData } from "../data/resumeData";

const Experience = () => {
  return (
    <section id="experience" className="relative py-16 bg-transparent">
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight font-display">Experience</h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light">My professional journey</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto px-2 sm:px-4 md:px-8">
          {/* Vertical Timeline Line — RIGHT side */}
          <div className="hidden sm:block absolute right-8 top-0 bottom-0 w-[1px] bg-black/5 dark:bg-white/5" />

          <div className="space-y-6 sm:pr-16">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline Dot — clickable, RIGHT side */}
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${exp.company}`}
                  className="hidden sm:flex absolute -right-[54px] top-6 w-3 h-3 items-center justify-center rounded-full bg-white dark:bg-dark-bg border-2 border-gray-900 dark:border-white shadow-sm hover:scale-150 hover:border-primary-500 transition-transform duration-200 cursor-pointer z-10"
                />

                {/* Experience Card — clickable */}
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-dark-card border border-black/5 dark:border-white/5 rounded-3xl p-6 shadow-sm hover:border-black/10 dark:hover:border-white/10 transition-all duration-300 hover:scale-[1.01] group cursor-pointer"
                >
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2.5 py-0.5 text-xs bg-gray-100 dark:bg-dark-hover text-gray-600 dark:text-gray-400 font-semibold rounded-full mb-3">
                      {exp.period}
                    </span>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white transition-colors tracking-tight">
                          {exp.position}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium font-sans">
                          {exp.company}
                        </p>
                      </div>
                      {/* External link arrow */}
                      <svg className="w-4 h-4 mt-1 text-gray-300 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-300 flex-shrink-0 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
