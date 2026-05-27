import { type Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import lineClamp from '@tailwindcss/line-clamp'

const withRgbOpacity = variable => ({ opacityValue }) => {
  if (opacityValue === undefined) {
    return `rgb(var(${variable}))`
  }

  return `rgb(var(${variable}) / ${opacityValue})`
}

const colorTokens = [
  'background',
  'foreground',
  'card',
  'card-foreground',
  'popover',
  'popover-foreground',
  'primary',
  'primary-foreground',
  'secondary',
  'secondary-foreground',
  'muted',
  'muted-foreground',
  'accent',
  'accent-foreground',
  'destructive',
  'border',
  'input',
  'ring',
  'chart-1',
  'chart-2',
  'chart-3',
  'chart-4',
  'chart-5',
  'sidebar',
  'sidebar-foreground',
  'sidebar-primary',
  'sidebar-primary-foreground',
  'sidebar-accent',
  'sidebar-accent-foreground',
  'sidebar-border',
  'sidebar-ring'
]

const colors = Object.fromEntries(colorTokens.map(token => [token, withRgbOpacity(`--${token}`)]))

const spacingScale = Object.fromEntries(
  Array.from({ length: 201 }, (_, index) => [index, `${index / 4}rem`])
)

const config = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html',
    './documentation.html',
    './hire-us.html'
  ],
  theme: {
    extend: {
      colors,
      spacing: spacingScale,
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      borderRadius: {
        none: '0px',
        sm: 'calc(var(--radius) - 4px)',
        DEFAULT: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
        '3xl': 'calc(var(--radius) + 12px)',
        '4xl': 'calc(var(--radius) + 16px)'
      },
      boxShadow: {
        '2xs': 'var(--shadow-2xs)',
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)'
      }
    }
  },
  plugins: [typography, lineClamp]
} satisfies Config

export default config
