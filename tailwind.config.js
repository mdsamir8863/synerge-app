/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        'dash': '#1488cc'
      },
      height: {
        '128': '32rem',
        '135':'40.5rem',
        '67':'22rem',
        '150': '72rem',
        '140':'50rem',
        '9090':"90%"
      },
      width: {
        '150': '72rem',
        '67':'22rem',
        '2020':"20%",
        '1212':'12.5%'
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      screens: {
        '2xl': {'max': '3095px'},
        // => @media (max-width: 1535px) { ... }
  
        'desk': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lappy': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'tab': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'phone': {'max': '699px'},
        // => @media (max-width: 639px) { ... }

        'iphone': {'max': '400px'},
        // => @media (max-width: 639px) { ... }
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', 'sans-serif'],
      'body': ['"Open Sans"',],
      'mont':['Montserrat']
    }
  },
  plugins: [],
}