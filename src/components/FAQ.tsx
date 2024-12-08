import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "How does cash back work?",
    answer: "When you shop through our platform at participating stores, you'll earn a percentage of your purchase back as cash rewards. Once your balance reaches $10, you can withdraw it via PayPal or check."
  },
  {
    id: 2,
    question: "Is it really free to join?",
    answer: "Yes! It's completely free to create an account and earn cash back. There are no hidden fees or subscription costs."
  },
  {
    id: 3,
    question: "When will I receive my cash back?",
    answer: "Cash back typically appears in your account within 7 days of purchase, but can take up to 90 days to become available for withdrawal, depending on the store's return policy."
  },
  {
    id: 4,
    question: "Why isn't my cash back showing up?",
    answer: "Common reasons include: using another coupon site, ad blockers being enabled, or not starting your shopping trip from our website. Contact support if you need help tracking down missing cash back."
  },
  {
    id: 5,
    question: "How do I know if a coupon code works?",
    answer: "All our coupon codes are verified multiple times daily. We show success rates and recent user feedback for each code, and automatically remove expired or invalid coupons."
  },
  {
    id: 6,
    question: "Can I combine cash back with coupon codes?",
    answer: "Yes! In most cases, you can stack cash back rewards with store coupons and promo codes to maximize your savings. Some exclusions may apply."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Common Questions</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about earning cash back and saving money
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openId === faq.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              <div
                className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                  openId === faq.id ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="/contact" className="text-indigo-600 font-medium hover:text-indigo-500">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}