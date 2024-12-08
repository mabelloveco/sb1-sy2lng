import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Store } from '../../types';

interface StoreFAQProps {
  store: Store;
}

export default function StoreFAQ({ store }: StoreFAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs = [
    {
      id: '1',
      question: `How do I use ${store.name} coupon codes?`,
      answer: `Copy the coupon code and visit ${store.name}'s website. Add items to your cart and enter the code at checkout to receive your discount.`
    },
    {
      id: '2',
      question: 'Are these coupon codes verified?',
      answer: 'Yes, all our coupon codes are verified multiple times daily to ensure they work.'
    },
    {
      id: '3',
      question: 'Can I combine multiple coupons?',
      answer: `Check ${store.name}'s specific terms and conditions. Generally, most stores only allow one coupon code per order.`
    },
    {
      id: '4',
      question: 'What if a coupon code doesn\'t work?',
      answer: 'Please report any non-working codes using the report button. We\'ll verify and remove invalid codes promptly.'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200 last:border-0">
            <button
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className="flex justify-between items-center w-full py-4 text-left"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openId === faq.id ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {openId === faq.id && (
              <p className="text-gray-600 pb-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}