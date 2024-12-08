import React from 'react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using DealHub, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Use of Service</h2>
            <div className="prose prose-indigo">
              <p className="text-gray-600">You agree to:</p>
              <ul className="list-disc list-inside text- <boltAction type="file" filePath="src/pages/TermsConditions.tsx">              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Provide accurate and complete information</li>
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to manipulate or abuse our coupon system</li>
                <li>Not interfere with the proper functioning of the site</li>
                <li>Not attempt to access restricted areas of the site</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Coupon Terms</h2>
            <div className="prose prose-indigo">
              <p className="text-gray-600">
                While we strive to maintain accurate and up-to-date coupon information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Coupons are subject to change or expiration without notice</li>
                <li>We cannot guarantee the success rate of any coupon</li>
                <li>Some coupons may have restrictions or conditions set by retailers</li>
                <li>Users are responsible for verifying terms before use</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. User Accounts</h2>
            <p className="text-gray-600">
              If you create an account, you are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us of any unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600">
              All content on DealHub, including text, graphics, logos, and software, is our property and is protected by intellectual property laws. You may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Copy or reproduce any content without permission</li>
              <li>Use our trademarks or logos without consent</li>
              <li>Modify or create derivative works</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600">
              DealHub is provided "as is" without warranties of any kind. We are not liable for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Any direct, indirect, or consequential damages</li>
              <li>Loss of profits or data</li>
              <li>Issues arising from coupon usage</li>
              <li>Third-party website content or actions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Modifications</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-600">
              We may terminate or suspend access to our service immediately, without prior notice, for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Violations of these terms</li>
              <li>Fraudulent or abusive behavior</li>
              <li>Any other reason we deem necessary</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
            <p className="text-gray-600">
              These terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-600">
              For any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="mt-2 text-gray-600">
              <p>Email: legal@dealhub.com</p>
              <p>Address: 123 Legal Avenue, Compliance City, 12345</p>
            </div>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}