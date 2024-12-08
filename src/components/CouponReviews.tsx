import React, { useState } from 'react';
import { Star, ThumbsUp, Flag, MessageSquare } from 'lucide-react';

const reviews = [
  {
    id: '1',
    user: 'Sarah M.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
    rating: 5,
    date: '2024-03-15',
    couponId: '1',
    store: 'Amazon',
    verified: true,
    helpful: 24,
    comment: 'Code worked perfectly! Saved $50 on my electronics purchase.',
    savings: '$50',
    replies: 2
  },
  {
    id: '2',
    user: 'Michael R.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop',
    rating: 4,
    date: '2024-03-14',
    couponId: '2',
    store: 'Nike',
    verified: true,
    helpful: 18,
    comment: 'Great discount, easy to apply. Shipping was still a bit expensive though.',
    savings: '$30',
    replies: 0
  }
];

export default function CouponReviews() {
  const [helpfulClicks, setHelpfulClicks] = useState<{ [key: string]: boolean }>({});
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleHelpfulClick = (reviewId: string) => {
    setHelpfulClicks(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Recent Success Stories</h2>
            <p className="mt-1 text-gray-600">See how much others have saved</p>
          </div>
          <button 
            onClick={() => setShowReviewForm(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Write a Review
          </button>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <img
                  src={review.avatar}
                  alt={review.user}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">{review.user}</h3>
                    {review.verified && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">
                      Saved {review.savings}
                    </span>
                    <span className="text-sm text-gray-400 ml-2">
                      • {review.date}
                    </span>
                  </div>

                  <p className="mt-2 text-gray-600">{review.comment}</p>
                  
                  <div className="flex items-center gap-4 mt-4 text-sm">
                    <button 
                      className={`flex items-center gap-1 ${
                        helpfulClicks[review.id] 
                          ? 'text-indigo-600' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => handleHelpfulClick(review.id)}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      Helpful ({review.helpful + (helpfulClicks[review.id] ? 1 : 0)})
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                      <MessageSquare className="w-4 h-4" />
                      Reply ({review.replies})
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                      <Flag className="w-4 h-4" />
                      Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="text-indigo-600 font-medium hover:text-indigo-700">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}