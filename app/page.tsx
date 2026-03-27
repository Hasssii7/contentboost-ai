import Hero from '../components/Hero';
import Features from '../components/Features';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <Features />
      
      {/* Pricing Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start boosting your dropshipping sales with AI-powered content today
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$29<span className="text-lg text-gray-500">/mo</span></div>
                <p className="text-gray-600 mb-6">Perfect for new dropshippers</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-3" />50 AI-generated product descriptions</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-3" />Basic content tracking</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-3" />Email support</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-3" />5 product campaigns</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 shadow-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <div className="text-4xl font-bold text-white mb-4">$79<span className="text-lg text-blue-200">/mo</span></div>
                <p className="text-blue-100 mb-6">For scaling dropship stores</p>
              </div>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-400 mr-3" />500 AI-generated descriptions</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-400 mr-3" />Advanced analytics & tracking</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-400 mr-3" />A/B testing tools</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-400 mr-3" />50 product campaigns</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-400 mr-3" />Priority support</li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Start Free Trial
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">$199<span className="text-lg text-gray-500">/mo</span></div>
                <p className="text-gray-600 mb-6">For enterprise businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-3" />Unlimited AI content</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-3" />Custom integrations</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-3" />White-label solution</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-3" />Unlimited campaigns</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-3" />24/7 phone support</li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">ContentBoost AI</h3>
              <p className="text-gray-300 mb-4">
                The ultimate AI-powered content creation and tracking platform for dropshipping success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ContentBoost AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}