import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, BarChart, ChevronRight, Check } from 'lucide-react';

const stats = [
  { id: 1, name: 'Active Partners', value: '2,500+', icon: Users },
  { id: 2, name: 'Average Commission', value: '15%', icon: DollarSign },
  { id: 3, name: 'Monthly Traffic', value: '1M+', icon: TrendingUp },
  { id: 4, name: 'Conversion Rate', value: '12%', icon: BarChart },
];

const tiers = [
  {
    name: 'Standard',
    commission: '10%',
    minTraffic: '1,000',
    features: [
      'Basic reporting dashboard',
      'Standard support',
      'Monthly payments',
      'API access'
    ]
  },
  {
    name: 'Premium',
    commission: '15%',
    minTraffic: '10,000',
    features: [
      'Advanced analytics',
      'Priority support',
      'Weekly payments',
      'Custom API integration',
      'Dedicated account manager'
    ]
  },
  {
    name: 'Enterprise',
    commission: '20%+',
    minTraffic: '100,000+',
    features: [
      'Real-time analytics',
      '24/7 premium support',
      'Daily payments',
      'Custom development',
      'Strategic partnership',
      'Co-marketing opportunities'
    ]
  }
];

export default function AffiliatePartners() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Partner With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our affiliate program and earn competitive commissions by sharing verified coupon codes with your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="h-8 w-8 text-indigo-600" />
                  <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
              </div>
            );
          })}
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`bg-white rounded-lg shadow-sm border ${
                selectedTier === tier.name 
                  ? 'border-indigo-500 ring-2 ring-indigo-500' 
                  : 'border-gray-200'
              } p-6`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-indigo-600">{tier.commission}</span>
                <span className="text-gray-500 ml-2">commission</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Min. monthly traffic: {tier.minTraffic} visitors
              </p>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedTier(tier.name)}
                className={`w-full px-4 py-2 rounded-md text-sm font-medium ${
                  selectedTier === tier.name
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Fill out our partner application form and our team will get back to you within 24 hours.
            </p>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              Apply Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}