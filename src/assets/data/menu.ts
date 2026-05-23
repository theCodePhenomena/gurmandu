import type { Locale } from '@/i18n/ui'

export const siteLang: Record<Locale, string> = { ro: 'ro-RO', en: 'en-US' }
export const siteCurrency = 'RON'

type I18nString = Record<Locale, string>

export type Plate = {
  name: I18nString
  description: I18nString
  price: number
  image?: string
  allergens?: string
  weight?: string
}

export type PlateCategory = {
  id: number
  slug: string
  prettyName: I18nString
  description: I18nString
  plates: Plate[]
}

const m = (path: string) => `/images/menu/${path}.webp`

const p = (ro: string, en: string): I18nString => ({ ro, en })

export const plateCategories: PlateCategory[] = [
  {
    id: 1,
    slug: 'mic-dejun',
    prettyName: p('Mic Dejun', 'Breakfast'),
    description: p(
      'Începe ziua cu un mic dejun proaspăt preparat.',
      'Start your day with a freshly prepared breakfast.'
    ),
    plates: [
      {
        name: p('Omletă simplă', 'Simple omelette'),
        description: p('Ouă, mix salată verde.', 'Eggs, green salad mix.'),
        price: 26,
        weight: '250g',
        allergens: '3',
        image: m('mic-dejun/omleta-simpla')
      },
      {
        name: p('Omletă cu cașcaval', 'Cheese omelette'),
        description: p('Ouă, cașcaval, mix salată verde.', 'Eggs, cheese, green salad mix.'),
        price: 30,
        weight: '300g',
        allergens: '3,7'
      },
      {
        name: p('Omletă cu brânză', 'White cheese omelette'),
        description: p('Ouă, brânză, mix salată verde.', 'Eggs, white cheese, green salad mix.'),
        price: 30,
        weight: '300g',
        allergens: '3,7'
      },
      {
        name: p('Omletă cu șuncă', 'Ham omelette'),
        description: p('Ouă, șuncă, mix salată verde.', 'Eggs, ham, green salad mix.'),
        price: 32,
        weight: '300g',
        allergens: '3'
      },
      {
        name: p('Omletă cu șuncă și cașcaval', 'Cheese and ham omelette'),
        description: p('Ouă, șuncă, cașcaval, mix salată verde.', 'Eggs, ham, cheese, green salad mix.'),
        price: 35,
        weight: '350g',
        allergens: '3,7'
      },
      {
        name: p('Omletă cu ciuperci', 'Mushrooms omelette'),
        description: p('Ouă, ciuperci, mix salată verde.', 'Eggs, mushrooms, green salad mix.'),
        price: 30,
        weight: '300g',
        allergens: '3'
      },
      {
        name: p('Omletă Gurmandu', 'Gurmandu omelette'),
        description: p(
          'Ouă, cârnați, bacon, ceapă, ardei roșu, mix salată verde.',
          'Eggs, sausages, bacon, onion, red pepper, green salad mix.'
        ),
        price: 38,
        weight: '350g',
        allergens: '3,6'
      },
      {
        name: p('Ouă ochiuri cu bacon', 'Scrambled eggs with bacon'),
        description: p('Ouă, bacon, mix salată verde.', 'Eggs, bacon, green salad mix.'),
        price: 27,
        weight: '250g',
        allergens: '3',
        image: m('mic-dejun/oua-bacon')
      },
      {
        name: p('Platou mic dejun', 'Breakfast platter'),
        description: p(
          'Șuncă, salam, telemea, cașcaval afumat, roșii, castraveți, măsline.',
          'Ham, salami, cheese, smoked cheese, tomatoes, cucumber, olives.'
        ),
        price: 45,
        weight: '500g',
        allergens: '3,6,7',
        image: m('mic-dejun/platou')
      }
    ]
  },
  {
    id: 2,
    slug: 'gustari-reci',
    prettyName: p('Gustări Reci', 'Cold Appetizers'),
    description: p(
      'Aperitive reci, perfecte pentru început de masă.',
      'Cold appetizers, the perfect way to start your meal.'
    ),
    plates: [
      {
        name: p('Salată boeuf', 'Boeuf salad'),
        description: p(
          'Cartof, morcov, piept de pui, castraveți murați, gogoșari, ou, muștar, lămâie.',
          'Potato, carrot, chicken breast, pickled cucumbers, pickled pepper, egg, mustard, lemon.'
        ),
        price: 29,
        weight: '250g',
        allergens: '3,10',
        image: m('gustari-reci/salata-boeuf')
      },
      {
        name: p('Salată de icre de crap', 'Carp roe salad'),
        description: p('Icre de crap, ceapă roșie, pâine prăjită.', 'Carp roe, red onion, toast.'),
        price: 29,
        weight: '150g',
        allergens: '1,4',
        image: m('gustari-reci/icre-crap')
      },
      {
        name: p('Fasole bătută', 'Beaten beans'),
        description: p(
          'Fasole, ceapă, ulei, usturoi, sos de roșii, pâine prăjită.',
          'Beans, onion, oil, garlic, tomato sauce, toast.'
        ),
        price: 19,
        weight: '150g',
        allergens: '1',
        image: m('gustari-reci/fasole-batuta')
      },
      {
        name: p('Salată de vinete', 'Eggplant salad'),
        description: p('Vinete, ceapă, usturoi, pâine prăjită.', 'Eggplant, onion, garlic, toast.'),
        price: 23,
        weight: '170g',
        allergens: '1',
        image: m('gustari-reci/salata-vinete')
      },
      {
        name: p('Zacuscă de legume', 'Roasted vegetable spread'),
        description: p(
          'Vinete, gogoșari, ceapă, roșii, ulei, pastă de tomate, pâine prăjită.',
          'Eggplant, red pepper, onion, tomato, oil, tomato paste, toast.'
        ),
        price: 26,
        weight: '170g',
        allergens: '1',
        image: m('gustari-reci/zacusca')
      },
      {
        name: p('Platou mix salate', 'Mixed salad platter'),
        description: p(
          'Salată icre crap, boeuf, fasole bătută, vinete, zacuscă, pâine prăjită.',
          'Carp roe salad, boeuf salad, beaten beans, eggplant salad, vegetable spread, toast.'
        ),
        price: 98,
        weight: '750g',
        allergens: '1,3,10',
        image: m('gustari-reci/mix-salate')
      },
      {
        name: p('Platou mix brânzeturi', 'Mixed cheese platter'),
        description: p(
          'Cașcaval afumat, brie, gorgonzola, parmezan, strugure, măr, nuci, pâine prăjită.',
          'Smoked cheese, brie, gorgonzola, parmesan, grapes, apple, nuts, toast.'
        ),
        price: 65,
        weight: '550g',
        allergens: '1,7,8',
        image: m('gustari-reci/mix-branzeturi')
      }
    ]
  },
  {
    id: 3,
    slug: 'gustari-calde',
    prettyName: p('Gustări Calde', 'Hot Appetizers'),
    description: p('Aperitive calde proaspăt preparate.', 'Freshly made hot appetizers.'),
    plates: [
      {
        name: p('Cașcaval pane', 'Breaded cheese'),
        description: p('Cașcaval, ou, făină, pesmet.', 'Cheese, eggs, flour, breadcrumbs.'),
        price: 32,
        weight: '250g',
        allergens: '1,3,7',
        image: m('gustari-calde/cascaval-pane')
      },
      {
        name: p('Clătite cu pui și ciuperci', 'Chicken and mushrooms crepes'),
        description: p(
          'Piept de pui, ciuperci, mozzarella, lapte, ou, făină, mărar.',
          'Chicken breast, mushrooms, mozzarella, milk, eggs, flour, dill.'
        ),
        price: 29,
        weight: '250g',
        allergens: '1,3,7',
        image: m('gustari-calde/clatite-pui')
      },
      {
        name: p('Creveți în panko', 'Panko shrimps'),
        description: p(
          'Creveți, ou, făină, panko, sos sweet chilli, lămâie.',
          'Shrimps, eggs, flour, panko, sweet chilli sauce, lemon.'
        ),
        price: 49,
        weight: '300g',
        allergens: '1,2,3',
        image: m('gustari-calde/creveti-panko')
      },
      {
        name: p('Inele de calamar pane', 'Fried squid rings'),
        description: p(
          'Calamar, ou, făină, sos sweet chilli, lămâie.',
          'Squid, eggs, flour, sweet chilli sauce, lemon.'
        ),
        price: 49,
        weight: '280g',
        allergens: '1,3,14',
        image: m('gustari-calde/calamar-pane')
      }
    ]
  },
  {
    id: 4,
    slug: 'ciorbe',
    prettyName: p('Ciorbe', 'Soups'),
    description: p('Ciorbe tradiționale, fierte cu grijă.', 'Traditional soups, carefully simmered.'),
    plates: [
      {
        name: p('Ciorbă de burtă', 'Belly soup'),
        description: p(
          'Burtă de vită, oase de vită, smântână, ou, morcov, usturoi, gogoșar.',
          'Beef belly, beef bones, cream, eggs, carrot, garlic, pickled red pepper.'
        ),
        price: 34,
        weight: '350ml',
        allergens: '3,7',
        image: m('ciorbe/ciorba-burta')
      },
      {
        name: p('Ciorbă de porc afumat', 'Smoked pork soup'),
        description: p(
          'Pulpă porc afumată, oase afumate, ceapă, morcov, ardei, cartof, roșii, pătrunjel.',
          'Smoked pork leg, smoked bones, onion, carrot, pepper, potato, tomato, parsley.'
        ),
        price: 38,
        weight: '350ml',
        image: m('ciorbe/ciorba-porc')
      },
      {
        name: p('Supă cremă de legume', 'Vegetable cream soup'),
        description: p('Morcov, ceapă, ardei roșu, țelină.', 'Carrot, onion, red pepper, celery.'),
        price: 25,
        weight: '350ml',
        allergens: '1,9',
        image: m('ciorbe/supa-legume')
      },
      {
        name: p('Supă mix fructe de mare', 'Mixed seafood soup'),
        description: p(
          'Scoici, creveți, midii, calamar, tentacule, roșii, ceapă, usturoi.',
          'Mussels, shrimps, mussel meat, squid, tentacles, tomato, onion, garlic.'
        ),
        price: 95,
        weight: '650g',
        allergens: '2,14',
        image: m('ciorbe/supa-fructe-mare')
      }
    ]
  },
  {
    id: 5,
    slug: 'salate-aperitiv',
    prettyName: p('Salate Aperitiv', 'Appetizer Salads'),
    description: p('Salate proaspete și consistente.', 'Fresh and hearty salads.'),
    plates: [
      {
        name: p('Salată Caesar', 'Caesar salad'),
        description: p(
          'Salată iceberg, piept de pui, parmezan, crutoane, sos Caesar.',
          'Iceberg salad, chicken breast, parmesan, croutons, Caesar sauce.'
        ),
        price: 44,
        weight: '400g',
        allergens: '1,3,7',
        image: m('salate-aperitiv/caesar')
      },
      {
        name: p('Salată bulgărească', 'Bulgarian salad'),
        description: p(
          'Șuncă Praga, ou fiert, telemea, roșii, castraveți, măsline.',
          'Prague ham, boiled egg, telemea cheese, tomato, cucumber, olives.'
        ),
        price: 42,
        weight: '350g',
        allergens: '3,7',
        image: m('salate-aperitiv/bulgareasca')
      },
      {
        name: p('Salată grecească', 'Greek salad'),
        description: p(
          'Roșii, castraveți, ardei roșu, feta, măsline, ceapă roșie, oregano.',
          'Tomato, cucumber, red pepper, feta, olives, red onion, oregano.'
        ),
        price: 44,
        weight: '350g',
        allergens: '7',
        image: m('salate-aperitiv/greceasca')
      }
    ]
  },
  {
    id: 6,
    slug: 'snitzels-gurmandu',
    prettyName: p('Șnițele GurMANDU', 'GurMANDU Schnitzels'),
    description: p(
      'Șnițele speciale GurMANDU, perfecte pentru gurmanzi.',
      'Signature GurMANDU schnitzels for true gourmands.'
    ),
    plates: [
      {
        name: p('Șnițel GurMANDU pui', 'GurMANDU chicken schnitzel'),
        description: p(
          'Piept de pui, ou, făină, panko, bacon, șuncă, sos roșii, mozzarella, parmezan, oregano, cartofi prăjiți.',
          'Chicken breast, egg, flour, panko, bacon, ham, tomato sauce, mozzarella, parmesan, oregano, french fries.'
        ),
        price: 85,
        weight: '750g',
        allergens: '1,3,7',
        image: m('snitzels-gurmandu/pui')
      },
      {
        name: p('Șnițel GurMANDU porc', 'GurMANDU pork schnitzel'),
        description: p(
          'Cotlet de porc, ou, făină, panko, bacon, șuncă, sos roșii, mozzarella, parmezan, oregano, cartofi prăjiți.',
          'Pork chop, egg, flour, panko, bacon, ham, tomato sauce, mozzarella, parmesan, oregano, french fries.'
        ),
        price: 85,
        weight: '750g',
        allergens: '1,3,7',
        image: m('snitzels-gurmandu/porc')
      },
      {
        name: p('Șnițel GurMANDU vită', 'GurMANDU beef schnitzel'),
        description: p(
          'Pulpă de vită, ou, făină, pesmet, bacon, șuncă, sos roșii, mozzarella, parmezan, oregano, cartofi prăjiți.',
          'Beef leg, egg, flour, breadcrumbs, bacon, ham, tomato sauce, mozzarella, parmesan, oregano, french fries.'
        ),
        price: 110,
        weight: '750g',
        allergens: '1,3,7',
        image: m('snitzels-gurmandu/vita')
      }
    ]
  },
  {
    id: 7,
    slug: 'snitzels',
    prettyName: p('Șnițele', 'Schnitzels'),
    description: p('Șnițele clasice cu garnituri tradiționale.', 'Classic schnitzels with traditional sides.'),
    plates: [
      {
        name: p('Șnițel de pui', 'Chicken schnitzel'),
        description: p(
          'Piept de pui, ou, făină, panko, cartofi prăjiți, sos de usturoi.',
          'Chicken breast, egg, flour, panko, french fries, garlic sauce.'
        ),
        price: 65,
        weight: '550g',
        allergens: '1,3',
        image: m('snitzels/pui')
      },
      {
        name: p('Șnițel de porc', 'Pork schnitzel'),
        description: p(
          'Cotlet de porc, ou, făină, pesmet, cartofi prăjiți, sos de usturoi.',
          'Pork chop, egg, flour, breadcrumbs, french fries, garlic sauce.'
        ),
        price: 65,
        weight: '550g',
        allergens: '1,3',
        image: m('snitzels/porc')
      },
      {
        name: p('Șnițel de vită', 'Beef schnitzel'),
        description: p(
          'Capac din pulpă de vită, ou, făină, pesmet, cartofi prăjiți, sos de usturoi.',
          'Beef leg, egg, flour, breadcrumbs, french fries, garlic sauce.'
        ),
        price: 95,
        weight: '550g',
        allergens: '1,3',
        image: m('snitzels/vita')
      }
    ]
  },
  {
    id: 8,
    slug: 'specialitati-casa',
    prettyName: p('Specialități Casa', 'House Specials'),
    description: p('Rețete tradiționale românești.', 'Traditional Romanian recipes.'),
    plates: [
      {
        name: p('Pastramă de miel la ceaun', 'Lamb pastrami in a cauldron'),
        description: p('Cu murături și mămăliguță.', 'With pickles and polenta.'),
        price: 65,
        weight: '550g',
        allergens: '1',
        image: m('specialitati/pastrama-miel-ceaun')
      },
      {
        name: p('Jumătate de pui la cuptor', 'Half oven-baked chicken'),
        description: p('Cu cartofi prăjiți și sos de usturoi.', 'With french fries and garlic sauce.'),
        price: 55,
        weight: '600g',
        image: m('specialitati/pui-cuptor')
      },
      {
        name: p('Cocoșel la ceaun', 'Roasted cockerel'),
        description: p('Cu mujdei de usturoi și mămăliguță.', 'With garlic sauce and polenta.'),
        price: 65,
        weight: '650g',
        allergens: '1',
        image: m('specialitati/cocosel')
      },
      {
        name: p('Bulz tradițional', 'Traditional bulz'),
        description: p('Brânză de burduf, mămăliguță, cârnați afumați.', 'Bellows cheese, polenta, smoked sausages.'),
        price: 42,
        weight: '400g',
        allergens: '1,7',
        image: m('specialitati/bulz')
      },
      {
        name: p('Iahnie de fasole cu cârnați', 'Bean stew with sausages'),
        description: p(
          'Fasole, ceapă, morcov, ardei, sos roșii, usturoi, mărar.',
          'Beans, onion, carrot, pepper, tomato sauce, garlic, dill.'
        ),
        price: 32,
        weight: '450g',
        allergens: '1,6,7',
        image: m('specialitati/iahnie')
      },
      {
        name: p('Pomana porcului', "Pig's feast"),
        description: p(
          'Ceafă de porc, usturoi, vin alb, mămăliguță, murături.',
          'Pork neck, garlic, white wine, polenta, pickles.'
        ),
        price: 42,
        weight: '550g',
        allergens: '1',
        image: m('specialitati/pomana-porcului')
      },
      {
        name: p('Tochitură moldovenească', 'Moldavian tochitura'),
        description: p(
          'Ceafă, cârnați, piept de pui, vin alb, usturoi, mămăliguță, roșii, ou, telemea.',
          'Pork neck, sausages, chicken breast, white wine, garlic, polenta, tomato, egg, telemea.'
        ),
        price: 48,
        weight: '600g',
        allergens: '1,3,6,7',
        image: m('specialitati/tochitura')
      },
      {
        name: p('Tigaie picantă', 'Spicy pan'),
        description: p(
          'Ceafă, piept de pui, bacon, ceapă, ardei, ardei iute, sos roșii, usturoi, pătrunjel.',
          'Pork neck, chicken breast, bacon, onion, pepper, chili, tomato sauce, garlic, parsley.'
        ),
        price: 45,
        weight: '450g',
        image: m('specialitati/tigaie-picanta')
      },
      {
        name: p('Tigaie ficăței de pui', 'Chicken liver pan'),
        description: p('Ficăței de pui, ceapă, vin alb.', 'Chicken liver, onion, white wine.'),
        price: 34,
        weight: '400g',
        allergens: '12',
        image: m('specialitati/ficatei')
      }
    ]
  },
  {
    id: 9,
    slug: 'gratar',
    prettyName: p('Preparate la Grătar', 'Grilled Specialties'),
    description: p('Carne fragedă, pregătită pe grătar.', 'Tender meat, fired on the grill.'),
    plates: [
      {
        name: p('Pork Boston Steak', 'Pork Boston Steak'),
        description: p('Cotlet de porc Boston pregătit la grătar.', 'Boston pork chop on the grill.'),
        price: 49,
        weight: '500g',
        image: m('gratar/boston-steak')
      },
      {
        name: p('Mici GurMANDU', 'GurMANDU mici'),
        description: p('Mici porc-vită, muștar.', 'Pork-beef chopped meat, mustard.'),
        price: 34,
        weight: '300g',
        allergens: '10',
        image: m('gratar/mici')
      },
      {
        name: p('Platou Mici GurMANDU', 'GurMANDU mici platter'),
        description: p('Mici porc-vită, muștar, cartofi prăjiți.', 'Pork-beef chopped meat, mustard, french fries.'),
        price: 149,
        weight: '1400g',
        allergens: '10'
      },
      {
        name: p('Pastramă de miel', 'Lamb pastrami'),
        description: p('Pastramă de miel pe grătar.', 'Grilled lamb pastrami.'),
        price: 56,
        weight: '250g',
        image: m('gratar/pastrama-miel')
      },
      {
        name: p('Cotlete de miel', 'Lamb chops'),
        description: p('Cotlete de miel pe grătar.', 'Grilled lamb chops.'),
        price: 75,
        weight: '250g',
        image: m('gratar/cotlete-miel')
      },
      {
        name: p('Frigărui de porc', 'Pork skewers'),
        description: p('Cotlet de porc, ceapă, ardei roșu, ciuperci.', 'Pork chop, onion, red pepper, mushrooms.'),
        price: 42,
        weight: '350g',
        image: m('gratar/frigarui-porc')
      },
      {
        name: p('Frigărui de pui', 'Chicken skewers'),
        description: p('Piept de pui, ceapă, ardei roșu, ciuperci.', 'Chicken breast, onion, red pepper, mushrooms.'),
        price: 39,
        weight: '300g',
        image: m('gratar/frigarui-pui')
      },
      {
        name: p('Piept de pui', 'Chicken breast'),
        description: p('Piept de pui pe grătar.', 'Grilled chicken breast.'),
        price: 29,
        weight: '250g',
        image: m('gratar/piept-pui')
      }
    ]
  },
  {
    id: 10,
    slug: 'steak',
    prettyName: p('Steak', 'Steak'),
    description: p('Steak premium, pentru cunoscători.', 'Premium steak for connoisseurs.'),
    plates: [
      {
        name: p('Rib Eye (Grass Fed)', 'Rib Eye (Grass Fed)'),
        description: p('Rib eye din vită hrănită cu iarbă.', 'Rib eye from grass-fed beef.'),
        price: 149,
        weight: '300g',
        image: m('steak/rib-eye')
      },
      {
        name: p('Tomahawk', 'Tomahawk'),
        description: p('Tomahawk impresionant pentru împărțit.', 'Impressive tomahawk for sharing.'),
        price: 390,
        weight: '1100g',
        image: m('steak/tomahawk')
      }
    ]
  },
  {
    id: 11,
    slug: 'platouri-gurmandu',
    prettyName: p('Platouri GurMANDU', 'GurMANDU Platters'),
    description: p('Platouri generoase pentru companie.', 'Generous platters made for sharing.'),
    plates: [
      {
        name: p('Platou GurMANDU DUO', 'GurMANDU DUO platter'),
        description: p(
          'Cocoșel la ceaun, Boston steak, mici, pastramă miel, cartofi cu telemea, murături, sos usturoi, muștar.',
          'Roasted cockerel, Boston steak, mici, lamb pastrami, fries with telemea, pickles, garlic sauce, mustard.'
        ),
        price: 195,
        weight: '1600g',
        allergens: '7,10',
        image: m('platouri/duo')
      },
      {
        name: p('Platou GurMANDU GIGANT', 'Giant GurMANDU platter'),
        description: p(
          'Boston steak, mici, pastramă miel, cotlete miel, burger, frigărui, cocoșel, crispy chicken, cartofi cu telemea, murături, sosuri.',
          'Boston steak, mici, lamb pastrami, lamb chops, burger, skewers, cockerel, crispy chicken, fries with telemea, pickles, sauces.'
        ),
        price: 495,
        weight: '4000g',
        allergens: '1,3,7,10',
        image: m('platouri/gigant')
      }
    ]
  },
  {
    id: 12,
    slug: 'peste-fructe-de-mare',
    prettyName: p('Pește și Fructe de Mare', 'Fish & Seafood'),
    description: p('Pește proaspăt și fructe de mare.', 'Fresh fish and seafood.'),
    plates: [
      {
        name: p('Dorada la grătar', 'Grilled dorada'),
        description: p('Cu lămâie.', 'With lemon.'),
        price: 57,
        weight: '300g',
        allergens: '4',
        image: m('peste/dorada')
      },
      {
        name: p('Somon la grătar', 'Grilled salmon'),
        description: p('Cu lămâie.', 'With lemon.'),
        price: 65,
        allergens: '4',
        image: m('peste/somon')
      },
      {
        name: p('Crap la grătar', 'Grilled carp'),
        description: p('Crap proaspăt pe grătar.', 'Fresh grilled carp.'),
        price: 49,
        weight: '350g',
        allergens: '4',
        image: m('peste/crap-gratar')
      },
      {
        name: p('Saramură de crap', 'Carp brine'),
        description: p(
          'Crap, ceapă, ardei, ardei iute, roșii, suc de roșii, usturoi, mămăliguță.',
          'Carp, onion, pepper, chili, tomato, tomato juice, garlic, polenta.'
        ),
        price: 75,
        weight: '700g',
        allergens: '1,4',
        image: m('peste/saramura-crap')
      },
      {
        name: p('Crap prăjit', 'Fried carp'),
        description: p(
          'Crap, făină, mălai, mujdei de usturoi, mămăliguță.',
          'Carp, flour, cornmeal, garlic sauce, polenta.'
        ),
        price: 56,
        weight: '450g',
        allergens: '1,4',
        image: m('peste/crap-prajit')
      },
      {
        name: p('Hamsii prăjite', 'Fried anchovies'),
        description: p('Cu lămâie.', 'With lemon.'),
        price: 24,
        weight: '300g',
        allergens: '1,4',
        image: m('peste/hamsii')
      },
      {
        name: p('Caracatiță la grătar', 'Grilled octopus'),
        description: p(
          'Cu lămâie și sos chimichurri pe pat de salată.',
          'With lemon and chimichurri sauce on lettuce.'
        ),
        price: 120,
        weight: '300g',
        allergens: '14',
        image: m('peste/caracatita')
      },
      {
        name: p('Calamar la grătar', 'Grilled squid'),
        description: p(
          'Cu lămâie și sos chimichurri pe pat de salată.',
          'With lemon and chimichurri sauce on lettuce.'
        ),
        price: 75,
        weight: '350g',
        allergens: '14',
        image: m('peste/calamar-gratar')
      },
      {
        name: p('Creveți la grătar', 'Grilled shrimps'),
        description: p('Cu lămâie și sos de usturoi.', 'With lemon and garlic sauce.'),
        price: 69,
        weight: '350g',
        allergens: '2,6',
        image: m('peste/creveti-gratar')
      },
      {
        name: p('Creveți în sos roșu', 'Shrimps in red sauce'),
        description: p(
          'Creveți, sos roșii, usturoi, unt, ardei iute, lămâie, pita grecească.',
          'Shrimps, tomato sauce, garlic, butter, chili, lemon, greek pita.'
        ),
        price: 75,
        weight: '350g',
        allergens: '1,2,7',
        image: m('peste/creveti-rosu')
      },
      {
        name: p('Creveți în sos alb', 'Shrimps in white sauce'),
        description: p(
          'Creveți, unt, vin alb, Gran Cucina, lămâie, roșii cherry, pita grecească.',
          'Shrimps, butter, white wine, Gran Cucina, lemon, cherry tomatoes, greek pita.'
        ),
        price: 75,
        weight: '350g',
        allergens: '1,2,7',
        image: m('peste/creveti-alb')
      },
      {
        name: p('Scoici în sos roșu', 'Mussels in red sauce'),
        description: p(
          'Scoici, sos roșii, unt, vin alb, usturoi, lămâie, pita grecească.',
          'Mussels, tomato sauce, butter, white wine, garlic, lemon, greek pita.'
        ),
        price: 49,
        weight: '600g',
        allergens: '1,7,12,14',
        image: m('peste/scoici')
      }
    ]
  },
  {
    id: 13,
    slug: 'fritto-misto',
    prettyName: p('Platouri Fritto Misto', 'Fritto Misto Platters'),
    description: p('Mix de fructe de mare crocante.', 'Crispy seafood mix.'),
    plates: [
      {
        name: p('Fritto Misto SINGLE', 'Fritto Misto SINGLE'),
        description: p(
          'Creveți, midii, calamar, tentacule, lămâie, sosuri, cartofi prăjiți.',
          'Shrimps, mussels, squid, tentacles, lemon, sauces, french fries.'
        ),
        price: 110,
        weight: '800g',
        allergens: '1,2,3,14',
        image: m('fritto/single')
      },
      {
        name: p('Fritto Misto DUO', 'Fritto Misto DUO'),
        description: p(
          'Creveți, midii, calamar, tentacule, lămâie, sosuri, cartofi prăjiți.',
          'Shrimps, mussels, squid, tentacles, lemon, sauces, french fries.'
        ),
        price: 195,
        weight: '1600g',
        allergens: '1,2,3,14',
        image: m('fritto/duo')
      },
      {
        name: p('Fritto Misto GIGANT', 'Fritto Misto GIANT'),
        description: p(
          'Creveți, midii, calamar, tentacule, lămâie, sosuri, cartofi prăjiți.',
          'Shrimps, mussels, squid, tentacles, lemon, sauces, french fries.'
        ),
        price: 365,
        weight: '3200g',
        allergens: '1,2,3,14',
        image: m('fritto/gigant')
      },
      {
        name: p('Platou mix creveți Black Tiger', 'Black Tiger shrimp mix platter'),
        description: p(
          'Creveți Black Tiger, făină, ouă, panko, lămâie, sos usturoi, sos sweet chilli.',
          'Black Tiger shrimps, flour, eggs, panko, lemon, garlic sauce, sweet chilli sauce.'
        ),
        price: 435,
        weight: '1750g',
        allergens: '1,2,4',
        image: m('fritto/black-tiger-mix')
      },
      {
        name: p('Platou creveți Black Tiger în panko', 'Black Tiger shrimps in panko'),
        description: p(
          'Creveți Black Tiger, făină, ouă, panko, lămâie, sos usturoi.',
          'Black Tiger shrimps, flour, eggs, panko, lemon, garlic sauce.'
        ),
        price: 145,
        weight: '700g',
        allergens: '1,2,4',
        image: m('fritto/black-tiger-panko')
      }
    ]
  },
  {
    id: 14,
    slug: 'platouri-fructe-de-mare',
    prettyName: p('Platouri Fructe de Mare', 'Seafood Platters'),
    description: p('Platouri spectaculoase cu fructe de mare.', 'Spectacular seafood platters.'),
    plates: [
      {
        name: p('Platou creveți la grătar', 'Grilled shrimps platter'),
        description: p(
          'Creveți Black Tiger, lămâie, sos usturoi, pita grecească.',
          'Black Tiger shrimps, lemon, garlic sauce, greek pita.'
        ),
        price: 145,
        weight: '650g',
        allergens: '1,2,4',
        image: m('platouri-fm/creveti-gratar')
      },
      {
        name: p('Fructe de mare DUO', 'Seafood DUO'),
        description: p(
          'Calamar, creveți, scoici, tentacule, dorada, cartofi, lămâie, sosuri, pita.',
          'Squid, shrimps, mussels, tentacles, dorada, fries, lemon, sauces, pita.'
        ),
        price: 245,
        weight: '1400g',
        allergens: '1,2,4,14',
        image: m('platouri-fm/duo')
      },
      {
        name: p('Fructe de mare GIGANT', 'Seafood GIANT'),
        description: p(
          'Caracatiță, tentacule, creveți, scoici, calamar, dorada, cartofi, sosuri, pita.',
          'Octopus, tentacles, shrimps, mussels, squid, dorada, fries, sauces, pita.'
        ),
        price: 520,
        weight: '2500g',
        allergens: '1,2,4,14',
        image: m('platouri-fm/gigant')
      }
    ]
  },
  {
    id: 15,
    slug: 'asiatic',
    prettyName: p('Asiatic', 'Asian'),
    description: p('Arome asiatice, preparate cu pasiune.', 'Asian flavors, cooked with passion.'),
    plates: [
      {
        name: p('Tigaie urechi de porc', "Pig's ear pan"),
        description: p(
          'Urechi de porc, sos soia, ardei, ardei iute, ceapă, usturoi, orez.',
          "Pig's ear, soy sauce, pepper, chili, onion, garlic, rice."
        ),
        price: 49,
        weight: '400g',
        allergens: '6',
        image: m('asiatic/urechi-porc')
      },
      {
        name: p('Plită încinsă de pui', 'Chicken hot plate'),
        description: p(
          'Piept pui, alune, ardei, țelină, morcov, urechi de lemn, sweet chilli, susan, ceapă verde.',
          'Chicken breast, peanuts, pepper, celery, carrot, wood ear mushrooms, sweet chilli, sesame, green onion.'
        ),
        price: 55,
        weight: '400g',
        allergens: '8,9,11',
        image: m('asiatic/plita-pui')
      },
      {
        name: p('Plită încinsă de porc', 'Pork hot plate'),
        description: p(
          'Cotlet, ardei, țelină, morcov, urechi de lemn, sos soia, susan, ceapă verde.',
          'Pork, pepper, celery, carrot, wood ear mushrooms, soy sauce, sesame, green onion.'
        ),
        price: 55,
        weight: '400g',
        allergens: '6,9,11',
        image: m('asiatic/plita-porc')
      },
      {
        name: p('Plită încinsă de vită', 'Beef hot plate'),
        description: p(
          'Rump de vită, ardei, țelină, morcov, urechi de lemn, sos soia, susan, ceapă verde.',
          'Beef rump, pepper, celery, carrot, wood ear mushrooms, soy sauce, sesame, green onion.'
        ),
        price: 75,
        weight: '400g',
        allergens: '6,9,11',
        image: m('asiatic/plita-vita')
      },
      {
        name: p('Noodles cu pui', 'Chicken noodles'),
        description: p(
          'Piept pui, noodles, ardei, morcov, ceapă, sos soia, sweet chilli, usturoi, ceapă verde.',
          'Chicken breast, noodles, pepper, carrot, onion, soy sauce, sweet chilli, garlic, green onion.'
        ),
        price: 55,
        weight: '400g',
        allergens: '6',
        image: m('asiatic/noodles-pui')
      },
      {
        name: p('Noodles cu porc', 'Pork noodles'),
        description: p(
          'Cotlet porc, noodles, ardei, morcov, ceapă, sos soia, sweet chilli, usturoi, ceapă verde.',
          'Pork, noodles, pepper, carrot, onion, soy sauce, sweet chilli, garlic, green onion.'
        ),
        price: 55,
        weight: '400g',
        allergens: '6',
        image: m('asiatic/noodles-porc')
      },
      {
        name: p('Noodles cu vită', 'Beef noodles'),
        description: p(
          'Rump vită, noodles, ardei, morcov, ceapă, sos soia, sweet chilli, usturoi, ceapă verde.',
          'Beef rump, noodles, pepper, carrot, onion, soy sauce, sweet chilli, garlic, green onion.'
        ),
        price: 75,
        weight: '400g',
        allergens: '6',
        image: m('asiatic/noodles-vita')
      }
    ]
  },
  {
    id: 16,
    slug: 'burgers',
    prettyName: p('Burgers', 'Burgers'),
    description: p('Burgeri suculenți, făcuți în casă.', 'Juicy burgers, made in-house.'),
    plates: [
      {
        name: p('Burger GurMANDU', 'GurMANDU Burger'),
        description: p(
          'Burger vită, bacon, cheddar, salată, castravete murat, ceapă crispy, roșie, sos burger, chiflă, cartofi prăjiți, sos usturoi.',
          'Beef patty, bacon, cheddar, lettuce, pickled cucumber, crispy onion, tomato, burger sauce, bun, fries, garlic sauce.'
        ),
        price: 69,
        weight: '550g',
        allergens: '1,3,6,7',
        image: m('burgers/gurmandu')
      },
      {
        name: p('Burger SPECIAL GurMANDU', 'GurMANDU Special Burger'),
        description: p(
          'Burger vită dublu, bacon, cheddar, salată, castravete murat, ceapă crispy, roșie, sos burger, chiflă, cartofi prăjiți, sos usturoi.',
          'Double beef patty, bacon, cheddar, lettuce, pickled cucumber, crispy onion, tomato, burger sauce, bun, fries, garlic sauce.'
        ),
        price: 85,
        weight: '700g',
        allergens: '1,3,6,7',
        image: m('burgers/special')
      },
      {
        name: p('Burger Crispy Chicken', 'Crispy Chicken Burger'),
        description: p(
          'Piept pui, ou, făină, panko, bacon, cheddar, salată, murat, ceapă crispy, roșie, sos burger, chiflă, cartofi prăjiți, sos usturoi.',
          'Chicken breast, egg, flour, panko, bacon, cheddar, lettuce, pickle, crispy onion, tomato, burger sauce, bun, fries, garlic sauce.'
        ),
        price: 55,
        weight: '550g',
        allergens: '1,3,6,7',
        image: m('burgers/crispy')
      }
    ]
  },
  {
    id: 17,
    slug: 'crispy',
    prettyName: p('Crispy', 'Crispy'),
    description: p('Pui crispy, perfect crocant.', 'Crispy chicken, perfectly crunchy.'),
    plates: [
      {
        name: p('Triple Crispy Chicken', 'Triple Crispy Chicken'),
        description: p(
          'Piept pui, ou, făină, fulgi de porumb, sos cheddar, cartofi prăjiți, castraveți murați, sos sweet chilli.',
          'Chicken breast, egg, flour, corn flakes, cheddar sauce, fries, pickled cucumbers, sweet chilli sauce.'
        ),
        price: 57,
        weight: '600g',
        allergens: '1,3,7',
        image: m('crispy/triple')
      },
      {
        name: p('Crispy Chicken', 'Crispy Chicken'),
        description: p(
          'Piept pui, ou, făină, fulgi de porumb, boia dulce, cartofi prăjiți, sos usturoi.',
          'Chicken breast, egg, flour, corn flakes, sweet paprika, fries, garlic sauce.'
        ),
        price: 47,
        weight: '500g',
        allergens: '1,3,6',
        image: m('crispy/chicken')
      },
      {
        name: p('Crispy Wings', 'Crispy Wings'),
        description: p(
          'Aripi pui, ou, făină, fulgi de porumb, boia dulce, cartofi prăjiți, sos usturoi.',
          'Chicken wings, egg, flour, corn flakes, sweet paprika, fries, garlic sauce.'
        ),
        price: 43,
        weight: '550g',
        allergens: '1,3,6',
        image: m('crispy/wings')
      }
    ]
  },
  {
    id: 18,
    slug: 'paste',
    prettyName: p('Paste', 'Pasta'),
    description: p('Paste italiene autentice.', 'Authentic Italian pasta.'),
    plates: [
      {
        name: p('Tagliatelle cu fructe de mare', 'Seafood tagliatelle'),
        description: p(
          'Tagliatelle, creveți, midii, tentacule, calamar, usturoi, vin alb, cherry, pătrunjel, unt, sos roșii.',
          'Tagliatelle, shrimps, mussels, tentacles, squid, garlic, white wine, cherry tomatoes, parsley, butter, tomato sauce.'
        ),
        price: 59,
        weight: '400g',
        allergens: '1,2,3,7,12,14',
        image: m('paste/tagliatelle-fm')
      },
      {
        name: p('Spaghete GurMANDU', 'GurMANDU Spaghetti'),
        description: p(
          'Spaghete, salam vară, cârnați afumați, ciuperci, ardei, usturoi, sos roșii, oregano, ardei iute, mozzarella.',
          'Spaghetti, salami, smoked sausages, mushrooms, pepper, garlic, tomato sauce, oregano, chili, mozzarella.'
        ),
        price: 55,
        weight: '500g',
        allergens: '1,3,6,7',
        image: m('paste/spaghete-gurmandu')
      },
      {
        name: p('Spaghete Carbonara', 'Spaghetti Carbonara'),
        description: p(
          'Spaghete, Gran Cucina, bacon, usturoi, parmezan, ou.',
          'Spaghetti, Gran Cucina, bacon, garlic, parmesan, egg.'
        ),
        price: 45,
        weight: '350g',
        allergens: '1,3,7',
        image: m('paste/carbonara')
      },
      {
        name: p('Tagliatelle Siciliene', 'Sicilian Tagliatelle'),
        description: p(
          'Tagliatelle, piept pui, bacon, sos roșii, busuioc, Gran Cucina, usturoi, ceapă, parmezan.',
          'Tagliatelle, chicken breast, bacon, tomato sauce, basil, Gran Cucina, garlic, onion, parmesan.'
        ),
        price: 47,
        weight: '400g',
        allergens: '1,6,7',
        image: m('paste/siciliene')
      },
      {
        name: p('Penne Arrabbiata', 'Penne Arrabbiata'),
        description: p('Penne, sos roșii, busuioc, roșii cherry.', 'Penne, tomato sauce, basil, cherry tomatoes.'),
        price: 29,
        weight: '300g',
        allergens: '1',
        image: m('paste/arrabbiata')
      }
    ]
  },
  {
    id: 19,
    slug: 'pizza',
    prettyName: p('Pizza', 'Pizza'),
    description: p('Pizza 32cm, blat subțire, copt în cuptor.', '32cm pizza, thin crust, oven-baked.'),
    plates: [
      {
        name: p('Pizza GurMANDU', 'Pizza GurMANDU'),
        description: p(
          'Mozzarella, sos roșii, bacon, salam, șuncă, ciuperci, măsline, ardei roșu.',
          'Mozzarella, tomato sauce, bacon, salami, ham, mushrooms, olives, red pepper.'
        ),
        price: 48,
        weight: '600g',
        allergens: '1,3,6,7',
        image: m('pizza/gurmandu')
      },
      {
        name: p('Pizza Quattro Stagioni', 'Pizza Quattro Stagioni'),
        description: p(
          'Mozzarella, sos roșii, șuncă, bacon, ciuperci, măsline.',
          'Mozzarella, tomato sauce, ham, bacon, mushrooms, olives.'
        ),
        price: 46,
        weight: '550g',
        allergens: '1,3,6,7',
        image: m('pizza/quattro-stagioni')
      },
      {
        name: p('Pizza Salami', 'Pizza Salami'),
        description: p(
          'Mozzarella, sos roșii, salam, ardei roșu, ciuperci, măsline.',
          'Mozzarella, tomato sauce, salami, red pepper, mushrooms, olives.'
        ),
        price: 46,
        weight: '500g',
        allergens: '1,3,6,7',
        image: m('pizza/salami')
      },
      {
        name: p('Pizza Diavola', 'Pizza Diavola'),
        description: p(
          'Mozzarella, sos roșii, chorizo, peperoncini.',
          'Mozzarella, tomato sauce, chorizo, peperoncini.'
        ),
        price: 46,
        weight: '500g',
        allergens: '1,3,6,7',
        image: m('pizza/diavola')
      },
      {
        name: p('Pizza Capriciosa', 'Pizza Capriciosa'),
        description: p('Mozzarella, sos roșii, șuncă, ciuperci.', 'Mozzarella, tomato sauce, ham, mushrooms.'),
        price: 46,
        weight: '500g',
        allergens: '1,3,6,7',
        image: m('pizza/capriciosa')
      },
      {
        name: p('Pizza cu pui', 'Chicken Pizza'),
        description: p(
          'Mozzarella, sos roșii, piept pui, parmezan, ciuperci, porumb.',
          'Mozzarella, tomato sauce, chicken breast, parmesan, mushrooms, corn.'
        ),
        price: 46,
        weight: '500g',
        allergens: '1,3,7',
        image: m('pizza/pui')
      },
      {
        name: p('Pizza Margherita', 'Pizza Margherita'),
        description: p('Mozzarella, sos roșii, ciuperci, oregano.', 'Mozzarella, tomato sauce, mushrooms, oregano.'),
        price: 42,
        weight: '500g',
        allergens: '1,3,7',
        image: m('pizza/margherita')
      },
      {
        name: p('Pizza Țărănească', 'Country Pizza'),
        description: p(
          'Mozzarella, sos roșii, bacon, salam, șuncă, porumb, ciuperci, ceapă, măsline.',
          'Mozzarella, tomato sauce, bacon, salami, ham, corn, mushrooms, onion, olives.'
        ),
        price: 48,
        weight: '550g',
        allergens: '1,3,6,7',
        image: m('pizza/taraneasca')
      },
      {
        name: p('Pizza Quattro Formaggi', 'Pizza Quattro Formaggi'),
        description: p(
          'Mozzarella, Gran Cucina, gorgonzola, parmezan.',
          'Mozzarella, Gran Cucina, gorgonzola, parmesan.'
        ),
        price: 46,
        weight: '500g',
        allergens: '1,3,7',
        image: m('pizza/quattro-formaggi')
      },
      {
        name: p('Pizza cu ton', 'Tuna Pizza'),
        description: p(
          'Mozzarella, sos roșii, ton, ceapă roșie, porumb.',
          'Mozzarella, tomato sauce, tuna, red onion, corn.'
        ),
        price: 48,
        weight: '500g',
        allergens: '1,3,4,7',
        image: m('pizza/ton')
      },
      { name: p('Parmezan', 'Parmesan'), description: p('', ''), price: 5, weight: '50g' },
      { name: p('Gorgonzola', 'Gorgonzola'), description: p('', ''), price: 5, weight: '50g' },
      { name: p('Mozzarella', 'Mozzarella'), description: p('', ''), price: 5, weight: '50g' },
      { name: p('Ciuperci', 'Mushrooms'), description: p('', ''), price: 3, weight: '50g' },
      { name: p('Bacon', 'Bacon'), description: p('', ''), price: 5, weight: '50g' },
      { name: p('Salam uscat', 'Cured salami'), description: p('', ''), price: 5, weight: '50g' },
      { name: p('Șuncă Praga', 'Prague ham'), description: p('', ''), price: 5, weight: '50g' },
      { name: p('Cârnați afumați', 'Smoked sausages'), description: p('', ''), price: 5, weight: '50g' },
      { name: p('Măsline', 'Olives'), description: p('', ''), price: 3, weight: '50g' },
      { name: p('Porumb', 'Corn'), description: p('', ''), price: 3, weight: '50g' }
    ]
  },
  {
    id: 22,
    slug: 'desert',
    prettyName: p('Desert', 'Desserts'),
    description: p('Deserturi dulci, pentru final perfect.', 'Sweet desserts for the perfect finish.'),
    plates: [
      {
        name: p('Clătite GurMANDU', 'GurMANDU pancakes'),
        description: p('Făină, ouă, lapte, brânză de vaci, stafide.', 'Flour, eggs, milk, cottage cheese, raisins.'),
        price: 38,
        weight: '350g',
        allergens: '1,3,7',
        image: m('desert/clatite-gurmandu')
      },
      {
        name: p('Clătite cu dulceață', 'Pancakes with jam'),
        description: p('Făină, ouă, lapte, dulceață vișine/afine.', 'Flour, eggs, milk, sour cherry/blueberry jam.'),
        price: 32,
        weight: '200g',
        allergens: '1,3,7',
        image: m('desert/clatite-dulceata')
      },
      {
        name: p('Clătite cu sos de vanilie și nuci', 'Pancakes with vanilla sauce and nuts'),
        description: p('Făină, ouă, lapte, vanilie, nuci.', 'Flour, eggs, milk, vanilla, nuts.'),
        price: 32,
        weight: '250g',
        allergens: '1,3,7,8',
        image: m('desert/clatite-vanilie')
      },
      {
        name: p('Clătite cu Nutella', 'Pancakes with Nutella'),
        description: p('Făină, ouă, lapte, Nutella.', 'Flour, eggs, milk, Nutella.'),
        price: 32,
        weight: '200g',
        image: m('desert/clatite-nutella')
      },
      {
        name: p('Papanași cu dulceață', 'Papanasi with jam'),
        description: p('Brânză vaci, ou, făină, smântână, dulceață.', 'Cottage cheese, egg, flour, cream, jam.'),
        price: 36,
        weight: '300g',
        allergens: '1,3,7',
        image: m('desert/papanasi')
      },
      {
        name: p('Lava cake cu înghețată', 'Lava cake with ice cream'),
        description: p('Făină, ouă, lapte, cacao, înghețată.', 'Flour, eggs, milk, cocoa, ice cream.'),
        price: 34,
        weight: '200g',
        allergens: '1,3,7',
        image: m('desert/lava-cake')
      },
      {
        name: p('Înghețată', 'Ice cream'),
        description: p(
          'Vanilie, ciocolată, mentă, fructe de pădure, pepene, cireșe.',
          'Vanilla, chocolate, mint, forest fruits, watermelon, cherry.'
        ),
        price: 34,
        weight: '200g',
        image: m('desert/inghetata')
      }
    ]
  },
  {
    id: 20,
    slug: 'garnituri',
    prettyName: p('Garnituri', 'Sides'),
    description: p('Garnituri pentru a-ți completa masa.', 'Sides to complete your meal.'),
    plates: [
      {
        name: p('Cartofi prăjiți', 'French fries'),
        description: p('Cartofi prăjiți simpli.', 'Plain french fries.'),
        price: 15,
        weight: '150g',
        image: m('garnituri/cartofi')
      },
      {
        name: p('Cartofi prăjiți cu brânză rasă', 'French fries with telemea'),
        description: p('Cu telemea.', 'With telemea cheese.'),
        price: 18,
        weight: '200g',
        allergens: '7',
        image: m('garnituri/cartofi-branza')
      },
      {
        name: p('Cartofi prăjiți cu brânză și usturoi', 'French fries with telemea and garlic'),
        description: p('Cu telemea și usturoi.', 'With telemea and garlic.'),
        price: 20,
        weight: '200g',
        allergens: '7',
        image: m('garnituri/cartofi-branza-usturoi')
      },
      {
        name: p('Chips din cartofi', 'Potato chips'),
        description: p('Chips proaspăt prăjit.', 'Freshly fried chips.'),
        price: 15,
        weight: '150g',
        image: m('garnituri/chips')
      },
      {
        name: p('Piure de cartofi', 'Mashed potatoes'),
        description: p('Cartof, lapte, unt.', 'Potato, milk, butter.'),
        price: 15,
        weight: '200g',
        allergens: '7'
      },
      {
        name: p('Piure cu trufe', 'Mashed potatoes with truffles'),
        description: p('Cartof, lapte, unt, pastă de trufe.', 'Potato, milk, butter, truffle paste.'),
        price: 22,
        weight: '200g',
        allergens: '7'
      },
      {
        name: p('Orez Basmati', 'Basmati rice'),
        description: p('Orez basmati simplu.', 'Plain basmati rice.'),
        price: 12,
        weight: '200g'
      },
      {
        name: p('Orez Basmati cu ciuperci', 'Basmati rice with mushrooms'),
        description: p('Orez basmati, ciuperci, unt.', 'Basmati rice, mushrooms, butter.'),
        price: 15,
        weight: '250g',
        allergens: '7'
      },
      {
        name: p('Risotto', 'Risotto'),
        description: p('Orez basmati, parmezan, unt, vin alb.', 'Basmati rice, parmesan, butter, white wine.'),
        price: 22,
        weight: '250g',
        allergens: '7,12'
      },
      {
        name: p('Legume la grătar', 'Grilled vegetables'),
        description: p('Ciuperci, ardei roșu, roșie, ceapă.', 'Mushrooms, red pepper, tomato, onion.'),
        price: 25,
        weight: '200g'
      },
      {
        name: p('Ciuperci sote', 'Sauteed mushrooms'),
        description: p(
          'Ciuperci, ceapă, usturoi, vin alb, unt, mărar.',
          'Mushrooms, onion, garlic, white wine, butter, dill.'
        ),
        price: 19,
        weight: '200g',
        allergens: '7,12'
      }
    ]
  },
  {
    id: 21,
    slug: 'salate',
    prettyName: p('Salate', 'Salads'),
    description: p('Salate simple, proaspete.', 'Simple, fresh salads.'),
    plates: [
      {
        name: p('Salată verde', 'Green salad'),
        description: p('Salată verde simplă.', 'Simple green salad.'),
        price: 15,
        weight: '150g'
      },
      {
        name: p('Salată de varză', 'Cabbage salad'),
        description: p('Varză, oțet, ulei, mărar, piper.', 'Cabbage, vinegar, oil, dill, pepper.'),
        price: 15,
        weight: '150g'
      },
      {
        name: p('Salată de roșii cu brânză', 'Tomato and telemea salad'),
        description: p('Roșii cu telemea.', 'Tomato with telemea cheese.'),
        price: 15,
        weight: '200g',
        allergens: '7'
      },
      {
        name: p('Salată de vară', 'Summer salad'),
        description: p('Roșii, castraveți, ceapă.', 'Tomato, cucumber, onion.'),
        price: 15,
        weight: '200g'
      },
      {
        name: p('Salată de castraveți murați', 'Pickled cucumber salad'),
        description: p('Castraveți murați.', 'Pickled cucumbers.'),
        price: 15,
        weight: '150g'
      },
      {
        name: p('Salată de murături asortate', 'Mixed pickles'),
        description: p('Murături asortate.', 'Assorted pickles.'),
        price: 15,
        weight: '150g'
      },
      {
        name: p('Salată de ardei copt', 'Baked pepper salad'),
        description: p('Ardei copt.', 'Baked pepper.'),
        price: 15,
        weight: '150g'
      }
    ]
  },
  {
    id: 23,
    slug: 'sosuri',
    prettyName: p('Sosuri', 'Sauces'),
    description: p('Sosuri de însoțire.', 'Side sauces.'),
    plates: [
      { name: p('Maioneză', 'Mayonnaise'), description: p('', ''), price: 5, weight: '', allergens: '3,10' },
      { name: p('Sos de usturoi', 'Garlic sauce'), description: p('', ''), price: 5, weight: '' },
      { name: p('Sos de roșii', 'Tomato sauce'), description: p('', ''), price: 5, weight: '' },
      { name: p('Ketchup (dulce/picant)', 'Ketchup (sweet/spicy)'), description: p('', ''), price: 5, weight: '' },
      { name: p('Sos burger', 'Burger sauce'), description: p('', ''), price: 5, weight: '' },
      { name: p('Sos barbeque', 'Barbeque sauce'), description: p('', ''), price: 5, weight: '' },
      { name: p('Sos gorgonzola', 'Gorgonzola sauce'), description: p('', ''), price: 5, weight: '', allergens: '7' },
      { name: p('Sos chimichurri', 'Chimichurri sauce'), description: p('', ''), price: 5, weight: '' },
      { name: p('Muștar', 'Mustard'), description: p('', ''), price: 5, weight: '', allergens: '10' },
      { name: p('Mujdei de usturoi', 'Garlic mujdei'), description: p('', ''), price: 5, weight: '' },
      { name: p('Sos sweet chilli', 'Sweet chilli sauce'), description: p('', ''), price: 5, weight: '' },
      { name: p('Sos de soia', 'Soy sauce'), description: p('', ''), price: 5, weight: '', allergens: '6' }
    ]
  },
  {
    id: 24,
    slug: 'extra',
    prettyName: p('Extra', 'Extras'),
    description: p('Adaosuri și acompaniamente.', 'Add-ons and accompaniments.'),
    plates: [
      {
        name: p('Painea casei', 'House bread'),
        description: p('', ''),
        price: 4,
        weight: '200g',
        allergens: '1',
        image: m('extra/painea-casei')
      },
      { name: p('Pita grecească', 'Greek pita'), description: p('', ''), price: 4, weight: '100g', allergens: '1' },
      { name: p('Mămăliguță', 'Polenta'), description: p('', ''), price: 5, weight: '150g', allergens: '1' },
      { name: p('Brânză rasă', 'Grated cheese'), description: p('', ''), price: 7, weight: '80g', allergens: '7' },
      { name: p('Smântână', 'Sour cream'), description: p('', ''), price: 4, weight: '50g', allergens: '7' },
      { name: p('Hrean', 'Horseradish'), description: p('', ''), price: 4, weight: '50g' },
      { name: p('Ardei iute', 'Chili pepper'), description: p('', ''), price: 2, weight: '' }
    ]
  }
]
