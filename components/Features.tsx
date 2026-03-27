import { 
  SparklesIcon, 
  ChartBarIcon, 
  CogIcon, 
  RocketLaunchIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: SparklesIcon,
    title: 'AI Product Descriptions',
    description: 'Generate compelling, SEO-optimized product descriptions that convert browsers into buyers with our advanced AI technology.',
    benefits: ['Increase conversion rates', 'Save 10+ hours per week', 'SEO optimized content']
  },
  {
    icon: ChartBarIcon,
    title: 'Content Performance Tracking',
    description: 'Monitor which product descriptions drive the most sales with detailed analytics and A/B testing capabilities.',
    benefits: ['Real-time analytics', 'A/B testing tools', 'ROI tracking']
  },
  {
    icon: CogIcon,
    title: 'Automated Content Optimization',
    description: 'Our AI continuously optimizes your product content based on performance data to maximize your sales potential.',
    benefits: ['Auto-optimization', 'Smart recommendations', 'Continuous improvement']
  },
  {
    icon: RocketLaunchIcon,
    title: 'Sales Acceleration',
    description: 'Boost your dropshipping revenue by up to 300% with AI-powered content that speaks directly to your target audience.',
    benefits: ['300% sales increase', 'Better targeting', 'Higher engagement']
  },
  {
    icon: DocumentTextIcon,
    title: 'Multi-Platform Content',
    description: 'Create content optimized for Shopify, Amazon, eBay, Facebook, and other platforms with platform-specific formatting.',
    benefits: ['Multi-platform support', 'Auto-formatting', 'Consistent branding']
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Trend Analysis',
    description: 'Stay ahead of market trends with AI-powered insights that identify winning products and content strategies.',
    benefits: ['Trend identification', 'Market insights', 'Competitive analysis']
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            <SparklesIcon className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Dominate Dropshipping</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI tools helps dropshippers create high-converting content, 
            track performance, and optimize for maximum sales.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Benefits List */}
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Dropshipping Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful dropshippers who are already using ContentBoost AI 
              to skyrocket their sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}