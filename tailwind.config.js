/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "eerie-black": "#1c1c1cff",
        "antiflash-white": "#eef0f2ff",
        "ghost-white": "#fafaffff",
        "silver-platium": "#dc3545ff",
        "silver-platinum-grey": "#312020ff",
        "white-alablaster": "#ecebe4ff",
      },
    },
  },
  plugins: [],
};
