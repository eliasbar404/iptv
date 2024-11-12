"use client"
import { Check, Tv, Film, Crown, Smartphone } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '9.99',
    period: 'month',
    description: 'Perfect for casual streaming',
    icon: Smartphone,
    features: [
      'HD streaming quality',
      'Watch on 1 device',
      'Access to basic content library',
      'Ad-supported streaming',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: '14.99',
    period: 'month',
    description: 'Most popular choice',
    icon: Film,
    features: [
      'Full HD streaming quality',
      'Watch on 3 devices',
      'Full content library access',
      'Ad-free experience',
      'Priority support',
      'Download for offline viewing',
    ],
    popular: true,
  },
  {
    name: 'Ultimate',
    price: '19.99',
    period: 'month',
    description: 'Ultimate entertainment',
    icon: Crown,
    features: [
      '4K Ultra HD + HDR',
      'Watch on 5 devices',
      'Exclusive premieres',
      'Early access to shows',
      '24/7 Premium support',
      'Family sharing',
      'Custom profiles',
    ],
    popular: false,
  },
];

const SubscriptionPlans = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black mb-4 text-indigo-900">Choose Your Plan</h2>
        <p className="text-indigo-500 max-w-2xl mx-auto font-bold">
          Select the perfect streaming experience. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl ${
              plan.popular
                ? 'bg-gradient-to-br from-indigo-900/90 to-purple-900/90 ring-2 ring-purple-400 transform scale-105'
                : 'bg-gray-900/90'
            } p-8 transition-all hover:transform hover:scale-[1.02]`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </span>
              </div>
            )}

            <div className="flex items-center justify-center mb-6">
              <plan.icon className={`w-12 h-12 ${
                plan.popular ? 'text-purple-400' : 'text-gray-400'
              }`} />
            </div>

            <h3 className="text-xl font-bold text-white text-center mb-2">{plan.name}</h3>
            <p className="text-gray-300 text-center text-sm mb-6">{plan.description}</p>

            <div className="text-center mb-6">
              <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ${plan.price}
              </span>
              <span className="text-gray-400">/{plan.period}</span>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 px-6 rounded-xl font-medium transition-all ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800 hover:bg-gray-700 text-white'
              }`}
            >
              Start Free Trial
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center space-y-4">
        <p className="text-indigo-900 text-sm">
          All plans include a 7-day free trial. Cancel anytime. No commitments.
        </p>
        <div className="flex items-center justify-center space-x-8">
          <div className="flex items-center text-indigo-500 text-sm">
            <Tv className="w-5 h-5 mr-2" />
            <span>Smart TV Support</span>
          </div>
          <div className="flex items-center text-indigo-500 text-sm">
            <Smartphone className="w-5 h-5 mr-2" />
            <span>Mobile & Tablet</span>
          </div>
          <div className="flex items-center text-indigo-500 text-sm">
            <Film className="w-5 h-5 mr-2" />
            <span>Unlimited Content</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;