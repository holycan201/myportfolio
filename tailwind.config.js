/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      fontFamily: {
        cascadia: ["Cascadia Code", "monospace"]
      },
      colors: {
        primary: "#394659",
        secondary: {
          DEFAULT: '#FFFFFF',
          '30': 'rgba(255, 255, 255, 0.3)',
        },
      }
    },
  },
  plugins: [],
};
