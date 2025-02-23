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
        base: {
          50: '#F9F9F9',    // Lightest - Nearly white
          100: '#F2F2F2',   // Very light
          200: '#EEEEEE',   // Hero section background
          300: '#E5E5E5',   // Projects section
          400: '#DCDCDC',   // Additional sections
          500: '#D3D3D3',   // Contact section
          600: '#C0C0C0',   // Darker accent
          700: '#A9A9A9',   // Even darker
          800: '#808080',   // Darkest gray
          900: '#696969',   // Deep gray
        },
        custom: {
          accent: {
            50: '#F7F2F1',   // Lightest accent
            100: '#E1D2CF',  // Current accent color
            200: '#D4C0BC',  // Slightly darker
            300: '#C7AEA9',  // Medium accent
            400: '#BA9C96',  // Darker accent
            500: '#AD8A83',  // Main accent
            600: '#A07870',  // Deep accent
            700: '#93665D',  // Darker deep accent
            800: '#86544A',  // Very dark accent
            900: '#794237',  // Darkest accent
          }
        }
      },
      backgroundImage: {
        'hero-pattern': `
          linear-gradient(0deg, rgb(242, 242, 242), rgb(242, 242, 242)),
          radial-gradient(70.02% 70.02% at 50% 87.31%, rgb(225, 210, 207) 0%, rgb(242, 242, 242) 100%)
        `,
        'section-gradient': `
          linear-gradient(to bottom, 
            rgba(249, 249, 249, 1) 0%,
            rgba(238, 238, 238, 0.95) 33%,
            rgba(229, 229, 229, 0.9) 66%,
            rgba(220, 220, 220, 0.85) 100%
          )
        `
      },
      transitionTimingFunction: {
        'custom-in': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}