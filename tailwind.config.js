/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      fontSize: {
        '6xl': ['48px', '56px'],
        '5xl': ['36px', '44px'],
        '4xl': ['30px', '36px'],
        '3xl': ['27px', '32px'],
        '2xl': ['24px', '28px'],
        xl: ['21px', '28px'],
        lg: ['18px', '28px'],
        lg24: ['18px', '24px'],
        base20: ['15px', '20px'],
        base: ['15px', '24px'],
        sm: ['12px', '20px'],
        sm24: ['12px', '24px'],
        xs: ['9px', '16px'],
      },
      extend: {
        gap: {
          4: '4px',
          8: '8px',
          16: '16px',
          20: '20px',
          24: '24px',
          28: '28px',
          32: '32px',
          48: '48px',
          64: '64px',
          80: '80px',
          120: '120px',
          160: '160px',
          200: '200px',
        },
        boxShadow: {
          xl: [
            '0px 1px 10px 0px rgba(20, 10, 51, 0.07)',
            '0px 3px 2px 0px rgba(20, 10, 51, 0.03)',
            '0px 2px 4px 0px rgba(20, 10, 51, 0.05)',
          ],
          '2xl': [
            '0px 2px 8px 0px rgba(20, 10, 51, 0.07)',
            '0px 1px 20px 0px rgba(20, 10, 51, 0.03)',
            '0px 4px 10px 0px rgba(20, 10, 51, 0.05)',
          ],
          '3xl': [
            '0px 3px 10px 0px rgba(20, 10, 51, 0.07)',
            '0px 1px 36px 0px rgba(20, 10, 51, 0.03)',
            '0px 6px 20px 0px rgba(20, 10, 51, 0.05)',
          ],
          '4xl': [
            '0px 5px 10px 0px rgba(20, 10, 51, 0.07)',
            '0px 3px 28px 0px rgba(20, 10, 51, 0.03)',
            '0px 8px 20px 0px rgba(20, 10, 51, 0.05)',
          ],
          '5xl': [
            '0px 8px 20px 0px rgba(20, 10, 51, 0.07)',
            '0px 6px 60px 0px rgba(20, 10, 51, 0.03)',
            '0px 16px 48px 0px rgba(20, 10, 51, 0.05)',
          ],
          '6xl': [
            '0px 11px 30px 0px rgba(20, 10, 51, 0.07)',
            '0px 9px 92px 0px rgba(20, 10, 51, 0.03)',
            '0px 24px 76px 0px rgba(20, 10, 51, 0.05)',
          ],
        },
        colors: {
          light: {
            textaccent: 'rgba(75, 23, 229, 0.99)',
          },
          primary: {
            100: '#000B80',
            200: '#080A26',
          },
          gray: {
            100: '#f7fafc',
            200: '#edf2f7',
            300: '#e2e8f0',
            400: '#cbd5e0',
            500: '#a0aec0',
            600: '#718096',
            700: '#4a5568',
            800: '#2d3748',
            900: '#1a202c',
            1000: '#fcfcfc',
          },
          blue: {
            100: '#ebf8ff',
            200: '#bee3f8',
            300: '#90cdf4',
            400: '#63b3ed',
            500: '#4299e1',
            600: '#3182ce',
            700: '#2b6cb0',
            800: '#2c5282',
            900: '#2a4365',
          },
          white: {
            100: '#ffffff',
          },
        },
        fontFamily: {
          noto: ['Noto Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  
  