import React from 'react';
import { Tag } from 'lucide-react';

interface NewsCategoriesProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const categories = [
  { id: 'shopping', name: 'Smart Shopping', count: 45 },
  { id: 'coupons', name: 'Coupon Tips', count: 32 },
  { id: 'deals', name: 'Deal Hunting', count: 28 },
  { id: 'budget', name: 'Budgeting', count: 24 },
  { id: 'cashback', name: 'Cash Back', count: 19 },
  { id: 'seasonal', name: 'Seasonal Savings', count: 15 }
];

export default function NewsCategories({ selectedCategory, onSelectCategory }: NewsCategoriesProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Tag className="w-5 h-5 mr-2 text-indigo-600" />
        Categories
      </h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(
              selectedCategory === category.id ? null : category.id
            )}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm ${
              selectedCategory === category.id
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span>{category.name}</span>
            <span className="text-xs text-gray-500">{category.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
}