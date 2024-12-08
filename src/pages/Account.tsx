import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, BookmarkPlus, Bell, CreditCard, History, LogOut } from 'lucide-react';
import { useSession } from '../hooks/useSession';
import SavedCoupons from '../components/account/SavedCoupons';
import NotificationSettings from '../components/account/NotificationSettings';
import PaymentSettings from '../components/account/PaymentSettings';
import ActivityHistory from '../components/account/ActivityHistory';

export default function Account() {
  const { user, logout } = useSession();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Account</h1>
            <p className="mt-1 text-gray-600">Manage your account settings and preferences</p>
          </div>
          <button
            onClick={logout}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {[
                { icon: BookmarkPlus, label: 'Saved Coupons', href: '#saved' },
                { icon: Bell, label: 'Notifications', href: '#notifications' },
                { icon: CreditCard, label: 'Payment Methods', href: '#payment' },
                { icon: History, label: 'Activity History', href: '#history' },
                { icon: Settings, label: 'Account Settings', href: '#settings' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <item.icon className="w-5 h-5 mr-3 text-gray-400" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <SavedCoupons />
            <NotificationSettings />
            <PaymentSettings />
            <ActivityHistory />
          </div>
        </div>
      </div>
    </div>
  );
}