import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, BookmarkPlus, Share2 } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: '10 Ways to Save Money on Your Online Shopping',
    excerpt: 'Discover the best strategies for maximizing your savings when shopping online...',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop',
    author: {
      name: 'Emily Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop'
    },
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Shopping Tips',
    bookmarks: 156,
    shares: 89
  },
  {
    id: '2',
    title: 'The Ultimate Guide to Black Friday Deals',
    excerpt: 'Everything you need to know about finding the best Black Friday discounts...',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=400&fit=crop',
    author: {
      name: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop'
    },
    date: '2024-03-14',
    readTime: '8 min read',
    category: 'Seasonal Deals',
    bookmarks: 243,
    shares: 167
  },
  {
    id: '3',
    title: 'How to Stack Coupons Like a Pro',
    excerpt: 'Learn advanced techniques for combining multiple discounts and maximizing savings...',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&h=400&fit=crop',
    author: {
      name: 'Sarah Williams',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop'
    },
    date: '2024-03-13',
    readTime: '6 min read',
    category: 'Pro Tips',
    bookmarks: 198,
    shares: 124
  }
];

export default function BlogSection() {
  const [bookmarked, setBookmarked] = useState<{ [key: string]: boolean }>({});
  const [shared, setShared] = useState<{ [key: string]: boolean }>({});

  const handleBookmark = (postId: string) => {
    setBookmarked(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleShare = (postId: string) => {
    setShared(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Money-Saving Tips & Guides</h2>
            <p className="mt-1 text-gray-600">Expert advice to help you save more</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            View All Posts
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-indigo-600 px-2 py-1 bg-indigo-50 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-indigo-600">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center mb-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                      <span className="mx-2">•</span>
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleBookmark(post.id)}
                      className={`flex items-center text-sm ${
                        bookmarked[post.id] ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <BookmarkPlus className="w-4 h-4 mr-1" />
                      {post.bookmarks + (bookmarked[post.id] ? 1 : 0)}
                    </button>
                    <button
                      onClick={() => handleShare(post.id)}
                      className={`flex items-center text-sm ${
                        shared[post.id] ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <Share2 className="w-4 h-4 mr-1" />
                      {post.shares + (shared[post.id] ? 1 : 0)}
                    </button>
                  </div>
                  <button className="text-indigo-600 text-sm font-medium flex items-center hover:text-indigo-700">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}