import { Play, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';

const channels = [
  {
    id: 1,
    name: "News 24/7",
    currentShow: "Breaking News Coverage",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&auto=format&fit=crop&q=60",
    live: true
  },
  {
    id: 2,
    name: "Sports Plus",
    currentShow: "Premier League Live",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=60",
    live: true
  },
  {
    id: 3,
    name: "Entertainment One",
    currentShow: "Celebrity Talk Show",
    image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?w=800&auto=format&fit=crop&q=60",
    live: false
  },
  {
    id: 4,
    name: "Documentary World",
    currentShow: "Wild Africa",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60",
    live: true
  },
  {
    id: 5,
    name: "Movie Central",
    currentShow: "Classic Cinema Hour",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60",
    live: true
  },
  {
    id: 6,
    name: "Lifestyle Network",
    currentShow: "Cooking Masters",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=60",
    live: false
  }
];

export default function LiveTV() {
  return (

    <div>
      <Header/>

      <Head title="Live TV">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link rel="icon" type="image/png" href="../../../public/MyStream-TV.ico" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
      <main>
      <div className="min-h-screen bg-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Live TV</h1>
          <p className="text-gray-400 text-lg">Watch your favorite channels live, anytime, anywhere.</p>
        </div>

        {/* Featured Channel */}
        <div className="relative rounded-xl overflow-hidden mb-12 group">
           
          <img 
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1600&auto=format&fit=crop&q=80" 
            alt="Featured channel"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 flex items-end">
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  LIVE
                </span>
                <span className="text-white/80">News 24/7</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Breaking News Coverage</h2>
              <p className="text-gray-300 mb-6 max-w-2xl">Stay updated with the latest breaking news and current events from around the world, delivered 24/7 by our expert news team.</p>
              <div className="flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                  <Play className="w-5 h-5" />
                  <span>Watch Now</span>
                </button>
                <button className="bg-gray-800/80 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                  <Info className="w-5 h-5" />
                  <span>More Info</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel) => (
            <div key={channel.id} className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                
                <img 
                  src={channel.image} 
                  alt={channel.name}
                  className="w-full h-48 object-cover"
                />
                {channel.live && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      LIVE
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Play className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{channel.name}</h3>
                <p className="text-gray-400">{channel.currentShow}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </main>
      <Footer/>
    </div>

  );
}