import React from 'react';
import { Search, CheckCircle, BarChart2, Shield } from 'lucide-react';

export default function HowWeWork() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">How We Find & Verify Coupons</h1>
          <p className="mt-4 text-lg text-gray-600">
            Our comprehensive process ensures you get the most reliable deals and savings
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {[
            {
              icon: Search,
              title: 'Collection',
              description: 'We continuously scan thousands of stores and partner directly with retailers for exclusive codes'
            },
            {
              icon: CheckCircle,
              title: 'Verification',
              description: 'Our automated system and human moderators test each code multiple times daily'
            },
            {
              icon: BarChart2,
              title: 'Ranking',
              description: 'Codes are ranked based on success rate, savings amount, and user feedback'
            },
            {
              icon: Shield,
              title: 'Monitoring',
              description: 'Real-time tracking ensures codes remain valid and removes expired ones immediately'
            }
          ].map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <step.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Testing Process</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Initial Verification</h3>
                <p className="mt-2 text-gray-600">
                  Every new coupon code goes through our automated testing system that simulates real checkout processes across different platforms.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Human Review</h3>
                <p className="mt-2 text-gray-600">
                  Our team of experts manually verifies codes that show any inconsistencies or require special conditions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">User Feedback Integration</h3>
                <p className="mt-2 text-gray-600">
                  We collect and analyze user success rates and feedback to continuously update our coupon rankings.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ranking Criteria</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Success Rate</h3>
              <p className="text-gray-600">
                We track the percentage of successful redemptions and prioritize codes with the highest success rates.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Average Savings</h3>
              <p className="text-gray-600">
                Codes that offer higher discount amounts or better value receive higher rankings.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">User Feedback</h3>
              <p className="text-gray-600">
                We incorporate user reviews and ratings to ensure the most reliable codes are easily accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}