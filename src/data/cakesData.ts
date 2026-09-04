export interface CakeItem {
  id: string;
  name: string;
  category: 'buttercream' | 'freshcream' | 'special' | 'fusion';
  categoryLabel: string;
  halfKgPrice: number;
  oneKgPrice: number;
  description: string;
  spongeType: string;
  frostingType: string;
  flavorNotes: string[];
  imageUrl?: string;
  visualAesthetic: {
    baseColor: string;
    accentColor: string;
    decorStyle: string;
    finishType: string;
  };
  badge?: string;
  isSeasonal?: boolean;
}

export const CAKE_IMAGES: Record<string, string> = {
  // Buttercream Cakes
  'bc-vanilla': 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=700&q=80',
  'bc-chocolate': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
  'bc-oreo': 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=700&q=80',
  'bc-choc-chip': 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=700&q=80',
  'bc-red-velvet': 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=700&q=80',
  'bc-neapolitan': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80',
  'bc-victoria': 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=700&q=80',
  'bc-red-velvet-naked': 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=700&q=80',
  'bc-mocha': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
  'bc-caramel': 'https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&w=700&q=80',

  // Fresh Cream Cakes
  'fc-butterscotch': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=700&q=80',
  'fc-pineapple': 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=700&q=80',
  'fc-black-forest': 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=700&q=80',
  'fc-white-forest': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80',
  'fc-chocolate-truffle': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
  'fc-irish-coffee': 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=80',
  'fc-dark-forest': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
  'fc-vancho': 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=700&q=80',
  'fc-mixed-fruit': 'https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=700&q=80',
  'fc-mango': 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=700&q=80',

  // Special Cakes
  'sp-choc-ganache': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
  'sp-vanilla-blueberry': 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=700&q=80',
  'sp-rose-pistachio': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
  'sp-german-chocolate': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
  'sp-choc-almond': 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=700&q=80',
  'sp-carrot-walnut': 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=700&q=80',
  'sp-date-walnut': 'https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&w=700&q=80',
  'sp-red-velvet-cream-cheese': 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=700&q=80',
  'sp-red-velvet-chocolate': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
  'sp-belgian-ganache': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
  'sp-ferrero-rocher': 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=700&q=80',
  'sp-lotus-biscoff': 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=700&q=80',
  'sp-mixed-fruit-special': 'https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=700&q=80',

  // Indian Fusion Cakes
  'fus-rasmalai': 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=700&q=80',
  'fus-gulab-jamun': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=700&q=80'
};

export const getCakeImage = (cake: CakeItem): string => {
  return CAKE_IMAGES[cake.id] || cake.imageUrl || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80';
};

export const CAKES_DATA: CakeItem[] = [
  // -------------------------------------------------------------
  // 1. BUTTERCREAM CAKES
  // -------------------------------------------------------------
  {
    id: 'bc-vanilla',
    name: 'Vanilla Buttercream',
    category: 'buttercream',
    categoryLabel: 'Buttercream Cakes',
    halfKgPrice: 500,
    oneKgPrice: 900,
    description: 'Classic Madagascar vanilla bean sponge layered with fluffy, velvety American buttercream and delicate crumb borders.',
    spongeType: 'Madagascar Vanilla Bean Sponge',
    frostingType: 'Silky Vanilla Buttercream',
    flavorNotes: ['Aromatic Vanilla', 'Warm Cream', 'Light Sweetness'],
    visualAesthetic: {
      baseColor: '#f9f6f0',
      accentColor: '#c5a880',
      decorStyle: 'Clean vertical ribbon scrape with soft vanilla rosettes',
      finishType: 'Smooth Semi-Matte'
    }
  },
  {
    id: 'bc-chocolate',
    name: 'Chocolate Buttercream',
    category: 'buttercream',
    categoryLabel: 'Buttercream Cakes',
    halfKgPrice: 500,
    oneKgPrice: 900,
    description: 'Deep cocoa sponge with rich Dutch-processed chocolate buttercream and shaved dark chocolate shavings.',
    spongeType: 'Dutch Cocoa Moist Sponge',
    frostingType: 'Whipped Dark Chocolate Buttercream',
    flavorNotes: ['Dark Cocoa', 'Malty Chocolate', 'Rich Butter'],
    visualAesthetic: {
      baseColor: '#3d261d',
      accentColor: '#c5a880',
      decorStyle: 'Textured horizontal spatula swirl with cocoa curls',
      finishType: 'Rich Dark Cocoa Finish'
    },
    badge: 'Classic'
  },
  {
    id: 'bc-oreo',
    name: 'Oreo Buttercream',
    category: 'buttercream',
    categoryLabel: 'Buttercream Cakes',
    halfKgPrice: 550,
    oneKgPrice: 1000,
    description: 'Fluffy vanilla-cocoa sponge packed with crushed Oreo cookies inside and folded into creamy cookies & cream frosting.',
    spongeType: 'Vanilla-Cocoa Marbled Sponge',
    frostingType: 'Cookies & Cream Buttercream',
    flavorNotes: ['Crunchy Oreo', 'Sweet Vanilla Cream', 'Dark Biscuit'],
    visualAesthetic: {
      baseColor: '#e3dfd8',
      accentColor: '#2b2927',
      decorStyle: 'Oreo crumb speckled exterior with whole mini Oreo crowns',
      finishType: 'Cookies & Cream Flecked'
    },
    badge: 'Crowd Favorite'
  },
  {
    id: 'bc-choc-chip',
    name: 'Chocolate Chip',
    category: 'buttercream',
    categoryLabel: 'Buttercream Cakes',
    halfKgPrice: 550,
    oneKgPrice: 1000,
    description: 'Tender golden sponge studded with Callebaut semi-sweet chocolate morsels and frosted with light chocolate chip buttercream.',
    spongeType: 'Golden Buttermilk Sponge with Choc Chips',
    frostingType: 'Vanilla Choc-Chip Buttercream',
    flavorNotes: ['Melted Choc Chips', 'Vanilla Butter', 'Soft Crumb'],
    visualAesthetic: {
      baseColor: '#f5eee6',
      accentColor: '#4a2f23',
      decorStyle: 'Cascading mini chocolate chip rim with piped stars',
      finishType: 'Textured Chip Border'
    }
  },
  {
    id: 'bc-red-velvet',
    name: 'Red Velvet Buttercream',
    category: 'buttercream',
    categoryLabel: 'Buttercream Cakes',
    halfKgPrice: 600,
    oneKgPrice: 1100,
    description: 'Iconic scarlet buttermilk-cocoa sponge paired with silky vanilla buttercream and a dusting of crimson velvet sponge crumbs.',
    spongeType: 'Signature Crimson Buttermilk Cocoa',
    frostingType: 'Silky Vanilla Buttercream',
    flavorNotes: ['Tangy Buttermilk', 'Subtle Cocoa', 'Velvety Sweet'],
    visualAesthetic: {
      baseColor: '#8a1c27',
      accentColor: '#f9f6f0',
      decorStyle: 'Vibrant red sponge crumble crown with white butter rosettes',
      finishType: 'Velvet Crumb Accent'
    },
    badge: 'Popular'
  },
  {
    id: 'bc-neapolitan',
    name: 'Neapolitan',
    category: 'buttercream',
    categoryLabel: 'Buttercream Cakes',
    halfKgPrice: 600,
    oneKgPrice: 1100,
    description: 'Three distinct tiers of chocolate, strawberry, and vanilla sponge layered with matching trio flavored buttercreams.',
    spongeType: 'Trio Layer: Chocolate, Berry & Vanilla',
    frostingType: 'Three-Tone Neapolitan Swirl Frosting',
    flavorNotes: ['Wild Strawberry', 'Rich Chocolate', 'Pure Vanilla'],
    visualAesthetic: {
      baseColor: '#f4c7ce',
      accentColor: '#3a2016',
      decorStyle: 'Tri-color ombré exterior blending pink, cream and chocolate',
      finishType: 'Ombré Striped'
    }
  },
  {
    id: 'bc-victoria',
    name: 'Victoria Sponge',
    category: 'buttercream',
    categoryLabel: 'Buttercream Cakes',
    halfKgPrice: 600,
    oneKgPrice: 1100,
    description: 'Quintessential British afternoon sponge filled with artisanal raspberry seedless jam and pure whipped buttercream.',
    spongeType: 'Traditional Golden Aerated Sponge',
    frostingType: 'Whipped Buttercream & Seedless Raspberry Jam',
    flavorNotes: ['Tart Raspberry', 'Golden Butter', 'Powdered Sugar'],
    visualAesthetic: {
      baseColor: '#faf3e0',
      accentColor: '#a81c3c',
      decorStyle: 'Double-tier sandwich style with powdered sugar snow & berry garnish',
      finishType: 'Vintage Royal Style'
    }
  },
  {
    id: 'bc-red-velvet-naked',
    name: 'Red Velvet Naked',
    category: 'buttercream',
    categoryLabel: 'Buttercream Cakes',
    halfKgPrice: 650,
    oneKgPrice: 1200,
    description: 'Aesthetic semi-naked presentation showing off deep ruby red sponge layers through a rustic sheer scrape of buttercream.',
    spongeType: 'Crimson Velvet Sponge',
    frostingType: 'Sheer-Scraped Vanilla Buttercream',
    flavorNotes: ['Subtle Cocoa', 'Tangy Buttermilk', 'Light Vanilla'],
    visualAesthetic: {
      baseColor: '#7a1923',
      accentColor: '#eae5dc',
      decorStyle: 'Minimalist semi-naked scrape with fresh seasonal florals',
      finishType: 'Rustic Semi-Naked'
    },
    badge: 'Aesthetic Trend'
  },
  {
    id: 'bc-mocha',
    name: 'Mocha Buttercream',
    category: 'buttercream',
    categoryLabel: 'Buttercream Cakes',
    halfKgPrice: 650,
    oneKgPrice: 1200,
    description: 'Espresso-infused chocolate cake layered with aromatic dark roast coffee buttercream and cocoa dusted peaks.',
    spongeType: 'Dark Roast Espresso Cocoa Sponge',
    frostingType: 'Silky Mocha Coffee Buttercream',
    flavorNotes: ['Roasted Arabica', 'Dark Chocolate', 'Caramel Undertones'],
    visualAesthetic: {
      baseColor: '#4d3326',
      accentColor: '#c5a880',
      decorStyle: 'Espresso-toned textured swirls with dark roasted coffee bean accents',
      finishType: 'Coffee Art Swirls'
    }
  },
  {
    id: 'bc-caramel',
    name: 'Salted Caramel Buttercream',
    category: 'buttercream',
    categoryLabel: 'Buttercream Cakes',
    halfKgPrice: 700,
    oneKgPrice: 1300,
    description: 'Golden sponge soaked in house-made salted amber toffee caramel, frosted with caramel buttercream and golden drips.',
    spongeType: 'Caramelised Golden Brown Sugar Sponge',
    frostingType: 'Amber Caramel Buttercream & Sea Salt Drizzle',
    flavorNotes: ['Sea Salt Flakes', 'Buttery Toffee', 'Burnt Sugar'],
    visualAesthetic: {
      baseColor: '#d69e5e',
      accentColor: '#7b4e23',
      decorStyle: 'Artisanal glossy caramel drip with Maldon sea salt flakes',
      finishType: 'Glossy Drip & Shards'
    },
    badge: 'Bestseller'
  },

  // -------------------------------------------------------------
  // 2. FRESH CREAM CAKES
  // -------------------------------------------------------------
  {
    id: 'fc-butterscotch',
    name: 'Butterscotch Fresh Cream',
    category: 'freshcream',
    categoryLabel: 'Fresh Cream Cakes',
    halfKgPrice: 450,
    oneKgPrice: 800,
    description: 'Light vanilla sponge soaked in butterscotch syrup, filled with crunchy caramelized praline and dairy whipped cream.',
    spongeType: 'Light Aerated Chiffon Sponge',
    frostingType: 'Stabilized Dairy Whipped Fresh Cream',
    flavorNotes: ['Butterscotch Crunch', 'Caramel Praline', 'Airy Cream'],
    visualAesthetic: {
      baseColor: '#fff9eb',
      accentColor: '#d49b4b',
      decorStyle: 'Golden butterscotch glaze drip with toasted praline crunch rim',
      finishType: 'Whipped Cream Rosettes'
    }
  },
  {
    id: 'fc-pineapple',
    name: 'Pineapple Fresh Cream',
    category: 'freshcream',
    categoryLabel: 'Fresh Cream Cakes',
    halfKgPrice: 450,
    oneKgPrice: 800,
    description: 'Ultra-moist vanilla sponge layered with juicy caramelized pineapple titbits and fluffy dairy fresh cream.',
    spongeType: 'Pineapple-Infused Vanilla Chiffon',
    frostingType: 'Featherlight Fresh Whipped Cream',
    flavorNotes: ['Tropical Pineapple', 'Tangy Citrus', 'Soft Vanilla Cream'],
    visualAesthetic: {
      baseColor: '#fdfbf5',
      accentColor: '#f3c442',
      decorStyle: 'Crown of glazed pineapple blossoms and bright candied cherries',
      finishType: 'Classic Patisserie Cream'
    }
  },
  {
    id: 'fc-black-forest',
    name: 'Black Forest',
    category: 'freshcream',
    categoryLabel: 'Fresh Cream Cakes',
    halfKgPrice: 450,
    oneKgPrice: 800,
    description: 'Traditional German-style cocoa sponge soaked in cherry syrup, layered with tart red cherries and pure whipped cream.',
    spongeType: 'Deep Dutch Cocoa Sponge',
    frostingType: 'Dairy Whipped Cream & Cherry Compote',
    flavorNotes: ['Sour Red Cherries', 'Dark Chocolate Shavings', 'Fresh Cream'],
    visualAesthetic: {
      baseColor: '#2b1b15',
      accentColor: '#961a29',
      decorStyle: 'Encrusted in Callebaut dark chocolate curls with ruby cherries',
      finishType: 'Chocolate Curl Encrusted'
    },
    badge: 'Heritage Classic'
  },
  {
    id: 'fc-white-forest',
    name: 'White Forest',
    category: 'freshcream',
    categoryLabel: 'Fresh Cream Cakes',
    halfKgPrice: 450,
    oneKgPrice: 800,
    description: 'Pristine vanilla chiffon sponge layered with spiced cherry compote, fresh cream, and shavings of pure white Belgian chocolate.',
    spongeType: 'Velvety White Vanilla Sponge',
    frostingType: 'Whipped White Cream & Belgian White Curls',
    flavorNotes: ['Belgian White Chocolate', 'Spiced Cherry', 'Airy Cream'],
    visualAesthetic: {
      baseColor: '#ffffff',
      accentColor: '#9c1d2e',
      decorStyle: 'Snowy blanket of fine white chocolate shavings with red cherries',
      finishType: 'Snow White Shavings'
    }
  },
  {
    id: 'fc-chocolate-truffle',
    name: 'Chocolate Truffle',
    category: 'freshcream',
    categoryLabel: 'Fresh Cream Cakes',
    halfKgPrice: 500,
    oneKgPrice: 900,
    description: 'Rich dark chocolate cake layered with silky chocolate mousse and coated in mirror-smooth dark chocolate truffle ganache.',
    spongeType: 'Moist Dark Chocolate Sponge',
    frostingType: 'Soft Chocolate Truffle Cream & Mirror Glaze',
    flavorNotes: ['Intense Cocoa', 'Velvety Ganache', 'Silky Melt'],
    visualAesthetic: {
      baseColor: '#1e110c',
      accentColor: '#c5a880',
      decorStyle: 'Glossy dark chocolate mirror finish with golden leaf dust',
      finishType: 'Mirror Glaze Elegance'
    },
    badge: 'Bestseller'
  },
  {
    id: 'fc-irish-coffee',
    name: 'Irish Coffee Fresh Cream',
    category: 'freshcream',
    categoryLabel: 'Fresh Cream Cakes',
    halfKgPrice: 550,
    oneKgPrice: 900,
    description: 'Espresso-steeped chocolate sponge infused with rich non-alcoholic Irish whiskey notes and whipped coffee dairy cream.',
    spongeType: 'Coffee-Soaked Cocoa Sponge',
    frostingType: 'Whipped Irish Cream & Espresso Dust',
    flavorNotes: ['Irish Cream Essence', 'Dark Espresso', 'Sweet Cocoa'],
    visualAesthetic: {
      baseColor: '#453127',
      accentColor: '#d6be96',
      decorStyle: 'Two-tone coffee cream piping with fine cocoa stencil work',
      finishType: 'Coffee Bean Accent'
    }
  },
  {
    id: 'fc-dark-forest',
    name: 'Dark Forest',
    category: 'freshcream',
    categoryLabel: 'Fresh Cream Cakes',
    halfKgPrice: 550,
    oneKgPrice: 900,
    description: 'An intensified black forest with 70% dark chocolate mousse, macerated wild black cherries, and cocoa whipped cream.',
    spongeType: 'Intense 70% Dark Cocoa Sponge',
    frostingType: 'Dark Chocolate Cream & Wild Black Cherries',
    flavorNotes: ['Bittersweet 70% Cocoa', 'Black Cherry Compote', 'Truffle Flakes'],
    visualAesthetic: {
      baseColor: '#170f0c',
      accentColor: '#5c0f18',
      decorStyle: 'Dark chocolate bark shards with deep black cherry jewels',
      finishType: 'Rustic Chocolate Shards'
    }
  },
  {
    id: 'fc-vancho',
    name: 'Vancho',
    category: 'freshcream',
    categoryLabel: 'Fresh Cream Cakes',
    halfKgPrice: 600,
    oneKgPrice: 1100,
    description: 'The legendary harmony of alternate vanilla and chocolate sponge layers covered in contrasting dual chocolate truffle drip.',
    spongeType: 'Alternate Vanilla & Dark Chocolate Sponge',
    frostingType: 'Dairy Cream & Dual Truffle Ganache',
    flavorNotes: ['Dual Chocolate', 'Smooth Vanilla', 'Melted Truffle'],
    visualAesthetic: {
      baseColor: '#2b1b15',
      accentColor: '#f7f4ef',
      decorStyle: 'Half-and-half dark and white Belgian chocolate drizzle',
      finishType: 'Dual Tone Glaze'
    },
    badge: 'Mangalore Favorite'
  },
  {
    id: 'fc-mixed-fruit',
    name: 'Fresh Mixed Fruit',
    category: 'freshcream',
    categoryLabel: 'Fresh Cream Cakes',
    halfKgPrice: 600,
    oneKgPrice: 1100,
    description: 'Light vanilla chiffon enveloped in fresh whipped cream and loaded with kiwi, pomegranate, pineapple, and seasonal grapes.',
    spongeType: 'Airy Vanilla Chiffon Sponge',
    frostingType: 'Fresh Whipped Dairy Cream',
    flavorNotes: ['Fresh Kiwi', 'Sweet Grapes', 'Ruby Pomegranate', 'Light Cream'],
    visualAesthetic: {
      baseColor: '#ffffff',
      accentColor: '#43973c',
      decorStyle: 'Abundant crescent crown of glazed fresh orchard fruits',
      finishType: 'Fresh Orchard Medley'
    },
    badge: 'Refreshing'
  },
  {
    id: 'fc-mango',
    name: 'Fresh Mango (Seasonal)',
    category: 'freshcream',
    categoryLabel: 'Fresh Cream Cakes',
    halfKgPrice: 700,
    oneKgPrice: 1300,
    description: 'Seasonal Alphonso mango pulp infused sponge layered with fresh mango cubes and luscious mango mascarpone cream.',
    spongeType: 'Alphonso Mango Scented Sponge',
    frostingType: 'Fresh Alphonso Mango Whipped Cream',
    flavorNotes: ['Ripe Alphonso Mango', 'Cardamom Touch', 'Silky Cream'],
    visualAesthetic: {
      baseColor: '#ffba3b',
      accentColor: '#ffffff',
      decorStyle: 'Artful hand-arranged Alphonso mango rose petal crown',
      finishType: 'Alphonso Rose Crown'
    },
    isSeasonal: true,
    badge: 'Seasonal Special'
  },

  // -------------------------------------------------------------
  // 3. SPECIAL CAKES
  // -------------------------------------------------------------
  {
    id: 'sp-choc-ganache',
    name: 'Chocolate Ganache',
    category: 'special',
    categoryLabel: 'Special Cakes',
    halfKgPrice: 700,
    oneKgPrice: 1300,
    description: 'Ultra-dense fudge chocolate cake layered with 54% dark Belgian chocolate silk ganache and gold leaf dust.',
    spongeType: 'Decadent Chocolate Fudge Sponge',
    frostingType: '54% Belgian Chocolate Silk Ganache',
    flavorNotes: ['Belgian Ganache', 'Silky Truffle', 'Dark Cocoa'],
    visualAesthetic: {
      baseColor: '#21130d',
      accentColor: '#c5a880',
      decorStyle: 'Smooth glossy dark ganache with 24k edible gold flakes',
      finishType: 'Gold Leaf Minimalist'
    }
  },
  {
    id: 'sp-vanilla-blueberry',
    name: 'Vanilla with Blueberry',
    category: 'special',
    categoryLabel: 'Special Cakes',
    halfKgPrice: 700,
    oneKgPrice: 1300,
    description: 'Vanilla bean sponge layered with artisanal wild Canadian blueberry compote and light lilac tinted cream cheese frosting.',
    spongeType: 'Madagascar Vanilla Bean Sponge',
    frostingType: 'Wild Blueberry Compote & Cream Frosting',
    flavorNotes: ['Wild Blueberries', 'Tart Fruit', 'Vanilla Cream'],
    visualAesthetic: {
      baseColor: '#ded8eb',
      accentColor: '#362b59',
      decorStyle: 'Lilac watercolor swirl with fresh blueberry compote crown',
      finishType: 'Watercolor Swirl'
    },
    badge: 'Pastel Aesthetic'
  },
  {
    id: 'sp-rose-pistachio',
    name: 'Rose Pistachio',
    category: 'special',
    categoryLabel: 'Special Cakes',
    halfKgPrice: 700,
    oneKgPrice: 1300,
    description: 'Cardamom and rose water infused soft sponge layered with roasted Iranian pistachio cream and organic dried rose petals.',
    spongeType: 'Rose Water & Cardamom Chiffon',
    frostingType: 'Roasted Pistachio Mousseline Cream',
    flavorNotes: ['Organic Rose Water', 'Iranian Pistachios', 'Green Cardamom'],
    visualAesthetic: {
      baseColor: '#e9f0e4',
      accentColor: '#c95d73',
      decorStyle: 'Crushed emerald pistachio border with fragrant dried damask rose petals',
      finishType: 'Botanical Elegance'
    },
    badge: 'Signature Specialty'
  },
  {
    id: 'sp-german-chocolate',
    name: 'German Chocolate',
    category: 'special',
    categoryLabel: 'Special Cakes',
    halfKgPrice: 750,
    oneKgPrice: 1400,
    description: 'Rich chocolate sponge filled with traditional slow-cooked caramelized coconut, toasted pecans, and dark fudge frosting.',
    spongeType: 'Deep Cocoa Butter Sponge',
    frostingType: 'Caramelized Coconut & Pecan Custard',
    flavorNotes: ['Toasted Coconut', 'Caramelized Pecans', 'Dark Cocoa'],
    visualAesthetic: {
      baseColor: '#3d251a',
      accentColor: '#bfa06b',
      decorStyle: 'Crown of toasted coconut pecan caramel with dark chocolate piping',
      finishType: 'Textured Coconut Praline'
    }
  },
  {
    id: 'sp-choc-almond',
    name: 'Chocolate Almond',
    category: 'special',
    categoryLabel: 'Special Cakes',
    halfKgPrice: 750,
    oneKgPrice: 1400,
    description: 'Moist almond flour blended chocolate cake layered with roasted Californian almond praline and chocolate ganache.',
    spongeType: 'Almond Meal Chocolate Sponge',
    frostingType: 'Silky Chocolate Truffle & Almond Praline',
    flavorNotes: ['Toasted Almond Slivers', 'Sweet Praline', 'Belgian Cocoa'],
    visualAesthetic: {
      baseColor: '#2b1912',
      accentColor: '#e6c898',
      decorStyle: 'Completely coated in toasted crunchy almond flakes and gold dust',
      finishType: 'Toasted Almond Crust'
    }
  },
  {
    id: 'sp-carrot-walnut',
    name: 'Carrot Walnut',
    category: 'special',
    categoryLabel: 'Special Cakes',
    halfKgPrice: 750,
    oneKgPrice: 1400,
    description: 'Spiced cake infused with freshly grated juicy carrots, toasted walnuts, cinnamon, and frosted with tangy cream cheese.',
    spongeType: 'Spiced Carrot & Walnut Crumb',
    frostingType: 'Whipped Philadelphia Cream Cheese',
    flavorNotes: ['Ceylon Cinnamon', 'Nutmeg', 'Crunchy Walnut', 'Tangy Cream Cheese'],
    visualAesthetic: {
      baseColor: '#f7f4ed',
      accentColor: '#c76e2e',
      decorStyle: 'Semi-naked cream cheese with toasted walnut halves & cinnamon dusting',
      finishType: 'Spiced Rustic'
    },
    badge: 'Warm Comfort'
  },
  {
    id: 'sp-date-walnut',
    name: 'Date & Walnut',
    category: 'special',
    categoryLabel: 'Special Cakes',
    halfKgPrice: 750,
    oneKgPrice: 1400,
    description: 'Naturally sweetened soft cake packed with Medjool dates, roasted Kashmiri walnuts, and warm toffee butter glaze.',
    spongeType: 'Medjool Date & Caramelized Crumb',
    frostingType: 'Brown Butter & Date Caramel Glaze',
    flavorNotes: ['Medjool Dates', 'Kashmiri Walnuts', 'Brown Butter Toffee'],
    visualAesthetic: {
      baseColor: '#4f372d',
      accentColor: '#c59d5f',
      decorStyle: 'Caramelised date slices, roasted walnut halves, and amber glaze',
      finishType: 'Artisanal Natural'
    }
  },
  {
    id: 'sp-red-velvet-cream-cheese',
    name: 'Red Velvet Cream Cheese',
    category: 'special',
    categoryLabel: 'Special Cakes',
    halfKgPrice: 750,
    oneKgPrice: 1400,
    description: 'The authentic American classic: scarlet buttermilk-cocoa sponge generously layered with whipped Philadelphia cream cheese.',
    spongeType: 'Classic Scarlet Buttermilk Sponge',
    frostingType: 'Tangy Philadelphia Cream Cheese Frosting',
    flavorNotes: ['Tangy Cream Cheese', 'Subtle Dutch Cocoa', 'Buttermilk'],
    visualAesthetic: {
      baseColor: '#8a1824',
      accentColor: '#fdfbfa',
      decorStyle: 'Piped pillowy cream cheese swirls with red velvet crumbs',
      finishType: 'Patisserie Classic'
    },
    badge: 'Bestseller'
  },
  {
    id: 'sp-red-velvet-chocolate',
    name: 'Red Velvet Chocolate',
    category: 'special',
    categoryLabel: 'Special Cakes',
    halfKgPrice: 750,
    oneKgPrice: 1400,
    description: 'Crimson velvet sponge paired with dark Belgian chocolate ganache filling and whipped cocoa cream.',
    spongeType: 'Scarlet Cocoa Sponge',
    frostingType: 'Dark Belgian Chocolate Ganache',
    flavorNotes: ['Deep Belgian Chocolate', 'Velvet Crumb', 'Dark Ganache'],
    visualAesthetic: {
      baseColor: '#2b1519',
      accentColor: '#b52435',
      decorStyle: 'Dark chocolate drip over crimson sponge with ruby rosettes',
      finishType: 'Dual Color Drama'
    }
  },
  {
    id: 'sp-belgian-ganache',
    name: 'Belgian Chocolate Ganache',
    category: 'special',
    categoryLabel: 'Special Cakes',
    halfKgPrice: 800,
    oneKgPrice: 1500,
    description: '70% pure Callebaut single-origin dark chocolate melted with European cream over rich mud cake sponge.',
    spongeType: 'Rich Dark Chocolate Mud Sponge',
    frostingType: '70% Callebaut Pure Belgian Ganache',
    flavorNotes: ['70% Single Origin Cocoa', 'Fudge Melt', 'Bittersweet Luxury'],
    visualAesthetic: {
      baseColor: '#1a0d09',
      accentColor: '#c5a880',
      decorStyle: 'Ultra-luxurious satin black ganache with gold leaf and handcrafted chocolate sails',
      finishType: 'Haute Couture Patisserie'
    },
    badge: 'Luxury Indulgence'
  },
  {
    id: 'sp-ferrero-rocher',
    name: 'Ferrero Rocher',
    category: 'special',
    categoryLabel: 'Special Cakes',
    halfKgPrice: 800,
    oneKgPrice: 1500,
    description: 'Dark cocoa cake filled with authentic Nutella hazelnut mousse, crispy wafer crumbles, and whole Ferrero Rocher truffles.',
    spongeType: 'Hazelnut Dark Cocoa Sponge',
    frostingType: 'Nutella Cream & Crispy Feuilletine Crunch',
    flavorNotes: ['Roasted Piedmont Hazelnuts', 'Creamy Nutella', 'Crispy Wafer'],
    visualAesthetic: {
      baseColor: '#2b1b14',
      accentColor: '#d6a642',
      decorStyle: 'Nutella drip, crushed roasted hazelnut crust, and gold-foiled Ferrero rocher crown',
      finishType: 'Gourmet Truffle Crown'
    },
    badge: 'Extravagant'
  },
  {
    id: 'sp-lotus-biscoff',
    name: 'Lotus Biscoff',
    category: 'special',
    categoryLabel: 'Special Cakes',
    halfKgPrice: 800,
    oneKgPrice: 1500,
    description: 'Spiced Belgian speculoos cookie sponge layered with smooth Lotus Biscoff spread, crushed cookies, and caramel cream.',
    spongeType: 'Caramelized Speculoos Sponge',
    frostingType: 'Melted Lotus Biscoff Spread & Biscoff Cream',
    flavorNotes: ['Caramel Speculoos', 'Cinnamon Spice', 'Crunchy Biscuit'],
    visualAesthetic: {
      baseColor: '#b86a34',
      accentColor: '#f7edd8',
      decorStyle: 'Signature thick Biscoff spread cascade with whole Lotus biscuits and crumb halo',
      finishType: 'Speculoos Drip Halo'
    },
    badge: 'Most Viral'
  },
  {
    id: 'sp-mixed-fruit-special',
    name: 'Special Mixed Fruit Gateau',
    category: 'special',
    categoryLabel: 'Special Cakes',
    halfKgPrice: 800,
    oneKgPrice: 1500,
    description: 'Premium light sponge layered with exotic imported berries, passion fruit coulis, fresh kiwi, and white chocolate mousseline.',
    spongeType: 'Tahitian Vanilla Bean Chiffon',
    frostingType: 'White Chocolate Mousseline & Passionfruit Glaze',
    flavorNotes: ['Imported Blueberries', 'Passionfruit', 'Strawberries', 'White Chocolate'],
    visualAesthetic: {
      baseColor: '#ffffff',
      accentColor: '#d43555',
      decorStyle: 'Geometric arrangement of fresh blueberries, strawberries, kiwi, and white chocolate collar',
      finishType: 'Exotic Fruit Gateau'
    }
  },

  // -------------------------------------------------------------
  // 4. INDIAN FUSION CAKES
  // -------------------------------------------------------------
  {
    id: 'fus-rasmalai',
    name: 'Rasmalai Fusion Cake',
    category: 'fusion',
    categoryLabel: 'Indian Fusion Cakes',
    halfKgPrice: 600,
    oneKgPrice: 1100,
    description: 'Cardamom and saffron soaked sponge filled with juicy house-made rasmalai dumplings, saffron cream, pistachios, and dried roses.',
    spongeType: 'Saffron & Green Cardamom Chiffon',
    frostingType: 'Angoori Rasmalai Milk Whipped Cream',
    flavorNotes: ['Kesar Saffron', 'Elaichi Cardamom', 'Chhena Dumplings', 'Pistachio'],
    visualAesthetic: {
      baseColor: '#ffea9f',
      accentColor: '#bf2c47',
      decorStyle: 'Whole mini rasmalai dumplings on top with saffron strands, pistachios, and rose petals',
      finishType: 'Royal Saffron Celebration'
    },
    badge: 'Signature Fusion'
  },
  {
    id: 'fus-gulab-jamun',
    name: 'Gulab Jamun Fusion Cake',
    category: 'fusion',
    categoryLabel: 'Indian Fusion Cakes',
    halfKgPrice: 600,
    oneKgPrice: 1100,
    description: 'Warm spiced vanilla sponge steeped in rose-cardamom syrup, layered with soft mini gulab jamuns and whipped cream.',
    spongeType: 'Rose-Steeped Spiced Vanilla Sponge',
    frostingType: 'Rose Water Whipped Cream & Jamun Syrup',
    flavorNotes: ['Mawa Gulab Jamun', 'Rose Cardamom Syrup', 'Airy Cream'],
    visualAesthetic: {
      baseColor: '#f7eee1',
      accentColor: '#6e301e',
      decorStyle: 'Halved warm golden-brown gulab jamuns with silver vark and slivered almonds',
      finishType: 'Royal Festive Gateau'
    },
    badge: 'Festive Delight'
  }
];
