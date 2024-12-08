import React, { useState } from 'react';
import { CreditCard, Plus } from 'lucide-react';

export default function PaymentSettings() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div id="payment" className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <CreditCard className="w-6 h-6 text-indigo-600 mr-2" />
          <h2 className="text-xl font-bold text-gray-900">Payment Methods</h2>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Payment Method
        </button>
      </div>

      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                alt="Mastercard"
                className="h-8 w-auto"
              />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Mastercard ending in 4242</p>
                <p className="text-sm text-gray-500">Expires 12/24</p>
              </div>
            </div>
            <button className="text-sm text-red-600 hover:text-red-700">Remove</button>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                alt="Visa"
                className="h-8 w-auto"
              />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Visa ending in 8888</p>
                <p className="text-sm text-gray-500">Expires 09/25</p>
              </div>
            </div>
            <button className="text-sm text-red-600 hover:text-red-700">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}