const sampleListings = [
  {
    title: "Historic Mountain Village",
    description: "Stay in a beautifully preserved mountain village, rich with history and culture.",
    image: {
      url: "https://live.staticflickr.com/3829/10221404775_2a020aab35_b.jpg",
      filename: "historic_village.jpg",
    },
    price: 220,
    location: "Grindelwald",
    country: "Switzerland",
    category: "Mountain",
    owner: "64f9a2e8a674f7a42c9d7ba3",
    geometry: {
      type: "Point",
      coordinates: [8.0324, 46.6242],
    },
    reviews: [],
  },
  {
    title: "Organic Farm Stay",
    description: "Experience farm life on this organic farm with plenty of fresh produce and friendly animals.",
    image: {
      url: "https://c.pxhere.com/photos/87/ed/oregon_farm_mountains_agriculture_barns_field_meadow_beautiful-458817.jpg!d",
      filename: "organic_farm.jpg",
    },
    price: 120,
    location: "Sonoma Valley",
    country: "USA",
    category: "Farms",
    owner: "64f9a2e8a674f7a42c9d7b96",
    geometry: {
      type: "Point",
      coordinates: [-122.706, 38.2958],
    },
    reviews: [],
  },
  {
    title: "Medieval Castle Retreat",
    description: "Stay in a historic castle with modern amenities and a touch of medieval charm.",
    image: {
      url: "https://th.bing.com/th/id/OIP.qZ5Ad_4DFmy7igF_DgnnEAHaFi?rs=1&pid=ImgDetMain",
      filename: "medieval_castle.jpg",
    },
    price: 500,
    location: "Loire Valley",
    country: "France",
    category: "Castle",
    owner: "64f9a2e8a674f7a42c9d7b98",
    geometry: {
      type: "Point",
      coordinates: [0.748, 47.3739],
    },
    reviews: [],
  },
  {
    title: "Mountain Cabin Escape",
    description: "A secluded cabin in the mountains, perfect for nature lovers and adventurers.",
    image: {
      url: "https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?rs=1&pid=ImgDetMain",
      filename: "mountain_cabin.jpg",
    },
    price: 200,
    location: "Rocky Mountains",
    country: "USA",
    category: "Mountain",
    owner: "64f9a2e8a674f7a42c9d7b9b",
    geometry: {
      type: "Point",
      coordinates: [-106.4454, 39.5501],
    },
    reviews: [],
  },
  
  {
    title: "Luxury Arctic Igloo",
    description: "A stunning igloo in the heart of the Arctic, offering breathtaking views of the Northern Lights.",
    image: {
      url: "https://th.bing.com/th/id/OIP.zC9RNlZz_B2K_fZueTHCOQHaE8?rs=1&pid=ImgDetMain",
      filename: "arctic_igloo.jpg",
    },
    price: 300,
    location: "Arctic Circle",
    country: "Norway",
    category: "Arctic",
    owner: "64f9a2e8a674f7a42c9d7b91",
    geometry: {
      type: "Point",
      coordinates: [25.7617, 69.6492],
    },
    reviews: [],
  },
  {
    title: "Charming Country House",
    description: "A cozy house in the countryside, perfect for a peaceful getaway.",
    image: {
      url: "https://th.bing.com/th/id/OIP.K2XHZApjhJtr7KaMROuZiQHaE7?rs=1&pid=ImgDetMain",
      filename: "country_house.jpg",
    },
    price: 150,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "House",
    owner: "64f9a2e8a674f7a42c9d7b94",
    geometry: {
      type: "Point",
      coordinates: [-1.7817, 51.8332],
    },
    reviews: [],
  },
  
  // Add 25 more entries
  {
    title: "Cozy Farmhouse in the Countryside",
    description: "A warm and inviting farmhouse surrounded by lush greenery.",
    image: {
      url: "https://th.bing.com/th/id/OIP.qoU3zDmwijn9X_r18A-XswHaE3?rs=1&pid=ImgDetMain",
      filename: "cozy_farmhouse.jpg",
    },
    price: 180,
    location: "Tuscany",
    country: "Italy",
    category: "Farms",
    owner: "64f9a2e8a674f7a42c9d7b9c",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
    reviews: [],
  },
  {
    title: "Alpine Mountain Chalet",
    description: "A picturesque chalet nestled in the Alps, offering stunning mountain views.",
    image: {
      url: "https://c.pxhere.com/photos/d9/c7/alpine_mountains_mountains_house_idyll_holiday_home_digital_art-917188.jpg!d",
      filename: "alpine_chalet.jpg",
    },
    price: 350,
    location: "Alps",
    country: "Switzerland",
    category: "Mountain",
    owner: "64f9a2e8a674f7a42c9d7b9d",
    geometry: {
      type: "Point",
      coordinates: [9.467, 46.8797],
    },
    reviews: [],
  },
  {
    title: "Icelandic Arctic Dome",
    description: "Stay in a luxurious dome with panoramic views of the Icelandic wilderness.",
    image: {
      url: "https://th.bing.com/th/id/OIP.WZFo7Fi-ROt66MwK2dnAzQHaET?rs=1&pid=ImgDetMain",
      filename: "icelandic_dome.jpg",
    },
    price: 320,
    location: "Reykjavik",
    country: "Iceland",
    category: "Arctic",
    owner: "64f9a2e8a674f7a42c9d7b9e",
    geometry: {
      type: "Point",
      coordinates: [-21.827774, 64.126518],
    },
    reviews: [],
  },
  {
    title: "Seaside Castle on the Cliffs",
    description: "A historic castle overlooking the ocean, offering a unique seaside experience.",
    image: {
      url: "https://th.bing.com/th/id/OIP.H4AquEbmLj45LwUWyTMWcQHaFj?rs=1&pid=ImgDetMain",
      filename: "seaside_castle.jpg",
    },
    price: 450,
    location: "Cornwall",
    country: "United Kingdom",
    category: "Castle",
    owner: "64f9a2e8a674f7a42c9d7b9f",
    geometry: {
      type: "Point",
      coordinates: [-5.7167, 50.5167],
    },
    reviews: [],
  },
  {
    title: "Rustic Mountain Lodge",
    description: "A rustic lodge in the heart of the Rocky Mountains, ideal for a cozy retreat.",
    image: {
      url: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
      filename: "rustic_lodge.jpg",
    },
    price: 210,
    location: "Rocky Mountains",
    country: "USA",
    category: "Mountain",
    owner: "64f9a2e8a674f7a42c9d7ba0",
    geometry: {
      type: "Point",
      coordinates: [-105.3589, 40.014986],
    },
    reviews: [],
  },
  {
    title: "Sustainable Farmhouse",
    description: "A sustainable farmhouse powered by solar energy, surrounded by nature.",
    image: {
      url: "https://th.bing.com/th/id/OIP.Rixy3lKN9ui0rrO_xod0MwHaFj?rs=1&pid=ImgDetMain",
      filename: "sustainable_farmhouse.jpg",
    },
    price: 130,
    location: "Sonoma Valley",
    country: "USA",
    category: "Farms",
    owner: "64f9a2e8a674f7a42c9d7ba1",
    geometry: {
      type: "Point",
      coordinates: [-122.996, 38.4993],
    },
    reviews: [],
  },
  {
    title: "Arctic Ice Hotel",
    description: "A unique stay in an ice hotel, complete with ice sculptures and warm sleeping bags.",
    image: {
      url: "https://th.bing.com/th/id/R.22773c368a2af2a71f926266b91f12a4?rik=4T%2beVgooXJHysA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-0rZ1QGf9YZU%2fTwyVWqUVjhI%2fAAAAAAAABGY%2fhAY2SBbnGPw%2fs1600%2funique-ice-hotel-1024x682.jpg&ehk=geey%2bz6enSD%2f9aNRECQzZAI2xzRU2qbTgQhFL9dhYu4%3d&risl=&pid=ImgRaw&r=0",
      filename: "ice_hotel.jpg",
    },
    price: 400,
    location: "Jukkasjärvi",
    country: "Sweden",
    category: "Arctic",
    owner: "64f9a2e8a674f7a42c9d7ba2",
    geometry: {
      type: "Point",
      coordinates: [20.5928, 67.8557],
    },
    reviews: [],
  },
  {
    title: "Serene Lakeside Cottage",
    description: "A peaceful lakeside cottage perfect for a relaxing getaway.",
    image: {
      url: "https://live.staticflickr.com/3829/10221404775_2a020aab35_b.jpg",
      filename: "lakeside_cottage.jpg",
    },
    price: 250,
    location: "Lake District",
    country: "United Kingdom",
    category: "House", // Changed to 'House'
    owner: "64f9a2e8a674f7a42c9d7ba5",
    geometry: {
      type: "Point",
      coordinates: [-3.0886, 54.4609],
    },
    reviews: [],
  },
  {
    title: "Scenic Vineyard Stay",
    description: "Experience life among the vines at this picturesque vineyard retreat.",
    image: {
      url: "https://c.pxhere.com/photos/87/ed/oregon_farm_mountains_agriculture_barns_field_meadow_beautiful-458817.jpg!d",
      filename: "vineyard_stay.jpg",
    },
    price: 280,
    location: "Napa Valley",
    country: "USA",
    category: "Farms", // Kept as 'Farms'
    owner: "64f9a2e8a674f7a42c9d7ba6",
    geometry: {
      type: "Point",
      coordinates: [-122.2869, 38.5025],
    },
    reviews: [],
  },
  {
    title: "Countryside Villa with Pool",
    description: "Relax in a luxurious villa with a private pool in the tranquil countryside.",
    image: {
      url: "https://th.bing.com/th/id/OIP.qZ5Ad_4DFmy7igF_DgnnEAHaFi?rs=1&pid=ImgDetMain",
      filename: "countryside_villa.jpg",
    },
    price: 400,
    location: "Tuscany",
    country: "Italy",
    category: "Castle", // Changed to 'Castle'
    owner: "64f9a2e8a674f7a42c9d7ba7",
    geometry: {
      type: "Point",
      coordinates: [11.3426, 43.7696],
    },
    reviews: [],
  },
  {
    title: "Hidden Forest Cabin",
    description: "Escape to a secluded cabin in the heart of the forest.",
    image: {
      url: "https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?rs=1&pid=ImgDetMain",
      filename: "forest_cabin.jpg",
    },
    price: 220,
    location: "Black Forest",
    country: "Germany",
    category: "Mountain", // Changed to 'Mountain'
    owner: "64f9a2e8a674f7a42c9d7ba8",
    geometry: {
      type: "Point",
      coordinates: [8.2417, 48.4049],
    },
    reviews: [],
  },
  {
    title: "Charming Riverfront House",
    description: "Enjoy a stay in a charming house by the river, perfect for nature lovers.",
    image: {
      url: "https://th.bing.com/th/id/OIP.zC9RNlZz_B2K_fZueTHCOQHaE8?rs=1&pid=ImgDetMain",
      filename: "riverfront_house.jpg",
    },
    price: 260,
    location: "Loire Valley",
    country: "France",
    category: "House", // Kept as 'House'
    owner: "64f9a2e8a674f7a42c9d7ba9",
    geometry: {
      type: "Point",
      coordinates: [0.564, 47.3782],
    },
    reviews: [],
  },
  
  {
    title: "Arctic Glass Igloo",
    description: "Stay in a glass igloo and witness the magical Northern Lights.",
    image: {
      url: "https://th.bing.com/th/id/OIP.H4AquEbmLj45LwUWyTMWcQHaFj?rs=1&pid=ImgDetMain",
      filename: "glass_igloo.jpg",
    },
    price: 450,
    location: "Saariselkä",
    country: "Finland",
    category: "Arctic", // Kept as 'Arctic'
    owner: "64f9a2e8a674f7a42c9d7bae",
    geometry: {
      type: "Point",
      coordinates: [27.4542, 68.4217],
    },
    reviews: [],
  },
  {
    title: "Luxury Mountain Chalet",
    description: "A luxurious chalet with stunning views of the Swiss Alps.",
    image: {
      url: "https://th.bing.com/th/id/OIP.K2XHZApjhJtr7KaMROuZiQHaE7?rs=1&pid=ImgDetMain",
      filename: "luxury_chalet.jpg",
    },
    price: 550,
    location: "Zermatt",
    country: "Switzerland",
    category: "Mountain", // Changed to 'Mountain'
    owner: "64f9a2e8a674f7a42c9d7baa",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207],
    },
    reviews: [],
  },
  {
    title: "Coastal Lighthouse",
    description: "Stay in a historic lighthouse with panoramic ocean views.",
    image: {
      url: "https://th.bing.com/th/id/OIP.qoU3zDmwijn9X_r18A-XswHaE3?rs=1&pid=ImgDetMain",
      filename: "coastal_lighthouse.jpg",
    },
    price: 300,
    location: "Nova Scotia",
    country: "Canada",
    category: "House", // Changed to 'House'
    owner: "64f9a2e8a674f7a42c9d7bab",
    geometry: {
      type: "Point",
      coordinates: [-64.4536, 44.6829],
    },
    reviews: [],
  },
  {
    title: "Cozy Countryside Retreat",
    description: "A charming retreat in the countryside, perfect for a peaceful escape.",
    image: {
      url: "https://th.bing.com/th/id/OIP.WZFo7Fi-ROt66MwK2dnAzQHaET?rs=1&pid=ImgDetMain",
      filename: "countryside_retreat.jpg",
    },
    price: 170,
    location: "Normandy",
    country: "France",
    category: "House", // Changed to 'House'
    owner: "64f9a2e8a674f7a42c9d7bad",
    geometry: {
      type: "Point",
      coordinates: [0.3836, 49.1829],
    },
    reviews: [],
  },
  {
    title: "Alaskan Wilderness Lodge",
    description: "A cozy lodge in the Alaskan wilderness, surrounded by breathtaking scenery.",
    image: {
      url: "https://c.pxhere.com/photos/d9/c7/alpine_mountains_mountains_house_idyll_holiday_home_digital_art-917188.jpg!d",
      filename: "alaskan_lodge.jpg",
    },
    price: 380,
    location: "Denali National Park",
    country: "USA",
    category: "Mountain", // Changed to 'Mountain'
    owner: "64f9a2e8a674f7a42c9d7bac",
    geometry: {
      type: "Point",
      coordinates: [-151.3949, 63.3304],
    },
    reviews: [],
  },
 
  
 
];

module.exports = { data: sampleListings };