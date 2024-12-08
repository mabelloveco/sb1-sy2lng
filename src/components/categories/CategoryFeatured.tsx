import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const featuredCategories = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=400&fit=crop',
    dealCount: 1800,
    averageSavings: '25%'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop',
    dealCount: 2300,
    averageSavings: '40%'
  }
];

export default function CategoryFeatured() {
  const navigate = useNavigate();

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredCategories.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => navigate(`/categories/${category.id}`)}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                <div className="flex items-center text-white space-x-4">
                  <span>{category.dealCount} deals</span>
                  <span>Up to {category.averageSavings} off</span>
                </div>
                <button className="mt-4 inline-flex items-center text-white hover:underline">
                  View Deals <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}