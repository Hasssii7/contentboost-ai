'use client';

import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, plan: 'free-trial' }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
        setIsSuccess(true);
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Network error. Please check your connection and try again.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-indigo-600/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 border border-blue-100">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
          AI-Powered Dropshipping Content
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Boost Your Dropshipping Sales with{' '}
          <span className="gradient-text">AI Content</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Generate high-converting product descriptions, track content performance, and optimize your store with AI-powered insights that increase conversions by up to 300%.
        </p>
        
        {/* Email Signup Form */}
        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSubscribe} className="flex gap-4 mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              required
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !email}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-lg"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Start Free Trial
                  <ChevronRightIcon className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
          
          {message && (
            <div className={`p-4 rounded-lg text-sm font-medium ${
              isSuccess 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {message}
            </div>
          )}
        </div>
        
        {/* Trust Signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            14-day free trial
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}