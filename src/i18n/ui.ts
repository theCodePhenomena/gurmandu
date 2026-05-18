export const defaultLang = 'ro' as const
export const locales = ['ro', 'en'] as const
export type Locale = (typeof locales)[number]

export const ui = {
  ro: {
    'menu.badge': 'Meniu',
    'menu.title': 'Meniul nostru',
    'menu.subtitle':
      'Bucătărie fusion: rețete românești, mediteraneene și italiene, reinventate într-un stil modern.',
    'menu.allergens': 'Alergeni'
  },
  en: {
    'menu.badge': 'Menu',
    'menu.title': 'Our menu',
    'menu.subtitle':
      'Fusion cuisine: Romanian, Mediterranean and Italian recipes, reimagined with a modern twist.',
    'menu.allergens': 'Allergens'
  }
} as const satisfies Record<Locale, Record<string, string>>

export type UIKey = keyof (typeof ui)['ro']
