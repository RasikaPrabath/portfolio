import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  {
    label: "Home",
    href: "#home",
    id: "home",
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    label: "About me",
    href: "#about",
    id: "about",
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    label: "Education",
    href: "#education",
    id: "education",
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    )
  },
  {
    label: "Experience",
    href: "#experience",
    id: "experience",
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    label: "Skills",
    href: "#skills",
    id: "skills",
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    label: "Certificates",
    href: "#certificates",
    id: "certificates",
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    label: "My work",
    href: "#work",
    id: "work",
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    label: "Contact me",
    href: "#contact",
    id: "contact",
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", tab: "home" },
        { id: "about", tab: "about" },
        { id: "education", tab: "education" },
        { id: "experience", tab: "experience" },
        { id: "work", tab: "work" },
        { id: "skills", tab: "skills" },
        { id: "certificates", tab: "certificates" },
        { id: "contact", tab: "contact" }
      ];
      const scrollPosition = window.scrollY + 200; // offset

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.tab);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => (event) => {
    event.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = targetElement.offsetTop - 100;
      window.scrollTo({
        top: href === "#home" ? 0 : topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white/70 dark:bg-dark-card/70 border-b border-black/5 dark:border-white/5 py-3 px-4 sm:px-6 md:px-8 backdrop-blur-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo/Name */}
        <div
          className="text-lg sm:text-xl font-bold flex items-baseline text-gray-900 dark:text-white tracking-tight flex-shrink-0"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Rasika
          <span className="rounded-full bg-gray-900 dark:bg-white ml-1 mb-0.5" style={{ width: '4px', height: '4px' }} />
        </div>

        {/* Navigation tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar whitespace-nowrap max-w-full px-2 mx-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick(item.href)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-300 flex-shrink-0 ${
                  isActive
                    ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "border border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {item.icon}
                <span className="hidden md:inline-block">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Theme Toggle Button */}
        <motion.button
          onClick={() => setIsDark(!isDark)}
          className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <svg className="h-[15px] w-[15px] sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
            </svg>
          ) : (
            <svg className="h-[15px] w-[15px] sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </motion.button>
      </motion.header>
    </>
  );
};

export default Header;