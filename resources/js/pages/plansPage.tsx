import { useState } from 'react';
import { Check, Crown, Tv, Zap, Shield, Clock, ArrowRight, Star } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';


const plans = [
  {
    name: 'Basic',
    price: 9.99,
    icon: Tv,
    description: 'Perfect for casual viewers',
    features: [
      'Access to 50+ channels',
      'HD streaming quality',
      'Watch on 1 device',
      '7-day replay',
      'Basic support'
    ],
    popular: false,
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Premium',
    price: 19.99,
    icon: Crown,
    description: 'Most popular choice',
    features: [
      'Access to 150+ channels',
      'Full HD streaming quality',
      'Watch on 3 devices',
      '30-day replay',
      'Priority support',
      'No ads',
      'Download for offline'
    ],
    popular: true,
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    name: 'Ultimate',
    price: 29.99,
    icon: Zap,
    description: 'For the whole family',
    features: [
      'Access to 300+ channels',
      '4K Ultra HD quality',
      'Watch on 5 devices',
      '90-day replay',
      '24/7 premium support',
      'No ads',
      'Download for offline',
      'Exclusive content'
    ],
    popular: false,
    gradient: 'from-pink-500 to-purple-500'
  }
];

const benefits = [
  { icon: Shield, title: 'Secure Streaming', description: 'End-to-end encrypted connection' },
  { icon: Clock, title: 'Watch Anytime', description: 'On-demand content available 24/7' },
  { icon: Star, title: 'Premium Content', description: 'Access to exclusive shows' }
];

export default function PlansPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const discount = 0.2; // 20% discount for annual billing

  return (
    <div>
      <Header/>

      <Head title="Plans">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link rel="icon" type="image/png" href="../../../public/MyStream-TV.ico" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
      <main>
      <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-0" />
          <div className="absolute inset-0 backdrop-blur-3xl z-0" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
              <span className="text-white">Choose the Perfect Plan for You</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Unlock Premium Entertainment
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Select the plan that best fits your viewing habits. All plans include a 7-day free trial.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800/50 backdrop-blur-lg p-1 rounded-xl inline-flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Annual
                <span className="ml-2 text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              const price = billingCycle === 'annual' 
                ? (plan.price * (1 - discount) * 12).toFixed(2)
                : plan.price.toFixed(2);

              return (
                <div
                  key={plan.name}
                  className={`relative group bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                    plan.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${plan.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-extrabold text-white">${price}</span>
                    <span className="text-gray-400 ml-2">/{billingCycle === 'annual' ? 'year' : 'month'}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-5">
                          <Check className="h-5 w-5 text-green-400" />
                        </div>
                        <span className="ml-3 text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`group relative w-full inline-flex items-center justify-center overflow-hidden rounded-xl p-0.5 transition-all hover:scale-105 ${
                      plan.popular ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-gray-700 to-gray-600'
                    }`}
                  >
                    <span className="relative flex items-center justify-center space-x-2 rounded-xl bg-gray-900 px-8 py-4 w-full transition-all group-hover:bg-opacity-0">
                      <span className="text-white font-semibold">Get Started</span>
                      <ArrowRight className="w-5 h-5 text-white" />
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={benefit.title} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">
              Join millions of satisfied customers worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="w-5 h-5" />
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-5 h-5" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Star className="w-5 h-5" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </main>
      <Footer/>
    </div>

  );
}