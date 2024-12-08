import React from 'react';
import { ShoppingBag, Laptop, Shirt, Home, Gift, Plane } from 'lucide-react';

const categories = [
  { id: '1', name: 'Fashion', icon: Shirt, count: 1250 },
  { id: '2', name: 'Electronics', icon: Laptop, count: 890 },
  { id: '3', name: 'Home & Garden', icon: Home, count: 756 },
  { id: '4', name: 'Travel', icon: Plane, count: 432 },
  { id: '5', name: 'Gifts', icon: Gift, count: 321 },
  { id: '6', name: 'Others', icon: ShoppingBag, count: 654 }
];

export default function CategoryList() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <Icon className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
                <p className="mt-1 text-xs text-gray-500">{category.count} deals</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}