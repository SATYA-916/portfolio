/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        retroDark: '#080c14',
        retroSurface: '#0f1523',
        retroCard: '#131b2e',
        retroBorder: '#2a3652',
        retroCyan: '#00f0ff',
        retroPink: '#ff007f',
        retroPurple: '#a855f7',
        retroYellow: '#ffe600',
        retroGreen: '#39ff14',
        retroOrange: '#ff6600',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Chakra Petch', 'Space Grotesk', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
        retro: ['Silkscreen', 'monospace'],
        terminal: ['VT323', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'retro-cyan': '4px 4px 0px #00f0ff',
        'retro-pink': '4px 4px 0px #ff007f',
        'retro-yellow': '4px 4px 0px #ffe600',
        'retro-green': '4px 4px 0px #39ff14',
        'retro-purple': '4px 4px 0px #a855f7',
        'retro-black': '4px 4px 0px #000000',
        'retro-card': '6px 6px 0px rgba(0, 240, 255, 0.25)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
