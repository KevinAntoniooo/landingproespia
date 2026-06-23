/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        'radar-navy': '#080c18',
        'hero-bg': '#05070F',
        surface: '#0e182e',
        'surface-hover': '#121e36',
        'card-bg': '#0A0D1A',
        'hover-surface': '#0D1120',
        'central-bg': '#080C16',
        'marquee-bg': '#0C0F1D',
        'signal-blue': '#1e40af',
        'signal-blue-light': '#2563eb',
        'signal-blue-pale': '#93c5fd',
        'screen-text': '#f1f5f9',
        'data-text': '#a8bcd0',
        'dim-text': '#8596ab',
        'alert-red': '#ef4444',
        'terminal-green': '#22c55e',
      },
      borderRadius: {
        panel: '16px',
      },
      boxShadow: {
        panel: '0 8px 32px rgba(0,0,0,0.25)',
        modal: '0 20px 60px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}
