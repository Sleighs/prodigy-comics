'use client';

import Link from 'next/link';

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Order!
          </h1>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Your order has been successfully placed. We've sent a confirmation email with your order details. 
            You'll receive another email when your order ships.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium text-green-600">Processing</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <p className="text-gray-600">Order Confirmation</p>
                <p className="text-xs text-gray-500">Email sent</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-600 font-bold">2</span>
                </div>
                <p className="text-gray-600">Order Processing</p>
                <p className="text-xs text-gray-500">1-2 business days</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <p className="text-gray-600">Order Shipped</p>
                <p className="text-xs text-gray-500">Tracking info sent</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/store"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              Back to Home
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              Questions about your order?
            </p>
            <p className="text-sm text-gray-600">
              Contact us at{' '}
              <a href="mailto:support@prodigycomics.com" className="text-blue-600 hover:underline">
                support@prodigycomics.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 