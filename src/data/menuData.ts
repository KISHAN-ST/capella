import { MenuItem, GalleryItem } from '../types';

export const STARTERS_MENU: MenuItem[] = [
  {
    id: 's1',
    name: 'CIABATTA CHICKEN SANDWICH',
    price: '₹360',
    description: 'Crispy artisanal ciabatta, herb-roasted chicken breast, garlic aioli, sun-dried tomatoes, and wild rocket.',
    isSpecial: true,
    category: 'starters',
    badge: 'Popular'
  },
  {
    id: 's2',
    name: 'ROASTED CHICKEN SOURDOUGH',
    price: '₹380',
    description: 'Slow-fermented sourdough toast, smoked chicken shavings, pickled shallots, Dijon spread, and microgreens.',
    isSpecial: true,
    category: 'starters',
    badge: 'Chef Choice'
  },
  {
    id: 's3',
    name: 'EGGS BENEDICT ON BRIOCHE',
    price: '₹340',
    description: 'Poached farm eggs, velvety hollandaise sauce, sautéed spinach, toasted butter brioche, and smoked paprika.',
    category: 'starters'
  },
  {
    id: 's4',
    name: 'TRUFFLE PARMESAN FRIES',
    price: '₹280',
    description: 'Hand-cut golden fries tossed in white truffle oil, shaved aged parmesan, and cracked black pepper.',
    isEggless: true,
    category: 'starters'
  },
  {
    id: 's5',
    name: 'HEIRLOOM TOMATO BRUSCHETTA',
    price: '₹290',
    description: 'Toasted baguette slices, macerated cherry tomatoes, fresh basil, cold-pressed olive oil, and balsamic glaze.',
    isEggless: true,
    category: 'starters'
  },
  {
    id: 's6',
    name: 'AVOCADO SOURDOUGH TARTINE',
    price: '₹350',
    description: 'Crushed Hass avocado, toasted pepitas, feta crumble, chili threads, and lemon zest on sourdough.',
    isEggless: true,
    category: 'starters',
    badge: 'Healthy'
  },
  {
    id: 's7',
    name: 'HERBED GARLIC PULL-APART LOAF',
    price: '₹260',
    description: 'Warm house-baked sourdough loaf stuffed with roasted garlic butter, parsley, and melted mozzarella.',
    isEggless: true,
    category: 'starters'
  },
  {
    id: 's8',
    name: 'SPICED COTTAGE CHEESE SKEWERS',
    price: '₹310',
    description: 'Tender paneer cubes marinated in garden rosemary, garlic, and cracked pepper, served with herb dip.',
    isEggless: true,
    category: 'starters'
  }
];

export const MAINS_MENU: MenuItem[] = [
  {
    id: 'm1',
    name: 'HERB SEARED CHICKEN SUPREME',
    price: '₹460',
    description: 'Pan-seared tender chicken breast, garlic potato purée, sautéed garden asparagus, and thyme jus.',
    isSpecial: true,
    category: 'mains',
    badge: 'House Special'
  },
  {
    id: 'm2',
    name: 'CHICKEN AGLIO OLIO PASTA',
    price: '₹420',
    description: 'Spaghetti tossed with slow-roasted garlic cloves, chili flakes, extra virgin olive oil, and herb chicken.',
    isSpecial: true,
    category: 'mains',
    badge: 'Favorite'
  },
  {
    id: 'm3',
    name: 'CREAMY WILD MUSHROOM RISOTTO',
    price: '₹440',
    description: 'Arborio rice slowly simmered with forest porcini, shiitake mushrooms, truffle butter, and parmesan.',
    isEggless: true,
    category: 'mains'
  },
  {
    id: 'm4',
    name: 'BASIL PESTO PENNE ALLA CAPELLA',
    price: '₹390',
    description: 'Penne rigate in fresh Genovese basil pine-nut pesto, cherry tomatoes, and toasted pine nuts.',
    isEggless: true,
    category: 'mains'
  },
  {
    id: 'm5',
    name: 'MEDITERRANEAN ROAST BOWL',
    price: '₹380',
    description: 'Quinoa pilaf, grilled bell peppers, zucchini, kalamata olives, creamy hummus, and garlic flatbread.',
    isEggless: true,
    category: 'mains'
  },
  {
    id: 'm6',
    name: 'RICOTTA & SPINACH RAVIOLI',
    price: '₹430',
    description: 'Handmade pasta parcels filled with herb ricotta and wilted spinach in a sage brown butter sauce.',
    isEggless: true,
    category: 'mains',
    badge: 'Artisanal'
  },
  {
    id: 'm7',
    name: 'SMOKED PAPRIKA CHICKEN BOWL',
    price: '₹440',
    description: 'Herb butter rice, flame-grilled paprika chicken chunks, charred corn, avocado, and lime crema.',
    category: 'mains'
  },
  {
    id: 'm8',
    name: 'TRUFFLE THREE-CHEESE GNOCCHI',
    price: '₹450',
    description: 'Soft potato gnocchi sautéed in rich gorgonzola, parmesan, and mozzarella cream with truffle oil.',
    isEggless: true,
    category: 'mains'
  }
];

export const DESSERTS_MENU: MenuItem[] = [
  {
    id: 'd1',
    name: 'SIGNATURE BASQUE CHEESECAKE',
    price: '₹320',
    description: '100% eggless caramelised burnt top with an ultra-creamy, molten vanilla center. Capella’s star creation.',
    isSpecial: true,
    isEggless: true,
    category: 'desserts',
    badge: 'Must Try'
  },
  {
    id: 'd2',
    name: 'NUTELLA BAKED CHEESECAKE',
    price: '₹340',
    description: 'Decadent baked cheesecake infused with pure hazelnut Nutella over a crunchy butter biscuit crust.',
    isSpecial: true,
    isEggless: true,
    category: 'desserts',
    badge: 'Bestseller'
  },
  {
    id: 'd3',
    name: 'PARISIAN MACARONS (BOX OF 4)',
    price: '₹290',
    description: 'Delicate almond shells filled with Belgian dark chocolate ganache, pistachio, and raspberry coulis.',
    isEggless: true,
    category: 'desserts'
  },
  {
    id: 'd4',
    name: 'MINIMALIST BENTO CAKE',
    price: '₹420',
    description: 'Handcrafted Korean-style mini celebration cake with pastel aesthetic frosting and vanilla bean sponge.',
    isEggless: true,
    category: 'desserts',
    badge: 'Trending'
  },
  {
    id: 'd5',
    name: 'TRES LECHES MILK CAKE',
    price: '₹310',
    description: 'Light sponge soaked overnight in evaporated, condensed, and heavy whole milk with saffron and pistachios.',
    isEggless: true,
    category: 'desserts'
  },
  {
    id: 'd6',
    name: 'DARK CHOCOLATE TRUFFLE SLICE',
    price: '₹280',
    description: '70% single-origin Callebaut dark chocolate ganache layered with moist chocolate velvet sponge.',
    isEggless: true,
    category: 'desserts'
  },
  {
    id: 'd7',
    name: 'TIRAMISU POT DE CRÈME',
    price: '₹330',
    description: 'Savoiardi sponge soaked in Capella espresso, layered with whipped mascarpone cream and cocoa dusting.',
    isEggless: true,
    category: 'desserts'
  },
  {
    id: 'd8',
    name: 'BERRY CRUMBLE TART',
    price: '₹290',
    description: 'Shortcrust butter pastry filled with wild blueberry and raspberry compote topped with golden butter crumble.',
    isEggless: true,
    category: 'desserts'
  }
];

export const DRINKS_MENU: MenuItem[] = [
  {
    id: 'b1',
    name: 'SPECIALTY CEREMONIAL MATCHA',
    price: '₹260',
    description: 'Stone-ground Uji green tea whisked with silky steamed milk or served chilled over ice.',
    isSpecial: true,
    category: 'drinks',
    badge: 'Signature'
  },
  {
    id: 'b2',
    name: 'SPANISH ICED LATTE',
    price: '₹250',
    description: 'Double shot of freshly extracted espresso sweetened with condensed milk and chilled over iced milk.',
    isSpecial: true,
    category: 'drinks',
    badge: 'Favorite'
  },
  {
    id: 'b3',
    name: 'ROASTED HAZELNUT ICED LATTE',
    price: '₹270',
    description: 'Rich dark espresso blended with roasted hazelnut syrup, chilled textured milk, and cocoa sprinkles.',
    isSpecial: true,
    category: 'drinks'
  },
  {
    id: 'b4',
    name: 'SIGNATURE VELVET HOT CHOCOLATE',
    price: '₹280',
    description: 'Slow-melted Belgian 54% dark chocolate with rich milk, topped with toasted house marshmallow.',
    isSpecial: true,
    category: 'drinks',
    badge: 'Comfort'
  },
  {
    id: 'b5',
    name: 'CLASSIC CAPPUCCINO',
    price: '₹200',
    description: 'Balanced espresso, hot steamed milk, and dense velvety microfoam with artisanal latte art.',
    category: 'drinks'
  },
  {
    id: 'b6',
    name: 'CITRUS COLD BREW TONIC',
    price: '₹240',
    description: '18-hour slow steeped cold brew coffee served over sparkling tonic and garnished with fresh orange peel.',
    category: 'drinks'
  },
  {
    id: 'b7',
    name: 'LAVENDER EARL GREY ICED TEA',
    price: '₹220',
    description: 'Steeped whole-leaf bergamot black tea infused with French culinary lavender and wildflower honey.',
    category: 'drinks'
  },
  {
    id: 'b8',
    name: 'HIBISCUS ROSE SPRITZER',
    price: '₹230',
    description: 'Tart dried Egyptian hibiscus tea brewed with organic rose water, sparkling soda, and mint leaves.',
    category: 'drinks'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'THE 142-YEAR HERITAGE VILLA',
    category: 'villa',
    categoryLabel: 'Ambiance & Architecture',
    isVideo: true,
    videoSrc: '/capella.mp4'
  },
  {
    id: 'g2',
    title: 'SIGNATURE BASQUE CHEESECAKE',
    category: 'desserts',
    categoryLabel: '100% Eggless Patisserie'
  },
  {
    id: 'g3',
    title: 'ARTISANAL UJI MATCHA',
    category: 'drinks',
    categoryLabel: 'Specialty Beverages'
  },
  {
    id: 'g4',
    title: 'WARM SUNLIT VERANDAH',
    category: 'villa',
    categoryLabel: 'Outdoor Seating',
    isVideo: true,
    videoSrc: '/capella2.mp4'
  },
  {
    id: 'g5',
    title: 'CIABATTA CHICKEN SANDWICH',
    category: 'savory',
    categoryLabel: 'Artisanal Savory'
  },
  {
    id: 'g6',
    title: 'MINIMALIST BENTO CAKES',
    category: 'desserts',
    categoryLabel: 'Custom Creations'
  },
  {
    id: 'g7',
    title: 'FRESH FLOWERS ON TABLES',
    category: 'villa',
    categoryLabel: 'Cafe Aesthetic'
  },
  {
    id: 'g8',
    title: 'SPANISH ICED LATTE',
    category: 'drinks',
    categoryLabel: 'Artisanal Coffee'
  },
  {
    id: 'g9',
    title: 'CHICKEN AGLIO OLIO PASTA',
    category: 'savory',
    categoryLabel: 'Gourmet Mains'
  }
];
