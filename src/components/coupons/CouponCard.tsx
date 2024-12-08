import React, { useState } from 'react';
import { Copy, ThumbsUp, Flag, Clock, Tag, ExternalLink } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Coupon } from '../../types';

interface CouponCardProps {
  coupon: Coupon;
}

export default function CouponCard({ coupon }: CouponCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coupon.code);
      setCopied(true);
      toast.success('Coupon code copied!');
      setTimeout(() => setCopied(false), 2000);

      // Open store URL in new tab
      if (coupon.url) {
        window.open(coupon.url, '_blank');
      }
    } catch (err) {
      toast.error('Failed to copy code');
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            <Tag className="w-3 h-3 mr-1" />
            {coupon.type}
          </span>
          <h3 className="mt-2 text-lg font-medium text-gray-900">{coupon.description}</h3>
        </div>
        <div className="text-2xl font-bold text-indigo-600">{coupon.discount}</div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          Expires {coupon.expiryDate}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <ThumbsUp className="w-4 h-4 mr-1" />
          {coupon.success_rate}% success
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleCopy}
          className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          {copied ? (
            'Copied!'
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              {coupon.code}
            </>
          )}
        </button>
        {coupon.url && (
          <a
            href={coupon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-indigo-600 hover:text-indigo-700"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
        <button
          className="p-2 text-gray-400 hover:text-gray-600"
          onClick={() => toast.error('Feature coming soon')}
        >
          <Flag className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Last verified: {coupon.lastVerified}
      </div>
    </div>
  );
}