import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Manuscript palette
        paper: {
          50: '#FAF8F3',
          100: '#F5F1E8',
          200: '#EDE8DC',
          300: '#E5DECC',
        },
        ink: {
          light: '#6B5344',
          DEFAULT: '#4A372E',
          dark: '#2C211C',
        },
        accent: {
          light: '#E5DECC',
          DEFAULT: '#D4C4B0',
          dark: '#A89B8C',
        }
      },
      fontFamily: {
        serif: ['EB Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config