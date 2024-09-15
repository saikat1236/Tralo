/* @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
 
    extend: { backgroundImage:{'my-img':"url('/src/photos/lake-4839058_1920.jpg')"
    },
    
  },
  },
  plugins: [],
}


