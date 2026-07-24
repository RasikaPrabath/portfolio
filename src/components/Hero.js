import { motion } from "framer-motion";
import useTypingEffect from "../hooks/useTypingEffect";
import DefaultAvatar from "./DefaultAvatar";
import profileImg from "../images/profile.jpeg";

const Hero = () => {
  const skills = [
    "Full Stack Developer",
    "Software Engineer",
    "UI/UX Engineer",
    "QA Engineer",
    "Software Automation",
    "Web Developer"
  ];

  const typedText = useTypingEffect(skills, 100, 50, 2000);
  return (
    <section id="home" className="relative flex items-center overflow-hidden pt-8 sm:pt-12">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 md:px-12 pt-28 sm:pt-36 pb-4 sm:pb-16 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Profile Image (Right/Top on Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center w-full lg:col-span-5 lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]"
            >
              {/* Elegant Indigo & Emerald Glow */}
              <div className="absolute inset-0 -m-3 sm:-m-5 lg:-m-8">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500/15 via-transparent to-emerald-500/15 dark:from-indigo-400/20 dark:to-emerald-400/20 blur-2xl" />
              </div>

              {/* Sophisticated Spinning Dashed Ring */}
              <div className="absolute inset-0 -m-4 sm:-m-6 lg:-m-8 animate-[spin_15s_linear_infinite]">
                <div className="w-full h-full rounded-full border-2 border-dashed border-indigo-500/40 dark:border-emerald-400/40" />
              </div>

              {/* Charming Gradient Image Container */}
              <div className="relative w-full h-full rounded-full p-1 sm:p-1.5 lg:p-2 bg-gradient-to-br from-indigo-500/80 to-emerald-500/80 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden border-[3px] lg:border-4 border-white dark:border-[#121212] bg-white dark:bg-[#121212]">
                <img
                  src={profileImg}
                  alt="Rasika Prabath"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallbackDiv = e.target.nextElementSibling;
                    if (fallbackDiv) fallbackDiv.style.display = 'block';
                  }}
                />
                <div className="absolute inset-0" style={{ display: 'none' }}>
                  <DefaultAvatar name="RP" size="full" />
                </div>
              </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Left Content (Title, Typing Effect, Paragraph) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:order-1 text-center lg:text-left"
          >
            {/* Status Pulse Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/15 text-xs font-semibold uppercase tracking-wider shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white leading-[1.1] font-display"
            >
              Hi, I'm Rasika Prabath
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white mb-6 min-h-[2rem]"
            >
              I build web solutions as a{" "}
              <span className="font-bold underline decoration-indigo-500 decoration-2 underline-offset-4 bg-gradient-to-r from-gray-900 to-gray-950 dark:from-white dark:to-gray-100 bg-clip-text text-transparent">{typedText}</span>
              <span className="inline-block w-0.5 h-5 bg-gray-900 dark:bg-white ml-1 animate-pulse" />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light"
            >
              Dedicated IT undergraduate with a solid foundation in software engineering and quality assurance. Skilled in Next.js frontend and .NET backend development, with a passion for building clean, efficient, and user-centric web applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href={process.env.PUBLIC_URL + "/resume.pdf"}
                download="Rasika_Prabath_CV.pdf"
                className="btn-primary"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Download CV</span>
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                className="lets-talk-btn"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Let's Talk</span>
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Social Icons row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 justify-center lg:justify-start"
            >
              <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                {[
                  { icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', name: 'Facebook', url: 'https://facebook.com/rasikaprabath12345' },
                  { icon: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z', name: 'GitHub', url: 'https://github.com/rasikaprabath12345' },
                  { icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', name: 'LinkedIn', url: 'https://linkedin.com/in/rasika-prabath-95aa0b421' },
                  { icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z', name: 'Instagram', url: 'https://instagram.com/rasikaprabath12345' },
                  { icon: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.03-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.943.114.78.89z', name: 'Telegram', url: 'https://t.me/rasikaprabath1' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-dark-card hover:bg-gray-100 dark:hover:bg-dark-hover transition-colors duration-300"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + index * 0.05 }}
                  >
                    <svg className="w-[18px] h-[18px] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;