import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

interface SubmissionStatusProps {
  status: 'idle' | 'submitting' | 'success' | 'error';
}

export default function SubmissionStatus({ status }: SubmissionStatusProps) {
  if (status === 'idle') return null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {status === 'submitting' && (
        <div className="flex items-center">
          <Clock className="h-6 w-6 text-indigo-600 mr-2 animate-spin" />
          <div>
            <h3 className="font-medium text-gray-900">Submitting your coupon</h3>
            <p className="text-sm text-gray-600 mt-1">Please wait while we process your submission...</p>
          </div>
        </div>
      )}

      {status === 'success' && (
        <div className="flex items-center">
          <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
          <div>
            <h3 className="font-medium text-gray-900">Submission successful!</h3>
            <p className="text-sm text-gray-600 mt-1">
              Thank you for your submission. We'll review it shortly and notify you once it's approved.
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center">
          <XCircle className="h-6 w-6 text-red-500 mr-2" />
          <div>
            <h3 className="font-medium text-gray-900">Submission failed</h3>
            <p className="text-sm text-gray-600 mt-1">
              There was an error submitting your coupon. Please try again or contact support if the issue persists.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}