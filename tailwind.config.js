/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
 
  theme: {
    extend: {
      
      circle1: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '80px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        animation: 'animate 25s linear infinite',
        bottom: '-150px',
      },
    },
  },
  plugins: [],
  // safelist: [
  //   {
  //     pattern: /w-(1/2|2/2|1/6|2/6)/ ,
      

  //   },
  // ],
}
