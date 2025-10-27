import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0B0B0B',
        shadow: '#2B2B2B',
        gold: '#C97C28',
        maroon: '#4C1C32',
      },
      boxShadow: {
        glow: '0 0 12px rgba(229,185,121,0.8)'
      }
    },
  },
  plugins: [],
}
export default config