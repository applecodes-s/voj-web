module.exports = {
  prefix: 'tw-',
  corePlugins: {
    preflight: false,   // 👈 disable Tailwind’s reset
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
