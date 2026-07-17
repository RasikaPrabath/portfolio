import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import projectsData from "../data/projectsData";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Disable scroll when project preview is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="work" className="relative py-16 bg-transparent">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight font-display">My work</h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light">Featured projects and case studies</p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <motion.article
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-black/5 dark:border-white/5 bg-white dark:bg-dark-card p-4 shadow-sm hover:border-black/10 dark:hover:border-white/10 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="h-44 sm:h-48 w-full overflow-hidden rounded-2xl bg-gray-50 dark:bg-dark-hover relative border border-black/5 dark:border-white/5 flex items-center justify-center">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <span className="absolute top-3 left-3 inline-block px-2.5 py-0.5 bg-gray-900/90 dark:bg-white/90 text-white dark:text-gray-900 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">{project.type}</span>
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mt-3 mb-1.5 tracking-tight group-hover:text-gray-750 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 font-light leading-relaxed">{project.description}</p>
                </div>
                <div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="rounded-full bg-gray-100 dark:bg-dark-hover border border-black/5 dark:border-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 inline-flex items-center text-xs font-semibold text-gray-900 dark:text-white hover:opacity-85 transition-opacity">
                    View details
                    <svg className="ml-1 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {!showAll && projectsData.length > 3 && (
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

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60 px-6 backdrop-blur-md py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white dark:bg-dark-card border border-black/5 dark:border-white/5 p-6 sm:p-8 shadow-xl space-y-6 scrollbar-thin"
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-dark-hover text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
                onClick={() => setActiveProject(null)}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-5">
                {/* Header Information */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-2.5 py-0.5 bg-gray-100 dark:bg-dark-hover text-gray-800 dark:text-white text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-sm">
                      {activeProject.type}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Case Study</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{activeProject.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-650 dark:text-gray-400 leading-relaxed font-light">{activeProject.description}</p>
                </div>

                {/* Info Credentials / Client / Timeline details */}
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {[
                    { label: "Client", value: activeProject.client || "Freelance" },
                    { label: "Timeline", value: activeProject.duration || "N/A" },
                    { label: "Team", value: activeProject.teamSize || "Individual" },
                    { label: "Year", value: activeProject.year || "2026" }
                  ].map((info, idx) => (
                    <div key={idx} className="rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-dark-hover/50 p-3">
                      <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-wider">{info.label}</p>
                      <p className="mt-1 text-xs font-bold text-gray-900 dark:text-white line-clamp-1">{info.value}</p>
                    </div>
                  ))}
                </div>

                {/* Problem, Solution, Overview bento structure */}
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    { title: "Overview", text: activeProject.overview || activeProject.description },
                    { title: "Problem", text: activeProject.problem || "Streamlining complex workflows and improving system reliability." },
                    { title: "Solution", text: activeProject.solution || "Implementing responsive full-stack modules and automation suites." }
                  ].map((part, idx) => (
                    <div key={idx} className="rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-dark-hover/50 p-4 space-y-1.5">
                      <h4 className="text-xs font-bold text-gray-900 dark:text-white tracking-tight">{part.title}</h4>
                      <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400 font-light line-clamp-5">{part.text}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies List */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white tracking-tight">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map(tech => (
                      <span key={tech} className="rounded-full bg-gray-100 dark:bg-dark-hover border border-black/5 dark:border-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-gray-600 dark:text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions row links */}
                <div className="flex gap-3 pt-4 border-t border-black/5 dark:border-white/5 justify-end">
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center justify-center gap-2 text-xs py-2 px-4 shadow-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Repository</span>
                    </a>
                  )}
                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center justify-center gap-2 text-xs py-2 px-4 shadow-sm"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
