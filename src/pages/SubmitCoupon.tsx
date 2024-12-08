import React, { useState } from 'react';
import { Send, AlertCircle, Store, Tag, Calendar, FileText, HelpCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import SubmissionGuidelines from '../components/submit/SubmissionGuidelines';
import SubmissionForm from '../components/submit/SubmissionForm';
import SubmissionStatus from '../components/submit/SubmissionStatus';

export default function SubmitCoupon() {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (formData: any) => {
    try {
      setSubmissionStatus('submitting');
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmissionStatus('success');
      toast.success('Coupon submitted successfully!');
    } catch (error) {
      setSubmissionStatus('error');
      toast.error('Failed to submit coupon');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Submit a Coupon</h1>
          <p className="mt-4 text-lg text-gray-600">
            Help others save by sharing working coupon codes and deals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SubmissionForm onSubmit={handleSubmit} status={submissionStatus} />
          </div>
          
          <div className="space-y-6">
            <SubmissionGuidelines />
            <SubmissionStatus status={submissionStatus} />
          </div>
        </div>
      </div>
    </div>
  );
}