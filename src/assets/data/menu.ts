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
  nutrition?: string
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
        image: m('mic-dejun/omleta-simpla'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 177.81kcal/177.81kJ, Grasimi: 14.13gr, din care: Acizi grasi saturati: 3.51gr, Glucide: 1.21gr, din care: Zaharuri: 0.19gr, Proteine: 11.75gr, Sare: 0.590 | Informatii Nutritionale 212.00gr - Valoare energetica: 376.95kcal/1575.651kJ, Grasimi: 29.95gr, din care: Acizi grasi saturati: 7.44gr, Glucide: 2.57gr, din care: Zaharuri: 0.41gr, Proteine: 24.91gr, Sare: 1.25gr'
      },
      {
        name: p('Omletă cu cașcaval', 'Cheese omelette'),
        description: p('Ouă, cașcaval, mix salată verde.', 'Eggs, cheese, green salad mix.'),
        price: 30,
        weight: '300g',
        allergens: '3,7',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 195.42kcal/195.42kJ, Grasimi: 15.48gr, din care: Acizi grasi saturati: 5.11gr, Glucide: 1.00gr, din care: Zaharuri: 0.17gr, Proteine: 13.27gr, Sare: 1.422 | Informatii Nutritionale 263.00gr - Valoare energetica: 513.95kcal/2148.311kJ, Grasimi: 40.70gr, din care: Acizi grasi saturati: 13.44gr, Glucide: 2.62gr, din care: Zaharuri: 0.46gr, Proteine: 34.91gr, Sare: 3.74gr'
      },
      {
        name: p('Omletă cu brânză', 'White cheese omelette'),
        description: p('Ouă, brânză, mix salată verde.', 'Eggs, white cheese, green salad mix.'),
        price: 30,
        weight: '300g',
        allergens: '3,7',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 195.42kcal/195.42kJ, Grasimi: 15.48gr, din care: Acizi grasi saturati: 5.11gr, Glucide: 1.00gr, din care: Zaharuri: 0.17gr, Proteine: 13.27gr, Sare: 1.422 | Informatii Nutritionale 263.00gr - Valoare energetica: 513.95kcal/2148.311kJ, Grasimi: 40.70gr, din care: Acizi grasi saturati: 13.44gr, Glucide: 2.62gr, din care: Zaharuri: 0.46gr, Proteine: 34.91gr, Sare: 3.74gr'
      },
      {
        name: p('Omletă cu șuncă', 'Ham omelette'),
        description: p('Ouă, șuncă, mix salată verde.', 'Eggs, ham, green salad mix.'),
        price: 32,
        weight: '300g',
        allergens: '3',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 198.06kcal/198.06kJ, Grasimi: 15.63gr, din care: Acizi grasi saturati: 5.16gr, Glucide: 1.32gr, din care: Zaharuri: 0.23gr, Proteine: 13.24gr, Sare: 1.234 | Informatii Nutritionale 312.00gr - Valoare energetica: 617.95kcal/2583.031kJ, Grasimi: 48.75gr, din care: Acizi grasi saturati: 16.09gr, Glucide: 4.12gr, din care: Zaharuri: 0.71gr, Proteine: 41.31gr, Sare: 3.85gr'
      },
      {
        name: p('Omletă cu șuncă și cașcaval', 'Cheese and ham omelette'),
        description: p('Ouă, șuncă, cașcaval, mix salată verde.', 'Eggs, ham, cheese, green salad mix.'),
        price: 35,
        weight: '350g',
        allergens: '3,7',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 198.06kcal/198.06kJ, Grasimi: 15.63gr, din care: Acizi grasi saturati: 5.16gr, Glucide: 1.32gr, din care: Zaharuri: 0.23gr, Proteine: 13.24gr, Sare: 1.234 | Informatii Nutritionale 312.00gr - Valoare energetica: 617.95kcal/2583.031kJ, Grasimi: 48.75gr, din care: Acizi grasi saturati: 16.09gr, Glucide: 4.12gr, din care: Zaharuri: 0.71gr, Proteine: 41.31gr, Sare: 3.85gr'
      },
      {
        name: p('Omletă cu ciuperci', 'Mushrooms omelette'),
        description: p('Ouă, ciuperci, mix salată verde.', 'Eggs, mushrooms, green salad mix.'),
        price: 30,
        weight: '300g',
        allergens: '3',
        nutrition:
          'Informatii Nutritionale 100gr - Valoare energetica: 177.81kcal/177.81kJ, Grasimi: 14.13gr, din care: Acizi grasi saturati: 3.51gr, Glucide: 1.21gr, din care: Zaharuri: 0.19gr, Proteine: 11.75gr, Sare: 0.590 | Informatii Nutritionale 212.00gr - Valoare energetica: 376.95kcal/1575.651kJ, Grasimi: 29.95gr, din care: Acizi grasi saturati: 7.44gr, Glucide: 2.57gr, din care: Zaharuri: 0.41gr, Proteine: 24.91gr, Sare: 1.25gr'
      },
      {
        name: p('Omletă Gurmandu', 'Gurmandu omelette'),
        description: p(
          'Ouă, cârnați, bacon, ceapă, ardei roșu, mix salată verde.',
          'Eggs, sausages, bacon, onion, red pepper, green salad mix.'
        ),
        price: 38,
        weight: '350g',
        allergens: '3,6',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 177.81kcal/177.81kJ, Grasimi: 14.13gr, din care: Acizi grasi saturati: 3.51gr, Glucide: 1.21gr, din care: Zaharuri: 0.19gr, Proteine: 11.75gr, Sare: 0.590 | Informatii Nutritionale 212.00gr - Valoare energetica: 376.95kcal/1575.651kJ, Grasimi: 29.95gr, din care: Acizi grasi saturati: 7.44gr, Glucide: 2.57gr, din care: Zaharuri: 0.41gr, Proteine: 24.91gr, Sare: 1.25gr'
      },
      {
        name: p('Ouă ochiuri cu bacon', 'Scrambled eggs with bacon'),
        description: p('Ouă, bacon, mix salată verde.', 'Eggs, bacon, green salad mix.'),
        price: 27,
        weight: '250g',
        allergens: '3',
        image: m('mic-dejun/oua-bacon'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 234.71kcal/234.71kJ, Grasimi: 16.37gr, din care: Acizi grasi saturati: 3.61gr, Glucide: 6.44gr, din care: Zaharuri: 0.16gr, Proteine: 15.61gr, Sare: 0.817 | Informatii Nutritionale 262.00gr - Valoare energetica: 614.95kcal/2570.491kJ, Grasimi: 42.90gr, din care: Acizi grasi saturati: 9.46gr, Glucide: 16.87gr, din care: Zaharuri: 0.41gr, Proteine: 40.91gr, Sare: 2.14gr'
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
        image: m('mic-dejun/platou'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 264.20kcal/264.20kJ, Grasimi: 19.75gr, din care: Acizi grasi saturati: 7.45gr, Glucide: 4.82gr, din care: Zaharuri: 0.70gr, Proteine: 16.67gr, Sare: 1.376 | Informatii Nutritionale 500.00gr - Valoare energetica: 1321.00kcal/5521.78kJ, Grasimi: 98.73gr, din care: Acizi grasi saturati: 37.23gr, Glucide: 24.12gr, din care: Zaharuri: 3.48gr, Proteine: 83.37gr, Sare: 6.88gr'
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
        image: m('gustari-reci/salata-boeuf'),
        nutrition: 'Informatii nutritionale 100gr:Valoare energetica:1250kcal/163030kJ,Grasimi:34 gr,din care:Acizi grasi saturati:4,7gr,Glucide:9gr,din care :Zaharuri:2gr,Proteine:10gr,Sare:0.8gr'
      },
      {
        name: p('Salată de icre de crap', 'Carp roe salad'),
        description: p('Icre de crap, ceapă roșie, pâine prăjită.', 'Carp roe, red onion, toast.'),
        price: 29,
        weight: '150g',
        allergens: '1,4',
        image: m('gustari-reci/icre-crap'),
        nutrition: 'Informatii nutritionale 100gr:Valoare energetica:400kcal/1670kJ,Grasimi:29gr,din care Acizi grasi saturati:3.7gr,Glucide:28gr,din care zaharuri:3gr,Proteine:5gr,Sare:0.7gr'
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
        image: m('gustari-reci/fasole-batuta'),
        nutrition: 'Informatii nutritionale 100gr: Valoare energetica:190kcal/800kJ,Grasimi:11gr,din care Acizi grasi saturati:1.2gr,Glucide:17gr,din care Zaharuri:1.3gr,Proteine:6gr,Sare:0.7gr'
      },
      {
        name: p('Salată de vinete', 'Eggplant salad'),
        description: p('Vinete, ceapă, usturoi, pâine prăjită.', 'Eggplant, onion, garlic, toast.'),
        price: 23,
        weight: '170g',
        allergens: '1',
        image: m('gustari-reci/salata-vinete'),
        nutrition: 'Informatii nutritionale 100gr:Valoare energetica:260kcal/1090kJ,Grasimi:22gr,din care Acizi grasi saturati:2.5gr,Glucide:9gr,din care Zaharuri:3gr,Proteine:1.5gr,Sare:0.7gr'
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
        image: m('gustari-reci/zacusca'),
        nutrition: 'Informatii nutritionale 100gr:Valoare energetica:190kcal/795kJ,Grasimi:15gr,din care Acizi grasi saturati:1.8gr,Glucide,din care Zaharuri:6gr,Proteine:1.5gr,Sare:0.9gr'
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
        image: m('gustari-reci/mix-salate'),
        nutrition: 'Informatii nutritionale 100gr:Valoare energetica:255kcal/1060kJ,Grasimi:18gr,din care Acizi grasi saturati:2.7gr,Glucide:17gr,din care Zaharuri:2.7gr,Proteine:6.5gr,Sare:0.8gr'
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
        image: m('gustari-reci/mix-branzeturi'),
        nutrition: 'Informatii nutritionale 100grValoare energetica:390kcal/1620kJ,Grasimi:28gr,din care Acizi grasi saturati14gr,Glucide:16gr,diin care Zaharuri:8gr,Proteine:20gr,Sare:1.2gr'
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
        image: m('gustari-calde/cascaval-pane'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 330.93kcal/330.93kJ, Grasimi: 23.31gr, din care: Acizi grasi saturati: 5.93gr, Glucide: 19.07gr, din care: Zaharuri: 0.85gr, Proteine: 11.86gr, Sare: 1.695 | Informatii Nutritionale 2.36gr - Valoare energetica: 7.81kcal/32.6458kJ, Grasimi: 0.55gr, din care: Acizi grasi saturati: 0.14gr, Glucide: 0.45gr, din care: Zaharuri: 0.02gr, Proteine: 0.28gr, Sare: 0.04gr'
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
        image: m('gustari-calde/clatite-pui'),
        nutrition: 'Informatii nutritionale 100gr:Valoare energetica:175kcal/730kJ,Grasimi:6.5gr,din care Acizi grasi saturati:2.7gr,Glucide:15gr,din care Zaharuri:2gr,Proteine:14gr,Sare:0.6gr'
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
        image: m('gustari-calde/creveti-panko'),
        nutrition: 'Informatii nutritionale 100gr:Valoare energetica:245kcal/1025kJ,Grasimi:4gr,din care Acizi grasi saturati:0.7gr,Glucide:35gr,din care Zaharuri:6gr,Proteine 14gr,Sare:0.7gr'
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
        image: m('gustari-calde/calamar-pane'),
        nutrition: 'Informatii nutritionale 100gr:Valoare energetica:235kcal/990kJ,Grasimi:3gr,din care Acizi grasi saturati:0.7gr,Glucide:35gr,din care Zaharuri:6gr,Proteine 14gr,Sare:0.7gr'
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
        image: m('ciorbe/ciorba-burta'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 86.12kcal/86.12kJ, Grasimi: 3.48gr, din care: Acizi grasi saturati: 1.31gr, Glucide: 7.83gr, din care: Zaharuri: 2.97gr, Proteine: 6.07gr, Sare: 0.359 | Informatii Nutritionale 487.00gr - Valoare energetica: 419.40kcal/1753.092kJ, Grasimi: 16.94gr, din care: Acizi grasi saturati: 6.36gr, Glucide: 38.15gr, din care: Zaharuri: 14.44gr, Proteine: 29.58gr, Sare: 1.75gr'
      },
      {
        name: p('Ciorbă de porc afumat', 'Smoked pork soup'),
        description: p(
          'Pulpă porc afumată, oase afumate, ceapă, morcov, ardei, cartof, roșii, pătrunjel.',
          'Smoked pork leg, smoked bones, onion, carrot, pepper, potato, tomato, parsley.'
        ),
        price: 38,
        weight: '350ml',
        image: m('ciorbe/ciorba-porc'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 119.79kcal/119.79kJ, Grasimi: 6.42gr, din care: Acizi grasi saturati: 1.96gr, Glucide: 9.70gr, din care: Zaharuri: 3.62gr, Proteine: 5.60gr, Sare: 0.449 | Informatii Nutritionale 470.00gr - Valoare energetica: 563.00kcal/2353.34kJ, Grasimi: 30.17gr, din care: Acizi grasi saturati: 9.20gr, Glucide: 45.58gr, din care: Zaharuri: 17.03gr, Proteine: 26.34gr, Sare: 2.11gr*provenit din produse congelate'
      },
      {
        name: p('Supă cremă de legume', 'Vegetable cream soup'),
        description: p('Morcov, ceapă, ardei roșu, țelină.', 'Carrot, onion, red pepper, celery.'),
        price: 25,
        weight: '350ml',
        allergens: '1,9',
        image: m('ciorbe/supa-legume'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 64.64kcal/64.64kJ, Grasimi: 1.71gr, din care: Acizi grasi saturati: 0.46gr, Glucide: 11.71gr, din care: Zaharuri: 2.93gr, Proteine: 1.28gr, Sare: 0.575 | Informatii Nutritionale 400.00gr - Valoare energetica: 258.56kcal/1080.7808kJ, Grasimi: 6.82gr, din care: Acizi grasi saturati: 1.83gr, Glucide: 46.83gr, din care: Zaharuri: 11.73gr, Proteine: 5.10gr, Sare: 2.30gr'
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
        image: m('ciorbe/supa-fructe-mare'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 75kcal/310kJ, Grasimi: 1.2gr, din care: Acizi grasi saturati: 0.3gr, Glucide: 5gr, din care: Zaharuri: 2.3gr, Proteine: 11gr, Sare: 0.7 | Informatii Nutritionale 400.00gr - Valoare energetica: 260kcal/1090kJ, Grasimi: 4gr, din care: Acizi grasi saturati: 1gr, Glucide: 18gr, din care: Zaharuri: 8gr, Proteine: 38gr, Sare: 2.5gr'
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
        image: m('salate-aperitiv/caesar'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 211.73kcal/211.73kJ, Grasimi: 17.26gr, din care: Acizi grasi saturati: 4.56gr, Glucide: 7.86gr, din care: Zaharuri: 0.73gr, Proteine: 6.57gr, Sare: 0.737 | Informatii Nutritionale 400.00gr - Valoare energetica: 635.19kcal/2655.0942kJ, Grasimi: 51.78gr, din care: Acizi grasi saturati: 13.67gr, Glucide: 23.59gr, din care: Zaharuri: 2.19gr, Proteine: 19.70gr, Sare: 2.21gr'
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
        image: m('salate-aperitiv/bulgareasca'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 120kcal/500kJ, Grasimi: 9.4gr, din care: Acizi grasi saturati: 3.1gr, Glucide: 2.3gr, din care: Zaharuri: 1.1gr, Proteine: 6.8gr, Sare: 1.3 | Informatii Nutritionale 400.00gr - Valoare energetica: 420kcal/2713.656kJ, Grasimi: 33gr, din care: Acizi grasi saturati: 11gr, Glucide: 8gr, din care: Zaharuri: 4gr, Proteine: 24gr, Sare: 4.5gr'
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
        image: m('salate-aperitiv/greceasca'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 162.30kcal/162.30kJ, Grasimi: 15.06gr, din care: Acizi grasi saturati: 3.92gr, Glucide: 3.88gr, din care: Zaharuri: 1.87gr, Proteine: 2.81gr, Sare: 0.283 | Informatii Nutritionale 400.00gr - Valoare energetica: 649.20kcal/2713.656kJ, Grasimi: 60.24gr, din care: Acizi grasi saturati: 15.69gr, Glucide: 15.53gr, din care: Zaharuri: 7.47gr, Proteine: 11.23gr, Sare: 1.13gr'
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
        image: m('snitzels-gurmandu/pui'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 290.29kcal/290.29kJ, Grasimi: 24.27gr, din care: Acizi grasi saturati: 4.99gr, Glucide: 1.18gr, din care: Zaharuri: 0.36gr, Proteine: 16.85gr, Sare: 1.116 | Informatii Nutritionale 320.00gr - Valoare energetica: 928.93kcal/3882.9274kJ, Grasimi: 77.66gr, din care: Acizi grasi saturati: 15.97gr, Glucide: 3.79gr, din care: Zaharuri: 1.16gr, Proteine: 53.91gr, Sare: 3.57gr'
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
        image: m('snitzels-gurmandu/porc'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 245kcal/1025kJ, Grasimi: 24.27gr, din care: Acizi grasi saturati: 4.99gr, Glucide: 1.18gr, din care: Zaharuri: 0.36gr, Proteine: 16.85gr, Sare: 1.116 | Informatii Nutritionale 320.00gr - Valoare energetica: 928.93kcal/3882.9274kJ, Grasimi: 77.66gr, din care: Acizi grasi saturati: 15.97gr, Glucide: 3.79gr, din care: Zaharuri: 1.16gr, Proteine: 53.91gr, Sare: 3.57gr'
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
        image: m('snitzels-gurmandu/vita'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 290.29kcal/290.29kJ, Grasimi: 24.27gr, din care: Acizi grasi saturati: 4.99gr, Glucide: 1.18gr, din care: Zaharuri: 0.36gr, Proteine: 16.85gr, Sare: 1.116 | Informatii Nutritionale 320.00gr - Valoare energetica: 928.93kcal/3882.9274kJ, Grasimi: 77.66gr, din care: Acizi grasi saturati: 15.97gr, Glucide: 3.79gr, din care: Zaharuri: 1.16gr, Proteine: 53.91gr, Sare: 3.57gr'
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
        image: m('snitzels/pui'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 382.13kcal/382.13kJ, Grasimi: 34.65gr, din care: Acizi grasi saturati: 4.84gr, Glucide: 10.45gr, din care: Zaharuri: 0.39gr, Proteine: 8.36gr, Sare: 1.310 | Informatii Nutritionale 174.00gr - Valoare energetica: 664.90kcal/2779.282kJ, Grasimi: 60.29gr, din care: Acizi grasi saturati: 8.43gr, Glucide: 18.19gr, din care: Zaharuri: 0.67gr, Proteine: 14.54gr, Sare: 2.28gr'
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
        image: m('snitzels/porc'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 168.75kcal/168.75kJ, Grasimi: 7.72gr, din care: Acizi grasi saturati: 2.71gr, Glucide: 5.88gr, din care: Zaharuri: 0.82gr, Proteine: 18.32gr, Sare: 0.829 | Informatii Nutritionale 350.00gr - Valoare energetica: 590.62kcal/2468.7916kJ, Grasimi: 27.01gr, din care: Acizi grasi saturati: 9.50gr, Glucide: 20.57gr, din care: Zaharuri: 2.87gr, Proteine: 64.12gr, Sare: 2.90gr'
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
        image: m('snitzels/vita'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 168.75kcal/168.75kJ, Grasimi: 7.72gr, din care: Acizi grasi saturati: 2.71gr, Glucide: 5.88gr, din care: Zaharuri: 0.82gr, Proteine: 18.32gr, Sare: 0.829 | Informatii Nutritionale 350.00gr - Valoare energetica: 594.62kcal/2468.7916kJ, Grasimi: 27.01gr, din care: Acizi grasi saturati: 9.50gr, Glucide: 20.57gr, din care: Zaharuri: 2.87gr, Proteine: 64.12gr, Sare: 2.90gr'
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
        image: m('specialitati/pastrama-miel-ceaun'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 241.38kcal/241.38kJ, Grasimi: 6.06gr, din care: Acizi grasi saturati: 3.37gr, Glucide: 35.91gr, din care: Zaharuri: 0.80gr, Proteine: 11.85gr, Sare: 1.100 | Informatii Nutritionale 400.00gr - Valoare energetica: 965.51kcal/4035.8318kJ, Grasimi: 24.23gr, din care: Acizi grasi saturati: 13.48gr, Glucide: 143.62gr, din care: Zaharuri: 3.19gr, Proteine: 47.38gr, Sare: 4.40gr'
      },
      {
        name: p('Jumătate de pui la cuptor', 'Half oven-baked chicken'),
        description: p('Cu cartofi prăjiți și sos de usturoi.', 'With french fries and garlic sauce.'),
        price: 55,
        weight: '600g',
        image: m('specialitati/pui-cuptor'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 242kcal/1010kJ, Grasimi: 15.3gr, din care: Acizi grasi saturati: 3gr, Glucide: 7.5gr, din care: Zaharuri: 0.3gr, Proteine: 18gr, Sare: 0.58gr | Informatii Nutritionale 600.00gr - Valoare energetica: 1450kcal/6060kJ, Grasimi: 92gr, din care: Acizi grasi saturati: 18gr, Glucide: 45gr, din care: Zaharuri: 2gr, Proteine: 108gr, Sare: 3.5gr'
      },
      {
        name: p('Cocoșel la ceaun', 'Roasted cockerel'),
        description: p('Cu mujdei de usturoi și mămăliguță.', 'With garlic sauce and polenta.'),
        price: 65,
        weight: '650g',
        allergens: '1',
        image: m('specialitati/cocosel'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 255.42kcal/255.42kJ, Grasimi: 14.00gr, din care: Acizi grasi saturati: 3.71gr, Glucide: 20.09gr, din care: Zaharuri: 0.31gr, Proteine: 12.28gr, Sare: 0.333 | Informatii Nutritionale 700.00gr - Valoare energetica: 1787.93kcal/7473.5474kJ, Grasimi: 97.99gr, din care: Acizi grasi saturati: 26.00gr, Glucide: 140.64gr, din care: Zaharuri: 2.19gr, Proteine: 85.96gr, Sare: 2.33gr'
      },
      {
        name: p('Bulz tradițional', 'Traditional bulz'),
        description: p('Brânză de burduf, mămăliguță, cârnați afumați.', 'Bellows cheese, polenta, smoked sausages.'),
        price: 42,
        weight: '400g',
        allergens: '1,7',
        image: m('specialitati/bulz'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 324.34kcal/324.34kJ, Grasimi: 15.88gr, din care: Acizi grasi saturati: 7.65gr, Glucide: 29.01gr, din care: Zaharuri: 1.32gr, Proteine: 16.14gr, Sare: 2.555 | Informatii Nutritionale 272.00gr - Valoare energetica: 882.20kcal/3687.596kJ, Grasimi: 43.18gr, din care: Acizi grasi saturati: 20.81gr, Glucide: 78.92gr, din care: Zaharuri: 3.60gr, Proteine: 43.90gr, Sare: 6.95gr'
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
        image: m('specialitati/iahnie'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 115.15kcal/115.15kJ, Grasimi: 3.71gr, din care: Acizi grasi saturati: 1.08gr, Glucide: 5.45gr, din care: Zaharuri: 1.93gr, Proteine: 15.28gr, Sare: 1.132 | Informatii Nutritionale 819.00gr - Valoare energetica: 943.05kcal/3941.949kJ, Grasimi: 30.39gr, din care: Acizi grasi saturati: 8.82gr, Glucide: 44.66gr, din care: Zaharuri: 15.77gr, Proteine: 125.14gr, Sare: 9.27gr'
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
        image: m('specialitati/tochitura'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 231kcal/965kJ, Grasimi: 14.3gr, din care: Acizi grasi saturati: 5gr, Glucide: 10.6gr, din care: Zaharuri: 1gr, Proteine: 13.5gr, Sare: 1.4 | Informatii Nutritionale 600gr - Valoare energetica: 985kcal/4120kJ, Grasimi: 61.2gr, din care: Acizi grasi saturati: 21.5gr, Glucide: 45.2gr, din care: Zaharuri: 4.3gr, Proteine: 57.8gr, Sare: 5.8gr'
      },
      {
        name: p('Tigaie picantă', 'Spicy pan'),
        description: p(
          'Ceafă, piept de pui, bacon, ceapă, ardei, ardei iute, sos roșii, usturoi, pătrunjel.',
          'Pork neck, chicken breast, bacon, onion, pepper, chili, tomato sauce, garlic, parsley.'
        ),
        price: 45,
        weight: '450g',
        image: m('specialitati/tigaie-picanta'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 214kcal/897kJ, Grasimi: 15.6gr, din care: Acizi grasi saturati: 4.4gr, Glucide: 3.1gr, din care: Zaharuri: 1.7gr, Proteine: 14.2gr, Sare: 0.7 | Informatii Nutritionale 450gr - Valoare energetica: 1215kcal/5085kJ, Grasimi: 88.4gr, din care: Acizi grasi saturati:24.8gr, Glucide: 17.6gr, din care: Zaharuri: 9.5gr, Proteine: 80.3gr, Sare:4.2gr*provenit din produse congelate'
      },
      {
        name: p('Tigaie ficăței de pui', 'Chicken liver pan'),
        description: p('Ficăței de pui, ceapă, vin alb.', 'Chicken liver, onion, white wine.'),
        price: 34,
        weight: '400g',
        allergens: '12',
        image: m('specialitati/ficatei'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 137.76kcal/137.76kJ, Grasimi: 1.58gr, din care: Acizi grasi saturati: 0.56gr, Glucide: 16.19gr, din care: Zaharuri: 0.98gr, Proteine: 14.67gr, Sare: 0.470 | Informatii Nutritionale 300.00gr - Valoare energetica: 413.29kcal/1727.5522kJ, Grasimi: 4.73gr, din care: Acizi grasi saturati: 1.69gr, Glucide: 48.56gr, din care: Zaharuri: 2.93gr, Proteine: 44.02gr, Sare: 1.41gr'
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
        image: m('gratar/boston-steak'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 245kcal/1025kJ, Grasimi: 16gr, din care: Acizi grasi saturati: 6gr, Glucide: 1gr, din care: Zaharuri: 0.5gr, Proteine: 24gr, Sare: 1.2 | Informatii Nutritionale 500.00gr - Valoare energetica: 1225kcal/5125kJ, Grasimi: 80gr, din care: Acizi grasi saturati: 30gr, Glucide: 5gr, din care: Zaharuri: 2.5gr, Proteine: 120gr, Sare:6gr'
      },
      {
        name: p('Mici GurMANDU', 'GurMANDU mici'),
        description: p('Mici porc-vită, muștar.', 'Pork-beef chopped meat, mustard.'),
        price: 34,
        weight: '300g',
        allergens: '10',
        image: m('gratar/mici'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 209.00kcal/299.00kJ, Grasimi: 14.85gr, din care: Acizi grasi saturati: 5.31gr, Glucide: 0.00gr, din care: Zaharuri: 0.00gr, Proteine: 26.91gr, Sare: 0.28 | Informatii Nutritionale 300gr - Valoare energetica: 299.30kcal/874.874kJ, Grasimi: 21.21gr, din care: Acizi grasi saturati: 7.39gr, Glucide: 0.00gr, din care: Zaharuri: 0.00gr, Proteine: 18.84gr, Sare: 0.4gr*provenit din produse congelate'
      },
      {
        name: p('Platou Mici GurMANDU', 'GurMANDU mici platter'),
        description: p('Mici porc-vită, muștar, cartofi prăjiți.', 'Pork-beef chopped meat, mustard, french fries.'),
        price: 149,
        weight: '1400g',
        allergens: '10',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 241kcal/1010kJ, Grasimi: 18.2gr, din care: Acizi grasi saturati: 6.8gr, Glucide: 4.1gr, din care: Zaharuri: 0.6gr, Proteine: 11.8gr, Sare: 0.64 | Informatii Nutritionale 1400gr - Valoare energetica: 3380kcal/14140kJ, Grasimi: 255gr, din care: Acizi grasi saturati: 95gr, Glucide: 58gr, din care: Zaharuri: 8gr, Proteine: 165gr, Sare: 9gr*provenit din produse congelate'
      },
      {
        name: p('Pastramă de miel', 'Lamb pastrami'),
        description: p('Pastramă de miel pe grătar.', 'Grilled lamb pastrami.'),
        price: 56,
        weight: '250g',
        image: m('gratar/pastrama-miel'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 294kcal/1230kJ, Grasimi: 22.36gr, din care: Acizi grasi saturati: 9.6gr, Glucide: 0.4gr, din care: Zaharuri: 0.1gr, Proteine: 21.6gr, Sare: 1.5 | Informatii Nutritionale 300gr - Valoare energetica: 735kcal/3075kJ, Grasimi: 56.5gr, din care: Acizi grasi saturati: 24gr, Glucide: 1gr, din care: Zaharuri: 0.2gr, Proteine: 54gr, Sare: 3.8gr*provenit din produse congelate'
      },
      {
        name: p('Cotlete de miel', 'Lamb chops'),
        description: p('Cotlete de miel pe grătar.', 'Grilled lamb chops.'),
        price: 75,
        weight: '250g',
        image: m('gratar/cotlete-miel'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 276kcal/1154kJ, Grasimi: 20.8gr, din care: Acizi grasi saturati: 9gr, Glucide: 0.00gr, din care: Zaharuri: 0.00gr, Proteine: 22.0gr, Sare: 0.7 | Informatii Nutritionale 300gr - Valoare energetica: 690kcal/2885kJ, Grasimi: 52.0gr, din care: Acizi grasi saturati: 22.5gr, Glucide: 0gr, din care: Zaharuri: 0gr, Proteine: 55gr, Sare: 1.8gr*provenit din produse congelate'
      },
      {
        name: p('Frigărui de porc', 'Pork skewers'),
        description: p('Cotlet de porc, ceapă, ardei roșu, ciuperci.', 'Pork chop, onion, red pepper, mushrooms.'),
        price: 42,
        weight: '350g',
        image: m('gratar/frigarui-porc'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 217kcal/908kJ, Grasimi: 14.3gr, din care: Acizi grasi saturati: 5gr, Glucide: 3.4gr, din care: Zaharuri: 1.6gr, Proteine: 18.9gr, Sare: 0.7gr | Informatii Nutritionale 350gr - Valoare energetica: 760kcal/3180kJ, Grasimi: 50gr, din care: Acizi grasi saturati: 17.5gr, Glucide: 12gr, din care: Zaharuri: 5.5gr, Proteine: 66gr, Sare: 2.5gr*provenit din produse congelate'
      },
      {
        name: p('Frigărui de pui', 'Chicken skewers'),
        description: p('Piept de pui, ceapă, ardei roșu, ciuperci.', 'Chicken breast, onion, red pepper, mushrooms.'),
        price: 39,
        weight: '300g',
        image: m('gratar/frigarui-pui'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 149kcal/621kJ, Grasimi: 7gr, din care: Acizi grasi saturati: 1.6gr, Glucide: 3.4gr, din care: Zaharuri: 1.6gr, Proteine: 17.4gr, Sare: 0.7gr | Informatii Nutritionale 300gr - Valoare energetica: 520kcal/2175kJ, Grasimi: 24.5gr, din care: Acizi grasi saturati: 5.5gr, Glucide: 12gr, din care: Zaharuri: 5.5gr, Proteine: 61.0gr, Sare: 2.3gr*provenit din produse congelate'
      },
      {
        name: p('Piept de pui', 'Chicken breast'),
        description: p('Piept de pui pe grătar.', 'Grilled chicken breast.'),
        price: 29,
        weight: '250g',
        image: m('gratar/piept-pui'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 167kcal/687kJ, Grasimi: 5.1gr, din care: Acizi grasi saturati: 1.2gr, Glucide: 0.00gr, din care: Zaharuri: 0.00gr, Proteine: 29gr, Sare: 0.6gr | Informatii Nutritionale 250gr - Valoare energetica: 410kcal/1718kJ, Grasimi: 12.5gr, din care: Acizi grasi saturati: 3gr, Glucide: 0.00gr, din care: Zaharuri: 0.00gr, Proteine: 72.5.0gr, Sare: 1.5gr*provenit din produse congelate'
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
        image: m('steak/tomahawk'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 330kcal/1380kJ, Grasimi: 24gr, din care: Acizi grasi saturati: 10gr, Glucide: 0.00gr, din care: Zaharuri: 0.00gr, Proteine: 24gr, Sare: 0.25gr | Informatii Nutritionale 1100gr - Valoare energetica: 3630kcal/15180kJ, Grasimi: 264gr, din care: Acizi grasi saturati: 110gr, Glucide: 0.00gr, din care: Zaharuri: 0.00gr, Proteine: 264gr, Sare: 2.75gr*provenit din produse congelate'
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
        image: m('platouri/duo'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica:266kcal/1111kJ, Grasimi: 19.1gr, din care: Acizi grasi saturati: 7.2gr, Glucide: 9.7gr, din care: Zaharuri: 1.1gr, Proteine: 14.1gr, Sare: 0.78 | Informatii Nutritionale 1600gr - Valoare energetica:4250kcal/17780kJ, Grasimi: 305gr, din care: Acizi grasi saturati: 115gr, Glucide: 155gr, din care: Zaharuri: 18gr, Proteine: 225gr, Sare: 12.5gr'
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
        image: m('platouri/gigant'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica:273kcal/1140kJ, Grasimi: 20.5gr, din care: Acizi grasi saturati: 6.8gr, Glucide: 7.8gr, din care: Zaharuri: 0.6gr, Proteine: 13.8gr, Sare: 0.7gr | Informatii Nutritionale 4000gr - Valoare energetica:10900kcal/45600kJ, Grasimi: 820gr, din care: Acizi grasi saturati: 270gr, Glucide: 310gr, din care: Zaharuri: 25gr, Proteine: 550gr, Sare: 28gr'
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
        image: m('peste/dorada'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 117kcal/488kJ, Grasimi: 3.7gr, din care: Acizi grasi saturati: 0.8gr, Glucide: 0.3gr, din care: Zaharuri: 0.1gr, Proteine: 20.7gr, Sare: 0.5gr | Informatii Nutritionale 300.00gr - Valoare energetica: 350kcal/1465kJ, Grasimi: 11gr, din care: Acizi grasi saturati: 2.5gr, Glucide: 1gr, din care: Zaharuri: 0.3gr, Proteine: 62gr, Sare: 1.5gr'
      },
      {
        name: p('Somon la grătar', 'Grilled salmon'),
        description: p('Cu lămâie.', 'With lemon.'),
        price: 65,
        allergens: '4',
        image: m('peste/somon'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 208kcal/870kJ, Grasimi:13gr, din care: Acizi grasi saturati: 3gr, Glucide: 0gr, din care: Zaharuri: 0gr, Proteine: 22gr, Sare: 0.2gr | Informatii Nutritionale 300.00gr - Valoare energetica: 520kcal/2175kJ, Grasimi: 32.5gr, din care: Acizi grasi saturati: 7.5gr, Glucide: 0gr, din care: Zaharuri: 0gr, Proteine: 55gr, Sare: 0.5gr'
      },
      {
        name: p('Crap la grătar', 'Grilled carp'),
        description: p('Crap proaspăt pe grătar.', 'Fresh grilled carp.'),
        price: 49,
        weight: '350g',
        allergens: '4',
        image: m('peste/crap-gratar'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 127kcal/531kJ, Grasimi:5.6gr, din care: Acizi grasi saturati: 1.2gr, Glucide: 0.3gr, din care: Zaharuri: 0.1gr, Proteine: 19gr, Sare: 0.5gr | Informatii Nutritionale 350.00gr - Valoare energetica: 445kcal/1859kJ, Grasimi: 19.6gr, din care: Acizi grasi saturati: 4.2gr, Glucide: 1gr, din care: Zaharuri: 0.3gr, Proteine: 66.5gr, Sare: 1.8gr'
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
        image: m('peste/saramura-crap'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 167.61kcal/167.61kJ, Grasimi: 5.84gr, din care: Acizi grasi saturati: 2.27gr, Glucide: 16.74gr, din care: Zaharuri: 1.11gr, Proteine: 12.62gr, Sare: 1.356 | Informatii Nutritionale 700.00gr - Valoare energetica: 1257.10kcal/5254.678kJ, Grasimi: 43.79gr, din care: Acizi grasi saturati: 17.01gr, Glucide: 125.53gr, din care: Zaharuri: 8.32gr, Proteine: 94.63gr, Sare: 10.17gr'
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
        image: m('peste/crap-prajit'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 336.41kcal/336.41kJ, Grasimi: 21.64gr, din care: Acizi grasi saturati: 3.02gr, Glucide: 21.21gr, din care: Zaharuri: 0.25gr, Proteine: 13.74gr, Sare: 0.656 | Informatii Nutritionale 450.00gr - Valoare energetica: 1857.00kcal/7762.26kJ, Grasimi: 119.48gr, din care: Acizi grasi saturati: 16.65gr, Glucide: 117.08gr, din care: Zaharuri: 1.40gr, Proteine: 75.82gr, Sare: 3.62gr'
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
        image: m('peste/caracatita'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 82kcal/343kJ, Grasimi: 1gr, din care: Acizi grasi saturati: 0.2gr, Glucide: 2gr, din care: Zaharuri: 0.5gr, Proteine: 15gr, Sare: 0.5 | Informatii Nutritionale 400.00gr - Valoare energetica: 246kcal/1030kJ, Grasimi: 3gr, din care: Acizi grasi saturati: 0.6gr, Glucide: 6gr, din care: Zaharuri: 1.5gr, Proteine: 45gr, Sare: 1.5gr'
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
        image: m('peste/calamar-gratar'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 110kcal/460kJ, Grasimi: 4gr, din care: Acizi grasi saturati: 0.6gr, Glucide: 2gr, din care: Zaharuri: 0.5gr, Proteine: 16gr, Sare: 0.8gr | Informatii Nutritionale 350.00gr - Valoare energetica: 385kcal/1610kJ, Grasimi: 14gr, din care: Acizi grasi saturati: 2.1gr, Glucide: 7gr, din care: Zaharuri: 1.8gr, Proteine: 56gr, Sare: 2.8gr'
      },
      {
        name: p('Creveți la grătar', 'Grilled shrimps'),
        description: p('Cu lămâie și sos de usturoi.', 'With lemon and garlic sauce.'),
        price: 69,
        weight: '350g',
        allergens: '2,6',
        image: m('peste/creveti-gratar'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica:99 kcal/414kJ, Grasimi: 1.5gr, din care: Acizi grasi saturati: 0.3gr, Glucide: 0.2gr, din care: Zaharuri: 0.0gr, Proteine: 21gr, Sare: 1gr | Informatii Nutritionale 350.00gr - Valoare energetica: 297kcal/1240kJ, Grasimi: 4.5gr, din care: Acizi grasi saturati: 0.9gr, Glucide: 0.6gr, din care: Zaharuri: 0gr, Proteine: 63gr, Sare: 3gr'
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
        image: m('peste/creveti-rosu'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica:115 kcal/480kJ, Grasimi: 4.5gr, din care: Acizi grasi saturati: 0.7gr, Glucide: 6gr, din care: Zaharuri: 3.5gr, Proteine: 13gr, Sare: 1gr | Informatii Nutritionale 350.00gr - Valoare energetica: 403kcal/1680kJ, Grasimi: 15.8gr, din care: Acizi grasi saturati: 2.5gr, Glucide: 21gr, din care: Zaharuri: 12.3gr, Proteine: 45.5gr, Sare: 3.5gr'
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
        image: m('peste/creveti-alb'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica:145 kcal/606kJ, Grasimi: 9gr, din care: Acizi grasi saturati: 4.5gr, Glucide: 2gr, din care: Zaharuri: 1.5gr, Proteine: 14gr, Sare: 0.9gr | Informatii Nutritionale 350.00gr - Valoare energetica: 508kcal/2120kJ, Grasimi: 31.5gr, din care: Acizi grasi saturati: 15.8gr, Glucide: 7gr, din care: Zaharuri: 5.3gr, Proteine: 49gr, Sare: 3.2gr'
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
        image: m('peste/scoici'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica:95 kcal/397kJ, Grasimi: 3.5gr, din care: Acizi grasi saturati: 0.6gr, Glucide: 5gr, din care: Zaharuri: 3gr, Proteine: 11gr, Sare: 1.1gr | Informatii Nutritionale 500gr - Valoare energetica: 475kcal/1985kJ, Grasimi: 17.5gr, din care: Acizi grasi saturati: 3gr, Glucide: 25gr, din care: Zaharuri: 15gr, Proteine: 55gr, Sare: 5.5gr'
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
        image: m('fritto/single'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica:185kcal/774kJ, Grasimi: 8gr, din care: Acizi grasi saturati: 1.5gr, Glucide: 11gr, din care: Zaharuri: 2.5gr, Proteine: 17gr, Sare: 1.2gr | Informatii Nutritionale 800gr - Valoare energetica: 1480kcal/6190kJ, Grasimi: 64gr, din care: Acizi grasi saturati: 12gr, Glucide: 88gr, din care: Zaharuri: 20gr, Proteine: 136gr, Sare: 9.6gr'
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
        image: m('fritto/duo'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica:185185kcal/774kJ, Grasimi: 8gr, din care: Acizi grasi saturati: 1.5gr, Glucide: 11gr, din care: Zaharuri: 2.5gr, Proteine: 17gr, Sare: 1.2gr | Informatii Nutritionale 1600gr - Valoare energetica: 2960kcal/12380kJ, Grasimi: 128gr, din care: Acizi grasi saturati: 24gr, Glucide: 176gr, din care: Zaharuri: 40gr, Proteine: 272gr, Sare: 19.2gr'
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
        image: m('fritto/gigant'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica:185kcal/774kJ, Grasimi: 8gr, din care: Acizi grasi saturati: 1.5gr, Glucide: 11gr, din care: Zaharuri: 2.5gr, Proteine: 17gr, Sare: 1.2gr | Informatii Nutritionale 3200gr - Valoare energetica: 5920kcal/24760kJ, Grasimi: 256gr, din care: Acizi grasi saturati: 48gr, Glucide: 352gr, din care: Zaharuri: 80gr, Proteine: 544gr, Sare: 38.4gr'
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
        image: m('fritto/black-tiger-mix'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica:263kcal/1098kJ, Grasimi: 7.5gr, din care: Acizi grasi saturati: 1.2gr, Glucide: 20.3gr, din care: Zaharuri: 0.9gr, Proteine: 26gr, Sare: 0.55gr | Informatii Nutritionale 2000gr - Valoare energetica: 5250kcal/21970kJ, Grasimi: 150gr, din care: Acizi grasi saturati: 24gr, Glucide: 405gr, din care: Zaharuri: 18gr, Proteine: 520gr, Sare: 11gr'
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
        image: m('fritto/black-tiger-panko'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica:318kcal/1330kJ, Grasimi: 9.1gr, din care: Acizi grasi saturati: 1.5gr, Glucide: 24.5gr, din care: Zaharuri: 1.1gr, Proteine: 31.5gr, Sare: 0.67gr | Informatii Nutritionale 700gr - Valoare energetica: 1750kcal/7320kJ, Grasimi: 50gr, din care: Acizi grasi saturati: 8gr, Glucide: 135gr, din care: Zaharuri: 6gr, Proteine: 173gr, Sare: 3.7gr'
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
        image: m('platouri-fm/creveti-gratar'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica:178kcal/746kJ, Grasimi: 6gr, din care: Acizi grasi saturati: 1gr, Glucide: 9.8gr, din care: Zaharuri: 0.6gr, Proteine: 18.8gr, Sare: 0.69gr | Informatii Nutritionale650gr - Valoare energetica: 1160kcal/4850kJ, Grasimi: 39gr, din care: Acizi grasi saturati: 6.5gr, Glucide: 64gr, din care: Zaharuri: 4gr, Proteine: 122gr, Sare: 4.5gr'
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
        image: m('platouri-fm/duo'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica:145kcal/606kJ, Grasimi: 5gr, din care: Acizi grasi saturati: 1gr, Glucide: 8gr, din care: Zaharuri: 1.8gr, Proteine: 17gr, Sare: 0.9gr | Informatii Nutritionale 1400gr - Valoare energetica: 2030kcal/8480kJ, Grasimi: 70gr, din care: Acizi grasi saturati: 14gr, Glucide: 112gr, din care: Zaharuri: 25gr, Proteine: 238gr, Sare: 12.6gr'
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
        image: m('platouri-fm/gigant'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica:kcal/606kJ, Grasimi: 5gr, din care: Acizi grasi saturati: 1gr, Glucide: 8gr, din care: Zaharuri: 1.8gr, Proteine: 17gr, Sare: 0.9gr | Informatii Nutritionale 1400gr - Valoare energetica: 4060kcal/16960kJ, Grasimi: 140gr, din care: Acizi grasi saturati: 28gr, Glucide: 224gr, din care: Zaharuri: 50gr, Proteine: 476gr, Sare: 2gr'
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
        image: m('asiatic/plita-pui'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 155kcal/649kJ, Grasimi: 6gr, din care: Acizi grasi saturati: 1.1gr, Glucide: 7gr, din care: Zaharuri: 3.5gr, Proteine: 17.5gr, Sare: 1 | Informatii Nutritionale 400gr - Valoare energetica: 620kcal/2595kJ, Grasimi: 24gr, din care: Acizi grasi saturati: 4.5gr, Glucide: 28gr, din care: Zaharuri: 14gr, Proteine: 70gr, Sare: 3.8grSoia,gluten.Poate contine urme de susan,telina'
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
        image: m('asiatic/plita-porc'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 136kcal/570kJ, Grasimi: 6.3gr, din care: Acizi grasi saturati: 1.9gr, Glucide: 3gr, din care: Zaharuri: 1.1gr, Proteine: 15.8gr, Sare: 1.3 | Informatii Nutritionale 400gr - Valoare energetica: 545kcal/2280kJ, Grasimi: 25gr, din care: Acizi grasi saturati: 7.5gr, Glucide: 12gr, din care: Zaharuri: 4.5gr, Proteine: 63gr, Sare: 5.2gr'
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
        image: m('asiatic/plita-vita'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 148kcal/618kJ, Grasimi: 7.5gr, din care: Acizi grasi saturati: 2.8gr, Glucide: 3gr, din care: Zaharuri: 1.1gr, Proteine: 16.5gr, Sare: 1.3 | Informatii Nutritionale 400gr - Valoare energetica: 790kcal/2470kJ, Grasimi: 30gr, din care: Acizi grasi saturati: 11gr, Glucide: 12gr, din care: Zaharuri: 4.5gr, Proteine: 66gr, Sare: 5.2gr'
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
        image: m('asiatic/noodles-pui'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 190kcal/795kJ, Grasimi: 2.4gr, din care: Acizi grasi saturati: 0.5gr, Glucide: 20.8gr, din care: Zaharuri: 4.5gr, Proteine: 19.5gr, Sare: 2.5 | Informatii Nutritionale 400gr - Valoare energetica: 760kcal/3180kJ, Grasimi: 9.5gr, din care: Acizi grasi saturati: 2gr, Glucide: 83gr, din care: Zaharuri: 18gr, Proteine: 78gr, Sare: 9.8gr'
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
        image: m('asiatic/noodles-porc'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 184kcal/769kJ, Grasimi: 4gr, din care: Acizi grasi saturati: 1.2gr, Glucide: 20.8gr, din care: Zaharuri: 4.5gr, Proteine: 16.5gr, Sare: 2.5 | Informatii Nutritionale 400gr - Valoare energetica: 735kcal/3075kJ, Grasimi: 16gr, din care: Acizi grasi saturati: 4.8gr, Glucide: 83gr, din care: Zaharuri: 18gr, Proteine: 66gr, Sare: 9.8gr'
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
        image: m('asiatic/noodles-vita'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 195kcal/116kJ, Grasimi: 5.5gr, din care: Acizi grasi saturati: 2gr, Glucide: 20.8gr, din care: Zaharuri: 4.5gr, Proteine: 17.3gr, Sare: 2.5 | Informatii Nutritionale 400gr - Valoare energetica: 780kcal/3265kJ, Grasimi: 22gr, din care: Acizi grasi saturati: 8gr, Glucide: 83gr, din care: Zaharuri: 18gr, Proteine: 69gr, Sare: 9.8gr'
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
        image: m('burgers/gurmandu'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 251kcal/1050kJ, Grasimi: 15.5gr, din care: Acizi grasi saturati: 5.1gr, Glucide: 16.7gr, din care: Zaharuri: 2.5gr, Proteine: 10.5gr, Sare: 1.2 | Informatii Nutritionale 550gr - Valoare energetica: 1380kcal/5770kJ, Grasimi: 85gr, din care: Acizi grasi saturati: 28gr, Glucide: 92gr, din care: Zaharuri: 14gr, Proteine: 58gr, Sare: 6.8gr'
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
        image: m('burgers/special'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 226kcal/946kJ, Grasimi: 15.3gr, din care: Acizi grasi saturati: 5.1gr, Glucide: 16.8gr, din care: Zaharuri: 1.7gr, Proteine: 10.5gr, Sare: 1.1 | Informatii Nutritionale 550gr - Valoare energetica: 2150kcal/8990kJ, Grasimi: 145gr, din care: Acizi grasi saturati: 48gr, Glucide: 160gr, din care: Zaharuri: 16gr, Proteine: 100gr, Sare: 10.5gr'
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
        image: m('burgers/crispy'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 258kcal/1080kJ, Grasimi: 14.9gr, din care: Acizi grasi saturati: 4.4gr, Glucide: 19.1gr, din care: Zaharuri: 2.5gr, Proteine: 8.2gr, Sare: 1.2 | Informatii Nutritionale 550gr - Valoare energetica: 1420kcal/5940kJ, Grasimi: 82gr, din care: Acizi grasi saturati: 24gr, Glucide: 105gr, din care: Zaharuri: 14gr, Proteine: 45gr, Sare: 6.5gr'
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
        image: m('crispy/triple'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 325kcal/1360kJ, Grasimi: 19.2gr, din care: Acizi grasi saturati: 5.3gr, Glucide: 20gr, din care: Zaharuri: 3gr, Proteine: 15.8gr, Sare: 1.1 | Informatii Nutritionale 600.00gr - Valoare energetica: 1950kcal/8150kJ, Grasimi: 115gr, din care: Acizi grasi saturati: 32gr, Glucide: 120gr, din care: Zaharuri: 18gr, Proteine: 95gr, Sare: 6.5gr'
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
        image: m('crispy/chicken'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 297kcal/1240kJ, Grasimi: 18.2gr, din care: Acizi grasi saturati: 4.3gr, Glucide: 21.5gr, din care: Zaharuri: 1.1gr, Proteine: 13.8gr, Sare: 1gr | Informatii Nutritionale 500.00gr - Valoare energetica: 1930kcal/8070kJ, Grasimi: 118gr, din care: Acizi grasi saturati: 28gr, Glucide: 140gr, din care: Zaharuri: 7gr, Proteine: 90gr, Sare: 6.5gr'
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
        image: m('crispy/wings'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 318kcal/1330kJ, Grasimi: 22.2gr, din care: Acizi grasi saturati: 5.5gr, Glucide: 19.1gr, din care: Zaharuri: 1.1gr, Proteine: 13.1gr, Sare: 1.1gr | Informatii Nutritionale 550.00gr - Valoare energetica: 1750kcal/7320kJ, Grasimi: 122gr, din care: Acizi grasi saturati: 30gr, Glucide: 105gr, din care: Zaharuri: 6gr, Proteine: 72gr, Sare: 5.8gr'
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
        image: m('paste/tagliatelle-fm'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 126kcal/527kJ, Grasimi: 2.7gr, din care: Acizi grasi saturati: 0.9gr, Glucide: 17.5gr, din care: Zaharuri: 1.3gr, Proteine: 9.4gr, Sare: 0.7 | Informatii Nutritionale 400.00gr - Valoare energetica: 560kcal/2345kJ, Grasimi: 12gr, din care: Acizi grasi saturati: 4gr, Glucide: 78gr, din care: Zaharuri: 6gr, Proteine: 42gr, Sare: 3.2gr'
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
        image: m('paste/spaghete-gurmandu'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 196kcal/120kJ, Grasimi: 9gr, din care: Acizi grasi saturati: 3.2gr, Glucide:18.4gr, din care: Zaharuri: 1.6gr, Proteine: 9gr, Sare: 1.2 | Informatii Nutritionale 500.00gr - Valoare energetica: 980kcal/4100kJ, Grasimi: 45gr, din care: Acizi grasi saturati: 16gr, Glucide: 92gr, din care: Zaharuri: 8gr, Proteine: 45gr, Sare: 5.8gr'
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
        image: m('paste/carbonara'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 251kcal/1050kJ, Grasimi: 14.9gr, din care: Acizi grasi saturati: 6.3gr, Glucide: 20gr, din care: Zaharuri: 1.1gr, Proteine: 9.1gr, Sare: 1.2 | Informatii Nutritionale 350.00gr - Valoare energetica: 880kcal/3680kJ, Grasimi: 52gr, din care: Acizi grasi saturati: 22gr, Glucide: 70gr, din care: Zaharuri: 4gr, Proteine: 32gr, Sare: 4.2gr'
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
        image: m('paste/siciliene'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 223kcal/930kJ, Grasimi: 9.5gr, din care: Acizi grasi saturati: 3.8gr, Glucide: 19gr, din care: Zaharuri: 1.5gr, Proteine: 14gr, Sare: 1.2 | Informatii Nutritionale 400.00gr - Valoare energetica: 890kcal/3720kJ, Grasimi: 38gr, din care: Acizi grasi saturati: 15gr, Glucide: 76gr, din care: Zaharuri: 6gr, Proteine: 56gr, Sare: 4.8gr'
      },
      {
        name: p('Penne Arrabbiata', 'Penne Arrabbiata'),
        description: p('Penne, sos roșii, busuioc, roșii cherry.', 'Penne, tomato sauce, basil, cherry tomatoes.'),
        price: 29,
        weight: '300g',
        allergens: '1',
        image: m('paste/arrabbiata'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 130kcal/543kJ, Grasimi: 0.8gr, din care: Acizi grasi saturati: 0.1gr, Glucide: 26gr, din care: Zaharuri: 1.7gr, Proteine: 4.3gr, Sare: 0.7gr | Informatii Nutritionale 300.00gr - Valoare energetica: 390/1630kJ, Grasimi: 2.5gr, din care: Acizi grasi saturati: 0.4gr, Glucide: 78gr, din care: Zaharuri: 5gr, Proteine: 13gr, Sare: 2.2gr'
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
        image: m('pizza/gurmandu'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 392kcal/1638kJ, Grasimi: 17.5gr, din care: Acizi grasi saturati: 7gr, Glucide: 35.8gr, din care: Zaharuri: 2gr, Proteine: 19.7gr, Sare: 1.6gr | Informatii Nutritionale 600.00gr - Valoare energetica: 2350kcal/9830kJ, Grasimi: 105gr, din care: Acizi grasi saturati: 42gr, Glucide: 215gr, din care: Zaharuri: 12gr, Proteine: 118gr, Sare: 9.5gr'
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
        image: m('pizza/quattro-stagioni'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 375kcal/1492kJ, Grasimi: 15gr, din care: Acizi grasi saturati: 6gr, Glucide: 35gr, din care: Zaharuri: 1.8gr, Proteine: 16.7gr, Sare: 1.7gr | Informatii Nutritionale 550.00gr - Valoare energetica: 2140kcal/8950kJ, Grasimi: 90gr, din care: Acizi grasi saturati: 36gr, Glucide: 210gr, din care: Zaharuri: 11gr, Proteine: 100gr, Sare: 10.2gr'
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
        image: m('pizza/salami'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 410kcal/1716kJ, Grasimi: 16.4gr, din care: Acizi grasi saturati: 6.6gr, Glucide: 41gr, din care: Zaharuri: 2.2gr, Proteine: 17.6gr, Sare: 1.9gr | Informatii Nutritionale 500.00gr - Valoare energetica: 2050kcal/8580kJ, Grasimi: 82gr, din care: Acizi grasi saturati: 33gr, Glucide: 205gr, din care: Zaharuri: 11gr, Proteine: 88gr, Sare: 9.5gr'
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
        image: m('pizza/diavola'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 424kcal/1774kJ, Grasimi: 17.6gr, din care: Acizi grasi saturati: 7.2gr, Glucide: 41gr, din care: Zaharuri: 2gr, Proteine: 18gr, Sare: 2gr | Informatii Nutritionale 500.00gr - Valoare energetica: 2120kcal/1870kJ, Grasimi: 88gr, din care: Acizi grasi saturati: 36gr, Glucide: 205gr, din care: Zaharuri: 10gr, Proteine: 90gr, Sare: 10gr'
      },
      {
        name: p('Pizza Capriciosa', 'Pizza Capriciosa'),
        description: p('Mozzarella, sos roșii, șuncă, ciuperci.', 'Mozzarella, tomato sauce, ham, mushrooms.'),
        price: 46,
        weight: '500g',
        allergens: '1,3,6,7',
        image: m('pizza/capriciosa'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 396kcal/1658kJ, Grasimi: 15.2gr, din care: Acizi grasi saturati: 6.2gr, Glucide: 40.8gr, din care: Zaharuri: 1.8gr, Proteine: 17.2gr, Sare: 1.8gr | Informatii Nutritionale 500.00gr - Valoare energetica: 1980kcal/8290kJ, Grasimi: 76gr, din care: Acizi grasi saturati: 31gr, Glucide: 204gr, din care: Zaharuri: 9gr, Proteine: 86gr, Sare: 8.8gr'
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
        image: m('pizza/pui'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 412kcal/1724kJ, Grasimi: 14.8gr, din care: Acizi grasi saturati: 6gr, Glucide: 41.6gr, din care: Zaharuri: 2gr, Proteine: 20.4gr, Sare: 1.7gr | Informatii Nutritionale 500.00gr - Valoare energetica: 2060kcal/8620kJ, Grasimi: 74gr, din care: Acizi grasi saturati: 30gr, Glucide: 208gr, din care: Zaharuri: 10gr, Proteine: 102gr, Sare: 8.6gr'
      },
      {
        name: p('Pizza Margherita', 'Pizza Margherita'),
        description: p('Mozzarella, sos roșii, ciuperci, oregano.', 'Mozzarella, tomato sauce, mushrooms, oregano.'),
        price: 42,
        weight: '500g',
        allergens: '1,3,7',
        image: m('pizza/margherita'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 372kcal/1556kJ, Grasimi:12.8 gr, din care: Acizi grasi saturati: 5.4gr, Glucide: 41gr, din care: Zaharuri: 1.8gr, Proteine: 14.8gr, Sare: 1.6gr | Informatii Nutritionale 500.00gr - Valoare energetica: 1860kcal/7780kJ, Grasimi: 64gr, din care: Acizi grasi saturati: 27gr, Glucide: 205gr, din care: Zaharuri: 9gr, Proteine: 74gr, Sare: 7.8gr'
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
        image: m('pizza/taraneasca'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 378kcal/1582kJ, Grasimi:14.2 gr, din care: Acizi grasi saturati: 5.8gr, Glucide: 39.1gr, din care: Zaharuri: 2.2gr, Proteine: 15.6gr, Sare: 1.7gr | Informatii Nutritionale 550.00gr - Valoare energetica: 2080kcal/8700kJ, Grasimi: 78gr, din care: Acizi grasi saturati: 32gr, Glucide: 215gr, din care: Zaharuri: 12gr, Proteine: 86gr, Sare: 9.2gr'
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
        image: m('pizza/quattro-formaggi'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 470kcal/1966kJ, Grasimi:24 gr, din care: Acizi grasi saturati: 11gr, Glucide: 40gr, din care: Zaharuri: 1.6gr, Proteine: 19gr, Sare: 2.1gr | Informatii Nutritionale 500.00gr - Valoare energetica: 2350kcal/9830kJ, Grasimi: 120gr, din care: Acizi grasi saturati: 55gr, Glucide: 200gr, din care: Zaharuri: 8gr, Proteine: 95gr, Sare: 10.5gr'
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
        image: m('pizza/ton'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 380kcal/1590kJ, Grasimi:14 gr, din care: Acizi grasi saturati: 5.2gr, Glucide: 41gr, din care: Zaharuri: 2gr, Proteine: 18gr, Sare: 1.7gr | Informatii Nutritionale 500.00gr - Valoare energetica: 1900kcal/7950kJ, Grasimi: 70gr, din care: Acizi grasi saturati: 26gr, Glucide: 205gr, din care: Zaharuri: 10gr, Proteine: 90gr, Sare: 8.5gr'
      },
      { name: p('Parmezan', 'Parmesan'), description: p('', ''), price: 5, weight: '50g' },
      { name: p('Gorgonzola', 'Gorgonzola'), description: p('', ''), price: 5, weight: '50g',
        nutrition: 'Informatii Nutritionale 50gr - Valoare energetica: 175kcal/730kJ, Grasimi:15 gr, din care: Acizi grasi saturati: 10gr, Glucide: 1gr, din care: Zaharuri: 0.5gr, Proteine: 10gr, Sare: 0.9gr'
      },
      { name: p('Mozzarella', 'Mozzarella'), description: p('', ''), price: 5, weight: '50g',
        nutrition: 'Informatii Nutritionale 50gr - Valoare energetica: 140kcal/585kJ, Grasimi:10.5 gr, din care: Acizi grasi saturati: 6.5gr, Glucide: 1gr, din care: Zaharuri: 1gr, Proteine: 9gr, Sare: 0.3gr'
      },
      { name: p('Ciuperci', 'Mushrooms'), description: p('', ''), price: 3, weight: '50g',
        nutrition: 'Informatii Nutritionale 50gr - Valoare energetica: 11kcal/46kJ, Grasimi:0.2 gr, din care: Acizi grasi saturati: 0gr, Glucide: 1.5gr, din care: Zaharuri: 1gr, Proteine: 1.5gr, Sare: 0gr'
      },
      { name: p('Bacon', 'Bacon'), description: p('', ''), price: 5, weight: '50g',
        nutrition: 'Informatii Nutritionale 50gr - Valoare energetica: 270kcal/1130kJ, Grasimi:21 gr, din care: Acizi grasi saturati: 7.5gr, Glucide: 0.5gr, din care: Zaharuri: 0gr, Proteine: 18gr, Sare: 1.8gr'
      },
      { name: p('Salam uscat', 'Cured salami'), description: p('', ''), price: 5, weight: '50g',
        nutrition: 'Informatii Nutritionale 50gr - Valoare energetica: 210kcal/880kJ, Grasimi:18 gr, din care: Acizi grasi saturati:7gr, Glucide: 1gr, din care: Zaharuri: 0.5gr, Proteine: 11gr, Sare: 2gr'
      },
      { name: p('Șuncă Praga', 'Prague ham'), description: p('', ''), price: 5, weight: '50g',
        nutrition: 'Informatii Nutritionale 50gr - Valoare energetica: 75kcal/315kJ, Grasimi:3.5 gr, din care: Acizi grasi saturati:1.2gr, Glucide: 0.5gr, din care: Zaharuri: 0.5gr, Proteine: 10gr, Sare: 1.3gr'
      },
      { name: p('Cârnați afumați', 'Smoked sausages'), description: p('', ''), price: 5, weight: '50g',
        nutrition: 'Informatii Nutritionale 50gr - Valoare energetica: 160kcal/670kJ, Grasimi:14 gr, din care: Acizi grasi saturati:5gr, Glucide: 1gr, din care: Zaharuri: 0.5gr, Proteine: 8gr, Sare: 1.5gr'
      },
      { name: p('Măsline', 'Olives'), description: p('', ''), price: 3, weight: '50g',
        nutrition: 'Informatii Nutritionale 50gr - Valoare energetica: 58kcal/240kJ, Grasimi:5.5 gr, din care: Acizi grasi saturati:0.8gr, Glucide: 1.5gr, din care: Zaharuri: 0gr, Proteine: 0.4gr, Sare: 1.5gr'
      },
      { name: p('Porumb', 'Corn'), description: p('', ''), price: 3, weight: '50g',
        nutrition: 'Informatii Nutritionale 50gr - Valoare energetica: 43kcal/180kJ, Grasimi:0.6 gr, din care: Acizi grasi saturati:0.1gr, Glucide: 8.5gr, din care: Zaharuri: 2gr, Proteine: 1.5gr, Sare: 0.3gr'
      }
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
        image: m('desert/clatite-gurmandu'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 60kcal/250kJ, Grasimi:0gr, din care: Acizi grasi saturati:0gr, Glucide: 5gr, din care: Zaharuri: 1gr, Proteine: 8gr, Sare: 14gr | Informatii Nutritionale 50gr - Valoare energetica: 30kcal/125kJ, Grasimi:0 gr, din care: Acizi grasi saturati:0gr, Glucide: 2.5gr, din care: Zaharuri: 0.5gr, Proteine: 4gr, Sare: 7gr'
      },
      {
        name: p('Clătite cu dulceață', 'Pancakes with jam'),
        description: p('Făină, ouă, lapte, dulceață vișine/afine.', 'Flour, eggs, milk, sour cherry/blueberry jam.'),
        price: 32,
        weight: '200g',
        allergens: '1,3,7',
        image: m('desert/clatite-dulceata'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 69kcal/287kJ, Grasimi:1.3gr, din care: Acizi grasi saturati:0.5gr, Glucide: 12gr, din care: Zaharuri: 7gr, Proteine: 2gr, Sare: 0.14gr | Informatii Nutritionale 200gr - Valoare energetica: 240kcal/1005kJ, Grasimi:4.5 gr, din care: Acizi grasi saturati:1.8gr, Glucide: 42gr, din care: Zaharuri: 24gr, Proteine: 7gr, Sare: 0.5gr'
      },
      {
        name: p('Clătite cu sos de vanilie și nuci', 'Pancakes with vanilla sauce and nuts'),
        description: p('Făină, ouă, lapte, vanilie, nuci.', 'Flour, eggs, milk, vanilla, nuts.'),
        price: 32,
        weight: '250g',
        allergens: '1,3,7,8',
        image: m('desert/clatite-vanilie'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 180kcal/755kJ, Grasimi:7.5gr, din care: Acizi grasi saturati:2.7gr, Glucide: 23.5gr, din care: Zaharuri: 14.5gr, Proteine: 4gr, Sare: 0.2gr | Informatii Nutritionale 250gr - Valoare energetica: 360kcal/1510kJ, Grasimi:15 gr, din care: Acizi grasi saturati:5.5gr, Glucide: 47gr, din care: Zaharuri: 29gr, Proteine: 8gr, Sare: 0.4gr'
      },
      {
        name: p('Clătite cu Nutella', 'Pancakes with Nutella'),
        description: p('Făină, ouă, lapte, Nutella.', 'Flour, eggs, milk, Nutella.'),
        price: 32,
        weight: '200g',
        image: m('desert/clatite-nutella'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 180kcal/755kJ, Grasimi:7.5gr, din care: Acizi grasi saturati:2.7gr, Glucide: 23.5gr, din care: Zaharuri: 14.5gr, Proteine: 4gr, Sare: 0.2gr | Informatii Nutritionale 200gr - Valoare energetica: 360kcal/1510kJ, Grasimi:15 gr, din care: Acizi grasi saturati:5.5gr, Glucide: 47gr, din care: Zaharuri: 29gr, Proteine: 8gr, Sare: 0.4gr'
      },
      {
        name: p('Papanași cu dulceață', 'Papanasi with jam'),
        description: p('Brânză vaci, ou, făină, smântână, dulceață.', 'Cottage cheese, egg, flour, cream, jam.'),
        price: 36,
        weight: '300g',
        allergens: '1,3,7',
        image: m('desert/papanasi'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 260kcal/1088kJ, Grasimi:8gr, din care: Acizi grasi saturati:4gr, Glucide: 35gr, din care: Zaharuri: 10.7gr, Proteine: 10.7gr, Sare: 0.4gr | Informatii Nutritionale 300gr - Valoare energetica: 780kcal/3265kJ, Grasimi:24 gr, din care: Acizi grasi saturati:12gr, Glucide: 105gr, din care: Zaharuri: 32gr, Proteine: 32gr, Sare: 1.2gr'
      },
      {
        name: p('Lava cake cu înghețată', 'Lava cake with ice cream'),
        description: p('Făină, ouă, lapte, cacao, înghețată.', 'Flour, eggs, milk, cocoa, ice cream.'),
        price: 34,
        weight: '200g',
        allergens: '1,3,7',
        image: m('desert/lava-cake'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 348kcal/1455kJ, Grasimi:18.5gr, din care: Acizi grasi saturati:12gr, Glucide: 34.5gr, din care: Zaharuri: 26gr, Proteine: 5gr, Sare: 0.15gr | Informatii Nutritionale 200gr - Valoare energetica: 695kcal/2910kJ, Grasimi:37 gr, din care: Acizi grasi saturati:24gr, Glucide: 69gr, din care: Zaharuri: 52gr, Proteine: 10gr, Sare: 0.3gr'
      },
      {
        name: p('Înghețată', 'Ice cream'),
        description: p(
          'Vanilie, ciocolată, mentă, fructe de pădure, pepene, cireșe.',
          'Vanilla, chocolate, mint, forest fruits, watermelon, cherry.'
        ),
        price: 34,
        weight: '200g',
        image: m('desert/inghetata'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 348kcal/1455kJ, Grasimi:18.5gr, din care: Acizi grasi saturati:12gr, Glucide: 34.5gr, din care: Zaharuri: 26gr, Proteine: 5gr, Sare: 0.15gr | Informatii Nutritionale 200gr - Valoare energetica: 695kcal/2910kJ, Grasimi:37 gr, din care: Acizi grasi saturati:24gr, Glucide: 69gr, din care: Zaharuri: 52gr, Proteine: 10gr, Sare: 0.3gr'
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
        image: m('garnituri/cartofi'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 313kcal/1310kJ, Grasimi:11.3 gr, din care: Acizi grasi saturati:1.3gr, Glucide: 46gr, din care: Zaharuri: 0.7gr, Proteine: 4gr, Sare: 0.7gr | Informatii Nutritionale 150gr - Valoare energetica: 470kcal/1965kJ, Grasimi:17 gr, din care: Acizi grasi saturati:2gr, Glucide: 69gr, din care: Zaharuri: 1gr, Proteine: 6gr, Sare: 1.1gr'
      },
      {
        name: p('Cartofi prăjiți cu brânză rasă', 'French fries with telemea'),
        description: p('Cu telemea.', 'With telemea cheese.'),
        price: 18,
        weight: '200g',
        allergens: '7',
        image: m('garnituri/cartofi-branza'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 175kcal/730kJ, Grasimi:10 gr, din care: Acizi grasi saturati:4.5gr, Glucide: 20gr, din care: Zaharuri: 1gr, Proteine: 2.5gr, Sare: 1.5gr | Informatii Nutritionale 200gr - Valoare energetica: 350kcal/700kJ, Grasimi:40 gr, din care: Acizi grasi saturati:18gr, Glucide: 10gr, din care: Zaharuri: 2gr, Proteine: 10gr, Sare: 3gr'
      },
      {
        name: p('Cartofi prăjiți cu brânză și usturoi', 'French fries with telemea and garlic'),
        description: p('Cu telemea și usturoi.', 'With telemea and garlic.'),
        price: 20,
        weight: '200g',
        allergens: '7',
        image: m('garnituri/cartofi-branza-usturoi'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 313kcal/1310kJ, Grasimi:11.3 gr, din care: Acizi grasi saturati:1.3gr, Glucide: 46gr, din care: Zaharuri: 0.7gr, Proteine: 4gr, Sare: 0.7gr | Informatii Nutritionale 150gr - Valoare energetica: 470kcal/1965kJ, Grasimi:17 gr, din care: Acizi grasi saturati:2gr, Glucide: 69gr, din care: Zaharuri: 1gr, Proteine: 6gr, Sare: 1.1gr'
      },
      {
        name: p('Chips din cartofi', 'Potato chips'),
        description: p('Chips proaspăt prăjit.', 'Freshly fried chips.'),
        price: 15,
        weight: '150g',
        image: m('garnituri/chips'),
        nutrition: 'Informatii Nutritionale 150gr - Valoare energetica: 800kcal/3350kJ, Grasimi:50 gr, din care: Acizi grasi saturati:5gr, Glucide: 75gr, din care: Zaharuri: 0.5gr, Proteine: 9gr, Sare: 1.2gr | Informatii Nutritionale 100gr - Valoare energetica: 535kcal/2240kJ, Grasimi:33 gr, din care: Acizi grasi saturati:4gr, Glucide: 50gr, din care: Zaharuri: 0.3gr, Proteine: 6gr, Sare: 0.8gr'
      },
      {
        name: p('Piure de cartofi', 'Mashed potatoes'),
        description: p('Cartof, lapte, unt.', 'Potato, milk, butter.'),
        price: 15,
        weight: '200g',
        allergens: '7',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 228kcal/953kJ, Grasimi:19.4 gr, din care: Acizi grasi saturati:13.6gr, Glucide: 12.3gr, din care: Zaharuri: 1gr, Proteine: 1.6gr, Sare: 0.47gr | Informatii Nutritionale 200gr - Valoare energetica: 455kcal/1905kJ, Grasimi:38.8 gr, din care: Acizi grasi saturati:27.2gr, Glucide: 24.7gr, din care: Zaharuri: 1.9gr, Proteine: 3.2gr, Sare: 0.95gr'
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
        weight: '200g',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 200kcal/840kJ, Grasimi:4.4 gr, din care: Acizi grasi saturati:0.6gr, Glucide: 3.6gr, din care: Zaharuri: 0.1gr, Proteine: 3.2gr, Sare: 0.85gr | Informatii Nutritionale 200gr - Valoare energetica: 400kcal/1680kJ, Grasimi:8.8 gr, din care: Acizi grasi saturati:1.2gr, Glucide: 72gr, din care: Zaharuri: 0.2gr, Proteine: 6.44gr, Sare: 1.7gr'
      },
      {
        name: p('Orez Basmati cu ciuperci', 'Basmati rice with mushrooms'),
        description: p('Orez basmati, ciuperci, unt.', 'Basmati rice, mushrooms, butter.'),
        price: 15,
        weight: '250g',
        allergens: '7',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 182kcal/760kJ, Grasimi:3.9 gr, din care: Acizi grasi saturati:0.5gr, Glucide: 32gr, din care: Zaharuri: 0.7gr, Proteine: 3.3gr, Sare: 0.75gr | Informatii Nutritionale 250gr - Valoare energetica: 365kcal/1520kJ, Grasimi:7.8 gr, din care: Acizi grasi saturati:1gr, Glucide: 64gr, din care: Zaharuri: 1.5gr, Proteine: 6.5gr, Sare: 1.5gr'
      },
      {
        name: p('Risotto', 'Risotto'),
        description: p('Orez basmati, parmezan, unt, vin alb.', 'Basmati rice, parmesan, butter, white wine.'),
        price: 22,
        weight: '250g',
        allergens: '7,12',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 148kcal/620kJ, Grasimi:7.2 gr, din care: Acizi grasi saturati:4.4gr, Glucide: 15gr, din care: Zaharuri: 0.4gr, Proteine: 5.2gr, Sare: 0.4gr | Informatii Nutritionale 250gr - Valoare energetica: 370kcal/1550kJ, Grasimi:18 gr, din care: Acizi grasi saturati:11gr, Glucide: 38gr, din care: Zaharuri: 1gr, Proteine: 13gr, Sare: 1gr'
      },
      {
        name: p('Legume la grătar', 'Grilled vegetables'),
        description: p('Ciuperci, ardei roșu, roșie, ceapă.', 'Mushrooms, red pepper, tomato, onion.'),
        price: 25,
        weight: '200g',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 55kcal/230kJ, Grasimi:0.4 gr, din care: Acizi grasi saturati:0.05gr, Glucide: 11gr, din care: Zaharuri: 5.5gr, Proteine: 2.7gr, Sare: 0.5gr | Informatii Nutritionale 250gr - Valoare energetica: 110kcal/460kJ, Grasimi:0.8 gr, din care: Acizi grasi saturati:0.1gr, Glucide: 22gr, din care: Zaharuri: 11gr, Proteine: 5.5gr, Sare: 1gr'
      },
      {
        name: p('Ciuperci sote', 'Sauteed mushrooms'),
        description: p(
          'Ciuperci, ceapă, usturoi, vin alb, unt, mărar.',
          'Mushrooms, onion, garlic, white wine, butter, dill.'
        ),
        price: 19,
        weight: '200g',
        allergens: '7,12',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 70kcal/292kJ, Grasimi:5.3 gr, din care: Acizi grasi saturati:3.3gr, Glucide: 4.5gr, din care: Zaharuri: 2gr, Proteine: 2.8gr, Sare: 0.5gr | Informatii Nutritionale 200gr - Valoare energetica: 140kcal/585kJ, Grasimi:10.5 gr, din care: Acizi grasi saturati:6.5gr, Glucide: 9gr, din care: Zaharuri: 4gr, Proteine: 5.5gr, Sare: 1gr'
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
        weight: '150g',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 14kcal/57kJ, Grasimi:0.1 gr, din care: Acizi grasi saturati:0gr, Glucide: 2.7gr, din care: Zaharuri: 1.3gr, Proteine: 0.8gr, Sare: 0.01gr | Informatii Nutritionale 150gr - Valoare energetica: 20kcal/85kJ, Grasimi:0.2 gr, din care: Acizi grasi saturati:0gr, Glucide: 4gr, din care: Zaharuri: 2gr, Proteine: 1.2gr, Sare: 0.02gr'
      },
      {
        name: p('Salată de varză', 'Cabbage salad'),
        description: p('Varză, oțet, ulei, mărar, piper.', 'Cabbage, vinegar, oil, dill, pepper.'),
        price: 15,
        weight: '150g',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 68kcal/285kJ, Grasimi:7.1 gr, din care: Acizi grasi saturati:1gr, Glucide: 4.3gr, din care: Zaharuri: 2.1gr, Proteine: 1.4gr, Sare: 0.7gr | Informatii Nutritionale 150gr - Valoare energetica: 95kcal/400kJ, Grasimi:10 gr, din care: Acizi grasi saturati:1.4gr, Glucide: 6gr, din care: Zaharuri: 3gr, Proteine: 2gr, Sare: 1g'
      },
      {
        name: p('Salată de roșii cu brânză', 'Tomato and telemea salad'),
        description: p('Roșii cu telemea.', 'Tomato with telemea cheese.'),
        price: 15,
        weight: '200g',
        allergens: '7',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 80kcal/335kJ, Grasimi:5.4 gr, din care: Acizi grasi saturati:3.2gr, Glucide: 3.5gr, din care: Zaharuri: 2.5gr, Proteine: 4.1gr, Sare: 0.85gr | Informatii Nutritionale 200gr - Valoare energetica: 160kcal/670kJ, Grasimi:10.8 gr, din care: Acizi grasi saturati:7gr, Glucide: 7gr, din care: Zaharuri: 5gr, Proteine: 8.3gr, Sare: 1.7gr'
      },
      {
        name: p('Salată de vară', 'Summer salad'),
        description: p('Roșii, castraveți, ceapă.', 'Tomato, cucumber, onion.'),
        price: 15,
        weight: '200g',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 17kcal/75kJ, Grasimi:0.15 gr, din care: Acizi grasi saturati:0.02gr, Glucide: 3.5gr, din care: Zaharuri: 2gr, Proteine: 0.8gr, Sare: 0.5gr | Informatii Nutritionale 200gr - Valoare energetica: 35kcal/150kJ, Grasimi:0.3 gr, din care: Acizi grasi saturati:0.05gr, Glucide: 7gr, din care: Zaharuri: 4gr, Proteine: 1.5gr, Sare: 1gr'
      },
      {
        name: p('Salată de castraveți murați', 'Pickled cucumber salad'),
        description: p('Castraveți murați.', 'Pickled cucumbers.'),
        price: 15,
        weight: '150g',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 13kcal/55kJ, Grasimi:0.1 gr, din care: Acizi grasi saturati:0.01gr, Glucide: 2gr, din care: Zaharuri: 1gr, Proteine: 0.5gr, Sare: 2gr | Informatii Nutritionale 150gr - Valoare energetica: 20kcal/85kJ, Grasimi:0.15 gr, din care: Acizi grasi saturati:0.02gr, Glucide: 3gr, din care: Zaharuri: 1.5gr, Proteine: 0.8gr, Sare: 3gr'
      },
      {
        name: p('Salată de murături asortate', 'Mixed pickles'),
        description: p('Murături asortate.', 'Assorted pickles.'),
        price: 15,
        weight: '150g',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 13kcal/55kJ, Grasimi:0.1 gr, din care: Acizi grasi saturati:0.01gr, Glucide: 2gr, din care: Zaharuri: 1gr, Proteine: 0.5gr, Sare: 2gr | Informatii Nutritionale 150gr - Valoare energetica: 20kcal/85kJ, Grasimi:0.15 gr, din care: Acizi grasi saturati:0.02gr, Glucide: 3gr, din care: Zaharuri: 1.5gr, Proteine: 0.8gr, Sare: 3gr'
      },
      {
        name: p('Salată de ardei copt', 'Baked pepper salad'),
        description: p('Ardei copt.', 'Baked pepper.'),
        price: 15,
        weight: '150g',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 13kcal/55kJ, Grasimi:0.1 gr, din care: Acizi grasi saturati:0.01gr, Glucide: 2gr, din care: Zaharuri: 1gr, Proteine: 0.5gr, Sare: 2gr | Informatii Nutritionale 150gr - Valoare energetica: 20kcal/85kJ, Grasimi:0.15 gr, din care: Acizi grasi saturati:0.02gr, Glucide: 3gr, din care: Zaharuri: 1.5gr, Proteine: 0.8gr, Sare: 3gr'
      }
    ]
  },
  {
    id: 23,
    slug: 'sosuri',
    prettyName: p('Sosuri', 'Sauces'),
    description: p('Sosuri de însoțire.', 'Side sauces.'),
    plates: [
      { name: p('Maioneză', 'Mayonnaise'), description: p('', ''), price: 5, weight: '', allergens: '3,10',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 650kcal/2720kJ, Grasimi:70 gr, din care: Acizi grasi saturati:5gr, Glucide: 2gr, din care: Zaharuri: 1gr, Proteine: 1gr, Sare: 1gr | Informatii Nutritionale 50gr - Valoare energetica: 325kcal/1360kJ, Grasimi:35 gr, din care: Acizi grasi saturati:2.5gr, Glucide: 1gr, din care: Zaharuri: 0.5gr, Proteine: 0.5gr, Sare: 0.5gr'
      },
      { name: p('Sos de usturoi', 'Garlic sauce'), description: p('', ''), price: 5, weight: '' },
      { name: p('Sos de roșii', 'Tomato sauce'), description: p('', ''), price: 5, weight: '',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 40kcal/170kJ, Grasimi:1 gr, din care: Acizi grasi saturati:0.2gr, Glucide: 7gr, din care: Zaharuri: 5gr, Proteine: 1.5gr, Sare: 0.81gr | Informatii Nutritionale 50gr - Valoare energetica: 20kcal/85kJ, Grasimi:0.5 gr, din care: Acizi grasi saturati:0.1gr, Glucide: 3.5gr, din care: Zaharuri: 2.5gr, Proteine: 0.75gr, Sare: 0.5gr'
      },
      { name: p('Ketchup (dulce/picant)', 'Ketchup (sweet/spicy)'), description: p('', ''), price: 5, weight: '',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 100kcal/420kJ, Grasimi:0.2gr, din care: Acizi grasi saturati:0gr, Glucide: 25gr, din care: Zaharuri: 22gr, Proteine: 1gr, Sare: 2gr | Informatii Nutritionale 50gr - Valoare energetica: 50kcal/210kJ, Grasimi:0.1 gr, din care: Acizi grasi saturati:0gr, Glucide: 12.5gr, din care: Zaharuri: 11gr, Proteine: 0.5gr, Sare: 1gr'
      },
      { name: p('Sos burger', 'Burger sauce'), description: p('', ''), price: 5, weight: '',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 450kcal/1880kJ, Grasimi:40gr, din care: Acizi grasi saturati:6gr, Glucide: 15gr, din care: Zaharuri: 10gr, Proteine: 1gr, Sare: 2gr | Informatii Nutritionale 50gr - Valoare energetica: 225kcal/940kJ, Grasimi:20 gr, din care: Acizi grasi saturati:33.5gr, Glucide: 7.5gr, din care: Zaharuri: 5gr, Proteine: 0.5gr, Sare: 1gr'
      },
      { name: p('Sos barbeque', 'Barbeque sauce'), description: p('', ''), price: 5, weight: '',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 450kcal/1880kJ, Grasimi:40gr, din care: Acizi grasi saturati:6gr, Glucide: 15gr, din care: Zaharuri: 10gr, Proteine: 1gr, Sare: 2gr | Informatii Nutritionale 50gr - Valoare energetica: 225kcal/940kJ, Grasimi:20 gr, din care: Acizi grasi saturati:33.5gr, Glucide: 7.5gr, din care: Zaharuri: 5gr, Proteine: 0.5gr, Sare: 1gr'
      },
      { name: p('Sos gorgonzola', 'Gorgonzola sauce'), description: p('', ''), price: 5, weight: '', allergens: '7',
        nutrition: 'Informatii Nutritionale 50gr - Valoare energetica: 175kcal/730kJ, Grasimi:15 gr, din care: Acizi grasi saturati: 10gr, Glucide: 1gr, din care: Zaharuri: 0.5gr, Proteine: 10gr, Sare: 0.9gr'
      },
      { name: p('Sos chimichurri', 'Chimichurri sauce'), description: p('', ''), price: 5, weight: '' },
      { name: p('Muștar', 'Mustard'), description: p('', ''), price: 5, weight: '', allergens: '10',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 140kcal/585kJ, Grasimi:9gr, din care: Acizi grasi saturati:0.5gr, Glucide: 7gr, din care: Zaharuri: 2gr, Proteine: 5gr, Sare: 5gr | Informatii Nutritionale 50gr - Valoare energetica: 70kcal/290kJ, Grasimi:4.5 gr, din care: Acizi grasi saturati:0.25gr, Glucide:3.5gr, din care: Zaharuri: 1gr, Proteine: 2.5gr, Sare: 2.5gr'
      },
      { name: p('Mujdei de usturoi', 'Garlic mujdei'), description: p('', ''), price: 5, weight: '' },
      { name: p('Sos sweet chilli', 'Sweet chilli sauce'), description: p('', ''), price: 5, weight: '',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 200kcal/840kJ, Grasimi:0.2gr, din care: Acizi grasi saturati:0gr, Glucide: 50gr, din care: Zaharuri: 45gr, Proteine: 0.5gr, Sare: 2gr | Informatii Nutritionale 50gr - Valoare energetica: 100kcal/420kJ, Grasimi:0.1 gr, din care: Acizi grasi saturati:0gr, Glucide: 25gr, din care: Zaharuri: 22gr, Proteine: 0.25gr, Sare: 1gr'
      },
      { name: p('Sos de soia', 'Soy sauce'), description: p('', ''), price: 5, weight: '', allergens: '6',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 60kcal/250kJ, Grasimi:0gr, din care: Acizi grasi saturati:0gr, Glucide: 5gr, din care: Zaharuri: 1gr, Proteine: 8gr, Sare: 14gr | Informatii Nutritionale 50gr - Valoare energetica: 30kcal/125kJ, Grasimi:0 gr, din care: Acizi grasi saturati:0gr, Glucide: 2.5gr, din care: Zaharuri: 0.5gr, Proteine: 4gr, Sare: 7gr'
      }
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
        image: m('extra/painea-casei'),
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 205kcal/858kJ, Grasimi:0.8 gr, din care: Acizi grasi saturati:0.1gr, Glucide: 41gr, din care: Zaharuri: 0.6gr, Proteine: 6.5gr, Sare: 0.55gr | Informatii Nutritionale 200gr - Valoare energetica: 410kcal/1715kJ, Grasimi:1.5 gr, din care: Acizi grasi saturati:0.3gr, Glucide: 82gr, din care: Zaharuri: 1.2gr, Proteine: 13gr, Sare: 1.1gr'
      },
      { name: p('Pita grecească', 'Greek pita'), description: p('', ''), price: 4, weight: '100g', allergens: '1',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 247kcal/1046kJ, Grasimi:2 gr, din care: Acizi grasi saturati:0.4gr, Glucide: 50gr, din care: Zaharuri: 2.3gr, Proteine: 7.8gr, Sare: 0.9gr'
      },
      { name: p('Mămăliguță', 'Polenta'), description: p('', ''), price: 5, weight: '150g', allergens: '1',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 87kcal/363kJ, Grasimi:0.5 gr, din care: Acizi grasi saturati:0.1gr, Glucide: 18gr, din care: Zaharuri: 0.1gr, Proteine: 1.8gr, Sare: 0.4gr | Informatii Nutritionale 150gr - Valoare energetica: 130kcal/545kJ, Grasimi:0.7 gr, din care: Acizi grasi saturati:0.1gr, Glucide: 27gr, din care: Zaharuri: 0.2gr, Proteine: 2.7gr, Sare: 0.6gr'
      },
      { name: p('Brânză rasă', 'Grated cheese'), description: p('', ''), price: 7, weight: '80g', allergens: '7',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 312kcal/1306kJ, Grasimi:26 gr, din care: Acizi grasi saturati:16gr, Glucide: 2.5gr, din care: Zaharuri: 1.2gr, Proteine: 20gr, Sare: 3gr | Informatii Nutritionale 80gr - Valoare energetica: 250kcal/1045kJ, Grasimi:21 gr, din care: Acizi grasi saturati:13gr, Glucide: 2gr, din care: Zaharuri: 1gr, Proteine: 16gr, Sare: 2.4gr'
      },
      { name: p('Smântână', 'Sour cream'), description: p('', ''), price: 4, weight: '50g', allergens: '7',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 310kcal/1296kJ, Grasimi:32 gr, din care: Acizi grasi saturati:20gr, Glucide: 3gr, din care: Zaharuri: 3gr, Proteine: 2.4gr, Sare: 0.2gr | Informatii Nutritionale 50gr - Valoare energetica: 155kcal/648kJ, Grasimi:16 gr, din care: Acizi grasi saturati:10gr, Glucide: 1.5gr, din care: Zaharuri: 1.5gr, Proteine: 1.2gr, Sare: 0.1gr'
      },
      { name: p('Hrean', 'Horseradish'), description: p('', ''), price: 4, weight: '50g',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 70kcal/992kJ, Grasimi:1 gr, din care: Acizi grasi saturati:0.2gr, Glucide: 14gr, din care: Zaharuri: 8gr, Proteine: 2gr, Sare: 2.4gr | Informatii Nutritionale 50gr - Valoare energetica: 35kcal/146kJ, Grasimi:0.5 gr, din care: Acizi grasi saturati:0.1gr, Glucide: 7gr, din care: Zaharuri: 4gr, Proteine: 1gr, Sare: 1.2gr'
      },
      { name: p('Ardei iute', 'Chili pepper'), description: p('', ''), price: 2, weight: '',
        nutrition: 'Informatii Nutritionale 100gr - Valoare energetica: 40kcal/167kJ, Grasimi:0.9 gr, din care: Acizi grasi saturati:0.2gr, Glucide: 8gr, din care: Zaharuri: 5gr, Proteine: 2gr, Sare: 0gr | Informatii Nutritionale 10gr - Valoare energetica: 4kcal/17kJ, Grasimi:0.1 gr, din care: Acizi grasi saturati:0.02gr, Glucide: 0.8gr, din care: Zaharuri: 0.5gr, Proteine: 0.2gr, Sare: 0gr'
      }
    ]
  }
]
