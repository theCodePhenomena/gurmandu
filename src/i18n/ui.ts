export const defaultLang = 'ro' as const
export const locales = ['ro', 'en'] as const
export type Locale = (typeof locales)[number]

export const ui = {
  ro: {
    // Menu section
    'menu.badge': 'Meniu',
    'menu.title': 'Meniul nostru',
    'menu.subtitle': 'Bucătărie fără frontiere: tradiție românească, rafinament mediteranean, pasiune italiană.',
    'menu.allergens': 'Alergeni',
    'menu.modal.close': 'Închide',
    'menu.modal.weight': 'Gramaj',
    'menu.modal.price': 'Preț',
    'menu.modal.allergens': 'Alergeni',
    'menu.nutrition.link': 'Vezi valorile nutriționale complete',

    // Hero
    'hero.title': 'Ești gurmand? Ai ajuns unde trebuie.',
    'hero.subtitle':
      'Bucătărie românească autentică, rafinament mediteranean, pasiune italiană și influențe asiatice reinterpretate modern. De la burgeri suculenți și crispy crocant, până la deserturi originale create cu atenție pentru fiecare detaliu — aici fiecare preparat are personalitate.',
    'hero.cta.menu': 'Vezi meniul',
    'hero.cta.book': 'Rezervă o masă',

    // Featured / Popular
    'featured.badge': 'Vedetele noastre',
    'featured.title': 'Preparate cărora nu le poți rezista',
    'featured.subtitle':
      'Există feluri de mâncare pe care le încerci o dată și le comanzi de fiecare dată după aceea. Acestea sunt mândria bucătăriei noastre — preparate cu caracter, concepute pentru cei care apreciază cu adevărat o masă bună.',

    // Social
    'social.badge': 'Social',
    'social.title': 'Suntem și în lumea digitală',
    'social.subtitle':
      'Urmărește-ne pe rețelele sociale pentru a fi primul care află noutățile din meniu, ofertele speciale și evenimentele noastre.',
    'social.hashtag': 'Etichetează-ne în postările tale cu #GurMANDU și s-ar putea să te regăsești pe pagina noastră.',

    // Location
    'location.title': 'Te așteptăm în locația noastră de pe Decebal 20',

    // Delivery
    'delivery.badge': 'Delivery & Take Away',
    'delivery.title': 'Bucătăria GurMANDU vine la tine',
    'delivery.subtitle':
      'Nu trebuie să ieși din casă pentru a te bucura de un preparat bun. Meniul nostru ajunge la tine rapid, cald și la fel de îngrijit ca în restaurant.',
    'delivery.takeaway': 'Preferați să ridicați comanda personal? Sunați-ne și vă pregătim totul din timp.',
    'delivery.hours.delivery': 'Program livrări: 10:00 — 23:30',
    'delivery.cta.order': 'Comandă acum',
    'delivery.cta.call': 'Sună-ne',

    // About
    'about.badge': 'Despre noi',
    'about.title': 'Povestea din spatele numelui',
    'about.text':
      'Gurmand — cel căruia îi place să mănânce bine și știe să aprecieze o masă cu adevărat îngrijită. Am pornit de la acest cuvânt și am construit în jurul lui un întreg univers culinar. La GurMANDU, nu există o singură bucătărie și nici o singură influență. Există, în schimb, o filozofie simplă: ingrediente proaspete, preparate făcute cu grijă și convingerea că mâncarea cu adevărat bună nu ar trebui să fie un lux. Românesc, mediteranean, italian, fusion — meniul nostru este o călătorie. Tu alegi destinația.',
    'about.cta': 'Vezi meniul',

    // Contact
    'contact.badge': 'Contact',
    'contact.title': 'Rezervă o masă',
    'contact.subtitle':
      'Ne face plăcere să vă așteptăm. Pentru rezervări și orice întrebare, ne puteți contacta telefonic — vă confirmăm locul în cel mai scurt timp.',
    'contact.note':
      'Pentru grupuri mai mari de 10 persoane, vă recomandăm să ne contactați cu cel puțin 24 de ore în avans.',

    // Footer
    'footer.tagline': 'GurMANDU® — Mâncare bună, preț bun, oameni buni.',
    'footer.cuisines': 'Fusion · Românesc · Mediteranean · Italian',
    'footer.legal': 'Gătim totul proaspăt, din ingrediente alese cu grijă, în bucătăria noastră deschisă.',
    'footer.rights': 'Toate drepturile rezervate.'
  },
  en: {
    'menu.badge': 'Menu',
    'menu.title': 'Our menu',
    'menu.subtitle': 'A kitchen without borders: Romanian tradition, Mediterranean refinement, Italian passion.',
    'menu.allergens': 'Allergens',
    'menu.modal.close': 'Close',
    'menu.modal.weight': 'Serving size',
    'menu.modal.price': 'Price',
    'menu.modal.allergens': 'Allergens',
    'menu.nutrition.link': 'See full nutritional information',

    'hero.title': "Foodie? You've come to the right place.",
    'hero.subtitle':
      'Authentic Romanian cuisine, Mediterranean refinement, Italian passion and modern Asian influences. From succulent burgers and crispy bites to original desserts crafted with care for every detail — every dish here has its own personality.',
    'hero.cta.menu': 'Explore the menu',
    'hero.cta.book': 'Reserve a table',

    'featured.badge': 'Featured',
    'featured.title': "The dishes you won't stop talking about",
    'featured.subtitle':
      'Some dishes you try once and order every time after that. These are the pride of our kitchen — plates with personality, crafted for those who truly appreciate a great meal.',

    'social.badge': 'Social',
    'social.title': 'Find us online',
    'social.subtitle':
      'Follow us on social media to be the first to hear about new additions to the menu, special offers and upcoming events.',
    'social.hashtag': 'Tag us in your posts with #GurMANDU — you might just end up on our page.',

    // Location
    'location.title': 'Visit our location on Decebal 20',

    'delivery.badge': 'Delivery & Take Away',
    'delivery.title': 'The GurMANDU kitchen comes to you',
    'delivery.subtitle':
      "You don't need to leave home to enjoy a truly good meal. Our menu reaches you quickly, warm and just as carefully prepared as it would be in the restaurant.",
    'delivery.takeaway':
      "Prefer to pick up your order in person? Give us a call and we'll have it ready when you arrive.",
    'delivery.hours.delivery': 'Delivery hours: 10:00 — 23:30',
    'delivery.cta.order': 'Order now',
    'delivery.cta.call': 'Call us',

    'about.badge': 'About us',
    'about.title': 'The story behind the name',
    'about.text':
      'Gurmand — the Romanian word for someone who loves to eat well and knows how to appreciate a truly fine meal. We took that word and built an entire culinary world around it. At GurMANDU, there is no single cuisine and no single influence. What there is, instead, is a straightforward philosophy: fresh ingredients, dishes made to order and the firm belief that genuinely good food should never be a luxury. Romanian, Mediterranean, Italian, fusion — our menu is a journey. You choose the destination.',
    'about.cta': 'See the menu',

    'contact.badge': 'Contact',
    'contact.title': 'Reserve a table',
    'contact.subtitle':
      'We look forward to welcoming you. For reservations and any enquiries, please reach us by phone — we will confirm your booking as quickly as possible.',
    'contact.note':
      'For groups of more than 10 guests, we kindly ask that you contact us at least 24 hours in advance.',

    'footer.tagline': 'GurMANDU® — Great food, honest prices, good people.',
    'footer.cuisines': 'Fusion · Romanian · Mediterranean · Italian',
    'footer.legal': 'Everything is cooked fresh, from carefully chosen ingredients, in our open kitchen.',
    'footer.rights': 'All rights reserved.'
  }
} as const satisfies Record<Locale, Record<string, string>>

export type UIKey = keyof (typeof ui)['ro']
