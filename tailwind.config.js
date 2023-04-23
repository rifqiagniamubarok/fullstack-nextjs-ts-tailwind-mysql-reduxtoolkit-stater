/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2193B0',
        primarysoft: '#2193B0',
        primaryhard: '#2193B0',
        primarydark: '#2193B0',
        primarydarksoft: '#2193B0',
        primarydarkhard: '#2193B0',
        secondary: '#2193B0',
        secondarysoft: '#2193B0',
        secondaryhard: '#2193B0',
        secondarydark: '#2193B0',
        secondarydarksoft: '#2193B0',
        secondarydarkhard: '#2193B0',
      },
    },
  },
  plugins: [],
};
