import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Baby, Shirt, Briefcase, Laptop, Plane, Sparkles, Footprints, Home, UtensilsCrossed } from 'lucide-react';

const categories = [
  {
    id: 'baby-toddler',
    name: 'Baby & Toddler',
    icon: Baby,
    description: 'Everything for your little ones',
    storeCount: 250,
    dealCount: 1200
  },
  {
    id: 'clothing',
    name: 'Clothing',
    icon: Shirt,
    description: 'Fashion deals and discounts',
    storeCount: 450,
    dealCount: 2300
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: Briefcase,
    description: 'Bags, jewelry, and more',
    storeCount: 320,
    dealCount: 1500
  },
  {
    id: 'electronics',
    name: 'Electronics',
    icon: Laptop,
    description: 'Tech deals and gadgets',
    storeCount: 380,
    dealCount: 1800
  },
  {
    id: 'travel',
    name: 'Travel & Vacations',
    icon: Plane,
    description: 'Travel deals and packages',
    storeCount: 200,
    dealCount: 950
  },
  {
    id: 'health-beauty',
    name: 'Health & Beauty',
    icon: Sparkles,
    description: 'Beauty and wellness deals',
    storeCount: 300,
    dealCount: 1600
  },
  {
    id: 'shoes',
    name: 'Shoes',
    icon: Footprints,
    description: 'Footwear for everyone',
    storeCount: 280,
    dealCount: 1400
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    icon: Home,
    description: 'Home improvement deals',
    storeCount: 350,
    dealCount: 1700
  },
  {
    id: 'food-drinks',
    name: 'Food & Restaurants',
    icon: UtensilsCrossed,
    description: 'Dining and grocery deals',
    storeCount: 400,
    dealCount: 2000
  }
];

export default function CategoryGrid() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => navigate(`/categories/${category.id}`)}
            className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex-shrink-0">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Icon className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <div className="ml-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{category.description}</p>
              <div className="mt-2 flex items-center space-x-4">
                <span className="text-sm text-gray-600">{category.storeCount} stores</span>
                <span className="text-sm text-gray-600">{category.dealCount} deals</span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}