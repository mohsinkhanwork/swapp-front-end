/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'dejavu-sans-mono': ['DejaVu Sans Mono', 'sans-serif'],
    },
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#B1E346',
        white: '#FFFFFF',
        black: '#18181B',
        gray: {
            DEFAULT: '#525866',
            100: "#E2E4E9",
            200: "#F6F8FA",
            300: "#A1A1AA",
            400: "#F1F5F9",
            500: "#F3F4F5"
        },
        success: '#22C55E',
        danger: '#EF4444',
        yellow: '#EAB308',
        orange: '#F97316',
        blue: '#3B82F6',
    },
    extend: {
        boxShadow: {
            '3xl': '0 1px 2px 0 rgba(113, 116, 152, 0.1)',
            '4xl':'0 0 0 1px rgba(18,43,105,0.08),0 1px 2px 0 rgba(18,43,105,0.08),0 2px 6px 0 rgba(18,43,105,0.04)',
            '5xl':'0 53px 32px 0 rgba(0,0,0,0.02),0 6px 13px 0 rgba(0,0,0,0.04),0 2.40px 0 0 rgba(61,61,61,0.04),0 1px 3px 0 rgba(143,143,143,0.2)',
        }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
        strategy: 'class',
    }),
  ]
}
