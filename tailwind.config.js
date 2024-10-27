/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paleBlue: 'hsl(225, 100%, 94%)',
        brightBlue: 'hsl(245, 75%, 52%)',
        veryPaleBlue: 'hsl(225, 100%, 98%)',
        desaturatedBlue: 'hsl(224, 23%, 55%)',
        darkBlue: 'hsl(223, 47%, 23%)'
      },
      fontFamily: {
        'RedHatDisplay': ["Red Hat Display", 'sans-serif']
      },
      backgroundImage: {
        'desktopBg': "url('./pattern-background-desktop.svg')",
        'mobileBg': "url('./pattern-background-mobile.svg')"
      }
    },
  },
  plugins: [],
}

