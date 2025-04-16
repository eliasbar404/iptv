
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Monitor, Rocket, Smartphone } from 'lucide-react';
import { Check, Users, User } from 'lucide-react';
import { ShoppingCart, User2, PlayCircle } from 'lucide-react';
import { Star} from 'lucide-react';
import { Play, Tv2, Shield } from 'lucide-react';
import { Medal, Headphones, Wifi, Settings2 } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

import WhatsAppButton from '@/components/WhatsAppButton';

import WhatsappImage from "../../../public/whatsapp.png"



import backgroundImage from '../../../public/images/premer-league-backgroound image.png';
import { Head } from '@inertiajs/react';

const altpage = () => {
    return (
    <div>
          
        <Head title="MyStreamUK - Home">
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        </Head>

        <Header/>
        <FirstCom/>
        <SecondCom/>
        <PricingSection/>
        <TheredCom/>
        <Review/>
        <FrouthCom/>
        <FifthCom/>
        <WhatsAppButton/>
        <Footer/>
    </div>
    )
}

export default altpage




const FirstCom = () =>{
    return (
        <div className="min-h-screen bg-white mt-16">
        {/* Hero Section */}
        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/90 to-blue-600/90"></div>
          </div>
  
          {/* Hero Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center h-full text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                We Offer the Most Reliable IPTV Service<br />
                <span className="text-3xl md:text-5xl">Proudly Based in the UK!</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Best IPTV Subscription: Enjoy top-tier IPTV service with 4K quality on any
                device, anytime, with 30,000+ channels, 150,000+ VOD, and 99.9% uptime.
              </p>
              <div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
24H Free Trial - No Payment Required
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  <Monitor className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Premium Live Channels</h3>
                <p className="text-gray-600">
                  Get over 30,000+ live TV channels with our IPTV subscription, including sports, news, and top TV shows. Enjoy diverse programming and exclusive content.
                </p>
              </div>
  
              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  <Rocket className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Buffer-Free Experience</h3>
                <p className="text-gray-600">
                  With our fast and dependable servers, you'll enjoy a guaranteed buffer-free experience!
                </p>
              </div>
  
              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  <Smartphone className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Works on All Devices</h3>
                <p className="text-gray-600">
                  Our IPTV subscription works on all devices: Smart TVs, Android, Apple, Fire Stick, KODI, and MAG Box. We support them all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}




const SecondCom = ()=>{
    const movies = [
        {
          title: "UEFA Champions League",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnoQ_xN7gL2l3RO9qM2WKoNVE2RhubZmkag&s"
        },
        {
          title: "Peaky Blinders",
          image: "https://m.media-amazon.com/images/M/MV5BM2ZiNThlNzItNmY3Ny00NjA2LWJlMjItNTk1NDI3MDMyMTk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
          title: "NBA",
          image: "https://www.muraldecal.com/en/img/asfs355-jpg/folder/products-listado-merchant/stickers-nba.jpg"
        },
        {
          title: "Vikings",
          image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9155926_b_v10_au.jpg"
        },
        {
          title: "WWE",
          image: "https://cdn.britannica.com/05/241905-050-494EA022/WWE-wrestler-Roman-Reigns-at-Universal-Championship-Match-Texas-2023.jpg"
        },
        {
          title: "UEFA Europa League",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFAAyqQ7IrI-zepkYPep7jPE-vl794rLk0iQ&s"
        }
      ];
      
      const channels = [
        { name: 'Hulu', logo: 'data:image/png;base64,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' },
        { name: 'Disney+', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
        { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
        { name: 'HBO Max', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' },
        { name: 'ITV', logo: 'data:image/png;base64,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' },
        { name: 'BBC Two', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/BBC_Two_logo_2021.svg/1200px-BBC_Two_logo_2021.svg.png' },
        { name: 'BBC One', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/BBC_One_logo_2021.svg/1200px-BBC_One_logo_2021.svg.png' },
        { name: 'Film4', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Film4_logo_2018.svg/1200px-Film4_logo_2018.svg.png' },
        { name: 'BBC News', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png' }
      ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= movies.length - 4 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? movies.length - 4 : prevIndex - 1
      );
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
    return (
        <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Navigate & Enjoy<br />
              More Than 30 000+ Channels
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At TVBOXUK, we pride ourselves on delivering the most reliable
              and stable IPTV service available in the UK. Our top priority is
              ensuring that your viewing experience is seamless,
              uninterrupted, and always at its best. Whether you're watching
              live TV, sports, movies, or series, you can count on us for
              crystal-clear streaming with zero buffering.
            </p>
          </div>
  
          {/* Streaming Services Logos */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mb-16">
            {channels.map((channel, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <img 
                  src={channel.logo} 
                  alt={channel.name}
                  className="h-8 md:h-10 object-contain"
                />
              </div>
            ))}
          </div>
  
          {/* Movie Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
              >
                {movies.map((movie, index) => (
                  <div 
                    key={index}
                    className="w-1/4 flex-shrink-0 px-2"
                  >
                    <div className="relative group">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-[400px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end">
                        <p className="text-white p-4 text-lg font-semibold">{movie.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    )
}














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

const PricingSection = ()=> {
  const [isFamilyPlan, setIsFamilyPlan] = useState(false);
  const plans = isFamilyPlan ? familyPlans : singleDevicePlans;

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Select Your IPTV Subscription Plan<br />
            <span className="text-xl font-normal">Delivered Instantly!</span>
          </h2>
          <p className="text-gray-600">
            Enjoy the ultimate IPTV experience in the UK with our Premium IPTV packages!
          </p>

          {/* Plan Types */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setIsFamilyPlan(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                !isFamilyPlan
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <User className="w-5 h-5" />
              <span>Single Device</span>
            </button>
            <button
              onClick={() => setIsFamilyPlan(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                isFamilyPlan
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Family Plan</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                plan.bestValue ? 'border-2 border-blue-600' : 'border border-gray-200'
              }`}
            >
              {plan.bestValue && (
                <div className="bg-blue-600 text-white text-center py-1 text-sm">
                  Best Value
                </div>
              )}
              <div className="p-6">
                <div className="text-center mb-4">
                  {isFamilyPlan && (
                    <h3 className="text-lg font-semibold text-blue-600">{plan.devices}</h3>
                  )}
                  <h4 className="text-sm text-gray-600">{plan.duration}</h4>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">£{plan.price}</span>
                    <span className="text-gray-500 line-through ml-2">£{plan.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">One Time Payment</p>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className={`w-full mt-6 py-2 px-4 rounded-full font-medium transition-colors ${
                    plan.bestValue
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Order Now!
                </button>

                <div className="text-center mt-4">
                  <p className="text-xs text-gray-500">7 days money back guarantee!</p>
                  {isFamilyPlan && (
                    <p className="text-xs text-orange-500 mt-1">Fast Fiber included</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}









const TheredCom = ()=>{

    return(
        <div className="min-h-screen bg-blue-600 flex items-center justify-center p-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text and Steps */}
            <div className="text-white space-y-8 pt-24">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold">
                  3 Simple Steps to Enjoy Our<br />
                  IPTV Subscription
                </h1>
                <p className="text-white/90">
                  We will guide you through the installation process until you
                  have full access to our premium IPTV subscription.
                </p>
              </div>
  
              <button className="bg-black text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-black/80 transition-colors">
                <span>Pick a Plan</span>
              </button>


                        {/* TV Image */}
          <div className="mt-12 flex justify-center">
            <img 
              src="https://tvboxuk.com/wp-content/uploads/2024/08/tv.webp"
              alt="Smart TV Interface"
              className="w-full max-w-2xl rounded-lg shadow-2xl"
            />
          </div>
            </div>
  
            {/* Right side - Cards */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <ShoppingCart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Place an order</h3>
                    <p className="text-gray-600">
                      Place your order by selecting your preferred subscription period.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Step 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <User2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Get your account</h3>
                    <p className="text-gray-600">
                      Once you have made the payment, you'll receive your login details via WhatsApp with your login details within 30 minutes to 1 hour.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Step 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <PlayCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Enjoy watching</h3>
                    <p className="text-gray-600">
                      Enjoy all channels, movies, and series with our IPTV subscription! Watch the latest movies, TV shows, and series.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  

        </div>
      </div>
    )
}




const Review = ()=>{
    const reviews = [
        {
          id: 1,
          name: "Sarah Johnson",
          date: "Jan 28, 2024",
          rating: 5,
          text: "I've tried a few IPTV services before, and this one stands out. The streaming quality is excellent, and the channel selection is impressive. Highly recommended!"
        },
        {
          id: 2,
          name: "Michael Brown",
          date: "Jan 27, 2024",
          rating: 5,
          text: "Honestly, I was a bit skeptical, but wow! The IPTV is actually good. I've got all my UK channels working perfectly, and the movies are a bonus. Worth it!"
        },
        {
          id: 3,
          name: "Emma Wilson",
          date: "Jan 26, 2024",
          rating: 5,
          text: "I've brought 45 friends and family to them. Everything works flawlessly. Been using their service for over a year now, never had any issues!"
        },
        {
          id: 4,
          name: "David Lee",
          date: "Jan 25, 2024",
          rating: 5,
          text: "Best IPTV service I've used. The picture quality is amazing and customer support is always helpful. No buffering issues at all!"
        },
        {
          id: 5,
          name: "Lisa Anderson",
          date: "Jan 24, 2024",
          rating: 5,
          text: "Great selection of channels and very stable connection. The VOD library is extensive and regularly updated. Excellent value!"
        },
        {
          id: 6,
          name: "James Wilson",
          date: "Jan 23, 2024",
          rating: 5,
          text: "Setup was a breeze and the service works perfectly on all my devices. The channel quality is superb!"
        },
        {
          id: 7,
          name: "Rachel Martinez",
          date: "Jan 22, 2024",
          rating: 5,
          text: "Customer service is outstanding. They helped me set everything up and are always quick to respond to questions."
        },
        {
          id: 8,
          name: "Thomas Clark",
          date: "Jan 21, 2024",
          rating: 5,
          text: "Very reliable service with great picture quality. Haven't had any major issues in months of use."
        },
        {
          id: 9,
          name: "Emily White",
          date: "Jan 20, 2024",
          rating: 5,
          text: "The variety of channels is amazing. I can watch all my favorite shows and sports events without any problems."
        },
        {
          id: 10,
          name: "Daniel Taylor",
          date: "Jan 19, 2024",
          rating: 5,
          text: "Excellent service! The streaming quality is consistently good and the channel selection is vast."
        }
      ];
      
      // Mock data for WhatsApp conversations
      const whatsappChats = [
        {
          id: 1,
          messages: [
            { sender: 'user', text: "Hi, I want to get the IPTV subscription" },
            { sender: 'admin', text: "Hello! Thank you for reaching out! 😊" },
            { sender: 'admin', text: "I'll help you get set up with a subscription" },
          ]
        },
        {
          id: 2,
          messages: [
            { sender: 'user', text: "Payment sent!" },
            { sender: 'admin', text: "Great! You'll receive your login details shortly 👍" },
            { sender: 'user', text: "Thank you!" },
          ]
        },
        {
          id: 3,
          messages: [
            { sender: 'user', text: "How do I install on my Smart TV?" },
            { sender: 'admin', text: "I'll send you a detailed guide with screenshots 📱" },
            { sender: 'user', text: "Perfect, thanks!" },
          ]
        },
        {
          id: 4,
          messages: [
            { sender: 'user', text: "Can I use this service abroad?" },
            { sender: 'admin', text: "Yes, our service works worldwide! 🌍" },
            { sender: 'user', text: "That's exactly what I needed!" },
          ]
        },
        {
          id: 5,
          messages: [
            { sender: 'user', text: "Do you have Spanish channels?" },
            { sender: 'admin', text: "Yes! We have a full Spanish package 🇪🇸" },
            { sender: 'user', text: "Excellent!" },
          ]
        },
        {
          id: 6,
          messages: [
            { sender: 'user', text: "Is there a channel list?" },
            { sender: 'admin', text: "I'll send you our complete channel list 📺" },
            { sender: 'user', text: "Looking forward to it!" },
          ]
        },
        {
          id: 7,
          messages: [
            { sender: 'user', text: "How many devices can I use?" },
            { sender: 'admin', text: "You can use up to 4 devices simultaneously 📱" },
            { sender: 'user', text: "Perfect for my family!" },
          ]
        },
        {
          id: 8,
          messages: [
            { sender: 'user', text: "Do you have 4K channels?" },
            { sender: 'admin', text: "Yes! Many of our premium channels are in 4K 🎥" },
            { sender: 'user', text: "Amazing quality!" },
          ]
        }
      ];



    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [currentChatIndex, setCurrentChatIndex] = useState(0);
  
    // Auto-slide functionality
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentReviewIndex((prev) => (prev + 4) % reviews.length);
        setCurrentChatIndex((prev) => (prev + 4) % whatsappChats.length);
      }, 5000); // Change slide every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    const nextReview = () => {
      setCurrentReviewIndex((prev) => (prev + 4) % reviews.length);
    };
  
    const prevReview = () => {
      setCurrentReviewIndex((prev) => (prev - 4 + reviews.length) % reviews.length);
    };
  
    const nextChat = () => {
      setCurrentChatIndex((prev) => (prev + 4) % whatsappChats.length);
    };
  
    const prevChat = () => {
      setCurrentChatIndex((prev) => (prev - 4 + whatsappChats.length) % whatsappChats.length);
    };
  
    const getVisibleReviews = () => {
      const visibleReviews = [];
      for (let i = 0; i < 4; i++) {
        const index = (currentReviewIndex + i) % reviews.length;
        visibleReviews.push(reviews[index]);
      }
      return visibleReviews;
    };
  
    const getVisibleChats = () => {
      const visibleChats = [];
      for (let i = 0; i < 4; i++) {
        const index = (currentChatIndex + i) % whatsappChats.length;
        visibleChats.push(whatsappChats[index]);
      }
      return visibleChats;
    };
    return(
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Hear It From Our Clients
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              See what our clients say about our IPTV subscription service
            </p>
            <div className="flex justify-center items-center mt-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-green-500 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">rated excellent on Trustpilot</span>
            </div>
          </div>
  
          {/* Reviews Section */}
          <div className="relative mb-16">
            <div className="overflow-hidden">
              <div className="relative">
                <button 
                  onClick={prevReview}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-12">
                  {getVisibleReviews().map((review, index) => (
                    <div 
                      key={`${review.id}-${index}`}
                      className="bg-white p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
                    >
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            {review.name.charAt(0)}
                          </div>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-semibold">{review.name}</h4>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-4">{review.text}</p>
                      <span className="mt-2 text-xs text-gray-500 block">{review.date}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={nextReview}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
  
          {/* WhatsApp Conversations */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="relative">
                <button 
                  onClick={prevChat}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-12">
                  {getVisibleChats().map((chat, index) => (
                    <div 
                      key={`${chat.id}-${index}`}
                      className="bg-[#111b21] p-4 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
                    >
                      <div className="space-y-3">
                        {chat.messages.map((message, idx) => (
                          <div
                            key={idx}
                            className={`flex ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`rounded-lg px-3 py-2 text-sm max-w-[85%] ${
                                message.sender === 'admin'
                                  ? 'bg-[#005c4b] text-white'
                                  : 'bg-[#202c33] text-white'
                              }`}
                            >
                              {message.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={nextChat}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}




const FrouthCom = ()=>{

    return(
        <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80"
            alt="TV Entertainment"
            className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-2xl"
          />
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Enjoy Your IPTV Subscription
                <span className="block text-gray-800">Starting from £12.99</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Get a 1-month IPTV subscription and experience premium streaming risk-free with no commitment!
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto lg:mx-0">
                <Play className="w-5 h-5 mr-2" />
                Pick a Plan
              </button>
            </div>
          </div>
        </div>
  
        {/* Stats Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Trusted by countless users!</h2>
              <p className="text-gray-600">
                Join thousands of satisfied customers who trust us for their IPTV needs.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-gray-600 mb-2">Years in Business</p>
                    <p className="text-4xl font-bold text-blue-600">+2</p>
                  </div>
                  <Shield className="w-12 h-12 text-blue-600" />
                </div>
                <p className="text-gray-600">
                  With our reliable service, you'll never miss a beat. Whether you're binge-watching or catching up on your favorite shows.
                </p>
              </div>
  
              <div className="bg-white rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-gray-600 mb-2">Active Users</p>
                    <p className="text-4xl font-bold text-purple-600">+3450</p>
                  </div>
                  <Users className="w-12 h-12 text-purple-600" />
                </div>
                <p className="text-gray-600">
                  Join our growing community of satisfied users enjoying premium content worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80"
                  alt="TV App Interface"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-4 flex-wrap">
                    {['Netflix', 'Prime', 'Disney+', 'HBO'].map((platform) => (
                      <div key={platform} className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-800 font-medium">
                        {platform}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
  
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">We're all about reliability</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Tv2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Premium Quality Streaming</h3>
                      <p className="text-gray-600">
                        We understand how frustrating buffering and lag can be. With our IPTV service, you'll never have to worry about missed moments or interrupted streaming.
                      </p>
                    </div>
                  </div>
  
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">24/7 Support</h3>
                      <p className="text-gray-600">
                        We're committed to providing consistent quality, day in and day out. Our support team is always here to help.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Why TVBOXUK Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why MyStream-TV?</h2>
              <p className="text-xl text-gray-600">
                Experience the ultimate British IPTV subscription with top channels and movies in the UK!
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 4K UHD Quality */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4K UHD Quality</h3>
                <p className="text-gray-600">
                  Our channels offer a range of quality options from FHD to UHD and even 4K, ensuring you experience the best performance your device can handle.
                </p>
              </div>
  
              {/* Satisfaction Guarantee */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Medal className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Satisfaction Guarantee</h3>
                <p className="text-gray-600">
                  We aim for your complete satisfaction with our top-quality service at the best price.
                </p>
              </div>
  
              {/* Online Support */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Headphones className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Online Support</h3>
                <p className="text-gray-600">
                  Unlike other providers, we offer reliable support from 9 AM to 11 PM (UK time) through WhatsApp.
                </p>
              </div>
  
              {/* Buffer-Free Experience */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Wifi className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Buffer-Free Experience</h3>
                <p className="text-gray-600">
                  Our IPTV subscription features advanced technology that lets you watch your favorite channels without freezing or buffering.
                </p>
              </div>
  
              {/* Easy Setup */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Settings2 className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Setup</h3>
                <p className="text-gray-600">
                  We'll guide you through the installation process to ensure full access. Enjoy seamless use of our premium IPTV subscription.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}




const FifthCom = ()=>{

    const faqs = [
        {
          question: "How will I receive my subscription?",
          answer: "Once you have made the payment, you'll receive your login details via WhatsApp with your login details within 30 minutes to 1 hour."
        },
        {
          question: "What types of channels are available with your service?",
          answer: "We provide over 30,000 live channels from across the globe, including your favorite sports, news, and movie channels from the UK and the US. Finding what you want is simple with our well-organized categories by type and location.\n\n(You can tailor your package to fit your needs! Just reach out to us via email or WhatsApp.)"
        },
        {
          question: "Available payment methods?",
          answer: "- Bank Transfer - Cryptocurrency"
        },
        {
          question: "How long does it take to set up IPTV on my device?",
          answer: "Our easy-to-follow step-by-step guides ensure setup in just 5-10 minutes. Plus, we're always available on WhatsApp to help with any issues you might face."
        },
        {
          question: "Do you sell physical products?",
          answer: "No, we do not sell physical products. We provide IPTV subscription credentials that you can use on your Smart TV, Firestick, or MAG device."
        }
      ];
    return(
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {/* FAQ Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="font-semibold text-base mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Contact Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
              <img src={WhatsappImage} alt=""  />
            </div>
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-1">Still have a question?</p>
            <p className="text-gray-600 mb-6">Don't hesitate to send us a message.</p>
            <button className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Get in Touch
            </button>
          </div>
        </div>
      </div>

    )
}