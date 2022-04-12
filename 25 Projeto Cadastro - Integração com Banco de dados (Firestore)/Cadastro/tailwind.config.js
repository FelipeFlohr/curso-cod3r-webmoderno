module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'from-green-500',
    'from-blue-500',
    'from-gray-500',
    'to-gray-700',
    'to-blue-700',
    'to-green-700'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}