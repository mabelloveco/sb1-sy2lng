import React from 'react';
import { UserPlus, ShoppingCart, CreditCard, Wallet } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Join for Free',
    description: 'Sign up in seconds, no credit card required',
    icon: UserPlus
  },
  {
    id: 2,
    title: 'Shop Stores',
    description: 'Click through to your favorite stores',
    icon: ShoppingCart
  },
  {
    id: 3,
    title: 'Make a Purchase',
    description: 'Buy as usual, no extra steps needed',
    icon: CreditCard
  },
  {
    id: 4,
    title: 'Earn Cash Back',
    description: 'Get paid via PayPal or check',
    icon: Wallet
  }
];

export default function HowItWorks() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Earning cash back is easy with our simple 4-step process
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative">
                  {step.id !== steps.length && (
                    <div className="hidden md:block absolute top-12 left-full w-full border-t-2 border-indigo-200 border-dashed" />
                  )}
                  <div className="relative flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-center text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}