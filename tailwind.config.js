/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#111111',
        paper: '#f6f3ed',
        line: '#ded8cd',
        muted: '#6d675f',
        gold: '#d5b100',
      },
      boxShadow: {
        soft: '0 26px 80px rgba(17, 17, 17, 0.16)',
        panel: '0 14px 36px rgba(17, 17, 17, 0.12)',
      },
    },
  },
  plugins: [],
}
