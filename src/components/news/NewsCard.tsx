import React, { useState } from 'react';
import { Calendar, BookmarkPlus, Share2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NewsCardProps {
  article: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
    readTime: string;
    author: {
      name: string;
      avatar: string;
    };
  };
}

export default function NewsCard({ article }: NewsCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useNavigate();

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={article.image}
            alt={article.title}
            className="h-48 w-full object-cover"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              {article.category}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {article.date}
            </span>
            <span>{article.readTime} read</span>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {article.title}
          </h2>

          <p className="text-gray-600 mb-4">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-sm text-gray-700">{article.author.name}</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`text-gray-400 hover:text-gray-600 ${
                  isBookmarked ? 'text-indigo-600' : ''
                }`}
              >
                <BookmarkPlus className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate(`/news/${article.id}`)}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}