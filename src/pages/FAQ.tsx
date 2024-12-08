import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, Tag, Clock, Shield } from 'lucide-react';

interface FAQSection {
  id: string;
  title: string;
  icon: any;
  questions: {
    id: string;
    question: string;
    answer: string;
  }[];
}

const faqSections: FAQSection[] = [
  {
    id: 'general',
    title: 'General Questions',
    icon: HelpCircle,
    questions: [
      {
        id: 'what-is',
        question: 'What is To-Coupon?',
        answer: 'To-Coupon is a platform that helps you save money through verified coupon codes, cash back offers, and exclusive deals from thousands of online stores.'
      },
      {
        id: 'how-works',
        question: 'How does it work?',
        answer: 'Simply browse our site for deals, click through to your favorite stores, and shop as usual. We\'ll track your purchase and credit your account with any applicable cash back.'
      },
      {
        id: 'is-free',
        question: 'Is it free to use?',
        answer: 'Yes! To-Coupon is completely free to use. We earn a commission from stores when you make a purchase, but this never affects your price or savings.'
      }
    ]
  },
  {
    id: 'coupons',
    title: 'Coupon Questions',
    icon: Tag,
    questions: [
      {
        id: 'verify',
        question: 'How do you verify coupons?',
        answer: 'Our team verifies each coupon multiple times daily using automated systems and manual checks. We also monitor user feedback and success rates.'
      },
      {
        id: 'expired',
        question: 'What if a coupon is expired?',
        answer: 'We remove expired coupons immediately. If you find an expired coupon, please report it and we\'ll investigate right away.'
      },
      {
        id: 'not-working',
        question: 'What should I do if a coupon isn\'t working?',
        answer: 'First, check the terms and conditions. If the coupon should work, please report it as non-working and try another code.'
      }
    ]
  },
  {
    id: 'cashback',
    title: 'Cash Back Questions',
    icon: Clock,
    questions: [
      {
        id: 'tracking',
        question: 'How is cash back tracked?',
        answer: 'When you click through our site to a store and make a purchase, we automatically track it using affiliate links and cookies.'
      },
      {
        id: 'payout',
        question: 'When do I get paid?',
        answer: 'Cash back becomes available once the return period has passed (usually 60-90 days) and can be withdrawn via PayPal or bank transfer.'
      },
      {
        id: 'minimum',
        question: 'Is there a minimum payout?',
        answer: 'Yes, you need at least $10 in available cash back to request a payout.'
      }
    ]
  },
  {
    id: 'account',
    title: 'Account Questions',
    icon: Shield,
    questions: [
      {
        id: 'create',
        question: 'Do I need an account?',
        answer: 'While you can browse deals without an account, you\'ll need one to earn cash back and save your favorite coupons.'
      },
      {
        id: 'delete',
        question: 'How do I delete my account?',
        answer: 'You can delete your account from the account settings page. This will permanently remove all your data.'
      },
      {
        id: 'security',
        question: 'How do you protect my data?',
        answer: 'We use industry-standard encryption and security measures to protect your personal information and transaction data.'
      }
    ]
  }
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openSection, setOpenSection] = useState<string | null>('general');
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({});

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const filteredSections = faqSections.map(section => ({
    ...section,
    questions: section.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about To-Coupon
          </p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="space-y-8">
          {filteredSections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                >
                  <div className="flex items-center">
                    <Icon className="h-6 w-6 text-indigo-600 mr-2" />
                    <span className="text-lg font-medium text-gray-900">{section.title}</span>
                  </div>
                  {openSection === section.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {openSection === section.id && (
                  <div className="px-6 pb-4">
                    <div className="space-y-4">
                      {section.questions.map((q) => (
                        <div key={q.id} className="border-b border-gray-200 last:border-0">
                          <button
                            onClick={() => toggleQuestion(q.id)}
                            className="w-full py-4 text-left flex items-center justify-between focus:outline-none"
                          >
                            <span className="font-medium text-gray-900">{q.question}</span>
                            {openQuestions[q.id] ? (
                              <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                          </button>
                          
                          {openQuestions[q.id] && (
                            <p className="text-gray-600 pb-4">{q.answer}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}