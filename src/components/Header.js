import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "My work", href: "#work" },
  { label: "Contact me", href: "#contact" },
];

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleNavClick = (item) => (event) => {
    setMobileMenuOpen(false);
    if (item.label === "Home") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className="sticky top-0 left-0 right-0 z-50 border-b border-black/5 dark:border-white/5"
        style={{ 
          backgroundColor: isDark ? 'rgba(7, 9, 14, 0.7)' : 'rgba(249, 250, 251, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          opacity: headerOpacity
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <motion.div
            className="text-lg sm:text-xl font-bold flex items-baseline text-gray-900 dark:text-white tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Rasika
            <span className="rounded-full bg-gray-900 dark:bg-white ml-1 mb-0.5" style={{ width: '4px', height: '4px' }} />
          </motion.div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              item.label === "Contact me" ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-1.5 rounded-full font-semibold text-xs lg:text-sm text-white dark:text-gray-900 bg-gray-900 dark:bg-white transition-all shadow-sm hover:shadow-md"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNavClick(item)}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </motion.a>
              ) : (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="relative text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  onClick={handleNavClick(item)}
                >
                  {item.label}
                </motion.a>
              )
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-dark-hover text-gray-800 dark:text-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-dark-hover text-gray-800 dark:text-white shadow-sm border border-black/5 dark:border-white/5 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {isDark ? (
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
              ) : (
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-black/5 dark:border-white/5 bg-white dark:bg-dark-bg"
          >
            <nav className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-4 px-6 py-6">
              {navItems.map((item) => (
                item.label === "Contact me" ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleNavClick(item)}
                    className="text-xs font-semibold text-white dark:text-gray-900 py-1.5 px-4 rounded-full bg-gray-900 dark:bg-white text-center shadow-sm inline-block"
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleNavClick(item)}
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-1 inline-block"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};

export default Header;