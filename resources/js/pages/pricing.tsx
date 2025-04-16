import React, { useState } from 'react';
import { Globe2, Tv, Users, Shield, PhoneCall, Dice1 as DeviceTv, Award, Zap, Check, User } from 'lucide-react';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';

const singleDevicePlans = [
  {
    duration: '1 Month',
    price: '12.99',
    originalPrice: '15.99',
    features: [
      '30,000+ Live channels',
      '150,000+ movies & series',
      'All Sports Channels',
      'All PPV Events',
      '4K/FHD/HD Quality',
      '99.9% server availability',
      'Support for all devices',
      'No buffering, no freezing',
      'Catch up (Up To 3 Days)',
      'TV Guide EPG',
      'Automatic Updates (Free)',
      'Instant Support 24/7',
      'No Hidden Fees',
      'Stream Codes / M3U / MAG',
      'Instant Service Activation'
    ]
  },
  {
    duration: '3 Months',
    price: '26.99',
    originalPrice: '32.99',
    features: [
      '30,000+ Live channels',
      '150,000+ movies & series',
      'All Sports Channels',
      'All PPV Events',
      '4K/FHD/HD Quality',
      '99.9% server availability',
      'Support for all devices',
      'No buffering, no freezing',
      'Catch up (Up To 3 Days)',
      'TV Guide EPG',
      'Automatic Updates (Free)',
      'Instant Support 24/7',
      'No Hidden Fees',
      'Stream Codes / M3U / MAG',
      'Instant Service Activation'
    ]
  },
  {
    duration: '6 Months',
    price: '35.99',
    originalPrice: '45.99',
    features: [
      '30,000+ Live channels',
      '150,000+ movies & series',
      'All Sports Channels',
      'All PPV Events',
      '4K/FHD/HD Quality',
      '99.9% server availability',
      'Support for all devices',
      'No buffering, no freezing',
      'Catch up (Up To 3 Days)',
      'TV Guide EPG',
      'Automatic Updates (Free)',
      'Instant Support 24/7',
      'No Hidden Fees',
      'Stream Codes / M3U / MAG',
      'Instant Service Activation'
    ]
  },
  {
    duration: '12 Months',
    price: '49.99',
    originalPrice: '69.99',
    features: [
      '30,000+ Live channels',
      '150,000+ movies & series',
      'All Sports Channels',
      'All PPV Events',
      '4K/FHD/HD Quality',
      '99.9% server availability',
      'Support for all devices',
      'No buffering, no freezing',
      'Catch up (Up To 3 Days)',
      'TV Guide EPG',
      'Automatic Updates (Free)',
      'Instant Support 24/7',
      'No Hidden Fees',
      'Stream Codes / M3U / MAG',
      'Instant Service Activation'
    ],
    bestValue: true
  }
];

const familyPlans = [
  {
    duration: '12 Months × 2 Accounts',
    devices: '2 Devices',
    price: '89.99',
    originalPrice: '139.99',
    features: [
      '30,000+ Live channels',
      '150,000+ movies & series',
      'All Sports Channels',
      'All PPV Events',
      '4K/FHD/HD Quality',
      '99.9% server availability',
      'Support for all devices',
      'No buffering, no freezing',
      'Catch up (Up To 3 Days)',
      'TV Guide EPG',
      'Automatic Updates (Free)',
      'Instant Support 24/7',
      'No Hidden Fees',
      'Stream Codes / M3U / MAG',
      'Instant Service Activation'
    ]
  },
  {
    duration: '12 Months × 3 Accounts',
    devices: '3 Devices',
    price: '125.99',
    originalPrice: '209.99',
    features: [
      '30,000+ Live channels',
      '150,000+ movies & series',
      'All Sports Channels',
      'All PPV Events',
      '4K/FHD/HD Quality',
      '99.9% server availability',
      'Support for all devices',
      'No buffering, no freezing',
      'Catch up (Up To 3 Days)',
      'TV Guide EPG',
      'Automatic Updates (Free)',
      'Instant Support 24/7',
      'No Hidden Fees',
      'Stream Codes / M3U / MAG',
      'Instant Service Activation'
    ],
    bestValue: true
  },
  {
    duration: '12 Months × 4 Accounts',
    devices: '4 Devices',
    price: '167.99',
    originalPrice: '279.99',
    features: [
      '30,000+ Live channels',
      '150,000+ movies & series',
      'All Sports Channels',
      'All PPV Events',
      '4K/FHD/HD Quality',
      '99.9% server availability',
      'Support for all devices',
      'No buffering, no freezing',
      'Catch up (Up To 3 Days)',
      'TV Guide EPG',
      'Automatic Updates (Free)',
      'Instant Support 24/7',
      'No Hidden Fees',
      'Stream Codes / M3U / MAG',
      'Instant Service Activation'
    ]
  }
];

function Pricing() {
  const [isFamilyPlan, setIsFamilyPlan] = useState(false);
  const plans = isFamilyPlan ? familyPlans : singleDevicePlans;

  return (
    <div className="min-h-screen bg-white">
        <Header/>
        <WhatsAppButton/>
      {/* Hero Section */}
      <div className="relative h-[300px] mt-12">
        <div className="absolute inset-0">
          <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/029/979/386/small/digital-media-wall-of-screens-a-cinematic-concept-photo.jpeg"
            alt="TV Entertainment"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-white"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Pricing Plans</h1>
            <p className="text-xl text-gray-700">Choose the perfect plan for your entertainment needs</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Select Your IPTV Subscription Plan<br />
              <span className="text-xl font-normal text-gray-600">Delivered Instantly!</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Enjoy the ultimate IPTV experience with our Premium IPTV packages!
            </p>

            {/* Plan Types */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setIsFamilyPlan(false)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  !isFamilyPlan
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Single Device</span>
              </button>
              <button
                onClick={() => setIsFamilyPlan(true)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  isFamilyPlan
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Users className="w-5 h-5" />
                <span className="font-medium">Family Plan</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                  plan.bestValue 
                    ? 'shadow-xl shadow-blue-500/20 ring-2 ring-blue-500' 
                    : 'shadow-lg hover:shadow-xl border border-gray-100'
                }`}
              >
                {plan.bestValue && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                    Best Value
                  </div>
                )}
                <div className="p-6">
                  <div className="text-center mb-6">
                    {isFamilyPlan && (
                      <h3 className="text-lg font-semibold text-blue-500 mb-1">{plan.devices}</h3>
                    )}
                    <h4 className="text-sm text-gray-600 mb-3">{plan.duration}</h4>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-4xl font-bold text-gray-900">£{plan.price}</span>
                      <span className="text-gray-400 line-through">£{plan.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">One Time Payment</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    className={`w-full py-3 px-4 rounded-full font-medium transition-all duration-300 ${
                      plan.bestValue
                        ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30'
                        : 'bg-gray-50 text-gray-800 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    Order Now
                  </button>

                  <div className="text-center mt-4">
                    <p className="text-xs text-gray-500">7 days money back guarantee!</p>
                    {isFamilyPlan && (
                      <p className="text-xs text-orange-500 mt-1 font-medium">Fast Fiber included</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Support Section */}
          <div className="text-center max-w-2xl mx-auto mt-20">
            <div className="text-blue-500 flex justify-center mb-4">
              <PhoneCall className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              Our support team is available 24/7 to assist you with any questions about our plans.
            </p>
            <button className="bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 font-semibold py-3 px-8 rounded-full transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;