import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, Bell, User, LogIn, X } from 'lucide-react';
import { useSession } from '../hooks/useSession';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useSession();

  const mainNavigation = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Stores', href: '/stores' },
    { name: 'Deals', href: '/deals' }
  ];

  const resourcesNavigation = [
    { name: 'News', href: '/news' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQ', href: '/faq' }
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-indigo-600 text-white px-4 py-1 text-sm text-center">
        <p>Submit a coupon and earn rewards! <Link to="/submit" className="underline">Learn more</Link></p>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">To-Coupon</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
            {resourcesNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/notifications" className="p-2 rounded-lg hover:bg-gray-100">
                  <Bell className="h-6 w-6 text-gray-600" />
                </Link>
                <div className="relative group">
                  <button className="p-2 rounded-lg hover:bg-gray-100">
                    <User className="h-6 w-6 text-gray-600" />
                  </button>
                  <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="px-4 py-2 text-sm text-gray-700">
                      {user?.name || 'My Account'}
                    </div>
                    <div className="border-t border-gray-100"></div>
                    <Link
                      to="/account"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Account Settings
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {[...mainNavigation, ...resourcesNavigation].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}