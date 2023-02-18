/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // ## Screen sizes
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440x",
      },
      // ## Colors
      colors: {
        // ### Primary
        cl_Moderatecyan: "hsl(176, 50%, 47%)",
        cl_Darkcyan: "hsl(176, 72%, 28%)",
        // ### Neutral
        cl_Black: "hsl(0, 0%, 0%)",
        cl_Darkgray: "hsl(0, 0%, 48%)",
      },
    },
  },
  plugins: [],
}
