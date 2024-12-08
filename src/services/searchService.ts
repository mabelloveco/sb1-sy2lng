import { SearchResult } from '../types/search';

export const searchService = {
  search: async (query: string): Promise<SearchResult[]> => {
    // This would normally be an API call
    // For now, we'll return mock data
    return [
      {
        id: '1',
        type: 'store',
        title: 'Nike',
        description: 'Athletic wear and shoes',
        url: '/stores/nike',
        trending: true
      },
      {
        id: '2',
        type: 'category',
        title: 'Electronics',
        description: '2,500+ deals available',
        url: '/categories/electronics'
      },
      {
        id: '3',
        type: 'coupon',
        title: '20% off at Amazon',
        description: 'Valid on electronics and home items',
        url: '/coupons/amazon-20-off'
      }
    ].filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase())
    );
  }
};