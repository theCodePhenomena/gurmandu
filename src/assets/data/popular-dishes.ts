import type { Locale } from '@/i18n/ui'

export type FeaturedDish = {
  image: string
  alt: string
  name: Record<Locale, string>
  weight: string
  description: Record<Locale, string>
  category: {
    slug: string
    name: Record<Locale, string>
  }
}

const img = (path: string) => `/images/menu/${path}.webp`

export const popularDishes: FeaturedDish[] = [
  {
    image: img('platouri-fm/gigant'),
    alt: 'Platou Fructe de Mare GIGANT',
    weight: '2.500 g',
    name: {
      ro: 'Fructe de mare GIGANT',
      en: 'Seafood GIANT'
    },
    description: {
      ro: 'Caracatiță la grătar, creveți suculenți, scoici, inele de calamar și doradă — reunite pe un singur platou spectaculos, însoțite de cartofi aurii, lămâie, pită grecească și sosuri artizanale. Un festin mediteranean complet, pentru mesele care merită să fie amintite.',
      en: 'Grilled octopus, juicy prawns, mussels, squid rings and sea bream — brought together on one spectacular platter, served with golden fries, lemon, Greek pita and house-made sauces. A complete Mediterranean feast, for meals worth remembering.'
    },
    category: {
      slug: 'platouri-fructe-de-mare',
      name: { ro: 'Platouri Fructe de Mare', en: 'Seafood Platters' }
    }
  },
  {
    image: img('platouri/gigant'),
    alt: 'Platou GurMANDU GIGANT',
    weight: '4.000 g',
    name: {
      ro: 'Platou GurMANDU GIGANT',
      en: 'GurMANDU GIANT Platter'
    },
    description: {
      ro: 'Tot ce avem noi mai bun, pe un singur platou. Boston steak de porc, mici tradiționali, pastramă de miel, cotlete, burger GurMANDU, frigărui, cocoșel la ceaun și crispy chicken — cu cartofi cu telemea, murături asortate și sosurile noastre. Un preparat pentru ocazii pe măsura sa.',
      en: 'Everything we do best, on a single platter. Pork Boston steak, traditional Romanian mici, lamb pastrami, lamb chops, GurMANDU burger, pork skewers, cauldron-roasted chicken and crispy chicken — with cheesy fries, assorted pickles and our signature sauces. A dish worthy of the occasion.'
    },
    category: {
      slug: 'platouri-gurmandu',
      name: { ro: 'Platouri GurMANDU', en: 'GurMANDU Platters' }
    }
  },
  {
    image: img('steak/tomahawk'),
    alt: 'Tomahawk',
    weight: '1.100 g',
    name: {
      ro: 'Tomahawk',
      en: 'Tomahawk'
    },
    description: {
      ro: 'O bucată impresionantă, maturată cu grijă și gătită la perfecțiune — cu crusta caramelizată pe grătar și inima fragedă, rozalie. Servit pe masă într-o tăcere respectuoasă, e steak-ul gândit pentru două persoane care știu ce vor.',
      en: 'An impressive cut, carefully aged and cooked to perfection — caramelized crust from the grill, tender pink heart. Brought to the table in respectful silence, this is the steak built for two who know exactly what they want.'
    },
    category: {
      slug: 'steak',
      name: { ro: 'Steak', en: 'Steak' }
    }
  }
]
