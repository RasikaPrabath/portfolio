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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | 'config_error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey || accessKey === "your_web3forms_access_key_here" || accessKey === "") {
      console.error("Web3Forms Access Key is missing. Please set REACT_APP_WEB3FORMS_ACCESS_KEY in your .env file.");
      setSubmitStatus("config_error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          phone: formData.mobile,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          mobile: "",
          message: "",
        });
      } else {
        console.error("Web3Forms submission failed:", result);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
      value: "+94 70 334 8191",
      href: "tel:+94703348191"
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
          className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
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
              <p className="text-xs text-gray-900 dark:text-white text-center font-medium break-all">
                {info.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {submitStatus === "success" ? (
          <motion.div
            className="flex flex-col items-center p-8 rounded-3xl border border-emerald-500/10 bg-emerald-500/5 dark:bg-emerald-950/20 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-4xl mb-4">🎉</span>
            <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-2">Message Sent Successfully!</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-light max-w-md">
              Thank you for reaching out. I have received your message and will get back to you as soon as possible.
            </p>
            <button
              onClick={() => setSubmitStatus(null)}
              className="mt-6 btn-outline text-xs px-4 py-2"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitStatus === "config_error" && (
              <div className="p-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400 text-xs font-medium space-y-2 text-left">
                <p className="font-bold flex items-center gap-1">⚠️ Web3Forms Access Key is Missing</p>
                <p className="font-light">
                  To receive messages, please add your Web3Forms key to the <code className="bg-amber-500/10 px-1 py-0.5 rounded font-mono">.env</code> file in the portfolio root folder:
                </p>
                <pre className="bg-black/10 dark:bg-white/5 p-2 rounded font-mono text-[10px] overflow-x-auto text-gray-700 dark:text-gray-300">
                  REACT_APP_WEB3FORMS_ACCESS_KEY=your_key_here
                </pre>
                <p className="font-light">
                  Get a free key instantly at{" "}
                  <a
                    href="https://web3forms.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold hover:text-amber-700 dark:hover:text-amber-300"
                  >
                    web3forms.com
                  </a>.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 rounded-2xl border border-rose-500/20 bg-rose-500/5 text-rose-600 dark:text-rose-400 text-xs font-medium text-left">
                <p className="font-bold">❌ Failed to Send Message</p>
                <p className="font-light mt-1">
                  Something went wrong while sending your message. Please try again or email me directly at{" "}
                  <a href="mailto:rasikaprabath8694@gmail.com" className="underline font-semibold">
                    rasikaprabath8694@gmail.com
                  </a>.
                </p>
              </div>
            )}

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
                  disabled={isSubmitting}
                  className="w-full rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-dark-hover/50 px-4 py-3 text-sm text-gray-900 dark:text-white focus:bg-white dark:focus:bg-dark-card focus:border-black dark:focus:border-white focus:outline-none transition-all duration-200 disabled:opacity-60"
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
                  disabled={isSubmitting}
                  className="w-full rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-dark-hover/50 px-4 py-3 text-sm text-gray-900 dark:text-white focus:bg-white dark:focus:bg-dark-card focus:border-black dark:focus:border-white focus:outline-none transition-all duration-200 disabled:opacity-60"
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
                  disabled={isSubmitting}
                  className="w-full rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-dark-hover/50 px-4 py-3 text-sm text-gray-900 dark:text-white focus:bg-white dark:focus:bg-dark-card focus:border-black dark:focus:border-white focus:outline-none transition-all duration-200 disabled:opacity-60"
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
                  disabled={isSubmitting}
                  className="w-full rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-dark-hover/50 px-4 py-3 text-sm text-gray-900 dark:text-white focus:bg-white dark:focus:bg-dark-card focus:border-black dark:focus:border-white focus:outline-none transition-all duration-200 disabled:opacity-60"
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
                disabled={isSubmitting}
                rows={6}
                className="w-full rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-dark-hover/50 px-4 py-3 text-sm text-gray-900 dark:text-white focus:bg-white dark:focus:bg-dark-card focus:border-black dark:focus:border-white focus:outline-none transition-all duration-200 resize-none disabled:opacity-60"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="text-center pt-2">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary inline-flex items-center gap-2 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={isSubmitting ? {} : { y: -1 }}
                whileTap={isSubmitting ? {} : { scale: 0.98 }}
              >
                <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
                {isSubmitting ? (
                  <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default Contact;