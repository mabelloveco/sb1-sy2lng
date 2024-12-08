import React from 'react';
import { Store, Building2, Clock, Shield } from 'lucide-react';
import type { Store as StoreType } from '../../types';

interface StoreInfoProps {
  store: StoreType;
}

export default function StoreInfo({ store }: StoreInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Store Information</h2>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Store className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">About {store.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{store.description}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Building2 className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Company Details</h3>
            <ul className="text-sm text-gray-600 mt-1 space-y-1">
              <li>Founded: {store.founded}</li>
              <li>Headquarters: {store.headquarters}</li>
              <li>Category: {store.category}</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Shipping & Returns</h3>
            <ul className="text-sm text-gray-600 mt-1 space-y-1">
              <li>Free Shipping: {store.freeShipping}</li>
              <li>Return Period: {store.returnPeriod}</li>
              <li>Return Policy: {store.returnPolicy}</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Store Policies</h3>
            <ul className="text-sm text-gray-600 mt-1 space-y-1">
              <li>Price Match: {store.priceMatch}</li>
              <li>Student Discount: {store.studentDiscount}</li>
              <li>Military Discount: {store.militaryDiscount}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}