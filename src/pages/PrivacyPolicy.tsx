import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <div className="prose prose-indigo">
              <p className="text-gray-600">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Contact information (name, email address)</li>
                <li>Account credentials</li>
                <li>Shopping preferences</li>
                <li>Coupon usage history</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <div className="prose prose-indigo">
              <p className="text-gray-600">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Provide and improve our services</li>
                <li>Send you updates about relevant deals</li>
                <li>Analyze and optimize our platform</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-600">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Service providers who assist in our operations</li>
              <li>Partners for analytics and advertising purposes</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-600">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Remember your preferences</li>
              <li>Analyze site usage</li>
              <li>Personalize content</li>
              <li>Measure advertising effectiveness</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-2 text-gray-600">
              <p>Email: privacy@dealhub.com</p>
              <p>Address: 123 Privacy Street, Security City, 12345</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-gray-600 mt-2">
              Last Updated: March 15, 2024
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}