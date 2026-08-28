// ── Data: Dishes ──────────────────────────────────────────────────────────────
export const dishes = [
  {
    id: 1,
    name: 'Charred Herb Risotto',
    type: 'veg',
    image: '/truffle_risotto_1787821819140.jpg',
    description: 'Artisanal risotto with truffle shavings, porcini mushrooms, and aged parmesan. Finished with cold-pressed herb oil.',
    profile: ['Earthy', 'Rich', 'Aromatic'],
  },
  {
    id: 2,
    name: 'Ember Glazed Salmon',
    type: 'nonveg',
    image: '/ember_salmon_1787821956715.jpg',
    description: 'Scottish salmon kissed by open flame, served with asparagus, edamame purée and smoked dashi beurre blanc.',
    profile: ['Smoky', 'Delicate', 'Refined'],
  },
  {
    id: 3,
    name: 'Lamb Rack Prestige',
    type: 'nonveg',
    image: '/lamb_rack_1787821972800.jpg',
    description: 'Herb-crusted frenched rack of lamb, medium-rare. Served with glazed root vegetables and a Bordeaux reduction.',
    profile: ['Bold', 'Herbal', 'Luxurious'],
  },
  {
    id: 4,
    name: 'Tandoori Paneer Tikka',
    type: 'veg',
    image: '/paneer_tikka_1787821986806.jpg',
    description: 'Hand-crafted paneer charred in a traditional tandoor, dressed with rose marinade, edible flowers and green chutney.',
    profile: ['Smoky', 'Vibrant', 'Tender'],
  },
  {
    id: 5,
    name: 'Butter Garlic Prawns',
    type: 'nonveg',
    image: '/butter_prawns_1787822037776.jpg',
    description: 'Jumbo tiger prawns sautéed in cultured butter, roasted garlic, lemon zest and fresh herbs. Simply indulgent.',
    profile: ['Buttery', 'Aromatic', 'Oceanic'],
  },
  {
    id: 6,
    name: 'Charred Seasonal Vegetables',
    type: 'veg',
    image: '/charred_veggies_1787822051948.jpg',
    description: 'Heritage vegetables slow-roasted over open coals, finished with herb salsa verde and crème fraîche.',
    profile: ['Smoky', 'Fresh', 'Seasonal'],
  },
];

// ── Data: Chef Timeline ────────────────────────────────────────────────────────
export const chefTimeline = [
  { year: '2011', label: 'Culinary Academy', detail: 'Le Cordon Bleu, Paris' },
  { year: '2015', label: 'International Kitchen', detail: 'Nobu, London & Tokyo' },
  { year: '2019', label: 'Signature Restaurant', detail: 'Executive Chef' },
  { year: '2026', label: 'Present', detail: 'Culinary Director, Ember & Oak' },
];

// ── Data: Distinct Ingredient Cards ───────────────────────────────────────────
export const ingredients = [
  { 
    name: 'Wild Asparagus', 
    origin: 'Valley Organic Farms', 
    flavor: 'Crisp / Green / Sweet', 
    image: '/charred_veggies_1787822051948.jpg' 
  },
  { 
    name: 'Heirloom Tomatoes', 
    origin: 'Provence, France', 
    flavor: 'Acidic / Sweet / Complex', 
    image: '/fresh_ingredients_mix_1787825553119.jpg' 
  },
  { 
    name: 'Aged Black Garlic', 
    origin: 'Himalayan Highlands', 
    flavor: 'Deep / Sweet / Umami', 
    image: '/ing_black_garlic_1787827197020.jpg' 
  },
  { 
    name: 'Porcini Mushrooms', 
    origin: 'Carpathian Forest', 
    flavor: 'Earthy / Rich / Nutty', 
    image: '/truffle_risotto_1787821819140.jpg' 
  },
  { 
    name: 'Fresh Garden Herbs', 
    origin: 'Rooftop Botanical Garden', 
    flavor: 'Bright / Fragrant / Floral', 
    image: '/kitchen_plating_1787822067205.jpg' 
  },
  { 
    name: 'Tandoori Saffron Paneer', 
    origin: 'Heritage Dairy Reserve', 
    flavor: 'Smoky / Creamy / Spiced', 
    image: '/paneer_tikka_1787821986806.jpg' 
  },
  { 
    name: 'Charred Heritage Harvest', 
    origin: 'Highland Co-op Farms', 
    flavor: 'Pure / Caramelized / Wood-Fired', 
    image: '/charred_veggies_1787822051948.jpg' 
  },
  { 
    name: 'Rare Spice Infusions', 
    origin: 'Ancient Silk Route Curated', 
    flavor: 'Layered / Warm / Aromatic', 
    image: '/lamb_rack_1787821972800.jpg' 
  },
];

// ── Data: Quality Principles ───────────────────────────────────────────────────
export const qualityPrinciples = [
  { num: '01', title: 'Source', text: 'We partner with farmers and producers who share our obsession with quality. Every ingredient has a name and a story.' },
  { num: '02', title: 'Prepare', text: 'Hours of mise en place before service begins. Preparation is where precision meets patience.' },
  { num: '03', title: 'Cook', text: 'Fire is our medium. Whether open flame, slow braise or live coal — technique never overshadows ingredient.' },
  { num: '04', title: 'Balance', text: 'Every plate is a composition — acidity, texture, temperature, aroma. Nothing is accidental.' },
  { num: '05', title: 'Serve', text: 'The guest experience begins the moment you walk in. Hospitality is as important as the food.' },
];

// ── Data: Taste Profiles ───────────────────────────────────────────────────────
export const tasteProfiles = [
  { label: 'Smoke', value: 85 },
  { label: 'Spice', value: 62 },
  { label: 'Acidity', value: 70 },
  { label: 'Sweet', value: 45 },
  { label: 'Umami', value: 92 },
];

// ── Data: Testimonials ─────────────────────────────────────────────────────────
export const testimonials = [
  {
    quote: 'An unforgettable expression of modern cuisine. Every dish was a revelation — the kind of meal you think about for weeks.',
    name: 'Amélie Fontaine',
    title: 'Culinary Enthusiast',
    rating: 5,
  },
  {
    quote: 'The craftsmanship here is extraordinary. You can taste the philosophy in every bite — it is calm, considered and deeply moving.',
    name: 'James Whitfield',
    title: 'Food Writer, The Times',
    rating: 5,
  },
  {
    quote: 'Ember & Oak redefined what a restaurant experience can be. The lamb rack alone is worth the journey across the city.',
    name: 'Priya Krishnamurthy',
    title: 'Gastronome & Traveller',
    rating: 5,
  },
];

// ── Data: Signature Moments ────────────────────────────────────────────────────
export const signatureMoments = [
  { title: 'The First Bite', image: '/hero_dish_1787821621345.jpg' },
  { title: 'The Fire', image: '/chef_cooking_1787821999923.jpg' },
  { title: 'The Plate', image: '/kitchen_plating_1787822067205.jpg' },
  { title: 'The Table', image: '/table_setting_1787822080371.jpg' },
  { title: 'The Last Sip', image: '/restaurant_interior_1787821635271.jpg' },
];

// ── Data: Kitchen Steps ────────────────────────────────────────────────────────
export const kitchenSteps = [
  { num: '01', label: 'Fire', image: '/chef_cooking_1787821999923.jpg' },
  { num: '02', label: 'Preparation', image: '/kitchen_plating_1787822067205.jpg' },
  { num: '03', label: 'Technique', image: '/lamb_rack_1787821972800.jpg' },
  { num: '04', label: 'Plating', image: '/charred_veggies_1787822051948.jpg' },
  { num: '05', label: 'Perfection', image: '/hero_dish_1787821621345.jpg' },
];

// ── Data: Gallery ──────────────────────────────────────────────────────────────
export const galleryItems = [
  { image: '/hero_dish_1787821621345.jpg', caption: 'Signature dish', size: 'large' },
  { image: '/chef_cooking_1787821999923.jpg', caption: 'The flame', size: 'medium' },
  { image: '/truffle_risotto_1787821819140.jpg', caption: 'Truffle risotto', size: 'small' },
  { image: '/ember_salmon_1787821956715.jpg', caption: 'Ember salmon', size: 'medium' },
  { image: '/restaurant_interior_1787821635271.jpg', caption: 'The dining room', size: 'large' },
  { image: '/kitchen_plating_1787822067205.jpg', caption: 'Plating artistry', size: 'small' },
  { image: '/lamb_rack_1787821972800.jpg', caption: 'Lamb rack', size: 'medium' },
  { image: '/paneer_tikka_1787821986806.jpg', caption: 'Paneer tikka', size: 'small' },
  { image: '/table_setting_1787822080371.jpg', caption: 'The table', size: 'medium' },
];
