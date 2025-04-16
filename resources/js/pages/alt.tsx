
import { Head, Link} from '@inertiajs/react';
import Header from "@/components/Header"
import Footer from "@/components/Footer";
import WhatsAppButton from '@/components/WhatsAppButton';
import { useState, useEffect } from 'react';
import { Play, Tv, Globe, Dices as Devices, Shield, Zap, ArrowRight, Star, Monitor, Smartphone, Laptop, Award } from 'lucide-react';
import VisitorInfoModal from '../components/VisitorInfoModal';
const features = [
    {
      icon: Globe,
      title: "Global Content",
      description: "Access channels from over 190+ countries worldwide",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Devices,
      title: "Multi-Device Support",
      description: "Watch on your TV, phone, tablet, or computer",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Secure Streaming",
      description: "End-to-end encrypted connection for your privacy",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Ultra-Fast Servers",
      description: "No buffering with our high-speed streaming servers",
      gradient: "from-orange-500 to-red-500"
    }
  ];
  
  const channels = [
    {
      category: "Sports",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=60",
      count: "2000+",
      popular: ["NFL", "NBA", "Premier League", "UFC"]
    },
    {
      category: "Movies",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60",
      count: "5000+",
      popular: ["Action", "Drama", "Comedy", "Horror"]
    },
    {
      category: "News",
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&auto=format&fit=crop&q=60",
      count: "1000+",
      popular: ["CNN", "BBC", "Fox News", "Al Jazeera"]
    },
    {
      category: "Kids",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=60",
      count: "800+",
      popular: ["Disney", "Nickelodeon", "Cartoon Network", "PBS Kids"]
    }
  ];
  
  const devices = [
    { icon: Monitor, name: "Smart TV" },
    { icon: Smartphone, name: "Mobile" },
    { icon: Laptop, name: "Computer" },
    { icon: Tv, name: "Android TV" }
  ];




export default function Welcome() {

    const [activeDevice, setActiveDevice] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
      const interval = setInterval(() => {
        setActiveDevice((prev) => (prev + 1) % devices.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
   

    return (
        <>
            <Head title="Home">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <VisitorInfoModal />
            <WhatsAppButton />

            <div>
      <Header/>

      <main>
      <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-0" />
          <div className="absolute inset-0 backdrop-blur-3xl z-0" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                <span className="text-white">Rated #1 IPTV Service</span>
              </div>
              
              <h1 className="text-6xl font-bold text-white leading-tight">
                Stream Like <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Never Before</span>
              </h1>
              
              <p className="text-xl text-gray-300">
                Experience crystal-clear streaming with 8000+ channels and 50,000+ on-demand content. 
                Your entertainment universe, unlimited and uninterrupted.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/plans" 
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 transition-all hover:scale-105"
                >
                  <span className="relative flex items-center space-x-2 rounded-xl bg-gray-900 px-8 py-4 transition-all group-hover:bg-opacity-0">
                    <span className="text-white">Get Started</span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </span>
                </Link>
                
                <Link
                  href="/live-tv"
                  className="inline-flex items-center justify-center space-x-2 rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-lg px-8 py-4 text-white hover:bg-gray-800 transition-all hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </Link>
              </div>
            </div>

            <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                
               
                <img 
                  src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1600&auto=format&fit=crop&q=80"
                  alt="Streaming Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Live Sports</h3>
                        <p className="text-gray-300">Streaming in 4K HDR</p>
                      </div>
                      <button className="bg-white/20 backdrop-blur-lg p-4 rounded-full hover:bg-white/30 transition-colors">
                        <Play className="w-6 h-6 text-white" fill="currentColor" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full mb-4">
              <Award className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Premium Features</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose StreamTV?</h2>
            <p className="text-xl text-gray-400">Experience streaming excellence with our premium features</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div

                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Channels Section */}
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Extensive Channel Collection</h2>
            <p className="text-xl text-gray-400">Your favorite channels, all in one place</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel) => (
              <div 
                key={channel.category}
                className="group bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="relative h-48">
                 
                  <img 
                    src={channel.image}
                    alt={channel.category}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{channel.category}</h3>
                    <p className="text-blue-400 font-semibold">{channel.count} Channels</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {channel.popular.map((item) => (
                      <span 
                        key={item}
                        className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Devices Section */}
      <div className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Watch Everywhere</h2>
            <p className="text-xl text-gray-400">Stream on your favorite devices</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex space-x-8">
              {devices.map((device, index) => {
                const Icon = device.icon;
                return (
                  <button
                    key={device.name}
                    className={`flex flex-col items-center space-y-2 group ${
                      activeDevice === index ? 'text-blue-400' : 'text-gray-500'
                    }`}
                    onClick={() => setActiveDevice(index)}
                  >
                    <div className={`p-4 rounded-xl transition-all duration-300 ${
                      activeDevice === index ? 'bg-blue-500/10' : 'bg-gray-800'
                    } group-hover:scale-110`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-medium">{device.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Start Streaming?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join millions of satisfied customers worldwide. Get started with our 
              premium IPTV service with a 30-day money-back guarantee.
            </p>
            <Link
              href="/plans"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              <span>Choose Your Plan</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-12 bg-gray-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { icon: Shield, text: "30-Day Money Back" },
              { icon: Zap, text: "24/7 Support" },
              { icon: Globe, text: "Global Coverage" },
              { icon: Devices, text: "Multi-Device Support" }
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center space-x-2 text-gray-400">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <Icon className="w-5 h-5" />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

      </main>
      <Footer/>
    </div>
        
        </>
    );
}
