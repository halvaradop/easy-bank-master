import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      screens: {
        base: '900px'
      },
      spacing: {
        '0.2': '0.2rem',
        '0.5': '0.5rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '2.5': '2.5rem',
        '3': '3rem',
        '3.5': '3.5rem',
        '4': '4rem',
        '4.5': '4.5rem',
        '5': '5rem',
        '5.5': '5.5rem',
        '6': '6rem',
        '6.5': '6.5rem',
        '7': '7rem',
        '7.5': '7.5rem',
        '8': '8rem',
        '8.5': '8.5rem',
        '9': '9rem',
        '9.5': '9.5rem',
        '10': '10rem',
        '85': '85%',
        '90': '90%'
      },
      fontSize: {
        xs: '1.4rem',
        sm: '1.6rem',
        md: '1.8rem',
        base: '2.4rem',
        lg: '3.2rem',
        xl: '4.2rem'
      },
      borderRadius: {
        sm: '0.6rem',
        md: '0.8rem',
        lg: '1rem'
      },
      colors: {
        gray: 'hsl(0, 0%, 98%)',
        cyan: 'hsl(192, 70%, 51%)',
        green: 'hsl(136, 65%, 51%)',
        blue: {
          DEFAULT: 'hsl(233, 26%, 24%)',
          100: 'hsl(233, 8%, 62%)',
          200: 'hsl(220, 16%, 96%)'
        },
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      
    }),
  ],
}

