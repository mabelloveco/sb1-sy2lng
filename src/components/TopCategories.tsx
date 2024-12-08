import React from 'react';
import { Baby, Shirt, Briefcase, Laptop, Plane, Sparkles, Footprints, Home, UtensilsCrossed } from 'lucide-react';

const categories = [
  {
    id: '1',
    name: 'Baby & Toddler',
    icon: Baby,
    stores: 250,
    maxCashback: '12%',
    featured: true
  },
  {
    id: '2',
    name: 'Clothing',
    icon: Shirt,
    stores: 450,
    maxCashback: '15%',
    featured: true
  },
  {
    id: '3',
    name: 'Accessories',
    icon: Briefcase,
    stores: 320,
    maxCashback: '10%',
    featured: false
  },
  {
    id: '4',
    name: 'Electronics',
    icon: Laptop,
    stores: 380,
    maxCashback: '8%',
    featured: true
  },
  {
    id: '5',
    name: 'Travel & Vacations',
    icon: Plane,
    stores: 200,
    maxCashback: '10%',
    featured: true
  },
  {
    id: '6',
    name: 'Health & Beauty',
    icon: Sparkles,
    stores: 300,
    maxCashback: '12%',
    featured: true
  },
  {
    id: '7',
    name: 'Shoes',
    icon: Footprints,
    stores: 280,
    maxCashback: '15%',
    featured: false
  },
  {
    id: '8',
    name: 'Home & Garden',
    icon: Home,
    stores: 350,
    maxCashback: '10%',
    featured: true
  },
  {
    id: '9',
    name: 'Food & Restaurants',
    icon: UtensilsCrossed,
    stores: 400,
    maxCashback: '8%',
    featured: true
  }
];

export default function TopCategories() {
  const featuredCategories = categories.filter(cat => cat.featured);
  const otherCategories = categories.filter(cat => !cat.featured);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
            <p className="mt-1 text-gray-600">Find the best deals in your favorite categories</p>
          </div>
          <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
            View All Categories
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className="group flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-100 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <Icon className="h-8 w-8 text-indigo-600 relative z-10 transform group-hover:scale-110 transition-transform duration-200" />
                </div>
                <h3 className="mt-4 text-sm font-medium text-gray-900">{category.name}</h3>
                <p className="mt-1 text-xs text-gray-500">{category.stores} stores</p>
                <p className="mt-1 text-xs font-medium text-green-600">
                  Up to {category.maxCashback} back
                </p>
                {category.featured && (
                  <span className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                    Featured
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}