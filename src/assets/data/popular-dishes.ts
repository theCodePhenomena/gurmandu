import type { Locale } from '@/i18n/ui'

export type FeaturedDish = {
  image: string
  alt: string
  name: Record<Locale, string>
  weight: string
  description: Record<Locale, string>
}

const img = (path: string) => `/images/menu/${path}.webp`

export const popularDishes: FeaturedDish[] = [
  {
    image: img('platouri-fm/gigant'),
    alt: 'Platou Fructe de Mare GIGANT',
    weight: '2.500 g',
    name: {
      ro: 'Platou Fructe de Mare GIGANT',
      en: 'Seafood GIANT Platter'
    },
    description: {
      ro: 'Caracatiță la grătar, creveți suculenți, scoici, inele de calamar și doradă — reunite pe un singur platou spectaculos, însoțite de cartofi aurii, lămâie, pită grecească și sosuri artizanale. Un festin mediteranean complet, pentru mesele care merită să fie amintite.',
      en: 'Grilled octopus, juicy prawns, mussels, squid rings and sea bream — brought together on one spectacular platter, served with golden fries, lemon, Greek pita and house-made sauces. A complete Mediterranean feast, for meals worth remembering.'
    }
  },
  {
    image: img('fritto/gigant'),
    alt: 'Fritto Misto GIGANT',
    weight: '3.200 g',
    name: {
      ro: 'Fritto Misto GIGANT',
      en: 'Fritto Misto GIANT'
    },
    description: {
      ro: 'Creveți, midii, calamar și tentacule, pane în panko crocant și prăjite la perfecțiune. Servite cu cartofi, sos de usturoi și sweet chilli. Genul de platou pe care îl împărtășești — dacă ești suficient de generos.',
      en: "Prawns, mussels, squid and tentacles, coated in crispy panko and fried to perfection. Served with fries, garlic sauce and sweet chilli. The kind of platter you share — if you're feeling generous enough."
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
    }
  },
  {
    image: img('snitzels-gurmandu/pui'),
    alt: 'Snitzel GurMANDU',
    weight: '750 g',
    name: {
      ro: 'Snitzelul GurMANDU',
      en: 'The GurMANDU Schnitzel'
    },
    description: {
      ro: 'Pui, porc sau vită, crocant în panko, acoperit cu sos de roșii, mozzarella topită și parmezan. Cu bacon, șuncă și cartofi prăjiți. Un preparat simplu ca idee, complex ca experiență.',
      en: 'Chicken, pork or beef — crispy in panko, topped with tomato sauce, melted mozzarella and parmesan. Served with bacon, ham and golden fries. Simple in concept, memorable in experience.'
    }
  },
  {
    image: img('paste/tagliatelle-fm'),
    alt: 'Tagliatelle cu Fructe de Mare',
    weight: '400 g',
    name: {
      ro: 'Tagliatelle cu Fructe de Mare',
      en: 'Tagliatelle with Seafood'
    },
    description: {
      ro: 'Paste al dente cu creveți, midii, calamar, vin alb, roșii cherry și unt. Un preparat care te poartă, fără avertisment, pe malul Mediteranei.',
      en: 'Al dente pasta with prawns, mussels, squid, white wine, cherry tomatoes and butter. A dish that takes you, without warning, straight to the Mediterranean coast.'
    }
  }
]
