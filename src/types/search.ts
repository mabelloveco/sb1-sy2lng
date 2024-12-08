export interface SearchResult {
  id: string;
  type: 'store' | 'category' | 'coupon';
  title: string;
  description: string;
  url: string;
  trending?: boolean;
}