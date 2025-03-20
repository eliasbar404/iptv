import { useState } from 'react';
import { Play, Star, Clock, Filter } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';

const movies = [
  {
    id: 1,
    title: "The Dark Knight",
    genre: "Action",
    rating: 4.9,
    duration: "2h 32m",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&auto=format&fit=crop&q=60",
    year: 2022
  },
  {
    id: 2,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 4.8,
    duration: "2h 28m",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60",
    year: 2023
  },
  {
    id: 3,
    title: "The Godfather",
    genre: "Drama",
    rating: 4.9,
    duration: "2h 55m",
    image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=800&auto=format&fit=crop&q=60",
    year: 2021
  },
  // Add more movies as needed
];

const genres = ["All", "Action", "Adventure", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller"];

export default function Movies() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  return (

    <div>
      <Header/>
      <Head title="Movies">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link rel="icon" type="image/png" href="../../../public/MyStream-TV.ico" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
      <main>
      <div className="min-h-screen bg-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Movies</h1>
            <p className="text-gray-400 text-lg">Discover the latest blockbusters and timeless classics.</p>
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="bg-gray-800 p-3 rounded-lg text-white hover:bg-gray-700 transition-colors"
          >
            <Filter className="w-6 h-6" />
          </button>
        </div>

        {/* Filters */}
        <div className={`bg-gray-800 rounded-xl p-6 mb-8 transition-all duration-300 ${showFilters ? 'block' : 'hidden'}`}>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  selectedGenre === genre
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Movie */}
        <div className="relative rounded-xl overflow-hidden mb-12 group">
         
          <img 
            src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1600&auto=format&fit=crop&q=80" 
            alt="Featured movie"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 flex items-end">
            <div className="p-8">
              <h2 className="text-4xl font-bold text-white mb-4">Avatar: The Way of Water</h2>
              <div className="flex items-center space-x-4 text-gray-300 mb-6">
                <span className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" />
                  4.9
                </span>
                <span>2023</span>
                <span className="flex items-center">
                  <Clock className="w-5 h-5 mr-1" />
                  3h 12m
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded-full">Sci-Fi</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl">
                Return to Pandora in this epic adventure. Jake Sully and Neytiri have formed a family and are doing everything to stay together.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                <Play className="w-5 h-5" />
                <span>Watch Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative">
               
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Play className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{movie.title}</h3>
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <span className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                    {movie.rating}
                  </span>
                  <span>{movie.duration}</span>
                  <span>{movie.year}</span>
                </div>
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