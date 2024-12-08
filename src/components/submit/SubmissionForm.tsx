import React, { useState } from 'react';
import { Store, Tag, Calendar, FileText, AlertCircle } from 'lucide-react';

interface SubmissionFormProps {
  onSubmit: (formData: any) => void;
  status: 'idle' | 'submitting' | 'success' | 'error';
}

export default function SubmissionForm({ onSubmit, status }: SubmissionFormProps) {
  const [formData, setFormData] = useState({
    storeName: '',
    storeUrl: '',
    couponCode: '',
    discountType: 'percentage',
    discountValue: '',
    description: '',
    terms: '',
    startDate: '',
    endDate: '',
    category: '',
    isExclusive: false,
    submitterEmail: '',
    isStoreOwner: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      {/* Store Information */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Store className="w-5 h-5 mr-2 text-indigo-600" />
          Store Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">
              Store Name *
            </label>
            <input
              type="text"
              id="storeName"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.storeName}
              onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="storeUrl" className="block text-sm font-medium text-gray-700">
              Store Website *
            </label>
            <input
              type="url"
              id="storeUrl"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.storeUrl}
              onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Coupon Details */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Tag className="w-5 h-5 mr-2 text-indigo-600" />
          Coupon Details
        </h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="couponCode" className="block text-sm font-medium text-gray-700">
              Coupon Code *
            </label>
            <input
              type="text"
              id="couponCode"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.couponCode}
              onChange={(e) => setFormData({ ...formData, couponCode: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="discountType" className="block text-sm font-medium text-gray-700">
                Discount Type *
              </label>
              <select
                id="discountType"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.discountType}
                onChange={(e) => setFormData({ ...formData, discountType: e.target.value })}
              >
                <option value="percentage">Percentage Off</option>
                <option value="fixed">Fixed Amount Off</option>
                <option value="bogo">Buy One Get One</option>
                <option value="shipping">Free Shipping</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="discountValue" className="block text-sm font-medium text-gray-700">
                Discount Value *
              </label>
              <input
                type="text"
                id="discountValue"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.discountValue}
                onChange={(e) => setFormData({ ...formData, discountValue: e.target.value })}
                placeholder={formData.discountType === 'percentage' ? '20' : '50'}
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description *
            </label>
            <textarea
              id="description"
              required
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe what the coupon offers..."
            />
          </div>
        </div>
      </div>

      {/* Validity Period */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
          Validity Period
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Start Date *
            </label>
            <input
              type="date"
              id="startDate"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FileText className="w-5 h-5 mr-2 text-indigo-600" />
          Additional Information
        </h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="terms" className="block text-sm font-medium text-gray-700">
              Terms & Conditions
            </label>
            <textarea
              id="terms"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.terms}
              onChange={(e) => setFormData({ ...formData, terms: e.target.value })}
              placeholder="Any specific requirements or limitations..."
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category *
            </label>
            <select
              id="category"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="">Select a category</option>
              <option value="fashion">Fashion</option>
              <option value="electronics">Electronics</option>
              <option value="travel">Travel</option>
              <option value="food">Food & Dining</option>
              <option value="health">Health & Beauty</option>
              <option value="home">Home & Garden</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submitter Information */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <AlertCircle className="w-5 h-5 mr-2 text-indigo-600" />
          Submitter Information
        </h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="submitterEmail" className="block text-sm font-medium text-gray-700">
              Your Email *
            </label>
            <input
              type="email"
              id="submitterEmail"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.submitterEmail}
              onChange={(e) => setFormData({ ...formData, submitterEmail: e.target.value })}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isStoreOwner"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              checked={formData.isStoreOwner}
              onChange={(e) => setFormData({ ...formData, isStoreOwner: e.target.checked })}
            />
            <label htmlFor="isStoreOwner" className="ml-2 block text-sm text-gray-700">
              I am a store owner/representative
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" />
            Submit Coupon
          </>
        )}
      </button>
    </form>
  );
}