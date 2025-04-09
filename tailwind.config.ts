module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // tu configuración aquí
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // aquí podrías meter custom plugins
  ],
};
