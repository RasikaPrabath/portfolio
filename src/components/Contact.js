import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "✉️",
      label: "Email",
      value: "rasikaprabath8694@gmail.com",
      href: "mailto:rasikaprabath8694@gmail.com"
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+94 0703348191",
      href: "tel:+940703348191"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Malabe, Sri Lanka",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 bg-transparent z-0">
      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight font-display">Contact me</h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light">Let's work together on your next project</p>
        </motion.div>

        <motion.div
          className="mb-10 grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              className="flex flex-col items-center p-5 rounded-3xl border border-black/5 dark:border-white/5 bg-white dark:bg-dark-card shadow-sm hover:border-black/10 dark:hover:border-white/10 transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <span className="text-2xl mb-2">{info.icon}</span>
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{info.label}</h3>
              <p className="text-xs text-gray-900 dark:text-white text-center font-medium break-all hidden sm:block">
                {info.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-dark-hover/50 px-4 py-3 text-sm text-gray-900 dark:text-white focus:bg-white dark:focus:bg-dark-card focus:border-black dark:focus:border-white focus:outline-none transition-all duration-200"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-dark-hover/50 px-4 py-3 text-sm text-gray-900 dark:text-white focus:bg-white dark:focus:bg-dark-card focus:border-black dark:focus:border-white focus:outline-none transition-all duration-200"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-dark-hover/50 px-4 py-3 text-sm text-gray-900 dark:text-white focus:bg-white dark:focus:bg-dark-card focus:border-black dark:focus:border-white focus:outline-none transition-all duration-200"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-dark-hover/50 px-4 py-3 text-sm text-gray-900 dark:text-white focus:bg-white dark:focus:bg-dark-card focus:border-black dark:focus:border-white focus:outline-none transition-all duration-200"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-dark-hover/50 px-4 py-3 text-sm text-gray-900 dark:text-white focus:bg-white dark:focus:bg-dark-card focus:border-black dark:focus:border-white focus:outline-none transition-all duration-200 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="text-center pt-2">
            <motion.button
              type="submit"
              className="btn-primary inline-flex items-center gap-2 shadow-sm"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Submit Message</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;