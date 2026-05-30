import type { Locale } from '@/i18n/ui'
import type { Plate, PlateCategory } from './menu'

type I18nString = Record<Locale, string>

const d = (path: string) => `/images/drinks/${path}.webp`

const p = (ro: string, en: string): I18nString => ({ ro, en })

// Drinks reuse the Plate / PlateCategory shape from menu.ts.
// `weight` field carries the serving volume (e.g. "250ml", "30ml/80ml").
// `allergens` field is unused for drinks.
export type Drink = Plate
export type DrinkCategory = PlateCategory

export const drinkCategories: DrinkCategory[] = [
  {
    id: 1,
    slug: 'cafea',
    prettyName: p('Cafea', 'Coffee'),
    description: p('Cafea proaspăt măcinată și ceaiuri aromate.', 'Freshly ground coffee and aromatic teas.'),
    plates: [
      { name: p('Cafea cu cardamom (Hell)', 'Cardamom coffee (Hell)'), description: p('', ''), price: 12, weight: '' },
      {
        name: p('Cafea turceasca', 'Turkish coffee'),
        description: p('', ''),
        price: 12,
        weight: '70ml',
        image: d('cafea/turceasca')
      },
      {
        name: p('Espresso', 'Espresso'),
        description: p('', ''),
        price: 12,
        weight: '30ml/80ml',
        image: d('cafea/espresso')
      },
      { name: p('Espresso decaf', 'Decaf espresso'), description: p('', ''), price: 12, weight: '30ml/80ml' },
      {
        name: p('Espresso dublu', 'Double espresso'),
        description: p('', ''),
        price: 19,
        weight: '80ml/150ml',
        image: d('cafea/espresso-dublu')
      },
      { name: p('Espresso machiatto', 'Espresso macchiato'), description: p('', ''), price: 19, weight: '40ml' },
      { name: p('Cappuccino', 'Cappuccino'), description: p('', ''), price: 16, weight: '150ml' },
      { name: p('Cappuccino dublu', 'Double cappuccino'), description: p('', ''), price: 19, weight: '200ml' },
      { name: p('Café latte', 'Café latte'), description: p('', ''), price: 17, weight: '200ml' },
      {
        name: p('Irish coffee', 'Irish coffee'),
        description: p('', ''),
        price: 24,
        weight: '200ml',
        image: d('cafea/irish-coffee')
      },
      { name: p('Frappe clasic', 'Classic frappe'), description: p('', ''), price: 26, weight: '250ml' },
      {
        name: p('Frappe flavour cu inghetata', 'Flavoured frappe with ice cream'),
        description: p('', ''),
        price: 30,
        weight: '250ml'
      },
      {
        name: p('Ciocolata calda (neagra/alba)', 'Hot chocolate (dark/white)'),
        description: p('', ''),
        price: 20,
        weight: '200ml'
      },
      {
        name: p('Ceai', 'Tea'),
        description: p(
          'Mentă, fructe de pădure, negru, verde, ghimbir cu lămâie.',
          'Mint, forest fruits, black, green, ginger with lemon.'
        ),
        price: 10,
        weight: ''
      }
    ]
  },
  {
    id: 2,
    slug: 'racoritoare',
    prettyName: p('Răcoritoare', 'Soft Drinks'),
    description: p('Răcoritoare și ape minerale.', 'Soft drinks and mineral waters.'),
    plates: [
      {
        name: p('Coca Cola / Coca Cola Zero', 'Coca Cola / Coca Cola Zero'),
        description: p('', ''),
        price: 13,
        weight: '250ml'
      },
      { name: p('Fanta', 'Fanta'), description: p('', ''), price: 13, weight: '250ml' },
      { name: p('Sprite', 'Sprite'), description: p('', ''), price: 13, weight: '250ml' },
      { name: p('Schweppes / Lemon', 'Schweppes / Lemon'), description: p('', ''), price: 13, weight: '250ml' },
      {
        name: p('Fuze Tea piersică / lămâie', 'Fuze Tea peach / lemon'),
        description: p('', ''),
        price: 13,
        weight: '250ml'
      },
      { name: p('Cappy nectar', 'Cappy nectar'), description: p('', ''), price: 15, weight: '250ml' },
      {
        name: p('Dorna plată / minerală', 'Dorna still / sparkling'),
        description: p('', ''),
        price: 11,
        weight: '330ml'
      },
      {
        name: p('Dorna plată / minerală', 'Dorna still / sparkling'),
        description: p('', ''),
        price: 18,
        weight: '750ml'
      },
      {
        name: p('Borsec plată / minerală', 'Borsec still / sparkling'),
        description: p('', ''),
        price: 11,
        weight: '330ml'
      },
      {
        name: p('Borsec plată / minerală', 'Borsec still / sparkling'),
        description: p('', ''),
        price: 18,
        weight: '750ml'
      }
    ]
  },
  {
    id: 3,
    slug: 'limonade',
    prettyName: p('Limonade', 'Lemonades'),
    description: p('Limonade preparate proaspăt.', 'Freshly prepared lemonades.'),
    plates: [
      {
        name: p('Limonadă clasică', 'Classic lemonade'),
        description: p('', ''),
        price: 25,
        weight: '500ml',
        image: d('limonade/clasica')
      },
      {
        name: p('Limonadă cu mentă', 'Mint lemonade'),
        description: p('', ''),
        price: 25,
        weight: '500ml',
        image: d('limonade/menta')
      },
      {
        name: p('Limonadă cu arome', 'Flavoured lemonade'),
        description: p(
          'Mango, căpșuni, pepene roșu, fructul pasiunii.',
          'Mango, strawberry, watermelon, passion fruit.'
        ),
        price: 27,
        weight: '500ml',
        image: d('limonade/arome')
      },
      { name: p('Fresh de portocale', 'Fresh orange juice'), description: p('', ''), price: 27, weight: '250ml' }
    ]
  },
  {
    id: 4,
    slug: 'bere-draught',
    prettyName: p('Bere Draught', 'Draught Beer'),
    description: p('Bere la halbă.', 'Beer on tap.'),
    plates: [
      {
        name: p('Ursus Premium', 'Ursus Premium'),
        description: p('', ''),
        price: 39,
        weight: '1000ml'
      },
      {
        name: p('Ursus Premium', 'Ursus Premium'),
        description: p('', ''),
        price: 16,
        weight: '400ml'
      }
    ]
  },
  {
    id: 5,
    slug: 'bere-sticla',
    prettyName: p('Bere la Sticlă', 'Bottled Beer'),
    description: p('Selecție de beri îmbuteliate.', 'Bottled beer selection.'),
    plates: [
      { name: p('Ursus Premium', 'Ursus Premium'), description: p('', ''), price: 16, weight: '500ml' },
      { name: p('Peroni Nastro Azzurro', 'Peroni Nastro Azzurro'), description: p('', ''), price: 16, weight: '500ml' },
      { name: p('Ursus Remix', 'Ursus Remix'), description: p('', ''), price: 12, weight: '330ml' },
      {
        name: p('Efes draught', 'Efes draught'),
        description: p('', ''),
        price: 19,
        weight: '500ml'
      },
      {
        name: p('Heineken', 'Heineken'),
        description: p('', ''),
        price: 16,
        weight: '400ml'
      },
      { name: p('Madri', 'Madri'), description: p('', ''), price: 15, weight: '500ml' },
      {
        name: p('Carlsberg', 'Carlsberg'),
        description: p('', ''),
        price: 19,
        weight: '500ml'
      },
      { name: p('Tuborg', 'Tuborg'), description: p('', ''), price: 16, weight: '500ml' },
      {
        name: p('Corona', 'Corona'),
        description: p('', ''),
        price: 18,
        weight: '355ml'
      },
      {
        name: p('Leffe Blonda', 'Leffe Blonde'),
        description: p('', ''),
        price: 23,
        weight: '330ml'
      }
    ]
  },
  {
    id: 6,
    slug: 'bere-fara-alcool',
    prettyName: p('Bere fără Alcool', 'Non-Alcoholic Beer'),
    description: p('Variante fără alcool.', 'Non-alcoholic options.'),
    plates: [
      { name: p('Peroni Nastro Azzurro', 'Peroni Nastro Azzurro'), description: p('', ''), price: 14, weight: '330ml' },
      { name: p('Ursus Cooler (lămâie)', 'Ursus Cooler (lemon)'), description: p('', ''), price: 12, weight: '330ml' }
    ]
  },
  {
    id: 7,
    slug: 'bere-specialitati',
    prettyName: p('Specialități Bere', 'Specialty Beer'),
    description: p('Selecție specială de bere.', 'Specialty beer selection.'),
    plates: [
      { name: p('Azuga nepasteurizată', 'Azuga unpasteurized'), description: p('', ''), price: 17, weight: '500ml' },
      { name: p('Ursus Black', 'Ursus Black'), description: p('', ''), price: 12, weight: '330ml' },
      { name: p('Ursus Retro', 'Ursus Retro'), description: p('', ''), price: 16, weight: '500ml' }
    ]
  },
  {
    id: 8,
    slug: 'vin-alb',
    prettyName: p('Vin Alb', 'White Wine'),
    description: p('Selecție de vinuri albe.', 'White wine selection.'),
    plates: [
      {
        name: p('Sole Chardonnay (Recaș)', 'Sole Chardonnay (Recaș)'),
        description: p('', ''),
        price: 159,
        weight: '750ml'
      },
      {
        name: p('Mysterium (Jidvei)', 'Mysterium (Jidvei)'),
        description: p('', ''),
        price: 115,
        weight: '750ml'
      },
      { name: p('Purcari Pinot Grigio', 'Purcari Pinot Grigio'), description: p('', ''), price: 85, weight: '750ml' },
      {
        name: p('Purcari Nocturn Sauvignon Blanc', 'Purcari Nocturn Sauvignon Blanc'),
        description: p('', ''),
        price: 130,
        weight: '750ml'
      }
    ]
  },
  {
    id: 9,
    slug: 'vin-rose',
    prettyName: p('Vin Rose', 'Rosé Wine'),
    description: p('Selecție de vinuri rose.', 'Rosé wine selection.'),
    plates: [
      { name: p('Sole (Recaș)', 'Sole (Recaș)'), description: p('', ''), price: 159, weight: '750ml' },
      { name: p('Mysterium (Jidvei)', 'Mysterium (Jidvei)'), description: p('', ''), price: 115, weight: '750ml' },
      { name: p('Purcari Rose', 'Purcari Rosé'), description: p('', ''), price: 93, weight: '750ml' },
      {
        name: p('Purcari Nocturn', 'Purcari Nocturn'),
        description: p('', ''),
        price: 130,
        weight: '750ml'
      }
    ]
  },
  {
    id: 10,
    slug: 'vin-rosu',
    prettyName: p('Vin Roșu', 'Red Wine'),
    description: p('Selecție de vinuri roșii.', 'Red wine selection.'),
    plates: [
      {
        name: p('Implicit Fetească Neagră (Recaș)', 'Implicit Fetească Neagră (Recaș)'),
        description: p('', ''),
        price: 110,
        weight: '750ml'
      },
      { name: p('Purcari Pinot Noir', 'Purcari Pinot Noir'), description: p('', ''), price: 85, weight: '750ml' },
      {
        name: p('Purcari Nocturn Rară Neagră', 'Purcari Nocturn Rară Neagră'),
        description: p('', ''),
        price: 130,
        weight: '750ml'
      },
      { name: p('Gitana Lupi', 'Gitana Lupi'), description: p('', ''), price: 269, weight: '750ml' }
    ]
  },
  {
    id: 11,
    slug: 'vin-carafa',
    prettyName: p('Vin la Carafă', 'Carafe Wine'),
    description: p('Vin la carafă.', 'Wine by carafe.'),
    plates: [
      { name: p('Carafă vin alb', 'White wine carafe'), description: p('', ''), price: 70, weight: '1000ml' },
      { name: p('Carafă vin rose', 'Rosé wine carafe'), description: p('', ''), price: 70, weight: '1000ml' },
      { name: p('Carafă vin roșu', 'Red wine carafe'), description: p('', ''), price: 70, weight: '1000ml' }
    ]
  },
  {
    id: 12,
    slug: 'vin-pahar',
    prettyName: p('Vin la Pahar', 'Wine by the Glass'),
    description: p(
      'Fetească Regală, Rose - Cramele Recaș, Fetească Neagră - Crama Oprișor.',
      'Fetească Regală, Rosé - Cramele Recaș, Fetească Neagră - Crama Oprișor.'
    ),
    plates: [{ name: p('Alb / Rose / Roșu', 'White / Rosé / Red'), description: p('', ''), price: 18, weight: '200ml' }]
  },
  {
    id: 13,
    slug: 'prosecco-champagne',
    prettyName: p('Prosecco & Champagne', 'Prosecco & Champagne'),
    description: p('Vinuri spumante și șampanie.', 'Sparkling wines and champagne.'),
    plates: [
      {
        name: p('Soligo Treviso Extra Dry', 'Soligo Treviso Extra Dry'),
        description: p('', ''),
        price: 90,
        weight: '750ml'
      },
      {
        name: p('Asti Martini', 'Asti Martini'),
        description: p('', ''),
        price: 149,
        weight: '750ml'
      },
      {
        name: p('Franciacorta Brut', 'Franciacorta Brut'),
        description: p('', ''),
        price: 250,
        weight: '750ml'
      },
      {
        name: p('Moet Chandon Imperial', 'Moët & Chandon Impérial'),
        description: p('', ''),
        price: 470,
        weight: '750ml'
      },
      { name: p('Prosecco la pahar', 'Prosecco by glass'), description: p('', ''), price: 22, weight: '150ml' }
    ]
  },
  {
    id: 14,
    slug: 'whisky',
    prettyName: p('Whisky', 'Whisky'),
    description: p('Selecție de whisky.', 'Whisky selection.'),
    plates: [
      {
        name: p('Chivas 12 y.o.', 'Chivas 12 y.o.'),
        description: p('', ''),
        price: 32,
        weight: '50ml'
      },
      { name: p('Jack Daniels', 'Jack Daniels'), description: p('', ''), price: 32, weight: '50ml' },
      {
        name: p('Jack Daniels Honey', 'Jack Daniels Honey'),
        description: p('', ''),
        price: 34,
        weight: '50ml'
      },
      {
        name: p('Johnnie Walker Black Label', 'Johnnie Walker Black Label'),
        description: p('', ''),
        price: 34,
        weight: '50ml'
      },
      {
        name: p('Johnnie Walker Red Label', 'Johnnie Walker Red Label'),
        description: p('', ''),
        price: 29,
        weight: '50ml'
      },
      { name: p('Jameson', 'Jameson'), description: p('', ''), price: 29, weight: '50ml' }
    ]
  },
  {
    id: 15,
    slug: 'cognac',
    prettyName: p('Cognac', 'Cognac'),
    description: p('Selecție de cognac.', 'Cognac selection.'),
    plates: [
      { name: p('Hennessy V.S.O.P.', 'Hennessy V.S.O.P.'), description: p('', ''), price: 55, weight: '50ml' },
      {
        name: p('Martell V.S.', 'Martell V.S.'),
        description: p('', ''),
        price: 49,
        weight: '50ml'
      },
      { name: p('Brancoveanu V.S.', 'Brâncoveanu V.S.'), description: p('', ''), price: 16, weight: '50ml' }
    ]
  },
  {
    id: 16,
    slug: 'palinca',
    prettyName: p('Pălincă', 'Pălincă'),
    description: p('Pălincă tradițională.', 'Traditional Romanian fruit brandy.'),
    plates: [
      { name: p('Prune', 'Plum'), description: p('', ''), price: 25, weight: '50ml' },
      { name: p('Pere', 'Pear'), description: p('', ''), price: 27, weight: '50ml' },
      { name: p('Gutui', 'Quince'), description: p('', ''), price: 35, weight: '50ml' }
    ]
  },
  {
    id: 17,
    slug: 'vodka',
    prettyName: p('Vodka', 'Vodka'),
    description: p('Selecție de vodka.', 'Vodka selection.'),
    plates: [
      { name: p('Beluga', 'Beluga'), description: p('', ''), price: 35, weight: '50ml' },
      { name: p('Tazovsky', 'Tazovsky'), description: p('', ''), price: 15, weight: '50ml' },
      { name: p('Stalinskaya', 'Stalinskaya'), description: p('', ''), price: 15, weight: '50ml' }
    ]
  },
  {
    id: 18,
    slug: 'gin',
    prettyName: p('Gin', 'Gin'),
    description: p('Selecție de gin.', 'Gin selection.'),
    plates: [
      { name: p('Wembley Dry Gin', 'Wembley Dry Gin'), description: p('', ''), price: 20, weight: '50ml' },
      { name: p('Tanqueray', 'Tanqueray'), description: p('', ''), price: 24, weight: '50ml' }
    ]
  },
  {
    id: 19,
    slug: 'tequila',
    prettyName: p('Tequila', 'Tequila'),
    description: p('Selecție de tequila.', 'Tequila selection.'),
    plates: [
      {
        name: p('Jose Cuervo Silver Reposado', 'Jose Cuervo Silver Reposado'),
        description: p('', ''),
        price: 20,
        weight: '50ml'
      },
      { name: p('Jose Cuervo Especial', 'Jose Cuervo Especial'), description: p('', ''), price: 24, weight: '50ml' }
    ]
  },
  {
    id: 20,
    slug: 'rom',
    prettyName: p('Rom', 'Rum'),
    description: p('Selecție de rom.', 'Rum selection.'),
    plates: [
      { name: p('Captain Morgan White', 'Captain Morgan White'), description: p('', ''), price: 20, weight: '50ml' },
      { name: p('Captain Morgan Black', 'Captain Morgan Black'), description: p('', ''), price: 20, weight: '50ml' },
      { name: p('Zacapa Solera', 'Zacapa Solera'), description: p('', ''), price: 35, weight: '50ml' }
    ]
  },
  {
    id: 21,
    slug: 'lichior',
    prettyName: p('Lichior', 'Liqueur'),
    description: p('Lichioruri fine.', 'Fine liqueurs.'),
    plates: [{ name: p('Baileys', 'Baileys'), description: p('', ''), price: 25, weight: '50ml' }]
  },
  {
    id: 22,
    slug: 'aperitive',
    prettyName: p('Aperitive', 'Aperitifs'),
    description: p('Aperitive italiene clasice.', 'Classic Italian aperitifs.'),
    plates: [
      {
        name: p('Martini Bianco / Rosso', 'Martini Bianco / Rosso'),
        description: p('', ''),
        price: 20,
        weight: '50ml'
      },
      { name: p('Aperol', 'Aperol'), description: p('', ''), price: 20, weight: '50ml' },
      { name: p('Campari', 'Campari'), description: p('', ''), price: 20, weight: '50ml' }
    ]
  },
  {
    id: 23,
    slug: 'digestive',
    prettyName: p('Digestive', 'Digestifs'),
    description: p('Digestive după masă.', 'After-dinner digestifs.'),
    plates: [{ name: p('Jagermeister', 'Jagermeister'), description: p('', ''), price: 20, weight: '50ml' }]
  },
  {
    id: 24,
    slug: 'long-drinks',
    prettyName: p('Long Drinks', 'Long Drinks'),
    description: p('Băuturi lungi, perfecte pentru relaxare.', 'Long drinks, perfect for relaxing.'),
    plates: [
      {
        name: p('Aperol Spritz', 'Aperol Spritz'),
        description: p('Aperol, prosecco, apă minerală.', 'Aperol, prosecco, sparkling water.'),
        price: 28,
        weight: '250ml',
        image: d('long-drinks/aperol-spritz')
      },
      {
        name: p('Campari Spritz', 'Campari Spritz'),
        description: p('Campari, prosecco, apă minerală.', 'Campari, prosecco, sparkling water.'),
        price: 28,
        weight: '250ml',
        image: d('long-drinks/campari-spritz')
      },
      {
        name: p('Campari Orange', 'Campari Orange'),
        description: p('Campari, suc portocale.', 'Campari, orange juice.'),
        price: 28,
        weight: '250ml',
        image: d('long-drinks/campari-orange')
      },
      {
        name: p('Gin Tonic', 'Gin Tonic'),
        description: p('Gin, apă tonică.', 'Gin, tonic water.'),
        price: 28,
        weight: '250ml',
        image: d('long-drinks/gin-tonic')
      },
      {
        name: p('Cuba Libre', 'Cuba Libre'),
        description: p('Rom, Coca-Cola.', 'Rum, Coca-Cola.'),
        price: 28,
        weight: '250ml',
        image: d('long-drinks/cuba-libre')
      }
    ]
  },
  {
    id: 25,
    slug: 'cocktails-alcohol',
    prettyName: p('Cocktails', 'Cocktails'),
    description: p('Cocktailuri clasice și signature.', 'Classic and signature cocktails.'),
    plates: [
      {
        name: p('Sangria', 'Sangria'),
        description: p(
          'Vin roșu, suc portocale, apă minerală, zahăr, portocală, măr verde.',
          'Red wine, orange juice, sparkling water, sugar, orange, green apple.'
        ),
        price: 55,
        weight: '500ml',
        allergens: 'sulfiți',
        image: d('cocktails-alcohol/sangria')
      },
      {
        name: p('Cocktail GurMANDU', 'GurMANDU Cocktail'),
        description: p(
          'Jagermeister, Aperol, piure fructul pasiunii, suc portocale, suc merișoare.',
          'Jagermeister, Aperol, passion fruit puree, orange juice, cranberry juice.'
        ),
        price: 38,
        weight: '300ml',
        image: d('cocktails-alcohol/gurmandu')
      },
      {
        name: p('Hugo', 'Hugo'),
        description: p(
          'Sirop soc, prosecco, apă minerală, lime, mentă.',
          'Elderflower syrup, prosecco, sparkling water, lime, mint.'
        ),
        price: 32,
        weight: '300ml'
      },
      {
        name: p('Sex on the Beach', 'Sex on the Beach'),
        description: p(
          'Vodca, triplu sec, suc portocale, suc piersică, grenadine, portocală.',
          'Vodka, triple sec, orange juice, peach juice, grenadine, orange.'
        ),
        price: 34,
        weight: '300ml',
        image: d('cocktails-alcohol/sex-on-the-beach')
      },
      {
        name: p('Mojito', 'Mojito'),
        description: p(
          'Rom, zahăr, mentă, lime, apă minerală, gheață.',
          'Rum, sugar, mint, lime, sparkling water, ice.'
        ),
        price: 32,
        weight: '250ml',
        image: d('cocktails-alcohol/mojito')
      },
      {
        name: p('Pornstar Martini', 'Pornstar Martini'),
        description: p(
          'Vodca, piure fructul pasiunii, passoa, sirop vanilie, fructul pasiunii, prosecco.',
          'Vodka, passion fruit puree, passoa, vanilla syrup, passion fruit, prosecco.'
        ),
        price: 34,
        weight: '150ml',
        image: d('cocktails-alcohol/pornstar-martini')
      },
      {
        name: p('Cosmopolitan', 'Cosmopolitan'),
        description: p(
          'Vodca, triplu sec, sirop zahăr, suc merișoare.',
          'Vodka, triple sec, sugar syrup, cranberry juice.'
        ),
        price: 34,
        weight: '150ml',
        image: d('cocktails-alcohol/cosmopolitan')
      },
      {
        name: p('Pina Colada', 'Pina Colada'),
        description: p(
          'Rom alb, sirop cocos, suc ananas, frișcă lichidă, gheață, ananas.',
          'White rum, coconut syrup, pineapple juice, liquid cream, ice, pineapple.'
        ),
        price: 34,
        weight: '250ml'
      },
      {
        name: p('Margarita', 'Margarita'),
        description: p('Tequila, sirop zahăr, lămâie.', 'Tequila, sugar syrup, lemon.'),
        price: 34,
        weight: '150ml',
        image: d('cocktails-alcohol/margarita')
      },
      {
        name: p('Cocktail 007', 'Cocktail 007'),
        description: p('Gin, martini, măsline verzi.', 'Gin, martini, green olives.'),
        price: 34,
        weight: '120ml'
      },
      {
        name: p('Negroni', 'Negroni'),
        description: p(
          'Gin, campari, vermut roșu, Angostura bitter, coajă portocală.',
          'Gin, campari, red vermouth, Angostura bitter, orange peel.'
        ),
        price: 34,
        weight: '120ml'
      }
    ]
  },
  {
    id: 26,
    slug: 'shoturi',
    prettyName: p('Shoturi', 'Shots'),
    description: p('Shoturi pentru chef.', 'Shots for the party.'),
    plates: [
      {
        name: p('Kamikaze', 'Kamikaze'),
        description: p('Vodca, suc lămâie.', 'Vodka, lemon juice.'),
        price: 20,
        weight: '30ml'
      },
      {
        name: p('B 52', 'B 52'),
        description: p('Kahlua, Baileys, triplu sec.', 'Kahlua, Baileys, triple sec.'),
        price: 20,
        weight: '30ml'
      },
      { name: p('Jagermeister', 'Jagermeister'), description: p('', ''), price: 16, weight: '30ml' },
      { name: p('Tequila', 'Tequila'), description: p('', ''), price: 16, weight: '30ml' }
    ]
  },
  {
    id: 27,
    slug: 'mocktails',
    prettyName: p('Mocktails', 'Mocktails'),
    description: p('Cocktailuri fără alcool.', 'Non-alcoholic cocktails.'),
    plates: [
      {
        name: p('Green Apple', 'Green Apple'),
        description: p(
          'Suc mere verzi, blue curacao, gheață, scorțișoară.',
          'Green apple juice, blue curacao, ice, cinnamon.'
        ),
        price: 28,
        weight: '250ml',
        image: d('mocktails/green-apple')
      },
      {
        name: p('Rainbow', 'Rainbow'),
        description: p(
          'Grenadine, suc portocale, suc piersică, blue curacao, gheață.',
          'Grenadine, orange juice, peach juice, blue curacao, ice.'
        ),
        price: 28,
        weight: '250ml',
        image: d('mocktails/rainbow')
      },
      {
        name: p('Virgin Colada', 'Virgin Colada'),
        description: p(
          'Sirop cocos, suc ananas, frișcă lichidă, gheață, ananas.',
          'Coconut syrup, pineapple juice, liquid cream, ice, pineapple.'
        ),
        price: 28,
        weight: '250ml',
        image: d('mocktails/virgin-colada')
      }
    ]
  }
]
