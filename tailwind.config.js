/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b3d91', // Deep Blue
          light: '#1a52b0',
          dark: '#062660',
        },
        secondary: '#f3f4f6', // Light gray for backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            h2: {
              color: '#0b3d91',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              color: '#1a52b0',
              marginTop: '1.5em',
            },
            'ul > li::marker': {
              color: '#0b3d91',
            },
            table: {
              width: '100%',
            },
            'thead th': {
              backgroundColor: '#f3f4f6',
              color: '#111',
              padding: '12px',
            },
            'tbody td': {
              padding: '12px',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
