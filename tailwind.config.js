/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vice: {
          night: '#0d0217',
          deep: '#1b0533',
          purple: '#7b2ff7',
          pink: '#ff2e88',
          hot: '#ff5e3a',
          sun: '#ffb347',
          gold: '#ffd23f',
          teal: '#21d4fd',
          sand: '#fff3e2',
        },
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
