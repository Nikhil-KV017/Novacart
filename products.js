export const products = [
  {
    id: '1',
    title: 'Nova Apex 75 Mechanical Keyboard',
    description: 'A compact 75% hot-swappable mechanical keyboard featuring solid CNC aluminum casing, pre-lubed linear switches, custom double-shot PBT keycaps, and modular RGB lighting. Designed for the ultimate tactile typing experience.',
    price: 189.99,
    rating: 4.8,
    reviewsCount: 142,
    category: 'Keyboards',
    images: [
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=800&auto=format&fit=crop&q=80'
    ],
    specs: {
      'Layout': '75% Compact (82 Keys)',
      'Case Material': 'Anodized CNC Aluminum',
      'Switches': 'Nova Linear Jade (Pre-lubed, 45g actuation)',
      'Connectivity': 'USB-C, Bluetooth 5.1, 2.4GHz Wireless',
      'Battery Life': 'Up to 200 hours (RGB off)',
      'Hot-swap Support': '3-pin / 5-pin PCB mount'
    },
    inStock: true,
    featured: true,
    trending: true
  },
  {
    id: '2',
    title: 'AeroGlide Felt Desk Mat',
    description: 'Crafted from premium water-resistant Merino wool felt with a non-slip natural cork backing. Provides a soft, warm texture for your hands and optimal gliding performance for your high-precision optical mouse.',
    price: 39.99,
    rating: 4.6,
    reviewsCount: 88,
    category: 'Desk Accessories',
    images: [
      'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&auto=format&fit=crop&q=80'
    ],
    specs: {
      'Dimensions': '900mm x 400mm x 4mm',
      'Material': '80% Merino Wool Felt, 20% Cork',
      'Backing': 'Eco-friendly Natural Cork',
      'Stitching': 'Anti-fraying double-lock stitching',
      'Water Resistance': 'Spill-resistant protective coating'
    },
    inStock: true,
    featured: true,
    trending: false
  },
  {
    id: '3',
    title: 'Nova Orbit Studio Headphones',
    description: 'Studio-grade open-back audiophile headphones delivering an incredibly wide soundstage and pristine, color-free sound reproduction. Features custom 50mm dynamic drivers and premium memory foam earpads wrapped in breathable velour.',
    price: 299.99,
    rating: 4.9,
    reviewsCount: 64,
    category: 'Audio Gear',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80'
    ],
    specs: {
      'Driver Size': '50mm Dynamic Neodymium',
      'Frequency Response': '5Hz - 40,000Hz',
      'Impedance': '32 Ohms (Easy to drive)',
      'Sensitivity': '102 dB/mW',
      'Cable': '3m Detachable Oxygen-Free Copper (OFC)',
      'Weight': '285g'
    },
    inStock: true,
    featured: false,
    trending: true
  },
  {
    id: '4',
    title: 'Lumina Bar Monitor Lightbar',
    description: 'An elegant space-saving monitor lightbar featuring an asymmetrical optical design that illuminates only your desk space, eliminating screen glare and reducing eye strain. Dual control dials allow adjusting temperature and brightness.',
    price: 79.99,
    rating: 4.7,
    reviewsCount: 201,
    category: 'Lighting & Decor',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586218123156-6dd027f31be6?w=800&auto=format&fit=crop&q=80'
    ],
    specs: {
      'Power Source': 'USB-C (5V, 1A)',
      'Color Temperature': '2700K - 6500K (Warm to Cool)',
      'Color Rendering Index': 'Ra > 95 (Vivid accurate colors)',
      'Mounting Compatibility': 'Curved and flat monitors (1cm - 5cm)',
      'Material': 'Anodized Aluminum Alloy',
      'Controller': 'Wireless Desktop Dial'
    },
    inStock: true,
    featured: true,
    trending: true
  },
  {
    id: '5',
    title: 'Walnut Monitor Stand Riser',
    description: 'Elevate your monitor to an ergonomic viewing height while expanding usable desk space. Individually handcrafted from premium dark American walnut wood and reinforced with heavy-duty structural steel legs.',
    price: 119.99,
    rating: 4.5,
    reviewsCount: 52,
    category: 'Desk Accessories',
    images: [
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80'
    ],
    specs: {
      'Dimensions': '115cm x 22cm x 11cm',
      'Wood Type': 'Solid American Walnut',
      'Legs': 'Matte Powder-Coated Steel',
      'Weight Capacity': 'Up to 45kg (Supports dual monitors)',
      'Finish': 'Natural oil-wax finish'
    },
    inStock: true,
    featured: false,
    trending: false
  },
  {
    id: '6',
    title: 'Chronos Wireless Charging Station',
    description: 'A multi-device magnetic fast-charging dock crafted from polished glass and sandblasted aluminum. Supports simultaneous charging for your phone, smartwatch, and wireless earbuds, keeping cables organized.',
    price: 69.99,
    rating: 4.4,
    reviewsCount: 115,
    category: 'Desk Accessories',
    images: [
      'https://images.unsplash.com/photo-1622445262465-2481c4574875?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&auto=format&fit=crop&q=80'
    ],
    specs: {
      'Output': '15W Fast Qi Wireless Charging',
      'Device Compatibility': 'Qi-enabled phones, Apple Watch, AirPods Pro',
      'Connector': 'USB-C Input',
      'Dimensions': '180mm x 90mm x 15mm',
      'Safety': 'Over-temperature protection'
    },
    inStock: false,
    featured: false,
    trending: false
  },
  {
    id: '7',
    title: 'Krypton RGB Accent Panels (9-Pack)',
    description: 'Modular smart LED light panels that snap together in custom layouts. Synchronize with your computer audio, game environments, or create bespoke moving color gradients via the custom desktop application.',
    price: 149.99,
    rating: 4.6,
    reviewsCount: 76,
    category: 'Lighting & Decor',
    images: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80'
    ],
    specs: {
      'Panel Quantity': '9 Triangular Panels',
      'Max Colors': '16.7 Million Colors',
      'Max Power': '24W per controller',
      'Voice Assistant': 'Apple HomeKit, Alexa, Google Assistant',
      'Sync Features': 'Rhythm Music Visualizer, Screen Mirroring'
    },
    inStock: true,
    featured: false,
    trending: true
  },
  {
    id: '8',
    title: 'Vocalis XLR Desktop Microphone',
    description: 'Broadcast-quality XLR condenser microphone optimized for vocal clarity and detail. Features a cardioid polar pattern to isolate target sound from background noise, and a built-in heavy-duty shock mount.',
    price: 159.99,
    rating: 4.8,
    reviewsCount: 93,
    category: 'Audio Gear',
    images: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80'
    ],
    specs: {
      'Capsule Type': '25mm Condenser',
      'Polar Pattern': 'Cardioid',
      'Frequency Range': '20Hz - 20,000Hz',
      'Output': '3-pin Gold-plated XLR male',
      'Required Power': '48V Phantom Power',
      'Impedance': '100 Ohms'
    },
    inStock: true,
    featured: true,
    trending: false
  }
];

export const reviews = {
  '1': [
    { id: 'r1', author: 'Liam S.', rating: 5, comment: 'Hands down the best mechanical keyboard I have owned. The Jade switches are incredibly smooth, and the anodized heavy aluminum case sounds spectacular.', date: '2026-05-15' },
    { id: 'r2', author: 'Emma K.', rating: 4, comment: 'Beautiful board! I love the RGB presets. Knocked down one star because the Bluetooth pairing took a few attempts initially, but now it works flawlessly.', date: '2026-06-02' }
  ],
  '2': [
    { id: 'r3', author: 'Marcus V.', rating: 5, comment: 'So comfortable to rest my arms on. Spill resistance works too; spilled a cup of tea, and the droplets just beaded up so I could wipe them off.', date: '2026-04-20' },
    { id: 'r4', author: 'David L.', rating: 4, comment: 'Good quality felt. Mouse tracking is perfect, but it slides slightly on my glass desk. Wish it had a bit more cork friction.', date: '2026-05-30' }
  ],
  '3': [
    { id: 'r5', author: 'Sophia H.', rating: 5, comment: 'Phenomenal audio fidelity. The soundstage is so wide it feels like the instruments are playing around me. Extremely comfortable for long editing sessions.', date: '2026-06-11' },
    { id: 'r6', author: 'James R.', rating: 5, comment: 'Detail retrieval is top notch. Highs are crisp, mids are clear, bass is tight and fast. Perfect companion for my desktop AMP.', date: '2026-06-25' }
  ],
  '4': [
    { id: 'r7', author: 'Chloe M.', rating: 5, comment: 'This is a game changer for working late at night. No glare on the screen whatsoever, and the wireless dial makes adjustability super convenient.', date: '2026-05-10' },
    { id: 'r8', author: 'Alex B.', rating: 4, comment: 'Fits my ultra-wide monitor perfectly. Excellent build quality, dial is very premium to turn.', date: '2026-06-19' }
  ]
};
