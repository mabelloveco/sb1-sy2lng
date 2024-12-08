import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const trendingCategories = [
  {
    id: 'tech-deals',
    name: 'Tech Deals',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop',
    growth: '+45%',
    deals: 850,
    description: 'Latest deals on smartphones, laptops, and gadgets'
  },
  {
    id: 'travel-season',
    name: 'Travel Season',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=400&fit=crop',
    growth: '+62%',
    deals: 425,
    description: 'Exclusive discounts on flights and hotels'
  },
  {
    id: 'spring-fashion',
    name: 'Spring Fashion',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=400&fit=crop',
    growth: '+38%',
    deals: 670,
    description: 'Season\'s hottest styles and accessories'
  }
];

export default function CategoryTrending() {
  const navigate = useNavigate();

  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Trending Categories</h2>
          <p className="mt-1 text-gray-600">Categories with the fastest growing deals</p>
        </div>
        <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
          View All
          <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendingCategories.map((category) => (
          <div
            key={category.id}
            className="group cursor-pointer"
            onClick={() => navigate(`/categories/${category.id}`)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-200 mb-2">{category.description}</p>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {category.growth} this week
                    </span>
                    <span className="text-white text-sm">
                      {category.deals} active deals
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}