/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Archivo', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
          'brand-solid': 'var(--bg-brand-solid)',
          'brand-primary': 'var(--bg-brand-primary)',
          'error-solid': 'var(--bg-error-solid)',
          'error-primary': 'var(--bg-error-primary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          quaternary: 'var(--text-quaternary)',
          white: 'var(--text-white)',
          'brand-secondary': 'var(--text-brand-secondary)',
          'brand-tertiary': 'var(--text-brand-tertiary)',
          'error-primary': 'var(--text-error-primary)',
        },
        border: {
          primary: 'var(--border-primary)',
          secondary: 'var(--border-secondary)',
          tertiary: 'var(--border-tertiary)',
          brand: 'var(--border-brand)',
          accent: 'var(--border-accent)',
          error: 'var(--border-error)',
        },
        fg: {
          white: 'var(--fg-white)',
          quaternary: 'var(--fg-quaternary)',
          'quaternary-hover': 'var(--fg-quaternary-hover)',
          'tertiary-hover': 'var(--fg-tertiary-hover)',
          'brand-primary-alt': 'var(--fg-brand-primary-alt)',
          'brand-secondary-alt': 'var(--fg-brand-secondary-alt)',
        },
        brand: {
          200: 'var(--brand-200)',
          800: 'var(--brand-800)',
          900: 'var(--brand-900)',
        },
        accent: {
          500: 'var(--accent-500)',
        },
        neutral: {
          200: 'var(--neutral-200)',
        },
        amber: {
          50: 'var(--amber-50)',
          400: 'var(--amber-400)',
          700: 'var(--amber-700)',
        },
        red: {
          300: 'var(--red-300)',
          600: 'var(--red-600)',
        },
      },
      spacing: {
        xxs: 'var(--spacing-xxs)',
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      fontSize: {
        xxs: ['10px', { lineHeight: '12px' }],
        xs: ['12px', { lineHeight: '18px' }],
        sm: ['14px', { lineHeight: '20px' }],
        md: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '30px' }],
        'display-sm': ['30px', { lineHeight: '38px' }],
      },
    },
  },
  plugins: [],
}
