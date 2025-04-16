import React from 'react';
import { Globe2, Tv, Users, Shield, PhoneCall, Dice1 as DeviceTv, Award, Zap } from 'lucide-react';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';

function About() {
  return (
    <div className="min-h-screen bg-white">
        <Header/>
        <WhatsAppButton/>
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80"
            alt="TV Broadcasting"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-white"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">About XtreamCube</h1>
            <p className="text-xl text-gray-700">Your Ultimate Solution for Live and On-Demand TV</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            In the modern world of online television, IPTV has become an essential solution for watching live and on-demand TV via the internet. Among the many IPTV service providers, XtreamCube stands out for its quality, reliability, and extensive range of content.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: <Globe2 className="w-8 h-8" />,
              title: "Global Coverage",
              description: "Access to thousands of channels from around the world"
            },
            {
              icon: <Tv className="w-8 h-8" />,
              title: "HD Quality",
              description: "Crystal clear streaming with HD and 4K content"
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Multi-Device",
              description: "Watch on any device, anywhere, anytime"
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Secure & Reliable",
              description: "99.9% uptime with encrypted connections"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-100">
              <div className="text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Compatibility Section */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Compatible Devices</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <DeviceTv className="w-6 h-6" />, title: "Smart TVs", devices: ["Samsung", "LG", "Sony"] },
              { icon: <Zap className="w-6 h-6" />, title: "Streaming Devices", devices: ["Fire TV Stick", "Apple TV", "Android TV Box"] },
              { icon: <Award className="w-6 h-6" />, title: "Other Devices", devices: ["MAG Devices", "Enigma2", "Mobile Apps"] }
            ].map((category, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-500 flex justify-center mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{category.title}</h3>
                <ul className="text-gray-600">
                  {category.devices.map((device, idx) => (
                    <li key={idx} className="mb-2">{device}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-blue-500 flex justify-center mb-4">
            <PhoneCall className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">24/7 Customer Support</h2>
          <p className="text-gray-600 mb-6">
            Our dedicated support team is always here to help you with any questions or concerns.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;