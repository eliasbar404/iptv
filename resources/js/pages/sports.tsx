import { Play, Calendar , Timer } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';

const liveEvents = [
  {
    id: 1,
    title: "Premier League: Arsenal vs Liverpool",
    type: "Soccer",
    time: "Live",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "NBA: Lakers vs Warriors",
    type: "Basketball",
    time: "Live",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&auto=format&fit=crop&q=60"
  },
  // Add more live events
];

const upcomingEvents = [
  {
    id: 1,
    title: "F1 Grand Prix Monaco",
    type: "Racing",
    date: "Tomorrow, 14:00",
    image: "https://images.unsplash.com/photo-1515719881716-9fdd4021aa32?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "UFC 300: Main Event",
    type: "MMA",
    date: "Sat, 22:00",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&auto=format&fit=crop&q=60"
  },
  // Add more upcoming events
];

const categories = [
  { name: "Soccer", icon: "⚽️" },
  { name: "Basketball", icon: "🏀" },
  { name: "Tennis", icon: "🎾" },
  { name: "Football", icon: "🏈" },
  { name: "Baseball", icon: "⚾️" },
  { name: "Racing", icon: "🏎" },
  { name: "Boxing", icon: "🥊" },
  { name: "Golf", icon: "⛳️" }
];

export default function Sports() {
  return (
    <div>
      <Header/>

      <Head title="Sports">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link rel="icon" type="image/png" href="../../../public/MyStream-TV.ico" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
      <main>
      <div className="min-h-screen bg-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Sports</h1>
          <p className="text-gray-400 text-lg">Watch live sports events from around the world.</p>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto space-x-4 mb-8 pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex-shrink-0 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-colors"
            >
              <span className="text-2xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Event */}
        <div className="relative rounded-xl overflow-hidden mb-12 group">
           
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&auto=format&fit=crop&q=80" 
            alt="Featured event"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 flex items-end">
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  LIVE
                </span>
                <span className="text-white/80">Premier League</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Arsenal vs Liverpool</h2>
              <p className="text-gray-300 mb-6">A crucial match that could decide the Premier League title race.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                <Play className="w-5 h-5" />
                <span>Watch Live</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Now Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Timer className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Live Now</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveEvents.map((event) => (
              <div key={event.id} className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                 
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      LIVE
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <span className="text-gray-400">{event.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Calendar className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <span>{event.type}</span>
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

      </main>
      <Footer/>
    </div>

  );
}