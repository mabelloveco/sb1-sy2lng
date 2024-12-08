import React from 'react';
import { useParams } from 'react-router-dom';
import StoreHeader from '../components/stores/StoreHeader';
import StoreCoupons from '../components/stores/StoreCoupons';
import StoreInfo from '../components/stores/StoreInfo';
import StoreReviews from '../components/stores/StoreReviews';
import StoreFAQ from '../components/stores/StoreFAQ';
import { useStore } from '../hooks/useStore';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';

export default function StorePage() {
  const { slug } = useParams();
  const { store, isLoading, error } = useStore(slug);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!store) return <ErrorMessage message="Store not found" />;

  return (
    <div className="min-h-screen bg-gray-50">
      <StoreHeader store={store} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <StoreCoupons storeId={store.id} />
            <StoreReviews storeId={store.id} />
          </div>
          <div className="space-y-8">
            <StoreInfo store={store} />
            <StoreFAQ store={store} />
          </div>
        </div>
      </div>
    </div>
  );
}