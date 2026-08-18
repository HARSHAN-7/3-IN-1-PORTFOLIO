/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF5C00',
          'orange-glow': '#FF6A00',
          dark: '#090A0F',
          surface: '#0D0E15',
          card: '#13141F',
          border: 'rgba(255, 255, 255, 0.08)',
          purple: '#A855F7',
          blue: '#3B82F6',
          green: '#10B981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'orange-subtle': '0 0 20px rgba(255, 92, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
