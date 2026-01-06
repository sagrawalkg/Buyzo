export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const CATEGORIES = {
  Electronics: [
    { name: 'Wireless Noise-Canceling Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
    { name: 'Smartphone Pro Max', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80' },
    { name: '4K Ultra HD Monitor', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80' },
    { name: 'Mechanical Gaming Keyboard', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80' },
    { name: 'Smart Watch Series 5', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
    { name: 'Professional Camera Lens', image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500&q=80' },
    { name: 'Laptop Workstation', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80' },
    { name: 'Wireless Earbuds', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80' },
    { name: 'Gaming Console', image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&q=80' },
    { name: 'Tablet Pro', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80' }
  ],
  Clothing: [
    { name: 'Premium Cotton T-Shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80' },
    { name: 'Slim Fit Denim Jeans', image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=500&q=80' },
    { name: 'Classic Leather Jacket', image: 'https://images.unsplash.com/photo-1551028919-ac66e624ec95?w=500&q=80' },
    { name: 'Running Sneakers', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80' },
    { name: 'Summer Floral Dress', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80' },
    { name: 'Winter Wool Coat', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&q=80' },
    { name: 'Casual Hoodie', image: 'https://images.unsplash.com/photo-1556906781-9a412961d289?w=500&q=80' },
    { name: 'Formal Dress Shirt', image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=500&q=80' },
    { name: 'Athletic Shorts', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80' },
    { name: 'Silk Scarf', image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=500&q=80' }
  ],
  'Home & Garden': [
    { name: 'Minimalist Desk Lamp', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80' },
    { name: 'Ceramic Plant Pot', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80' },
    { name: 'Modern Sofa', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80' },
    { name: 'Wooden Coffee Table', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=500&q=80' },
    { name: 'Soft Throw Blanket', image: 'https://images.unsplash.com/photo-1580301762395-9c6498707e6e?w=500&q=80' },
    { name: 'Scented Candle Set', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&q=80' },
    { name: 'Kitchen Knife Set', image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500&q=80' },
    { name: 'Indoor Fern Plant', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&q=80' },
    { name: 'Cotton Bath Towels', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&q=80' },
    { name: 'Wall Art Frame', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80' }
  ],
  Books: [
    { name: 'The Art of Coding', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80' },
    { name: 'Modern Architecture', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80' },
    { name: 'Culinary Masterclass', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80' },
    { name: 'Sci-Fi Anthology', image: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&q=80' },
    { name: 'History of the World', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80' },
    { name: 'Design Patterns', image: 'https://images.unsplash.com/photo-1555421689-d6847129aa59?w=500&q=80' },
    { name: 'Travel Guide 2025', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80' },
    { name: 'Mindfulness & Peace', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80' },
    { name: 'Business Strategy', image: 'https://images.unsplash.com/photo-1554774853-719586f8c277?w=500&q=80' },
    { name: 'Photography Basics', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&q=80' }
  ],
  Sports: [
    { name: 'Professional Yoga Mat', image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=500&q=80' },
    { name: 'Tennis Racket', image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=500&q=80' },
    { name: 'Basketball', image: 'https://images.unsplash.com/photo-1519861531473-920026393112?w=500&q=80' },
    { name: 'Dumbbell Set', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&q=80' },
    { name: 'Running Water Bottle', image: 'https://images.unsplash.com/photo-1602143407151-11115cd4e69b?w=500&q=80' },
    { name: 'Camping Tent', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&q=80' },
    { name: 'Hiking Backpack', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&q=80' },
    { name: 'Football / Soccer Ball', image: 'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=500&q=80' },
    { name: 'Swimming Goggles', image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=500&q=80' },
    { name: 'Resistance Bands', image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&q=80' }
  ]
};

type CategoryKey = keyof typeof CATEGORIES;

// Generate 1000 items by cycling through the real data
export const products: Product[] = Array.from({ length: 1000 }, (_, i) => {
  const categoryKeys = Object.keys(CATEGORIES) as CategoryKey[];
  const category = categoryKeys[i % categoryKeys.length]!;
  const itemsInCategory = CATEGORIES[category];
  const item = itemsInCategory[i % itemsInCategory.length]!;

  // Add variation to prices and IDs even if names repeat
  return {
    id: i + 1,
    name: `${item.name} ${Math.floor(i / categoryKeys.length / itemsInCategory.length) + 1}`,
    price: Math.floor(Math.random() * 500) + 20,
    description: `Experience the quality of our ${item.name}. Perfect for your daily needs. Premium build quality and durability guaranteed.`,
    category,
    image: item.image
  };
});
