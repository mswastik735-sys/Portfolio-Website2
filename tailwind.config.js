/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Segoe UI', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#FDFBF7',
          hover: '#F5F2EA',
          dark: '#EADFC9',
          subtle: 'rgba(253, 251, 247, 0.15)',
        },
        neutral: {
          bg1: '#050505', // Deep OLED black
          bg2: '#0B0B0B',
          bg3: '#121212',
          bg4: '#1A1A1A',
          bg5: '#242424',
          bg6: '#2C2C2C',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        border: {
          subtle: 'hsla(0, 0%, 100%, 0.06)',
          DEFAULT: 'hsla(0, 0%, 100%, 0.10)',
          strong: 'hsla(0, 0%, 100%, 0.18)',
        },
        brand: {
          DEFAULT: '#FDFBF7', // Cream as brand accent
          hover: '#F5F2EA',
        }
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
      boxShadow: {
        glow: '0 0 20px rgba(253, 251, 247, 0.15)',
        'glow-lg': '0 0 40px rgba(253, 251, 247, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      minHeight: {
        touch: '44px',
      },
      minWidth: {
        touch: '44px',
      },
    },
  },
  plugins: [],
}
