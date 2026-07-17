/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
          DEFAULT: "#7C3AED"
        },
        accent: {
          DEFAULT: "#3B82F6",
          dark: "#1D4ED8",
          light: "#60A5FA"
        },
        dark: {
          bg: "#07090E",
          card: "#0F121C",
          border: "rgba(255, 255, 255, 0.06)",
          hover: "#171B27",
          text: "#94A3B8"
        },
        light: {
          bg: "#F9FAFB",
          card: "#FFFFFF",
          border: "rgba(0, 0, 0, 0.06)",
          hover: "#F1F5F9",
          text: "#4B5563"
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Inter", "sans-serif"],
        display: ["'Syne'", "'Outfit'", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      neon: {
        cyan: '#00FFFF',
        pink: '#FF00FF',
        lime: '#00FF00',
        purple: '#9D4EDD',
        orange: '#FF6B35',
        blue: '#0080FF',
        yellow: '#FFD700',
        red: '#FF073A'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(135deg, #667eea 0%, #3b82f6 100%)',
        'gradient-accent': 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)'
      },
      boxShadow: {
        'premium': '0 20px 60px -20px rgba(59, 130, 246, 0.3)',
        'premium-lg': '0 30px 80px -20px rgba(59, 130, 246, 0.4)',
        'neon-cyan': '0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF',
        'neon-pink': '0 0 20px #FF00FF, 0 0 40px #FF00FF, 0 0 60px #FF00FF',
        'neon-lime': '0 0 20px #00FF00, 0 0 40px #00FF00, 0 0 60px #00FF00',
        'neon-purple': '0 0 20px #9D4EDD, 0 0 40px #9D4EDD, 0 0 60px #9D4EDD',
        'neon-orange': '0 0 20px #FF6B35, 0 0 40px #FF6B35, 0 0 60px #FF6B35',
        'neon-blue': '0 0 20px #0080FF, 0 0 40px #0080FF, 0 0 60px #0080FF',
        'neon-yellow': '0 0 20px #FFD700, 0 0 40px #FFD700, 0 0 60px #FFD700',
        'neon-red': '0 0 20px #FF073A, 0 0 40px #FF073A, 0 0 60px #FF073A',
        'glow': '0 0 30px rgba(59, 130, 246, 0.5)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(147, 51, 234, 0.6)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
};
