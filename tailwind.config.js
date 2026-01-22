/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EBF7FF',
          100: '#D6EFFF',
          200: '#ADD6FF',
          300: '#85C2FF',
          400: '#5CADFF',
          500: '#3399FF',  // New lighter blue
          600: '#1A8CFF',
          700: '#0066CC',
          800: '#004C99',
          900: '#003366',
        },
        cyan: '#3399FF',  // Updated to match primary blue
        black: '#000000',
        white: '#FFFFFF',
        blue: {
          50: '#EBF7FF',
          100: '#D6EFFF',
          200: '#ADD6FF',
          300: '#85C2FF',
          400: '#5CADFF',
          500: '#3399FF',  // New lighter blue
          600: '#1A8CFF',
          700: '#0066CC',
          800: '#004C99',
          900: '#003366',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-slow': 'fadeInSlow 0.8s ease-out forwards',
        'fade-in-slower': 'fadeIn 1.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInSlow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      boxShadow: {
        'boost-productivity-glow': '0 0 20px rgba(51, 153, 255, 0.3), 0 0 40px rgba(51, 153, 255, 0.2), 0 0 60px rgba(51, 153, 255, 0.1)',
      },
    },
  },
  plugins: [],
}