import React from 'react';
import { History, DollarSign, Tag, ShoppingCart } from 'lucide-react';

const activities = [
  {
    id: '1',
    type: 'cashback',
    icon: DollarSign,
    title: 'Cash Back Earned',
    description: '$12.50 from Amazon purchase',
    date: '2024-03-15'
  },
  {
    id: '2',
    type: 'coupon',
    icon: Tag,
    title: 'Coupon Used',
    description: '20% off at Nike',
    date: '2024-03-14'
  },
  {
    id: '3',
    type: 'purchase',
    icon: ShoppingCart,
    title: 'Purchase Tracked',
    description: 'Best Buy order confirmed',
    date: '2024-03-13'
  }
];

export default function ActivityHistory() {
  return (
    <div id="history" className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6">
        <History className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-900">Activity History</h2>
      </div>

      <div className="space-y-6">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start">
              <div className="flex-shrink-0">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{activity.description}</p>
                <span className="mt-1 text-xs text-gray-500">{activity.date}</span>
              </div>
            </div>
          );
        })}
      </div>

      <button className="mt-6 w-full text-center text-sm text-indigo-600 hover:text-indigo-700 font-medium">
        View Full History
      </button>
    </div>
  );
}