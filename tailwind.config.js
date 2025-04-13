/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
          mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        },
        colors: {
          // Custom color palette that works well for both light and dark modes
          primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          },
          // Custom color for codeforces rating tiers
          codeforces: {
            expert: '#0000FF',
            candidate: '#AA00AA',
            master: '#FF8C00',
            grandmaster: '#FF0000',
            legendary: '#8B0000',
          },
          // Custom color for codechef rating tiers
          codechef: {
            star2: '#5E2A41',
            star3: '#684273',
            star4: '#62A7A5',
            star5: '#FFBF00',
            star6: '#FFBF00',
            star7: '#FFBF00',
          },
        },
        animation: {
          'blink': 'blink 1s step-end infinite',
          'spin-slow': 'spin 3s linear infinite',
          'bounce-slow': 'bounce 2s ease-in-out infinite',
        },
        keyframes: {
          blink: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
        },
        boxShadow: {
          'code': '0 0 0 2px rgba(59, 130, 246, 0.1)',
          'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              color: theme('colors.gray.900'),
              a: {
                color: theme('colors.blue.600'),
                '&:hover': {
                  color: theme('colors.blue.700'),
                },
              },
              'code::before': {
                content: '""',
              },
              'code::after': {
                content: '""',
              },
            },
          },
          dark: {
            css: {
              color: theme('colors.gray.100'),
              a: {
                color: theme('colors.blue.400'),
                '&:hover': {
                  color: theme('colors.blue.300'),
                },
              },
              h1: {
                color: theme('colors.gray.100'),
              },
              h2: {
                color: theme('colors.gray.100'),
              },
              h3: {
                color: theme('colors.gray.100'),
              },
              h4: {
                color: theme('colors.gray.100'),
              },
              strong: {
                color: theme('colors.gray.100'),
              },
              code: {
                color: theme('colors.gray.100'),
              },
              blockquote: {
                color: theme('colors.gray.400'),
              },
            },
          },
        }),
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
    ],
  };