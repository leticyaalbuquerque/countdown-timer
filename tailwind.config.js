/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'stars': "url('./assets/img/bg-stars.svg')",
        'pattern-hills': "url('./assets/img/pattern-hills.svg')",
      },
      colors: {
        'grayish-blue': '#8486a9',
        'soft-red': '#fb6087',
        'dark-desaturated-blue': '#343650',
        'very-dark-blue': '#1e1f29',
        'very-dark': '#191a24',
      },
      fontFamily: {
        'had-hat-text': ['Red Hat Text', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

