import type { Config } from 'tailwindcss'
import { defaultColors } from './src/config/defaultColors'

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,ts,tsx,js,jsx}'],
  theme: { 
    extend: {
      colors: defaultColors
    } 
  },
  plugins: [],
}

export default config