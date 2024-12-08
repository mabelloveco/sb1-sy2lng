import { useState, useEffect } from 'react';

interface Article {
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
}

export function useNews(category: string | null) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockArticles: Article[] = [
        {
          id: '1',
          title: 'How to Save Money on Your Online Shopping',
          excerpt: 'Discover the best strategies for maximizing your savings when shopping online...',
          image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop',
          date: '2024-03-15',
          category: 'Shopping Tips',
          readTime: '5 min',
          author: {
            name: 'Emily Johnson',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop'
          }
        },
        {
          id: '2',
          title: 'The Ultimate Guide to Cash Back Apps',
          excerpt: 'Learn how to maximize your rewards with the best cash back apps...',
          image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=400&fit=crop',
          date: '2024-03-14',
          category: 'Cash Back',
          readTime: '8 min',
          author: {
            name: 'David Chen',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop'
          }
        }
      ];

      const filteredArticles = category
        ? mockArticles.filter(article => article.category.toLowerCase() === category.toLowerCase())
        : mockArticles;

      setArticles(filteredArticles);
      setIsLoading(false);
    };

    fetchArticles();
  }, [category]);

  return { articles, isLoading };
}