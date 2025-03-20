import { Play, Star, Clock, BookMarked } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';

const shows = [
  {
    id: 1,
    title: "Breaking Bad",
    genre: "Drama",
    rating: 4.9,
    seasons: 5,
    image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=800&auto=format&fit=crop&q=60",
    progress: 80
  },
  {
    id: 2,
    title: "Stranger Things",
    genre: "Sci-Fi",
    rating: 4.8,
    seasons: 4,
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&auto=format&fit=crop&q=60",
    progress: 60
  },
  {
    id: 3,
    title: "The Crown",
    genre: "Drama",
    rating: 4.7,
    seasons: 5,
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60",
    progress: 40
  },
  // Add more shows as needed
];

const categories = [
  { id: 1, name: "Continue Watching", icon: Clock },
  { id: 2, name: "My List", icon: BookMarked },
  { id: 3, name: "Popular Shows", icon: Star },
];

export default function Shows() {
  return (
    <div>
      <Header/>
      <Head title="Shows">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link rel="icon" type="image/png" href="../../../public/MyStream-TV.ico" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
      <main>
      <div className="min-h-screen bg-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">TV Shows</h1>
          <p className="text-gray-400 text-lg">Binge-worthy series that will keep you hooked.</p>
        </div>

        {/* Featured Show */}
        <div className="relative rounded-xl overflow-hidden mb-12 group">
           
          <img 
            src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1600&auto=format&fit=crop&q=80" 
            alt="Featured show"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 flex items-end">
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  New Episode
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">The Last of Us</h2>
              <div className="flex items-center space-x-4 text-gray-300 mb-6">
                <span className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" />
                  4.9
                </span>
                <span>Season 1</span>
                <span>Drama</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl">
                Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                  <Play className="w-5 h-5" />
                  <span>Watch Now</span>
                </button>
                <button className="bg-gray-800/80 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                  <BookMarked className="w-5 h-5" />
                  <span>Add to My List</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        {categories.map((category) => (
          <div key={category.id} className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <category.icon className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold text-white">{category.name}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shows.map((show) => (
                <div key={show.id} className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    
                    <img 
                      src={show.image} 
                      alt={show.title}
                      className="w-full h-48 object-cover"
                    />
                    {show.progress && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                        <div 
                          className="h-full bg-blue-500"
                          style={{ width: `${show.progress}%` }}
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <Play className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{show.title}</h3>
                    <div className="flex items-center justify-between text-gray-400 text-sm">
                      <span className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                        {show.rating}
                      </span>
                      <span>{show.seasons} Seasons</span>
                      <span>{show.genre}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

      </main>
      <Footer/>
    </div>

  );
}