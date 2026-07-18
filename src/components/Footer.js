const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative z-10 bg-transparent py-8 border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-light text-gray-500 dark:text-gray-400 text-center sm:text-left">
        <div>
          <p>© {currentYear} Rasika Prabath. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:rasikaprabath8694@gmail.com" className="hidden sm:block text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
            rasikaprabath8694@gmail.com
          </a>
          <span className="hidden sm:block text-gray-300 dark:text-gray-600">|</span>
          <a href="#contact" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
