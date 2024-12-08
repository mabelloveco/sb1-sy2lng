import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Categories', href: '/categories' },
      { name: 'Stores', href: '/stores' },
      { name: 'Deals', href: '/deals' },
      { name: 'Submit Coupon', href: '/submit' }
    ],
    resources: [
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'About Us', href: '/about' },
      { name: 'News', href: '/news' },
      { name: 'FAQ', href: '/faq' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Contact Us', href: '/contact' }
    ],
    social: [
      { name: 'Facebook', href: '#', icon: Facebook },
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'Instagram', href: '#', icon: Instagram },
      { name: 'YouTube', href: '#', icon: Youtube }
    ]
  };

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-white">To-Coupon</Link>
            <p className="mt-4 text-gray-400 text-sm">
              Your trusted source for verified coupons, promo codes, and cash back offers.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Shopping</h3>
            <ul className="mt-4 space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-base text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-4">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-base text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-base text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-base text-gray-400">
              &copy; {new Date().getFullYear()} To-Coupon. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}