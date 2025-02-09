/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'magic-mint': '#C2EFC4'
      },
      fontFamily: {
        inter: 'Inter',
        sofia: 'Sofia',
        rufina: 'Rufina',
        plaster: 'Plaster',
        poppins: 'Poppins',
        gabriela: 'Gabriela',
        'open-sans': 'Open Sans',
        'oooh-baby': ' Oooh Baby'
      },
      scale: {
        '103': '1.03'
      },
    },
  },
  plugins: [],
}