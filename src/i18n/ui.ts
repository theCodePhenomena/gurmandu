export const defaultLang = 'ro' as const
export const locales = ['ro', 'en'] as const
export type Locale = (typeof locales)[number]

export const ui = {
  ro: {
    'menu.badge': 'Meniu',
    'menu.title': 'Meniul nostru',
    'menu.subtitle':
      'Oferim o varietate de preparate, de la tradiționale la moderne, care îți vor satisface cele mai exigente pofte.',
    'menu.allergens': 'Alergeni'
  },
  en: {
    'menu.badge': 'Menu',
    'menu.title': 'Our menu',
    'menu.subtitle':
      'We offer a variety of dishes, from traditional to modern, that are sure to satisfy your cravings.',
    'menu.allergens': 'Allergens'
  }
} as const satisfies Record<Locale, Record<string, string>>

export type UIKey = keyof (typeof ui)['ro']
