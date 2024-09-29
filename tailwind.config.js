import { ImTextColor } from 'react-icons/im';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-img': "url('src/photos/lake-4839058_1920.jpg')",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)', // Default shadow
        },
        '.text-shadow-cyan': {
          textShadow: '5px 5px 5px rgba(0, 255, 255, 0.5)', // Cyan shadow
        },
        '.text-shadow-neon': {
          textShadow: `
            0px 0px 15px cyan,
            0 0 25px cyan,
            0 0 50px cyan,
            0 0 100px cyan,
            0 0 200px cyan
          `,
        },
        '.text-neon':{
          color:'#0ef',
        },'.bg-neon':{
          backgroundColor:'#0ef',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}
