import { motion } from "framer-motion";

const Skills = () => {
  const codingSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 60 },
    { name: "Bootstrap", level: 60 },
    { name: "JAVA", level: 80 },
    { name: "PHP", level: 70 },
    { name: "MySQL", level: 90 }
  ];

  const professionalSkills = [
    { name: "Frontend Development", level: 90 },
    { name: "Quality Testing", level: 80 },
    { name: "Marketing", level: 80 },
    { name: "Business analysis", level: 70 },
    { name: "Project Management", level: 70 },
    { name: "Content Creation", level: 95 }
  ];

  const SkillBar = ({ skill, index }) => (
    <motion.div
      className="mb-5"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">{skill.name}</span>
        <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gray-900 dark:bg-white rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="relative py-20 bg-transparent">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-gray-500 dark:text-gray-400">My Expertise</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight font-display">
            My Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Coding Skills */}
          <motion.div
            className="bg-white dark:bg-dark-card border border-black/5 dark:border-white/5 p-8 rounded-3xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Coding Skills</h3>
            {codingSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            className="bg-white dark:bg-dark-card border border-black/5 dark:border-white/5 p-8 rounded-3xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Professional Skills</h3>
            {professionalSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
