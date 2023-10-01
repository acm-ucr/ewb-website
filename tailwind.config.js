/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ewb: {
          black: "#203E4E",
          "blue-100": "#E9EEFB",
          "blue-200": "#1051D3",
          green: "#80C393",
        },
      },
    },
  },
  plugins: [],
};
