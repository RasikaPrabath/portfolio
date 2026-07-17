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
    <section id="work" className="relative py-16 sm:py-20 lg:py-24 dark:bg-dark-bg">
      <div className="absolute inset-4 rounded-2xl border border-gray-300 dark:border-gray-600 opacity-60"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">My work</h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal">Featured projects and case studies</p>
        </motion.div>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <motion.article
              key={project.id}
              onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
              className="group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md transition-all hover:shadow-xl hover:shadow-blue-500/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex h-24 sm:h-28 items-center justify-center bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-600/20 dark:to-indigo-600/20 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 inline-block px-2 py-1 bg-blue-600 dark:bg-blue-500 text-white text-xs font-semibold rounded-full">{project.type}</span>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 line-clamp-3 font-normal leading-relaxed">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700/50 px-2 py-0.5 text-xs font-medium"
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">{tech}</span>
                    </span>
                  ))}
                </div>
                <button className="mt-4 inline-flex items-center text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-400 dark:hover:to-indigo-400 transition-all">
                  View on GitHub
                  <svg className="ml-1 h-4 w-4 text-blue-600 dark:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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
              className="rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 px-6 py-2.5 text-sm font-medium text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              Show More
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center lg:items-start justify-center pt-0 lg:pt-28 pb-4 lg:pb-0 bg-black/60 px-6 backdrop-blur-sm overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white dark:bg-dark-card p-2 lg:p-4 shadow-2xl"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute right-3 top-3 lg:right-4 lg:top-4 flex h-7 w-7 lg:h-8 lg:w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-dark-bg text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => setActiveProject(null)}
              >
                <svg className="h-4 w-4 lg:h-5 lg:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="space-y-0.5 lg:space-y-1.5">
                {/* Type Badge and Title */}
                <div>
                  <div className="flex items-center gap-1 mb-0.25 lg:gap-1.5 lg:mb-0.5">
                    <span className="inline-block px-1 py-0.125 lg:px-1.5 lg:py-0.25 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white text-xs lg:text-sm font-semibold rounded-full">
                      {activeProject.type}
                    </span>
                    <p className="text-xs lg:text-sm font-semibold text-primary">Case Study</p>
                  </div>
                  <h3 className="mt-0.25 lg:mt-0.5 text-base lg:text-2xl font-bold text-gray-900 dark:text-white">{activeProject.title}</h3>
                  <p className="mt-0.25 lg:mt-0.5 text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-tight line-clamp-2">{activeProject.description}</p>
                </div>

                {/* Project Info Grid */}
                <div className="grid grid-cols-2 gap-0.75 lg:gap-1.5 md:grid-cols-4">
                  <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-1 lg:p-1.5 border border-blue-200 dark:border-blue-700/30">
                    <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium">Client</p>
                    <p className="mt-0.125 lg:mt-0.25 text-xs lg:text-sm font-semibold text-gray-900 dark:text-white line-clamp-1">{activeProject.client}</p>
                  </div>
                  <div className="rounded-lg bg-indigo-50 dark:bg-indigo-900/20 p-1 lg:p-1.5 border border-indigo-200 dark:border-indigo-700/30">
                    <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium">Timeline</p>
                    <p className="mt-0.125 lg:mt-0.25 text-xs lg:text-sm font-semibold text-gray-900 dark:text-white line-clamp-1">{activeProject.duration}</p>
                  </div>
                  <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-1 lg:p-1.5 border border-purple-200 dark:border-purple-700/30">
                    <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium">Team</p>
                    <p className="mt-0.125 lg:mt-0.25 text-xs lg:text-sm font-semibold text-gray-900 dark:text-white line-clamp-1">{activeProject.teamSize}</p>
                  </div>
                  <div className="rounded-lg bg-pink-50 dark:bg-pink-900/20 p-1 lg:p-1.5 border border-pink-200 dark:border-pink-700/30">
                    <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium">Year</p>
                    <p className="mt-0.125 lg:mt-0.25 text-xs lg:text-sm font-semibold text-gray-900 dark:text-white line-clamp-1">{activeProject.year}</p>
                  </div>
                </div>

                {/* Demo Credentials */}
                {activeProject.demo && (
                  <div className="rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700/30 p-1 lg:p-1.5">
                    <h4 className="text-xs lg:text-sm font-semibold text-gray-900 dark:text-white mb-0.25 lg:mb-0.5">Demo Access</h4>
                    <div className="space-y-0.25 lg:space-y-0.5">
                      <div className="flex justify-between items-center gap-1 lg:gap-1.5">
                        <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium">Login:</p>
                        <p className="text-xs lg:text-sm font-mono text-gray-900 dark:text-white bg-white dark:bg-gray-800 px-0.75 lg:px-1.5 py-0.125 lg:py-0.25 rounded">{activeProject.demo.login}</p>
                      </div>
                      <div className="flex justify-between items-center gap-1 lg:gap-1.5">
                        <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium">Password:</p>
                        <p className="text-xs lg:text-sm font-mono text-gray-900 dark:text-white bg-white dark:bg-gray-800 px-0.75 lg:px-1.5 py-0.125 lg:py-0.25 rounded">{activeProject.demo.password}</p>
                      </div>
                      <div className="pt-0.25 lg:pt-0.5 border-t border-green-200 dark:border-green-700/30">
                        <p className="text-xs lg:text-sm text-green-700 dark:text-green-400 font-medium mb-0.125 lg:mb-0.25">Demo Includes:</p>
                        <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-tight line-clamp-1">{activeProject.demo.demoData}</p>
                        <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-tight line-clamp-1">{activeProject.demo.features}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Problem, Solution, Overview */}
                <div className="grid gap-0.75 lg:gap-1.5 md:grid-cols-3">
                  <div className="rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg p-1 lg:p-1.5">
                    <h4 className="text-xs lg:text-sm font-semibold text-gray-900 dark:text-white">Overview</h4>
                    <p className="mt-0.25 lg:mt-0.5 text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-tight line-clamp-3 lg:line-clamp-4">{activeProject.overview}</p>
                  </div>
                  <div className="rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg p-1 lg:p-1.5">
                    <h4 className="text-xs lg:text-sm font-semibold text-gray-900 dark:text-white">Problem</h4>
                    <p className="mt-0.25 lg:mt-0.5 text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-tight line-clamp-3 lg:line-clamp-4">{activeProject.problem}</p>
                  </div>
                  <div className="rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg p-1 lg:p-1.5">
                    <h4 className="text-xs lg:text-sm font-semibold text-gray-900 dark:text-white">Solution</h4>
                    <p className="mt-0.25 lg:mt-0.5 text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-tight line-clamp-3 lg:line-clamp-4">{activeProject.solution}</p>
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-xs lg:text-sm font-semibold text-gray-900 dark:text-white mb-0.25 lg:mb-0.5">Technologies</h4>
                  <div className="flex flex-wrap gap-0.375 lg:gap-0.75">
                    {activeProject.techStack.map(tech => (
                      <span key={tech} className="rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700/50 px-1 lg:px-1.5 py-0.125 lg:py-0.25 text-xs lg:text-sm font-medium">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Links */}
                <div className="flex gap-1.5 sm:gap-1 lg:gap-1.5 pt-2 sm:pt-3 lg:pt-4 border-t border-gray-200 dark:border-gray-700 justify-center">
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-0.25 sm:gap-0.5 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 dark:from-gray-700 dark:to-gray-600 px-1.5 sm:px-2 lg:px-2.5 py-0.5 sm:py-0.75 lg:py-1 font-medium text-xs text-white transition-all duration-300 hover:shadow-md"
                    >
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="text-xs lg:text-sm">GitHub</span>
                    </a>
                  )}
                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-0.25 sm:gap-0.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 px-1.5 sm:px-2 lg:px-2.5 py-0.5 sm:py-0.75 lg:py-1 font-medium text-xs text-white transition-all duration-300 hover:shadow-md"
                    >
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="text-xs lg:text-sm">Demo</span>
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
