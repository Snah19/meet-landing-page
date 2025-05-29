/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        redhat: ['"Red Hat Display"', 'sans-serif'],
      },
      colors: {
        cyan: {
          600: '#4D96A9',
          300: '#8FE3F9',
        },
        purple: {
          600: '#855FB1',
          300: '#D9B8FF',
        },
        slate: {
          900: '#28283D',
          600: '#87879D',
          300: '#D1D1DF',
        },
        white: '#FAFAFA',
      },
      lineHeight: {
        '110': '1.10',
        '150': '1.5'
      },
      letterSpacing: {
        '0': '0px',
      },
      backgroundImage: {
        'desktop-footer': "url(./assets/desktop/image-footer.jpg)"
      }
    },
  },
  plugins: [],
}
