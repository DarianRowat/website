/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0C10",
        panel: "#1F2833",
        accent: "#45A29E",
        highlight: "#66FCF1",
        text: "#C5C6C7",
      },
      fontFamily: {
        hacked: ["Hacked", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
