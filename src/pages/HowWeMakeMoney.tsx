import React from 'react';
import { DollarSign, Users, HandShake, Shield } from 'lucide-react';

export default function HowWeMakeMoney() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">How We Make Money</h1>
          <p className="mt-4 text-lg text-gray-600">
            We believe in complete transparency about our business model
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Revenue Model</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <DollarSign className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Affiliate Partnerships</h3>
                  <p className="mt-2 text-gray-600">
                    We earn a small commission when users make purchases through our verified coupon codes. This doesn't affect the discount you receive.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <HandShake className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Merchant Partnerships</h3>
                  <p className="mt-2 text-gray-600">
                    Some retailers partner with us directly to showcase their exclusive deals and promotions.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Premium Memberships</h3>
                  <p className="mt-2 text-gray-600">
                    We offer optional premium features for users who want early access to deals and exclusive savings.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Our Commitment</h3>
                  <p className="mt-2 text-gray-600">
                    We never compromise on coupon quality or user experience to increase revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Promise to Users</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              We're committed to providing the best possible savings to our users. Our revenue model allows us to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Maintain a dedicated team of coupon verifiers</li>
              <li>Invest in advanced testing and verification systems</li>
              <li>Provide 24/7 customer support</li>
              <li>Keep our platform free for all users</li>
              <li>Continuously improve our service and features</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Do users pay more when using our codes?</h3>
              <p className="mt-2 text-gray-600">
                No. The prices and discounts you see are exactly the same as going directly to the retailer. Our commission comes from the merchant, not you.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">How do we choose which codes to display?</h3>
              <p className="mt-2 text-gray-600">
                Our ranking system is based solely on code reliability and savings amount. We never prioritize codes based on commission rates.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Why are some stores not listed?</h3>
              <p className="mt-2 text-gray-600">
                We only list stores and codes that meet our quality standards, regardless of potential commission opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}