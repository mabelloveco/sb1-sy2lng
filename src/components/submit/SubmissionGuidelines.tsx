import React from 'react';
import { AlertCircle, Check } from 'lucide-react';

export default function SubmissionGuidelines() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <AlertCircle className="h-6 w-6 text-indigo-600 mr-2" />
        <h2 className="text-lg font-semibold text-gray-900">Submission Guidelines</h2>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Before submitting:</h3>
          <ul className="space-y-2">
            {[
              'Verify that the coupon code is working',
              'Check if the code isn\'t already listed',
              'Include any specific terms or conditions',
              'Provide accurate expiration date if known'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-2">We accept:</h3>
          <ul className="space-y-2">
            {[
              'Promo and coupon codes',
              'Special deals and offers',
              'Student and military discounts',
              'Seasonal promotions'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Submissions are reviewed within 24-48 hours. You'll receive an email notification once your coupon is approved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}