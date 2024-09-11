/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
 
  theme: {
    extend: {

     

      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        float: 'float 4s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',

      },
      

      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' }, // Stronger glow when ball is near the ground
          '50%': { opacity: '0.1' }, // Weaker glow when ball is higher
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },   
      
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

      aspectRatio: {
        '4/3': '4 / 3',
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
