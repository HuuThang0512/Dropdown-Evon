/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "grd-txt":
          "linear-gradient(87deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%)",
      },
    },
  },
  plugins: [],
};
