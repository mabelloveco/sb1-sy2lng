import React, { useState } from 'react';
import { Bell, Mail, MessageSquare, Tag } from 'lucide-react';

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    email: {
      deals: true,
      expiring: true,
      newsletter: false
    },
    push: {
      deals: false,
      expiring: true,
      alerts: true
    }
  });

  const handleChange = (type: 'email' | 'push', key: string) => {
    setSettings(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [key]: !prev[type][key as keyof typeof prev.email]
      }
    }));
  };

  return (
    <div id="notifications" className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6">
        <Bell className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-900">Notification Settings</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Mail className="w-5 h-5 mr-2 text-gray-400" />
            Email Notifications
          </h3>
          <div className="space-y-4">
            {Object.entries(settings.email).map(([key, value]) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleChange('email', key)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-gray-700">
                  {key === 'deals' && 'New deals from saved stores'}
                  {key === 'expiring' && 'Expiring coupon alerts'}
                  {key === 'newsletter' && 'Weekly savings newsletter'}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-gray-400" />
            Push Notifications
          </h3>
          <div className="space-y-4">
            {Object.entries(settings.push).map(([key, value]) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleChange('push', key)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-gray-700">
                  {key === 'deals' && 'Instant deal alerts'}
                  {key === 'expiring' && 'Saved coupon expiration'}
                  {key === 'alerts' && 'Price drop alerts'}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}