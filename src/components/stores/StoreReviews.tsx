import React, { useState } from 'react';
import { Star, ThumbsUp, Flag } from 'lucide-react';
import { useReviews } from '../../hooks/useReviews';

interface StoreReviewsProps {
  storeId: string;
}

export default function StoreReviews({ storeId }: StoreReviewsProps) {
  const [sortBy, setSortBy] = useState('recent');
  const { reviews, isLoading } = useReviews(storeId);

  const sortedReviews = [...(reviews || [])].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.rating - a.rating;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Customer Reviews</h2>
          <p className="text-sm text-gray-500 mt-1">
            {reviews?.length} verified reviews
          </p>
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm border-gray-300 rounded-md"
        >
          <option value="recent">Most Recent</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading reviews...</div>
      ) : sortedReviews?.length ? (
        <div className="space-y-6">
          {sortedReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 last:border-0 pb-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <img
                    src={review.user.avatar}
                    alt={review.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{review.user.name}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              
              <p className="mt-4 text-gray-600">{review.comment}</p>
              
              <div className="mt-4 flex items-center gap-4">
                <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  Helpful ({review.helpful})
                </button>
                <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                  <Flag className="w-4 h-4 mr-1" />
                  Report
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No reviews yet
        </div>
      )}
    </div>
  );
}