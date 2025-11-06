import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,ts,tsx,js,jsx}'],
  theme: { 
    extend: {
      colors: {
        // Tu paleta personalizada
        'gunmetal': { 
          DEFAULT: '#1D2731', 
          100: '#06080a', 
          200: '#0b0f13', 
          300: '#11171d', 
          400: '#171f27', 
          500: '#1d2731', 
          600: '#3c5267', 
          700: '#5c7d9d', 
          800: '#92a8bf', 
          900: '#c8d4df' 
        }, 
        'rich_black': { 
          DEFAULT: '#121A20', 
          100: '#040507', 
          200: '#070b0d', 
          300: '#0b1014', 
          400: '#0f151a', 
          500: '#121a20', 
          600: '#334a5b', 
          700: '#547a96', 
          800: '#89a7bd', 
          900: '#c4d3de' 
        }, 
        'night': { 
          DEFAULT: '#0D0F13', 
          100: '#020304', 
          200: '#050607', 
          300: '#07090b', 
          400: '#0a0b0f', 
          500: '#0d0f13', 
          600: '#333b4b', 
          700: '#5a6884', 
          800: '#8d99b1', 
          900: '#c6ccd8' 
        }, 
        'davy_gray': { 
          DEFAULT: '#585E65', 
          100: '#121314', 
          200: '#232628', 
          300: '#35383d', 
          400: '#464b51', 
          500: '#585e65', 
          600: '#767e87', 
          700: '#989ea5', 
          800: '#babec3', 
          900: '#dddfe1' 
        }, 
        'lapis_lazuli': { 
          DEFAULT: '#296587', 
          100: '#08141b', 
          200: '#112937', 
          300: '#193d52', 
          400: '#22516d', 
          500: '#296587', 
          600: '#3a8cbb', 
          700: '#67aad0', 
          800: '#9ac6e0', 
          900: '#cce3ef' 
        }
      }
    } 
  },
  plugins: [],
}

export default config